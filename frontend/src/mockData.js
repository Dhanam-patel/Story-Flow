export const mockAnalysisData = {
  run_id: "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
  story_idea:
    "A broke food-delivery rider discovers that one customer is leaving clues to a missing sister case.",
  revisions_completed: 2,
  created_at: "2026-03-06T10:36:41Z",
  episode_plan: [
    {
      episode_number: 1,
      hook:
        "POV shot dropping off lukewarm noodles; the customer hands over a tip folded like an origami swan.",
      beats: [
        "Introduce the rider's financial struggle.",
        "Eerie interaction at apartment 4B.",
        "The swan reveals a cryptic address.",
      ],
      cliffhanger:
        "The rider reaches the address and sees their own bike already parked outside.",
    },
    {
      episode_number: 2,
      hook:
        "A flashback to the sister cuts into the present: the duplicate bike's exhaust is still warm.",
      beats: [
        "A burner phone is found in the storage box.",
        "A synthesized voice asks, 'Did you bring the noodles?'",
        "The rider realizes they are being watched.",
      ],
      cliffhanger:
        "A heavy object is thrown from above and smashes into the duplicate bike.",
    },
    {
      episode_number: 3,
      hook:
        "Inside the thrown delivery bag is the sister's stained jacket.",
      beats: [
        "The rider chases a figure through the stairwell.",
        "The rooftop is empty except for a tripod and camera.",
        "A live stream reveals a dark web audience watching.",
      ],
      cliffhanger:
        "Viewer count spikes as comments demand the rider open a locked door on camera.",
    },
  ],
  emotional_arc: {
    coherence_score: 88,
    tension_curve: [40, 65, 90],
    beats: [
      {
        episode_number: 1,
        dominant_emotion: "Intrigue / Confusion",
        intensity_score: 5,
      },
      {
        episode_number: 2,
        dominant_emotion: "Paranoia / Tension",
        intensity_score: 7,
      },
      {
        episode_number: 3,
        dominant_emotion: "Panic / High Stakes",
        intensity_score: 9,
      },
    ],
  },
  retention_analysis: {
    overall_risk: "Low",
    episodes: [
      {
        episode_number: 1,
        retention_score: 92,
        risk_zone: "Middle beat",
        suggested_fixes: [
          "Keep the intro under 10 seconds.",
          "Accelerate the tip handoff.",
        ],
      },
      {
        episode_number: 2,
        retention_score: 85,
        risk_zone: "Burner phone discovery",
        suggested_fixes: [
          "Add subtle sound design before the phone rings.",
        ],
      },
      {
        episode_number: 3,
        retention_score: 95,
        risk_zone: "None",
        suggested_fixes: [],
      },
    ],
  },
  cliffhanger_analysis: {
    average_score: 8.6,
    episodes: [
      {
        episode_number: 1,
        curiosity_score: 9,
        stakes_score: 7,
        emotional_score: 8,
        explanation: "Strong curiosity, while personal stakes are still forming.",
      },
      {
        episode_number: 2,
        curiosity_score: 8,
        stakes_score: 9,
        emotional_score: 8,
        explanation: "Physical danger sharply increases urgency.",
      },
      {
        episode_number: 3,
        curiosity_score: 10,
        stakes_score: 10,
        emotional_score: 9,
        explanation: "Shifts from chase to psychological threat with high payoff.",
      },
    ],
  },
  optimization_report: {
    quality_scores: {
      pacing: 85,
      hook_strength: 92,
      character_investment: 78,
    },
    top_priorities: [
      "Make the origami memory transition instantaneous.",
      "Increase the protagonist's emotional reaction in episode 3.",
    ],
    per_episode_suggestions: [
      {
        episode_number: 1,
        suggestion:
          "Show a declined card notification before the first delivery to establish urgency quickly.",
      },
      {
        episode_number: 2,
        suggestion:
          "Use environmental details in the apartment hallway to suggest surveillance.",
      },
    ],
  },
};

export const mockAudienceAnalytics = {
  total_viewership: 1274300,
  average_completion_rate: 76,
  binge_rate: 42,
  returning_viewers: 61,
  age_group_preference: [
    { group: "13-17", share: 14 },
    { group: "18-24", share: 37 },
    { group: "25-34", share: 31 },
    { group: "35-44", share: 12 },
    { group: "45+", share: 6 },
  ],
  audience_preferences: [
    { label: "Mystery reveals", score: 89 },
    { label: "Character vulnerability", score: 78 },
    { label: "High-tension cliffhangers", score: 93 },
    { label: "Urban noir visuals", score: 84 },
    { label: "Tech conspiracy angles", score: 72 },
  ],
  top_markets: [
    { region: "India", share: 28 },
    { region: "United States", share: 24 },
    { region: "Brazil", share: 11 },
    { region: "Philippines", share: 9 },
    { region: "Indonesia", share: 8 },
  ],
  watch_time_by_day: [
    { day: "Mon", minutes: 18 },
    { day: "Tue", minutes: 21 },
    { day: "Wed", minutes: 24 },
    { day: "Thu", minutes: 19 },
    { day: "Fri", minutes: 31 },
    { day: "Sat", minutes: 36 },
    { day: "Sun", minutes: 33 },
  ],
};
