"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Bio", href: "/bio" },
  { label: "Music", href: "/#music" },
  { label: "Discography", href: "/discography" },
  { label: "Lessons", href: "/#lessons" },
  { label: "The Zen Of Guitar", href: "/#book" },
  { label: "Merch", href: "https://byron-nemeth.printify.me/", external: true },
  { label: "Tech", href: "/tech" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  const font = "var(--font-inter), sans-serif";
  const navBg = "rgba(80,10,10,0.97)";
  const borderColor = "rgba(180,20,20,0.3)";

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        backgroundColor: navBg,
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${borderColor}`,
        boxSizing: "border-box",
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 32px",
          height: "76px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}>

          {/* Logo */}
          <a href="/" style={{
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#ffffff",
            textDecoration: "none",
            fontFamily: font,
            flexShrink: 0,
          }}>
            Byron Nemeth
          </a>

          {/* DESKTOP nav */}
          {!isMobile && (
            <>
              <div style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "nowrap",
                overflow: "hidden",
              }}>
                {navLinks.map((item, index) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center" }}>
                    {/* Dot separator */}
                    {index > 0 && (
                      <span style={{
                        color: "rgba(245,158,11,0.6)",
                        fontSize: "14px",
                        padding: "0 10px",
                        userSelect: "none",
                        flexShrink: 0,
                      }}>•</span>
                    )}
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: activePage === item.label ? "#f59e0b" : "rgba(255,255,255,0.72)",
                        textDecoration: "none",
                        fontWeight: activePage === item.label ? 600 : 400,
                        fontFamily: font,
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {item.label}
                    </a>
                  </div>
                ))}
              </div>

              {/* Book Now CTA */}
              <a href="/#contact" style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                border: "1px solid #f59e0b",
                color: "#f59e0b",
                padding: "10px 20px",
                textDecoration: "none",
                fontFamily: font,
                fontWeight: 600,
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}>
                Book Now
              </a>
            </>
          )}

          {/* MOBILE hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#ffffff", transition: "all 0.3s ease", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
              <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#ffffff", transition: "all 0.3s ease", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#ffffff", transition: "all 0.3s ease", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
            </button>
          )}
        </div>

        {/* MOBILE dropdown */}
        {isMobile && (
          <div style={{
            backgroundColor: navBg,
            borderTop: menuOpen ? `1px solid ${borderColor}` : "none",
            maxHeight: menuOpen ? "700px" : "0",
            overflow: "hidden",
            transition: "max-height 0.35s ease",
          }}>
            <div style={{ padding: menuOpen ? "16px 0 24px" : "0", display: "flex", flexDirection: "column" }}>
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={handleLinkClick}
                  style={{
                    fontSize: "14px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: activePage === item.label ? "#f59e0b" : "rgba(255,255,255,0.75)",
                    textDecoration: "none",
                    fontWeight: activePage === item.label ? 600 : 300,
                    fontFamily: font,
                    padding: "14px 28px",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  <span style={{ color: "rgba(245,158,11,0.7)", fontSize: "12px", flexShrink: 0 }}>•</span>
                  {item.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={handleLinkClick}
                style={{
                  margin: "20px 28px 0",
                  display: "block",
                  textAlign: "center",
                  fontSize: "13px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  border: "1px solid #f59e0b",
                  color: "#f59e0b",
                  padding: "16px",
                  textDecoration: "none",
                  fontFamily: font,
                  fontWeight: 600,
                }}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay */}
      {isMobile && menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 40, backgroundColor: "rgba(0,0,0,0.5)" }}
        />
      )}
    </>
  );
}
