<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Hatha Yogashala — Project Docs</title>
<style>
  :root{
    --paper: #f6f4ee;
    --paper-2: #efece2;
    --ink: #23291f;
    --ink-soft: #55604f;
    --line: #dcd6c4;
    --sage: #4b6a4f;
    --sage-deep: #2f4632;
    --clay: #a9603f;
    --code-bg: #232920;
    --code-ink: #e8e6da;
    --radius: 3px;
    --serif: "Source Serif 4", "Iowan Old Style", "Georgia", serif;
    --sans: "Inter", "Segoe UI", system-ui, sans-serif;
    --mono: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
  }

  *{ box-sizing: border-box; }

  html{ scroll-behavior: smooth; }

  body{
    margin:0;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--sans);
    font-size: 16px;
    line-height: 1.6;
  }

  a{ color: var(--sage-deep); }
  a:hover{ color: var(--clay); }

  .layout{
    display:grid;
    grid-template-columns: 260px 1fr;
    max-width: 1180px;
    margin: 0 auto;
  }

  /* ---- Sidebar ---- */
  nav.side{
    border-right: 1px solid var(--line);
    padding: 2.5rem 1.5rem 2.5rem 0;
    position: sticky;
    top: 0;
    align-self: start;
    height: 100vh;
    overflow-y: auto;
  }

  .side .brand{
    font-family: var(--serif);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--sage-deep);
    margin-bottom: 0.15rem;
  }
  .side .brand-sub{
    font-size: 0.78rem;
    color: var(--ink-soft);
    margin-bottom: 2rem;
    letter-spacing: 0.02em;
  }

  .side ul{
    list-style: none;
    padding: 0;
    margin: 0 0 1.75rem 0;
  }
  .side li{ margin: 0.15rem 0; }
  .side a{
    display:block;
    padding: 0.3rem 0.6rem;
    border-radius: var(--radius);
    text-decoration: none;
    color: var(--ink-soft);
    font-size: 0.92rem;
    border-left: 2px solid transparent;
  }
  .side a:hover{
    background: var(--paper-2);
    color: var(--sage-deep);
    border-left-color: var(--sage);
  }
  .side .group-label{
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #93917f;
    margin: 1.4rem 0 0.4rem 0.6rem;
  }

  /* ---- Main content ---- */
  main{
    padding: 3.2rem 3rem 6rem 3rem;
    max-width: 820px;
  }

  header.hero{
    margin-bottom: 3rem;
    padding-bottom: 2.2rem;
    border-bottom: 1px solid var(--line);
  }

  .kicker{
    font-family: var(--mono);
    font-size: 0.78rem;
    color: var(--clay);
    margin-bottom: 0.9rem;
  }

  h1.title{
    font-family: var(--serif);
    font-weight: 600;
    font-size: 2.6rem;
    line-height: 1.12;
    margin: 0 0 0.7rem 0;
    color: var(--sage-deep);
  }

  .tagline{
    font-size: 1.08rem;
    color: var(--ink-soft);
    max-width: 60ch;
    margin: 0 0 1.4rem 0;
  }

  .hero-links{
    display:flex;
    gap: 0.7rem;
    flex-wrap: wrap;
  }
  .btn{
    display:inline-flex;
    align-items:center;
    gap: 0.4rem;
    padding: 0.55rem 1.05rem;
    border-radius: var(--radius);
    font-size: 0.92rem;
    text-decoration: none;
    font-weight: 500;
    border: 1px solid var(--sage-deep);
  }
  .btn.solid{
    background: var(--sage-deep);
    color: var(--paper);
  }
  .btn.solid:hover{ background: var(--sage); color: var(--paper); }
  .btn.ghost{
    color: var(--sage-deep);
    background: transparent;
  }
  .btn.ghost:hover{ background: var(--paper-2); color: var(--sage-deep); }

  section{
    margin-bottom: 3rem;
    scroll-margin-top: 1.5rem;
  }

  h2{
    font-family: var(--serif);
    font-size: 1.55rem;
    color: var(--sage-deep);
    border-bottom: 1px solid var(--line);
    padding-bottom: 0.5rem;
    margin: 0 0 1.1rem 0;
  }

  h3{
    font-family: var(--sans);
    font-weight: 700;
    font-size: 1.02rem;
    margin: 1.4rem 0 0.5rem 0;
    color: var(--ink);
  }

  p{ margin: 0 0 1rem 0; }

  ul.feature-list, ul.plain{
    padding-left: 1.3rem;
    margin: 0 0 1rem 0;
  }
  ul.feature-list li, ul.plain li{ margin-bottom: 0.45rem; }

  .grid-cards{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 0.9rem;
    margin: 1.2rem 0;
  }
  .card{
    border: 1px solid var(--line);
    background: var(--paper-2);
    border-radius: var(--radius);
    padding: 1rem 1.1rem;
  }
  .card .card-title{
    font-weight: 700;
    font-size: 0.95rem;
    margin-bottom: 0.35rem;
    color: var(--sage-deep);
  }
  .card .card-body{
    font-size: 0.88rem;
    color: var(--ink-soft);
  }

  table{
    width:100%;
    border-collapse: collapse;
    margin: 1rem 0 1.4rem 0;
    font-size: 0.92rem;
  }
  th, td{
    text-align:left;
    padding: 0.55rem 0.7rem;
    border-bottom: 1px solid var(--line);
  }
  th{
    color: var(--sage-deep);
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  pre{
    background: var(--code-bg);
    color: var(--code-ink);
    padding: 1rem 1.1rem;
    border-radius: var(--radius);
    overflow-x: auto;
    font-family: var(--mono);
    font-size: 0.86rem;
    line-height: 1.55;
    margin: 0 0 1.2rem 0;
  }
  code{
    font-family: var(--mono);
    background: var(--paper-2);
    padding: 0.1rem 0.35rem;
    border-radius: 3px;
    font-size: 0.88em;
  }
  pre code{
    background:none;
    padding:0;
  }

  .tree{
    font-family: var(--mono);
    font-size: 0.85rem;
    background: var(--paper-2);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    padding: 1rem 1.2rem;
    white-space: pre;
    overflow-x: auto;
  }

  .note{
    border-left: 3px solid var(--clay);
    background: var(--paper-2);
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
    color: var(--ink-soft);
    margin: 1rem 0;
    border-radius: 0 var(--radius) var(--radius) 0;
  }
  .note strong{ color: var(--clay); }

  .tag{
    display:inline-block;
    font-family: var(--mono);
    font-size: 0.72rem;
    padding: 0.15rem 0.5rem;
    border: 1px solid var(--line);
    border-radius: 20px;
    color: var(--ink-soft);
    margin: 0 0.35rem 0.35rem 0;
  }

  footer.foot{
    border-top: 1px solid var(--line);
    padding-top: 1.6rem;
    margin-top: 3.5rem;
    font-size: 0.85rem;
    color: var(--ink-soft);
  }

  @media (max-width: 860px){
    .layout{ grid-template-columns: 1fr; }
    nav.side{
      position: static;
      height: auto;
      border-right:none;
      border-bottom: 1px solid var(--line);
      padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    }
    main{ padding: 2.2rem 1.5rem 4rem 1.5rem; }
    h1.title{ font-size: 2rem; }
  }
</style>
</head>
<body>

<div class="layout">

  <nav class="side">
    <div class="brand">The Hatha Yogashala</div>
    <div class="brand-sub">Project documentation</div>

    <ul>
      <li><a href="#overview">Overview</a></li>
      <li><a href="#stack">Tech stack</a></li>
      <li><a href="#structure">Project structure</a></li>
    </ul>

    <div class="group-label">Getting started</div>
    <ul>
      <li><a href="#install">Installation</a></li>
      <li><a href="#env">Environment variables</a></li>
      <li><a href="#run">Run &amp; build</a></li>
    </ul>

    <div class="group-label">Features</div>
    <ul>
      <li><a href="#contact-flow">Contact form flow</a></li>
      <li><a href="#seo">Image &amp; SEO</a></li>
      <li><a href="#deploy">Deployment</a></li>
    </ul>

    <div class="group-label">More</div>
    <ul>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <main>

    <header class="hero" id="overview">
      <div class="kicker">// README.md</div>
      <h1 class="title">The Hatha Yogashala</h1>
      <p class="tagline">
        Official website for a Yoga Alliance–registered yoga school and ashram in Querim,
        North Goa — residential teacher training (100 / 200 / 300-hour), restorative
        retreats, and online pranayama courses.
      </p>
      <div class="hero-links">
        <a class="btn solid" href="https://hatha-yogashala.vercel.app/" target="_blank">Visit live site</a>
        <a class="btn ghost" href="#install">Get started ↓</a>
      </div>
      <div style="margin-top:1.1rem;">
        <span class="tag">Next.js</span>
        <span class="tag">Vercel</span>
        <span class="tag">Nodemailer</span>
        <span class="tag">WebP / SEO</span>
      </div>
    </header>

    <section id="overview-body">
      <h2>Overview</h2>
      <p>
        The site is a marketing and enquiry platform for the school. It covers course
        and retreat catalogues, pricing, faculty bios, accommodation details, a blog,
        and a booking / enquiry flow.
      </p>
      <div class="grid-cards">
        <div class="card">
          <div class="card-title">Teacher Training</div>
          <div class="card-body">100-Hr, 200-Hr, 22-Day Flexible 200-Hr, 200-Hr Ashtanga Vinyasa, 300-Hr, and Aerial Yoga TTC.</div>
        </div>
        <div class="card">
          <div class="card-title">Retreats</div>
          <div class="card-body">3, 5, and 7-Day retreats, Awaken &amp; Align, Aerial Yoga Retreat, Ayurvedic Massage Therapy, Yoga Festivals.</div>
        </div>
        <div class="card">
          <div class="card-title">Yoga Holidays</div>
          <div class="card-body">3, 5, and 7-Day holiday packages for shorter stays.</div>
        </div>
        <div class="card">
          <div class="card-title">Online Pranayama</div>
          <div class="card-body">Pre-Pranayama Foundation, Beginner / Intermediate / Advanced courses, Stress Relief, and a daily subscription.</div>
        </div>
        <div class="card">
          <div class="card-title">About &amp; Faculty</div>
          <div class="card-body">School story, founder, teacher bios, Yoga Alliance certification, accommodation &amp; food, payment policy.</div>
        </div>
        <div class="card">
          <div class="card-title">Extras</div>
          <div class="card-body">Destination Goa travel guide, photo gallery, blog / journal, contact &amp; travel info.</div>
        </div>
      </div>
      <ul class="feature-list">
        <li>Course pages with pricing, WhatsApp enquiry links, and a Book Now / Apply flow</li>
        <li>Contact form with automated owner-notification + user-confirmation emails</li>
        <li>SEO-optimized slugs, meta tags (OG / Twitter), heading hierarchy, and JSON-LD schema</li>
      </ul>
    </section>

    <section id="stack">
      <h2>Tech stack</h2>
      <table>
        <tr><th>Layer</th><th>Choice</th></tr>
        <tr><td>Framework</td><td>Next.js (React)</td></tr>
        <tr><td>Hosting</td><td>Vercel</td></tr>
        <tr><td>Email</td><td>Nodemailer + Gmail SMTP</td></tr>
        <tr><td>Images</td><td>Next.js Image Optimization, served as WebP</td></tr>
        <tr><td>Styling</td><td><em>update with actual solution — Tailwind / CSS Modules</em></td></tr>
      </table>
    </section>

    <section id="structure">
      <h2>Project structure</h2>
      <div class="tree">.
├── app/ or pages/          # Route-based pages (courses, retreats, holidays, blog, etc.)
├── components/             # Reusable UI components
├── public/
│   └── images/             # Site imagery, organized by section, served as .webp
├── styles/                 # Global and component styles
├── lib/ or utils/          # Helpers (e.g. mail sender, SEO utilities)
└── README.md</div>
      <div class="note"><strong>Note —</strong> update this tree to match the actual repo layout once confirmed.</div>
    </section>

    <section id="install">
      <h2>Installation</h2>
      <p>Prerequisites: Node.js (LTS) and npm / yarn / pnpm.</p>
      <pre><code>git clone &lt;repository-url&gt;
cd hatha-yogashala
npm install</code></pre>
    </section>

    <section id="env">
      <h2>Environment variables</h2>
      <p>Create a <code>.env.local</code> file in the project root for the contact form's email flow:</p>
      <pre><code>GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password
CONTACT_RECEIVER_EMAIL=info@thehathayogashala.com</code></pre>
      <div class="note"><strong>Note —</strong> use a Gmail <em>App Password</em>, not your regular password — SMTP requires a 2FA-enabled app password.</div>
    </section>

    <section id="run">
      <h2>Run &amp; build</h2>
      <h3>Local development</h3>
      <pre><code>npm run dev</code></pre>
      <p>Visit <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</p>
      <h3>Production build</h3>
      <pre><code>npm run build
npm start</code></pre>
    </section>

    <section id="contact-flow">
      <h2>Contact form flow</h2>
      <p>Submitting the contact form triggers two emails via Nodemailer + Gmail SMTP:</p>
      <ul class="plain">
        <li><strong>Owner notification email</strong> — sent to the school's inbox with the enquiry details.</li>
        <li><strong>Thank-you confirmation email</strong> — sent to the user confirming receipt of their enquiry.</li>
      </ul>
    </section>

    <section id="seo">
      <h2>Image &amp; SEO guidelines</h2>
      <ul class="feature-list">
        <li>All images are converted to and served as genuine <strong>WebP</strong> format (not just renamed).</li>
        <li>Filenames follow a descriptive, SEO-friendly slug convention, e.g. <code>hatha-yogashala-pernem-goa-sunrise-beach-yoga-session-querim-01.webp</code>.</li>
        <li>Pages include meta description, canonical URL, Open Graph, and Twitter Card tags.</li>
        <li>Structured data (JSON-LD schema) is included for search engine rich results.</li>
      </ul>
    </section>

    <section id="deploy">
      <h2>Deployment</h2>
      <p>The project auto-deploys to <strong>Vercel</strong> on push to the main branch.</p>
      <p>Live URL: <a href="https://hatha-yogashala.vercel.app/" target="_blank">hatha-yogashala.vercel.app</a></p>
    </section>

    <section id="license">
      <h2>License</h2>
      <p><em>Add license information here — e.g. proprietary / all rights reserved to The Hatha Yogashala.</em></p>
    </section>

    <footer class="foot" id="contact">
      <h3 style="margin-top:0;">Contact</h3>
      <p>
        Website: <a href="https://hatha-yogashala.vercel.app/" target="_blank">thehathayogashala.com</a><br>
        Email: info@thehathayogashala.com<br>
        Phone / WhatsApp: +91 98370 01148<br>
        Location: House No. EHN No 1, Dhaktebag, Querim–Arambol–Agarwada Rd, Pernem, Goa 403524, India
      </p>
      <p>Designed &amp; developed by <a href="https://www.devbhoomiinfotech.com/" target="_blank">Devbhoomi Infotech</a>.</p>
    </footer>

  </main>
</div>

</body>
</html>
