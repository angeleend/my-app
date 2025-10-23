import Image from "next/image";

export default function Home() {
  return (
  <div className="min-h-screen font-sans">
      <header className="relative">
        <div className="hero max-w-4xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <div className="mx-auto text-left">
            <h1 className="title">Angeleen Duong</h1>
            <div className="subtitle epigraph">Designing interfaces that read like a good paragraph.</div>
            <p className="mt-6 max-w-2xl">Frontend engineer. I shape interfaces that are clear, considered, and refined.</p>
            {/* removed inline links to rely on the single vertical navigation */}
          </div>
        </div>

      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        <section className="-mt-6">
          <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
          <div className="projects-grid">
            <a href="/projects/aurora" className="project-card" aria-label="Aurora project">
              <div className="project-image" style={{backgroundImage: "url('/images/aurora.jpg')"}} />
              <div className="project-overlay">
                <div className="project-title">Aurora</div>
                <div className="project-sub">Interactive dashboard</div>
              </div>
            </a>

            <a href="/projects/lyra" className="project-card" aria-label="Lyra project">
              <div className="project-image" style={{backgroundImage: "url('/images/lyra.jpg')"}} />
              <div className="project-overlay">
                <div className="project-title">Lyra</div>
                <div className="project-sub">Publishing tool</div>
              </div>
            </a>

            <a href="/projects/atlas" className="project-card" aria-label="Atlas project">
              <div className="project-image" style={{backgroundImage: "url('/images/atlas.jpg')"}} />
              <div className="project-overlay">
                <div className="project-title">Atlas</div>
                <div className="project-sub">Design system</div>
              </div>
            </a>
          </div>
        </section>
        
      </main>

      <footer className="border-t border-gray-100 dark:border-gray-800 mt-12 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
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
