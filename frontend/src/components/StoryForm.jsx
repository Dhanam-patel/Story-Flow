import { motion } from "framer-motion";
import { SendHorizontal } from "lucide-react";

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="text-xs uppercase tracking-[0.14em] text-slate-300">
      {children}
    </label>
  );
}

function TextInput({ id, value, onChange, placeholder }) {
  return (
    <input
      id={id}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/25"
    />
  );
}

export default function StoryForm({
  storyIdea,
  setStoryIdea,
  genre,
  setGenre,
  tone,
  setTone,
  targetAudience,
  setTargetAudience,
  episodeCountPreference,
  setEpisodeCountPreference,
  maxRevisions,
  setMaxRevisions,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="flex h-full flex-col gap-4">
      <div className="space-y-2">
        <Label htmlFor="story-idea">Story Idea</Label>
        <textarea
          id="story-idea"
          value={storyIdea}
          onChange={(event) => setStoryIdea(event.target.value)}
          rows={7}
          placeholder="A fractured city where forgotten memories leak into the streets each night..."
          className="w-full resize-none rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/25"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="genre">Genre</Label>
          <TextInput
            id="genre"
            value={genre}
            onChange={setGenre}
            placeholder="Sci-fi thriller"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tone">Tone</Label>
          <TextInput
            id="tone"
            value={tone}
            onChange={setTone}
            placeholder="Dark, cerebral"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="target-audience">Target Audience</Label>
        <TextInput
          id="target-audience"
          value={targetAudience}
          onChange={setTargetAudience}
          placeholder="Young adults (18-30)"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="episode-count">Episode Count Preference</Label>
          <span className="text-sm text-cyan-200">{episodeCountPreference}</span>
        </div>
        <input
          id="episode-count"
          type="range"
          min={5}
          max={8}
          step={1}
          value={episodeCountPreference}
          onChange={(event) => setEpisodeCountPreference(Number(event.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-cyan-300"
        />
        <div className="flex justify-between text-xs text-slate-400">
          <span>5</span>
          <span>8</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="max-revisions">Max Revisions</Label>
          <span className="text-sm text-cyan-200">{maxRevisions}</span>
        </div>
        <input
          id="max-revisions"
          type="range"
          min={1}
          max={5}
          step={1}
          value={maxRevisions}
          onChange={(event) => setMaxRevisions(Number(event.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-cyan-300"
        />
        <div className="flex justify-between text-xs text-slate-400">
          <span>1</span>
          <span>5</span>
        </div>
      </div>

      <motion.button
        whileHover={{ y: -1, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-200/30 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-900/30 backdrop-blur-md transition hover:border-cyan-100/60 hover:shadow-cyan-700/30"
      >
        Run Episodic Analysis
        <SendHorizontal className="h-4 w-4" />
      </motion.button>
    </form>
  );
}
