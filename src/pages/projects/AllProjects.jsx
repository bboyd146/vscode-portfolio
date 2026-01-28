import { Link } from "react-router-dom";
import resoluteImg from "../../assets/resolute/home.png";
import alln1Img from "../../assets/alln1/homepage.png";

const projects = [
  // 🔹 CLIENT PROJECTS
  {
    title: "Resolute Tax & Accounting, CPA",
    path: "/projects/resolute-tax-cpa",
    description:
      "Client website development and SEO optimization for a licensed CPA firm, focused on trust, clarity, and performance.",
    tech: ["Client Work", "SEO", "WordPress", "Performance"],
    type: "client",
    image: resoluteImg,
  },
  {
    title: "All-N-1 Pest Control Management",
    path: "/projects/alln1-pest-control",
    description:
      "Production website development and ongoing SEO management for a local service business competing in local search.",
    tech: ["Client Work", "SEO", "Local Search", "Optimization"],
    type: "client",
    image: alln1Img,
  },
  // 🔹 PERSONAL PROJECTS
  {
    title: "AI Receptionist",
    path: "/projects/ai-receptionist",
    description:
      "AI-powered virtual receptionist that answers calls, captures leads, and routes conversations automatically.",
    tech: ["AI", "Node.js", "API", "Automation"],
  },
  {
    title: "Lead Follow-Up Automation",
    path: "/projects/lead-followup",
    description:
      "Automated SMS and email follow-ups using workflows to convert inbound leads faster.",
    tech: ["Zapier", "Twilio", "CRM"],
  },
  {
    title: "PixelPioneer Platform",
    path: "/projects/pixelpioneer",
    description:
      "Personal brand platform showcasing client projects, services, and AI tools.",
    tech: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Cache Simulator",
    path: "/projects/simple-cache-simulator",
    description:
      "Java-based cache simulator implementing direct-mapped and set-associative caches with LRU.",
    tech: ["Java", "Computer Architecture"],
  },
  {
    title: "Company Database System",
    path: "/projects/company-database",
    description:
      "Full-stack employee management system with authentication and role-based access.",
    tech: ["React", "Node", "MySQL", "JWT"],
  },
];

export default function AllProjects() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-2">Projects</h1>
      <p className="text-muted-foreground mb-8">
        A curated selection of real-world engineering projects and client work.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.title}
            to={project.path}
            className="group rounded-lg border border-border bg-card p-5 transition hover:border-primary"
          >
            {/* Image (optional) */}
            {project.image && (
              <div className="mb-4 overflow-hidden rounded-md border border-border">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-40 w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>
            )}

            {/* Title + badge */}
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-medium group-hover:text-primary">
                {project.title}
              </h2>

              {project.type === "client" && (
                <span className="text-xs rounded-full bg-primary/15 text-primary px-2 py-0.5">
                  CLIENT
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-xs rounded bg-muted px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 text-sm text-primary">
              View project →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
