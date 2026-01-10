const skills = {
  Languages: ["JavaScript", "Python", "Java", "C++", "SQL"],
  Frontend: ["React", "Vite", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  Databases: ["MongoDB", "MySQL", "SQL", "Sequelize"],
  "Cloud & Tools": ["AWS (RDS)", "Render", "Netlify", "Git", "GitHub", "VS Code"],
};

export default function Skills() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">SKILLS.json</h1>
        <p className="text-white/70">
          The “machine-readable” version. Also human-readable… because I’m polite.
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-2">
        {/* JSON View */}
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6 overflow-hidden">
          <div className="text-xs text-white/55 mb-3">raw</div>
          <pre className="text-sm text-white/80 overflow-x-auto">
            {JSON.stringify(skills, null, 2)}
            <span className="json-caret">▍</span>
          </pre>
        </div>

        {/* Pretty View */}
        <div className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-4">
          <div className="text-xs text-white/55">pretty</div>

          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="space-y-2">
              <h2 className="text-sm font-semibold text-white/85">{group}</h2>
              <div className="flex flex-wrap gap-2">
                {items.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white/8 border border-white/10 text-sm text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
