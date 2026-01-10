import { useState } from "react";
import clsx from "clsx";

function FileRow({ node, level, active, onOpen }) {
  return (
    <button
      onClick={() => onOpen(node)}
      className={clsx(
        "w-full flex items-center gap-2 py-1.5 text-left",
        "hover:bg-white/5",
        active && "bg-white/8"
      )}
      style={{ paddingLeft: 12 + level * 12 }}
      title={node.label}
    >
      <span className="text-[11px] text-white/45 font-medium">MD</span>
      <span className={clsx("text-sm truncate", active ? "text-white" : "text-white/70")}>
        {node.label}
      </span>
    </button>
  );
}

function Node({ node, level = 0, activeRoute, onOpen }) {
  const [open, setOpen] = useState(true);

  if (node.type === "folder") {
    return (
      <div>
        <button
          className="w-full flex items-center gap-2 py-1.5 hover:bg-white/5 text-left"
          style={{ paddingLeft: 12 + level * 12 }}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xs text-white/55">{open ? "▾" : "▸"}</span>
          <span className="text-sm text-white/80">{node.label}</span>
        </button>

        {open && (
          <div>
            {node.children?.map((c) => (
              <Node
                key={c.id}
                node={c}
                level={level + 1}
                activeRoute={activeRoute}
                onOpen={onOpen}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <FileRow
      node={node}
      level={level}
      active={node.route === activeRoute}
      onOpen={onOpen}
    />
  );
}

export default function Explorer({ tree, activeRoute, onOpen }) {
  return (
    <div className="h-full panel-surface">
      <div className="px-3 py-2 text-xs tracking-wide text-white/60 border-b vscode-border">
        EXPLORER
      </div>
      <div className="py-2">
        {tree.map((n) => (
          <Node key={n.id} node={n} activeRoute={activeRoute} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}
