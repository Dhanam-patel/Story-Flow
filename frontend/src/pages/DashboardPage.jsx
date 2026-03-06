import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Activity, FileJson, Sparkles } from "lucide-react";
import StoryForm from "../components/StoryForm";
import ResultsDashboard from "../components/ResultsDashboard";
import { mockAnalysisData } from "../mockData";
import { useStoryFlowStream } from "../hooks/useStoryFlowStream";

export default function DashboardPage() {
  const [story_idea, setStoryIdea] = useState(mockAnalysisData.story_idea);
  const [genre, setGenre] = useState("Mystery Thriller");
  const [tone, setTone] = useState("Dark, Suspenseful");
  const [target_audience, setTargetAudience] = useState("18-34 streaming audience");
  const [episode_count_preference, setEpisodeCountPreference] = useState(6);
  const [max_revisions, setMaxRevisions] = useState(3);

  const {
    backendBaseUrl,
    isStreaming,
    activeNode,
    rawThoughts,
    analysisData,
    error,
    startStream,
  } = useStoryFlowStream();

  const formData = useMemo(
    () => ({
      story_idea,
      genre,
      tone,
      target_audience,
      episode_count_preference,
      max_revisions,
    }),
    [
      story_idea,
      genre,
      tone,
      target_audience,
      episode_count_preference,
      max_revisions,
    ]
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    startStream({
      story_idea,
      genre,
      tone,
      target_audience,
      episode_count_preference,
      max_revisions,
    });
  };

  return (
    <main className="grid grid-cols-1 gap-8 lg:grid-cols-[360px_1fr]">
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)]"
      >
        <div className="h-full rounded-2xl border border-white/10 bg-white/10 p-5 shadow-2xl shadow-cyan-900/20 backdrop-blur-md">
          <div className="mb-5 flex items-center gap-3">
            <span className="rounded-lg border border-white/15 bg-white/10 p-2">
              <Sparkles className="h-4 w-4 text-cyan-300" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Your Creative Workspace
              </p>
              <h2 className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-xl font-semibold text-transparent">
                Generate Episode Blueprint
              </h2>
            </div>
          </div>

          <StoryForm
            storyIdea={story_idea}
            setStoryIdea={setStoryIdea}
            genre={genre}
            setGenre={setGenre}
            tone={tone}
            setTone={setTone}
            targetAudience={target_audience}
            setTargetAudience={setTargetAudience}
            episodeCountPreference={episode_count_preference}
            setEpisodeCountPreference={setEpisodeCountPreference}
            maxRevisions={max_revisions}
            setMaxRevisions={setMaxRevisions}
            onSubmit={handleSubmit}
          />
        </div>
      </motion.aside>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        className="rounded-2xl border border-white/10 bg-black/20 p-6 shadow-2xl shadow-blue-900/25 backdrop-blur-md"
      >
        {!isStreaming && !analysisData && (
          <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
            <div className="mb-4 rounded-full border border-cyan-300/20 bg-cyan-300/10 p-3">
              <FileJson className="h-6 w-6 text-cyan-200" />
            </div>
            <h3 className="text-2xl font-semibold text-white">
              Ready when you are
            </h3>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Connected to <span className="font-semibold text-cyan-200">{backendBaseUrl}</span>. Submit your story to stream real analysis events.
            </p>
          </div>
        )}

        {isStreaming && (
          <div className="min-h-[420px] space-y-5">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <Activity className="h-5 w-5 animate-pulse text-cyan-300" />
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                  Currently Thinking
                </p>
                <p className="font-medium text-white">{activeNode || "..."}</p>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.15em] text-slate-400">
                Live Notes
              </p>
              <pre className="max-h-[360px] overflow-auto whitespace-pre-wrap text-sm text-slate-200">
                {rawThoughts || "Waiting for thoughts stream..."}
              </pre>
            </div>
          </div>
        )}

        {!isStreaming && analysisData && (
          <ResultsDashboard analysisData={analysisData} />
        )}

        {error && (
          <div className="mt-4 rounded-xl border border-rose-300/25 bg-rose-500/10 p-3 text-sm text-rose-100">
            {error}
          </div>
        )}

        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
            Current Input Snapshot
          </p>
          <pre className="mt-2 max-h-40 overflow-auto text-xs text-slate-300">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </motion.section>
    </main>
  );
}
