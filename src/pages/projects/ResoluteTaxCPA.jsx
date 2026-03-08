import resoluteHome from "../../assets/resolute/home.png";
import resoluteServices from "../../assets/resolute/services.png";
import resoluteLighthouse from "../../assets/resolute/lighthouse.png";

export default function ResoluteTaxCPA() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          CLIENT_Gibson_Tax_CPA.md
        </h1>

        <p className="text-white/70">
          Client website development and SEO optimization for a licensed CPA
          firm, focused on clarity, trust, and long-term scalability.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {["Client Work", "SEO", "WordPress", "Branding", "Performance"].map(
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
      <section className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-10">
        <h2 className="text-lg font-semibold">TL;DR</h2>
        <p className="text-white/75 leading-relaxed">
          Built a professional, performance-focused website for a CPA firm,
          emphasizing credibility, readability, and SEO best practices while
          preparing the platform for future client-facing features.
        </p>
      </section>

      {/* Problem / Goal */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
          <h2 className="text-lg font-semibold">Problem</h2>
          <ul className="list-disc pl-5 text-white/75 space-y-1">
            <li>Need for a trustworthy, professional web presence</li>
            <li>Unclear service presentation for new clients</li>
            <li>Performance and SEO gaps</li>
            <li>No foundation for future client portal features</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
          <h2 className="text-lg font-semibold">Goal</h2>
          <ul className="list-disc pl-5 text-white/75 space-y-1">
            <li>Present services clearly and professionally</li>
            <li>Improve performance and SEO</li>
            <li>Establish brand consistency</li>
            <li>Prepare for future expansion</li>
          </ul>
        </div>
      </section>

      {/* Work performed */}
      <section className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-4">
        <h2 className="text-lg font-semibold">Work performed</h2>

        <ul className="list-disc pl-5 text-white/75 space-y-1">
          <li>Website layout and structure refinement</li>
          <li>SEO optimization for accounting services</li>
          <li>Image and asset optimization</li>
          <li>Mobile responsiveness improvements</li>
          <li>Planning for future client portal integration</li>
        </ul>
      </section>

      {/* Screenshots */}
      <section className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-10">
        <h2 className="text-lg font-semibold">Screenshots</h2>
          <h3 className="text-md font-semibold">Homepage</h3>
        <img
          src={resoluteHome}
          alt="Resolute Tax CPA homepage"
          className="rounded-xl border border-white/10"
        />
            <h3 className="text-md font-semibold">Services page</h3>
        <img
          src={resoluteServices}
          alt="Resolute Tax CPA services page"
          className="rounded-xl border border-white/10"
        />
            <h3 className="text-md font-semibold">Lighthouse Performance Report</h3>
        <img
          src={resoluteLighthouse}
          alt="Lighthouse performance report"
          className="rounded-xl border border-white/10"
        />
        <p className="text-white/70 text-sm">
          Note: Performance scores may vary based on testing conditions.Currently still optimizing for even better results.
        </p>
      </section>

      {/* Footer */}
      <section className="rounded-2xl border border-white/10 bg-white/4 p-6">
        <h2 className="text-lg font-semibold m-6">Links</h2>
                <a
                    className="px-3 py-2 rounded-xl bg-white/8 hover:bg-white/12 text-sm m-6 px-4 py-2"
                    href="https://gibsontaxcpa.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live Site
                </a>
      </section>
    </div>
  );
}
