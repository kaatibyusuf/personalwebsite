const projects = [
  {
    title: "Personal Website",
    description: "This site. Built with Next.js and deployed on GitHub Pages.",
  },
  {
    title: "Learning & Writing",
    description: "Notes, essays, and reflections on growth, craft, and faith.",
  },
  {
    title: "Future Projects",
    description: "More work will be added here as I ship consistently.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="container hero">
      <h1 className="headline">Projects</h1>

      <p className="subhead">
        A small list of things I’ve built or I’m actively working on.
      </p>

      <div className="grid">
        {projects.map((p) => (
          <div key={p.title} className="card">
            <h2 className="cardTitle">{p.title}</h2>
            <p className="cardText">{p.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
