import Image from "next/image";

export default function Home() {
  return (
  <div className="min-h-screen font-sans">
      <header id="home" className="relative">
        <div className="hero relative z-10 py-20 lg:py-28">
          <div className="page-container">
              <h1 className="title">Angeleen Duong</h1>
              <div className="subtitle epigraph">Designing interfaces that read like a good paragraph.</div>
              <p className="mt-6 max-w-2xl">Frontend engineer. I shape interfaces that are clear, considered, and refined.</p>
          </div>
        </div>
      </header>

  <main className="px-6 pb-24">
        <section id="about" className="page-container">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <div className="about-grid" style={{display: 'flex', gap: '20px', alignItems: 'flex-start'}}>
            <figure className="photo-placeholder" aria-hidden="true">
              <svg viewBox="0 0 120 120" role="img" aria-label="profile placeholder" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="12" fill="#e9e5df"></rect>
                <circle cx="60" cy="40" r="22" fill="#d6cfc6"></circle>
                <rect x="20" y="74" width="80" height="18" rx="3" fill="#d6cfc6"></rect>
              </svg>
            </figure>
            <div>
              <p className="max-w-2xl">I design and build interfaces that read like a good paragraph — clear, considered, and crafted with attention to rhythm and space.</p>
              <p className="mt-4">Quick links: <a href="#projects" className="link">Selected Projects</a> · <a href="#skills" className="link">Skills</a></p>
            </div>
          </div>
        </section>

        <section id="projects" className="page-container -mt-6">
          <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
          <div className="projects-grid">
            <article className="project-card" aria-labelledby="proj-aurora">
              <a href="/projects/aurora">
                <figure className="project-figure">
                  <Image src="/images/aurora.jpg" alt="Aurora project screenshot" fill className="project-image" />
                </figure>
                <div className="project-overlay">
                  <h3 id="proj-aurora" className="project-title">Aurora</h3>
                  <p className="project-sub">Interactive dashboard</p>
                  <div className="project-actions">
                    <a className="action-btn" href="#">Live</a>
                    <a className="action-btn" href="#">Code</a>
                  </div>
                </div>
              </a>
            </article>

            <article className="project-card" aria-labelledby="proj-lyra">
              <a href="/projects/lyra">
                <figure className="project-figure">
                  <Image src="/images/lyra.jpg" alt="Lyra project screenshot" fill className="project-image" />
                </figure>
                <div className="project-overlay">
                  <h3 id="proj-lyra" className="project-title">Lyra</h3>
                  <p className="project-sub">Publishing tool</p>
                  <div className="project-actions">
                    <a className="action-btn" href="#">Live</a>
                    <a className="action-btn" href="#">Code</a>
                  </div>
                </div>
              </a>
            </article>

            <article className="project-card" aria-labelledby="proj-atlas">
              <a href="/projects/atlas">
                <figure className="project-figure">
                  <Image src="/images/atlas.jpg" alt="Atlas project screenshot" fill className="project-image" />
                </figure>
                <div className="project-overlay">
                  <h3 id="proj-atlas" className="project-title">Atlas</h3>
                  <p className="project-sub">Design system</p>
                  <div className="project-actions">
                    <a className="action-btn" href="#">Live</a>
                    <a className="action-btn" href="#">Code</a>
                  </div>
                </div>
              </a>
            </article>
          </div>
        </section>

        <section id="gallery" className="page-container">
          <h2 className="text-2xl font-semibold mb-6">Interactive Gallery</h2>
          <div className="gallery-grid">
            {Array.from({length:6}).map((_,i)=> (
              <button key={i} className="gallery-item" aria-label={`Gallery item ${i+1}`}>
                <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg" className="gallery-svg">
                  <rect width="100" height="70" fill="#f3efe8" rx="6" />
                  <circle cx="20" cy="22" r="10" fill="#e0d7cf" />
                  <rect x="36" y="18" width="44" height="8" rx="2" fill="#e0d7cf" />
                </svg>
                <div className="gallery-caption">Placeholder {i+1}</div>
              </button>
            ))}
          </div>
        </section>

        <section id="skills" className="page-container">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <p>React, TypeScript, Design Systems, Accessibility, Performance.</p>
        </section>
        
      </main>

      <footer className="border-t border-gray-100 dark:border-gray-800 mt-12 py-6">
        <div className="px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <div>© {new Date().getFullYear()} Angeleen Duong</div>
          <div className="mt-4 sm:mt-0 flex gap-4">
            <a href="/privacy" className="hover:underline">Privacy</a>
            <a href="/terms" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
