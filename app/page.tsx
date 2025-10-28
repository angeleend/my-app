import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll"; // Import the new component

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <header id="home" className="relative">
        <div className="hero relative z-10 py-20 lg:py-28">
          <div className="page-container">
            <h1 className="title">Developer & Designer</h1>
            <div className="subtitle epigraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <p className="mt-6 max-w-2xl">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </header>

      <main className="px-6 pb-24">
        {/* === FEATURED PROJECT SECTION (Reveals First) === */}
        <RevealOnScroll delay={0}>
          <section id="featured" className="page-container -mt-6">
            <h2 className="text-2xl font-semibold mb-6">Featured Project</h2>
            <article className="featured-card" aria-labelledby="feat-aurora">
              <a href="/projects/aurora" className="card-link">
                <figure className="featured-figure">
                  <Image
                    src="/images/aurora.jpg"
                    alt="Aurora featured screenshot"
                    fill
                    className="project-image"
                  />
                </figure>

                <div className="featured-content">
                  <h3 id="feat-aurora" className="project-title">
                    Self-Kiosk for Matcha Maiko
                  </h3>
                  <p className="project-sub">
                    A large interactive dashboard showcasing complex
                    visualizations, realtime updates, and accessible controls.
                  </p>
                </div>
              </a>
              <div className="project-actions" style={{ marginTop: 12 }}>
                <a className="action-btn" href="#">
                  Live demo
                </a>
                <a className="action-btn" href="#">
                  Case study
                </a>
              </div>
            </article>
          </section>
        </RevealOnScroll>
        
        {/* === SELECTED PROJECTS SECTION (Reveals Second) === */}
        <RevealOnScroll delay={150}> {/* Added a slight delay for staggered look */}
          <section id="projects" className="page-container -mt-6">
            <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
            <div className="projects-grid">
              <article className="project-card" aria-labelledby="proj-buzzfeed">
                <a href="/projects/buzzfeed">
                  <figure className="project-figure">
                    <Image
                      src="/images/buzzfeed.jpg"
                      alt="Buzzfeed project screenshot"
                      fill
                      className="project-image"
                    />
                  </figure>
                  <div className="project-overlay">
                    <h3 id="proj-aurora" className="project-title">
                      Aurora
                    </h3>
                    <p className="project-sub">Interactive dashboard</p>
                  </div>
                </a>
              </article>

              <article className="project-card" aria-labelledby="proj-lyra">
                <a href="/projects/lyra">
                  <figure className="project-figure">
                    <Image
                      src="/images/lyra.jpg"
                      alt="Lyra project screenshot"
                      fill
                      className="project-image"
                    />
                  </figure>
                  <div className="project-overlay">
                    <h3 id="proj-lyra" className="project-title">
                      Lyra
                    </h3>
                    <p className="project-sub">Publishing tool</p>
                  </div>
                </a>
              </article>

              <article className="project-card" aria-labelledby="proj-atlas">
                <a href="/projects/atlas">
                  <figure className="project-figure">
                    <Image
                      src="/images/atlas.jpg"
                      alt="Atlas project screenshot"
                      fill
                      className="project-image"
                    />
                  </figure>
                  <div className="project-overlay">
                    <h3 id="proj-atlas" className="project-title">
                      Atlas
                    </h3>
                    <p className="project-sub">Design system</p>
                  </div>
                </a>
              </article>
            </div>
          </section>
        </RevealOnScroll>
        
        {/* === SKILLS SECTION (Reveals Third) === */}
        <RevealOnScroll delay={250}>
          <section id="skills" className="page-container">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <p>
              React, TypeScript, Design Systems, Accessibility, Performance.
            </p>
          </section>
        </RevealOnScroll>

        {/* === ABOUT SECTION (Reveals Last) === */}
        <RevealOnScroll delay={350}>
          <section id="about" className="page-container">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="max-w-2xl"></p>
          </section>
        </RevealOnScroll>
      </main>

      <footer className="border-t border-gray-100 dark:border-gray-800 mt-12 py-6">
        <div className="px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <div>© {new Date().getFullYear()} Angeleen Duong</div>
          <div className="mt-4 sm:mt-0 flex gap-4">
            <a href="/privacy" className="hover:underline">
              Privacy
            </a>
            <a href="/terms" className="hover:underline">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}