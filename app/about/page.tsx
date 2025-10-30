import Image from "next/image";

export const metadata = {
  title: "About — Angeleen Duong",
  description: "About page for Angeleen Duong — front-end developer and designer.",
};

export default function AboutPage() {
  return (
    <main className="page-container py-12">
      <header className="hero" style={{ paddingTop: 28, paddingBottom: 28 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 28, alignItems: 'center' }}>
          <div>
            <h1 className="title" style={{ fontSize: '2rem' }}>About</h1>

            <p className="mt-6 max-w-2xl" style={{ marginTop: 16 }}>
              Hi, I'm Angeleen! I'm a front-end developer and designer based in La Jolla, CA.
              I'm currently working on LifeSaver at the UC San Diego Design Lab, where I'm developing the user interface for one of the devices.
            </p>

            <p className="mt-4 max-w-2xl" style={{ marginTop: 16 }}>
              Outside of work, I like to check out runway collections and enjoy anything fashion-related. I also love travelling — let me know your favorite destinations!
            </p>
          </div>

          <div style={{ justifySelf: 'end' }}>
            <figure className="about-figure" style={{ width: 320, maxWidth: '40vw', borderRadius: '50%', overflow: 'hidden' }}>
              <div style={{ position: 'relative', width: '100%', paddingTop: '100%' }}>
                <Image
                  src="/me.jpg"
                  alt="Angeleen Duong"
                  fill
                  sizes="(max-width: 640px) 40vw, 320px"
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
              <figcaption className="sr-only">Portrait of Angeleen Duong</figcaption>
            </figure>
          </div>
        </div>
      </header>
    </main>
  );
}
