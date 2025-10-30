import Image from "next/image";

export const metadata = {
  title: "About — Angeleen Duong",
  description: "About page for Angeleen Duong — front-end developer and designer.",
};

export default function AboutPage() {
  return (
    <main className="page-container py-12">
      <header>
        <h1 className="title">About</h1>
        <p className="mt-4 max-w-2xl">
          Hi, I'm Angeleen! I'm a front-end developer and designer based in La Jolla, CA.
          I'm currently working on LifeSaver at the UC San Diego Design Lab, where I'm developing the user interface for one of the devices.
        </p>
        <p className="mt-4 max-w-2xl">
          Outside of work, I like to check out runway collections and enjoy anything fashion-related. I also love travelling — let me know your favorite destinations!
        </p>
      </header>

      <section style={{ marginTop: 24 }}>
        <figure className="about-figure" style={{ maxWidth: '40rem' }}>
          <svg
            role="img"
            aria-label="Placeholder image"
            viewBox="0 0 800 450"
            width="100%"
            style={{ borderRadius: 12, display: 'block' }}
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="100%" height="100%" fill="#f3f4f6" />
            <g fill="#e5e7eb">
              <rect x="36" y="40" width="220" height="140" rx="8" />
              <circle cx="420" cy="130" r="56" />
            </g>
            <text x="50%" y="86%" fill="#9ca3af" fontSize="28" textAnchor="middle">Placeholder image</text>
          </svg>
          <figcaption className="sr-only">Placeholder image for the About page</figcaption>
        </figure>
      </section>
    </main>
  );
}
