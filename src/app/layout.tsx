<body>
  <header className="site-header">
    <nav className="nav">
      <a href="/">Kaatib Yusuf</a>
      <div className="nav-links">
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  </header>

  <main className="container">{children}</main>

  <footer className="footer">
    © {new Date().getFullYear()} Kaatib Yusuf. Built with Next.js.
  </footer>
</body>
