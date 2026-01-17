export default function AiNexus() {
return (
    <div className="space-y-6">
        <header className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">AI_Nexus — Conversational Chatbox</h1>
            <p className="text-white/70">
                AI Nexus is a focused conversational AI chatbox: a fast, responsive interface for interacting with LLMs
                (streaming responses, message history, and context management). Built as a polished demo of real-time
                AI-assisted conversations with practical UX for follow-up prompts and system instructions.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
                {["OpenAI", "React", "Node/Express", "Vite", "Render", "Tailwind CSS"].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/8 border border-white/10 text-sm text-white/80">
                        {t}
                    </span>
                ))}
            </div>
        </header>

        <section className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-3">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="text-white/75 leading-relaxed">
                The app provides a compact chat experience that streams model output to the user, preserves conversation
                history, and allows dynamically setting system prompts and context. It's intended as a practical demo for
                integrating LLMs into interactive frontends with production-minded features like token management and moderation.
            </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
                <h2 className="text-lg font-semibold">Key features</h2>
                <ul className="list-disc pl-5 text-white/75 space-y-1">
                    <li>Real-time streaming responses with progressive rendering</li>
                    <li>Conversation history & session-scoped context window</li>
                    <li>Configurable system prompts and user role handling</li>
                    <li>Simple moderation and rate limiting for safe demos</li>
                </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
                <h2 className="text-lg font-semibold">What I learned</h2>
                <ul className="list-disc pl-5 text-white/75 space-y-1">
                    <li>Designing UI for streaming LLM output and partial responses</li>
                    <li>Managing context windows and lightweight session state</li>
                    <li>Balancing UX responsiveness with backend reliability</li>
                    <li>Practical considerations around costs, tokens, and moderation</li>
                </ul>
            </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
            <h2 className="text-lg font-semibold">Links</h2>

            <div className="flex flex-wrap gap-2">
                <a
                    className="px-3 py-2 rounded-xl bg-white/8 hover:bg-white/12 text-sm"
                    href="https://github.com/bboyd146/ai-nexus"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub Repo
                </a>
                <a
                    className="px-3 py-2 rounded-xl bg-white/8 hover:bg-white/12 text-sm"
                    href="https://ai-nexus-y66x.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live Demo
                </a>
            </div>
        </section>
    </div>
);
}
