"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Bio() {
  const font = "var(--font-inter), sans-serif";
  const bodyText = { fontSize: "20px", lineHeight: 1.9, color: "rgba(255,255,255,0.78)", fontWeight: 300, fontFamily: font };
  const sectionLabel = { fontSize: "13px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500 };
  const link = { color: "#f59e0b", textDecoration: "none", fontWeight: 400 };

  const pressLinks = [
    { label: "Hollywood Press Corps — An Interview with Musical Visionary Byron Nemeth", url: "https://hollywoodpresscorps.com/an-interview-with-musical-visionary-byron-nemeth/" },
    { label: "BackStage360 — Interviews from the NAMM Show 2026", url: "https://backstage360.com/interviews-from-the-namm-show-2026-vol-iii/" },
    { label: "Music Connection — Business Side of Music Podcast", url: "https://www.musicconnection.com/byron-nemeth-on-business-side-of-music-podcast/" },
    { label: "Music Connection — New Music Critique", url: "https://www.musicconnection.com/new-music-critique-byron-nemeth/" },
    { label: "BraveWords — You Know It's True Video Release", url: "https://bravewords.com/news/byron-nemeth-releases-you-know-its-true-music-video" },
    { label: "BraveWords — You Know It's True Artwork Revealed", url: "https://bravewords.com/news/byron-nemeth-you-know-its-true-artwork-revealed" },
    { label: "BraveWords — New Single Announced", url: "https://bravewords.com/news/byron-nemeth-to-record-new-single-video-you-know-its-true" },
    { label: "BraveWords — Engines Of Thunder Release", url: "https://bravewords.com/news/byron-nemeth-releases-engines-of-thunder-performance-video" },
  ];

  return (
    <main style={{ backgroundColor: "#080808", color: "#ffffff", minHeight: "100vh", fontFamily: font }}>

      <style>{`
        .bio-container { max-width: 860px; margin: 0 auto; padding: 0 48px; }
        .bio-section { padding-top: 120px; padding-bottom: 160px; }
        .bio-hero { position: relative; height: 75vh; overflow: hidden; }
        .bio-timeline-row { margin-bottom: 64px; display: grid; grid-template-columns: 180px 1fr; gap: 48px; align-items: start; }
        .bio-timeline-year { font-size: 26px; font-weight: 700; color: #f59e0b; line-height: 1.1; }
        .bio-timeline-label { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-top: 8px; font-weight: 400; line-height: 1.5; }
        .bio-sub-label { font-size: 13px; letter-spacing: 0.25em; text-transform: uppercase; color: #f59e0b; font-weight: 500; margin-bottom: 14px; }
        .bio-cta-row { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .bio-press-link { display: flex; justify-content: space-between; align-items: center; padding: 24px 32px; border: 1px solid rgba(255,255,255,0.08); text-decoration: none; color: rgba(255,255,255,0.75); font-size: 16px; font-weight: 300; }

        @media (max-width: 768px) {
          .bio-container { padding: 0 20px; }
          .bio-section { padding-top: 60px; padding-bottom: 80px; }
          .bio-hero { height: 55vh; }
          .bio-timeline-row { grid-template-columns: 1fr; gap: 12px; margin-bottom: 48px; }
          .bio-timeline-year { font-size: 20px; }
          .bio-press-link { font-size: 15px; padding: 18px 20px; flex-direction: column; align-items: flex-start; gap: 8px; color: rgba(255,255,255,0.8); }
          .bio-cta-row { flex-direction: column; align-items: stretch; }
          .bio-cta-row a { text-align: center; }
          .bio-body-p { font-size: 18px !important; color: rgba(255,255,255,0.82) !important; }
        }
      `}</style>

      <Nav activePage="Bio" />

      <div className="bio-hero">
        <img src="/Biography5.jpg" alt="Byron Nemeth" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.3) 60%, rgba(0,0,0,0.2) 100%)" }} />
        <div style={{ position: "absolute", bottom: "60px", left: "50%", transform: "translateX(-50%)", textAlign: "center", zIndex: 10, width: "100%" }}>
          <p style={{ fontSize: "13px", letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(245,158,11,0.85)", marginBottom: "16px", fontFamily: font, fontWeight: 400 }}>The Story</p>
          <h1 style={{ fontSize: "clamp(48px, 9vw, 110px)", fontWeight: 200, letterSpacing: "-0.02em", lineHeight: 0.9, fontFamily: font }}>
            Byron<br /><strong style={{ fontWeight: 700 }}>Nemeth</strong>
          </h1>
        </div>
      </div>

      <section className="bio-section">
        <div className="bio-container">

          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "48px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>Biography</p>
          </div>

          <p className="bio-body-p" style={{ ...bodyText, fontSize: "21px", marginBottom: "32px" }}>
            <strong style={{ color: "#fff", fontWeight: 600 }}>Byron Nemeth</strong>, multi-instrumentalist and hard rock aficionado who has done tours and taken part in many stellar releases to date and knew at a young age that music was his true calling. Upon hearing Elvis &amp; The Beatles from his wonderful parents as a birthday music gift he turned his attention to learning guitar and studying the styles of Randy Rhoads, Michael Schenker, Jimmy Page, Joe Satriani, Steve Vai, Joe Perry plus jazz and classical music. Throughout his career Byron has opened for notable bands such as Metal Church, Doro Pesch, Warrant, Winger, RATT, Y&amp;T, Dream Theater, Rick Emmett, Vicious Rumors, Helix, Keel, Yes, Zack Wylde/Black Label Society, Richie Kotzen, The Sweet, Lynch Mob, Pat Travers Band and many more.
          </p>
          <p className="bio-body-p" style={{ ...bodyText, marginBottom: "32px" }}>
            By going on tour with various bands throughout the east coast Byron began exploring his personal guitar style with <strong style={{ color: "#fff", fontWeight: 500 }}>Sacred Heart, Amon-Ra, Prodigy, and Electro-Motive-Force</strong>. <strong style={{ color: "#fff", fontWeight: 500 }}>The Vision</strong> 1985 cassette by <strong style={{ color: "#fff", fontWeight: 500 }}>Sacred Heart</strong> reimagined version was recently made available on Spotify along with the 1992 <strong style={{ color: "#fff", fontWeight: 500 }}>Amon Ra</strong> release of <strong style={{ color: "#fff", fontWeight: 500 }}>In the Company of the Gods</strong> also available reimagined on streaming platforms.
          </p>
          <p className="bio-body-p" style={{ ...bodyText, marginBottom: "64px" }}>
            In 1997 Byron studied jazz and classical music at the Cleveland State University which provided him the music education foundation needed to blend in with a variety of musical genres, he was shortly thereafter commissioned to perform as first guitar with Richard Henrickson's orchestrated <strong style={{ color: "#fff", fontWeight: 500 }}>Ozone Hour</strong>, a 90-minute Symphonic Rock Ballet with the Cleveland Chamber Orchestra and 33 dance performers.
          </p>

          <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)", marginBottom: "64px" }} />

          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "56px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>Solo Works</p>
          </div>

          {/* EP */}
          <div className="bio-timeline-row">
            <div><p className="bio-timeline-year">EP</p><p className="bio-timeline-label">Byron Nemeth Group</p></div>
            <p className="bio-body-p" style={bodyText}>Following CSU Byron launched his solo career with the release <strong style={{ color: "#fff", fontWeight: 500 }}>Byron Nemeth Group</strong>. The EP laid the groundwork for a progressive and melodic style that became the trademark sound. The biggest singles "Millennium Machine" and "Two Moon Sky" tapped into a new kind of playing that caught the attention of the public. <strong style={{ color: "#fff", fontWeight: 500 }}>"Anthology The Cassette Years (Rewind)"</strong> was released in 2018 on <a href="https://open.spotify.com/album/5sMyjtFlkn9oTo9KrKYWJa?si=V4QoWXX7QUuV4htWjfDleA" target="_blank" rel="noopener noreferrer" style={link}>Spotify</a> and features all the material from this time period.</p>
          </div>

          {/* 2000 */}
          <div className="bio-timeline-row">
            <div><p className="bio-timeline-year">2000</p><p className="bio-timeline-label">• Album</p></div>
            <p className="bio-body-p" style={bodyText}>Whetting his appetite for songwriting and performance Byron released <strong style={{ color: "#fff", fontWeight: 500 }}>2000</strong> a completely self-produced and performed album. With singles like <strong style={{ color: "#fff", fontWeight: 500 }}>"Machines of Ice"</strong> and <strong style={{ color: "#fff", fontWeight: 500 }}>"High Speed Life"</strong> Byron began to gain notoriety. In 2001 Byron was asked to perform "It's Showtime" on the Jason Becker Tribute CD "Warmth in the Wilderness" that was designed to spread awareness of Jason's ALS condition.</p>
          </div>

          {/* 100 Worlds */}
          <div className="bio-timeline-row">
            <div><p className="bio-timeline-year">100 Worlds</p><p className="bio-timeline-label">• Album</p></div>
            <p className="bio-body-p" style={bodyText}>Mastered at Abbey Road Studios in London by Nick Webb on 11.17.03 <strong style={{ color: "#fff", fontWeight: 500 }}>100 Worlds</strong> was a statement that characterized what could be created with music. With compositions such as "Russian Winter" and "La Luz De Barcelona" Byron began to marry international textures and flavors in meticulously composed and performed musical pieces. Picking up recognition for this Byron was featured in the chapter "Switching Gears" from the book <strong style={{ color: "#fff", fontWeight: 500 }}>Working Musicians</strong> by New York City ASCAP/DEEMS Taylor award-winning author Bruce Pollock. 100 Worlds was rereleased in 2004 as a CD and is available on streaming platforms.</p>
          </div>

          {/* The Force Within */}
          <div className="bio-timeline-row">
            <div><p className="bio-timeline-year">The Force Within</p><p className="bio-timeline-label">• Album</p></div>
            <p className="bio-body-p" style={bodyText}>Byron Nemeth Group's fourth album <strong style={{ color: "#fff", fontWeight: 500 }}>The Force Within</strong> was also mastered at Abbey Road Studios on 12.11.06 with Nick Webb, it was a tour de force of guitar acrobatics and prog rock sensibilities comparable to the masters of the genre. This was the first album to feature cover artwork from <strong style={{ color: "#fff", fontWeight: 500 }}>RUSH</strong> artist Hugh Syme. The cover represents a WWI gas mask as a metaphor for the perils of humanity, the fields represent the openness of human potential that comes from having The Force Within oneself to manifest anything. The Force Within was rereleased in 2007 as a CD and is available on streaming platforms.</p>
          </div>

          {/* The Video Chronicles */}
          <div className="bio-timeline-row">
            <div><p className="bio-timeline-year">The Video Chronicles</p><p className="bio-timeline-label">• EP Video Album</p></div>
            <p className="bio-body-p" style={bodyText}>In 2014 Byron released <strong style={{ color: "#fff", fontWeight: 500 }}>The Video Chronicles</strong>, a 4-song CD studio video release featuring Jeremy Colson/drums and Philip Bynoe/bass from the Steve Vai Band and on lead vocals Mark Boals who sang on Yngwie Malmsteen's Trilogy album. This showcased Byron's talents as just more than just a performer but one of being a lyricist as well as a composer. The Video Chronicles is on all streaming platforms.</p>
          </div>

          {/* 2016 Tour */}
          <div className="bio-timeline-row">
            <div><p className="bio-timeline-year">2016 Tour</p><p className="bio-timeline-label">• On The Road</p></div>
            <p className="bio-body-p" style={bodyText}>In 2016 Byron went on a 7,000 mile/20 city headlining tour playing lead guitar for <strong style={{ color: "#fff", fontWeight: 500 }}>Kill Ritual</strong> stretching from California to Ohio at great venues like Malones in Santa Ana for the 2016 NAMM Showcase Concert, El Corazon in Seattle, The Elbo Room in Chicago and Count's Vamp'd in Las Vegas.</p>
          </div>

          {/* 2018 EP */}
          <div className="bio-timeline-row">
            <div><p className="bio-timeline-year">2018 EP</p><p className="bio-timeline-label">• Rogue Society</p></div>
            <p className="bio-body-p" style={bodyText}>In the summer of 2018 <strong style={{ color: "#fff", fontWeight: 500 }}>Rogue Society</strong> from Scottsdale released a 4-song digital EP on Spotify that spawned the social media hit "English Tea." This song went on to establish the band on the west coast hard rock scene as a stunning live performances act with a very strong stage presence. Rogue Society played great hard rock music with catchy melodies in concert that rocked the metal scene in Arizona.</p>
          </div>

          {/* 2019 Tour */}
          <div className="bio-timeline-row">
            <div><p className="bio-timeline-year">2019 Tour</p><p className="bio-timeline-label">• On The Road</p></div>
            <p className="bio-body-p" style={bodyText}>In 2019 Byron played lead guitar for <strong style={{ color: "#fff", fontWeight: 500 }}>Images of Eden</strong> on tour with two historic metal legends <strong style={{ color: "#fff", fontWeight: 500 }}>Metal Church</strong> and <strong style={{ color: "#fff", fontWeight: 500 }}>Doro Pesch</strong>. The tour began on 04.17.19 in Las Vegas and lasted for 5 weeks doing 21 shows at legendary places like Count's Vamp'd Vegas, House of Blues Anaheim, Whisky A-Go-Go Hollywood, Club Red Phoenix, Reggie's Chicago, Kingsland Ballroom Brooklyn, Asbury Lanes Jersey Shore and ending at The Vault @ Greasy Luck in Bedford, MA.</p>
          </div>

          {/* 2021 */}
          <div className="bio-timeline-row">
            <div><p className="bio-timeline-year">2021</p></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <p className="bio-sub-label">• Engines Of Thunder</p>
                <p className="bio-body-p" style={bodyText}>Byron Nemeth has just released a brand new video for the new instrumental <a href="https://www.youtube.com/watch?v=EtE5OPPfNuw" target="_blank" rel="noopener noreferrer" style={link}>Engines Of Thunder</a>. Stylistically it's a <em>"Tip-Of-The-Hat"</em> to the early Satriani and Hendrix vibe when there was strong emphasis on composition and lyrical soloing with amazing hooks and unique twists in the guitar playing.</p>
              </div>
              <div>
                <p className="bio-sub-label">• Sunset At The Marquis</p>
                <p className="bio-body-p" style={bodyText}>"The musical inspiration for this song came from my fascination with the C6 open tuning (C-A-C-G-C-E) that Jimmy Page used on Bron-Yr-Aur from Physical Graffiti. I applied this tuning to my acoustics for this type of Led Zeppelin vibe in the rhythm guitar. On the electric leads I wanted the harmony ideas that Michael Schenker and Brian May have used so all these influences were my muse. The song was mixed at Abbey Road Studios in London by engineer John Barrett on the SSL Duality Delta 24 Mixing Console, John did a superb job!"</p>
              </div>
              <div>
                <p className="bio-sub-label">• Nashville</p>
                <p className="bio-body-p" style={bodyText}>In May 2021 Byron Nemeth relocated to Nashville to further pursue his music career to the next level.</p>
              </div>
              <div>
                <p className="bio-sub-label">• You Know It's True</p>
                <p className="bio-body-p" style={bodyText}><a href="https://www.youtube.com/watch?v=OYtIrl43NKc" target="_blank" rel="noopener noreferrer" style={link}>You Know It's True</a> video launched September 29th, 2021, recorded and produced in Nashville. Thanks to the team that made this happen: Luis Espaillat (bass), Zach Ballard (drums) and Steve Braun (vocals). Producer Tim Dolbear, Engineer Lowell Reynolds, assistant Austin Brown and Mark Allee for capturing the entire video story line. Timo Wuerz for the stunning artwork, David Mecey for the great pictures and Mike Simmons &amp; Pauly Simmons at Blackbird Studios.</p>
              </div>
            </div>
          </div>

          {/* 2022 */}
          <div className="bio-timeline-row">
            <div><p className="bio-timeline-year">2022</p></div>
            <div>
              <p className="bio-sub-label">• Las Vegas</p>
              <p className="bio-body-p" style={bodyText}>In May 2022 Byron Nemeth relocated to Las Vegas for a fabulous real estate purchase and to pursue the music business in Las Vegas that is internationally renowned for its entertainment, nightlife, recording studios and great music. Now in 2023 plans are underway for a brand new single and video to be released in the coming months.</p>
            </div>
          </div>

          {/* 2023 */}
          <div className="bio-timeline-row">
            <div><p className="bio-timeline-year">2023</p></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p className="bio-body-p" style={bodyText}>In 2023 a new version of <strong style={{ color: "#fff", fontWeight: 500 }}>Byron Nemeth Group</strong> is set to be unleashed on to the music world with Las Vegas being the city where the first show happens. The new single Spanish Transcendence is now live on all streaming platforms and this website.</p>
              <p className="bio-body-p" style={bodyText}>The Guitar Academy education platform launched in May of 2023 as a comprehensive private lessons platform for teaching guitar students exactly what they want to learn with detailed musical concepts tailored to the individuals needs.</p>
              <p className="bio-body-p" style={bodyText}><strong style={{ color: "#fff", fontWeight: 500 }}>Byron Nemeth Group</strong> lineup is revealed — Byron Nemeth | Guitar • Riley Baxter | Vocals • Dennis Osinski | Drums • Paul Hughes | Bass Guitar with concerts announced at the OYO Casino | Vegas Stand Up &amp; Rock and Backstage Bar and Billiards on Fremont Street with Hookers &amp; Blow for their 20th Anniversary show celebration.</p>
              <p className="bio-body-p" style={bodyText}><strong style={{ color: "#fff", fontWeight: 500 }}>Byron Nemeth Group</strong> will enter the recording studio on Monday October 23rd with Producer Vinnie Castaldo at The Tone Factory to record the uptempo rocker "Hell 2 Pay" and soaring ballad "It's All Over". Performance video to shoot on Sunday December 3rd in Las Vegas.</p>
              <div>
                <p className="bio-sub-label">• Hell To Pay</p>
                <p className="bio-body-p" style={bodyText}><a href="https://www.youtube.com/watch?v=KbzvGpEjM8k" target="_blank" rel="noopener noreferrer" style={link}><strong style={{ color: "#f59e0b" }}>Hell To Pay</strong> Video Released 12.25.23</a> &nbsp;•&nbsp; View on YouTube <a href="https://www.youtube.com/watch?v=KbzvGpEjM8k" target="_blank" rel="noopener noreferrer" style={link}>HERE</a></p>
                <p className="bio-body-p" style={{ ...bodyText, marginTop: "12px" }}>Audio recorded by Johnny Gibson at the <a href="https://www.thetonefactory.com/" target="_blank" rel="noopener noreferrer" style={link}>Tone Factory</a> on 10.23.23. Audio mixed and produced by Dylan Dyce on 10.30.23. Music Video filmed and edited by Alyssa Gibson. Video shot on location at The <a href="https://www.jackpotbarlv.com/" target="_blank" rel="noopener noreferrer" style={link}>Jackpot</a> in Las Vegas &amp; Tone Factory 12.04.23.</p>
              </div>
            </div>
          </div>

          {/* 2024 */}
          <div className="bio-timeline-row">
            <div><p className="bio-timeline-year">2024</p></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p className="bio-body-p" style={bodyText}>Byron Nemeth dedicated the entirety of 2024 to the meticulous and inspired creation of <em>The Zen Of Guitar • Understanding Guitar Thru Direct Intuition Volume Three</em>. With unwavering focus, he expanded upon the profound concepts introduced in Volumes One and Two, pushing the boundaries of guitar education into uncharted territory.</p>
              <p className="bio-body-p" style={bodyText}>At the heart of <em>Volume Three</em> lies the revolutionary concept of the <em>Color Association of the Root Note with any of the Seven Modes</em>, a paradigm-shifting approach that fuses color theory with modal exploration. By linking each mode's root note to a specific color, Byron introduces a visually intuitive and dynamic method for grasping modal relationships across the fretboard.</p>
              <p className="bio-body-p" style={bodyText}>With the release of <em>The Zen Of Guitar • Understanding Guitar Thru Direct Intuition Volume Three</em>, Byron Nemeth cements his reputation as an innovator in modern guitar education. His work offers not just a method, but an invitation to approach the guitar with heightened awareness and artistic intuition.</p>
            </div>
          </div>

          {/* 2025 */}
          <div className="bio-timeline-row">
            <div><p className="bio-timeline-year">2025</p></div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p className="bio-body-p" style={bodyText}><strong style={{ color: "#fff", fontWeight: 500 }}>The Zen Of Guitar • Understanding Guitar Thru Direct Intuition Volume Three</strong> is released on February 14th, 2025. Purchase on Amazon <a href="https://www.amazon.com/Guitar-Understanding-Direct-Intuition-Three-ebook/dp/B0DTT3LTY4?ref_=ast_author_dp" target="_blank" rel="noopener noreferrer" style={link}>HERE.</a></p>
              <p className="bio-body-p" style={bodyText}>The Byron Nemeth Group proudly welcomes stellar vocalist <a href="https://www.instagram.com/everyguitarever/" target="_blank" rel="noopener noreferrer" style={link}><strong style={{ color: "#f59e0b" }}>Peter Barcott</strong></a> to the lineup, igniting a powerful new era of Hard Rock and Metal. Known for his commanding voice and electrifying stage presence, Barcott brings a fresh surge of energy to the band, taking the lead on vocals and co-composing a wave of original material that promises to hit with both ferocity and finesse.</p>
              <div>
                <p className="bio-sub-label">• I Am Thee Ocean</p>
                <p className="bio-body-p" style={{ ...bodyText, marginBottom: "16px" }}><strong style={{ color: "#fff", fontWeight: 500 }}>I Am Thee Ocean • Released on 10.31.25</strong></p>
                <p className="bio-body-p" style={{ ...bodyText, marginBottom: "16px" }}>This release marks a significant artistic milestone for the Byron Nemeth Group: <em>"I Am The Ocean"</em> now available on all streaming platforms, is much more than a new track — it is a bold statement of collective musical identity and creative evolution.</p>
                <p className="bio-body-p" style={{ ...bodyText, marginBottom: "16px" }}>Complementing that guitar framework is the distinctive vocal delivery of <a href="https://www.instagram.com/everyguitarever/" target="_blank" rel="noopener noreferrer" style={link}>Peter Barcott</a>, whose voice brings the lyrics to life with gritty confidence and evocative nuance. On drums, Dennis Osinski delivers a performance that anchors the track with unshakeable drive. Meanwhile, Paul Hughes on bass guitar lays the harmonic foundation, his low-end lines weaving seamlessly with guitar and drums.</p>
                <p className="bio-body-p" style={bodyText}><em>"I Am The Ocean"</em> stands as a testament to what the Byron Nemeth Group can achieve when each member brings their absolute best. We invite you to listen, to dive in, and to experience how Byron Nemeth, Peter Barcott, Dennis Osinski and Paul Hughes have together created something truly memorable.</p>
              </div>
            </div>
          </div>

          {/* 2026 */}
        <div className="bio-timeline-row">
          <div><p className="bio-timeline-year">2026</p></div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <p className="bio-sub-label">• NAMM Show</p>
              <p className="bio-body-p" style={bodyText}>Byron Nemeth Group delivered a successful and acclaimed performance at the 2026 NAMM Show in Anaheim, California — one of the most prestigious music industry events in the world. The performance showcased the band's powerful live presence and highlighted Byron's dual identity as a world-class guitarist and forward-thinking AI technology entrepreneur. The NAMM appearance reinforced Byron's standing as a multi-dimensional creative force — a musician whose artistry is matched by his vision for the future of technology and music.</p>
            </div>
            <div>
              <p className="bio-sub-label">• Season's Of May — Symphonic Reimagined</p>
              <p className="bio-body-p" style={{ ...bodyText, marginBottom: "16px" }}><strong style={{ color: "#fff", fontWeight: 500 }}>Season's Of May — Symphonic Reimagined • Released 05.24.26</strong></p>
              <p className="bio-body-p" style={{ ...bodyText, marginBottom: "16px" }}>Originally written by Byron Nemeth in the 1990s during a formative early creative period that helped shape his melodic and progressive guitar voice, the composition has now been transformed in 2026 into a sweeping symphonic statement — designed not simply as a song, but as a miniature motion picture. Recorded and mixed in the latest version of Avid Pro Tools, the new version features Byron's signature guitar work performed on his Charvel Jake E. Lee Strat, with modern tones shaped through the Fractal AM4 and Fractal VP4. Orchestral arrangements were developed with SUNO, expanding the composition into a lush, cinematic soundscape filled with drama, motion, and emotional lift.</p>
              <p className="bio-body-p" style={{ ...bodyText, marginBottom: "16px" }}>For the visual side, Byron used Freebeat to create the animated movie-style presentation — making the video the visual companion, and in many ways the "film," to the song. The artwork reflects that same new world: a breathtaking cosmic fantasy scene where a futuristic guitar spacecraft launches through a galaxy of cherry blossoms, starlight, glowing planets, and dreamlike architecture.</p>
              <p className="bio-body-p" style={bodyText}>With <em>Season's Of May — Symphonic Reimagined</em>, Byron officially launches a new direction into film composition and cinematic music production. Going forward, his releases will be conceived as mini-movies — some animated, some featuring Byron on screen, but always centered around his musicianship, guitar work, and complete musical vision. More than a remake, it is a reinvention — a modern symphonic expansion of a 1990s composition, rebuilt with today's recording tools, AI-assisted orchestration, futuristic visuals, and Byron Nemeth's unmistakable guitar voice at the center of it all.</p>
            </div>
          </div>
        </div>

          <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)", marginBottom: "64px" }} />

          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "40px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>Press</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "64px" }}>
            {pressLinks.map((item) => (
              <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" className="bio-press-link" style={{ fontFamily: font }}>
                <span>{item.label}</span>
                <span style={{ color: "#f59e0b", fontSize: "20px", flexShrink: 0 }}>→</span>
              </a>
            ))}
          </div>

          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", fontFamily: font, fontWeight: 300 }}>
              <a href="mailto:byron@byronnemeth.com" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>byron@byronnemeth.com</a>
              &nbsp;&nbsp;·&nbsp;&nbsp;
              <a href="tel:4802095309" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>480.209.5309</a>
            </p>
          </div>
          <div className="bio-cta-row">
            <a href="/#contact" style={{ display: "inline-block", backgroundColor: "#d97706", color: "#000", fontSize: "14px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font }}>Book a Lesson</a>
            <a href="https://www.amazon.com/dp/B0DYRT81GQ" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font }}>Get The Book</a>
          </div>

        </div>
      </section>

      <Footer />

    </main>
  );
}
