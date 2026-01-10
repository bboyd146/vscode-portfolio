export default function LeadFollowup() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Lead_Followup_Automation.md</h1>
        <p className="text-white/70">
          An intelligent follow-up system that sends fast, personalized responses and escalates leads that go quiet.
        </p>
      </header>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
        <h2 className="text-lg font-semibold">What it solves</h2>
        <ul className="list-disc pl-5 text-white/75 space-y-1">
          <li>Slow responses that lose deals</li>
          <li>Inconsistent messaging across team members</li>
          <li>Leads getting forgotten after the first reply</li>
        </ul>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#252526] p-6 space-y-3">
          <h2 className="text-lg font-semibold">Flow</h2>
          <ol className="list-decimal pl-5 text-white/75 space-y-2">
            <li>Lead submits Google Form / website form</li>
            <li>Zapier normalizes fields</li>
            <li>AI drafts a personalized reply</li>
            <li>Email sends immediately</li>
            <li>Follow-up scheduled if no response</li>
          </ol>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-6 space-y-3">
          <h2 className="text-lg font-semibold">Snippet (reminder rule)</h2>
          <pre className="text-sm text-white/80 overflow-x-auto">
{`if (!lead.repliedWithinHours(24)) {
  sendReminderEmail(lead);
  notifyOwner("Lead needs attention", lead);
}`}
          </pre>
          <p className="text-white/65 text-sm">
            Keeps your pipeline warm without you babysitting it.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold">Impact</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { k: "Reply speed", v: "Minutes" },
            { k: "Consistency", v: "High" },
            { k: "Tracking", v: "Automated" },
          ].map((x) => (
            <div key={x.k} className="rounded-xl bg-black/20 border border-white/10 p-4">
              <div className="text-xs text-white/60">{x.k}</div>
              <div className="mt-1 text-xl font-semibold">{x.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#252526] p-6">
        <h2 className="text-lg font-semibold">Tech Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Zapier", "OpenAI API", "Google Forms", "Gmail", "Sheets CRM"].map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-black/30 border border-white/10 text-sm text-white/80">
              {t}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
