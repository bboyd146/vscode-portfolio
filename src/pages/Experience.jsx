const Role = ({ title, org, location, dates, bullets, note }) => (
  <section className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="text-white/70">
          {org}
          {location ? ` — ${location}` : ""}
        </div>
      </div>
      <div className="text-white/55 text-sm">{dates}</div>
    </div>

    <ul className="list-disc pl-5 text-white/75 space-y-1">
      {bullets.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>

    {note && <p className="text-white/55 text-sm">{note}</p>}
  </section>
);

export default function Experience() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">EXPERIENCE.log</h1>
        <p className="text-white/70">
          A quick log of where I’ve worked and what I’ve shipped — with the parts that actually matter.
        </p>
      </header>

      <Role
        title="Freelance Software Developer"
        org="Freelance | Self-Employed"
        location="Houston, TX"
        dates="2021 – Present"
        bullets={[
          "Design, develop, and deploy custom web and automation solutions for small businesses and individual clients.",
          "Build responsive UI with React, Vite, and Tailwind focused on usability across devices.",
          "Implement backend services with Node and Express, connecting apps to SQL or NoSQL databases.",
          "Integrate third-party APIs and payment services when required.",
          "Deploy to cloud platforms and manage updates, fixes, and feature enhancements post-launch.",
          "Optimize performance and accessibility on desktop and mobile.",
        ]}
        note="Source: resume"
      />

      <Role
        title="SEO Webmaster / Web Developer"
        org="AllN1 Pest Control Management"
        location="Houston, TX"
        dates="2025 – Present"
        bullets={[
          "Built and maintained the company website with an SEO-optimized structure.",
          "Improved local search rankings via on-page SEO, metadata, and performance optimization.",
          "Managed content updates, analytics, and site performance.",
        ]}
        note="Source: resume"
      />

      <Role
        title="Instructor’s Assistant"
        org="Rice University (2U Inc.)"
        location="Houston, TX"
        dates="2021 – 2023"
        bullets={[
          "Supported instruction for a six-month full-stack web development program.",
          "Guided students in HTML, CSS, JavaScript, Node.js, SQL/NoSQL, Git, and React.",
          "Conducted office hours for individualized support and mentoring.",
        ]}
        note="Source: resume"
      />

      <Role
        title="Delivery Driver"
        org="KM Logistics"
        location="Houston, TX"
        dates="2020 – Present"
        bullets={[
          "Transport packages efficiently while maintaining high customer satisfaction.",
          "Optimize routes and resolve communication issues during delivery operations.",
          "Train new hires and contribute to operational success.",
        ]}
        note="Source: resume"
      />
    </div>
  );
}
