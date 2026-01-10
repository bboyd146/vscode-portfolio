export default function ActivityBar({ onOpenPalette }) {
  const items = [
    { label: "Explorer", emoji: "📁" },
    { label: "Search", emoji: "🔎" },
    { label: "Source", emoji: "🌿" },
    { label: "Run", emoji: "▶️" },
    { label: "Extensions", emoji: "🧩" },
  ];

  return (
    <aside className="w-14 bg-vscodePanel border-r border-vscodeBorder hidden md:flex flex-col items-center py-2">
      <button
        onClick={onOpenPalette}
        className="mt-1 mb-3 w-10 h-10 rounded-lg hover:bg-white/5 grid place-items-center"
        title="Command Palette (Ctrl/Cmd+K)"
      >
        ⌘
      </button>

      <div className="flex-1 flex flex-col gap-1">
        {items.map((it) => (
          <div
            key={it.label}
            className="w-10 h-10 rounded-lg hover:bg-white/5 grid place-items-center text-sm"
            title={it.label}
          >
            {it.emoji}
          </div>
        ))}
      </div>

      <div className="pb-2 text-xs text-vscodeMuted">
        bb
      </div>
    </aside>
  );
}
