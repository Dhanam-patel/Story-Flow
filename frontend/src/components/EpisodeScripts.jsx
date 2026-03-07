import { motion } from "framer-motion";
import { BookOpen, Camera, FileText, Link2 } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function ScriptCard({ script, index }) {
  const episodeNumber = script?.episode_number ?? index + 1;
  const title = script?.title || `Episode ${episodeNumber}`;
  const body = script?.script || "";
  const wordCount = script?.word_count ?? 0;
  const sceneDirections = Array.isArray(script?.scene_directions)
    ? script.scene_directions
    : [];
  const continuityNotes = script?.continuity_notes || "";

  return (
    <motion.article variants={cardVariants} className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-lg">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 text-xs font-bold text-cyan-200">
            {episodeNumber}
          </span>
          <h4 className="text-base font-semibold text-white">{title}</h4>
        </div>

        {wordCount > 0 && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-300">
            <FileText className="h-3 w-3" />
            {wordCount.toLocaleString()} words
          </span>
        )}
      </div>

      {/* Script body */}
      <div className="px-5 py-4">
        {body ? (
          <div className="space-y-3 text-sm leading-relaxed text-slate-200">
            {body.split(/\n\n+/).map((para, pIdx) => (
              <p key={`${episodeNumber}-p-${pIdx}`}>{para}</p>
            ))}
          </div>
        ) : (
          <p className="text-sm text-white/50">No script text available.</p>
        )}
      </div>

      {/* Scene directions + Continuity notes */}
      {(sceneDirections.length > 0 || continuityNotes) && (
        <div className="space-y-3 border-t border-white/10 px-5 py-4">
          {sceneDirections.length > 0 && (
            <div>
              <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-amber-200/80">
                <Camera className="h-3.5 w-3.5" />
                Scene Directions
              </p>
              <ul className="space-y-1.5 pl-5">
                {sceneDirections.map((direction, dIdx) => (
                  <li
                    key={`${episodeNumber}-dir-${dIdx}`}
                    className="list-disc text-sm text-slate-300"
                  >
                    {direction}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {continuityNotes && (
            <div className="rounded-lg border border-blue-300/15 bg-blue-300/5 px-3 py-2">
              <p className="mb-1 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-blue-200/80">
                <Link2 className="h-3.5 w-3.5" />
                Continuity
              </p>
              <p className="text-sm text-slate-300">{continuityNotes}</p>
            </div>
          )}
        </div>
      )}
    </motion.article>
  );
}

export default function EpisodeScripts({ episodeScripts }) {
  if (!episodeScripts) return null;

  const scripts = Array.isArray(episodeScripts?.scripts)
    ? [...episodeScripts.scripts].sort(
        (a, b) => (a.episode_number ?? 0) - (b.episode_number ?? 0)
      )
    : [];
  const totalWordCount = episodeScripts?.total_word_count ?? 0;
  const continuitySummary = episodeScripts?.series_continuity_summary || "";

  if (scripts.length === 0) return null;

  return (
    <section className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-cyan-300" />
          <h3 className="text-base font-semibold text-white">Full Scripts</h3>
        </div>

        {totalWordCount > 0 && (
          <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-0.5 text-xs font-medium text-cyan-100">
            Total: {totalWordCount.toLocaleString()} words
          </span>
        )}
      </div>

      {continuitySummary && (
        <p className="mt-2 text-sm text-slate-400">{continuitySummary}</p>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
        }}
        className="mt-4 space-y-4"
      >
        {scripts.map((script, index) => (
          <ScriptCard
            key={`script-${script.episode_number ?? index}`}
            script={script}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
}
