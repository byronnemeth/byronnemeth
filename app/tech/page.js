"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Tech() {
  const font = "var(--font-inter), sans-serif";
  const [lightbox, setLightbox] = useState(null);

  const bodyText = {
    fontSize: "19px",
    lineHeight: 1.9,
    color: "rgba(255,255,255,0.55)",
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

  const sectionHeading = {
    fontSize: "clamp(48px, 5vw, 72px)",
    fontWeight: 300,
    lineHeight: 1.1,
    fontFamily: font,
    marginBottom: "32px",
  };

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
      images: ["2.png", "3.png", "4.png", "5.png"],
    },
    {
      client: "Scottsdale Medical Imaging",
      work: "Trifold Brochure",
      images: ["25.jpg"],
    },
    {
      client: "RLC Labs",
      work: "Brochure Layout",
      images: ["21.png", "22.png"],
    },
    {
      client: "Scottsdale Medical Imaging",
      work: "Logo & Brand Identity",
      images: ["27.png", "27b.png", "28.png", "28b.png", "29.png", "30.png", "33.png", "33b.png", "34.png", "35.png", "37.png"],
    },
  ];

  const allImages = designGroups.flatMap((g) =>
    g.images.map((img) => ({ src: `/${img}`, client: g.client, work: g.work }))
  );

  const openLightbox = (src, client, work) => {
    const idx = allImages.findIndex((i) => i.src === src);
    setLightbox({ idx, src, client, work });
  };

  const closeLightbox = () => setLightbox(null);

  const prevImage = () => {
    if (!lightbox) return;
    const idx = (lightbox.idx - 1 + allImages.length) % allImages.length;
    setLightbox({ idx, ...allImages[idx] });
  };

  const nextImage = () => {
    if (!lightbox) return;
    const idx = (lightbox.idx + 1) % allImages.length;
    setLightbox({ idx, ...allImages[idx] });
  };

  return (
    <main style={{ backgroundColor: "#080808", color: "#ffffff", minHeight: "100vh", fontFamily: font }}>

      <Nav activePage="Tech" />

      {/* LIGHTBOX */}
      {lightbox && (
        <div onClick={closeLightbox} style={{ position: "fixed", inset: 0, zIndex: 1000, backgroundColor: "rgba(0,0,0,0.93)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} style={{ position: "absolute", left: "32px", top: "50%", transform: "translateY(-50%)", background: "none", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontSize: "28px", padding: "12px 20px", cursor: "pointer", fontFamily: font, zIndex: 10 }}>‹</button>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "85vw", maxHeight: "85vh", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <img src={lightbox.src} alt={lightbox.client} style={{ maxWidth: "100%", maxHeight: "75vh", objectFit: "contain", display: "block" }} />
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "16px", fontWeight: 500, color: "#fff", fontFamily: font, marginBottom: "4px" }}>{lightbox.client}</p>
              <p style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.4)", fontFamily: font, letterSpacing: "0.1em" }}>{lightbox.work}</p>
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} style={{ position: "absolute", right: "32px", top: "50%", transform: "translateY(-50%)", background: "none", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontSize: "28px", padding: "12px 20px", cursor: "pointer", fontFamily: font, zIndex: 10 }}>›</button>
          <button onClick={closeLightbox} style={{ position: "absolute", top: "24px", right: "32px", background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: "32px", cursor: "pointer", fontFamily: font }}>×</button>
          <p style={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", fontSize: "12px", color: "rgba(255,255,255,0.3)", fontFamily: font, letterSpacing: "0.2em" }}>{lightbox.idx + 1} / {allImages.length}</p>
        </div>
      )}

      {/* HERO — full width Futuristic.png background */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="/Futuristic.png"
            alt="Byron Nemeth AI Technology"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.5) 50%, rgba(0,0,0,0.15) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,8,8,0.4), transparent 40%, transparent 60%, rgba(8,8,8,0.4))" }} />
        </div>

        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "200px 48px 180px", width: "100%", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "13px", letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(245,158,11,0.85)", marginBottom: "32px", fontFamily: font, fontWeight: 400 }}>
            AI &amp; Technology Services
          </p>
          <h1 style={{ fontSize: "clamp(64px, 10vw, 130px)", fontWeight: 200, letterSpacing: "-0.02em", lineHeight: 0.9, marginBottom: "40px", fontFamily: font }}>
            AI that works<br /><strong style={{ fontWeight: 700 }}>for you</strong>
          </h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", marginBottom: "48px" }}>
            <div style={{ height: "1px", width: "80px", backgroundColor: "rgba(217,119,6,0.5)" }} />
            <p style={{ fontSize: "14px", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", fontFamily: font, fontWeight: 300 }}>
              Automation · Chatbots · Web Development
            </p>
            <div style={{ height: "1px", width: "80px", backgroundColor: "rgba(217,119,6,0.5)" }} />
          </div>
          <p style={{ ...bodyText, fontSize: "21px", maxWidth: "680px", margin: "0 auto 56px", color: "rgba(255,255,255,0.7)" }}>
            I help businesses harness the power of AI automation — from intelligent chatbots to custom workflow systems. Let technology handle the repetitive work so you can focus on what matters most.
          </p>
          <a href="/#contact" style={{ display: "inline-block", backgroundColor: "#d97706", color: "#000", fontSize: "14px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font }}>
            Let's Talk
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", color: "rgba(255,255,255,0.2)" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", fontFamily: font }}>Scroll</span>
          <div style={{ width: "1px", height: "56px", background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }} />
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} />
      </div>

      {/* SERVICES */}
      <section style={{ paddingTop: "140px", paddingBottom: "140px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>What I Offer</p>
          </div>
          <h2 style={{ ...sectionHeading, marginBottom: "80px" }}>Services &amp; <strong style={{ fontWeight: 700 }}>Solutions</strong></h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            {services.map((item) => (
              <div key={item.name} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "52px 48px" }}>
                <div style={{ fontSize: "40px", marginBottom: "24px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#ffffff", marginBottom: "16px", fontFamily: font }}>{item.name}</h3>
                <p style={{ ...bodyText, fontSize: "17px" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} />
      </div>

      {/* WHY BYRON */}
      <section style={{ paddingTop: "140px", paddingBottom: "140px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
                <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
                <p style={sectionLabel}>Why Work With Me</p>
              </div>
              <h2 style={sectionHeading}>A different kind of<br /><strong style={{ fontWeight: 700 }}>tech partner</strong></h2>
              <p style={{ ...bodyText, marginBottom: "32px" }}>
                I am not a faceless agency. I am a Las Vegas-based entrepreneur who builds and runs these same systems for my own businesses. When I build something for you, it is battle-tested.
              </p>
              <p style={{ ...bodyText, marginBottom: "48px" }}>
                To date I have been involved in the development of 300+ websites — nothing outsourced, everything done in house. The phone is always on: <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>480.209.5309</strong>
              </p>
              <a href="/#contact" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font }}>Start a Conversation</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { stat: "300+", desc: "Websites built — nothing outsourced, everything done in house" },
                { stat: "24/7", desc: "AI systems that work around the clock so you never miss a lead" },
                { stat: "Las Vegas", desc: "Local presence with global capability — meet in person or work remotely" },
                { stat: "No Lock-in", desc: "You own everything I build. No ongoing platform fees or vendor dependency" },
              ].map((item) => (
                <div key={item.stat} style={{ display: "flex", gap: "32px", alignItems: "flex-start", padding: "28px 32px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p style={{ fontSize: "24px", fontWeight: 700, color: "#f59e0b", fontFamily: font, minWidth: "100px", lineHeight: 1 }}>{item.stat}</p>
                  <p style={{ ...bodyText, fontSize: "16px", margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} />
      </div>

      {/* WEB DEVELOPMENT CLIENTS */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>Web Development</p>
          </div>
          <h2 style={{ ...sectionHeading, marginBottom: "16px" }}>Client <strong style={{ fontWeight: 700 }}>Work</strong></h2>
          <p style={{ ...bodyText, maxWidth: "680px", marginBottom: "72px" }}>
            A selection of web development projects across industries — from medical practices and music schools to fitness studios and tech companies.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "rgba(255,255,255,0.06)" }}>
            {webClients.map((client, i) => (
              <a key={i} href={client.url} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 36px", backgroundColor: "#080808", textDecoration: "none", color: "rgba(255,255,255,0.7)", fontSize: "16px", fontFamily: font, fontWeight: 300 }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(217,119,6,0.06)"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#080808"}
              >
                <span>{client.name}</span>
                <span style={{ color: "#f59e0b", fontSize: "16px", opacity: 0.6 }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: "1200px", margin: "80px auto 0", padding: "0 48px" }}>
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} />
      </div>

      {/* GRAPHIC DESIGN GALLERY */}
      <section style={{ paddingTop: "100px", paddingBottom: "140px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>Graphic Design</p>
          </div>
          <h2 style={{ ...sectionHeading, marginBottom: "16px" }}>Design <strong style={{ fontWeight: 700 }}>Portfolio</strong></h2>
          <p style={{ ...bodyText, maxWidth: "680px", marginBottom: "72px" }}>
            Print, branding, and advertising design across medical, wellness, fitness, and professional services. Click any image to view full size.
          </p>

          {designGroups.map((group, gi) => (
            <div key={gi} style={{ marginBottom: "80px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "28px" }}>
                <div style={{ width: "4px", height: "36px", backgroundColor: "#d97706", borderRadius: "2px", flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: "18px", fontWeight: 500, color: "rgba(255,255,255,0.85)", fontFamily: font, marginBottom: "2px" }}>{group.client}</p>
                  <p style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.35)", fontFamily: font, letterSpacing: "0.08em" }}>{group.work}</p>
                </div>
              </div>
              <div style={{
                columns: group.images.length === 1 ? "1" : group.images.length === 2 ? "2" : "3",
                columnGap: "16px",
              }}>
                {group.images.map((img, ii) => (
                  <div
                    key={ii}
                    onClick={() => openLightbox(`/${img}`, group.client, group.work)}
                    style={{ breakInside: "avoid", marginBottom: "16px", cursor: "pointer", position: "relative", overflow: "hidden", backgroundColor: "rgba(255,255,255,0.03)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.querySelector("img").style.transform = "scale(1.03)";
                      e.currentTarget.querySelector(".overlay").style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.querySelector("img").style.transform = "scale(1)";
                      e.currentTarget.querySelector(".overlay").style.opacity = "0";
                    }}
                  >
                    <img src={`/${img}`} alt={`${group.client} — ${group.work}`} style={{ width: "100%", display: "block", transition: "transform 0.4s ease" }} />
                    <div className="overlay" style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s ease" }}>
                      <span style={{ fontSize: "13px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#fff", fontFamily: font, fontWeight: 400 }}>View Full Size</span>
                    </div>
                  </div>
                ))}
              </div>
              {gi < designGroups.length - 1 && (
                <div style={{ height: "1px", background: "linear-gradient(to right, rgba(255,255,255,0.06), transparent)", marginTop: "64px" }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} />
      </div>

      {/* FINAL CTA */}
      <section style={{ paddingTop: "140px", paddingBottom: "160px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", marginBottom: "32px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>Ready to Automate?</p>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
          </div>
          <h2 style={{ ...sectionHeading, marginBottom: "24px", textAlign: "center" }}>Let's build something<br /><strong style={{ fontWeight: 700 }}>great together</strong></h2>
          <p style={{ ...bodyText, marginBottom: "52px" }}>
            Whether you need a chatbot, a fully automated social media presence, or a brand new website — reach out and let's talk about what's possible.
          </p>
          <a href="/#contact" style={{ display: "inline-block", backgroundColor: "#d97706", color: "#000", fontSize: "14px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font }}>Get In Touch</a>
        </div>
      </section>

      <Footer />

    </main>
  );
}
