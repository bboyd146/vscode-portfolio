export default function AiReceptionist() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">AI_Receptionist.md</h1>
        <p className="text-white/70">
          A 24/7 AI receptionist that answers phone calls, handles common requests, captures lead details,
          and syncs everything into a CRM — without sounding like a robot reading a script.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {["Voice AI", "Zapier", "CRM Sync", "Lead Capture", "Call Logging", "After-hours Coverage"].map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-white/8 border border-white/10 text-sm text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* TL;DR */}
      <section className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-3">
        <h2 className="text-lg font-semibold">TL;DR</h2>
        <p className="text-white/75 leading-relaxed">
          Businesses lose money when calls go to voicemail. This automation answers calls instantly, asks the right
          questions, books appointments (if allowed), creates/updates CRM records, and logs the call summary +
          structured fields so the team can follow up fast.
        </p>
        <p className="text-white/55 text-sm">
          Bonus: it never calls out sick, and it doesn’t put people on hold “for just a second” for 7 minutes.
        </p>
      </section>

      {/* Problem / Goal */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
          <h2 className="text-lg font-semibold">Problem</h2>
          <ul className="list-disc pl-5 text-white/75 space-y-1">
            <li>Missed calls = missed revenue (especially after-hours).</li>
            <li>Front desk is overloaded with repeat questions.</li>
            <li>Leads don’t get logged consistently, so follow-up is messy.</li>
            <li>CRM data quality suffers: incomplete fields, duplicates, no context.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
          <h2 className="text-lg font-semibold">Goal</h2>
          <ul className="list-disc pl-5 text-white/75 space-y-1">
            <li>Answer every call instantly with a friendly, consistent experience.</li>
            <li>Collect structured info (name, need, timeline, address, etc.).</li>
            <li>Push clean records into a CRM and notify the team.</li>
            <li>Log summaries + call recordings for accountability and training.</li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-4">
        <h2 className="text-lg font-semibold">How it works</h2>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4 space-y-2">
            <div className="text-xs text-white/55">Step 1</div>
            <div className="text-white/85 font-medium">Call comes in</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Caller reaches the business line. The AI receptionist answers immediately (24/7), identifies intent
              (lead, support, scheduling, pricing, general questions), and chooses the right script.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4 space-y-2">
            <div className="text-xs text-white/55">Step 2</div>
            <div className="text-white/85 font-medium">Smart intake</div>
            <p className="text-white/70 text-sm leading-relaxed">
              The agent asks only what’s needed — like a real receptionist: name, callback number, service type,
              timeline, budget range, address/service area, urgency, preferred appointment times.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4 space-y-2">
            <div className="text-xs text-white/55">Step 3</div>
            <div className="text-white/85 font-medium">Structured logging + CRM</div>
            <p className="text-white/70 text-sm leading-relaxed">
              The automation creates/updates a CRM contact + lead/opportunity, attaches a call summary, saves key
              fields, and triggers follow-up: email/SMS, task assignment, Slack alert, or ticket creation.
            </p>
          </div>
        </div>
      </section>

      {/* Data captured */}
      <section className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
        <h2 className="text-lg font-semibold">What gets captured</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            ["Caller identity", "Name, phone, email (if provided), best callback time"],
            ["Intent + category", "Lead, existing client, scheduling, support, pricing, emergency"],
            ["Business context", "Service type, location, urgency, timeline, budget range"],
            ["Outcome", "Booked appointment / created lead / escalated / message taken"],
            ["Artifacts", "Transcript, summary, tags, and (optionally) call recording link"],
            ["Routing", "Assigned rep/team, priority score, next action + due date"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-sm font-semibold text-white/85">{k}</div>
              <div className="text-sm text-white/70 mt-1">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-4">
        <h2 className="text-lg font-semibold">Architecture</h2>

        <div className="rounded-xl border border-white/10 bg-black/20 p-4 overflow-x-auto">
          <pre className="text-sm text-white/80">
{`Inbound Call (Business Number)
        |
        v
Voice AI Agent (24/7 receptionist)
  - intent detection
  - guided intake (dynamic questions)
  - polite escalation rules
        |
        v
Automation Layer (Zapier / Webhooks)
  - normalize fields
  - dedupe contacts
  - enrich + validate
        |
        +--> CRM (create/update Contact + Lead/Deal)
        |
        +--> Logging (Google Sheets / DB)
        |
        +--> Notifications (Email/SMS/Slack)
        |
        +--> Scheduling (Calendar link / booking)
`}
          </pre>
        </div>

        <p className="text-white/55 text-sm">
          Built as modular steps so each client can swap CRMs and notification channels without rewriting the agent.
        </p>
      </section>

      {/* Key features */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
          <h2 className="text-lg font-semibold">Key features</h2>
          <ul className="list-disc pl-5 text-white/75 space-y-1">
            <li>24/7 answering with consistent tone and brand voice</li>
            <li>Dynamic intake (asks follow-ups only when needed)</li>
            <li>Escalation rules (urgent calls route to a human)</li>
            <li>CRM create/update + dedupe logic</li>
            <li>Call summary + transcript + tags</li>
            <li>Follow-up automation (SMS/email/task creation)</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
          <h2 className="text-lg font-semibold">Guardrails</h2>
          <ul className="list-disc pl-5 text-white/75 space-y-1">
            <li>Safe fallback when caller is unclear (“Let me confirm…”)</li>
            <li>Privacy-aware logging (configurable redaction)</li>
            <li>“Never promise” policy (quotes/availability only if configured)</li>
            <li>Human handoff with context (no repeating yourself)</li>
            <li>Rate limits + monitoring to prevent spam loops</li>
          </ul>
        </div>
      </section>

      {/* Tech stack */}
      <section className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-3">
        <h2 className="text-lg font-semibold">Tech stack</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Voice AI (Vapi / similar)",
            "Zapier (automations)",
            "Webhooks (for structured payloads)",
            "CRM (HubSpot / Salesforce / GoHighLevel / etc.)",
            "Google Sheets / DB logging",
            "Email/SMS notifications",
          ].map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-white/8 border border-white/10 text-sm text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-white/55 text-sm">
          The CRM is pluggable — the “contract” is the structured payload (JSON), not a vendor lock-in.
        </p>
      </section>

      {/* Metrics / Outcomes */}
      <section className="rounded-2xl border border-white/10 bg-[#252526]/60 p-6 space-y-3">
        <h2 className="text-lg font-semibold">Outcomes (what this improves)</h2>
        <ul className="list-disc pl-5 text-white/75 space-y-1">
          <li>Higher lead capture rate (no more “missed call” black hole)</li>
          <li>Faster response times (team gets clean info instantly)</li>
          <li>Better CRM hygiene (structured fields + dedupe)</li>
          <li>Reduced front-desk load (answers FAQs + triages calls)</li>
          <li>Better customer experience (clear, consistent, polite)</li>
        </ul>
        <p className="text-white/55 text-sm">
          You can easily add business-specific KPIs once connected (e.g., booking rate, missed-call recovery, average
          time-to-follow-up).
        </p>
      </section>

      {/* Next steps */}
      <section className="rounded-2xl border border-white/10 bg-white/4 p-6 space-y-3">
        <h2 className="text-lg font-semibold">Next steps</h2>
        <ul className="list-disc pl-5 text-white/75 space-y-1">
          <li>Multi-language support (Spanish + English)</li>
          <li>Knowledge base ingestion (answer business FAQs reliably)</li>
          <li>Call sentiment + urgency scoring</li>
          <li>Live human handoff (warm transfer with summary)</li>
          <li>Analytics dashboard (calls, intents, conversions, follow-ups)</li>
        </ul>

        <div className="pt-2 text-white/55 text-sm">
          If you’re a business owner reading this: yes, it can also politely handle “Are you open today?” 40 times a day.
        </div>
      </section>
    </div>
  );
}
