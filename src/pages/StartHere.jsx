// import resume from "../../public/resume.pdf";

export default function StartHere() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-vscodeBorder bg-white/4 p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Welcome to my workspace 👋</h1>
        <p className="mt-2 text-vscodeMuted">
          I’m Bradley — full stack developer. I build apps + automations that turn messy work into clean systems.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a className="px-4 py-2 rounded-xl bg-vscodeBlue text-white" href="/projects/ai-receptionist">
            Open Projects
          </a>
          <a className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15" href="/contact">
            Let’s Talk
          </a>
          <a className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15" href="/resume.pdf">
            Download Resume
          </a>
        </div>

        <p className="mt-4 text-xs text-vscodeMuted">
          Tip: Press <span className="text-white">Ctrl/Cmd + K</span> for the command palette. Yes, it’s a real thing here.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { title: "AI Receptionist", desc: "24/7 lead handling + routing.", route: "/projects/ai-receptionist" },
          { title: "Lead Follow-up", desc: "Zapier + logic + email flows.", route: "/projects/lead-followup" },
          { title: "Skills", desc: "The JSON version (fun, fast).", route: "/skills" },
        ].map((c) => (
          <a key={c.title} href={c.route} className="rounded-2xl border border-vscodeBorder bg-vscodePanel p-5 hover:bg-white/4">
            <div className="font-semibold">{c.title}</div>
            <div className="mt-1 text-sm text-vscodeMuted">{c.desc}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
