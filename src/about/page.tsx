export default function AboutPage() {
  return (
    <main className="container hero">
      <h1 className="headline">About</h1>

      <p className="subhead">
        I’m Kaatib Yusuf. I build, write, and think in systems.
      </p>

      <div className="grid">
        <div className="card">
          <h2 className="cardTitle">Background</h2>
          <p className="cardText">
            I’m interested in software, learning, faith, and long-term personal growth.
            This site is a public record of what I’m building and learning over time.
          </p>
        </div>

        <div className="card">
          <h2 className="cardTitle">Values</h2>
          <p className="cardText">
            Clarity over noise. Depth over hype. Consistency over motivation.
          </p>
        </div>
      </div>
    </main>
  );
}
