import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useWorkspaceStore } from "../state/useWorkspaceStore";
import ActivityBar from "../components/ActivityBar";
import Explorer from "../components/Explorer";
import Tabs from "../components/Tabs";
import StatusBar from "../components/StatusBar";
import CommandPalette from "../components/CommandPalette";
import MobileNav from "../components/MobileNav";
import Breadcrumbs from "../components/Breadcrumbs";
import RightSidebar from "../components/RightSidebar";
import { workspace } from "../data/workspace";
import { flattenWorkspace } from "../utils/flattenWorkspace";
import resumePdf from "../../public/resume.pdf";

function flatten(items, out = []) {
  for (const it of items) {
    if (it.type === "file") out.push(it);
    else if (it.children) flatten(it.children, out);
  }
  return out;
}

export default function WorkspaceLayout() {
  const nav = useNavigate();
  const loc = useLocation();
  const store = useWorkspaceStore();
  const files = useMemo(() => flatten(workspace), []);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const paletteItems = useMemo(() => {
    const files = flattenWorkspace(workspace).map((f) => ({
      ...f,
      group: "Files",
      icon: "📄",
      hint: f.route,
    }));

    const actions = [
      {
        label: "Email Bradley",
        route: "__action_email__",
        group: "Actions",
        icon: "✉️",
        hint: "mailto:braddboyd5@gmail.com",
        run: () =>
          window.location.assign(
            "mailto:braddboyd5@gmail.com?subject=Project%20Inquiry",
          ),
      },
      {
        label: "Download Resume",
        route: "__action_resume__",
        group: "Actions",
        icon: "⬇️",
        hint: "/resume.pdf",
        run: () => window.location.assign("/resume.pdf"),
      },
      {
        label: "Toggle Mode (Dev/Simple)",
        route: "__action_mode__",
        group: "Actions",
        icon: "🌓",
        hint: "Switch layouts",
        run: () => store.toggleMode(),
      },
      {
        label: "Copy Email",
        route: "__action_copy_email__",
        group: "Actions",
        icon: "📋",
        hint: "Copy to clipboard",
        run: () => navigator.clipboard?.writeText("braddboyd5@gmail.com"),
      },
    ];

    return [...actions, ...files];
  }, [store]);

  // open tab when route changes
  useEffect(() => {
    const match = files.find((f) => f.route === loc.pathname);
    if (match)
      store.openTab({ id: match.id, label: match.label, route: match.route });
  }, [loc.pathname]);

  useEffect(() => {
    document.documentElement.classList.add("scroll-lock");
    return () => document.documentElement.classList.remove("scroll-lock");
  }, []);

  // command palette shortcut: Ctrl/Cmd+K
  useEffect(() => {
    const onKey = (e) => {
      const isK = e.key.toLowerCase() === "k";
      if ((e.ctrlKey || e.metaKey) && isK) {
        e.preventDefault();
        setPaletteOpen(true);
      }
      if (e.key === "Escape") setPaletteOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      const isK = e.key.toLowerCase() === "k";
      if ((e.ctrlKey || e.metaKey) && isK) {
        e.preventDefault();
        setPaletteOpen(true);
      }
      if (e.key === "Escape") setPaletteOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const shell = (
    <div className="min-h-dvh text-vscodeText workbench-bg workbench-noise">
      <div className="flex h-dvh overflow-hidden">
        {/* Dev chrome */}
        {store.mode === "dev" && (
          <>
            <ActivityBar onOpenPalette={() => setPaletteOpen(true)} />
            <div className="w-72 hidden md:block border-r vscode-border panel-surface">
              <Explorer
                tree={workspace}
                activeRoute={loc.pathname}
                onOpen={(item) => {
                  if (
                    item.type === "action" &&
                    item.action === "downloadResume"
                  ) {
                    window.open(resumePdf, "_blank", "noopener,noreferrer");
                    return;
                  }
                  nav(item.route);
                }}
              />
            </div>
          </>
        )}

        {/* Editor */}
        <div className="flex-1 min-w-0 min-h-0 flex flex-col editor-surface shadow-[inset_0_1px_0_rgba(255,255,255,.04)]">
          {store.mode === "dev" && (
            <Tabs
              tabs={store.tabs}
              activeRoute={loc.pathname}
              onGo={(route) => nav(route)}
              onClose={(route) => store.closeTab(route)}
            />
          )}

          <Breadcrumbs route={loc.pathname} />

          {/* Content row */}
          <div className="flex-1 min-w-0 min-h-0 flex">
            {/* ✅ this is the scroll container */}
            <main className="flex-1 min-w-0 min-h-0 overflow-y-auto">
              <div className="mx-auto max-w-5xl px-4 py-6 md:px-8 md:py-10">
                <Outlet />
              </div>
            </main>

            {/* sidebar must also be shrinkable */}
            <div className="hidden lg:block w-80 shrink-0 min-h-0">
              <RightSidebar />
            </div>
          </div>

          <StatusBar
            mode={store.mode}
            onToggleMode={store.toggleMode}
            onOpenPalette={() => setPaletteOpen(true)}
          />
        </div>
      </div>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        items={paletteItems}
        onPick={(item) => {
          if (item.run) return item.run();
          nav(item.route);
        }}
      />

      {/* Mobile navigation (Simple Mode) */}
      {store.mode === "simple" && (
        <MobileNav
          onExplore={() => setPaletteOpen(true)}
          onMode={store.toggleMode}
          onGo={(route) => nav(route)}
        />
      )}
    </div>
  );

  return shell;
}
