import { motion } from "framer-motion";
import { BarChart3, Globe2, UsersRound } from "lucide-react";
import { mockAudienceAnalytics } from "../mockData";

function MetricCard({ label, value, suffix = "" }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg">
      <p className="text-xs uppercase tracking-[0.14em] text-white/60">{label}</p>
      <p className="mt-2 text-2xl font-bold text-white">
        {value}
        {suffix}
      </p>
    </article>
  );
}

export default function AudienceAnalysisPage() {
  return (
    <div className="space-y-6">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-2">
            <UsersRound className="h-5 w-5 text-cyan-200" />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/90">
              Who Is Watching
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Audience Pulse and Preference Trends
            </h2>
          </div>
        </div>
        <p className="mt-3 text-sm text-white/70">
          A presentation-friendly analytics snapshot to explain who your story is
          resonating with and why.
        </p>
      </motion.section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Total Viewership"
          value={mockAudienceAnalytics.total_viewership.toLocaleString()}
        />
        <MetricCard
          label="Avg Completion Rate"
          value={mockAudienceAnalytics.average_completion_rate}
          suffix="%"
        />
        <MetricCard
          label="Binge Rate"
          value={mockAudienceAnalytics.binge_rate}
          suffix="%"
        />
        <MetricCard
          label="Returning Viewers"
          value={mockAudienceAnalytics.returning_viewers}
          suffix="%"
        />
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <article className="rounded-xl border border-white/10 bg-black/20 p-5 backdrop-blur-lg xl:col-span-1">
          <div className="mb-4 flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-cyan-200" />
            <h3 className="text-base font-semibold text-white">Age Group Preference</h3>
          </div>
          <div className="space-y-3">
            {mockAudienceAnalytics.age_group_preference.map((segment) => (
              <div key={segment.group}>
                <div className="mb-1 flex items-center justify-between text-sm text-white/75">
                  <span>{segment.group}</span>
                  <span>{segment.share}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    style={{ width: `${segment.share}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl border border-white/10 bg-black/20 p-5 backdrop-blur-lg xl:col-span-1">
          <div className="mb-4 flex items-center gap-2">
            <UsersRound className="h-4 w-4 text-purple-200" />
            <h3 className="text-base font-semibold text-white">Audience Preferences</h3>
          </div>
          <ul className="space-y-3">
            {mockAudienceAnalytics.audience_preferences.map((pref) => (
              <li key={pref.label} className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between text-sm text-white/80">
                  <span>{pref.label}</span>
                  <span className="font-semibold text-purple-200">{pref.score}</span>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-white/10 bg-black/20 p-5 backdrop-blur-lg xl:col-span-1">
          <div className="mb-4 flex items-center gap-2">
            <Globe2 className="h-4 w-4 text-emerald-200" />
            <h3 className="text-base font-semibold text-white">Top Markets</h3>
          </div>
          <div className="space-y-3">
            {mockAudienceAnalytics.top_markets.map((market) => (
              <div key={market.region} className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="mb-1 flex items-center justify-between text-sm text-white/80">
                  <span>{market.region}</span>
                  <span>{market.share}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                    style={{ width: `${market.share}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <article className="rounded-xl border border-white/10 bg-black/20 p-5 backdrop-blur-lg">
        <h3 className="text-base font-semibold text-white">Watch Time by Day</h3>
        <p className="mt-1 text-sm text-white/65">
          Average viewing minutes per active user.
        </p>
        <div className="mt-4 grid grid-cols-7 gap-2">
          {mockAudienceAnalytics.watch_time_by_day.map((slot) => (
            <div key={slot.day} className="flex flex-col items-center gap-2">
              <div className="flex h-36 w-full items-end rounded-lg border border-white/10 bg-white/5 p-1">
                <div
                  className="w-full rounded-md bg-gradient-to-t from-blue-500 to-cyan-300"
                  style={{ height: `${Math.min(100, (slot.minutes / 40) * 100)}%` }}
                />
              </div>
              <p className="text-xs text-white/70">{slot.day}</p>
              <p className="text-xs font-medium text-cyan-100">{slot.minutes}m</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
