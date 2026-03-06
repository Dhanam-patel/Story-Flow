import { useMemo, useRef, useState } from "react";
import { normalizeAnalyzePayload } from "../utils/normalizeAnalyzePayload";

export function useStoryFlowStream() {
  const [isStreaming, setIsStreaming] = useState(false);
  const [activeNode, setActiveNode] = useState("");
  const [rawThoughts, setRawThoughts] = useState("");
  const [analysisData, setAnalysisData] = useState(null);
  const [error, setError] = useState("");
  const controllerRef = useRef(null);

  const backendBaseUrl = useMemo(
    () => (import.meta.env.VITE_BACKEND_URL || "http://localhost:8000").replace(/\/$/, ""),
    []
  );

  const stopStream = () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
      controllerRef.current = null;
    }
    setIsStreaming(false);
  };

  const handleEvent = (eventType, dataString) => {
    if (!dataString) {
      return;
    }

    let payload;
    try {
      payload = JSON.parse(dataString);
    } catch {
      return;
    }

    if (eventType === "progress") {
      const node = payload?.node || "";
      const status = payload?.status || "";
      if (node) {
        setActiveNode(status === "completed" ? `${node} (done)` : node);
      }
      return;
    }

    if (eventType === "thinking") {
      const node = payload?.node || "llm";
      const text = payload?.text || "";
      if (text) {
        setRawThoughts((prev) => `${prev}[${node}] ${text}\n\n`);
      }
      return;
    }

    if (eventType === "complete") {
      setAnalysisData(normalizeAnalyzePayload(payload));
      setError("");
      setIsStreaming(false);
      setActiveNode("");
      return;
    }

    if (eventType === "error") {
      setError(payload?.detail || "Backend stream failed.");
      setIsStreaming(false);
      setActiveNode("");
    }
  };

  const processChunk = (chunk, pending) => {
    const combined = (pending + chunk).replace(/\r\n/g, "\n");
    const events = combined.split("\n\n");
    const nextPending = events.pop() || "";

    for (const rawEvent of events) {
      const lines = rawEvent.split("\n");
      let eventType = "message";
      const dataLines = [];

      for (const line of lines) {
        if (line.startsWith("event:")) {
          eventType = line.slice(6).trim();
        } else if (line.startsWith("data:")) {
          dataLines.push(line.slice(5).trim());
        }
      }

      handleEvent(eventType, dataLines.join("\n"));
    }

    return nextPending;
  };

  const startStream = async (formData) => {
    stopStream();

    const controller = new AbortController();
    controllerRef.current = controller;

    setError("");
    setAnalysisData(null);
    setRawThoughts("");
    setActiveNode("Starting analysis...");
    setIsStreaming(true);

    try {
      const response = await fetch(
        `${backendBaseUrl}/episodic-intelligence/analyze/stream`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "text/event-stream",
          },
          body: JSON.stringify(formData),
          signal: controller.signal,
        }
      );

      if (!response.ok || !response.body) {
        throw new Error(`Stream request failed (${response.status})`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let pending = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        pending = processChunk(decoder.decode(value, { stream: true }), pending);
      }

      if (pending.trim().length > 0) {
        processChunk("\n\n", pending);
      }
    } catch (streamError) {
      if (streamError?.name !== "AbortError") {
        setError(
          streamError?.message || "Could not connect to StoryFlow backend."
        );
      }
      setIsStreaming(false);
      setActiveNode("");
    } finally {
      controllerRef.current = null;
    }
  };

  return {
    backendBaseUrl,
    isStreaming,
    activeNode,
    rawThoughts,
    analysisData,
    error,
    startStream,
    stopStream,
  };
}
