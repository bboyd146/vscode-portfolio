export default function About() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">ABOUT.md</h1>
        <p className="text-white/70">
          Full-stack developer focused on shipping real products: clean UI, solid backend, and practical automation.
        </p>
      </header>

      <section className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-3">
        <h2 className="text-lg font-semibold">Professional summary</h2>
        <p className="text-white/75">
          I’m Bradley Boyd — a full-stack software developer with 5+ years building responsive, scalable web apps using
          modern JavaScript frameworks. I work across React, Node/Express, cloud deployment, and database design, and I’m
          currently pursuing a B.S. in Computer Science (2026).{" "}
          <span className="text-white/55">
            I like systems that feel simple for users and satisfying for developers.
          </span>
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
          <h2 className="text-lg font-semibold">What I build</h2>
          <ul className="list-disc pl-5 text-white/75 space-y-1">
            <li>Full-stack web apps (React + Node/Express)</li>
            <li>Dashboards + database-backed systems</li>
            <li>Automation workflows that save time and close leads faster</li>
            <li>SEO-friendly sites that load fast and look modern</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
          <h2 className="text-lg font-semibold">How I work</h2>
          <ul className="list-disc pl-5 text-white/75 space-y-1">
            <li>Start with the user journey (non-dev friendly)</li>
            <li>Build reusable components + clean structure</li>
            <li>Ship early, iterate fast, measure impact</li>
            <li>Keep performance + accessibility in the loop</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-3">
        <h2 className="text-lg font-semibold">Education</h2>
        <div className="space-y-2 text-white/75">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div className="font-medium">B.S. Computer Science — Lamar University</div>
            <div className="text-white/55 text-sm">Current</div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div className="font-medium">Full Stack Web Development Certificate — Rice University (2U)</div>
            <div className="text-white/55 text-sm">2021</div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <div className="font-medium">A.A. Education — Lone Star College</div>
          </div>
        </div>
      </section>
    </div>
  );
}
