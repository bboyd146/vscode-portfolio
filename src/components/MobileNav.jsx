export default function MobileNav({ onExplore, onMode, onGo }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-vscodePanel border-t border-vscodeBorder h-20 flex items-center justify-around text-xs">
      <button onClick={() => onGo("/")} className="px-3 py-2">Home</button>
      <button onClick={() => onGo("/about")} className="px-3 py-2">About</button>
      <button onClick={onExplore} className="px-3 py-2">Explore</button>
      <button onClick={() => onGo("/contact")} className="px-3 py-2">Contact</button>
      <button onClick={onMode} className="px-3 py-2">Mode</button>
    </nav>
  );
}
