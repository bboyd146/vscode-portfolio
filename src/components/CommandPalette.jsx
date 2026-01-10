import { useEffect, useMemo, useRef, useState } from "react";

function groupItems(items) {
  const groups = new Map();
  for (const it of items) {
    const g = it.group || "Files";
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(it);
  }
  return [...groups.entries()];
}


export default function CommandPalette({
  open,
  onClose,
  items,
  onPick,
  placeholder = '> Type to search… (try "start", "projects", "skills")',
}) {
  const [q, setQ] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  // reset when opening/closing
  useEffect(() => {
    if (!open) {
      setQ("");
      setActiveIndex(0);
      return;
    }
    // focus on open
    const t = setTimeout(() => inputRef.current?.focus(), 0);
    return () => clearTimeout(t);
  }, [open]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    const base = items ?? [];
    if (!s) return base.slice(0, 10);

    // basic fuzzy-ish search: includes + word starts boosted
    const scored = base
      .map((it) => {
        const text = `${it.label} ${it.route}`.toLowerCase();
        let score = 0;

        if (text === s) score += 100;
        if (it.label.toLowerCase().startsWith(s)) score += 50;
        if (text.includes(s)) score += 10;

        // bonus for each matched token
        const tokens = s.split(/\s+/).filter(Boolean);
        for (const tok of tokens) {
          if (text.includes(tok)) score += 3;
        }

        return { it, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.it);

    return scored.slice(0, 12);
  }, [q, items]);

  // keep activeIndex in bounds
  useEffect(() => {
    if (activeIndex >= filtered.length) setActiveIndex(0);
  }, [filtered.length, activeIndex]);

  if (!open) return null;

  const pick = (item) => {
    if (!item) return;
    onPick?.(item);
    onClose?.();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm grid place-items-center p-4"
      onMouseDown={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-[#252526] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,.55)] overflow-hidden"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="px-4 py-3 border-b border-white/10">
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") onClose?.();

              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
              }
              if (e.key === "ArrowUp") {
                e.preventDefault();
                setActiveIndex((i) => Math.max(i - 1, 0));
              }
              if (e.key === "Enter") {
                e.preventDefault();
                pick(filtered[activeIndex]);
              }
            }}
            placeholder={placeholder}
            className="w-full bg-transparent outline-none text-sm text-white placeholder:text-white/50"
          />
        </div>

        <div className="max-h-80 overflow-y-auto">
          {filtered.map((item, idx) => {
const grouped = groupItems(filtered);

return (
  <div
    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm grid place-items-center p-4"
    onMouseDown={onClose}
    aria-modal="true"
    role="dialog"
  >
    <div
      className="w-full max-w-xl rounded-2xl bg-[#252526] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,.55)] overflow-hidden"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="px-4 py-3 border-b border-white/10">
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setActiveIndex(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") onClose?.();
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              setActiveIndex((i) => Math.max(i - 1, 0));
            }
            if (e.key === "Enter") {
              e.preventDefault();
              pick(filtered[activeIndex]);
            }
          }}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-sm text-white placeholder:text-white/50"
        />
      </div>

      <div className="max-h-80 overflow-y-auto">
        {grouped.map(([groupName, itemsInGroup]) => (
          <div key={groupName}>
            <div className="px-4 py-2 text-[11px] tracking-wide text-white/45 border-b border-white/10 bg-black/10">
              {groupName.toUpperCase()}
            </div>

            {itemsInGroup.map((item) => {
              const idx = filtered.findIndex((x) => x.route === item.route && x.label === item.label);
              const active = idx === activeIndex;

              return (
                <button
                  key={`${item.group || "Files"}:${item.route}:${item.label}`}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => pick(item)}
                  className={`w-full text-left px-4 py-3 flex items-center justify-between ${
                    active ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                >
                  <div className="min-w-0">
                    <div className="text-sm text-white truncate">
                      {item.icon ? <span className="mr-2">{item.icon}</span> : null}
                      {item.label}
                    </div>
                    <div className="text-xs text-white/50 truncate">{item.hint || item.route}</div>
                  </div>
                  <div className="text-[11px] text-white/60 ml-4 whitespace-nowrap">
                    Enter ↵
                  </div>
                </button>
              );
            })}
          </div>
        ))}

        {!filtered.length && (
          <div className="px-4 py-8 text-sm text-white/60">
            No matches. Try <span className="text-white">start</span>,{" "}
            <span className="text-white">skills</span>, or{" "}
            <span className="text-white">email</span>.
          </div>
        )}
      </div>

      <div className="px-4 py-2 border-t border-white/10 text-[11px] text-white/50 flex items-center justify-between">
        <span>↑ ↓ navigate • Enter open • Esc close</span>
        <span>Ctrl/Cmd + K</span>
      </div>
    </div>
  </div>
);
          })}

          {!filtered.length && (
            <div className="px-4 py-8 text-sm text-white/60">
              No matches. Try <span className="text-white">start</span>,{" "}
              <span className="text-white">skills</span>, or{" "}
              <span className="text-white">contact</span>. (Or type “coffee”… I’m still working on that.)
            </div>
          )}
        </div>

        <div className="px-4 py-2 border-t border-white/10 text-[11px] text-white/50 flex items-center justify-between">
          <span>↑ ↓ navigate • Enter open • Esc close</span>
          <span>Ctrl/Cmd + K</span>
        </div>
      </div>
    </div>
  );
}
