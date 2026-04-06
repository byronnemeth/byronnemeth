export default function Footer() {
  const font = "var(--font-inter), sans-serif";

  const socialLinks = [
    { label: "Facebook", url: "https://www.facebook.com/byronnemeth" },
    { label: "Instagram", url: "https://www.instagram.com/byronnemeth/" },
    { label: "YouTube", url: "https://www.youtube.com/@byronnemeth" },
    { label: "Spotify", url: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV?si=oZvlieAgSj-nwhT9qFZa6g" },
    { label: "SoundCloud", url: "https://soundcloud.com/byronnemethmusic" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/byronnemeth/" },
    { label: "Merch", url: "https://byron-nemeth.printify.me/" },
  ];

  return (
    <>
      <style>{`
        .footer-top { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
        .footer-socials { display: flex; gap: 24px; flex-wrap: wrap; align-items: center; }
        @media (max-width: 768px) {
          .footer-top { flex-direction: column; align-items: flex-start; gap: 12px; }
          .footer-socials { gap: 16px; }
        }
      `}</style>
      <footer style={{ backgroundColor: "rgba(80,10,10,0.97)", borderTop: "1px solid rgba(180,20,20,0.3)", padding: "40px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="footer-top">
            <span style={{ fontSize: "14px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontFamily: font, fontWeight: 400 }}>Byron Nemeth</span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", fontFamily: font }}>2026 &nbsp;·&nbsp; Las Vegas &nbsp;·&nbsp; Beverly Hills &nbsp;·&nbsp; Miami &nbsp;·&nbsp; All Rights Reserved</span>
            <a href="mailto:byron@byronnemeth.com" style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", textDecoration: "none", fontFamily: font }}>byron@byronnemeth.com</a>
          </div>
          <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />
          <div className="footer-socials">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", textDecoration: "none", fontFamily: font }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#f59e0b"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
