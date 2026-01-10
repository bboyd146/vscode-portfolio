export default function CompanyDatabase() {
return (
    <div className="space-y-6">
        <header className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Company_Database.md</h1>
            <p className="text-white/70">
                A full-stack company database management system that visualizes organizational data and makes it easy to
                view, update, and maintain records.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
                {["React", "Node/Express", "MySQL", "AWS RDS", "Render", "Data Visualization"].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/8 border border-white/10 text-sm text-white/80">
                        {t}
                    </span>
                ))}
            </div>
        </header>

        <section className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-3">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="text-white/75 leading-relaxed">
                This project connects a MySQL database (hosted on AWS RDS) to an Express/Node backend and a React frontend.
                The goal is to make org data readable and manageable through clean UI and structured endpoints.
            </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
                <h2 className="text-lg font-semibold">Key features</h2>
                <ul className="list-disc pl-5 text-white/75 space-y-1">
                    <li>CRUD operations for company entities</li>
                    <li>Clean data views for org structure</li>
                    <li>Backend models + database connection layer</li>
                    <li>Deployed full-stack app (frontend + backend)</li>
                </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
                <h2 className="text-lg font-semibold">What I learned</h2>
                <ul className="list-disc pl-5 text-white/75 space-y-1">
                    <li>Designing stable data models and relationships</li>
                    <li>Building maintainable Express routes</li>
                    <li>Deploying with real DB hosting (AWS RDS)</li>
                    <li>Frontend UX for dense datasets</li>
                </ul>
            </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
            <h2 className="text-lg font-semibold">Links</h2>
            <p className="text-white/70 text-sm">
                Add your real GitHub + Live links when ready.
            </p>
            <div className="flex flex-wrap gap-2">
                <a
                    className="px-3 py-2 rounded-xl bg-white/8 hover:bg-white/12 text-sm"
                    href="https://github.com/bboyd146/company-employee-data"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub Repo
                </a>
                <a
                    className="px-3 py-2 rounded-xl bg-white/8 hover:bg-white/12 text-sm"
                    href="https://company-employee-data.onrender.com/"
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
