import resume from "../../public/resume.pdf";
import { useNavigate } from "react-router-dom";

export default function StartHere() {
const navigate = useNavigate();

return (
    <div className="space-y-6">
        <div className="rounded-2xl border border-vscodeBorder bg-white/4 p-6">
            <h1 className="text-3xl font-semibold tracking-tight">Welcome to my workspace 👋</h1>
            <p className="mt-2 text-vscodeMuted">
                I’m Bradley — full stack developer. I build apps + automations that turn messy work into clean systems.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
                <button
                    type="button"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white"
                    onClick={() => navigate("/projects")}
                >
                    Open Projects
                </button>
                <button
                    type="button"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15"
                    onClick={() => navigate("/contact")}
                >
                    Let’s Talk
                </button>
                <button
                    type="button"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15"
                    onClick={() => window.open(resume, "_blank", "noopener,noreferrer")}
                >
                    Download Resume
                </button>
            </div>

            <p className="mt-4 text-xs text-vscodeMuted">
                Tip: Press <span className="text-white">Ctrl/Cmd + K</span> for the command palette. Yes, it’s a real thing here.
            </p>
        </div>

        {/* Integrated Terminal */}
<div className="rounded-2xl border border-vscodeBorder bg-[#1e1e1e] overflow-hidden">
  {/* Terminal Header */}
  <div className="flex items-center justify-between px-4 py-2 border-b border-vscodeBorder bg-[#252526]">
    <div className="text-xs text-vscodeMuted">
      TERMINAL — bash
    </div>
    <div className="flex gap-1">
      <span className="h-2 w-2 rounded-full bg-red-500/70" />
      <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
      <span className="h-2 w-2 rounded-full bg-green-500/70" />
    </div>
  </div>

  {/* Terminal Body */}
  <div className="p-4 font-mono text-sm text-white space-y-1">
    <div className="text-white/70">
      bradley@portfolio:~/newemployer/lookingfordeveloper/myportfolio$
    </div>

    <div>
      <span className="text-green-400">echo</span>{" "}
      <span className="text-yellow-300">
        "if potential employer please hire me"
      </span>
    </div>

    <div className="text-white/80">
      if potential employer please hire me
    </div>

    <div className="mt-2 text-white/70">
      bradley@portfolio:~/newemployer/lookingfordeveloper/myportfolio$
    </div>

    <div>
      <span className="text-green-400">cat</span>{" "}
      <span className="text-blue-400">README.md</span>
    </div>

    <div className="text-white/80 leading-relaxed">
      Hi 👋<br />
      You’re probably here because you’re looking for a developer who:
      <ul className="list-disc pl-5 mt-1 text-white/70">
        <li>Ships real projects</li>
        <li>Thinks in systems, not just code</li>
        <li>Cares about performance, clarity, and users</li>
      </ul>
      <div className="mt-2">
        If that sounds useful — let’s talk.
      </div>
    </div>

    <div className="mt-2 text-white/70">
      bradley@portfolio:~/newemployer/lookingfordeveloper/myportfolio$
      <span className="animate-pulse">▌</span>
    </div>
  </div>
</div>


        <div className="grid gap-4 md:grid-cols-3">
            {[
                { title: "Projects", desc: "A list of my engineering projects and client work.", route: "/projects" },
                { title: "About Me", desc: "A description of who I am and what I do.", route: "/about" },
                { title: "Skills", desc: "The JSON version (fun, fast).", route: "/skills" },
                {title: "AI Receptionist", desc: "(Latest Development) \n\nAn AI-powered virtual receptionist for your business.", route: "/projects/ai-receptionist"},
            ].map((c) => (
                <button
                    key={c.title}
                    type="button"
                    onClick={() => navigate(c.route)}
                    className="rounded-2xl border border-vscodeBorder bg-vscodePanel p-5 hover:bg-white/4 text-left"
                >
                    <div className="font-semibold">{c.title}</div>
                    <div className="mt-1 text-sm text-vscodeMuted">{c.desc}</div>
                </button>
            ))}
        </div>
    </div>
);
}
