import alln1Home from "../../assets/alln1/homepage.png";
import alln1Speed from "../../assets/alln1/pagespeed.png";

export default function AllN1PestControl() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          CLIENT_AllN1_Pest_Control.md
        </h1>

        <p className="text-white/70">
          Production website development and ongoing SEO optimization for a local
          pest control business competing in a high-intent, local-search market.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {["Client Work", "SEO", "WordPress", "Local Search", "Performance"].map(
            (t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-white/8 border border-white/10 text-sm text-white/80"
              >
                {t}
              </span>
            )
          )}
        </div>
      </header>

      {/* TL;DR */}
      <section className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-3">
        <h2 className="text-lg font-semibold">TL;DR</h2>
        <p className="text-white/75 leading-relaxed">
          This project focused on improving visibility, speed, and trust for a
          local service business. The work combined technical SEO, performance
          optimization, and ongoing maintenance to support lead generation from
          local search.
        </p>
      </section>

      {/* Problem / Goal */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
          <h2 className="text-lg font-semibold">Problem</h2>
          <ul className="list-disc pl-5 text-white/75 space-y-1">
            <li>Poor mobile performance affecting conversions</li>
            <li>Limited visibility in local search results</li>
            <li>Unoptimized images and unused assets</li>
            <li>Inconsistent SEO structure across pages</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
          <h2 className="text-lg font-semibold">Goal</h2>
          <ul className="list-disc pl-5 text-white/75 space-y-1">
            <li>Improve Core Web Vitals on mobile</li>
            <li>Strengthen local SEO signals</li>
            <li>Create a faster, cleaner user experience</li>
            <li>Establish a maintainable site foundation</li>
          </ul>
        </div>
      </section>

      {/* Work performed */}
      <section className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-4">
        <h2 className="text-lg font-semibold">Work performed</h2>

        <ul className="list-disc pl-5 text-white/75 space-y-1">
          <li>On-page SEO improvements (titles, metadata, structure)</li>
          <li>Image optimization and compression</li>
          <li>Performance tuning for mobile devices</li>
          <li>Plugin and asset cleanup</li>
          <li>Ongoing maintenance and updates</li>
        </ul>
      </section>

      {/* Screenshots */}
      <section className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-10">
        <h2 className="text-lg font-semibold">Screenshots</h2>

          <h3 className="text-md font-semibold">Homepage</h3>
        <img
          src={alln1Home}
          alt="All-N-1 Pest Control homepage"
          className="rounded-xl border border-white/10"
        />

            <h3 className="mt-4 text-md font-semibold">PageSpeed Insights</h3>
        <img
          src={alln1Speed}
          alt="PageSpeed insights"
          className="rounded-xl border border-white/10"
        />
      </section>

      {/* Footer */}
      <section className="rounded-2xl border border-white/10 bg-white/4 p-6">
        <h2 className="text-lg font-semibold m-6">Links</h2>
                <a
                    className="px-3 py-2 rounded-xl bg-white/8 hover:bg-white/12 text-sm m-6 px-4 py-2"
                    href="https://alln1pestcontrol.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live Site
                </a>
      </section>
    </div>
  );
}
