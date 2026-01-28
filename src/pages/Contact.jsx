function CopyButton({ value, label = "Copy" }) {
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      alert("Copied!");
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      alert("Copied!");
    }
  };

  return (
    <button
      onClick={onCopy}
      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-sm text-white/80"
    >
      {label}
    </button>
  );
}

export default function Contact() {
  const email = "braddboyd5@gmail.com";
  const location = "Katy, TX 77449";

return (
    <div className="space-y-6">
        <header className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">CONTACT.md</h1>
            <p className="text-white/70">
                Want to build something clean, fast, and actually useful? Let’s talk.
            </p>
        </header>

        <section className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                    <div className="text-xs text-white/55">Email</div>
                    <div className="text-white text-lg font-medium">{email}</div>
                    <div className="text-white/55 text-sm">{location}</div>
                </div>

                <div className="flex flex-wrap gap-2">
                    <a
                        href={`mailto:${email}?subject=Project%20Inquiry&body=Hey%20Bradley%2C%0A%0A`}
                        className="px-4 py-2 rounded-xl bg-[#007acc] text-white hover:brightness-110"
                    >
                        Email Me
                    </a>
                    <CopyButton value={email} label="Copy email" />
                </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                <div className="text-xs text-white/55 mb-2">Quick note</div>
                <p className="text-white/75">
                    I’m best at full-stack React apps, API integrations, database-backed systems, and automation workflows.
                    If you tell me your goal + timeline, I’ll tell you the cleanest build path.
                </p>
            </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
            <h2 className="text-lg font-semibold">Links</h2>
            <p className="text-white/70 text-sm">
                Feel free to visit my social profiles.
            </p>

            <div className="flex flex-wrap gap-2">
                <a
                    className="px-3 py-2 rounded-xl bg-white/8 hover:bg-white/12 text-sm"
                    href="https://www.linkedin.com/in/bradleydboyd/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    className="px-3 py-2 rounded-xl bg-white/8 hover:bg-white/12 text-sm"
                    href="https://github.com/bboyd146"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    className="px-3 py-2 rounded-xl bg-white/8 hover:bg-white/12 text-sm"
                    href="https://bradley-b.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Portfolio
                </a>
            </div>
        </section>
    </div>
);
}
