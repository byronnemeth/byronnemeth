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
    <footer style={{
      backgroundColor: "rgba(80,10,10,0.97)",
      borderTop: "1px solid rgba(180,20,20,0.3)",
      padding: "48px",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "28px",
      }}>

        {/* Top row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}>
          <span style={{ fontSize: "15px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontFamily: font, fontWeight: 400 }}>
            Byron Nemeth
          </span>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", fontFamily: font }}>
            2026 &nbsp;·&nbsp; Las Vegas &nbsp;·&nbsp; Beverly Hills &nbsp;·&nbsp; Miami &nbsp;·&nbsp; All Rights Reserved
          </span>
          <a href="mailto:byron@byronnemeth.com" style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", textDecoration: "none", fontFamily: font }}>
            byron@byronnemeth.com
          </a>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />

        {/* Social links row */}
        <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", alignItems: "center" }}>
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
                fontFamily: font,
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#f59e0b"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
            >
              {item.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
