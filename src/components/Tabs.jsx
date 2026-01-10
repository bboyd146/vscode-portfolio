import clsx from "clsx";

export default function Tabs({ tabs, activeRoute, onGo, onClose }) {
  return (
    <div className="h-11 bg-[#252526]/75 panel-surface border-b vscode-border flex items-stretch overflow-x-auto">
      {tabs.map((t) => {
        const active = t.route === activeRoute;

        return (
          <div
            key={t.route}
            className={clsx(
              "group flex items-center gap-2 px-3 border-r vscode-border cursor-pointer select-none whitespace-nowrap",
              "border-t-2 border-t-transparent",
              active ? "bg-[#1f232a] border-t-[#007acc]" : "hover:bg-white/5"
            )}
            onClick={() => onGo(t.route)}
          >
            <span className={clsx("text-sm", active ? "text-white" : "text-white/70")}>
              {t.label}
            </span>

            <button
              className={clsx(
                "ml-1 rounded-md px-1 text-white/50 hover:text-white hover:bg-white/10",
                "opacity-0 group-hover:opacity-100"
              )}
              onClick={(e) => {
                e.stopPropagation();
                onClose(t.route);
              }}
              aria-label={`Close ${t.label}`}
              title="Close"
            >
              ✕
            </button>
          </div>
        );
      })}
    </div>
  );
}
