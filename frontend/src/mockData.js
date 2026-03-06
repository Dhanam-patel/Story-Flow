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
  episode_scripts: {
    scripts: [
      {
        episode_number: 1,
        title: "The Origami Swan",
        script:
          "Rain hammers the cracked visor of a delivery helmet as a beat-up scooter weaves through traffic. The rider checks the app — another order, another three dollars. The noodles are lukewarm by the time they reach apartment 4B.\n\nThe door opens to a woman with hollow eyes. She takes the bag without a word, then presses a tip into the rider's glove. Not cash. Paper, folded into an intricate origami swan. The rider almost tosses it, but something about the woman's stare stops them cold.\n\nBack on the street, curiosity wins. Unfolded, the swan reveals a hand-written address on the other side of the city — a neighbourhood the rider has never delivered to. The ink is fresh. The handwriting is shaking.\n\nThe GPS pings. The scooter rolls to a stop outside a shuttered warehouse. And parked right next to the loading bay, under a single flickering streetlight, is an identical scooter — same dents, same faded stickers, same cracked mirror. The engine is still ticking with heat.",
        word_count: 172,
        scene_directions: [
          "Open on extreme close-up of rain hitting helmet visor — vertical frame, moody blue-grey grade.",
          "Quick-cut montage of delivery app notifications stacking up.",
          "Slow zoom on the origami swan in the rider's palm — warm practical light.",
          "Final shot: wide pull-back revealing the duplicate scooter. Hold 3 seconds in silence before cut to black.",
        ],
        continuity_notes:
          "Establishes the rider's financial desperation and the mystery of apartment 4B. The duplicate scooter is the first supernatural/conspiracy hook that carries into Episode 2.",
      },
      {
        episode_number: 2,
        title: "The Burner Phone",
        script:
          "The duplicate scooter sits there like a mirror the rider never asked for. Same scratched paint. Same delivery box bolted to the back. The rider circles it, heart pounding, and pops open the storage compartment.\n\nInside: a cheap burner phone, already powered on. The screen glows with a single notification — an incoming call from an unlisted number. The rider answers. A synthesised voice crackles through static: \"Did you bring the noodles?\"\n\nThe line goes dead. Then the phone buzzes again — a photo this time. The rider's own apartment building, shot from across the street, timestamped twenty minutes ago. Someone has been watching.\n\nA shadow shifts on the rooftop above. The rider looks up just in time to see a heavy object hurtling down. It smashes into the duplicate scooter's seat, sending shards of plastic across the wet concrete. Inside the wreckage of a thrown delivery bag: a jacket. Stained, torn — and unmistakably belonging to someone the rider has not seen in over a year.",
        word_count: 175,
        scene_directions: [
          "Match-cut from Episode 1's final frame — same angle, now the rider enters frame.",
          "Insert shot of burner phone screen — the photo of the rider's apartment fills the vertical frame.",
          "Rooftop shadow: shoot with long lens, rack focus from rider's face to silhouette above.",
          "Impact shot in slow-motion: delivery bag exploding on the scooter seat, debris scattering.",
        ],
        continuity_notes:
          "The jacket belonging to the missing sister bridges Episodes 1-2 and 2-3. The burner phone becomes a recurring prop — keep it visible in the rider's pocket from this point on.",
      },
      {
        episode_number: 3,
        title: "The Live Stream",
        script:
          "The jacket smells like damp concrete and old perfume — the same perfume the rider's sister wore the day she disappeared. There is no time to grieve. A door on the warehouse's second floor slams shut. The rider is already running.\n\nThe stairwell is pitch dark. Footsteps echo above — fast, deliberate. The rider bursts onto the rooftop expecting a confrontation, but finds only silence, a tripod, and a camera pointed at the street below.\n\nThe camera is live. A dark-web stream shows the rider's own face staring back, overlaid with scrolling comments in languages they cannot read. The viewer count is climbing — two hundred, five hundred, a thousand. The chat erupts as the rider reaches for the camera.\n\nThen a new message pins itself to the top of the feed, in English, in bold: \"Open the door on sub-level 2. Do it on camera. Or we delete her.\" The viewer count spikes past ten thousand. Somewhere below, a lock clicks open on its own.",
        word_count: 178,
        scene_directions: [
          "Open on tight close-up of the jacket fabric — pull focus to reveal the rider's trembling hands.",
          "Stairwell chase: handheld vertical POV, flashlight only, heavy breathing on audio.",
          "Stream UI overlay: design a realistic dark-web chat interface composited onto the footage.",
          "Final beat: the lock click is audio-only over a black screen. Hold 2 seconds, then smash-cut to the viewer count.",
        ],
        continuity_notes:
          "The dark-web audience becomes the implicit antagonist going forward. The sub-level 2 door is the central mystery for the next episode arc.",
      },
    ],
    total_word_count: 525,
    series_continuity_summary:
      "The three episodes escalate from personal mystery (origami clue) to external threat (surveillance) to psychological horror (live-streamed coercion). Each episode ends with a physical object that bridges into the next: swan -> jacket -> locked door.",
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
