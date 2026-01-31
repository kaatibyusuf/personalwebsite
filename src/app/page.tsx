import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <p className="kicker">Personal site</p>

      <h1>
        Building useful things.
        <br />
        Writing with clarity.
      </h1>

      <p>
        I share what I’m learning, what I’m building, and what I believe about
        growth, faith, and craft.
      </p>

      <div className="actions">
        <Link className="btn btnPrimary" href="/projects">
          View Projects
        </Link>
        <Link className="btn" href="/about">
          About me
        </Link>
        <Link className="btn" href="/contact">
          Contact
        </Link>
      </div>

      <div className="cardRow">
        <div className="card">
          <p className="cardTitle">Now</p>
          <p className="cardText">
            Learning, shipping, and documenting. This section stays current and
            honest.
          </p>
        </div>

        <div className="card">
          <p className="cardTitle">Focus</p>
          <p className="cardText">
            Software engineering. Clean UI. Real-world problem solving.
            Long-term systems.
          </p>
        </div>
      </div>

      <h2>Writing</h2>
      <p>Essays and short notes. No noise. Just lessons and ideas that hold up.</p>
    </section>
  );
}
