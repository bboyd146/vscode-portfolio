import { useEffect, useMemo, useState } from "react";

const DEFAULT_TAB = { id: "start", label: "START_HERE.md", route: "/" };

export function useWorkspaceStore() {
  const [mode, setMode] = useState("dev"); // "dev" | "simple"
  const [tabs, setTabs] = useState([DEFAULT_TAB]);

  // auto default to simple on small screens (but allow user override)
  useEffect(() => {
    const saved = localStorage.getItem("bb_mode");
    if (saved) return setMode(saved);

    const mql = window.matchMedia("(max-width: 768px)");
    const next = mql.matches ? "simple" : "dev";
    setMode(next);
    localStorage.setItem("bb_mode", next);
  }, []);

  const openTab = (tab) => {
    setTabs((prev) => {
      if (prev.some((t) => t.route === tab.route)) return prev;
      return [...prev, tab];
    });
  };

  const closeTab = (route) => {
    setTabs((prev) => {
      const next = prev.filter((t) => t.route !== route);
      return next.length ? next : [DEFAULT_TAB];
    });
  };

  const toggleMode = () => {
    setMode((m) => {
      const next = m === "dev" ? "simple" : "dev";
      localStorage.setItem("bb_mode", next);
      return next;
    });
  };

  return useMemo(
    () => ({ mode, tabs, openTab, closeTab, toggleMode }),
    [mode, tabs]
  );
}
