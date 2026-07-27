"use client";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [formStatus, setFormStatus] = useState("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xykbozpb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) { setFormStatus("success"); setFormData({ name: "", email: "", subject: "", message: "" }); }
      else setFormStatus("error");
    } catch { setFormStatus("error"); }
  };

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
  const sectionHeading = { fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 300, lineHeight: 1.1, fontFamily: font, marginBottom: "32px" };
  const bodyText = { color: "rgba(255,255,255,0.78)", lineHeight: 1.85, fontSize: "21px", fontWeight: 300, fontFamily: font };
  const label = { fontSize: "13px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500 };

  const inputStyle = {
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "22px 24px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 300,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    fontFamily: font,
  };

  return (
    <main style={{ backgroundColor: "#080808", color: "#ffffff", minHeight: "100vh", fontFamily: font }}>

      <style>{`
        .home-section { padding-top: 160px; padding-bottom: 160px; }
        .home-container { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
        .home-divider { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
        .home-hero-content { padding: 200px 48px 180px; }
        .home-contact-inner { max-width: 680px; margin: 0 auto; padding: 0 48px; }
        .home-music-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 80px; flex-wrap: wrap; gap: 24px; }
        .home-video-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 32px; }
        .home-hero-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .home-hero-btn-primary { background-color: #d97706; color: #000; font-size: 14px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; padding: 20px 56px; text-decoration: none; font-family: var(--font-inter), sans-serif; }
        .home-hero-btn-secondary { border: 1px solid rgba(255,255,255,0.3); color: rgba(255,255,255,0.8); font-size: 14px; font-weight: 400; letter-spacing: 0.2em; text-transform: uppercase; padding: 20px 56px; text-decoration: none; font-family: var(--font-inter), sans-serif; }
        .home-playlist-btns { display: flex; gap: 16px; flex-wrap: wrap; }
        .home-contact-links { display: flex; gap: 40px; margin-bottom: 52px; flex-wrap: wrap; }

        /* LESSONS — image left, text+boxes right */
        .lessons-grid { display: grid; grid-template-columns: 380px 1fr; gap: 64px; align-items: start; }
        .lessons-flyer { width: 380px; border-radius: 4px; display: block; box-shadow: 0 24px 64px rgba(0,0,0,0.5); }
        .lessons-right { display: flex; flex-direction: column; gap: 0; }
        .lessons-boxes { display: flex; flex-direction: column; gap: 20px; margin-top: 32px; }

        /* BOOK — image right, text left */
        .book-grid { display: grid; grid-template-columns: 1fr 380px; gap: 64px; align-items: center; margin-bottom: 56px; }
        .book-img { width: 380px; border-radius: 4px; display: block; box-shadow: 0 40px 80px rgba(0,0,0,0.6); }

        @media (max-width: 1024px) {
          .lessons-grid { grid-template-columns: 300px 1fr; gap: 48px; }
          .lessons-flyer { width: 300px; }
          .book-grid { grid-template-columns: 1fr 300px; gap: 48px; }
          .book-img { width: 300px; }
        }

        @media (max-width: 768px) {
          .home-section { padding-top: 80px; padding-bottom: 80px; }
          .home-container { padding: 0 20px; }
          .home-divider { padding: 0 20px; }
          .home-hero-content { padding: 140px 20px 100px; }
          .home-contact-inner { padding: 0 20px; }
          .home-music-header { flex-direction: column; align-items: flex-start; margin-bottom: 40px; }
          .home-video-grid { grid-template-columns: 1fr; gap: 24px; }
          .home-hero-btn-primary { padding: 16px 32px; font-size: 12px; }
          .home-hero-btn-secondary { padding: 16px 32px; font-size: 12px; }
          .home-playlist-btns { flex-direction: column; }
          .home-contact-links { flex-direction: column; gap: 16px; }

          /* Lessons stacked on mobile */
          .lessons-grid { grid-template-columns: 1fr; gap: 32px; }
          .lessons-flyer { width: 100%; max-width: 340px; margin: 0 auto; }

          /* Book stacked on mobile */
          .book-grid { grid-template-columns: 1fr; gap: 32px; margin-bottom: 32px; }
          .book-img { width: 100%; max-width: 340px; margin: 0 auto; order: -1; }

          .mob-body-text { font-size: 18px !important; color: rgba(255,255,255,0.82) !important; }
        }
      `}</style>

      <Nav activePage="Home" />

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="/hero2.jpg" alt="Byron Nemeth in a futuristic cityscape" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.5) 50%, rgba(0,0,0,0.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,8,8,0.4), transparent 40%, transparent 60%, rgba(8,8,8,0.4))" }} />
        </div>
        <div className="home-hero-content" style={{ position: "relative", zIndex: 10, textAlign: "center", width: "100%", maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "13px", letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(245,158,11,0.85)", marginBottom: "32px", fontFamily: font, fontWeight: 400 }}>Las Vegas, Nevada</p>
          <h1 style={{ fontSize: "clamp(64px, 13vw, 170px)", fontWeight: 200, letterSpacing: "-0.02em", lineHeight: 0.9, marginBottom: "40px", fontFamily: font }}>
            Byron<br /><strong style={{ fontWeight: 700 }}>Nemeth</strong>
          </h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", marginBottom: "48px" }}>
            <div style={{ height: "1px", width: "40px", backgroundColor: "rgba(217,119,6,0.5)" }} />
            <p style={{ fontSize: "clamp(10px, 3vw, 14px)", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", whiteSpace: "nowrap", fontFamily: font, fontWeight: 300 }}>Guitarist &nbsp;·&nbsp; Author &nbsp;·&nbsp; AI Entrepreneur</p>
            <div style={{ height: "1px", width: "40px", backgroundColor: "rgba(217,119,6,0.5)" }} />
          </div>
          <div className="home-hero-buttons">
            <a href="#music" className="home-hero-btn-primary">Watch &amp; Listen</a>
            <a href="#contact" className="home-hero-btn-secondary">Book a Lesson</a>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", color: "rgba(255,255,255,0.2)" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", fontFamily: font }}>Scroll</span>
          <div style={{ width: "1px", height: "56px", background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }} />
        </div>
      </section>


{/* FEATURED NEW VIDEO — Digital God (Official Music Video) */}
<section style={{
  padding: "120px 24px 40px",
  borderTop: "1px solid rgba(255,255,255,0.06)",
}}>
  <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>

    <div style={{
      fontSize: "12px",
      letterSpacing: "0.4em",
      textTransform: "uppercase",
      color: "#d97706",
      fontFamily: "Georgia, serif",
      marginBottom: "24px",
    }}>
      New Video &nbsp;·&nbsp; Official Music Video
    </div>

    <h2 style={{
      fontSize: "clamp(34px, 5vw, 56px)",
      fontFamily: "Georgia, serif",
      fontWeight: "normal",
      lineHeight: "1.1",
      margin: "0 0 20px",
      color: "#ffffff",
    }}>
      Digital God
      <br />
      <span style={{ color: "rgba(255,255,255,0.55)", fontStyle: "italic" }}>
        A Three-Act Cinematic Rock Film
      </span>
    </h2>

    <p style={{
      fontSize: "15px",
      lineHeight: "1.75",
      color: "rgba(255,255,255,0.65)",
      maxWidth: "720px",
      margin: "0 auto 48px",
      fontFamily: "Georgia, serif",
    }}>
      An original three-act cinematic rock film &mdash; progressive guitar
      meets a dark, high-concept visual narrative told in three movements.
      Watch the official music video now, with the single streaming on
      Spotify, Apple Music, Amazon Music, and all major platforms.
    </p>

    <div style={{
      position: "relative",
      width: "100%",
      paddingBottom: "56.25%",
      height: 0,
      overflow: "hidden",
      borderRadius: "12px",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
    }}>
      <iframe
        src="https://www.youtube.com/embed/DmvDNDq9ICg"
        title="Digital God — Byron Nemeth (Official Music Video) | A Three-Act Cinematic Rock Film"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>

  </div>
</section>












{/* FEATURED NEW RELEASE — Season's Of May (Symphonic Reimagined) */}
<section style={{
  padding: "120px 24px 40px",
  borderTop: "1px solid rgba(255,255,255,0.06)",
}}>
  <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>

    <div style={{
      fontSize: "12px",
      letterSpacing: "0.4em",
      textTransform: "uppercase",
      color: "#d97706",
      fontFamily: "Georgia, serif",
      marginBottom: "24px",
    }}>
      New Single &nbsp;·&nbsp; Out 05.24.26
    </div>

    <h2 style={{
      fontSize: "clamp(34px, 5vw, 56px)",
      fontFamily: "Georgia, serif",
      fontWeight: "normal",
      lineHeight: "1.1",
      margin: "0 0 20px",
      color: "#ffffff",
    }}>
      Season&rsquo;s Of May
      <br />
      <span style={{ color: "rgba(255,255,255,0.55)", fontStyle: "italic" }}>
        Symphonic Reimagined
      </span>
    </h2>

    <p style={{
      fontSize: "15px",
      lineHeight: "1.75",
      color: "rgba(255,255,255,0.65)",
      maxWidth: "720px",
      margin: "0 auto 48px",
      fontFamily: "Georgia, serif",
    }}>
      A 1990s composition reborn for 2026 &mdash; progressive guitar, modern
      symphonic orchestration, and an original cinematic animated visual
      designed as the film companion to the song. Out 05.24.26 on Spotify,
      Apple Music, Amazon Music, and all major streaming platforms.
    </p>

    <div style={{
      position: "relative",
      width: "100%",
      paddingBottom: "56.25%",
      height: 0,
      overflow: "hidden",
      borderRadius: "12px",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
    }}>
      <iframe
        src="https://www.youtube.com/embed/_9uWuUlTKso"
        title="Byron Nemeth — Season's Of May (Symphonic Reimagined)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>

  </div>
</section>
      {/* MUSIC */}
      <section id="music" className="home-section">
        <div className="home-container">
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={label}>Discography</p>
          </div>
          <div className="home-music-header">
            <h2 style={{ ...sectionHeading, marginBottom: 0 }}>Music that <strong style={{ fontWeight: 700 }}>moves</strong> people</h2>
            <div className="home-playlist-btns">
              <a href="https://youtube.com/playlist?list=OLAK5uy_ksa_i_hXH5O91GihOxdNX75XhLX_AnsE4&si=Y31RgtiQg_3ywUew" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", padding: "12px 24px", textDecoration: "none", fontFamily: font, fontWeight: 400 }}>Greatest Hits ↗</a>
              <a href="https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV?si=oZvlieAgSj-nwhT9qFZa6g" target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", padding: "12px 24px", textDecoration: "none", fontFamily: font, fontWeight: 400 }}>Spotify ↗</a>
            </div>
          </div>
          <div className="home-video-grid">
            {videos.map((video) => (
              <div key={video.id}>
                <div style={{ position: "relative", paddingTop: "56.25%", overflow: "hidden", backgroundColor: "rgba(255,255,255,0.04)" }}>
                  <iframe src={`https://www.youtube.com/embed/${video.id}`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                </div>
                <p style={{ marginTop: "12px", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontFamily: font, fontWeight: 400 }}>{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="home-divider"><div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} /></div>

      {/* LESSONS */}
      <section id="lessons" className="home-section">
        <div className="home-container">
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={label}>Guitar Lessons</p>
          </div>

          <div className="lessons-grid">
            {/* LEFT — flyer image */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/LessonsFlyer.jpg"
                alt="Byron Nemeth Guitar Lessons"
                className="lessons-flyer"
              />
            </div>

            {/* RIGHT — text + boxes */}
            <div className="lessons-right">
              <h2 style={sectionHeading}>Learn from<br />a <strong style={{ fontWeight: 700 }}>pro</strong></h2>
              <p className="mob-body-text" style={{ ...bodyText, marginBottom: "40px" }}>In-home guitar lessons across Las Vegas. Whether you are picking up the guitar for the first time or refining your craft at an advanced level — I meet you exactly where you are.</p>
              <a href="#contact" style={{ display: "inline-block", backgroundColor: "#d97706", color: "#000", fontSize: "14px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font, alignSelf: "flex-start" }}>Book Your First Lesson</a>
              <div className="lessons-boxes">
                {[
                  { level: "Beginner", desc: "Foundations, technique, and building great habits from day one" },
                  { level: "Intermediate", desc: "Expand your vocabulary, theory, and personal playing style" },
                  { level: "Advanced", desc: "Pro-level refinement, performance preparation, and artistry" },
                ].map((item) => (
                  <div key={item.level} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "32px 36px" }}>
                    <h3 style={{ fontSize: "13px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#f59e0b", marginBottom: "12px", fontFamily: font, fontWeight: 500 }}>{item.level}</h3>
                    <p className="mob-body-text" style={{ color: "rgba(255,255,255,0.78)", fontWeight: 300, lineHeight: 1.8, fontSize: "18px", fontFamily: font }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="home-divider"><div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} /></div>

      {/* BOOK */}
      <section id="book" className="home-section">
        <div className="home-container">
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={label}>Published Work</p>
          </div>

          <div className="book-grid">
            {/* LEFT — text */}
            <div>
              <h2 style={sectionHeading}>The Zen of<br /><strong style={{ fontWeight: 700 }}>Guitar</strong></h2>
              <p className="mob-body-text" style={{ ...bodyText, fontSize: "21px", marginBottom: "20px" }}>Understanding Guitar Through Direct Intuition — Volume Three</p>
              <p className="mob-body-text" style={{ ...bodyText, marginBottom: "48px" }}>A transformative guide that goes beyond technique to explore the mindset, philosophy, and artistry that separates good players from truly great ones.</p>
              <a href="https://www.amazon.com/dp/B0DYRT81GQ" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", backgroundColor: "#d97706", color: "#000", fontSize: "14px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font }}>Get It on Amazon</a>
            </div>

            {/* RIGHT — book image, same 380px width as flyer */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a href="https://www.amazon.com/dp/B0DYRT81GQ" target="_blank" rel="noopener noreferrer">
                <img
                  src="/zen.jpg"
                  alt="The Zen of Guitar by Byron Nemeth"
                  className="book-img"
                />
              </a>
            </div>
          </div>

          {/* Full-width description below */}
          <p className="mob-body-text" style={{ ...bodyText, fontSize: "19px", color: "rgba(255,255,255,0.72)", lineHeight: 1.9, marginTop: "8px" }}>
            Volume Three is now released, building upon the foundation of Volumes One and Two with groundbreaking and transformative additions. This new volume introduces the revolutionary concept of the Color Association of the Root Note with any of the Seven Modes, offering a visually intuitive and intellectually stimulating approach to understanding and applying modes. By connecting color theory with music theory, this innovative perspective deepens the player's comprehension of modal relationships and enhances their intuitive grasp of the fretboard.
          </p>
        </div>
      </section>

      <div className="home-divider"><div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} /></div>

      {/* CONTACT */}
      <section id="contact" className="home-section">
        <div className="home-contact-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={label}>Get In Touch</p>
          </div>
          <h2 style={{ ...sectionHeading, marginBottom: "20px" }}>Let us <strong style={{ fontWeight: 700 }}>connect</strong></h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontWeight: 300, marginBottom: "16px", fontSize: "20px", fontFamily: font }}>Lessons &nbsp;·&nbsp; Touring &nbsp;·&nbsp; AI Services &nbsp;·&nbsp; Collaborations</p>
          <div className="home-contact-links">
            <a href="mailto:byron@byronnemeth.com" style={{ fontSize: "17px", color: "rgba(255,255,255,0.75)", textDecoration: "none", fontFamily: font, fontWeight: 300 }}>byron@byronnemeth.com</a>
            <a href="tel:4802095309" style={{ fontSize: "17px", color: "rgba(255,255,255,0.75)", textDecoration: "none", fontFamily: font, fontWeight: 300 }}>480.209.5309</a>
          </div>

          {formStatus === "success" ? (
            <div style={{ border: "1px solid rgba(245,158,11,0.4)", backgroundColor: "rgba(245,158,11,0.06)", padding: "48px 40px", textAlign: "center" }}>
              <p style={{ fontSize: "32px", marginBottom: "16px" }}>🎸</p>
              <p style={{ fontSize: "20px", fontWeight: 500, color: "#fff", fontFamily: font, marginBottom: "12px" }}>Message Sent!</p>
              <p style={{ ...bodyText, fontSize: "17px" }}>Thanks for reaching out — Byron will get back to you soon.</p>
              <button onClick={() => setFormStatus("idle")} style={{ marginTop: "28px", backgroundColor: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", padding: "14px 32px", cursor: "pointer", fontFamily: font }}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} style={inputStyle} />
              <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} style={inputStyle} />
              <select name="subject" required value={formData.subject} onChange={handleChange} style={{ ...inputStyle, backgroundColor: "#080808", color: formData.subject ? "#fff" : "rgba(255,255,255,0.35)" }}>
                <option value="">What can I help you with?</option>
                <option value="Guitar Lessons">Guitar Lessons</option>
                <option value="Touring / Hired Gun">Touring / Hired Gun</option>
                <option value="AI Services">AI Services</option>
                <option value="Other">Other</option>
              </select>
              <textarea name="message" rows={6} placeholder="Your Message" required value={formData.message} onChange={handleChange} style={{ ...inputStyle, resize: "none" }} />
              {formStatus === "error" && (
                <p style={{ color: "#f87171", fontSize: "14px", fontFamily: font, textAlign: "center" }}>Something went wrong — please try again or email byron@byronnemeth.com directly.</p>
              )}
              <button type="submit" disabled={formStatus === "sending"} style={{ backgroundColor: formStatus === "sending" ? "rgba(217,119,6,0.5)" : "#d97706", color: "#000", fontSize: "14px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "24px", border: "none", cursor: formStatus === "sending" ? "not-allowed" : "pointer", width: "100%", marginTop: "8px", fontFamily: font }}>
                {formStatus === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />

    </main>
  );
}
