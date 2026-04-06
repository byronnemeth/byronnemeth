"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Bio() {
  const font = "var(--font-inter), sans-serif";
  const bodyText = { fontSize: "19px", lineHeight: 1.9, color: "rgba(255,255,255,0.55)", fontWeight: 300, fontFamily: font };
  const sectionLabel = { fontSize: "13px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500 };

  // Reusable inline link style
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

      <Nav activePage="Bio" />

      {/* HERO IMAGE */}
      <section style={{ position: "relative", height: "75vh", overflow: "hidden" }}>
        <img
          src="/Biography5.jpg"
          alt="Byron Nemeth"
          onError={(e) => { e.target.src = "https://byronnemeth.com/wp-content/uploads/2023/09/Biography5.jpg"; }}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.3) 60%, rgba(0,0,0,0.2) 100%)" }} />
        <div style={{ position: "absolute", bottom: "80px", left: "50%", transform: "translateX(-50%)", textAlign: "center", zIndex: 10, width: "100%" }}>
          <p style={{ fontSize: "13px", letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(245,158,11,0.85)", marginBottom: "20px", fontFamily: font, fontWeight: 400 }}>The Story</p>
          <h1 style={{ fontSize: "clamp(64px, 9vw, 110px)", fontWeight: 200, letterSpacing: "-0.02em", lineHeight: 0.9, fontFamily: font }}>
            Byron<br /><strong style={{ fontWeight: 700 }}>Nemeth</strong>
          </h1>
        </div>
      </section>

      {/* BIO CONTENT */}
      <section style={{ paddingTop: "120px", paddingBottom: "160px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 48px" }}>

          {/* ── BIOGRAPHY LABEL ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "48px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>Biography</p>
          </div>

          {/* ── INTRO ── */}
          <p style={{ ...bodyText, fontSize: "21px", marginBottom: "40px" }}>
            <strong style={{ color: "#fff", fontWeight: 600 }}>Byron Nemeth</strong>, multi-instrumentalist and hard rock aficionado who has done tours and taken part in many stellar releases to date and knew at a young age that music was his true calling. Upon hearing Elvis &amp; The Beatles from his wonderful parents as a birthday music gift he turned his attention to learning guitar and studying the styles of Randy Rhoads, Michael Schenker, Jimmy Page, Joe Satriani, Steve Vai, Joe Perry plus jazz and classical music. Throughout his career Byron has opened for notable bands such as Metal Church, Doro Pesch, Warrant, Winger, RATT, Y&amp;T, Dream Theater, Rick Emmett, Vicious Rumors, Helix, Keel, Yes, Zack Wylde/Black Label Society, Richie Kotzen, The Sweet, Lynch Mob, Pat Travers Band and many more.
          </p>
          <p style={{ ...bodyText, marginBottom: "40px" }}>
            By going on tour with various bands throughout the east coast Byron began exploring his personal guitar style with <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>Sacred Heart, Amon-Ra, Prodigy, and Electro-Motive-Force</strong>. <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>The Vision</strong> 1985 cassette by <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>Sacred Heart</strong> reimagined version was recently made available on Spotify along with the 1992 <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>Amon Ra</strong> release of <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>In the Company of the Gods</strong> also available reimagined on streaming platforms.
          </p>
          <p style={{ ...bodyText, marginBottom: "80px" }}>
            In 1997 Byron studied jazz and classical music at the Cleveland State University which provided him the music education foundation needed to blend in with a variety of musical genres, he was shortly thereafter commissioned to perform as first guitar with Richard Henrickson's orchestrated <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>Ozone Hour</strong>, a 90-minute Symphonic Rock Ballet with the Cleveland Chamber Orchestra and 33 dance performers.
          </p>

          <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)", marginBottom: "80px" }} />

          {/* ── SOLO WORKS LABEL ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "64px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>Solo Works</p>
          </div>

          {/* ════ EP ════ */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "26px", fontWeight: 700, color: "#f59e0b", fontFamily: font, lineHeight: 1.1 }}>EP</p>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "8px", fontFamily: font, fontWeight: 400 }}>Byron Nemeth Group</p>
              </div>
              <p style={bodyText}>
                Following CSU Byron launched his solo career with the release <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Byron Nemeth Group</strong>. The EP laid the groundwork for a progressive and melodic style that became the trademark sound. The biggest singles "Millennium Machine" and "Two Moon Sky" tapped into a new kind of playing that caught the attention of the public. <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>"Anthology The Cassette Years (Rewind)"</strong> was released in 2018 on <a href="https://open.spotify.com/album/5sMyjtFlkn9oTo9KrKYWJa?si=V4QoWXX7QUuV4htWjfDleA" target="_blank" rel="noopener noreferrer" style={link}>Spotify</a> and features all the material from this time period.
              </p>
            </div>
          </div>

          {/* ════ 2000 ════ */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "26px", fontWeight: 700, color: "#f59e0b", fontFamily: font, lineHeight: 1.1 }}>2000</p>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "8px", fontFamily: font, fontWeight: 400 }}>• Album</p>
              </div>
              <p style={bodyText}>
                Whetting his appetite for songwriting and performance Byron released <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>2000</strong> a completely self-produced and performed album. With singles like <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>"Machines of Ice"</strong> and <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>"High Speed Life"</strong> Byron began to gain notoriety. In 2001 Byron was asked to perform "It's Showtime" on the Jason Becker Tribute CD "Warmth in the Wilderness" that was designed to spread awareness of Jason's ALS condition.
              </p>
            </div>
          </div>

          {/* ════ 100 WORLDS ════ */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "26px", fontWeight: 700, color: "#f59e0b", fontFamily: font, lineHeight: 1.1 }}>100 Worlds</p>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "8px", fontFamily: font, fontWeight: 400 }}>• Album</p>
              </div>
              <p style={bodyText}>
                Mastered at Abbey Road Studios in London by Nick Webb on 11.17.03 <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>100 Worlds</strong> was a statement that characterized what could be created with music. With compositions such as "Russian Winter" and "La Luz De Barcelona" Byron began to marry international textures and flavors in meticulously composed and performed musical pieces. Picking up recognition for this Byron was featured in the chapter "Switching Gears" from the book <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Working Musicians</strong> by New York City ASCAP/DEEMS Taylor award-winning author Bruce Pollock. 100 Worlds was rereleased in 2004 as a CD and is available on streaming platforms.
              </p>
            </div>
          </div>

          {/* ════ THE FORCE WITHIN ════ */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "26px", fontWeight: 700, color: "#f59e0b", fontFamily: font, lineHeight: 1.1 }}>The Force Within</p>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "8px", fontFamily: font, fontWeight: 400 }}>• Album</p>
              </div>
              <p style={bodyText}>
                Byron Nemeth Group's fourth album <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>The Force Within</strong> was also mastered at Abbey Road Studios on 12.11.06 with Nick Webb, it was a tour de force of guitar acrobatics and prog rock sensibilities comparable to the masters of the genre. This was the first album to feature cover artwork from <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>RUSH</strong> artist Hugh Syme. The cover represents a WWI gas mask as a metaphor for the perils of humanity, the fields represent the openness of human potential that comes from having The Force Within oneself to manifest anything. The Force Within was rereleased in 2007 as a CD and is available on streaming platforms.
              </p>
            </div>
          </div>

          {/* ════ THE VIDEO CHRONICLES ════ */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "26px", fontWeight: 700, color: "#f59e0b", fontFamily: font, lineHeight: 1.1 }}>The Video Chronicles</p>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "8px", fontFamily: font, fontWeight: 400 }}>• EP Video Album</p>
              </div>
              <p style={bodyText}>
                In 2014 Byron released <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>The Video Chronicles</strong>, a 4-song CD studio video release featuring Jeremy Colson/drums and Philip Bynoe/bass from the Steve Vai Band and on lead vocals Mark Boals who sang on Yngwie Malmsteen's Trilogy album. This showcased Byron's talents as just more than just a performer but one of being a lyricist as well as a composer. The Video Chronicles is on all streaming platforms.
              </p>
            </div>
          </div>

          {/* ════ 2016 TOUR ════ */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "26px", fontWeight: 700, color: "#f59e0b", fontFamily: font, lineHeight: 1.1 }}>2016 Tour</p>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "8px", fontFamily: font, fontWeight: 400 }}>• On The Road</p>
              </div>
              <p style={bodyText}>
                In 2016 Byron went on a 7,000 mile/20 city headlining tour playing lead guitar for <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Kill Ritual</strong> stretching from California to Ohio at great venues like Malones in Santa Ana for the 2016 NAMM Showcase Concert, El Corazon in Seattle, The Elbo Room in Chicago and Count's Vamp'd in Las Vegas.
              </p>
            </div>
          </div>

          {/* ════ 2018 EP ════ */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "26px", fontWeight: 700, color: "#f59e0b", fontFamily: font, lineHeight: 1.1 }}>2018 EP</p>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "8px", fontFamily: font, fontWeight: 400 }}>• Rogue Society</p>
              </div>
              <p style={bodyText}>
                In the summer of 2018 <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Rogue Society</strong> from Scottsdale released a 4-song digital EP on Spotify that spawned the social media hit "English Tea." This song went on to establish the band on the west coast hard rock scene as a stunning live performances act with a very strong stage presence. Rogue Society played great hard rock music with catchy melodies in concert that rocked the metal scene in Arizona.
              </p>
            </div>
          </div>

          {/* ════ 2019 TOUR ════ */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "26px", fontWeight: 700, color: "#f59e0b", fontFamily: font, lineHeight: 1.1 }}>2019 Tour</p>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "8px", fontFamily: font, fontWeight: 400 }}>• On The Road</p>
              </div>
              <p style={bodyText}>
                In 2019 Byron played lead guitar for <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Images of Eden</strong> on tour with two historic metal legends <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Metal Church</strong> and <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Doro Pesch</strong>. The tour began on 04.17.19 in Las Vegas and lasted for 5 weeks doing 21 shows at legendary places like Count's Vamp'd Vegas, House of Blues Anaheim, Whisky A-Go-Go Hollywood, Club Red Phoenix, Reggie's Chicago, Kingsland Ballroom Brooklyn, Asbury Lanes Jersey Shore and ending at The Vault @ Greasy Luck in Bedford, MA.
              </p>
            </div>
          </div>

          {/* ════ 2021 ════ */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "26px", fontWeight: 700, color: "#f59e0b", fontFamily: font, lineHeight: 1.1 }}>2021</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

                {/* • ENGINES OF THUNDER */}
                <div>
                  <p style={{ fontSize: "13px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500, marginBottom: "14px" }}>• Engines Of Thunder</p>
                  <p style={bodyText}>
                    Byron Nemeth has just released a brand new video for the new instrumental <a href="https://www.youtube.com/watch?v=EtE5OPPfNuw" target="_blank" rel="noopener noreferrer" style={link}>Engines Of Thunder</a>. Stylistically it's a <em>"Tip-Of-The-Hat"</em> to the early Satriani and Hendrix vibe when there was strong emphasis on composition and lyrical soloing with amazing hooks and unique twists in the guitar playing.
                  </p>
                </div>

                {/* • SUNSET AT THE MARQUIS */}
                <div>
                  <p style={{ fontSize: "13px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500, marginBottom: "14px" }}>• Sunset At The Marquis</p>
                  <p style={bodyText}>
                    "The musical inspiration for this song came from my fascination with the C6 open tuning (C-A-C-G-C-E) that Jimmy Page used on Bron-Yr-Aur from Physical Graffiti. I applied this tuning to my acoustics for this type of Led Zeppelin vibe in the rhythm guitar. On the electric leads I wanted the harmony ideas that Michael Schenker and Brian May have used so all these influences were my muse. The song was mixed at Abbey Road Studios in London by engineer John Barrett on the SSL Duality Delta 24 Mixing Console, John did a superb job!"
                  </p>
                </div>

                {/* • NASHVILLE */}
                <div>
                  <p style={{ fontSize: "13px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500, marginBottom: "14px" }}>• Nashville</p>
                  <p style={bodyText}>
                    In May 2021 Byron Nemeth relocated to Nashville to further pursue his music career to the next level.
                  </p>
                </div>

                {/* • YOU KNOW IT'S TRUE */}
                <div>
                  <p style={{ fontSize: "13px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500, marginBottom: "14px" }}>• You Know It's True</p>
                  <p style={bodyText}>
                    <a href="https://www.youtube.com/watch?v=OYtIrl43NKc" target="_blank" rel="noopener noreferrer" style={link}>You Know It's True</a> video launched September 29th, 2021, recorded and produced in Nashville. Thanks to the team that made this happen: Luis Espaillat (bass), Zach Ballard (drums) and Steve Braun (vocals). Producer Tim Dolbear, Engineer Lowell Reynolds, assistant Austin Brown and Mark Allee for capturing the entire video story line. Timo Wuerz for the stunning artwork, David Mecey for the great pictures and Mike Simmons &amp; Pauly Simmons at Blackbird Studios.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ════ 2022 ════ */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "26px", fontWeight: 700, color: "#f59e0b", fontFamily: font, lineHeight: 1.1 }}>2022</p>
              </div>
              <div>
                <p style={{ fontSize: "13px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500, marginBottom: "14px" }}>• Las Vegas</p>
                <p style={bodyText}>
                  In May 2022 Byron Nemeth relocated to Las Vegas for a fabulous real estate purchase and to pursue the music business in Las Vegas that is internationally renowned for its entertainment, nightlife, recording studios and great music. Now in 2023 plans are underway for a brand new single and video to be released in the coming months.
                </p>
              </div>
            </div>
          </div>

          {/* ════ 2023 ════ */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "26px", fontWeight: 700, color: "#f59e0b", fontFamily: font, lineHeight: 1.1 }}>2023</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={bodyText}>
                  In 2023 a new version of <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Byron Nemeth Group</strong> is set to be unleashed on to the music world with Las Vegas being the city where the first show happens. The new single Spanish Transcendence is now live on all streaming platforms and this website.
                </p>
                <p style={bodyText}>
                  The Guitar Academy education platform launched in May of 2023 as a comprehensive private lessons platform for teaching guitar students exactly what they want to learn with detailed musical concepts tailored to the individuals needs.
                </p>
                <p style={bodyText}>
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Byron Nemeth Group</strong> lineup is revealed — Byron Nemeth | Guitar • Riley Baxter | Vocals • Dennis Osinski | Drums • Paul Hughes | Bass Guitar with concerts announced at the OYO Casino | Vegas Stand Up &amp; Rock and Backstage Bar and Billiards on Fremont Street with Hookers &amp; Blow for their 20th Anniversary show celebration.
                </p>
                <p style={bodyText}>
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>Byron Nemeth Group</strong> will enter the recording studio on Monday October 23rd with Producer Vinnie Castaldo at The Tone Factory to record the uptempo rocker "Hell 2 Pay" and soaring ballad "It's All Over". Performance video to shoot on Sunday December 3rd in Las Vegas.
                </p>

                {/* • HELL TO PAY */}
                <div>
                  <p style={{ fontSize: "13px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500, marginBottom: "14px" }}>• Hell To Pay</p>
                  <p style={bodyText}>
                    <a href="https://www.youtube.com/watch?v=KbzvGpEjM8k" target="_blank" rel="noopener noreferrer" style={link}><strong style={{ color: "#f59e0b" }}>Hell To Pay</strong> Video Released 12.25.23</a> &nbsp;•&nbsp; View on YouTube <a href="https://www.youtube.com/watch?v=KbzvGpEjM8k" target="_blank" rel="noopener noreferrer" style={link}>HERE</a>
                  </p>
                  <p style={{ ...bodyText, marginTop: "12px" }}>
                    Audio recorded by Johnny Gibson at the <a href="https://www.thetonefactory.com/" target="_blank" rel="noopener noreferrer" style={link}>Tone Factory</a> on 10.23.23. Audio mixed and produced by Dylan Dyce on 10.30.23. Music Video filmed and edited by Alyssa Gibson. Video shot on location at The <a href="https://www.jackpotbarlv.com/" target="_blank" rel="noopener noreferrer" style={link}>Jackpot</a> in Las Vegas &amp; Tone Factory 12.04.23.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ════ 2024 ════ */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "26px", fontWeight: 700, color: "#f59e0b", fontFamily: font, lineHeight: 1.1 }}>2024</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={bodyText}>
                  Byron Nemeth dedicated the entirety of 2024 to the meticulous and inspired creation of <em>The Zen Of Guitar • Understanding Guitar Thru Direct Intuition Volume Three</em>. With unwavering focus, he expanded upon the profound concepts introduced in Volumes One and Two, pushing the boundaries of guitar education into uncharted territory. This latest installment is a culmination of years of deep study, performance, and teaching, distilling his vast knowledge into a method that transcends traditional instruction. Through relentless refinement and artistic exploration, Byron has crafted a volume that is both intellectually stimulating and profoundly intuitive, offering guitarists a transformative path to deeper musical understanding.
                </p>
                <p style={bodyText}>
                  At the heart of <em>Volume Three</em> lies the revolutionary concept of the <em>Color Association of the Root Note with any of the Seven Modes</em>, a paradigm-shifting approach that fuses color theory with modal exploration. By linking each mode's root note to a specific color, Byron introduces a visually intuitive and dynamic method for grasping modal relationships across the fretboard. This groundbreaking perspective allows players to engage both their analytical and creative faculties, fostering a deeper connection between mind, ear, and instrument. As a result, guitarists can break free from rote memorization and instead develop a more fluid, instinctive command of modes, enabling greater freedom in improvisation and composition.
                </p>
                <p style={bodyText}>
                  With the release of <em>The Zen Of Guitar • Understanding Guitar Thru Direct Intuition Volume Three</em>, Byron Nemeth cements his reputation as an innovator in modern guitar education. His work offers not just a method, but an invitation to approach the guitar with heightened awareness and artistic intuition. By weaving together music theory, visualization, and deep listening, he provides musicians with the tools to unlock new dimensions of expression. As this new volume reaches guitarists worldwide, Byron's vision continues to inspire a new generation of players to explore their instrument with a renewed sense of curiosity and creative possibility.
                </p>
              </div>
            </div>
          </div>

          {/* ════ 2025 ════ */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "26px", fontWeight: 700, color: "#f59e0b", fontFamily: font, lineHeight: 1.1 }}>2025</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={bodyText}>
                  <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>The Zen Of Guitar • Understanding Guitar Thru Direct Intuition Volume Three</strong> is released on February 14th, 2025. Purchase on Amazon <a href="https://www.amazon.com/Guitar-Understanding-Direct-Intuition-Three-ebook/dp/B0DTT3LTY4?ref_=ast_author_dp" target="_blank" rel="noopener noreferrer" style={link}>HERE.</a>
                </p>
                <p style={bodyText}>
                  The Byron Nemeth Group proudly welcomes stellar vocalist <a href="https://www.instagram.com/everyguitarever/" target="_blank" rel="noopener noreferrer" style={link}><strong style={{ color: "#f59e0b" }}>Peter Barcott</strong></a> to the lineup, igniting a powerful new era of Hard Rock and Metal. Known for his commanding voice and electrifying stage presence, Barcott brings a fresh surge of energy to the band, taking the lead on vocals and co-composing a wave of original material that promises to hit with both ferocity and finesse. With his dynamic range and raw emotion, Peter is the perfect match for Byron Nemeth's searing guitar work, setting the stage for a sonic explosion that fans of true rock and metal won't want to miss. Get ready — the next chapter is loud, bold, and unmistakably epic.
                </p>

                {/* • I AM THEE OCEAN */}
                <div>
                  <p style={{ fontSize: "13px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#f59e0b", fontFamily: font, fontWeight: 500, marginBottom: "14px" }}>• I Am Thee Ocean</p>
                  <p style={{ ...bodyText, marginBottom: "16px" }}>
                    <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>I Am Thee Ocean • Released on 10.31.25</strong>
                  </p>
                  <p style={{ ...bodyText, marginBottom: "16px" }}>
                    This release marks a significant artistic milestone for the Byron Nemeth Group: <em>"I Am The Ocean"</em> now available on all streaming platforms, is much more than a new track — it is a bold statement of collective musical identity and creative evolution. At its core, the single captures the expansive emotional and sonic terrain the band has travelled together. With Byron Nemeth on guitar, the piece channels his signature melodic lead work and textured rhythmic sensibility — his playing serves as the expressive backbone of the song's journey. Byron's vision as the group's founding guitarist and creative driver ensures the track resonates with both technical finesse and heartfelt musicality.
                  </p>
                  <p style={{ ...bodyText, marginBottom: "16px" }}>
                    Complementing that guitar framework is the distinctive vocal delivery of <a href="https://www.instagram.com/everyguitarever/" target="_blank" rel="noopener noreferrer" style={link}>Peter Barcott</a>, whose voice brings the lyrics to life with gritty confidence and evocative nuance. His interpretive phrasing and dynamic presence elevate the song beyond mere instrumentation, turning it into a narrative of depth and connection. On drums, Dennis Osinski delivers a performance that anchors the track with unshakeable drive and subtle rhythmic detail — his groove and fills give the song both momentum and breath, allowing the arrangement to surge and recede with purpose. Meanwhile, Paul Hughes on bass guitar lays the harmonic foundation, his low-end lines weaving seamlessly with guitar and drums, shaping the song's core structure and giving it both weight and fluidity. Together, these four talents synergize to create something greater than the sum of its parts.
                  </p>
                  <p style={bodyText}>
                    <em>"I Am The Ocean"</em> stands as a testament to what the Byron Nemeth Group can achieve when each member brings their absolute best — and does so in service of the song, not personal showmanship. It is a bold new chapter — not just another single — but an invitation to listeners to immerse in the sonic and emotional world the band has crafted. With this release on all major streaming platforms, the band opens the door to global audiences, sharing their artistry with the breadth it deserves. We invite you to listen, to dive in, and to experience how Byron Nemeth, Peter Barcott, Dennis Osinski and Paul Hughes have together created something truly memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ════ 2026 ════ */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px", alignItems: "start" }}>
              <div>
                <p style={{ fontSize: "26px", fontWeight: 700, color: "#f59e0b", fontFamily: font, lineHeight: 1.1 }}>2026</p>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "8px", fontFamily: font, fontWeight: 400 }}>• NAMM Show</p>
              </div>
              <p style={bodyText}>
                Byron Nemeth Group delivered a successful and acclaimed performance at the 2026 NAMM Show in Anaheim, California — one of the most prestigious music industry events in the world. The performance showcased the band's powerful live presence and highlighted Byron's dual identity as a world-class guitarist and forward-thinking AI technology entrepreneur. The NAMM appearance reinforced Byron's standing as a multi-dimensional creative force — a musician whose artistry is matched by his vision for the future of technology and music. The Byron Nemeth Group continues to build momentum with new original material in development and a growing national profile fueled by the success of "I Am Thee Ocean" and the ongoing reach of The Zen Of Guitar series.
              </p>
            </div>
          </div>

          <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)", marginBottom: "80px" }} />

          {/* ── PRESS ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "48px" }}>
            <div style={{ height: "1px", width: "56px", backgroundColor: "#d97706" }} />
            <p style={sectionLabel}>Press</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "80px" }}>
            {pressLinks.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 32px", border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none", color: "rgba(255,255,255,0.6)", fontSize: "16px", fontFamily: font, fontWeight: 300 }}
              >
                {item.label}
                <span style={{ color: "#f59e0b", fontSize: "20px", marginLeft: "16px", flexShrink: 0 }}>→</span>
              </a>
            ))}
          </div>

          {/* ── CTA ── */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.3)", fontFamily: font, fontWeight: 300, marginBottom: "8px" }}>
              <a href="mailto:byron@byronnemeth.com" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>byron@byronnemeth.com</a>
              &nbsp;&nbsp;·&nbsp;&nbsp;
              <a href="tel:4802095309" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>480.209.5309</a>
            </p>
          </div>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#contact" style={{ display: "inline-block", backgroundColor: "#d97706", color: "#000", fontSize: "14px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font }}>Book a Lesson</a>
            <a href="https://www.amazon.com/dp/B0DYRT81GQ" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", padding: "20px 56px", textDecoration: "none", fontFamily: font }}>Get The Book</a>
          </div>

        </div>
      </section>

      <Footer />

    </main>
  );
}
