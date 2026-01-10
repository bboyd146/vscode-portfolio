
export default function StatusBar({ mode, onToggleMode, onOpenPalette }) {
  return (
    <div className="h-8 bg-vscodeBlue text-white flex items-center justify-between px-3 text-xs">
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline">🚀  Ready</span>
        <button onClick={onOpenPalette} className="hover:underline">
          Ctrl/Cmd+K
        </button>
        <a href="/resume.pdf" className="hover:underline">
          Resume
        </a>
        <a href="mailto:braddboyd5@gmail.com" className="hover:underline">
          Email
        </a>
      </div>

      <button onClick={onToggleMode} className="hover:underline">
        Mode: {mode === "dev" ? "Dev" : "Simple"}
      </button>
    </div>
  );
}
