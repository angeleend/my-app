import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll"; // Import the new component

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <header id="home" className="relative">
        <div className="hero relative z-10 py-20 lg:py-28">
          <div className="page-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 28, alignItems: 'center' }}>
              <div>
                <h1 className="title">Angeleen Duong</h1>
                <div className="subtitle epigraph">
                  Developer & Designer
                </div>
                <p className="mt-6 max-w-2xl">
                  Curating a seamless user experience through thoughtful design and innovative solutions.
                </p>
              </div>

              <div style={{ justifySelf: 'end' }}>
                <figure className="hero-figure" style={{ width: 320, maxWidth: '40vw' }}>
                  <svg
                    role="img"
                    aria-label="Hero placeholder image"
                    viewBox="0 0 800 800"
                    width="100%"
                    style={{ borderRadius: 12, display: 'block' }}
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <rect width="100%" height="100%" fill="#f8fafc" />
                    <g fill="#e6eef7">
                      <rect x="48" y="56" width="240" height="160" rx="10" />
                      <rect x="320" y="80" width="360" height="220" rx="8" />
                    </g>
                    <text x="50%" y="88%" fill="#94a3b8" fontSize="20" textAnchor="middle">Hero placeholder</text>
                  </svg>
                  <figcaption className="sr-only">Hero placeholder image</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 pb-24">
        {/* === FEATURED PROJECT SECTION (Reveals First) === */}
        <RevealOnScroll delay={0}>
          <section id="featured" className="page-container -mt-6">
            {/* <h2 className="text-2xl font-semibold mb-6">Featured Project</h2> */}
            <article className="featured-card" aria-labelledby="feat-aurora">
              <div className="card-link">
                <figure className="featured-figure">
                  <Image
                    src="/matcha.png"
                    alt="Aurora featured screenshot"
                    fill
                    className="project-image"
                  />
                </figure>

                <div className="featured-content">
                  <h3 id="feat-matcha" className="project-title">
                    Self-Kiosk for Matcha Maiko
                  </h3>
                  <p className="project-sub">
                    A large interactive dashboard showcasing complex
                    visualizations, realtime updates, and accessible controls.
                  </p>
                  <div className="featured-actions">
                    <a className="btn-primary" href="/projects/aurora">Case study</a>
                  </div>
                </div>
              </div>
              {/* actions are now inside the featured content */}
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

        {/* About is now a separate page at /about; removed inline About section from home. */}
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