import { useMemo } from "react";
import { workspace } from "../data/workspace";

function findPath(tree, route, trail = []) {
  for (const node of tree) {
    if (node.type === "file" && node.route === route) return [...trail, node];
    if (node.type === "folder" && node.children) {
      const found = findPath(node.children, route, [...trail, node]);
      if (found) return found;
    }
  }
  return null;
}

function fileHint(label = "") {
  const lower = label.toLowerCase();
  if (lower.endsWith(".json")) return "JSON";
  if (lower.endsWith(".md")) return "MD";
  if (lower.endsWith(".log")) return "LOG";
  return "FILE";
}

export default function Breadcrumbs({ route }) {
  const path = useMemo(() => findPath(workspace, route) ?? [], [route]);

  const crumbs = useMemo(() => {
    const base = [{ label: "HOME", type: "root" }];
    const mapped = path.map((n) => ({ label: n.label, type: n.type }));
    return [...base, ...mapped];
  }, [path]);

  const last = crumbs[crumbs.length - 1];
  const hint = last?.type === "file" ? fileHint(last.label) : null;

  return (
    <div className="h-9 flex items-center px-4 md:px-8 border-b vscode-border bg-black/10">
      <div className="text-xs text-white/55 flex items-center gap-2 overflow-hidden min-w-0">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <span key={`${c.label}-${i}`} className="flex items-center gap-2 min-w-0">
              <span className={isLast ? "text-white/85 font-medium truncate" : "truncate"}>
                {c.label}
              </span>
              {i < crumbs.length - 1 && <span className="text-white/30">/</span>}
            </span>
          );
        })}
      </div>

      <div className="ml-auto flex items-center gap-3 text-[11px] text-white/45">
        {hint && (
          <span className="px-2 py-0.5 rounded-md bg-white/6 border border-white/10 text-white/60">
            {hint}
          </span>
        )}
        <span className="hidden sm:block">Ctrl/Cmd+K</span>
      </div>
    </div>
  );
}
