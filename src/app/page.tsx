import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <main className="page">
      <header className="container header">
        <div className="brand">
          <span className="dot" aria-hidden="true" />
          <span className="brandText">Kaatib Yusuf</span>
        </div>

        <nav className="nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="navLink">
              {l.label}
            </Link>
          ))}
        </nav>
      </header>

      <section className="container hero">
        <p className="badge">Personal site</p>

        <h1 className="headline">
          Building useful things.
          <br />
          Writing with clarity.
        </h1>

        <p className="subhead">
          I share what I’m learning, what I’m building, and what I believe about growth, faith, and craft.
        </p>

        <div className="ctaRow">
          <Link className="btnPrimary" href="/projects">
            View Projects
          </Link>
          <Link className="btnGhost" href="/contact">
            Contact
          </Link>
        </div>

        <div className="grid">
          <div className="card">
            <h2 className="cardTitle">Now</h2>
            <p className="cardText">
              Learning, shipping, and documenting. This section will stay current and honest.
            </p>
          </div>

          <div className="card">
            <h2 className="cardTitle">Focus</h2>
            <p className="cardText">
              Software engineering. Clean UI. Real-world problem solving. Long-term systems.
            </p>
          </div>

          <div className="card">
            <h2 className="cardTitle">Writing</h2>
            <p className="cardText">
              Essays and short notes. No noise. Just lessons and ideas that hold up.
            </p>
          </div>
        </div>
      </section>

      <footer className="container footer">
        <p className="muted">© {new Date().getFullYear()} Kaatib Yusuf</p>
        <p className="muted">Built with Next.js</p>
      </footer>
    </main>
  );
}
