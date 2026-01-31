export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="wrap footerRow">
        <p className="muted">© {new Date().getFullYear()} Kaatib Yusuf</p>
        <p className="muted">Built with Next.js</p>
      </div>
    </footer>
  );
}
