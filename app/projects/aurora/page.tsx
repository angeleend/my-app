import Link from "next/link";

export const metadata = {
  title: "Case study — Self-Kiosk for Matcha Maiko",
  description: "Case study: Self-Kiosk for Matcha Maiko — research, design decisions and learnings from user testing.",
};

export default function AuroraCaseStudy() {
  return (
    <main className="page-container">
      <header style={{ marginBottom: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div>
            <h1 className="title" style={{ margin: '6px 0 0' }}>Self‑Kiosk for Matcha Maiko</h1>
            <div style={{ color: 'rgba(0,0,0,0.7)', marginTop: 8 }}>
              <small>Case Study — UX research & product design</small>
            </div>
          </div>
        </div>

        <p className="mt-4" style={{ maxWidth: '68ch', color: 'rgba(0,0,0,0.85)' }}>
          A concise walkthrough of the core problem, research insights, design decisions, and measurable
          outcomes from prototyping and user testing. This page highlights the process and key takeaways.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 28, alignItems: 'start' }}>
        <div>
          <article id="introduction" className="featured-card" style={{ marginBottom: 20 }}>
            <div style={{ flex: '1 1 auto' }}>
              <h2 className="project-title">Introduction</h2>
              <p style={{ marginTop: 8, color: 'rgba(0,0,0,0.85)' }}>
                This project delivered a self-serve kiosk experience for Matcha Maiko. The goal was to reduce
                ordering friction, increase throughput during peak hours, and provide an accessible, clear
                interface for customers of diverse ages and tech-literacy.
              </p>
            </div>
          </article>

          <article id="needfinding" style={{ padding: 18, marginBottom: 20, background: 'white', color: 'var(--night)', borderRadius: 10 }}>
            <h3 className="project-title">Needfinding</h3>
            <p style={{ marginTop: 8 }}>
              We conducted contextual observations and short interviews in-store to understand pain points.
              Common findings: long queues, confusing menu hierarchy, unclear customization affordances,
              and limited visibility into special offers. Mapping customer journeys revealed key drop-off points.
            </p>
            <ul style={{ marginTop: 12 }}>
              <li>Customers need a way to narrow down menu options to what they're interested in.</li>
              <li>New customers need guidance to know which item will suit their tastes.</li>
              <li>Customers need to see the item and know exactly what they're paying for.</li>
              <li>Customers need to know whether a special request can be fulfilled.</li>
              <li>Customers need clear information on flavors and ingredients of the item they're buying.</li>
            </ul>
          </article>

          <article id="design-decisions" style={{ padding: 18, marginBottom: 20, background: 'white', color: 'var(--night)', borderRadius: 10 }}>
            <h3 className="project-title">Design decisions</h3>
            <p style={{ marginTop: 8 }}>
              Design prioritized clarity and speed: prominent CTAs, simplified choice architecture, large
              tappable targets, and an undoable customization flow. We used a single-column ordering flow
              to reduce cognitive load and surface recommended items contextually.
            </p>
          </article>

          <article id="user-testing" style={{ padding: 18, marginBottom: 20, background: 'white', color: 'var(--night)', borderRadius: 10 }}>
            <h3 className="project-title">User testing & adaptations</h3>
            <p style={{ marginTop: 8 }}>
              Usability testing with representative users surfaced a few recurring issues (visibility of
              modifiers, accidental taps). Iterations included persistent summary at the top, clearer
              modifier labels, and a confirm step before payment. After changes we observed reduced task
              completion time and higher success rates in prototype tasks.
            </p>
            <blockquote style={{ marginTop: 12, padding: '12px 16px', background: 'rgba(0,0,0,0.04)', borderLeft: '4px solid var(--clarnet)' }}>
              “Making the confirm step visible reduced accidental orders by 32% in moderated tests.”
            </blockquote>
          </article>

          <section id="key-questions" style={{ padding: 18, marginTop: 28, background: 'white', color: 'var(--night)', borderRadius: 10 }}>
            <h2 className="project-title">Key questions & recommendations</h2>

            <h3 style={{ marginTop: 12 }}>1) What elements is the self-kiosk lacking that drive customers to order with a barista instead?</h3>
            <ul style={{ marginTop: 8 }}>
              <li>Human guidance when the menu or customizations are confusing.</li>
              <li>Trust and reassurance (e.g., visible confirmation and the ability to ask quick questions).</li>
              <li>Speed for complex orders — customers sometimes prefer verbal shorthand with staff.</li>
              <li>Social interactions and small talk that are part of the experience for some customers.</li>
              <li>Accessibility: visual clarity, language support, and easy recoverability from mistakes.</li>
            </ul>

            <h3 style={{ marginTop: 12 }}>2) How can we bridge that gap?</h3>
            <ul style={{ marginTop: 8 }}>
              <li>Provide lightweight contextual help — short microcopy, ? tooltips, and a visible "Need help?" touch target that summons a staff helper.</li>
              <li>Surface a clear order summary and an explicit confirm step to build trust before payment.</li>
              <li>Offer quick presets and recommended bundles to speed complex ordering, plus a "repeat last" shortcut for frequent customers.</li>
              <li>Show estimated preparation time and queue position so customers feel informed.</li>
              <li>Train staff to proactively offer kiosk assistance during peak times and pair kiosks with a visible helper station.</li>
            </ul>

            <h3 style={{ marginTop: 12 }}>3) How do we make the self-kiosk more intuitive across all demographics?</h3>
            <ul style={{ marginTop: 8 }}>
              <li>Design for readability: large, high-contrast text, clear icons, and generous hit targets for tapping.</li>
              <li>Use progressive disclosure: start simple (top-level categories) and reveal customizations step-by-step.</li>
              <li>Provide language selectors and visual cues (images of items) to aid non-native speakers or low-literacy users.</li>
              <li>Support undo/modify actions prominently so users recover from mistakes easily.</li>
              <li>Run inclusive usability tests across age ranges and tech-literacy levels and iterate on failure modes observed.</li>
            </ul>

            <p style={{ marginTop: 12 }}>
              These changes are low-effort but high-impact: they combine design clarity, social support, and feedback
              to remove common objections to kiosks and increase adoption across demographics.
            </p>
          </section>
        </div>

        <aside style={{ position: 'sticky', top: 'calc(var(--site-nav-height) + 16px)' }}>
          <div style={{ padding: 16, borderRadius: 12, background: 'linear-gradient(180deg, rgba(243,242,242,1), rgba(249,249,249,1))', boxShadow: '0 8px 20px rgba(16,16,16,0.04)' }}>
            <strong style={{ display: 'block', marginBottom: 8 }}>On this page</strong>
            <nav aria-label="Case study table of contents">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li>
                  <a href="#introduction" style={{ display: 'block', padding: '6px 10px', borderRadius: 8, color: 'var(--clarnet)', textDecoration: 'none' }}>Introduction</a>
                </li>
                <li>
                  <a href="#needfinding" style={{ display: 'block', padding: '6px 10px', borderRadius: 8, color: 'var(--clarnet)', textDecoration: 'none' }}>Needfinding</a>
                </li>
                <li>
                  <a href="#design-decisions" style={{ display: 'block', padding: '6px 10px', borderRadius: 8, color: 'var(--clarnet)', textDecoration: 'none' }}>Design decisions</a>
                </li>
                <li>
                  <a href="#user-testing" style={{ display: 'block', padding: '6px 10px', borderRadius: 8, color: 'var(--clarnet)', textDecoration: 'none' }}>User testing</a>
                </li>
                <li>
                  <a href="#key-questions" style={{ display: 'block', padding: '6px 10px', borderRadius: 8, color: 'var(--clarnet)', textDecoration: 'none' }}>Key questions</a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </main>
  );
}
