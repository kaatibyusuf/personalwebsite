import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="siteHeader">
      <nav className="wrap navRow" aria-label="Primary">
        <Link href="/" className="brand">
          Kaatib Yusuf
        </Link>

        <div className="navLinks">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="navLink">
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
