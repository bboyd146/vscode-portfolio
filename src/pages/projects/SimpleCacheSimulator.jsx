export default function SimpleCacheSimulator() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Simple_Cache_Simulator.java</h1>
        <p className="text-white/70">
          A Java cache simulator for analyzing hit/miss behavior across multiple cache architectures.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {["Java", "LRU", "Direct-mapped", "2-way / 4-way", "Fully associative", "Computer Architecture"].map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-white/8 border border-white/10 text-sm text-white/80">
              {t}
            </span>
          ))}
        </div>
      </header>

      <section className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-3">
        <h2 className="text-lg font-semibold">What it does</h2>
        <ul className="list-disc pl-5 text-white/75 space-y-1">
          <li>Simulates direct-mapped, set-associative (2-way / 4-way), and fully associative caches</li>
          <li>Implements LRU replacement policy</li>
          <li>Runs memory access traces and computes miss rates</li>
          <li>Supports configurable cache parameters + test input files</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
        <h2 className="text-lg font-semibold">Why it matters</h2>
        <p className="text-white/75 leading-relaxed">
          This project helped me connect theory (associativity, locality, replacement policies) to real measurable
          outcomes (miss rate differences across designs).
        </p>
      </section>
    </div>
  );
}
