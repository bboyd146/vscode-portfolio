export default function PixelPioneer() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">PixelPioneer_Services.md</h1>
        <p className="text-white/70">
          A service-based web presence designed to turn “interesting” into “let’s book a call” with clean UI and strong funnels.
        </p>
      </header>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
        <h2 className="text-lg font-semibold">Positioning</h2>
        <p className="text-white/75">
          PixelPioneer focuses on modern web builds and automation solutions that are simple for clients and satisfying for developers.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { k: "Audience", v: "Small business owners" },
            { k: "Offer", v: "Web + automation" },
            { k: "Focus", v: "ROI + clarity" },
          ].map((x) => (
            <div key={x.k} className="rounded-xl bg-black/20 border border-white/10 p-4">
              <div className="text-xs text-white/60">{x.k}</div>
              <div className="mt-1 font-medium">{x.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#252526] p-6 space-y-3">
          <h2 className="text-lg font-semibold">Key UI Features</h2>
          <ul className="list-disc pl-5 text-white/75 space-y-1">
            <li>Hero section with bold value prop + CTA</li>
            <li>Service cards with clear outcomes</li>
            <li>Pricing layout that doesn’t overwhelm</li>
            <li>Testimonial / trust section for credibility</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-6 space-y-3">
          <h2 className="text-lg font-semibold">Why it converts</h2>
          <p className="text-white/75">
            The site is structured around a simple sequence: value → proof → offer → call-to-action.
          </p>
          <pre className="text-sm text-white/80 overflow-x-auto">
{`// Funnel logic (conceptual)
ValueProp -> Proof -> Offer -> CTA`}
          </pre>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold">Tech Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {["React", "Vite", "Tailwind CSS", "Component-driven UI"].map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-black/30 border border-white/10 text-sm text-white/80">
              {t}
            </span>
          ))}
        </div>
      </section>

              <section className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
            <h2 className="text-lg font-semibold">Links</h2>
            <p className="text-white/70 text-sm">
                Add your real GitHub + Live links when ready.
            </p>
            <div className="flex flex-wrap gap-2">
                <a
                    className="px-3 py-2 rounded-xl bg-white/8 hover:bg-white/12 text-sm"
                    href="https://github.com/bboyd146/pixel-pioneer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub Repo
                </a>
                <a
                    className="px-3 py-2 rounded-xl bg-white/8 hover:bg-white/12 text-sm"
                    href="https://pixel-pioneer.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live Demo
                </a>
            </div>
        </section>
    </div>
  );
}
