"use client";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  const videos = [
    { title: "Hell To Pay", id: "KbzvGpEjM8k" },
    { title: "You Know It's True", id: "OYtIrl43NKc" },
    { title: "A New Freedom", id: "RBWEQ15nc5A" },
    { title: "Everybody Knows", id: "M0t_iO1HC-8" },
    { title: "Riding On The Flames", id: "kdrwXloBigE" },
    { title: "Fight", id: "8YNYwmD-5XM" },
    { title: "Engines Of Thunder", id: "EtE5OPPfNuw" },
    { title: "I Am The Walrus", id: "EUmJVo0bmbs" },
    { title: "Behind the Scenes of I Am The Walrus", id: "1YXR7BjXBTQ" },
    { title: "Abbey Road Studios — Mastering The Force Within", id: "EfrvznOeY68" },
    { title: "Reggie's Live in Chicago, IL", id: "HtoLBi2sn0M" },
    { title: "Trailer For Video Release", id: "F2NDrUHUs1E" },
  ];

  const font = "var(--font-inter), sans-serif";
  const container = { maxWidth: "1200px", margin: "0 auto", padding: "0 48px" };
  const section = { paddingTop: "160px", paddingBottom: "160px" };
  const divider = { maxWidth: "1200px", margin: "0 auto", padding: "0 48px" };
  const label = { fontSize: "13px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500 };
  const sectionHeading = { fontSize: "clamp(48px, 5vw, 72px)", fontWeight: 300, lineHeight: 1.1, fontFamily: font, marginBottom: "32px" };
  const bodyText = { color: "rgba(255,255,255,0.55)", lineHeight: 1.85, fontSize: "19px", fontWeight: 300, fontFamily: font };

  return (
    <main style={{ backgroundColor: "#080808", color: "#ffffff", minHeight: "100vh", fontFamily: font }}>

      <Nav activePage="Home" />

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="/hero.jpg" alt="Byron Nemeth performing live" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.5) 50%, rgba(0,0,0,0.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,8,8,0.4), transparent 40%, transparent 60%, rgba(8,8,8,0.4))" }} />
        </div>
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "200px 48px 180px", width: "100%", maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "13px", letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(245,158,11,0.85)", marginBottom: "32px", fontFamily: font, fontWeight: 400 }}>Las Vegas, Nevada</p>
          <h1 style={{ fontSize: "clamp(80px, 13vw, 170px)", fontWeight: 200, letterSpacing: "-0.02em", lineHeight: 0.9, marginBottom: "40px", fontFamily: font }}>
            Byron<br /><strong style={{ fontWeight: 700 }}>Nemeth</strong>
          </h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", marginBottom: "56px" }}>
            <div style={{ height: "1px", width: "80px", backgroundColor: "rgba(217,119,6,0.5)" }} />
            <p style={{ fontSize: "14px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", whiteSpace: "nowrap", fontFamily: font, fontWeight: 300 }}>Guitarist &nbsp;·&nbsp; Author &nbsp;·&nbsp; AI Entrepreneur</p>
            <div style={{ height: "1px", width: "80px", backgroundColor: "rgba(217,119,6,0.5)" }} />
          </div>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#music" style={{ backgroundColor: "#d97706", color: "#000", fontSize: "14px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font }}>Watch &amp; Listen</a>
            <a href="#contact" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font }}>Book a Lesson</a>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", color: "rgba(255,255,255,0.2)" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", fontFamily: font }}>Scroll</span>
          <div style={{ width: "1px", height: "56px", background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }} />
        </div>
      </section>

      {/* MUSIC */}
      <section id="music" style={section}>
        <div style={container}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={label}>Discography</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "80px", flexWrap: "wrap", gap: "24px" }}>
            <h2 style={{ ...sectionHeading, marginBottom: 0 }}>Music that <strong style={{ fontWeight: 700 }}>moves</strong> people</h2>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="https://youtube.com/playlist?list=OLAK5uy_ksa_i_hXH5O91GihOxdNX75XhLX_AnsE4&si=Y31RgtiQg_3ywUew"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)", padding: "12px 24px", textDecoration: "none", fontFamily: font, fontWeight: 400 }}
              >
                Greatest Hits Playlist ↗
              </a>
              <a
                href="https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV?si=oZvlieAgSj-nwhT9qFZa6g"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)", padding: "12px 24px", textDecoration: "none", fontFamily: font, fontWeight: 400 }}
              >
                Spotify ↗
              </a>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
            {videos.map((video) => (
              <div key={video.id}>
                <div style={{ position: "relative", paddingTop: "56.25%", overflow: "hidden", backgroundColor: "rgba(255,255,255,0.04)" }}>
                  <iframe src={`https://www.youtube.com/embed/${video.id}`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                </div>
                <p style={{ marginTop: "16px", fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: font, fontWeight: 400 }}>{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={divider}><div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} /></div>

      {/* LESSONS */}
      <section id="lessons" style={section}>
        <div style={container}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={label}>Guitar Lessons</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "start" }}>
            <div>
              <h2 style={sectionHeading}>Learn from<br />a <strong style={{ fontWeight: 700 }}>pro</strong></h2>
              <p style={{ ...bodyText, marginBottom: "48px" }}>In-home guitar lessons across Las Vegas. Whether you are picking up the guitar for the first time or refining your craft at an advanced level — I meet you exactly where you are.</p>
              <a href="#contact" style={{ display: "inline-block", backgroundColor: "#d97706", color: "#000", fontSize: "14px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font }}>Book Your First Lesson</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { level: "Beginner", desc: "Foundations, technique, and building great habits from day one" },
                { level: "Intermediate", desc: "Expand your vocabulary, theory, and personal playing style" },
                { level: "Advanced", desc: "Pro-level refinement, performance preparation, and artistry" },
              ].map((item) => (
                <div key={item.level} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "36px 40px" }}>
                  <h3 style={{ fontSize: "13px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#f59e0b", marginBottom: "14px", fontFamily: font, fontWeight: 500 }}>{item.level}</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300, lineHeight: 1.8, fontSize: "17px", fontFamily: font }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={divider}><div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} /></div>

      {/* BOOK */}
      <section id="book" style={section}>
        <div style={container}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={label}>Published Work</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "center", marginBottom: "56px" }}>
            <div>
              <h2 style={sectionHeading}>The Zen of<br /><strong style={{ fontWeight: 700 }}>Guitar</strong></h2>
              <p style={{ ...bodyText, fontSize: "21px", marginBottom: "20px" }}>Understanding Guitar Through Direct Intuition — Volume Three</p>
              <p style={{ ...bodyText, color: "rgba(255,255,255,0.4)", marginBottom: "52px" }}>A transformative guide that goes beyond technique to explore the mindset, philosophy, and artistry that separates good players from truly great ones.</p>
              <a href="https://www.amazon.com/dp/B0DYRT81GQ" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", backgroundColor: "#d97706", color: "#000", fontSize: "14px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font }}>Get It on Amazon</a>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a href="https://www.amazon.com/dp/B0DYRT81GQ" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                <img src="/zen.jpg" alt="The Zen of Guitar by Byron Nemeth" style={{ width: "300px", borderRadius: "4px", boxShadow: "0 40px 80px rgba(0,0,0,0.6)", display: "block" }} />
              </a>
            </div>
          </div>
          <p style={{ ...bodyText, fontSize: "18px", color: "rgba(255,255,255,0.45)", lineHeight: 1.9, marginTop: "8px" }}>
            Volume Three is now released, building upon the foundation of Volumes One and Two with groundbreaking and transformative additions. This new volume introduces the revolutionary concept of the Color Association of the Root Note with any of the Seven Modes, offering a visually intuitive and intellectually stimulating approach to understanding and applying modes. By connecting color theory with music theory, this innovative perspective deepens the player's comprehension of modal relationships and enhances their intuitive grasp of the fretboard.
          </p>
        </div>
      </section>

      <div style={divider}><div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} /></div>

      {/* CONTACT */}
      <section id="contact" style={section}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={label}>Get In Touch</p>
          </div>
          <h2 style={{ ...sectionHeading, marginBottom: "20px" }}>Let us <strong style={{ fontWeight: 700 }}>connect</strong></h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontWeight: 300, marginBottom: "16px", fontSize: "19px", fontFamily: font }}>Lessons &nbsp;·&nbsp; Touring &nbsp;·&nbsp; AI Services &nbsp;·&nbsp; Collaborations</p>

          {/* Direct contact info */}
          <div style={{ display: "flex", gap: "40px", marginBottom: "52px", flexWrap: "wrap" }}>
            <a href="mailto:byron@byronnemeth.com" style={{ fontSize: "16px", color: "rgba(255,255,255,0.55)", textDecoration: "none", fontFamily: font, fontWeight: 300 }}>
              byron@byronnemeth.com
            </a>
            <a href="tel:4802095309" style={{ fontSize: "16px", color: "rgba(255,255,255,0.55)", textDecoration: "none", fontFamily: font, fontWeight: 300 }}>
              480.209.5309
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <input type="text" placeholder="Your Name" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", padding: "22px 24px", color: "#fff", fontSize: "16px", fontWeight: 300, outline: "none", width: "100%", boxSizing: "border-box", fontFamily: font }} />
            <input type="email" placeholder="Your Email" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", padding: "22px 24px", color: "#fff", fontSize: "16px", fontWeight: 300, outline: "none", width: "100%", boxSizing: "border-box", fontFamily: font }} />
            <select style={{ backgroundColor: "#080808", border: "1px solid rgba(255,255,255,0.1)", padding: "22px 24px", color: "rgba(255,255,255,0.35)", fontSize: "16px", fontWeight: 300, outline: "none", width: "100%", boxSizing: "border-box", fontFamily: font }}>
              <option value="">What can I help you with?</option>
              <option value="lessons">Guitar Lessons</option>
              <option value="touring">Touring / Hired Gun</option>
              <option value="ai">AI Services</option>
              <option value="other">Other</option>
            </select>
            <textarea rows={6} placeholder="Your Message" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", padding: "22px 24px", color: "#fff", fontSize: "16px", fontWeight: 300, outline: "none", resize: "none", width: "100%", boxSizing: "border-box", fontFamily: font }} />
            <button style={{ backgroundColor: "#d97706", color: "#000", fontSize: "14px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "24px", border: "none", cursor: "pointer", width: "100%", marginTop: "8px", fontFamily: font }}>Send Message</button>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
