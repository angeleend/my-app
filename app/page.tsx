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
                <h1 className="title">Developer & Designer</h1>
                <div className="subtitle epigraph">
                  Angeleen Duong
                </div>
                <p className="mt-6 max-w-2xl">
                  Curating a seamless user experience through thoughtful human-centered design and innovative solutions.
                </p>
                <div style={{ marginTop: 18 }}>
                  <a href="/resume.pdf" className="btn-primary" target="_blank" rel="noopener noreferrer">
                      <span style={{ verticalAlign: 'middle' }}>Check out my resume</span>
                      <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" style={{ marginLeft: 8, verticalAlign: 'middle' }}>
                        <path fill="currentColor" d="M12 3v10.586l3.293-3.293 1.414 1.414L12 17.414 6.293 11.707l1.414-1.414L11 13.586V3h1zM5 19h14v2H5z" />
                      </svg>
                  </a>
                </div>
              </div>

              <div style={{ justifySelf: 'end' }}>
                <figure className="hero-figure" style={{ width: 320, maxWidth: '40vw', borderRadius: '50%', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', width: '100%', paddingTop: '100%' }}>
                    <Image
                      src="/me.jpg"
                      alt="Angeleen Duong"
                      fill
                      sizes="(max-width: 640px) 40vw, 320px"
                      style={{ objectFit: 'cover', borderRadius: '50%' }}
                      priority
                    />
                  </div>
                  <figcaption className="sr-only">Portrait of Angeleen Duong</figcaption>
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
            <h2 className="text-2xl font-semibold mb-6">All Projects</h2>
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