export const workspace = [
  { type: "file", id: "start", label: "START_HERE.md", route: "/" },
  { type: "file", id: "about", label: "ABOUT.md", route: "/about" },

     { id: "resume", type: "action", label: "Resume.pdf", action: "downloadResume" },
     
  {
    type: "folder",
    id: "projects",
    label: "PROJECTS",
    children: [
      { type: "file", id: "projects_index", label: "All_Projects.md", route: "/projects" },
      { type: "file", id: "ai", label: "AI_Receptionist.md", route: "/projects/ai-receptionist" },
      { type: "file", id: "lead", label: "Lead_Followup_Automation.md", route: "/projects/lead-followup" },
      { type: "file", id: "database", label: "Company_Database.md", route: "/projects/company-database" },
      { type: "file", id: "cache", label: "Simple_Cache_Simulator.md", route: "/projects/simple-cache-simulator" },
      { type: "file", id: "pixel", label: "PixelPioneer_Services.md", route: "/projects/pixelpioneer" },
      { type: "file", id: "nexus", label: "AI_Nexus.md", route: "/projects/ai-nexus" },
      { type: "file", id: "n1pest", label: "AllN1_Pest_Control.md", route: "/projects/alln1-pest-control" },
      { type: "file", id: "resolute", label: "Resolute_Tax_CPA.md", route: "/projects/resolute-tax-cpa" },
    ],
  },
  { type: "file", id: "exp", label: "EXPERIENCE.log", route: "/experience" },
  { type: "file", id: "skills", label: "SKILLS.json", route: "/skills" },
  { type: "file", id: "contact", label: "CONTACT.md", route: "/contact" },
];
