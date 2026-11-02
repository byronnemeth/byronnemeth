"use client";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useState, useSyncExternalStore } from "react";

// ─── UPCOMING SHOWS ──────────────────────────────────────────────────────────
// To add a show: put the flyer in /public/shows/ and add an entry to this list.
// Shows are listed by date and drop off the site automatically after show day.
// When the list has no upcoming shows, the section says "new dates coming soon".
const shows = [
  {
    date: "2026-11-07", // YYYY-MM-DD
    startTime: "18:00", // 24-hour, used for "Add to Calendar"
    endTime: "21:00",
    time: "6:00 PM – 9:00 PM",
    venue: "Parlour Wine Bar & Eatery",
    billing: "An Evening of Instrumental Jazz Fusion",
    description: "Jeff Beck-inspired jazz fusion rock and an instrumental guitar virtuoso performance. Come for the wine. Stay for the guitar.",
    address: "1716 W Horizon Ridge Pkwy, Suite 100",
    city: "Henderson, NV 89012",
    flyer: "/shows/2026-11-07-parlour.jpg",
    tickets: "", // optional: ticket link
  },
];

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function showDateParts(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const weekday = WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  return { year: y, month: MONTHS[m - 1], day: d, weekday };
}

function showMapsUrl(show) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${show.venue}, ${show.address}, ${show.city}`)}`;
}

function showCalendarUrl(show) {
  const ymd = show.date.replace(/-/g, "");
  const t = (hhmm) => hhmm.replace(":", "") + "00";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Byron Nemeth Live at ${show.venue}`,
    dates: `${ymd}T${t(show.startTime)}/${ymd}T${t(show.endTime)}`,
    ctz: "America/Los_Angeles",
    location: `${show.venue}, ${show.address}, ${show.city}`,
    details: `${show.billing}. More at byronnemeth.com`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

// Today's date in the visitor's browser (null while the page is pre-rendered on the server).
const noSubscribe = () => () => {};
function localToday() {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
}

export default function Home() {
  const today = useSyncExternalStore(noSubscribe, localToday, () => null);
  const upcomingShows = shows
    .filter((s) => !today || s.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

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
        .book-facts { display: flex; flex-wrap: wrap; gap: 10px 22px; margin-bottom: 44px; }
        .book-quote { border-left: 2px solid #d97706; padding: 8px 0 8px 32px; margin: 0 0 72px; }
        .book-features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 28px; margin-bottom: 48px; }

        /* SHOWS — flyer left, details right */
        .shows-section { padding-top: 120px; padding-bottom: 100px; }
        .shows-list { display: flex; flex-direction: column; gap: 72px; }
        .show-card { display: grid; grid-template-columns: 380px 1fr; gap: 64px; align-items: center; }
        .show-flyer { width: 380px; border-radius: 4px; display: block; box-shadow: 0 30px 70px rgba(0,0,0,0.6), 0 0 40px rgba(80,10,10,0.5); border: 1px solid rgba(217,119,6,0.25); }
        .show-details { display: grid; grid-template-columns: 110px 1fr; gap: 14px 24px; margin: 0 0 44px; }
        .show-buttons { display: flex; gap: 16px; flex-wrap: wrap; }
        .show-btn-primary { display: inline-block; background-color: #d97706; color: #000; font-size: 13px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; padding: 18px 40px; text-decoration: none; font-family: var(--font-inter), sans-serif; }
        .show-btn-secondary { display: inline-block; border: 1px solid rgba(255,255,255,0.3); color: rgba(255,255,255,0.85); font-size: 13px; font-weight: 400; letter-spacing: 0.2em; text-transform: uppercase; padding: 18px 40px; text-decoration: none; font-family: var(--font-inter), sans-serif; }

        @media (max-width: 1024px) {
          .show-card { grid-template-columns: 300px 1fr; gap: 48px; }
          .show-flyer { width: 300px; }
          .book-features { grid-template-columns: repeat(2, 1fr); }
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

          /* Shows stacked on mobile */
          .shows-section { padding-top: 72px; padding-bottom: 56px; }
          .show-card { grid-template-columns: 1fr; gap: 32px; }
          .show-flyer { width: 100%; max-width: 420px; margin: 0 auto; }
          .show-details { grid-template-columns: 1fr; gap: 4px; }
          .show-details dd { margin-bottom: 14px !important; }
          .show-buttons { flex-direction: column; }
          .show-buttons a { text-align: center; }

          /* Book extras on mobile */
          .book-features { grid-template-columns: 1fr; }
          .book-quote { padding-left: 20px; margin-bottom: 48px; }
        }
      `}</style>

      <Nav activePage="Home" />

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="/hero3.jpg" alt="Byron Nemeth with his white Flying V" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 18%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.5) 50%, rgba(0,0,0,0.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,8,8,0.4), transparent 40%, transparent 60%, rgba(8,8,8,0.4))" }} />
        </div>
        <div className="home-hero-content" style={{ position: "relative", zIndex: 10, textAlign: "center", width: "100%", maxWidth: "960px", margin: "0 auto", textShadow: "0 2px 18px rgba(0,0,0,0.65)" }}>
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
      </section>

      {/* UPCOMING SHOWS — one flyer per show; edit the `shows` list at the top of this file */}
      <section id="shows" className="shows-section">
        <div className="home-container">
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={label}>Live Dates</p>
          </div>
          <h2 style={{ ...sectionHeading, marginBottom: "64px" }}>Next <strong style={{ fontWeight: 700 }}>shows</strong></h2>

          {upcomingShows.length === 0 ? (
            <p className="mob-body-text" style={bodyText}>
              New dates are coming soon. Follow along on{" "}
              <a href="https://www.instagram.com/byronnemeth/" target="_blank" rel="noopener noreferrer" style={{ color: "#f59e0b", textDecoration: "none" }}>Instagram</a>{" "}
              for the next announcement, or <a href="#contact" style={{ color: "#f59e0b", textDecoration: "none" }}>get in touch</a> to book a performance.
            </p>
          ) : (
            <div className="shows-list">
              {upcomingShows.map((show) => {
                const d = showDateParts(show.date);
                const dt = { fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", fontFamily: font, fontWeight: 500, paddingTop: "4px" };
                const dd = { margin: 0, fontSize: "18px", color: "rgba(255,255,255,0.85)", fontFamily: font, fontWeight: 300, lineHeight: 1.6 };
                return (
                  <article key={show.date + show.venue} className="show-card">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <a href={show.flyer} target="_blank" rel="noopener noreferrer" aria-label={`Open the full-size flyer for ${show.venue}`}>
                        <img src={show.flyer} alt={`Flyer: Byron Nemeth live at ${show.venue}, ${d.weekday} ${d.month} ${d.day}`} className="show-flyer" />
                      </a>
                    </div>
                    <div>
                      <p style={{ ...label, letterSpacing: "0.35em", marginBottom: "18px" }}>{d.weekday} &nbsp;·&nbsp; {d.month} {d.day}, {d.year}</p>
                      <h3 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontFamily: "Georgia, serif", fontWeight: 400, lineHeight: 1.15, color: "#fff", margin: "0 0 14px" }}>{show.venue}</h3>
                      <p style={{ fontSize: "clamp(18px, 2.2vw, 22px)", fontFamily: "Georgia, serif", fontStyle: "italic", color: "rgba(255,255,255,0.6)", margin: "0 0 24px", lineHeight: 1.4 }}>{show.billing}</p>
                      {show.description && (
                        <p className="mob-body-text" style={{ ...bodyText, fontSize: "18px", marginBottom: "36px" }}>{show.description}</p>
                      )}
                      <dl className="show-details">
                        <dt style={dt}>Time</dt>
                        <dd style={dd}>{show.time}</dd>
                        <dt style={dt}>Where</dt>
                        <dd style={dd}>
                          <a href={showMapsUrl(show)} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", borderBottom: "1px solid rgba(245,158,11,0.5)" }}>
                            {show.address}<br />{show.city}
                          </a>
                        </dd>
                      </dl>
                      <div className="show-buttons">
                        {show.tickets ? (
                          <a href={show.tickets} target="_blank" rel="noopener noreferrer" className="show-btn-primary">Get Tickets</a>
                        ) : (
                          <a href={showMapsUrl(show)} target="_blank" rel="noopener noreferrer" className="show-btn-primary">Get Directions</a>
                        )}
                        <a href={showCalendarUrl(show)} target="_blank" rel="noopener noreferrer" className="show-btn-secondary">Add to Calendar</a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <div className="home-divider"><div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} /></div>
      {/* LIVE CONCERT FOOTAGE — vertical YouTube Short */}
      <section style={{
        padding: "50px 24px 40px",
  
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "56px",
        }}>

          {/* Text — left */}
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{
              fontSize: "clamp(26px, 4vw, 40px)",
              fontFamily: "Georgia, serif",
              fontWeight: 400,
              lineHeight: 1.25,
              color: "#fff",
              marginBottom: "28px",
            }}>
              🎸 LIVE CONCERT FOOTAGE — <span style={{ color: "#d97706" }}>BYRON NEMETH</span> 🎸
            </h2>
            <p className="mob-body-text" style={{ fontSize: "17px", lineHeight: 1.8, color: "rgba(255,255,255,0.82)", marginBottom: "20px" }}>
              Experience the energy of Byron Nemeth live in concert, featuring expressive instrumental guitar, powerful improvisation, and a dynamic blend of jazz fusion and rock inspired by players such as Jeff Beck. This performance captures the interaction between tone, technique, melody, and the spontaneous energy that can only happen on stage.
            </p>
            <p className="mob-body-text" style={{ fontSize: "17px", lineHeight: 1.8, color: "rgba(255,255,255,0.82)" }}>
              Whether you’re a guitarist, musician, or simply a fan of instrumental music, I hope you enjoy this look inside the live performance experience. 🎶⚡🎸
            </p>
          </div>

          {/* Vertical video — right */}
          <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
            <div style={{
              width: "100%",
              maxWidth: "340px",
              aspectRatio: "9 / 16",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(217,119,6,0.35)",
              boxShadow: "0 0 40px rgba(80,10,10,0.6)",
            }}>
              <iframe
                src="https://www.youtube.com/embed/jE6rGBf0x-U"
                title="Byron Nemeth — Live Concert Footage"
                style={{ width: "100%", height: "100%", border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>


{/* FEATURED NEW VIDEO — Digital God (Official Music Video) */}
<section style={{
  padding: "60px 24px 40px",
  
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
      New Video &nbsp;·&nbsp; Released 07.26.26
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
      Released &nbsp;·&nbsp; 05.24.26
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
            <p style={label}>Published Work &nbsp;·&nbsp; New Release</p>
          </div>

          <div className="book-grid">
            {/* LEFT — text */}
            <div>
              <h2 style={sectionHeading}>The Zen of<br /><strong style={{ fontWeight: 700 }}>Guitar</strong></h2>
              <p className="mob-body-text" style={{ ...bodyText, fontSize: "21px", marginBottom: "20px" }}>Understanding Guitar Thru Direct Intuition — <span style={{ color: "#f59e0b", fontWeight: 400 }}>Volume Four</span></p>
              <p className="mob-body-text" style={{ ...bodyText, marginBottom: "28px" }}>The most complete guide to the fretboard in the series. This full-color method ties chords, scales, arpeggios and modes into one clear picture of the neck. It is almost twice the size of Volume Three, with a new chapter on technique and expression, a new chapter of modal pentatonic scales and dozens of new lessons.</p>
              <div className="book-facts">
                {["Full-Color Paperback", "8.5 × 11 in", "134 Pages", "Available Now"].map((f) => (
                  <span key={f} style={{ fontSize: "12px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontFamily: font, fontWeight: 500 }}>{f}</span>
                ))}
              </div>
              <a href="https://www.amazon.com/dp/B0HPDWZ9HX" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", backgroundColor: "#d97706", color: "#000", fontSize: "14px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font }}>Get It on Amazon</a>
            </div>

            {/* RIGHT — book cover, same 380px width as flyer */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a href="https://www.amazon.com/dp/B0HPDWZ9HX" target="_blank" rel="noopener noreferrer">
                <img
                  src="/zen4.jpg"
                  alt="The Zen of Guitar, Volume Four by Byron Nemeth"
                  className="book-img"
                />
              </a>
            </div>
          </div>

          <blockquote className="book-quote">
            <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "clamp(20px, 2.4vw, 26px)", lineHeight: 1.6, color: "rgba(255,255,255,0.85)", margin: "0 0 14px" }}>
              &ldquo;This book isn&rsquo;t about memorizing rules; it&rsquo;s about learning to listen to your ears, your instincts and the music that&rsquo;s already inside you. Trust what you hear, follow what you feel, and let the guitar take you somewhere new.&rdquo;
            </p>
            <p style={{ fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(245,158,11,0.85)", fontFamily: font, margin: 0 }}>From the book&rsquo;s welcome</p>
          </blockquote>

          <p style={label}>New in Volume Four</p>
          <div className="book-features">
            {[
              { title: "Technique & Expression", desc: "Bending in tune, vibrato, legato, picking sequences and phrasing, plus a 12-bar blues solo study." },
              { title: "Modal Pentatonics", desc: "Five-note portraits of all seven modes, each with a full-neck map and five connected blocks." },
              { title: "Chords", desc: "The Nashville Number System in all twelve keys, triads and inversions, the CAGED system and the Magic Chord Accompaniment Guide." },
              { title: "Scales & Arpeggios", desc: "Blues connection sequences, Phrygian Dominant to Hungarian Minor, and seventh-chord, tapping and sweep-picking arpeggios." },
              { title: "Performance & Videography", desc: "A chord-by-chord study of “I Don’t Mind,” plus the stories behind the recordings and videos." },
              { title: "The Complete Method", desc: "The core lessons of Volume Three are here too, from notation and the seven major modes to the Lydian Chromatic Concept." },
            ].map((item) => (
              <div key={item.title} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "30px 32px" }}>
                <h3 style={{ fontSize: "13px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#f59e0b", marginBottom: "12px", fontFamily: font, fontWeight: 500 }}>{item.title}</h3>
                <p className="mob-body-text" style={{ color: "rgba(255,255,255,0.75)", fontWeight: 300, lineHeight: 1.75, fontSize: "17px", fontFamily: font, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Full-width description below */}
          <p className="mob-body-text" style={{ ...bodyText, fontSize: "19px", color: "rgba(255,255,255,0.72)", lineHeight: 1.9 }}>
            Every diagram speaks the same visual language, with red squares for roots, finger numbers, interval labels and color-coded blocks, so each page reads like a map of the neck. Almost every lesson ends with a practice line, and a new Weekly Practice Plan turns them into a focused 30-minute daily routine.
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
