"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Discography() {
  const font = "var(--font-inter), sans-serif";

  const bodyText = {
    fontSize: "17px",
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.5)",
    fontWeight: 300,
    fontFamily: font,
  };

  const sectionLabel = {
    fontSize: "13px",
    letterSpacing: "0.5em",
    textTransform: "uppercase",
    color: "#f59e0b",
    fontFamily: font,
    fontWeight: 500,
  };

  const albums = [
    {
      year: "2025",
      title: "I Am Thee Ocean",
      artist: "Byron Nemeth Group",
      cover: "/ocean.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "The Byron Nemeth Group's latest single featuring Peter Barcott on vocals, Dennis Osinski on drums, and Paul Hughes on bass. A bold statement of collective musical identity released October 31, 2025.",
    },
    {
      year: "2024",
      title: "Spanish Transcendence",
      artist: "Byron Nemeth",
      cover: "/st1.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "A flamenco-infused rock composition showcasing Byron's signature melodic sensibility and classical guitar influences blended with hard rock energy.",
    },
    {
      year: "2023",
      title: "Hell To Pay",
      artist: "Byron Nemeth Group",
      cover: "/HTP_5.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "Recorded at The Tone Factory in Las Vegas on 10.23.23 with Producer Vinnie Castaldo. Music video shot on location at The Jackpot in Las Vegas and released 12.25.23.",
    },
    {
      year: "2023",
      title: "It's All Over",
      artist: "Byron Nemeth Group",
      cover: "/IAO_5.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "A soaring ballad recorded alongside Hell To Pay at The Tone Factory in Las Vegas. Features the Byron Nemeth Group at full emotional intensity.",
    },
    {
      year: "2021",
      title: "You Know It's True",
      artist: "Byron Nemeth",
      cover: "/CD_Home_Page_1-1.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "Recorded at the legendary Blackbird Studios in Nashville with Luis Espaillat/bass, Zach Ballard/drums, Steve Braun/vocals. Produced by Tim Dolbear. Released September 29, 2021.",
    },
    {
      year: "2021",
      title: "Engines Of Thunder",
      artist: "Byron Nemeth",
      cover: "/engines.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "A tip-of-the-hat to the early Satriani and Hendrix vibe — strong emphasis on composition and lyrical soloing with amazing hooks and unique twists. Released November 2020.",
    },
    {
      year: "2021",
      title: "Sunset At The Marquis",
      artist: "Byron Nemeth",
      cover: "/CD_Home_Page_77.png",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "Inspired by Jimmy Page's C6 open tuning from Physical Graffiti. Mixed at Abbey Road Studios in London by engineer John Barrett on the SSL Duality Delta 24 Mixing Console.",
    },
    {
      year: "2022",
      title: "The Pinot Noir Wine Song",
      artist: "Byron Nemeth",
      cover: "/Pinot.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "A sophisticated and melodic departure that showcases Byron's range as a songwriter and composer beyond the hard rock genre.",
    },
    {
      year: "2014",
      title: "The Video Chronicles",
      artist: "Byron Nemeth",
      cover: "/CD_Home_Page_91.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "A 4-song CD studio video release featuring Jeremy Colson/drums and Philip Bynoe/bass from the Steve Vai Band, and lead vocals by Mark Boals (Yngwie Malmsteen's Trilogy).",
    },
    {
      year: "2006",
      title: "The Force Within",
      artist: "Byron Nemeth",
      cover: "/tfwi.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "Mastered at Abbey Road Studios on 12.11.06 by Nick Webb. Cover art by Hugh Syme (Rush, Def Leppard, Dream Theater). A tour de force of guitar acrobatics and prog rock sensibilities.",
    },
    {
      year: "2003",
      title: "100 Worlds",
      artist: "Byron Nemeth",
      cover: "/100_Worlds.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "Mastered at Abbey Road Studios in London by Nick Webb on 11.17.03. Featured in the book Working Musicians by ASCAP/DEEMS Taylor award-winning author Bruce Pollock.",
    },
    {
      year: "2000",
      title: "2000",
      artist: "Byron Nemeth",
      cover: "/2000.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "A completely self-produced and performed album. Singles \"Machines of Ice\" and \"High Speed Life\" established Byron's voice as a solo artist. Includes \"It's Showtime\" from the Jason Becker Tribute CD.",
    },
  ];

  return (
    <main style={{ backgroundColor: "#080808", color: "#ffffff", minHeight: "100vh", fontFamily: font }}>

      <Nav activePage="Discography" />

      {/* HERO */}
      <section style={{ paddingTop: "200px", paddingBottom: "100px", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "800px", background: "radial-gradient(circle, rgba(217,119,6,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: "900px", margin: "0 auto", padding: "0 48px" }}>
          <p style={{ fontSize: "13px", letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(245,158,11,0.85)", marginBottom: "28px", fontFamily: font, fontWeight: 400 }}>
            Full Catalog
          </p>
          <h1 style={{ fontSize: "clamp(56px, 9vw, 110px)", fontWeight: 200, letterSpacing: "-0.02em", lineHeight: 0.9, marginBottom: "32px", fontFamily: font }}>
            Disco<strong style={{ fontWeight: 700 }}>graphy</strong>
          </h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", marginBottom: "40px" }}>
            <div style={{ height: "1px", width: "60px", backgroundColor: "rgba(217,119,6,0.5)" }} />
            <p style={{ fontSize: "14px", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", fontFamily: font, fontWeight: 300 }}>
              2000 – Present
            </p>
            <div style={{ height: "1px", width: "60px", backgroundColor: "rgba(217,119,6,0.5)" }} />
          </div>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV?si=oZvlieAgSj-nwhT9qFZa6g"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", backgroundColor: "#1DB954", color: "#000", fontWeight: 600, padding: "16px 36px", textDecoration: "none", fontFamily: font }}
            >
              Follow on Spotify
            </a>
            <a
              href="https://youtube.com/playlist?list=OLAK5uy_ksa_i_hXH5O91GihOxdNX75XhLX_AnsE4&si=Y31RgtiQg_3ywUew"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "16px 36px", textDecoration: "none", fontFamily: font }}
            >
              Greatest Hits Playlist ↗
            </a>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} />
      </div>

      {/* ALBUM GRID */}
      <section style={{ paddingTop: "100px", paddingBottom: "160px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "72px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>Releases</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "56px 40px" }}>
            {albums.map((album, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>

                {/* Album cover */}
                <a
                  href={album.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", position: "relative", overflow: "hidden" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector("img").style.transform = "scale(1.04)";
                    e.currentTarget.querySelector(".overlay").style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector("img").style.transform = "scale(1)";
                    e.currentTarget.querySelector(".overlay").style.opacity = "0";
                  }}
                >
                  <img
                    src={album.cover}
                    alt={album.title}
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  <div
                    className="overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(0,0,0,0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <span style={{
                      fontSize: "12px",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "#fff",
                      fontFamily: font,
                      border: "1px solid rgba(255,255,255,0.6)",
                      padding: "12px 24px",
                    }}>
                      Listen on Spotify
                    </span>
                  </div>
                </a>

                {/* Album info */}
                <div style={{ paddingTop: "20px" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500, marginBottom: "8px" }}>
                    {album.year} &nbsp;·&nbsp; {album.artist}
                  </p>
                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#ffffff", fontFamily: font, marginBottom: "10px", lineHeight: 1.2 }}>
                    {album.title}
                  </h3>
                  <p style={bodyText}>{album.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} />
      </div>

      {/* STREAMING CTA */}
      <section style={{ paddingTop: "120px", paddingBottom: "140px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>Stream Everywhere</p>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
          </div>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, lineHeight: 1.1, fontFamily: font, margin: "0 0 40px" }}>
            All music available on <strong style={{ fontWeight: 700 }}>every platform</strong>
          </h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV?si=oZvlieAgSj-nwhT9qFZa6g"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: "#1DB954", color: "#000", fontSize: "13px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "18px 40px", textDecoration: "none", fontFamily: font }}
            >
              Spotify
            </a>
            <a
              href="https://www.youtube.com/@byronnemeth"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", padding: "18px 40px", textDecoration: "none", fontFamily: font }}
            >
              YouTube
            </a>
            <a
              href="https://soundcloud.com/byronnemethmusic"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", padding: "18px 40px", textDecoration: "none", fontFamily: font }}
            >
              SoundCloud
            </a>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
