"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Discography() {
  const font = "var(--font-inter), sans-serif";

  const albums = [
   {
      year: "2026",
      title: "Season's Of May — Symphonic Reimagined",
      artist: "Byron Nemeth",
      cover: "/seasons-of-may.jpg",
      spotify: "https://open.spotify.com/album/1u3i1ljMKvSaFoNs300QP1",
      desc: "A 1990s composition reborn in 2026 as a sweeping symphonic statement — designed as a miniature motion picture rather than just a song. Recorded and mixed in Avid Pro Tools with Byron's Charvel Jake E. Lee Strat through the Fractal AM4 and VP4, the track features orchestral arrangements developed with SUNO and an animated cinematic visual created with Freebeat. Released 05.24.26, this launches Byron's new direction into film composition and cinematic music production on Spotify, Apple Music, Amazon Music, and all major streaming platforms.",
    }, {
      year: "2025",
      title: "I Am Thee Ocean",
      artist: "Byron Nemeth Group",
      cover: "/ocean.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "A bold statement of collective musical identity and creative evolution, released October 31, 2025. Featuring Peter Barcott on lead vocals, Dennis Osinski on drums, and Paul Hughes on bass guitar, the track captures the expansive emotional terrain the band has travelled together. Byron Nemeth's signature melodic lead work and textured rhythmic sensibility serve as the expressive backbone of the song's journey. Each member brings their absolute best in service of the song — creating something greater than the sum of its parts. Now available on all major streaming platforms worldwide.",
    },
    {
      year: "2024",
      title: "Spanish Transcendence",
      artist: "Byron Nemeth",
      cover: "/st1.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "A flamenco-infused rock composition that showcases Byron's signature melodic sensibility and the rich influence of classical Spanish guitar woven into hard rock energy. The track takes listeners on a harmonic journey through layered guitars, dynamic rhythm passages, and soaring lead work that channels the spirit of both Flamenco masters and rock legends. Written and produced entirely by Byron, Spanish Transcendence reflects his deep love for world music and his ability to blend genres with authenticity. Available now on Spotify, Apple Music, and all major streaming platforms.",
    },
    {
      year: "2023",
      title: "Hell To Pay",
      artist: "Byron Nemeth Group",
      cover: "/HTP_5.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "Recorded at The Tone Factory in Las Vegas on October 23, 2023 with Producer Vinnie Castaldo, Hell To Pay is a hard-driving rock anthem built on Byron's razor-sharp guitar work and the explosive energy of the Byron Nemeth Group. The music video was filmed and edited by Alyssa Gibson and shot on location at The Jackpot bar in Las Vegas and the Tone Factory on December 4, 2023. Audio was recorded by Johnny Gibson and mixed and produced by Dylan Dyce on October 30, 2023. Released on Christmas Day 2023, Hell To Pay announced the return of the Byron Nemeth Group with full force.",
    },
    {
      year: "2023",
      title: "It's All Over",
      artist: "Byron Nemeth Group",
      cover: "/IAO_5.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "A soaring power ballad recorded alongside Hell To Pay at The Tone Factory in Las Vegas, It's All Over showcases the full emotional range of the Byron Nemeth Group. Where Hell To Pay delivers raw aggression, this track pulls back to reveal vulnerability, melody, and cinematic scope — with Byron's lead guitar weaving through the arrangement like a second voice. The song features the powerhouse lineup of Riley Baxter on vocals, Dennis Osinski on drums, and Paul Hughes on bass guitar. It stands as one of the most emotionally resonant recordings in the Byron Nemeth catalog.",
    },
    {
      year: "2021",
      title: "You Know It's True",
      artist: "Byron Nemeth",
      cover: "/CD_Home_Page_1-1.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "Recorded at the legendary Blackbird Studios in Nashville — one of the premier recording facilities in the world — with Luis Espaillat on bass, Zach Ballard on drums, and Steve Braun delivering powerful lead vocals. Produced by Tim Dolbear and engineered by Lowell Reynolds, with video direction by Mark Allee and stunning artwork by Timo Wuerz. The track was tracked live in the studio, old-school style, with all four musicians playing simultaneously for maximum chemistry. Released September 29, 2021, You Know It's True became one of Byron's most-watched music videos.",
    },
    {
      year: "2021",
      title: "Engines Of Thunder",
      artist: "Byron Nemeth",
      cover: "/engines.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "A pure instrumental that pays homage to the early Satriani and Hendrix vibe — where strong emphasis on composition and lyrical soloing created music that spoke without words. Engines Of Thunder is built on amazing hooks, unique twists, and guitar playing that sings through every phrase. Byron composed and performed every element of this track, demonstrating his mastery of melody-driven instrumental rock. The performance video was filmed in Phoenix on November 16, 2020 and captures the raw energy and technical precision that define Byron's playing style.",
    },
    {
      year: "2021",
      title: "Sunset At The Marquis",
      artist: "Byron Nemeth",
      cover: "/CD_Home_Page_77.png",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "Inspired by Jimmy Page's C6 open tuning from Physical Graffiti, Sunset At The Marquis blends Led Zeppelin-style acoustic rhythm guitar with the harmony-driven electric lead work of Michael Schenker and Brian May. The result is a richly layered instrumental that feels both timeless and deeply personal. Mixed at Abbey Road Studios in London by engineer John Barrett on the SSL Duality Delta 24 Mixing Console, the track carries the same sonic standard as Byron's full album releases. It stands as one of the most atmospheric and emotionally evocative pieces in his catalog.",
    },
    {
      year: "2022",
      title: "The Pinot Noir Wine Song",
      artist: "Byron Nemeth",
      cover: "/Pinot.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "A sophisticated and melodic departure from the hard rock arena, The Pinot Noir Wine Song showcases Byron's remarkable range as a songwriter and composer. Smooth, elegant, and undeniably catchy, the track was inspired by Byron's love of fine wine and good company — a musical toast to the finer things in life. The composition weaves jazz-influenced chord voicings with melodic guitar lines that feel warm and inviting from the very first note. It remains one of the most charming and unexpected pieces in the Byron Nemeth catalog, proving his artistry extends well beyond genre.",
    },
    {
      year: "2014",
      title: "The Video Chronicles",
      artist: "Byron Nemeth",
      cover: "/CD_Home_Page_91.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "A landmark 4-song CD studio video release featuring two members of the Steve Vai Band — Jeremy Colson on drums and Philip Bynoe on bass — alongside vocalist Mark Boals, who sang on Yngwie Malmsteen's iconic Trilogy album. The Video Chronicles represented a creative leap for Byron, showcasing his talents not only as a performer and guitarist but as a lyricist and composer working at the highest level. Each of the four tracks was recorded as both an audio and full video release, creating a complete artistic statement. The Video Chronicles is available on all streaming platforms.",
    },
    {
      year: "2006",
      title: "The Force Within",
      artist: "Byron Nemeth",
      cover: "/tfwi.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "Mastered at Abbey Road Studios on December 11, 2006 by Nick Webb — one of the last major projects Nick completed before his retirement — The Force Within is the definitive Byron Nemeth Group statement. Cover artwork was created by Hugh Syme, the world-renowned artist behind iconic albums by Rush, Def Leppard, and Dream Theater, making Byron the only independent artist to feature his work. A tour de force of guitar acrobatics and progressive rock sensibilities, the album drew comparisons to the masters of the genre. The Force Within was rereleased in 2007 and remains available on all streaming platforms.",
    },
    {
      year: "2003",
      title: "100 Worlds",
      artist: "Byron Nemeth",
      cover: "/100_Worlds.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "Mastered at Abbey Road Studios in London by Nick Webb on November 17, 2003, 100 Worlds was a statement that characterized what could be created with music at the highest level of production. With compositions like 'Russian Winter' and 'La Luz De Barcelona,' Byron began marrying international textures and flavors in meticulously composed and performed musical pieces. The album earned him a feature in the chapter 'Switching Gears' from the book Working Musicians by ASCAP/DEEMS Taylor award-winning author Bruce Pollock. 100 Worlds was rereleased in 2004 as a CD and remains available on streaming platforms worldwide.",
    },
    {
      year: "2000",
      title: "2000",
      artist: "Byron Nemeth",
      cover: "/2000.jpg",
      spotify: "https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV",
      desc: "A completely self-produced and self-performed album that marked Byron Nemeth's bold arrival as a solo recording artist. With singles like 'Machines of Ice' and 'High Speed Life,' Byron began to gain notoriety on the hard rock and guitar music scene. In 2001, he was invited to perform 'It's Showtime' on the Jason Becker Tribute CD 'Warmth in the Wilderness' — a compilation designed to spread awareness of Jason's ALS condition and celebrate his musical legacy. The album remains a testament to Byron's vision, discipline, and the raw musical ambition that has defined his career ever since.",
    },
  ];

  return (
    <main style={{ backgroundColor: "#080808", color: "#ffffff", minHeight: "100vh", fontFamily: font }}>

      <style>{`
        .disc-hero {
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          background-image: url('/8bn.jpg');
          background-size: cover;
          background-position: center 15%;
          background-repeat: no-repeat;
        }
        .disc-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #080808 0%, rgba(8,8,8,0.55) 50%, rgba(0,0,0,0.25) 100%);
        }
        .disc-hero-inner { position: relative; z-index: 10; max-width: 900px; margin: 0 auto; padding: 120px 48px 100px; }
        .disc-hero-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .disc-container { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
        .disc-section { padding-top: 100px; padding-bottom: 160px; }
        .disc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 56px 40px; }
        .disc-album-desc { font-size: 17px; line-height: 1.8; color: rgba(255,255,255,0.78); font-weight: 300; }
        .disc-cta-section { padding-top: 120px; padding-bottom: 140px; text-align: center; }
        .disc-cta-inner { max-width: 600px; margin: 0 auto; padding: 0 48px; }
        .disc-stream-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .disc-hero { min-height: 70vh; background-position: center 20%; }
          .disc-hero-inner { padding: 100px 20px 80px; }
          .disc-container { padding: 0 20px; }
          .disc-section { padding-top: 60px; padding-bottom: 80px; }
          .disc-grid { grid-template-columns: 1fr; gap: 48px; }
          .disc-album-desc { font-size: 17px !important; line-height: 1.8; }
          .disc-cta-section { padding-top: 60px; padding-bottom: 80px; }
          .disc-cta-inner { padding: 0 20px; }
          .disc-stream-btns { flex-direction: column; align-items: stretch; }
          .disc-stream-btns a { text-align: center; }
        }

        @media (max-width: 480px) {
          .disc-hero { min-height: 75vh; background-position: center 20%; }
        }
      `}</style>

      <Nav activePage="Discography" />

      {/* HERO */}
      <section className="disc-hero">
        <div className="disc-hero-overlay" />
        <div className="disc-hero-inner">
          <p style={{ fontSize: "13px", letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(245,158,11,0.85)", marginBottom: "28px", fontFamily: font, fontWeight: 400 }}>Full Catalog</p>
          <h1 style={{ fontSize: "clamp(48px, 9vw, 110px)", fontWeight: 200, letterSpacing: "-0.02em", lineHeight: 0.9, marginBottom: "32px", fontFamily: font }}>
            Disco<strong style={{ fontWeight: 700 }}>graphy</strong>
          </h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", marginBottom: "40px" }}>
            <div style={{ height: "1px", width: "40px", backgroundColor: "rgba(217,119,6,0.5)" }} />
            <p style={{ fontSize: "14px", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", fontFamily: font, fontWeight: 300 }}>2000 – Present</p>
            <div style={{ height: "1px", width: "40px", backgroundColor: "rgba(217,119,6,0.5)" }} />
          </div>
          <div className="disc-hero-btns">
            <a href="https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV?si=oZvlieAgSj-nwhT9qFZa6g" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", backgroundColor: "#1DB954", color: "#000", fontWeight: 600, padding: "16px 36px", textDecoration: "none", fontFamily: font }}>Follow on Spotify</a>
            <a href="https://youtube.com/playlist?list=OLAK5uy_ksa_i_hXH5O91GihOxdNX75XhLX_AnsE4&si=Y31RgtiQg_3ywUew" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.8)", padding: "16px 36px", textDecoration: "none", fontFamily: font }}>Greatest Hits ↗</a>
          </div>
        </div>
      </section>

      <div className="disc-container"><div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} /></div>

      {/* ALBUM GRID */}
      <section className="disc-section">
        <div className="disc-container">
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "56px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={{ fontSize: "13px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500 }}>Releases</p>
          </div>
          <div className="disc-grid">
            {albums.map((album, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <a href={album.spotify} target="_blank" rel="noopener noreferrer"
                  style={{ display: "block", position: "relative", overflow: "hidden" }}
                  onMouseEnter={(e) => { e.currentTarget.querySelector("img").style.transform = "scale(1.04)"; e.currentTarget.querySelector(".overlay").style.opacity = "1"; }}
                  onMouseLeave={(e) => { e.currentTarget.querySelector("img").style.transform = "scale(1)"; e.currentTarget.querySelector(".overlay").style.opacity = "0"; }}
                >
                  <img src={album.cover} alt={album.title} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }} />
                  <div className="overlay" style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s ease" }}>
                    <span style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#fff", fontFamily: font, border: "1px solid rgba(255,255,255,0.6)", padding: "10px 18px" }}>Listen on Spotify</span>
                  </div>
                </a>
                <div style={{ paddingTop: "20px" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500, marginBottom: "8px" }}>{album.year} &nbsp;·&nbsp; {album.artist}</p>
                  <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#ffffff", fontFamily: font, marginBottom: "12px", lineHeight: 1.2 }}>{album.title}</h3>
                  <p className="disc-album-desc" style={{ fontFamily: font }}>{album.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="disc-container"><div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)" }} /></div>

      {/* STREAMING CTA */}
      <section className="disc-cta-section">
        <div className="disc-cta-inner">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "40px", backgroundColor: "#d97706" }} />
            <p style={{ fontSize: "13px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500 }}>Stream Everywhere</p>
            <div style={{ height: "1px", width: "40px", backgroundColor: "#d97706" }} />
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 300, lineHeight: 1.1, fontFamily: font, margin: "0 0 40px", color: "#fff" }}>
            All music available on <strong style={{ fontWeight: 700 }}>every platform</strong>
          </h2>
          <div className="disc-stream-btns">
            <a href="https://open.spotify.com/artist/72Be17THrKoSxQtWlJFvtV?si=oZvlieAgSj-nwhT9qFZa6g" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", backgroundColor: "#1DB954", color: "#000", fontSize: "13px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "18px 40px", textDecoration: "none", fontFamily: font }}>Spotify</a>
            <a href="https://www.youtube.com/@byronnemeth" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.8)", fontSize: "13px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", padding: "18px 40px", textDecoration: "none", fontFamily: font }}>YouTube</a>
            <a href="https://soundcloud.com/byronnemethmusic" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.8)", fontSize: "13px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", padding: "18px 40px", textDecoration: "none", fontFamily: font }}>SoundCloud</a>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
