# Sukha Yogashala — 100H YTT Page Design Specification

Rebuild spec extracted from the saved page `100 Hour Yoga Teacher Training in Rishikesh, India _ Sukha Yogashala.html` (Tailwind v4, Next.js App Router, lucide-react icons, embla-carousel).

---

## 1. Design Tokens

### Fonts
| Use | Font | Weights | Source |
|---|---|---|---|
| Body | **Instrument Sans** (variable) | 400–700 | Google Fonts via next/font |
| Display | **Croogla 4F Light** (croogla) | Light only | self-hosted woff2 |
| Hindi wordmark | **Noto Sans Devanagari** | 700/900 | next/font |

- Headings use body font at `font-black` (900); the Devanagari wordmark uses `font-display` (croogla).

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| Accent | `#ff907e` | CTAs, eyebrows, highlights, accents |
| Accent-hover | `#e07a6a` | hover:text on links |
| Secondary (dark) | `#343130` | CTA hover state (`hover:bg-secondary`), text |
| Section peach | `#FDF0E7` | overview, why-us, certification, timeline, syllabus |
| Off-white cream | `#fffaf5` | introduction, schedule, reviews, accommodation |
| Pale peach | `#fff5ed` | gallery |
| Warm grey | `#F9F5F2` | benefits, essentials, dates |
| Cream | `#FFFBF5` | teacher, pathway, location card |
| Row zebra | `#fffaf8` | dates table rows |
| beige-dark | `#f2e4dc` | nav border (`border-beige-dark/20`) |
| Footer bg | `#282828` | footer |
| WhatsApp | `#25D366` | WhatsApp buttons/halo |
| TripAdvisor green | `#00af87` | review dots |
| Stars | `#facc15` (yellow-400) | Google rating |
| Text | gray-900/800 (headings), gray-500/600 (body), gray-400 (meta) | |

### Effects
- **Aurora text** (footer Devanagari wordmark):
  ```css
  .aurora-text {
    -webkit-text-fill-color: #fff0;
    filter: drop-shadow(0 0 20px #ff907e66);
    background: linear-gradient(90deg, #ff907e, beige, #ffbfa3, #ff907e) 0 0 / 200%;
    -webkit-background-clip: text;
    animation: aurora-flow 5s linear infinite;
    display: inline-block;
    transform: scaleY(1.15);
    letter-spacing: .1em;
  }
  @keyframes aurora-flow { 0% { background-position: 0 0; } 100% { background-position: 200% 0; } }
  ```
- **tada icon**: `animation: tada 1.5s infinite;` (inline-block).
- **ping dot** (Booking Open pill): Tailwind `animate-ping`.
- Hover zoom: `group-hover:scale-110 duration-700` on images.

### Buttons / Pills
- Pill CTA: `rounded-full bg-[#ff907e] text-white font-black uppercase tracking-widest text-[10px] px-4 py-2.5 hover:bg-secondary transition-all shadow-md hover:shadow-lg`
- Big CTA: `rounded-2xl py-3.5 text-[12px] px-10`
- Book buttons: `bg-[#ff907e] text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wide hover:bg-secondary transition-all shadow-md group-hover:scale-105`
- WhatsApp (green): `bg-[#25D366] text-white py-4 rounded-full font-bold text-sm`
- Outline hover pill: `border border-[#ff907e] text-[#ff907e] hover:bg-[#ff907e] hover:text-white rounded-full`

### Containers
- Default: `max-w-7xl mx-auto px-4 md:px-8`
- Also used: `max-w-6xl`, `max-w-5xl`, `max-w-[1440px] mx-auto`

### Section Heading Pattern
```html
<p class="text-[10px] md:text-xs font-black text-[#ff907e] uppercase tracking-[0.3em]">EYEBROW</p>
<h2 class="text-2xl md:text-4xl font-black text-gray-800 tracking-tighter">
  Plain text <span class="text-[#ff907e]">Accent text</span>
</h2>
<div class="w-10 h-1 bg-[#ff907e] rounded-full opacity-20 md:opacity-30"></div>  <!-- optional divider -->
```
Eyebrow variant also: `tracking-[0.4em]`, `text-xs md:text-sm`. H2 sizes vary: `text-xl md:text-3xl`, `text-2xl md:text-4xl`, `text-3xl md:text-5xl`.

---

## 2. Header & Fixed Elements

### Nav
- `fixed top-0 left-0 w-full z-[100] bg-white border-b border-beige-dark/20 h-20`
- Logo `w-40 md:w-44 h-12` (`brightness-0 invert` only in footer variant).
- `.nav-link` custom class: 14px, font-bold, `uppercase tracking-widest`, color secondary, `hover:text-[#ff907e]`, `.3s` transition.
- Courses item opens **mega-dropdown**: `absolute w-[480px] rounded-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] p-5` with a `rotate-45 w-4 h-4 bg-white` caret; 2-column grid of course cards (image + title + duration).
- Mobile: hamburger + full-screen white slide-over; body gets `.nav-open` to hide floating buttons.

### Floating CTAs
- **Bottom-left Apply Now**: desktop pill `bg-[#ff907e] text-white px-4 py-2 rounded-xl shadow-lg font-black text-[10px] uppercase tracking-widest` with apply-now-icon.webp; mobile circular `w-12 h-12 rounded-full` (icon only). Fixed `bottom-4 left-4 z-[999]`.
- **Bottom-right WhatsApp**: fixed `bottom-4 right-4 z-[999]`; halo `absolute inset-0 bg-[#25D366] rounded-full blur-md scale-[1.12] opacity-60` behind a `relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl` circle with white WhatsApp icon.

---

## 3. Section-by-Section Spec

### 3.1 Hero (no id)
- `relative h-[50vh] md:h-[60vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center`
- Layers: `<Image fill class="object-cover z-0">` (bg-banner-sukha-yogashala.webp) → `absolute inset-0 bg-black/25 z-10` → content `relative z-20 text-center text-white px-4 max-w-5xl mt-12 md:mt-16`.
- Breadcrumb: `Home` (link, hover:text-[#ff907e]) + chevron-right svg `w-3.5 h-3.5` + current page (accent `text-[#ff907e]`), `text-[10px] md:text-xs uppercase tracking-widest` above h1.
- H1: `text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-2xl tracking-tight` — `"100 Hour Yoga Teacher Training <br/> <span class="text-[#ff907e]">In Rishikesh</span>"`.
- Stats row: `grid grid-cols-3 gap-4 md:gap-12 pt-10 border-t border-white/20 max-w-3xl mx-auto`; each stat `group` with number `text-[#ff907e] font-black text-xl md:text-3xl leading-none transition-transform group-hover:scale-110` and label `text-[10px] md:text-xs uppercase tracking-widest text-white/60 font-bold mt-2`. (Numbers: 100, 10, 4 — Hours, Days, Meals/day.)

### 3.2 Course Overview
- `py-6 md:py-10 bg-[#FDF0E7] px-4 md:px-8`; max-w-7xl.
- Header: eyebrow "Course at a Glance", h2 `text-xl md:text-3xl font-black text-gray-800 tracking-tight` with `<span class="text-[#ff907e]"> Course Rishikesh Snapshot</span>`.
- Card: `bg-white rounded-3xl border border-orange-100 shadow-xl shadow-orange-100/30 overflow-hidden`; `flex flex-col lg:flex-row`.
- Left: image block `lg:w-[42%] relative` with `Booking Open 2026` pill: `absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#ff907e] text-white rounded-full text-[9px] font-black uppercase tracking-widest px-3 py-1.5 shadow-md` containing `animate-ping` white dot; two overlay zoom buttons (top-right, `bg-black/30 rounded-full p-2 text-white`, lucide Plus/Minus).
- Right: `flex-1 p-5 md:p-7` grid of info rows (`space-y-4`), each `flex items-start gap-3` with icon chip `w-9 h-9 rounded-full bg-[#ff907e]/10 flex items-center justify-center text-[#ff907e]` + label `text-[10px] uppercase tracking-widest text-gray-400 font-bold` + value `text-sm md:text-[15px] text-gray-800 font-bold`. Rows: Duration 100 Hours / 10 Days, Location Swarg Ashram, Rishikesh, Fee $499, Level Beginner–Intermediate, Language English.

### 3.3 Course Introduction
- `py-16 md:py-24 bg-[#fffaf5] px-4 md:px-8 overflow-hidden`; max-w-7xl; `grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center`.
- Left `lg:col-span-7`: sparkles icon + eyebrow "Gateway to Transformation"; h2 `text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight` with `<span class="text-[#ff907e]">Gateway to Transformation</span>` style accent; italic subheading `text-gray-500 text-sm md:text-base italic font-medium`; body paragraphs `text-gray-500 text-sm md:text-[15px] leading-relaxed`; checklist items with `bg-[#ff907e]/10 rounded-full` check icons; small founder strip (avatar + name + "Founder & Lead Teacher").

### 3.4 Who Can Join
- `py-10 md:py-14 bg-white px-4 md:px-6`; max-w-7xl; eyebrow "Perfect for You" + h2 `text-2xl md:text-3xl lg:text-4xl font-black` `"Who Can Join <span class="text-[#ff907e]">100 Hour Yoga TTC in Rishikesh</span>"`.
- `grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch`; cards `flex flex-col bg-[#fffaf5] border border-orange-100 rounded-[2rem] p-7 md:p-9` (left card has accent top border `border-t-4 border-t-[#ff907e]`).
- Each card: header row (lucide Users/Sparkles icon in `w-11 h-11 rounded-2xl bg-white shadow-sm border border-orange-100` + h3 `text-lg md:text-xl font-bold text-gray-800`) + intro line `text-gray-500 text-sm md:text-[15px]` + list `space-y-3.5 mt-5` of items: `flex items-start gap-3` with icon chip `w-7 h-7 rounded-full bg-[#ff907e]/10 flex items-center justify-center text-[#ff907e]` (lucide Check 14px) and text block (h4 `text-[11px] font-black text-gray-800 uppercase tracking-wider mb-0.5` + p `text-xs text-gray-500 leading-relaxed`).

### 3.5 Why Choose Us (Accordion)
- `py-8 md:py-12 bg-[#FDF0E7] px-3 md:px-6`; centered header: Om tile `w-11 h-11 rounded-2xl bg-white shadow-sm border border-orange-100 mx-auto flex items-center justify-center`; eyebrow "Our Promise"; h2 `text-2xl md:text-3xl font-black` `"Why Choose Our Yoga School for 100 Hour TTC in Rishikesh?"`; divider `w-10 h-1 bg-[#ff907e] rounded-full opacity-30 mx-auto`.
- `grid grid-cols-1 md:grid-cols-2 gap-3`; accordion cards `bg-white rounded-2xl border border-orange-50 shadow-sm hover:border-[#ff907e]/20 hover:shadow-md transition-all overflow-hidden`.
- Header row `p-3 md:p-4 flex items-center gap-3`: icon box `w-10 h-10 rounded-xl bg-[#FDF0E7] group-hover:bg-[#ff907e] flex items-center justify-center` with lucide icon `w-5 h-5 text-[#ff907e] group-hover:text-white`; h3 `text-[13px] md:text-sm font-bold text-gray-800 flex-1`; chevron `text-gray-400 group-hover:text-[#ff907e] transition-transform duration-300` (rotate-180 when open).
- Open body: `text-gray-500 text-xs md:text-sm leading-relaxed p-3 pt-0 md:p-4 md:pt-0`.

### 3.6 Course Features
- `py-8 md:py-12 bg-white px-4 md:px-8`; eyebrow "Included"; h2 `"What You Get With This <span> 100 Hour Yoga Teacher Training</span>"`.
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12`; each item: icon tile `w-14 h-14 rounded-2xl bg-orange-50 group-hover:bg-[#ff907e] flex items-center justify-center` with `<img class="w-7 h-7 object-contain opacity-80 group-hover:brightness-0 group-hover:invert">`; h3 `text-sm md:text-[15px] font-black text-gray-800 mt-4 mb-1`; p `text-xs md:text-[13px] text-gray-500 leading-relaxed`. 12 items (Certified Instructors, Daily 2 Yoga Sessions, Meditation & Pranayama, Ayurvedic Meals, Shared Twin Rooms, 2 Sacred Excursions, Yoga Alliance Certificate, Philosophy & Mantra, Anatomy Classes, Herbal Tea & Aromatherapy, Ganga Aarti Visit, Lifetime Community Access).

### 3.7 Teacher Carousel (Embla)
- `py-16 bg-[#FFFBF5] overflow-hidden`; header: eyebrow "Learn from the Masters" + h2 `"Meet Your Teachers at <span> Sukha Yogashala</span>"` + "Meet Our Yoga Teachers →" link (accent, hover:underline).
- Carousel: `overflow-hidden`; track `flex` with slides `flex-[0_0_100%] md:flex-[0_0_50%] px-2`.
- Card: `group flex bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md h-full min-h-[240px] border border-orange-50`; image side `w-[35%] md:w-[40%] relative` (portrait, object-cover); content `flex-1 p-5 md:p-6 flex flex-col`:
  - h3 `text-lg md:text-xl font-black text-gray-800`
  - underline `w-8 h-0.5 bg-[#ff907e] rounded-full mb-3 group-hover:w-16 transition-all duration-500`
  - specialty chips: `rounded-full text-[7px] md:text-[8px] font-bold uppercase tracking-widest px-2 py-1` (e.g. `bg-[#ff907e]/10 text-[#ff907e]`, `bg-orange-50 text-gray-600 border border-orange-100`)
  - bio `text-[11px] md:text-xs text-gray-500 italic leading-relaxed line-clamp-2`
  - footer `mt-auto pt-3 border-t border-orange-50 flex items-center gap-2` with award icon in `w-7 h-7 rounded-full bg-[#ff907e]/10 text-[#ff907e]` + `text-[10px] text-gray-500 font-bold` years text.
- Prev/Next buttons: `bg-white border border-orange-100 rounded-full p-3 text-[#ff907e] hover:bg-[#ff907e] hover:text-white transition-all shadow-sm` (lucide ChevronLeft/Right).

### 3.8 Certification
- `py-8 md:py-12 bg-[#FDF0E7] px-2 md:px-6`; max-w-6xl; `flex items-center gap-3` header (shield-check icon in `w-11 h-11 rounded-2xl bg-white shadow-sm` + eyebrow "Global Recognition").
- h2 `text-2xl md:text-3xl font-bold text-gray-800 tracking-tight` `"Internationally Recognized <span class="text-[#ff907e]">Yoga Alliance Certification</span>"`.
- `grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-8`; badge cards `bg-white rounded-2xl p-4 text-center border border-orange-50 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-3` with `<img class="h-16 object-contain group-hover:scale-110 transition-transform">` (RYS_200.webp, RYT_200.webp, RYT_100.webp) + caption `text-[10px] font-bold text-gray-500 uppercase tracking-wider`.
- Below: small text row `text-[10px] md:text-[11px] text-gray-400 text-center flex items-center justify-center gap-2` with globe icon.

### 3.9 Course Timeline
- `py-8 md:py-12 px-2 md:px-4 bg-[#FDF0E7] overflow-hidden`; max-w-7xl; eyebrow "Your Journey"; h2 `"The Timeline of Your <span>100 Hour Yoga TTC Journey</span>"`; divider `w-24 h-1 bg-[#ff907e] rounded-full opacity-30 mx-auto` (center-aligned).
- Dashed line behind cards: `hidden lg:block absolute top-[90px] left-0 w-full h-[1px] border-t border-dashed border-orange-200 z-0`.
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 relative z-10`; cards `bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-sm border border-orange-50 hover:shadow-lg hover:border-[#ff907e]/30 transition-all group`:
  - medallion: `relative w-14 h-14 rounded-full bg-[#ff907e]/5 flex items-center justify-center` containing inner `w-10 h-10 rounded-full bg-white border border-orange-50 flex items-center justify-center text-[#ff907e] shadow-sm` with lucide icon (Calendar, Sunrise, MapPin, Award).
  - step label `text-[#ff907e] font-bold text-[11px] uppercase tracking-wider mt-4` ("Week 1–2", "Week 3–4", etc.)
  - h3 `text-sm md:text-[15px] font-black text-gray-800 mt-1`
  - p `text-xs text-gray-500 leading-relaxed mt-1`

### 3.10 Daily Schedule
- `py-12 md:py-16 bg-[#fffaf5] px-4 overflow-hidden`; header with divider `w-24 h-1 bg-[#ff907e] rounded-full opacity-30 mx-auto`; h2 `text-2xl md:text-4xl font-black text-gray-800 tracking-tighter text-center` `"Daily Schedule of <span> 100 Hour Yoga Teacher Training</span>"`.
- `grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8`; each item `relative pt-3`:
  - time pill: `absolute top-0 left-5 z-10 px-4 py-1.5 bg-[#ff907e] rounded-md shadow-sm` text `text-[11px] font-black uppercase tracking-widest text-white whitespace-nowrap` (05:30, 08:30, 10:00, 12:00, 16:00, 18:00, 19:30).
  - card: `bg-white border border-[#ff907e]/20 rounded-xl px-5 pt-5 pb-4 hover:border-[#ff907e]/50 hover:shadow-md transition-all` with h4 `text-[15px] font-bold text-gray-800` + p `text-xs text-gray-500 leading-relaxed`.

### 3.11 Syllabus
- `py-12 md:py-20 bg-[#FDF0E7] px-4 md:px-8`; max-w-7xl; eyebrow "Course Syllabus"; h2 `"100 Hour Yoga Teacher Training Course - <span>Syllabus</span>"`; body text + "Download Syllabus →" link.
- **Stat cards**: `grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8`; each `bg-white/70 backdrop-blur-md border border-orange-100 rounded-3xl p-5 md:p-6 flex flex-col gap-4 shadow-sm`:
  - row: icon in `w-14 h-14 flex items-center justify-center` (lotus-webp, anatomy-webp, spiritual-book-webp, yoga-teaching-webp; `object-contain opacity-90`) + number block: `text-3xl md:text-4xl font-black text-[#ff907e]` (55, 10, 15, 20) + `text-[12px] font-bold text-gray-700 uppercase tracking-widest` "Hours".
  - title `text-gray-800 font-bold text-s md:text-m leading-tight` (Techniques Training & Practice, Anatomy & Physiology, Yoga Humanities, Professional Essentials).
  - chips row `mt-auto overflow-x-auto no-scrollbar` with `flex items-center gap-2 whitespace-nowrap` of `inline-block text-[10px] font-bold uppercase tracking-tight text-[#ff907e] bg-orange-50/40 border border-[#ff907e]/20 px-3 py-1.5 rounded-xl` (e.g. Asana, Pranayama, Meditation / Subtle Body, Systems / History, Philosophy, Ethics / Methodology, Teaching Practice).
- **Module rows** (5x): `grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center mt-16` alternating order; text col `lg:col-span-7`: chip `inline-block text-[10px] font-black uppercase tracking-[0.3em] text-[#ff907e] mb-3` ("Module 1"), h3 `text-xl md:text-2xl font-black text-gray-800`, p body, feature list `mt-5 space-y-3` with `flex items-center gap-2` + check icon `text-[#ff907e]` + `text-[13px] text-gray-600`; image col `lg:col-span-5`: `relative w-[220px] h-[280px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white` with `object-cover w-full h-full`.

### 3.12 Pathway
- `py-10 md:py-16 bg-white overflow-hidden`; max-w-[1440px] mx-auto; container `bg-[#fffaf5] border border-orange-100 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 relative overflow-hidden` (decorative blurred orange blob `absolute -top-20 -right-20 w-72 h-72 bg-[#ff907e]/10 rounded-full blur-3xl`).
- Header row: eyebrow + h2 `"Your Pathway to <span>200-Hour TTC</span>"` + "Explore 200-Hour TTC →" link.
- `flex flex-col md:flex-row gap-4 md:gap-6 justify-center`; step cards `md:w-[30%] bg-white rounded-[2rem] p-6 border border-orange-50 shadow-sm hover:shadow-md transition-all relative`:
  - award icon (lucide, `w-5 h-5 text-[#ff907e]`); "Current Step" eyebrow `text-[10px] font-black uppercase tracking-widest text-[#ff907e]` on first card only.
  - h3 `text-lg font-black text-gray-800 mt-3`; p `text-xs text-gray-500 leading-relaxed mt-1`; CTA button at bottom.
  - Arrows between cards: `hidden md:flex items-center` chevron-right `text-[#ff907e] w-6 h-6`; mobile: vertical chevrons.

### 3.13 Course Benefits (horizontal scroll)
- `py-12 md:py-16 bg-[#F9F5F2] px-4 md:px-8 overflow-hidden`; eyebrow "Included"; h2 `"What You Gain From Your <span>100 Hour Yoga Journey</span>"`; scroll hint text with arrow-down icon.
- Horizontal scroll row (mouse-drag): `flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4`; cards `flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_28%] xl:flex-[0_0_25%] snap-center`:
  - `bg-white rounded-[2rem] p-5 h-full border border-orange-50 shadow-sm hover:shadow-xl transition-all group`
  - image `relative aspect-[4/3] rounded-2xl overflow-hidden mb-5` with `<img class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700">` + number chip `absolute top-3 left-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-[10px] font-black text-[#ff907e]` (01–04).
  - h3 `text-[15px] font-black text-gray-800 mb-1.5`; p `text-xs text-gray-500 leading-relaxed`.

### 3.14 Excursions Carousel (Embla)
- `py-8 bg-white px-2 md:px-6 overflow-hidden`; header: map-pin icon + eyebrow "Sacred Explorations"; h2 `"Sacred Excursions <span> Beyond the Mat</span>"`.
- Embla track `flex gap-3`; slides `flex-[0_0_45%] md:flex-[0_0_25%]`;
- Vertical cards: `relative w-[220px] h-[280px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group`; `<img class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700">`; caption `absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4` with h3 `text-white text-sm font-black` + p `text-white/70 text-[10px]`.
- 4 slides: Ganga Aarti (Ceremony), Vashistha Cave (Meditation), Kunjapuri Temple (Sunrise), Beatles Ashram (History).

### 3.15 Comparison Table
- `py-10 md:py-16 bg-white px-4 md:px-8`; max-w-7xl; eyebrow "Choose Your Path"; h2 `"<span class="text-[#ff907e]">100 Hour</span> vs 200 Hour vs 300 Hour Yoga Teacher Training in Rishikesh - Which Is Right for You?"`.
- **Desktop**: `hidden md:block overflow-x-auto no-scrollbar rounded-2xl border border-orange-100 shadow-sm`;
  - `<table class="w-full text-left">`; thead: `bg-[#fffaf5]`; header cells: first `text-sm font-black text-gray-800 px-4 py-3` + others `text-xs font-black uppercase tracking-widest text-gray-700`; the 100H column cell contains a pill `bg-[#ff907e] text-white rounded-full text-[8px] font-black uppercase tracking-widest px-2 py-1` "You're Viewing This Course".
  - Body rows: `even:bg-[#fffaf5]/40 hover:bg-orange-50/50 transition-colors`; feature cell `text-[13px] font-bold text-gray-700 px-4 py-3`; cells with lucide Check (green-ish? verify) / Minus icons centered; duration cells `text-[13px] text-gray-600`; the 100H column highlighted `bg-[#ff907e]/[0.04] border-l border-r border-orange-100`.
  - Footnote `text-[10px] text-gray-400 mt-3`.
- **Mobile**: `md:hidden flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory`; cards `flex-[0_0_85%] snap-center bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden`; header strip `bg-[#ff907e] text-white p-3 font-black text-sm` (100H) / `bg-gray-100 text-gray-600 p-3` (200H/300H); body `p-4 space-y-2` rows with check/minus icon + label; CTA button.

### 3.16 Rules & Regulations (Accordion)
- `py-16 md:py-24 bg-white px-4 md:px-8`; max-w-7xl; header: shield-alert icon in `w-11 h-11 rounded-2xl bg-[#ff907e]/10 text-[#ff907e] flex items-center justify-center` + eyebrow "Ashram Discipline"; h2 `"Rules & Regulations During Our <span>100 Hour Yoga Teacher Training</span> in Rishikesh"`.
- `grid grid-cols-1 md:grid-cols-2 gap-3`; cards `bg-[#fffaf5]/50 border border-orange-100/40 rounded-xl shadow-sm hover:bg-white hover:border-[#ff907e]/30 transition-all overflow-hidden group`; header `p-3 md:p-4 flex items-center gap-3`: numbered chip `w-8 h-8 rounded-full bg-[#ff907e]/10 text-[#ff907e] text-[11px] font-black flex items-center justify-center` + h3 `text-[13px] md:text-sm font-bold text-gray-800 flex-1` + chevron (rotate-180 when open).

### 3.17 Dates & Batch Calendar
- `py-8 md:py-12 bg-[#F9F5F2] px-4 md:px-8`; max-w-7xl.
- **Promo bar**: `bg-gradient-to-r from-[#ff907e] to-[#f4845f] text-white px-6 py-3 rounded-2xl shadow-lg shadow-orange-200 flex flex-col md:flex-row items-center justify-between gap-2` — left: `text-sm md:text-lg font-black` "Early Bird Offer — Save Up To 30%" with badge `bg-white/20 rounded-full px-3 py-1 text-[10px] font-black uppercase` "Limited Seats"; right: code pill `bg-white/15 border border-white/30 rounded-full px-4 py-2 text-xs font-bold tracking-wider` (promo code).
- **Special offer card**: `bg-white border border-green-100 rounded-3xl p-5 md:p-6 shadow-lg shadow-green-900/5` — green check row "Special Indian Student Offer — Extra 10% OFF" + "Claim Offer →" link.
- h2 `text-2xl md:text-3xl font-black` `"100 Hour Yoga TTC Fees in Rishikesh <span>Dates & Batch Calendar</span>"`.
- **Year tabs**: `flex gap-2` pills `rounded-full text-[11px] font-black uppercase tracking-widest px-4 py-2` — active `bg-[#ff907e] text-white shadow-md` / inactive `bg-white text-gray-500 border border-orange-100 hover:text-[#ff907e]`.
- **Table** (overflow-x-auto, max-w-5xl):
  - thead: `bg-[#ff907e]` row of plain th `text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-2.5` (Course Dates / Price in USD / Price in INR / Book Now); second sub-header row `bg-[#f4845f]/90` with crown/star icon + "Yoga Alliance Certified" + "Included: Food, Stay, Excursions, Certificate".
  - Rows: `group bg-[#fffaf8] border-b border-orange-50 hover:bg-orange-50/40 transition-all duration-150`; date cell `px-4 py-3 w-[220px] md:w-[300px]`: h4 `text-[13px] md:text-sm font-black text-gray-800` ("3rd To 13th August 2026") + status badge `bg-green-50 text-green-600 border border-green-100 rounded-full text-[9px] font-bold uppercase px-2 py-0.5` ("Filling Fast" / "Seats Available").
  - Price cells `px-4 py-3`: currency label `text-[10px] uppercase tracking-widest text-gray-400 font-bold`, `<del class="text-orange-400 text-xs">$719</del>`, price `text-lg md:text-xl font-black text-gray-800`, "Save 30%" `text-[12px] text-[#ff907e] font-bold uppercase tracking-wide`.
  - Book cell: button `bg-[#ff907e] text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wide hover:bg-secondary transition-all shadow-md group-hover:scale-105` with ArrowRight icon; whitespace-nowrap.

### 3.18 Course Essentials (Tabs)
- `py-4 md:py-8 bg-[#F9F5F2] px-2 md:px-4`; max-w-5xl; eyebrow "Everything You Need to Know"; h2 `text-xl md:text-2xl font-black` `"Course <span>Essentials</span>"`.
- Tab pills: `flex flex-wrap justify-center gap-1.5 mb-6 p-1 bg-[#FDF0E7] rounded-xl md:rounded-full max-w-fit mx-auto`; buttons `px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg md:rounded-full transition-all` — active `bg-[#ff907e] text-white shadow-md scale-105` / inactive `text-gray-500 hover:text-[#ff907e]`.
- Content cards: `bg-white rounded-[2rem] border border-orange-50 shadow-sm p-6 md:p-8`; `grid md:grid-cols-2 gap-6` of facts; each `flex items-start gap-3` icon chip + label `text-[10px] uppercase tracking-widest text-gray-400 font-bold` + value `text-[13px] text-gray-800 font-bold`; bottom CTA row.

### 3.19 Accommodation
- `py-10 md:py-14 bg-[#fffaf5] px-4`; max-w-6xl; header: heart icon tile + eyebrow "Included with Every Course"; h2 `text-2xl md:text-3xl font-black` `"Accommodation & Food at <span>Our 100 Hour Yoga Teacher Training</span>"`.
- `grid lg:grid-cols-2 gap-10 items-center`; text side: paragraphs + feature list (check chips); image side: `rounded-[2rem] overflow-hidden shadow-xl border-4 border-white` with caption card below `bg-white rounded-2xl border border-orange-50 shadow-sm p-4` listing room types (Private Room ₹4,000/night, Twin Share ₹2,500/night) with icons.

### 3.20 Gallery (infinite marquee)
- `py-12 bg-[#fff5ed] overflow-hidden flex flex-col gap-4`; eyebrow "Our Sacred Journey"; h2 `text-2xl md:text-3xl font-black` `"Beautiful Moments of Our <span>School & Students</span>"`.
- **Two Embla marquee rows** (top left→right, bottom `dir="rtl"` right→left, both `overflow-hidden`):
  - track `flex touch-pan-y` with `-ml-4`; slides `flex-none pl-4`.
  - Top row slides: `w-[280px] md:w-[350px]` and one `w-[400px] md:w-[500px]` (masonry feel); bottom row: `w-[200px] md:w-[280px]` and `w-[320px] md:w-[420px]`.
  - All: `h-[160px] md:h-[220px] rounded-3xl overflow-hidden shadow-sm` with `<img class="object-cover w-full h-full">` (no hover effect, no lightbox).
- Below: rating strip `flex items-center justify-center gap-4` — Google "G" badge, stars, "5.0", Trustpilot "5.0", separators.

### 3.21 Google Reviews
- `py-12 bg-[#fffaf5] overflow-hidden border-t border-orange-50`; max-w-7xl; header: G icon + eyebrow "Verified 5.0 Rating in Rishikesh"; h2 `text-2xl md:text-3xl font-black` `"Google — <span>Student Reviews</span>"`; summary card right (`flex items-center gap-4 bg-white rounded-2xl p-4` with "5.0" `text-4xl font-black text-gray-800` + stars).
- Mobile: `flex overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6 gap-4`; Desktop: `hidden lg:grid lg:grid-cols-4 gap-4`.
- Cards: `min-w-[260px] md:min-w-0 bg-white p-4 rounded-2xl border border-orange-50 shadow-sm hover:shadow-md flex flex-col h-[280px] snap-center transition-shadow`:
  - header: avatar `w-9 h-9 rounded-full object-cover` + name `text-[13px] font-bold text-gray-800` + date `text-[10px] text-gray-400`; stars row `text-yellow-400 fill-yellow-400 w-3 h-3` (lucide Star filled).
  - body: quote icon + text `text-xs text-gray-600 leading-relaxed flex-1`.
  - footer: "Read Full Review →" `text-[11px] font-bold text-[#ff907e]`.
- Below: "Google Reviews →" pill + "Write a Review" outline pill.

### 3.22 TripAdvisor Reviews
- Same structure as Google reviews but: eyebrow "Rated 5.0 on TripAdvisor"; h2 `"TripAdvisor — <span>Student Reviews</span>"`; rating dots `w-3 h-3 rounded-full bg-[#00af87]` instead of stars; TripAdvisor owl icon; custom horizontal scroll strip for cards (`.custom-scroll` — thin styled scrollbar).

### 3.23 Short Reviews (Videos)
- `py-12 bg-[#fffaf5] overflow-hidden border-t border-orange-50`; eyebrow "Watch & Feel the Experience"; h2 `"Short Reviews - <span>Authentic Experiences With Us</span>"`.
- `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4`; cards `relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg shadow-orange-100/50 border border-orange-50 bg-gray-50 group`:
  - `<img class="object-cover w-full h-full">`; gradient `absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent`.
  - play button center: `absolute inset-0 flex items-center justify-center` with `w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform` + Play icon `text-[#ff907e]`.
  - caption bottom-left: `text-white text-[10px] md:text-xs font-bold`.

### 3.24 FAQ
- `py-12 md:py-16 bg-white px-4 md:px-8`; max-w-7xl; header: circle-question-mark icon tile + eyebrow "Support Center"; h2 `"Frequently Asked <span>Questions</span>"`.
- `grid grid-cols-1 lg:grid-cols-10 gap-10 md:gap-16`:
  - Left `lg:col-span-7 space-y-4`: accordion items `bg-white rounded-2xl border transition-all duration-300` — open: `border-[#ff907e] shadow-md`, closed: `border-orange-100 hover:border-[#ff907e]/30 hover:shadow-sm`; button `p-5 md:p-6 flex items-center justify-between gap-4 w-full text-left`; h3 `text-sm md:text-base font-black text-gray-800`; chevron wrapper `p-1 rounded-full transition-transform duration-500 bg-orange-50` (rotate-180 + `bg-[#ff907e]/10` when open); body `max-h-0 opacity-0` → open `max-h-[500px] opacity-100 duration-500` with `text-[13px] text-gray-500 leading-relaxed px-5 md:px-6 pb-5`.
  - Right `lg:col-span-3`: `sticky top-24 space-y-6`:
    - Help card: `bg-white rounded-[2.5rem] border border-orange-100 p-8 shadow-sm text-center` — logo img (120px, `mx-auto`), h3 "Still have questions?", p, WhatsApp button (green) + Email button (`bg-gray-900`), footer "sparkles icon Instant Response".
    - Quote card: `bg-[#ff907e]/5 rounded-3xl p-6 border border-[#ff907e]/10` italic testimonial + author.

### 3.25 Location
- `py-16 md:py-24 bg-white px-4 md:px-8`; max-w-7xl; header: sparkles icon + eyebrow "Visit Us"; h2 `text-2xl md:text-3xl font-black` `"How to Reach <span>Sukha Yogashala</span>"`.
- `grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch`:
  - Info card: `bg-[#FFFBF5] p-8 md:p-10 rounded-2xl border border-orange-50 shadow-sm` — paragraphs, address block `flex items-start gap-3` (MapPin accent icon + `text-sm text-gray-600 leading-relaxed` "Swarg Ashram, Tapovan, Rishikesh, Uttarakhand 249192, India"), transport rows (plane/train icon chips + "Nearest Airport: Dehradun (DED) 21 km" etc.), Map pill CTA `bg-[#ff907e] text-white rounded-full ... hover:bg-secondary`.
  - Map: `relative rounded-2xl overflow-hidden shadow-lg min-h-[300px] lg:min-h-[420px] border border-orange-50` with iframe (Google Maps embed) + floating badge card `absolute bottom-3 left-3 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2` (location icon + "Sukha Yogashala — Swarg Ashram").

### 3.26 Footer
- `bg-[#282828] text-white/80 pt-20 pb-10 px-6 font-body`; max-w-7xl.
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16`:
  - Col 1: logo `w-40 h-12 brightness-0 invert` + tagline + newsletter form (`flex bg-white/10 rounded-xl overflow-hidden border border-white/10` input + `bg-[#ff907e]` submit).
  - Col 2 "Quick Links": `space-y-3` links `text-sm text-white/60 hover:text-[#ff907e] transition-colors`.
  - Col 3 "Policies": same style.
  - Col 4 "Contact": phone `tel:+917668230086` (WhatsApp Only), email `mailto:info@sukhayogashala.com`, social chips `w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#ff907e] hover:border-transparent transition-all`.
- **Aurora wordmark**: `border-t border-white/10 pt-8 text-center` — Devanagari `class="font-display noto_sans_devanagari... text-5xl md:text-7xl font-black tracking-[0.15em] leading-tight aurora-text"` `"??? ???????"` + caption "Sukha Yogashala".
- Bottom bar: `flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/40 mt-8`: "©2026 sukhayogashala. All rights reserved." | "Designed and Managed With ❤ By **Ashu Nautiyal**" (mailto link, hover:text-[#ff907e]).

---

## 4. Recurring Patterns (cheat sheet)

| Pattern | Classes |
|---|---|
| Icon chip small | `w-7 h-7 rounded-full bg-[#ff907e]/10 flex items-center justify-center text-[#ff907e]` |
| Icon tile medium | `w-11 h-11 rounded-2xl bg-white shadow-sm border border-orange-100` |
| Icon box hover-invert | `w-10 h-10 rounded-xl bg-[#FDF0E7] group-hover:bg-[#ff907e] ... text-[#ff907e] group-hover:text-white` |
| Card base | `bg-white rounded-2xl border border-orange-50 shadow-sm hover:shadow-md` |
| Large card | `rounded-3xl` / `rounded-[2rem]` (bg-[#fffaf5] + border-orange-100) |
| Label | `text-[10px] uppercase tracking-widest text-gray-400 font-bold` |
| Body text | `text-xs md:text-sm text-gray-500 leading-relaxed` |
| Chip | `rounded-full text-[10px] font-black uppercase tracking-widest px-3 py-1.5` |
| Zebra rows | `even:bg-[#fffaf5]/40 hover:bg-orange-50/50` |
| Image hover zoom | `group-hover:scale-110 transition-transform duration-700` |
| Shadow accent | `shadow-xl shadow-orange-100/30` / `shadow-lg shadow-orange-200` |
| Divider underline | `w-10 h-1 bg-[#ff907e] rounded-full opacity-20 md:opacity-30` |
| Hover dark CTA | `hover:bg-secondary` (= #343130) |

## 5. Notes for Rebuild
- Tailwind v4 (`@theme` tokens: `--color-brand`, `--color-secondary`, `--color-beige-dark`, `--color-white`; custom fonts via `--font-display` etc.).
- Custom CSS: `.nav-link`, `.tada-icon`, `.aurora-text` + `@keyframes aurora-flow`, `.no-scrollbar` (hide scrollbar), `.custom-scroll`.
- Carousels: embla-carousel-react; marquees: embla with autoplay or CSS animation.
- Accordions: max-height transitions; Tabs: state-driven pill switcher.
- Icons: lucide-react throughout.
