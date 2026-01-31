export default function ContactPage() {
  return (
    <main className="container hero">
      <h1 className="headline">Contact</h1>

      <p className="subhead">
        The best way to reach me is via email.
      </p>

      <div className="grid">
        <div className="card">
          <h2 className="cardTitle">Email</h2>
          <p className="cardText">
            <a href="mailto:kaatibyusuf@gmail.com">kaatibyusuf@gmail.com</a>
          </p>
        </div>

        <div className="card">
          <h2 className="cardTitle">GitHub</h2>
          <p className="cardText">
            <a href="https://github.com/kaatibyusuf" target="_blank" rel="noreferrer">
              github.com/kaatibyusuf
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
