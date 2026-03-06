import { motion } from "framer-motion";

const timelineItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

function EpisodeCard({ episode, index }) {
  const episodeNumber = episode?.episode_number ?? episode?.episode ?? index + 1;
  const hook = episode?.hook || "No hook provided.";
  const mainBeats = Array.isArray(episode?.beats) ? episode.beats : [];
  const cliffhanger = episode?.cliffhanger || "No cliffhanger provided.";

  return (
    <motion.div variants={timelineItemVariants}>
      <article className="relative ml-8 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg">
        <span className="absolute -left-[2.15rem] top-5 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-[10px] font-bold text-cyan-200">
          {episodeNumber}
        </span>

        <div className="flex items-baseline justify-between gap-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/75">
            Episode {episodeNumber}
          </h4>
        </div>

        <p className="mt-3 rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100">
          <span className="mr-1 font-semibold text-cyan-200">Hook:</span>
          {hook}
        </p>

        <div className="mt-4">
          <p className="text-xs uppercase tracking-[0.12em] text-white/60">Main Beats</p>
          {mainBeats.length === 0 ? (
            <p className="mt-2 text-sm text-white/60">No beats provided.</p>
          ) : (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
              {mainBeats.map((beat, beatIndex) => (
                <li key={`${episodeNumber}-beat-${beatIndex}`}>{beat}</li>
              ))}
            </ul>
          )}
        </div>

        <p className="mt-4 bg-gradient-to-r from-orange-300 via-rose-300 to-red-300 bg-clip-text text-sm font-medium text-transparent">
          Cliffhanger: {cliffhanger}
        </p>
      </article>
    </motion.div>
  );
}

export default function EpisodeTimeline({ episodePlan = [] }) {
  return (
    <section className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
      <h3 className="text-base font-semibold text-white">Episode Timeline</h3>
      <p className="mt-1 text-sm text-white/60">
        Planned beats and cliffhangers across episodes.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.1,
            },
          },
        }}
        className="relative mt-5 space-y-4"
      >
        <span className="absolute bottom-0 left-[0.58rem] top-0 w-px bg-gradient-to-b from-cyan-300/60 via-blue-300/35 to-transparent" />

        {episodePlan.length === 0 ? (
          <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-sm text-white/60">
            No episode plan available in payload.
          </div>
        ) : (
          episodePlan.map((episode, index) => (
            <EpisodeCard
              key={episode?.episode_number ?? episode?.episode ?? index}
              episode={episode}
              index={index}
            />
          ))
        )}
      </motion.div>
    </section>
  );
}
