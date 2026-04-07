"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Tech() {
  const font = "var(--font-inter), sans-serif";
  const [lightbox, setLightbox] = useState(null);

  const bodyText = { fontSize: "20px", lineHeight: 1.9, color: "rgba(255,255,255,0.78)", fontWeight: 300, fontFamily: font };
  const sectionLabel = { fontSize: "13px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500 };
  const sectionHeading = { fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 300, lineHeight: 1.1, fontFamily: font, marginBottom: "32px" };

  const services = [
    { name: "AI Chatbots", icon: "🤖", desc: "Custom AI assistants trained specifically on your business — your products, your voice, your FAQs. Available 24/7 to engage visitors, answer questions, capture leads, and convert browsers into buyers." },
    { name: "Workflow Automation", icon: "⚡", desc: "Identify the repetitive tasks eating your time and eliminate them entirely. From automated follow-up emails to data entry to report generation — systems that run in the background so you can focus on growth." },
    { name: "Social Media Automation", icon: "📱", desc: "Consistent, scheduled posting and engagement across Facebook, Instagram, YouTube, and more — without lifting a finger. Your brand stays active and visible even when you are on stage." },
    { name: "Custom Web Development", icon: "💻", desc: "Modern, fast, beautifully designed websites built from scratch. Clean code that loads fast, ranks well on Google, and converts visitors into customers or fans." },
  ];

  const webClients = [
    { name: "Sun City Posse", url: "https://suncityposse.org" },
    { name: "Lux Holiday Designs", url: "https://luxholidaydesigns.com" },
    { name: "Vegas Rehearsal", url: "https://vegasrehearsal.com" },
    { name: "Las Vegas Psychiatry", url: "https://lasvegas-psychiatry.com" },
    { name: "Madd Ears", url: "https://www.maddears.com" },
    { name: "Gateway Family Dentistry", url: "https://gatewayfamilydentistry.com" },
    { name: "Edgemark Solutions", url: "https://www.edgemarksolutions.com" },
    { name: "Music Institute Nashville", url: "https://nashville.mi.edu" },
    { name: "Pro Ring Men", url: "https://www.proringmen.com" },
    { name: "The Hot Room TN", url: "https://www.thehotroomtn.com" },
    { name: "Allee Visuals", url: "https://alleevisuals.com" },
    { name: "Psychic Center", url: "https://www.psychiccenter.net" },
    { name: "French Cabinetry", url: "https://frenchcabinetry.com" },
    { name: "RLC Labs", url: "https://www.rlclabs.com" },
    { name: "Accurate Energy Management", url: "https://www.accurateenergymanagement.com" },
    { name: "Daily Insight & Inspiration", url: "https://dailyinsightandinspiration.com" },
    { name: "Gryphon3", url: "https://www.gryphon3.com" },
    { name: "Great Lakes School of Music", url: "https://greatlakesschoolofmusic.com" },
  ];

  const designGroups = [
    {
      client: "National Laser",
      work: "Illustrations",
      images: ["8.png", "9.png", "10.png", "11.png", "12.png", "12b.png"],
    },
    {
      client: "Aaron Heaton",
      work: "Postcard Design",
      images: ["6.jpg"],
    },
    {
      client: "National Laser",
      work: "Illustrations",
      images: ["7.jpg", "13.png"],
    },
    {
      client: "Scottsdale Medical Imaging",
      work: "Business Cards & Postcards",
      images: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    },
    {
      client: "Scottsdale Medical Imaging",
      work: "Trifold Brochure",
      images: ["25.jpg"],
    },
    {
      client: "RLC Labs",
      work: "Brochure Layout",
      images: ["21.png", "22.png", "RLC3a.jpg", "RLC3b.jpg"],
    },
    {
      client: "Scottsdale Medical Imaging",
      work: "Logo & Brand Identity",
      images: ["27.png", "27b.png", "28.png", "28b.png", "29.png", "30.png", "33.png", "33b.png", "34.png", "35.png", "37.png"],
    },
  ];

  const allImages = designGroups.flatMap((g) => g.images.map((img) => ({ src: `/${img}`, client: g.client, work: g.work })));
  const openLightbox = (src, client, work) => { const idx = allImages.findIndex((i) => i.src === src); setLightbox({ idx, src, client, work }); };
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => { if (!lightbox) return; const idx = (lightbox.idx - 1 + allImages.length) % allImages.length; setLightbox({ idx, ...allImages[idx] }); };
  const nextImage = () => { if (!lightbox) return; const idx = (lightbox.idx + 1) % allImages.length; setLightbox({ idx, ...allImages[idx] }); };

  return (
    <main style={{ backgroundColor: "#080808", color: "#ffffff", minHeight: "100vh", fontFamily: font }}>

      <style>{`
        .tech-section { padding-top: 140px; padding-bottom: 140px; }
        .tech-container { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
        .tech-divider { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
        .tech-services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        .tech-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 96px; align-items: center; }
        .tech-clients-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background-color: rgba(255,255,255,0.06); }
        .tech-masonry { column-gap: 16px; }
        .tech-hero-section { position: relative; min-height: 100vh; display: flex; align-items: flex-end; justify-content: center; overflow: hidden; }
        .tech-hero-content { position: relative; z-index: 10; text-align: center; padding: 200px 48px 180px; width: 100%; max-width: 900px; margin: 0 auto; }
        .tech-client-link { display: flex; align-items: center; justify-content: space-between; padding: 24px 28px; background-color: #080808; text-decoration: none; color: rgba(255,255,255,0.78); font-size: 16px; font-weight: 300; }

        @media (max-width: 768px) {
          .tech-section { padding-top: 72px; padding-bottom: 72px; }
          .tech-container { padding: 0 20px; }
          .tech-divider { padding: 0 20px; }
          .tech-services-grid { grid-template-columns: 1fr; gap: 20px; }
          .tech-why-grid { grid-template-columns: 1fr; gap: 40px; }
          .tech-clients-grid { grid-template-columns: 1fr; }
          .tech-masonry { columns: 1 !important; }
          .tech-hero-content { padding: 140px 20px 100px; }
          .tech-client-link { font-size: 16px; color: rgba(255,255,255,0.82); }
          .tech-mob-body { font-size: 18px !important; color: rgba(255,255,255,0.82) !important; }
        }
      `}</style>

      <Nav activePage="Tech" />

      {/* LIGHTBOX */}
      {lightbox && (
        <div onClick={closeLightbox} style={{ position: "fixed", inset: 0, zIndex: 1000, backgroundColor: "rgba(0,0,0,0.93)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", background: "none", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontSize: "24px", padding: "10px 16px", cursor: "pointer", fontFamily: font, zIndex: 10 }}>‹</button>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "90vw", maxHeight: "85vh", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <img src={lightbox.src} alt={lightbox.client} style={{ maxWidth: "100%", maxHeight: "72vh", objectFit: "contain", display: "block" }} />
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "15px", fontWeight: 500, color: "#fff", fontFamily: font, marginBottom: "4px" }}>{lightbox.client}</p>
              <p style={{ fontSize: "12px", fontWeight: 300, color: "rgba(255,255,255,0.5)", fontFamily: font }}>{lightbox.work}</p>
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", background: "none", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontSize: "24px", padding: "10px 16px", cursor: "pointer", fontFamily: font, zIndex: 10 }}>›</button>
          <button onClick={closeLightbox} style={{ position: "absolute", top: "16px", right: "20px", background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: "28px", cursor: "pointer", fontFamily: font }}>×</button>
          <p style={{ position: "absolute", bottom: "16px", left: "50%", transform: "translateX(-50%)", fontSize: "12px", color: "rgba(255,255,255,0.4)", fontFamily: font }}>{lightbox.idx + 1} / {allImages.length}</p>
        </div>
      )}

      {/* HERO */}
      <section className="tech-hero-section">
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="/Futuristic.png" alt="Byron Nemeth AI Technology" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.5) 50%, rgba(0,0,0,0.15) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,8,8,0.4), transparent 40%, transparent 60%, rgba(8,8,8,0.4))" }} />
        </div>
        <div className="tech-hero-content">
          <p style={{ fontSize: "13px", letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(245,158,11,0.85)", marginBottom: "32px", fontFamily: font, fontWeight: 400 }}>AI &amp; Technology Services</p>
          <h1 style={{ fontSize: "clamp(56px, 10vw, 130px)", fontWeight: 200, letterSpacing: "-0.02em", lineHeight: 0.9, marginBottom: "40px", fontFamily: font }}>
            AI that works<br /><strong style={{ fontWeight: 700 }}>for you</strong>
          </h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "40px" }}>
            <div style={{ height: "1px", width: "40px", backgroundColor: "rgba(217,119,6,0.5)" }} />
            <p style={{ fontSize: "clamp(10px, 3vw, 14px)", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", fontFamily: font, fontWeight: 300 }}>Automation · Chatbots · Web Development</p>
            <div style={{ height: "1px", width: "40px", backgroundColor: "rgba(217,119,6,0.5)" }} />
          </div>
          <p className="tech-mob-body" style={{ ...bodyText, fontSize: "20px", maxWidth: "680px", margin: "0 auto 48px" }}>
            I help businesses harness the power of AI automation — from intelligent chatbots to custom workflow systems. Let technology handle the repetitive work so you can focus on what matters most.
          </p>
          <a href="/#contact" style={{ display: "inline-block", backgroundColor: "#d97706", color: "#000", fontSize: "14px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font }}>Let's Talk</a>
        </div>
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", color: "rgba(255,255,255,0.2)" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", fontFamily: font }}>Scroll</span>
          <div style={{ width: "1px", height: "56px", background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }} />
        </div>
      </section>

      <div className="tech-divider"><div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} /></div>

      {/* SERVICES */}
      <section className="tech-section">
        <div className="tech-container">
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>What I Offer</p>
          </div>
          <h2 style={{ ...sectionHeading, marginBottom: "56px" }}>Services &amp; <strong style={{ fontWeight: 700 }}>Solutions</strong></h2>
          <div className="tech-services-grid">
            {services.map((item) => (
              <div key={item.name} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "40px 36px" }}>
                <div style={{ fontSize: "36px", marginBottom: "20px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#ffffff", marginBottom: "14px", fontFamily: font }}>{item.name}</h3>
                <p className="tech-mob-body" style={{ ...bodyText, fontSize: "18px" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="tech-divider"><div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} /></div>

      {/* WHY BYRON */}
      <section className="tech-section">
        <div className="tech-container">
          <div className="tech-why-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
                <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
                <p style={sectionLabel}>Why Work With Me</p>
              </div>
              <h2 style={sectionHeading}>A different kind of<br /><strong style={{ fontWeight: 700 }}>tech partner</strong></h2>
              <p className="tech-mob-body" style={{ ...bodyText, marginBottom: "28px" }}>I am not a faceless agency. I am a Las Vegas-based entrepreneur who builds and runs these same systems for my own businesses. When I build something for you, it is battle-tested.</p>
              <p className="tech-mob-body" style={{ ...bodyText, marginBottom: "40px" }}>To date I have been involved in the development of 300+ websites — nothing outsourced, everything done in house. The phone is always on: <strong style={{ color: "#fff", fontWeight: 500 }}>480.209.5309</strong></p>
              <a href="/#contact" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85)", fontSize: "14px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 48px", textDecoration: "none", fontFamily: font }}>Start a Conversation</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { stat: "300+", desc: "Websites built — nothing outsourced, everything done in house" },
                { stat: "24/7", desc: "AI systems that work around the clock so you never miss a lead" },
                { stat: "Las Vegas", desc: "Local presence with global capability — meet in person or work remotely" },
                { stat: "No Lock-in", desc: "You own everything I build. No ongoing platform fees or vendor dependency" },
              ].map((item) => (
                <div key={item.stat} style={{ display: "flex", gap: "24px", alignItems: "flex-start", padding: "24px 28px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#f59e0b", fontFamily: font, minWidth: "80px", lineHeight: 1 }}>{item.stat}</p>
                  <p className="tech-mob-body" style={{ ...bodyText, fontSize: "16px", margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="tech-divider"><div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} /></div>

      {/* WEB CLIENTS */}
      <section className="tech-section" style={{ paddingBottom: "80px" }}>
        <div className="tech-container">
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>Web Development</p>
          </div>
          <h2 style={{ ...sectionHeading, marginBottom: "16px" }}>Client <strong style={{ fontWeight: 700 }}>Work</strong></h2>
          <p className="tech-mob-body" style={{ ...bodyText, maxWidth: "680px", marginBottom: "56px" }}>A selection of web development projects across industries — from medical practices and music schools to fitness studios and tech companies.</p>
          <div className="tech-clients-grid">
            {webClients.map((client, i) => (
              <a key={i} href={client.url} target="_blank" rel="noopener noreferrer"
                className="tech-client-link"
                style={{ fontFamily: font }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(217,119,6,0.06)"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#080808"}
              >
                <span>{client.name}</span>
                <span style={{ color: "#f59e0b", fontSize: "16px", opacity: 0.7 }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="tech-divider" style={{ marginTop: "0" }}><div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} /></div>

      {/* GRAPHIC DESIGN GALLERY */}
      <section className="tech-section" style={{ paddingTop: "80px" }}>
        <div className="tech-container">
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>Graphic Design</p>
          </div>
          <h2 style={{ ...sectionHeading, marginBottom: "16px" }}>Design <strong style={{ fontWeight: 700 }}>Portfolio</strong></h2>
          <p className="tech-mob-body" style={{ ...bodyText, maxWidth: "680px", marginBottom: "64px" }}>Print, branding, and advertising design across medical, wellness, fitness, and professional services. Click any image to view full size.</p>

          {designGroups.map((group, gi) => (
            <div key={gi} style={{ marginBottom: "64px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
                <div style={{ width: "4px", height: "32px", backgroundColor: "#d97706", borderRadius: "2px", flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: "17px", fontWeight: 500, color: "rgba(255,255,255,0.9)", fontFamily: font, marginBottom: "2px" }}>{group.client}</p>
                  <p style={{ fontSize: "12px", fontWeight: 300, color: "rgba(255,255,255,0.45)", fontFamily: font, letterSpacing: "0.08em" }}>{group.work}</p>
                </div>
              </div>
              <div className="tech-masonry" style={{ columns: group.images.length === 1 ? "1" : group.images.length === 2 ? "2" : "3", columnGap: "16px" }}>
                {group.images.map((img, ii) => (
                  <div key={ii} onClick={() => openLightbox(`/${img}`, group.client, group.work)}
                    style={{ breakInside: "avoid", marginBottom: "16px", cursor: "pointer", position: "relative", overflow: "hidden", backgroundColor: "rgba(255,255,255,0.03)" }}
                    onMouseEnter={(e) => { e.currentTarget.querySelector("img").style.transform = "scale(1.03)"; e.currentTarget.querySelector(".overlay").style.opacity = "1"; }}
                    onMouseLeave={(e) => { e.currentTarget.querySelector("img").style.transform = "scale(1)"; e.currentTarget.querySelector(".overlay").style.opacity = "0"; }}
                  >
                    <img src={`/${img}`} alt={`${group.client} — ${group.work}`} style={{ width: "100%", display: "block", transition: "transform 0.4s ease" }} />
                    <div className="overlay" style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s ease" }}>
                      <span style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#fff", fontFamily: font }}>View Full Size</span>
                    </div>
                  </div>
                ))}
              </div>
              {gi < designGroups.length - 1 && <div style={{ height: "1px", background: "linear-gradient(to right, rgba(255,255,255,0.06), transparent)", marginTop: "48px" }} />}
            </div>
          ))}
        </div>
      </section>

      <div className="tech-divider"><div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} /></div>

      {/* CTA */}
      <section className="tech-section" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", marginBottom: "28px" }}>
            <div style={{ height: "1px", width: "40px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>Ready to Automate?</p>
            <div style={{ height: "1px", width: "40px", backgroundColor: "#d97706" }} />
          </div>
          <h2 style={{ ...sectionHeading, marginBottom: "24px", textAlign: "center" }}>Let's build something<br /><strong style={{ fontWeight: 700 }}>great together</strong></h2>
          <p className="tech-mob-body" style={{ ...bodyText, marginBottom: "48px" }}>Whether you need a chatbot, a fully automated social media presence, or a brand new website — reach out and let's talk about what's possible.</p>
          <a href="/#contact" style={{ display: "inline-block", backgroundColor: "#d97706", color: "#000", fontSize: "14px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font }}>Get In Touch</a>
        </div>
      </section>

      <Footer />

    </main>
  );
}
