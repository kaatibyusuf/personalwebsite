import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <p className="kicker">Personal site</p>
      <h1 className="h1">Building useful things. Writing with clarity.</h1>
      <p className="lead">
        I share what I’m learning, what I’m building, and what I believe about growth, faith, and craft.
      </p>

      <div className="grid">
        <div className="card">
          <h2 className="cardTitle">Now</h2>
          <p className="cardText">Learning, shipping, documenting. This stays current and honest.</p>
        </div>

        <div className="card">
          <h2 className="cardTitle">Focus</h2>
          <p className="cardText">Software engineering. Clean UI. Real-world problem solving. Long-term systems.</p>
        </div>
      </div>

      <p style={{ marginTop: 16 }}>
        <Link className="navLink" href="/projects">View Projects</Link>{" "}
        <Link className="navLink" href="/contact">Contact</Link>
      </p>
    </section>
  );
}
