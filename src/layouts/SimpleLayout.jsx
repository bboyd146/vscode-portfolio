import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { workspace } from "../data/workspace";

function flatten(items, out = []) {
  for (const it of items) {
    if (it.type === "file") out.push(it);
    if (it.type === "folder" && it.children) flatten(it.children, out);
  }
  return out;
}

export default function SimpleLayout() {
  const nav = useNavigate();
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  const files = flatten(workspace);



  return (
    <div className="h-dvh bg-[#0f0f10] text-white flex flex-col ">
      {/* Header */}
      <header className="h-14 flex items-center justify-between px-4 border-b border-white/10 bg-[#1e1e1e]">
        <div className="font-semibold tracking-tight">
          Bradley&nbsp;B<span className="text-white/50">()</span>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-sm"
        >
          Explore
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 min-h-0 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-6">
          <Outlet />
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="h-14 border-t border-white/10 bg-[#1e1e1e] flex items-center justify-around text-xs">
        <button
          onClick={() => nav("/")}
          className={`px-3 py-2 rounded-lg ${
            loc.pathname === "/" ? "bg-white/10" : "hover:bg-white/5"
          }`}
        >
          Home
        </button>

        <button
          onClick={() => nav("/about")}
          className={`px-3 py-2 rounded-lg ${
            loc.pathname === "/about" ? "bg-white/10" : "hover:bg-white/5"
          }`}
        >
          About
        </button>

        <button
          onClick={() => nav("/skills")}
          className={`px-3 py-2 rounded-lg ${
            loc.pathname === "/skills" ? "bg-white/10" : "hover:bg-white/5"
          }`}
        >
          Skills
        </button>

        <button
          onClick={() => nav("/contact")}
          className={`px-3 py-2 rounded-lg ${
            loc.pathname === "/contact" ? "bg-white/10" : "hover:bg-white/5"
          }`}
        >
          Contact
        </button>
      </nav>

      {/* Explorer Drawer */}
      {open && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <aside className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#1e1e1e] border-l border-white/10 flex flex-col">
            <div className="h-14 px-4 flex items-center justify-between border-b border-white/10">
              <div className="font-semibold text-sm">Explore</div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-2">
              {files.map((f) => {
                const active = f.route === loc.pathname;
                return (
                  <button
                    key={f.route}
                    onClick={() => {
                      nav(f.route);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm ${
                      active
                        ? "bg-white/10 text-white"
                        : "hover:bg-white/5 text-white/80"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>

            <div className="p-4 border-t border-white/10 text-xs text-white/50">
              Tip: Switch to Dev Mode on desktop for the full workspace experience.
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
