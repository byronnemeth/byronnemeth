"use client";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Music", href: "/#music" },
  { label: "Discography", href: "/discography" },
  { label: "Bio", href: "/bio" },
  { label: "Lessons", href: "/#lessons" },
  { label: "Book", href: "/#book" },
  { label: "Merch", href: "https://byron-nemeth.printify.me/", external: true },
  { label: "Tech", href: "/tech" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav({ activePage }) {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 50,
      backgroundColor: "rgba(80,10,10,0.97)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(180,20,20,0.3)",
      boxSizing: "border-box",
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 40px",
        height: "76px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "24px",
      }}>

        {/* Logo */}
        <a href="/" style={{
          fontSize: "15px",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#ffffff",
          textDecoration: "none",
          fontFamily: "var(--font-inter), sans-serif",
          flexShrink: 0,
        }}>
          Byron Nemeth
        </a>

        {/* Nav links */}
        <div style={{
          display: "flex",
          gap: "28px",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              style={{
                fontSize: "12px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: activePage === item.label ? "#f59e0b" : "rgba(255,255,255,0.72)",
                textDecoration: "none",
                fontWeight: activePage === item.label ? 600 : 400,
                fontFamily: "var(--font-inter), sans-serif",
                whiteSpace: "nowrap",
                transition: "color 0.25s",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="/#contact" style={{
          fontSize: "11px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          border: "1px solid #f59e0b",
          color: "#f59e0b",
          padding: "10px 22px",
          textDecoration: "none",
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 600,
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>
          Book Now
        </a>

      </div>
    </nav>
  );
}
