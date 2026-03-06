function toRiskLabel(score) {
  if (score >= 90) return "Low";
  if (score >= 75) return "Medium";
  if (score >= 60) return "High";
  return "Critical";
}

function sentenceParts(text) {
  if (!text || typeof text !== "string") {
    return [];
  }

  return text
    .split(/[.!?]\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function normalizeAnalyzePayload(payload = {}) {
  // Already in frontend dashboard shape.
  if (Array.isArray(payload?.episode_plan)) {
    return payload;
  }

  const planner = payload?.episode_planner || {};
  const plannerEpisodes = Array.isArray(planner?.episodes) ? planner.episodes : [];

  const episode_plan = plannerEpisodes.map((episode, index) => {
    const beatsFromOutline = sentenceParts(episode?.outline);
    const beats = beatsFromOutline.length > 0
      ? beatsFromOutline.slice(0, 4)
      : Array.isArray(episode?.retention_hooks)
        ? episode.retention_hooks
        : [];

    return {
      episode_number: episode?.episode_number ?? index + 1,
      hook:
        Array.isArray(episode?.retention_hooks) && episode.retention_hooks[0]
          ? episode.retention_hooks[0]
          : episode?.title || "No hook generated.",
      beats,
      cliffhanger: episode?.cliffhanger_idea || "No cliffhanger generated.",
    };
  });

  const emotionalSource = payload?.emotional_arc || {};
  const emotionEpisodes = Array.isArray(emotionalSource?.episodes)
    ? emotionalSource.episodes
    : [];
  const emotional_arc = {
    coherence_score:
      typeof emotionalSource?.emotional_coherence_score === "number"
        ? emotionalSource.emotional_coherence_score * 10
        : undefined,
    beats: emotionEpisodes.map((episode, index) => {
      const beatIntensity = Array.isArray(episode?.emotion_beats)
        ? Math.round(
            episode.emotion_beats.reduce(
              (sum, beat) => sum + Number(beat?.intensity || 0),
              0
            ) / Math.max(1, episode.emotion_beats.length)
          )
        : undefined;

      return {
        episode_number: episode?.episode_number ?? index + 1,
        dominant_emotion: episode?.dominant_emotion || "Unknown",
        intensity_score: beatIntensity ?? episode?.emotional_range,
      };
    }),
  };

  const retentionSource = payload?.retention_analysis || {};
  const retentionEpisodes = Array.isArray(retentionSource?.episodes)
    ? retentionSource.episodes
    : [];
  const retention_analysis = {
    overall_risk:
      retentionSource?.overall_series_retention_prediction || "Unknown",
    episodes: retentionEpisodes.map((episode, index) => {
      const riskZones = Array.isArray(episode?.risk_zones) ? episode.risk_zones : [];
      const firstZone = riskZones[0];

      return {
        episode_number: episode?.episode_number ?? index + 1,
        retention_score: episode?.overall_retention_score ?? 0,
        risk_zone: firstZone
          ? `${firstZone.timestamp_range} (${firstZone.risk_level})`
          : toRiskLabel(episode?.overall_retention_score ?? 0),
        suggested_fixes: riskZones
          .map((zone) => zone?.suggested_fix)
          .filter(Boolean),
      };
    }),
  };

  const cliffSource = payload?.cliffhanger_analysis || {};
  const cliffScores = Array.isArray(cliffSource?.scores) ? cliffSource.scores : [];
  const cliffhanger_analysis = {
    average_score: cliffSource?.average_score,
    episodes: cliffScores.map((score, index) => ({
      episode_number: score?.episode_number ?? index + 1,
      curiosity_score: score?.curiosity_gap,
      stakes_score: score?.stakes_level,
      emotional_score: score?.emotional_charge,
      explanation: score?.reasoning,
    })),
  };

  const optimizationSource = payload?.optimization_report || {};
  const suggestions = Array.isArray(optimizationSource?.suggestions)
    ? optimizationSource.suggestions
    : [];
  const optimization_report = {
    quality_scores: {
      overall: optimizationSource?.overall_quality_score,
    },
    top_priorities: Array.isArray(optimizationSource?.top_3_priorities)
      ? optimizationSource.top_3_priorities
      : [],
    per_episode_suggestions: suggestions.map((entry, index) => ({
      episode_number: entry?.episode_number ?? index + 1,
      suggestion:
        entry?.suggested_improvement ||
        entry?.current_issue ||
        "No suggestion provided.",
    })),
  };

  return {
    run_id: payload?.run_id,
    story_idea: payload?.story_idea,
    revisions_completed: payload?.revisions_completed,
    created_at: payload?.created_at,
    episode_plan,
    emotional_arc,
    retention_analysis,
    cliffhanger_analysis,
    optimization_report,
  };
}
