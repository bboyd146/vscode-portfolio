import { useLocation } from "react-router-dom";

const PAGE_META = {
  "/": {
    title: "START_HERE",
    pills: ["Full-Stack", "Automation", "React", "Node"],
    blurb: "This workspace is a portfolio. Click files, open tabs, use Ctrl/Cmd+K.",
  },
  "/about": {
    title: "ABOUT",
    pills: ["Background", "Education", "Focus"],
    blurb: "A quick read on who I am and how I build.",
  },
  "/experience": {
    title: "EXPERIENCE",
    pills: ["Timeline", "Impact", "Ops"],
    blurb: "A log of roles + what I shipped (not fluff).",
  },
  "/skills": {
    title: "SKILLS",
    pills: ["JS", "React", "Node", "SQL", "Cloud"],
    blurb: "Machine-readable + human-readable skills list.",
  },
  "/contact": {
    title: "CONTACT",
    pills: ["Email", "Availability", "Links"],
    blurb: "Best way to reach me and what I’m good at.",
  },
};

function matchMeta(pathname) {
  if (PAGE_META[pathname]) return PAGE_META[pathname];
  if (pathname.startsWith("/projects/")) {
    const file = pathname.split("/").pop() ?? "project";
    return {
      title: "PROJECT",
      pills: ["Case Study", "Build", "Results"],
      blurb: `Focused breakdown: ${file.replaceAll("-", " ")}`,
    };
  }
  return { title: "INFO", pills: ["Workspace"], blurb: "Details for this page." };
}

export default function RightSidebar() {
  const { pathname } = useLocation();
  const meta = matchMeta(pathname);

  return (
    <aside className="hidden lg:flex w-80 shrink-0 border-l vscode-border panel-surface">
      <div className="w-full h-full flex flex-col">
        <div className="px-4 py-3 border-b vscode-border">
          <div className="text-xs tracking-wide text-white/55">INSPECTOR</div>
          <div className="mt-1 text-sm font-semibold text-white/85">{meta.title}</div>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <div className="text-xs text-white/55 mb-2">Summary</div>
            <p className="text-sm text-white/75 leading-relaxed">{meta.blurb}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <div className="text-xs text-white/55 mb-2">Tags</div>
            <div className="flex flex-wrap gap-2">
              {meta.pills.map((p) => (
                <span
                  key={p}
                  className="px-2.5 py-1 rounded-full bg-white/8 border border-white/10 text-xs text-white/80"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <div className="text-xs text-white/55 mb-2">Quick actions</div>
            <div className="flex flex-col gap-2">
              <a
                href="/resume.pdf"
                className="rounded-lg px-3 py-2 bg-white/8 hover:bg-white/12 text-sm text-white/85"
              >
                Download Resume
              </a>
              <a
                href="mailto:braddboyd5@gmail.com?subject=Project%20Inquiry"
                className="rounded-lg px-3 py-2 bg-[#007acc]/80 hover:bg-[#007acc] text-sm text-white"
              >
                Email Bradley
              </a>
              <button
                onClick={() => navigator.clipboard?.writeText(window.location.href)}
                className="rounded-lg px-3 py-2 bg-white/8 hover:bg-white/12 text-sm text-white/85 text-left"
              >
                Copy page link
              </button>
            </div>
          </div>

          <div className="text-[11px] text-white/45">
            {/* tiny personality, not cheesy */}
            status: shipping &gt; perfecting
          </div>
        </div>
      </div>
    </aside>
  );
}
