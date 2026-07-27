

// // // "use client";
// // // import Image from "next/image";
// // // import { useEffect, useRef, useState } from "react";
// // // import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
// // // import {
// // //   Phone,
// // //   MapPin,
// // //   Menu,
// // //   X,
// // //   ArrowUpRight,
// // //   Sun,
// // //   Compass,
// // //   Building2,
// // //   GraduationCap,
// // //   Factory,
// // //   Milestone,
// // //   ShieldCheck,
// // //   Ruler,
// // //   Layers,
// // //   Home as HomeIcon,
// // //   Armchair,
// // //   Sofa,
// // //   UtensilsCrossed,
// // //   ChefHat,
// // //   Flame,
// // //   BedDouble,
// // //   Bath,
// // //   Car,
// // //   Users,
// // //   Shirt,
// // //   Wind,
// // //   TreePine,
// // //   Aperture,
// // //   Droplets,
// // //   Hammer,
// // //   Plug,
// // //   IndianRupee,
// // //   Map,
// // //   Key,
// // //   Coffee,
// // //   Waves,
// // //   Dumbbell,
// // //   Trophy,
// // //   Lock // Added Lock icon for the floor plan
// // // } from "lucide-react";

// // // const display = Fraunces({
// // //   subsets: ["latin"],
// // //   weight: ["400", "500", "600"],
// // //   style: ["normal", "italic"],
// // //   variable: "--font-display",
// // // });

// // // const body = Manrope({
// // //   subsets: ["latin"],
// // //   weight: ["300", "400", "500", "600"],
// // //   variable: "--font-body",
// // // });

// // // const mono = IBM_Plex_Mono({
// // //   subsets: ["latin"],
// // //   weight: ["400", "500"],
// // //   variable: "--font-mono",
// // // });

// // // const BRONZE = "#8B6F3D";

// // // /* ------------------------------------------------------------------ */
// // // /*  Content                                                           */
// // // /* ------------------------------------------------------------------ */

// // // const PHONES = ["9945042228", "9620229020"];
// // // const ADDRESS = [
// // //   "SVT Developer & Constructions",
// // //   "Sarjapura Attibele Road, Confident Aspire",
// // //   "Burgunte Village, Bengaluru, Karnataka 562107",
// // // ];

// // // const STATS = [
// // //   { label: "Configuration", value: "4 BHK", icon: HomeIcon },
// // //   { label: "Site Area", value: "1162 sqft", icon: Ruler },
// // //   { label: "Total Built-up", value: "2400.50 sqft", icon: Layers },
// // //   { label: "Starting Price", value: "2 Cr*", icon: IndianRupee },
// // // ];

// // // const AMENITIES = [
// // //   {
// // //     icon: Coffee,
// // //     title: "Club House & Banquet Hall",
// // //     body: "An exclusive space featuring a premium club house, guest accommodation, and a banquet hall for community gatherings.",
// // //   },
// // //   {
// // //     icon: Waves,
// // //     title: "Recreational Swimming Pool",
// // //     body: "A pristine recreational swimming pool designed for daily relaxation, fitness, and leisure.",
// // //   },
// // //   {
// // //     icon: Dumbbell,
// // //     title: "Modern Gymnasium",
// // //     body: "Fully equipped modern fitness center to help you maintain a healthy and active lifestyle.",
// // //   },
// // //   {
// // //     icon: Trophy,
// // //     title: "Indoor Sports & Games",
// // //     body: "Dedicated indoor squash and badminton courts, an indoor games room, and a specialized kids club.",
// // //   },
// // //   {
// // //     icon: TreePine,
// // //     title: "Parks & Jogging Tracks",
// // //     body: "Beautiful flower gardens, landscaped parks, and dedicated cycling and strolling tracks.",
// // //   },
// // //   {
// // //     icon: Sun,
// // //     title: "Vaastu Compliant & Zen",
// // //     body: "Thoughtfully designed spaces ensuring 100% Vaastu compliance along with a dedicated meditation area.",
// // //   },
// // //   {
// // //     icon: Droplets,
// // //     title: "Eco-Friendly Infrastructure",
// // //     body: "Integrated rain water harvesting, 100% power backup, efficient waste disposal, and robust water storage.",
// // //   },
// // //   {
// // //     icon: ShieldCheck,
// // //     title: "24/7 Security & Staff",
// // //     body: "Round-the-clock security, dedicated maintenance staff, visitor parking, and advanced fire fighting equipment.",
// // //   }
// // // ];

// // // type Room = { name: string; dim: string };

// // // function getRoomIcon(name: string) {
// // //   const n = name.toLowerCase();
// // //   if (n.includes("sitout")) return Armchair;
// // //   if (n.includes("living")) return Sofa;
// // //   if (n.includes("dining")) return UtensilsCrossed;
// // //   if (n.includes("kitchen")) return ChefHat;
// // //   if (n.includes("pooja")) return Flame;
// // //   if (n.includes("bed")) return BedDouble;
// // //   if (n.includes("toilet")) return Bath;
// // //   if (n.includes("parking")) return Car;
// // //   if (n.includes("family")) return Users;
// // //   if (n.includes("dress")) return Shirt;
// // //   if (n.includes("balcony")) return Wind;
// // //   if (n.includes("terrace")) return TreePine;
// // //   if (n.includes("sky")) return Aperture;
// // //   return HomeIcon;
// // // }

// // // const FLOORS: {
// // //   id: string;
// // //   label: string;
// // //   tag: string;
// // //   area: string;
// // //   rooms: Room[];
// // //   note: string;
// // // }[] = [
// // //   {
// // //     id: "ground",
// // //     label: "Ground Floor",
// // //     tag: "Arrival Level",
// // //     area: "936.80 sqft",
// // //     note: "Living, dining and a private bedroom open onto a landscaped car court.",
// // //     rooms: [
// // //       { name: "Sitout", dim: "15'6\" x 5'0\"" },
// // //       { name: "Living Area", dim: "13'0\" x 14'6\"" },
// // //       { name: "Dining Area", dim: "8'6\" x 14'0\"" },
// // //       { name: "Kitchen", dim: "11'0\" x 8'0\"" },
// // //       { name: "Pooja", dim: "3'2\" x 4'8\"" },
// // //       { name: "Bed Room", dim: "10'6\" x 16'0\"" },
// // //       { name: "Toilet", dim: "5'0\" x 8'0\"" },
// // //     ],
// // //   },
// // //   {
// // //     id: "first",
// // //     label: "First Floor",
// // //     tag: "Private Level",
// // //     area: "920.40 sqft",
// // //     note: "Two master suites with dressing rooms, framed by a shared family area and balcony.",
// // //     rooms: [
// // //       { name: "Master Bed Room", dim: "11'0\" x 16'0\"" },
// // //       { name: "Bed Room", dim: "10'6\" x 16'0\"" },
// // //       { name: "Family Area", dim: "8'6\" x 18'6\"" },
// // //       { name: "Dress Area", dim: "5'8\" x 8'0\"" },
// // //       { name: "Dress Area", dim: "7'8\" x 8'0\"" },
// // //       { name: "Balcony", dim: "4'8\" x 8'6\"" },
// // //       { name: "Toilet", dim: "5'0\" x 8'0\"" },
// // //       { name: "Toilet", dim: "5'0\" x 8'0\"" },
// // //     ],
// // //   },
// // //   {
// // //     id: "terrace",
// // //     label: "Terrace Floor",
// // //     tag: "Sky Level",
// // //     area: "543.30 sqft",
// // //     note: "A third master suite opens to an open terrace, sitout and skylight above the stair.",
// // //     rooms: [
// // //       { name: "Master Bed Room", dim: "11'0\" x 16'0\"" },
// // //       { name: "Sitout Area", dim: "8'6\" x 16'6\"" },
// // //       { name: "Dress Area", dim: "5'8\" x 8'0\"" },
// // //       { name: "Toilet", dim: "5'0\" x 8'0\"" },
// // //       { name: "Open Terrace", dim: "Open to sky" },
// // //       { name: "Sky Light", dim: "Above staircase" },
// // //     ],
// // //   },
// // // ];

// // // const SPECS: { group: string; rows: [string, string][] }[] = [
// // //   {
// // //     group: "Approvals & Layout",
// // //     rows: [
// // //       ["Layout Approval", "STRRPA-BMRDA"],
// // //       ["Layout Name", "Confident Atria (Gated Community)"],
// // //       ["Layout Extent", "30 Acres"],
// // //       ["Villa Approval", "STRRPA"],
// // //     ],
// // //   },
// // //   {
// // //     group: "Structure & Envelope",
// // //     rows: [
// // //       ["Building Structure", "RCC Column Frame"],
// // //       ["Walls", "6\" Solid Block"],
// // //       ["Main Door", "Teak Wood"],
// // //       ["Internal Doors", "Teak Wood Frame, Ready-made Flush Doors"],
// // //       ["Windows", "3-Track UPVC, Wooden Pattern, Best Quality"],
// // //     ],
// // //   },
// // //   {
// // //     group: "Interiors & Finishes",
// // //     rows: [
// // //       ["Flooring - Bedrooms & Living", "Vitrified Tiles, 4' x 6'"],
// // //       ["Flooring - Toilet Walls", "Glazed Tiles, 2' x 4'"],
// // //       ["Flooring - Staircase & Sitout", "Granite"],
// // //       ["Painting - Internal", "Asian Paints Tractor Emulsion"],
// // //       ["Painting - External", "Asian Paints Ultima Protek, Texture Finish"],
// // //     ],
// // //   },
// // //   {
// // //     group: "Electrical & Plumbing",
// // //     rows: [
// // //       ["Electrical", "Polycab / V-Guard / Havells"],
// // //       ["Sanitary - Internal Piping", "Supreme PVC & UPVC"],
// // //       ["Sanitary - Fittings", "Jaquar"],
// // //       ["Sanitary - Flush Tanks", "Grohe"],
// // //     ],
// // //   },
// // //   {
// // //     group: "Utilities & Boundary",
// // //     rows: [
// // //       ["Underground Sump", "8000 Ltr, RCC Structure"],
// // //       ["Overhead Tank", "1000 Ltr, 3-Layer Fibre"],
// // //       ["Compound Wall", "Individual Compound Wall Provided"],
// // //     ],
// // //   },
// // // ];

// // // const LANDMARKS: {
// // //   category: string;
// // //   icon: typeof GraduationCap;
// // //   places: string[];
// // // }[] = [
// // //   {
// // //     category: "Education",
// // //     icon: GraduationCap,
// // //     places: ["Azim Premji University", "TISB School", "Indus School", "Global Indian School"],
// // //   },
// // //   {
// // //     category: "Business & Industry",
// // //     icon: Factory,
// // //     places: ["Infosys", "Exide Factory", "SVT RMC Plant"],
// // //   },
// // //   {
// // //     category: "Civic & Everyday",
// // //     icon: ShieldCheck,
// // //     places: ["Police Station", "Sompura Gate"],
// // //   },
// // //   {
// // //     category: "Connectivity",
// // //     icon: Milestone,
// // //     places: ["Sarjapura Circle", "Attibele Circle", "Abbaya Circle", "Chandapura Road"],
// // //   },
// // // ];

// // // /* ------------------------------------------------------------------ */
// // // /*  Scroll-reveal helper                                              */
// // // /* ------------------------------------------------------------------ */

// // // function Reveal({
// // //   children,
// // //   delay = 0,
// // //   className = "",
// // // }: {
// // //   children: React.ReactNode;
// // //   delay?: number;
// // //   className?: string;
// // // }) {
// // //   const ref = useRef<HTMLDivElement>(null);
// // //   const [visible, setVisible] = useState(false);

// // //   useEffect(() => {
// // //     const el = ref.current;
// // //     if (!el) return;
// // //     const io = new IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           setVisible(true);
// // //           io.unobserve(el);
// // //         }
// // //       },
// // //       { threshold: 0.15 }
// // //     );
// // //     io.observe(el);
// // //     return () => io.disconnect();
// // //   }, []);

// // //   return (
// // //     <div
// // //       ref={ref}
// // //       style={{ transitionDelay: `${delay}ms` }}
// // //       className={`transition-all duration-700 ease-out ${
// // //         visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// // //       } ${className}`}
// // //     >
// // //       {children}
// // //     </div>
// // //   );
// // // }

// // // /* ------------------------------------------------------------------ */

// // // export default function Page() {
// // //   const [floorTab, setFloorTab] = useState("ground");
// // //   const [navOpen, setNavOpen] = useState(false);
// // //   const [scrolled, setScrolled] = useState(false);
// // //   const [progress, setProgress] = useState(0);
// // //   const [heroIn, setHeroIn] = useState(false);
  
// // //   // NEW: Floor plan lock states
// // //   const [isFloorPlanUnlocked, setIsFloorPlanUnlocked] = useState(false);
// // //   const [isPopupOpen, setIsPopupOpen] = useState(false);

// // //   const activeFloor = FLOORS.find((f) => f.id === floorTab)!;

// // //   useEffect(() => {
// // //     const t = setTimeout(() => setHeroIn(true), 80);
// // //     const onScroll = () => {
// // //       setScrolled(window.scrollY > 24);
// // //       const h = document.documentElement;
// // //       const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
// // //       setProgress(Math.min(1, Math.max(0, p)));
// // //     };
// // //     window.addEventListener("scroll", onScroll, { passive: true });
// // //     return () => {
// // //       clearTimeout(t);
// // //       window.removeEventListener("scroll", onScroll);
// // //     };
// // //   }, []);

// // //   // Popup Form Submit Handler
// // //   const handleUnlockSubmit = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setIsFloorPlanUnlocked(true);
// // //     setIsPopupOpen(false);
// // //   };

// // //   return (
// // //     <main
// // //       className={`${display.variable} ${body.variable} ${mono.variable} bg-[#FAFAFA] text-navy font-[family-name:var(--font-body)] selection:bg-gold selection:text-navy scroll-smooth`}
// // //     >
// // //       <style jsx global>{`
// // //         @keyframes floatSlow {
// // //           0%, 100% { transform: translateY(0) translateX(0); }
// // //           50% { transform: translateY(-18px) translateX(10px); }
// // //         }
// // //         @keyframes fadeInUp {
// // //           from { opacity: 0; transform: translateY(14px); }
// // //           to { opacity: 1; transform: translateY(0); }
// // //         }
// // //         .animate-float { animation: floatSlow 9s ease-in-out infinite; }
// // //         .animate-float-slow { animation: floatSlow 13s ease-in-out infinite; }
// // //         .fade-in-up { animation: fadeInUp 0.5s ease-out both; }
        
// // //         :root {
// // //           --navy: #0B1E36;
// // //           --gold: #D4AF37;
// // //           --pearl: #FFFFFF;
// // //         }
// // //       `}</style>

// // //       {/* ---------------------------------------------------------- SCROLL PROGRESS */}
// // //       <div className="fixed top-0 left-0 h-[2px] bg-gold z-[60] transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />

// // //       {/* ---------------------------------------------------------- NAV */}
// // //       <header
// // //         className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
// // //           scrolled ? "border-navy/10 bg-pearl/95 backdrop-blur-md shadow-sm" : "border-transparent bg-transparent"
// // //         }`}
// // //       >
// // //         <div className={`mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-24"}`}>
// // //           <Logo scrolled={scrolled} />
// // //           <nav className={`hidden md:flex items-center gap-10 text-[13px] tracking-[0.1em] uppercase transition-colors duration-300 ${
// // //             scrolled ? "text-navy/70" : "text-pearl/80"
// // //           }`}>
// // //             {["Overview", "Residences", "Specifications", "Location", "Enquire"].map((item) => (
// // //               <a key={item} href={`#${item.toLowerCase()}`} className="relative group py-1 hover:text-gold transition-colors">
// // //                 {item}
// // //               </a>
// // //             ))}
// // //           </nav>
// // //           <a
// // //             href={`tel:+91${PHONES[0]}`}
// // //             className={`hidden md:inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-[13px] font-medium tracking-wide transition-all duration-300 ${
// // //               scrolled 
// // //                 ? "border-navy/20 text-navy hover:bg-navy hover:text-pearl" 
// // //                 : "border-pearl/40 text-pearl hover:bg-pearl hover:text-navy"
// // //             }`}
// // //           >
// // //             <Phone className="h-3.5 w-3.5" /> Call Us
// // //           </a>
// // //           <button suppressHydrationWarning onClick={() => setNavOpen((v) => !v)} className={`md:hidden transition-colors duration-300 ${scrolled ? "text-navy" : "text-pearl"}`} aria-label="Toggle menu">
// // //             {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // //           </button>
// // //         </div>
        
// // //         {/* Mobile Nav */}
// // //         {navOpen && (
// // //           <div className="md:hidden border-t border-navy/10 bg-pearl px-6 py-6 flex flex-col gap-5 text-sm tracking-wide uppercase text-navy/80 shadow-2xl">
// // //             {["Overview", "Residences", "Specifications", "Location", "Enquire"].map((item) => (
// // //               <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setNavOpen(false)}>
// // //                 {item}
// // //               </a>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </header>

// // //       {/* ---------------------------------------------------------- HERO */}
// // //       <section className="relative overflow-hidden bg-navy text-pearl pt-32 pb-16 px-6 lg:px-10">
// // //         <div className="absolute inset-0 -z-10">
// // //           <div className="absolute -top-32 right-[-8%] h-[560px] w-[560px] rounded-full bg-gold/[0.08] blur-[100px] animate-float" />
// // //           <div className="absolute bottom-[-10%] left-[-8%] h-[420px] w-[420px] rounded-full blur-[90px] animate-float-slow bg-gold/[0.05]" />
// // //           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
// // //         </div>

// // //         <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center min-h-[75vh]">
// // //           <div className="pt-10">
// // //             <div
// // //               className={`flex items-center gap-3 mb-6 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
// // //             >
// // //               <span className="h-px w-8 bg-gold/60" />
// // //               <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gold/90">Project: Confident Atria</span>
// // //             </div>
            
// // //             <h1
// // //               className={`font-[family-name:var(--font-display)] italic font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] text-pearl transition-all duration-700 delay-100 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
// // //             >
// // //               Where the terrace <br />
// // //               <span className="not-italic font-medium text-gold">meets the sky.</span>
// // //             </h1>
            
// // //             <p
// // //               className={`mt-8 max-w-lg text-[16px] font-light leading-relaxed text-pearl/70 transition-all duration-700 delay-200 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
// // //             >
// // //               A limited collection of East-facing 4 BHK villas rising through three considered levels — arrival, private, and sky. Starting Price 2 Cr*.
// // //             </p>

// // //             {/* HIGHLIGHTED BUILDER & MARKETER BADGES */}
// // //             <Reveal delay={250} className={`mt-8 flex flex-wrap items-center gap-3 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
// // //               <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase text-gold backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
// // //                 <Building2 className="h-4 w-4" /> Built by SVT Developers
// // //               </div>
// // //               <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase text-gold backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
// // //                 <Milestone className="h-4 w-4" /> Marketed by RRL Group
// // //               </div>
// // //               <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase text-white backdrop-blur-md">
// // //                 <Key className="h-4 w-4 text-gold" /> Get Possession in 4 Months
// // //               </div>
// // //             </Reveal>

// // //             <div className={`mt-10 flex flex-wrap items-center gap-5 transition-all duration-700 delay-300 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
// // //               <a
// // //                 href="#enquire"
// // //                 className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[13px] font-semibold tracking-wide text-navy hover:bg-pearl transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
// // //               >
// // //                 Enquire Now <ArrowUpRight className="h-4 w-4" />
// // //               </a>
// // //               <a
// // //                 href="#residences"
// // //                 className="inline-flex items-center gap-2 rounded-full border border-pearl/30 px-8 py-4 text-[13px] tracking-wide text-pearl hover:bg-pearl/10 transition-colors"
// // //               >
// // //                 View Floor Plans
// // //               </a>
// // //             </div>
// // //           </div>

// // //           <div className={`grid grid-cols-2 gap-4 lg:gap-6 transition-all duration-700 delay-400 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
// // //             {STATS.map(({ label, value, icon: Icon }) => (
// // //               <div key={label} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm flex flex-col gap-4 hover:bg-white/10 transition-colors">
// // //                 <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
// // //                   <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
// // //                 </div>
// // //                 <div>
// // //                   <p className="font-[family-name:var(--font-mono)] text-xl text-pearl">{value}</p>
// // //                   <p className="text-[11px] tracking-[0.1em] uppercase text-pearl/50 mt-1">{label}</p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ---------------------------------------------------------- OVERVIEW (WITH ENTRANCE IMAGE) */}
// // //       <section id="overview" className="relative px-6 lg:px-10 py-32 bg-white">
// // //         <div className="mx-auto max-w-7xl">
// // //           <div className="grid lg:grid-cols-12 gap-16 items-start">
// // //             <Reveal className="lg:col-span-5 sticky top-32">
// // //               <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Overview</p>
// // //               <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy mb-8">
// // //                 Type 01 — a villa built in three acts
// // //               </h2>
              
// // //               {/* Project Entrance Image */}
// // //               <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-navy/10 group">
// // //                 <Image 
// // //                   src="https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-07-18%20at%205.57.47%20PM.jpeg" 
// // //                   alt="Confident Atria Entrance" 
// // //                   fill 
// // //                   priority
// // //                   className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
// // //                 />
// // //                 <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// // //                 <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
// // //                   <p className="text-sm font-medium tracking-wider uppercase drop-shadow-md">Confident Atria</p>
// // //                   <p className="text-xs text-white/80 font-light mt-1">Project Entrance View</p>
// // //                 </div>
// // //               </div>
// // //             </Reveal>

// // //             <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10 lg:pl-10">
// // //               <Reveal delay={100}>
// // //                 <OverviewPoint icon={ShieldCheck} title="STRRPA-BMRDA Approved" body="A 30-acre gated layout at Confident Atria, approved under STRRPA-BMRDA, with individually walled villa plots." />
// // //               </Reveal>
// // //               <Reveal delay={200}>
// // //                 <OverviewPoint icon={Building2} title="Column-Frame Structure" body="RCC column framing and 6-inch solid block walls, finished with teak wood doors and 3-track UPVC windows." />
// // //               </Reveal>
// // //               <Reveal delay={300}>
// // //                 <OverviewPoint icon={Compass} title="East-Facing, 1162 sqft" body="A 1162 sqft East-facing site carries 2400.50 sqft of built-up area across ground, first and terrace levels." />
// // //               </Reveal>
// // //               <Reveal delay={400}>
// // //                 <OverviewPoint icon={IndianRupee} title="Premium Investment" body="Starting at 2 Cr*, Villa 12 represents a prime opportunity within the Sarjapura Attibele tech corridor." />
// // //               </Reveal>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ---------------------------------------------------------- AMENITIES (MATCHING MAGICBRICKS) */}
// // //       <section className="relative px-6 lg:px-10 py-32 bg-[#F8F9FA] border-y border-navy/5">
// // //         <div className="mx-auto max-w-7xl">
// // //           <Reveal className="text-center max-w-2xl mx-auto mb-20">
// // //             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Living Here</p>
// // //             <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy">
// // //               Every detail, considered
// // //             </h2>
// // //           </Reveal>
// // //           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
// // //             {AMENITIES.map((a, i) => (
// // //               <Reveal key={a.title} delay={i * 100}>
// // //                 <div className="group h-full rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gold/30 hover:-translate-y-2">
// // //                   <div className="h-14 w-14 rounded-full flex items-center justify-center mb-6 bg-[#F0F4F8] group-hover:bg-gold transition-colors duration-500">
// // //                     <a.icon className="h-6 w-6 text-navy group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
// // //                   </div>
// // //                   <h3 className="text-[17px] font-semibold text-navy mb-3">{a.title}</h3>
// // //                   <p className="text-[14px] leading-relaxed text-navy/60">{a.body}</p>
// // //                 </div>
// // //               </Reveal>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ---------------------------------------------------------- RESIDENCES / FLOOR PLANS */}
// // //       <section id="residences" className="relative px-6 lg:px-10 py-32 bg-white">
// // //         <div className="mx-auto max-w-7xl">
// // //           <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
// // //             <div>
// // //               <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Residences</p>
// // //               <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy max-w-lg">Three levels, one villa</h2>
// // //             </div>
// // //             <p className="max-w-sm text-[15px] leading-relaxed text-navy/60">
// // //               Move through the plan level by level — from the car court and living
// // //               spaces at ground, to the private suites above, up to the open sky terrace.
// // //             </p>
// // //           </Reveal>

// // //           {/* GATED FLOOR PLAN IMAGES */}
// // //           <Reveal className="mb-20 grid lg:grid-cols-2 gap-10">
// // //             {[
// // //               { src: "https://ik.imagekit.io/j0xzq9pns/svt/Screenshot%202026-07-18%20142144.png", alt: "First Floor Plan" },
// // //               { src: "https://ik.imagekit.io/j0xzq9pns/svt/Screenshot%202026-07-18%20142207.png", alt: "Full Floor Plans" }
// // //             ].map((img, idx) => (
// // //               <div key={idx} className="rounded-3xl overflow-hidden border border-navy/10 shadow-lg bg-[#F8F9FA] aspect-[4/3] relative group">
// // //                 <Image 
// // //                   src={img.src}
// // //                   alt={img.alt}
// // //                   fill
// // //                   className={`object-cover transition-all duration-700 ease-out ${!isFloorPlanUnlocked ? "blur-xl scale-110" : "group-hover:scale-105"}`}
// // //                 />
                
// // //                 {/* Blur Overlay & Unlock Button */}
// // //                 {!isFloorPlanUnlocked && (
// // //                   <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] flex flex-col items-center justify-center z-10">
// // //                     <div className="h-16 w-16 rounded-full bg-navy/5 flex items-center justify-center mb-5 border border-white/40 shadow-sm">
// // //                       <Lock className="h-6 w-6 text-navy/70" />
// // //                     </div>
// // //                     <button 
// // //                       onClick={() => setIsPopupOpen(true)}
// // //                       className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wide text-navy hover:bg-navy hover:text-pearl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
// // //                     >
// // //                       Unlock to View Plans
// // //                     </button>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </Reveal>


// // //         </div>
// // //       </section>

// // //       {/* ---------------------------------------------------------- SPECIFICATIONS */}
// // //       <section id="specifications" className="relative px-6 lg:px-10 py-32 bg-navy text-pearl">
// // //         <div className="mx-auto max-w-7xl">
// // //           <Reveal className="mb-16 text-center max-w-2xl mx-auto">
// // //             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Specifications</p>
// // //             <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-pearl">Built with material honesty</h2>
// // //           </Reveal>

// // //           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
// // //             {SPECS.map((group, gi) => (
// // //               <Reveal key={group.group} delay={gi * 100} className="bg-white/5 rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-colors duration-500">
// // //                 <h3 className="font-[family-name:var(--font-display)] italic text-2xl text-gold mb-8">{group.group}</h3>
// // //                 <dl className="divide-y divide-white/10">
// // //                   {group.rows.map(([k, v]) => (
// // //                     <div key={k} className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-6 py-4 text-[15px]">
// // //                       <dt className="text-pearl/60 font-light">{k}</dt>
// // //                       <dd className="text-left sm:text-right text-pearl font-medium">{v}</dd>
// // //                     </div>
// // //                   ))}
// // //                 </dl>
// // //               </Reveal>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ---------------------------------------------------------- LOCATION */}
// // //       <section id="location" className="relative px-6 lg:px-10 py-32 bg-white overflow-hidden">
// // //         <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-start">
// // //           <Reveal>
// // //             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Location</p>
// // //             <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy mb-6">
// // //               Set at the centre of Sarjapura Attibele Road
// // //             </h2>
// // //             <p className="text-[15px] leading-relaxed text-navy/60 mb-10 max-w-lg">
// // //               Confident Atria sits between Sarjapura and Attibele Circles — close to
// // //               Infosys and the tech corridor, ringed by established schools and a
// // //               university, with Chandapura Road and the roads to Malur, Hosur and
// // //               Whitefield all within reach.
// // //             </p>

// // //             {/* Address Block */}
// // //             <Reveal delay={50} className="mb-12 p-6 rounded-2xl bg-[#F8F9FA] border border-navy/5 inline-block w-full max-w-lg hover:border-gold/30 transition-colors duration-300">
// // //               <div className="flex items-start gap-4">
// // //                 <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
// // //                 <div>
// // //                   <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-navy/80 mb-2">Site Address</p>
// // //                   <p className="text-[15px] leading-relaxed text-navy/70">
// // //                     Project in Confident Atria<br />
// // //                     <strong className="text-navy font-bold">Built by SVT Developers | Marketed by RRL Group</strong><br />
// // //                     {ADDRESS[1]}<br />
// // //                     {ADDRESS[2]}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </Reveal>

// // //             <div className="grid sm:grid-cols-2 gap-10">
// // //               {LANDMARKS.map(({ category, icon: Icon, places }, i) => (
// // //                 <Reveal key={category} delay={i * 100}>
// // //                   <div className="flex items-center gap-3 mb-4">
// // //                     <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
// // //                       <Icon className="h-4 w-4 text-gold" strokeWidth={2} />
// // //                     </div>
// // //                     <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-navy/80">{category}</p>
// // //                   </div>
// // //                   <ul className="space-y-2 border-l-2 border-navy/5 pl-4 ml-5">
// // //                     {places.map((p) => (
// // //                       <li key={p} className="text-[14px] text-navy/70 relative before:absolute before:-left-[21px] before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold">{p}</li>
// // //                     ))}
// // //                   </ul>
// // //                 </Reveal>
// // //               ))}
// // //             </div>
// // //           </Reveal>

// // //           {/* Interactive Google Map & Link */}
// // //           <Reveal delay={200} className="relative h-full min-h-[500px] w-full rounded-3xl overflow-hidden border border-navy/10 shadow-xl lg:sticky lg:top-32 group">
// // //             {/* Embedded Live Map */}
// // //             <iframe
// // //               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.681177651084!2d77.73356061327117!3d12.805374665510427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ef338f9038d%3A0xc3fdeea0b15b67bc!2sSarjapura%20-%20Attibele%20Rd%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
// // //               width="100%"
// // //               height="100%"
// // //               style={{ border: 0 }}
// // //               allowFullScreen={true}
// // //               loading="lazy"
// // //               referrerPolicy="no-referrer-when-downgrade"
// // //               className="absolute inset-0 grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
// // //             />
            
// // //             {/* Floating "Get Directions" Link Button */}
// // //             <a
// // //               href="https://maps.google.com/?q=Confident+Aspire,Sarjapura+Attibele+Road,Burgunte+Village,Bengaluru,Karnataka+562107"
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               className="absolute bottom-6 right-6 inline-flex items-center gap-2.5 rounded-full bg-navy px-6 py-3.5 text-[13px] font-semibold tracking-wide text-pearl hover:bg-gold hover:text-navy hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 z-10"
// // //             >
// // //               <MapPin className="h-4 w-4" /> Open in Google Maps
// // //             </a>
// // //           </Reveal>
// // //         </div>
// // //       </section>

// // //       {/* ---------------------------------------------------------- ENQUIRE */}
// // //       <section id="enquire" className="relative py-32 bg-navy text-pearl overflow-hidden">
// // //         {/* Full width background effects */}
// // //         <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_right,_rgba(212,175,55,0.15)_0%,_transparent_50%)]" />
// // //         <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

// // //         <div className="mx-auto max-w-7xl px-6 lg:px-10">
// // //           <Reveal className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
// // //             {/* Left Column: Context & Contact Info */}
// // //             <div className="flex flex-col justify-center h-full">
// // //               <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-6">Enquire</p>
// // //               <h2 className="font-[family-name:var(--font-display)] italic text-4xl sm:text-5xl text-pearl leading-tight mb-10">
// // //                 A limited number of Type 01 villas remain at Confident Atria.
// // //               </h2>
              
// // //               <div className="flex flex-wrap items-center gap-4 mb-12">
// // //                 {PHONES.map((p) => (
// // //                   <a
// // //                     key={p}
// // //                     href={`tel:+91${p}`}
// // //                     className="relative inline-flex items-center gap-3 rounded-full border border-gold/30 px-8 py-4 text-[15px] font-medium tracking-wide text-pearl hover:bg-gold hover:text-navy hover:border-gold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
// // //                   >
// // //                     <Phone className="h-4 w-4 relative" /> <span className="relative">{p}</span>
// // //                   </a>
// // //                 ))}
// // //               </div>

// // //               <div className="pt-10 border-t border-white/10">
// // //                  <p className="text-[14px] text-pearl/60 font-light leading-relaxed">
// // //                    <strong className="text-pearl font-bold uppercase tracking-wide">Built by SVT Developers | Marketed by RRL Group</strong> <br />
// // //                    {ADDRESS[1]}, {ADDRESS[2]}
// // //                  </p>
// // //               </div>
// // //             </div>

// // //             {/* Right Column: Premium Contact Form */}
// // //             <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 sm:p-12 backdrop-blur-sm shadow-2xl relative">
// // //               <div className="absolute -top-10 -right-10 h-32 w-32 bg-gold/20 blur-3xl rounded-full pointer-events-none" />
              
// // //               <h3 className="font-[family-name:var(--font-display)] text-2xl text-pearl mb-8">Register your interest</h3>
              
// // //               <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
// // //                 {/* Name Input */}
// // //                 <div className="relative">
// // //                   <input 
// // //                     type="text" 
// // //                     id="name"
// // //                     name="name"
// // //                     required
// // //                     suppressHydrationWarning
// // //                     placeholder=" "
// // //                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
// // //                   />
// // //                   <label htmlFor="name" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
// // //                     Full Name
// // //                   </label>
// // //                 </div>

// // //                 {/* Phone Input */}
// // //                 <div className="relative">
// // //                   <input 
// // //                     type="tel" 
// // //                     id="phone"
// // //                     name="phone"
// // //                     required
// // //                     suppressHydrationWarning
// // //                     placeholder=" "
// // //                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
// // //                   />
// // //                   <label htmlFor="phone" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
// // //                     Phone Number
// // //                   </label>
// // //                 </div>

// // //                 {/* Email Input */}
// // //                 <div className="relative">
// // //                   <input 
// // //                     type="email" 
// // //                     id="email"
// // //                     name="email"
// // //                     suppressHydrationWarning
// // //                     placeholder=" "
// // //                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
// // //                   />
// // //                   <label htmlFor="email" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
// // //                     Email Address
// // //                   </label>
// // //                 </div>

// // //                 {/* Message Input */}
// // //                 <div className="relative mt-2">
// // //                   <textarea 
// // //                     id="message"
// // //                     name="message"
// // //                     rows={3}
// // //                     suppressHydrationWarning
// // //                     placeholder=" "
// // //                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors resize-none"
// // //                   />
// // //                   <label htmlFor="message" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
// // //                     Message (Optional)
// // //                   </label>
// // //                 </div>

// // //                 <button 
// // //                   type="submit"
// // //                   suppressHydrationWarning
// // //                   className="mt-6 w-full rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wider uppercase text-navy hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300"
// // //                 >
// // //                   Submit Enquiry
// // //                 </button>
// // //               </form>
// // //             </div>
// // //           </Reveal>
// // //         </div>
// // //       </section>

// // //       {/* ---------------------------------------------------------- FOOTER */}
// // //       <footer className="px-6 lg:px-10 py-16 border-t border-navy/10 bg-white">
// // //         <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-10">
// // //           <Logo scrolled={true} />
// // //           <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-[14px] text-navy/60">
// // //             <span className="flex items-center gap-3 hover:text-gold transition-colors">
// // //               <MapPin className="h-4 w-4 text-gold" /> {ADDRESS[1]}
// // //             </span>
// // //             <span className="flex items-center gap-3 hover:text-gold transition-colors">
// // //               <Phone className="h-4 w-4 text-gold" /> {PHONES.join(" / ")}
// // //             </span>
// // //           </div>
// // //           <p className="text-[13px] text-navy/80 font-bold tracking-wide uppercase">© {new Date().getFullYear()} Built by SVT Developers | Marketed by RRL Group</p>
// // //         </div>
// // //       </footer>

// // //       {/* ---------------------------------------------------------- UNLOCK POPUP MODAL */}
// // //       {isPopupOpen && (
// // //         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
// // //           {/* Backdrop */}
// // //           <div 
// // //             className="absolute inset-0 bg-navy/80 backdrop-blur-md" 
// // //             onClick={() => setIsPopupOpen(false)} 
// // //           />
          
// // //           {/* Modal Content */}
// // //           <div className="relative w-full max-w-md rounded-[2.5rem] bg-navy border border-gold/20 p-8 sm:p-10 shadow-2xl animate-in fade-in zoom-in duration-300">
// // //             <button 
// // //               onClick={() => setIsPopupOpen(false)} 
// // //               className="absolute top-6 right-6 text-pearl/50 hover:text-pearl transition-colors"
// // //             >
// // //               <X className="h-6 w-6" />
// // //             </button>
            
// // //             <div className="mb-8">
// // //               <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
// // //                 <Lock className="h-5 w-5 text-gold" />
// // //               </div>
// // //               <h3 className="font-[family-name:var(--font-display)] text-2xl text-pearl mb-2">Unlock Floor Plans</h3>
// // //               <p className="text-[14px] text-pearl/60">Enter your details to instantly view the premium 4BHK layouts.</p>
// // //             </div>
            
// // //             <form onSubmit={handleUnlockSubmit} className="flex flex-col gap-6">
// // //               <div className="relative">
// // //                 <input 
// // //                   type="text" 
// // //                   required 
// // //                   suppressHydrationWarning 
// // //                   placeholder=" " 
// // //                   className="peer w-full bg-transparent border-b border-white/20 py-3 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors" 
// // //                 />
// // //                 <label className="absolute left-0 top-3 text-[14px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
// // //                   Full Name
// // //                 </label>
// // //               </div>
              
// // //               <div className="relative">
// // //                 <input 
// // //                   type="tel" 
// // //                   required 
// // //                   suppressHydrationWarning 
// // //                   placeholder=" " 
// // //                   className="peer w-full bg-transparent border-b border-white/20 py-3 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors" 
// // //                 />
// // //                 <label className="absolute left-0 top-3 text-[14px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
// // //                   Phone Number
// // //                 </label>
// // //               </div>
              
// // //               <button 
// // //                 type="submit" 
// // //                 className="mt-4 w-full rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wider uppercase text-navy hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
// // //               >
// // //                 Unlock Now
// // //               </button>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </main>
// // //   );
// // // }

// // // /* ------------------------------------------------------------------ */
// // // /*  Small components                                                  */
// // // /* ------------------------------------------------------------------ */

// // // function Logo({ scrolled = true }: { scrolled?: boolean }) {
// // //   return (
// // //     <a href="#" className="flex items-center gap-4 group">
// // //       <span className="relative flex h-10 w-10 items-end gap-[4px]">
// // //         <span className="h-5 w-[8px] transition-all duration-500 group-hover:h-6" style={{ backgroundColor: BRONZE }} />
// // //         <span className="h-7 w-[8px] bg-gold transition-all duration-500 group-hover:h-8" />
// // //         <span className={`h-10 w-[8px] transition-colors duration-500 ${scrolled ? "bg-navy" : "bg-pearl"}`} />
// // //       </span>
// // //       <span className="leading-none">
// // //         <span className={`block font-[family-name:var(--font-display)] text-xl font-medium tracking-wider transition-colors duration-500 ${scrolled ? "text-navy" : "text-pearl"}`}>SVT</span>
// // //         <span className={`block text-[10px] font-bold tracking-[0.25em] transition-colors duration-500 mt-1 ${scrolled ? "text-navy/50" : "text-pearl/60"}`}>GROUP</span>
// // //       </span>
// // //     </a>
// // //   );
// // // }

// // // function OverviewPoint({
// // //   icon: Icon,
// // //   title,
// // //   body,
// // // }: {
// // //   icon: typeof ShieldCheck;
// // //   title: string;
// // //   body: string;
// // // }) {
// // //   return (
// // //     <div className="group border-t border-navy/10 pt-8 hover:border-gold transition-colors duration-500 relative">
// // //       <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
// // //       <Icon className="h-6 w-6 text-gold mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
// // //       <h3 className="text-[18px] font-semibold text-navy mb-3">{title}</h3>
// // //       <p className="text-[15px] leading-relaxed text-navy/60 font-light">{body}</p>
// // //     </div>
// // //   );
// // // }

// // "use client";
// // import Image from "next/image";
// // import { useEffect, useRef, useState } from "react";
// // import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
// // import {
// //   Phone,
// //   MapPin,
// //   Menu,
// //   X,
// //   ArrowUpRight,
// //   Sun,
// //   Compass,
// //   Building2,
// //   GraduationCap,
// //   Factory,
// //   Milestone,
// //   ShieldCheck,
// //   Ruler,
// //   Layers,
// //   Home as HomeIcon,
// //   Armchair,
// //   Sofa,
// //   UtensilsCrossed,
// //   ChefHat,
// //   Flame,
// //   BedDouble,
// //   Bath,
// //   Car,
// //   Users,
// //   Shirt,
// //   Wind,
// //   TreePine,
// //   Aperture,
// //   Droplets,
// //   Hammer,
// //   Plug,
// //   IndianRupee,
// //   Key,
// //   Coffee,
// //   Waves,
// //   Dumbbell,
// //   Trophy,
// //   Lock,
// //   AlertCircle,
// //   Camera
// // } from "lucide-react";

// // const display = Fraunces({
// //   subsets: ["latin"],
// //   weight: ["400", "500", "600"],
// //   style: ["normal", "italic"],
// //   variable: "--font-display",
// // });

// // const body = Manrope({
// //   subsets: ["latin"],
// //   weight: ["300", "400", "500", "600"],
// //   variable: "--font-body",
// // });

// // const mono = IBM_Plex_Mono({
// //   subsets: ["latin"],
// //   weight: ["400", "500"],
// //   variable: "--font-mono",
// // });

// // const BRONZE = "#8B6F3D";

// // /* ------------------------------------------------------------------ */
// // /*  Content                                                           */
// // /* ------------------------------------------------------------------ */

// // const PHONES = ["8494966966"]; 
// // const ADDRESS = [
// //   "Confident Atria",
// //   "Sarjapura - Attibele Road",
// //   "Bengaluru, Karnataka",
// // ];

// // const STATS = [
// //   { label: "Configuration", value: "4 BHK", icon: HomeIcon },
// //   { label: "Site Area", value: "1162 sqft", icon: Ruler },
// //   { label: "Total Built-up", value: "2400.50 sqft", icon: Layers },
// //   { label: "Availability", value: "12 Units Left", icon: AlertCircle },
// // ];

// // // Fully updated exact amenities from the PDF and Flyer
// // const AMENITIES = [
// //   {
// //     icon: Coffee,
// //     title: "Premium Clubhouse",
// //     body: "A Family & Social hub featuring a premium clubhouse, banquet hall, and an outdoor amphitheater.",
// //   },
// //   {
// //     icon: Waves,
// //     title: "Large Swimming Pool",
// //     body: "A pristine, large recreational swimming pool designed for daily relaxation and fitness.",
// //   },
// //   {
// //     icon: Trophy,
// //     title: "Sports & Courts",
// //     body: "Tennis & basketball courts, dedicated indoor squash and badminton courts, and an indoor games room.",
// //   },
// //   {
// //     icon: Dumbbell,
// //     title: "Fitness & Tracks",
// //     body: "Fully equipped gymnasium alongside dedicated jogging, strolling, and cycling tracks.",
// //   },
// //   {
// //     icon: TreePine,
// //     title: "Parks & Open Lawns",
// //     body: "Beautiful flower gardens, landscaped open lawns, and a dedicated safe children's play area.",
// //   },
// //   {
// //     icon: ShieldCheck,
// //     title: "24/7 Manned Security",
// //     body: "Fully gated community with 24/7 manned security, extensive CCTV surveillance, and visitor parking.",
// //   },
// //   {
// //     icon: Droplets,
// //     title: "Eco-Friendly Infrastructure",
// //     body: "Concrete internal roads, eco-friendly rainwater harvesting, and robust water storage systems.",
// //   },
// //   {
// //     icon: Sun,
// //     title: "Vaastu Compliant",
// //     body: "Thoughtfully designed spaces ensuring 100% Vaastu compliance along with a dedicated meditation area.",
// //   }
// // ];

// // type Room = { name: string; dim: string };

// // function getRoomIcon(name: string) {
// //   const n = name.toLowerCase();
// //   if (n.includes("sitout")) return Armchair;
// //   if (n.includes("living")) return Sofa;
// //   if (n.includes("dining")) return UtensilsCrossed;
// //   if (n.includes("kitchen")) return ChefHat;
// //   if (n.includes("pooja")) return Flame;
// //   if (n.includes("bed")) return BedDouble;
// //   if (n.includes("toilet")) return Bath;
// //   if (n.includes("parking")) return Car;
// //   if (n.includes("family")) return Users;
// //   if (n.includes("dress")) return Shirt;
// //   if (n.includes("balcony")) return Wind;
// //   if (n.includes("terrace")) return TreePine;
// //   if (n.includes("sky")) return Aperture;
// //   return HomeIcon;
// // }

// // const FLOORS: {
// //   id: string;
// //   label: string;
// //   tag: string;
// //   area: string;
// //   rooms: Room[];
// //   note: string;
// // }[] = [
// //   {
// //     id: "ground",
// //     label: "Ground Floor",
// //     tag: "Arrival Level",
// //     area: "936.80 sqft",
// //     note: "Living, dining and a private bedroom open onto a landscaped car court.",
// //     rooms: [
// //       { name: "Sitout", dim: "15'6\" x 5'0\"" },
// //       { name: "Living Area", dim: "13'0\" x 14'6\"" },
// //       { name: "Dining Area", dim: "8'6\" x 14'0\"" },
// //       { name: "Kitchen", dim: "11'0\" x 8'0\"" },
// //       { name: "Pooja", dim: "3'2\" x 4'8\"" },
// //       { name: "Bed Room", dim: "10'6\" x 16'0\"" },
// //       { name: "Toilet", dim: "5'0\" x 8'0\"" },
// //     ],
// //   },
// //   {
// //     id: "first",
// //     label: "First Floor",
// //     tag: "Private Level",
// //     area: "920.40 sqft",
// //     note: "Two master suites with dressing rooms, framed by a shared family area and balcony.",
// //     rooms: [
// //       { name: "Master Bed Room", dim: "11'0\" x 16'0\"" },
// //       { name: "Bed Room", dim: "10'6\" x 16'0\"" },
// //       { name: "Family Area", dim: "8'6\" x 18'6\"" },
// //       { name: "Dress Area", dim: "5'8\" x 8'0\"" },
// //       { name: "Dress Area", dim: "7'8\" x 8'0\"" },
// //       { name: "Balcony", dim: "4'8\" x 8'6\"" },
// //       { name: "Toilet", dim: "5'0\" x 8'0\"" },
// //       { name: "Toilet", dim: "5'0\" x 8'0\"" },
// //     ],
// //   },
// //   {
// //     id: "terrace",
// //     label: "Terrace Floor",
// //     tag: "Sky Level",
// //     area: "543.30 sqft",
// //     note: "A third master suite opens to an open terrace, sitout and skylight above the stair.",
// //     rooms: [
// //       { name: "Master Bed Room", dim: "11'0\" x 16'0\"" },
// //       { name: "Sitout Area", dim: "8'6\" x 16'6\"" },
// //       { name: "Dress Area", dim: "5'8\" x 8'0\"" },
// //       { name: "Toilet", dim: "5'0\" x 8'0\"" },
// //       { name: "Open Terrace", dim: "Open to sky" },
// //       { name: "Sky Light", dim: "Above staircase" },
// //     ],
// //   },
// // ];

// // const SPECS: { group: string; rows: [string, string][] }[] = [
// //   {
// //     group: "Approvals & Layout",
// //     rows: [
// //       ["Layout Approval", "RERA & BMRDA Approved"],
// //       ["RERA No.", "PRM/KA/RERA/1251/308/PR/130724/007003"],
// //       ["Layout Extent", "25-Acre Gated Community"],
// //       ["Layout Name", "Confident Atria"],
// //     ],
// //   },
// //   {
// //     group: "Structure & Envelope",
// //     rows: [
// //       ["Building Structure", "RCC Column Frame"],
// //       ["Walls", "6\" Solid Block"],
// //       ["Main Door", "Teak Wood"],
// //       ["Internal Doors", "Teak Wood Frame, Ready-made Flush Doors"],
// //       ["Windows", "3-Track UPVC, Wooden Pattern, Best Quality"],
// //     ],
// //   },
// //   {
// //     group: "Interiors & Finishes",
// //     rows: [
// //       ["Flooring - Bedrooms & Living", "Vitrified Tiles, 4' x 6'"],
// //       ["Flooring - Toilet Walls", "Glazed Tiles, 2' x 4'"],
// //       ["Flooring - Staircase & Sitout", "Granite"],
// //       ["Painting - Internal", "Asian Paints Tractor Emulsion"],
// //       ["Painting - External", "Asian Paints Ultima Protek, Texture Finish"],
// //     ],
// //   },
// //   {
// //     group: "Electrical & Plumbing",
// //     rows: [
// //       ["Electrical", "Polycab / V-Guard / Havells"],
// //       ["Sanitary - Internal Piping", "Supreme PVC & UPVC"],
// //       ["Sanitary - Fittings", "Jaquar"],
// //       ["Sanitary - Flush Tanks", "Grohe"],
// //     ],
// //   },
// //   {
// //     group: "Utilities & Boundary",
// //     rows: [
// //       ["Underground Sump", "8000 Ltr, RCC Structure"],
// //       ["Overhead Tank", "1000 Ltr, 3-Layer Fibre"],
// //       ["Compound Wall", "Individual Compound Wall Provided"],
// //     ],
// //   },
// // ];

// // const LANDMARKS: {
// //   category: string;
// //   icon: typeof GraduationCap;
// //   places: string[];
// // }[] = [
// //   {
// //     category: "Education",
// //     icon: GraduationCap,
// //     places: ["Azim Premji University", "TISB School", "Indus School", "Global Indian International School"],
// //   },
// //   {
// //     category: "Business & Industry",
// //     icon: Factory,
// //     places: ["Infosys Campus", "Exide Factory", "SVT RMC Plant"],
// //   },
// //   {
// //     category: "Civic & Everyday",
// //     icon: ShieldCheck,
// //     places: ["Police Station", "Sompura Gate"],
// //   },
// //   {
// //     category: "Connectivity",
// //     icon: Milestone,
// //     places: ["Sarjapura Circle", "Attibele Circle", "Whitefield Corridor", "Chandapura Road"],
// //   },
// // ];

// // /* ------------------------------------------------------------------ */
// // /*  Scroll-reveal helper                                              */
// // /* ------------------------------------------------------------------ */

// // function Reveal({
// //   children,
// //   delay = 0,
// //   className = "",
// // }: {
// //   children: React.ReactNode;
// //   delay?: number;
// //   className?: string;
// // }) {
// //   const ref = useRef<HTMLDivElement>(null);
// //   const [visible, setVisible] = useState(false);

// //   useEffect(() => {
// //     const el = ref.current;
// //     if (!el) return;
// //     const io = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setVisible(true);
// //           io.unobserve(el);
// //         }
// //       },
// //       { threshold: 0.15 }
// //     );
// //     io.observe(el);
// //     return () => io.disconnect();
// //   }, []);

// //   return (
// //     <div
// //       ref={ref}
// //       style={{ transitionDelay: `${delay}ms` }}
// //       className={`transition-all duration-700 ease-out ${
// //         visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
// //       } ${className}`}
// //     >
// //       {children}
// //     </div>
// //   );
// // }

// // /* ------------------------------------------------------------------ */

// // export default function Page() {
// //   const [floorTab, setFloorTab] = useState("ground");
// //   const [navOpen, setNavOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);
// //   const [progress, setProgress] = useState(0);
// //   const [heroIn, setHeroIn] = useState(false);
  
// //   // Floor plan lock states
// //   const [isFloorPlanUnlocked, setIsFloorPlanUnlocked] = useState(false);
// //   const [isPopupOpen, setIsPopupOpen] = useState(false);

// //   const activeFloor = FLOORS.find((f) => f.id === floorTab)!;

// //   useEffect(() => {
// //     const t = setTimeout(() => setHeroIn(true), 80);
// //     const onScroll = () => {
// //       setScrolled(window.scrollY > 24);
// //       const h = document.documentElement;
// //       const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
// //       setProgress(Math.min(1, Math.max(0, p)));
// //     };
// //     window.addEventListener("scroll", onScroll, { passive: true });
// //     return () => {
// //       clearTimeout(t);
// //       window.removeEventListener("scroll", onScroll);
// //     };
// //   }, []);

// //   // Popup Form Submit Handler
// //   const handleUnlockSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsFloorPlanUnlocked(true);
// //     setIsPopupOpen(false);
// //   };

// //   return (
// //     <main
// //       className={`${display.variable} ${body.variable} ${mono.variable} bg-[#FAFAFA] text-navy font-[family-name:var(--font-body)] selection:bg-gold selection:text-navy scroll-smooth`}
// //     >
// //       <style jsx global>{`
// //         @keyframes floatSlow {
// //           0%, 100% { transform: translateY(0) translateX(0); }
// //           50% { transform: translateY(-18px) translateX(10px); }
// //         }
// //         @keyframes fadeInUp {
// //           from { opacity: 0; transform: translateY(14px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }
// //         .animate-float { animation: floatSlow 9s ease-in-out infinite; }
// //         .animate-float-slow { animation: floatSlow 13s ease-in-out infinite; }
// //         .fade-in-up { animation: fadeInUp 0.5s ease-out both; }
        
// //         :root {
// //           --navy: #0B1E36;
// //           --gold: #D4AF37;
// //           --pearl: #FFFFFF;
// //         }
// //       `}</style>

// //       {/* ---------------------------------------------------------- SCROLL PROGRESS */}
// //       <div className="fixed top-0 left-0 h-[2px] bg-gold z-[60] transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />

// //       {/* ---------------------------------------------------------- NAV */}
// //       <header
// //         className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
// //           scrolled ? "border-navy/10 bg-pearl/95 backdrop-blur-md shadow-sm" : "border-transparent bg-transparent"
// //         }`}
// //       >
// //         <div className={`mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-24"}`}>
// //           <Logo scrolled={scrolled} />
// //           <nav className={`hidden md:flex items-center gap-10 text-[13px] tracking-[0.1em] uppercase transition-colors duration-300 ${
// //             scrolled ? "text-navy/70" : "text-pearl/80"
// //           }`}>
// //             {["Overview", "Residences", "Specifications", "Location", "Enquire"].map((item) => (
// //               <a key={item} href={`#${item.toLowerCase()}`} className="relative group py-1 hover:text-gold transition-colors">
// //                 {item}
// //               </a>
// //             ))}
// //           </nav>
// //           <a
// //             href={`tel:+91${PHONES[0]}`}
// //             className={`hidden md:inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-[13px] font-medium tracking-wide transition-all duration-300 ${
// //               scrolled 
// //                 ? "border-navy/20 text-navy hover:bg-navy hover:text-pearl" 
// //                 : "border-pearl/40 text-pearl hover:bg-pearl hover:text-navy"
// //             }`}
// //           >
// //             <Phone className="h-3.5 w-3.5" /> Call Us
// //           </a>
// //           <button suppressHydrationWarning onClick={() => setNavOpen((v) => !v)} className={`md:hidden transition-colors duration-300 ${scrolled ? "text-navy" : "text-pearl"}`} aria-label="Toggle menu">
// //             {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //           </button>
// //         </div>
        
// //         {/* Mobile Nav */}
// //         {navOpen && (
// //           <div className="md:hidden border-t border-navy/10 bg-pearl px-6 py-6 flex flex-col gap-5 text-sm tracking-wide uppercase text-navy/80 shadow-2xl">
// //             {["Overview", "Residences", "Specifications", "Location", "Enquire"].map((item) => (
// //               <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setNavOpen(false)}>
// //                 {item}
// //               </a>
// //             ))}
// //           </div>
// //         )}
// //       </header>

// //       {/* ---------------------------------------------------------- HERO */}
// //       <section className="relative overflow-hidden bg-navy text-pearl pt-32 pb-16 px-6 lg:px-10">
// //         <div className="absolute inset-0 -z-10">
// //           <div className="absolute -top-32 right-[-8%] h-[560px] w-[560px] rounded-full bg-gold/[0.08] blur-[100px] animate-float" />
// //           <div className="absolute bottom-[-10%] left-[-8%] h-[420px] w-[420px] rounded-full blur-[90px] animate-float-slow bg-gold/[0.05]" />
// //           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
// //         </div>

// //         <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center min-h-[75vh]">
// //           {/* Left Hero Content */}
// //           <div className="pt-10">
// //             <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
// //               <span className="h-px w-8 bg-gold/60" />
// //               <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gold/90">Confident Atria</span>
// //             </div>
            
// //             <h1 className={`font-[family-name:var(--font-display)] italic font-light text-[clamp(2.5rem,4.5vw,4.2rem)] leading-[1.1] text-pearl transition-all duration-700 delay-100 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
// //               Own the home <br />
// //               <span className="not-italic font-medium text-gold">your family deserves.</span>
// //             </h1>
            
// //             <p className={`mt-6 max-w-lg text-[16px] font-light leading-relaxed text-pearl/70 transition-all duration-700 delay-200 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
// //               Premium 4 BHK villa living in a sprawling 25-acre gated community. Sarjapura – Attibele Road, Bengaluru. Starts at just ₹2 CR* onwards.
// //             </p>

// //             {/* HIGHLIGHTED BUILDER & MARKETER BADGES */}
// //             <Reveal delay={250} className={`mt-8 flex flex-wrap items-center gap-3 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
// //               <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-[11px] font-bold tracking-[0.1em] uppercase text-gold backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
// //                 <Building2 className="h-4 w-4" /> Constructed by SVT Developers & Constructions
// //               </div>
// //               <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-[11px] font-bold tracking-[0.1em] uppercase text-gold backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
// //                 <Milestone className="h-4 w-4" /> Marketed by RRL Group
// //               </div>
// //               <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-bold tracking-[0.1em] uppercase text-white backdrop-blur-md">
// //                 <Key className="h-4 w-4 text-gold" /> Possession in 4 Months
// //               </div>
// //             </Reveal>

// //             <div className={`mt-10 flex flex-wrap items-center gap-5 transition-all duration-700 delay-300 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
// //               <a
// //                 href="#enquire"
// //                 className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[13px] font-semibold tracking-wide text-navy hover:bg-pearl transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
// //               >
// //                 Book Your Site Visit Today! <ArrowUpRight className="h-4 w-4" />
// //               </a>
// //               <a
// //                 href="#residences"
// //                 className="inline-flex items-center gap-2 rounded-full border border-pearl/30 px-8 py-4 text-[13px] tracking-wide text-pearl hover:bg-pearl/10 transition-colors"
// //               >
// //                 View Floor Plans
// //               </a>
// //             </div>
// //           </div>

// //           {/* Right Hero Content: Newly Added Villa Image & Stats */}
// //           <div className="w-full flex flex-col gap-6">
// //             <Reveal delay={200} className={`relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 transition-all duration-1000 ${heroIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
// //               <Image 
// //                 src="https://ik.imagekit.io/j0xzq9pns/svt/image.png" 
// //                 alt="Confident Atria Premium Villa Exterior" 
// //                 fill 
// //                 priority
// //                 className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
// //               <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
// //                 <div className="inline-flex items-center gap-2 rounded-full bg-navy/60 backdrop-blur-md border border-white/20 px-4 py-1.5">
// //                   <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">Only 12 Villas Available</span>
// //                 </div>
// //               </div>
// //             </Reveal>

// //             <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 transition-all duration-700 delay-400 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
// //               {STATS.map(({ label, value, icon: Icon }) => (
// //                 <div key={label} className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm flex flex-col gap-3 hover:bg-white/10 transition-colors">
// //                   <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center">
// //                     <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
// //                   </div>
// //                   <div>
// //                     <p className="font-[family-name:var(--font-mono)] text-[15px] font-medium text-pearl leading-tight">{value}</p>
// //                     <p className="text-[10px] tracking-[0.05em] uppercase text-pearl/50 mt-0.5">{label}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ---------------------------------------------------------- OVERVIEW (WITH ENTRANCE IMAGE) */}
// //       <section id="overview" className="relative px-6 lg:px-10 py-32 bg-white">
// //         <div className="mx-auto max-w-7xl">
// //           <div className="grid lg:grid-cols-12 gap-16 items-start">
// //             <Reveal className="lg:col-span-5 sticky top-32">
// //               <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Overview</p>
// //               <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy mb-8">
// //                 Type 01 — a villa built in three acts
// //               </h2>
              
// //               {/* Project Entrance Image */}
// //               <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-navy/10 group">
// //                 <Image 
// //                   src="https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-07-18%20at%205.57.47%20PM.jpeg" 
// //                   alt="Confident Atria Entrance" 
// //                   fill 
// //                   className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// //                 <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
// //                   <p className="text-sm font-medium tracking-wider uppercase drop-shadow-md">Confident Atria</p>
// //                   <p className="text-xs text-white/80 font-light mt-1">Project Entrance View</p>
// //                 </div>
// //               </div>
// //             </Reveal>

// //             <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10 lg:pl-10">
// //               <Reveal delay={100}>
// //                 <OverviewPoint icon={ShieldCheck} title="RERA & BMRDA Approved" body="A 25-acre gated layout at Confident Atria, fully legally cleared with RERA No. PRM/KA/RERA/1251/308/PR/130724/007003." />
// //               </Reveal>
// //               <Reveal delay={200}>
// //                 <OverviewPoint icon={Building2} title="Column-Frame Structure" body="RCC column framing and 6-inch solid block walls, finished with teak wood doors and 3-track UPVC windows." />
// //               </Reveal>
// //               <Reveal delay={300}>
// //                 <OverviewPoint icon={Compass} title="East-Facing, 1162 sqft" body="A 1162 sqft East-facing site carries 2400.50 sqft of built-up area across ground, first and terrace levels." />
// //               </Reveal>
// //               <Reveal delay={400}>
// //                 <OverviewPoint icon={IndianRupee} title="Premium Investment" body="Starting at 2 Cr*, Villa 12 represents a prime opportunity within one of Bengaluru's fastest-growing corridors." />
// //               </Reveal>
// //               <Reveal delay={500} className="sm:col-span-2">
// //                 <div className="group border-t border-navy/10 pt-8 hover:border-gold transition-colors duration-500 relative">
// //                   <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
// //                   <Key className="h-6 w-6 text-gold mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
// //                   <h3 className="text-[18px] font-semibold text-navy mb-3">Ready to Move In Soon</h3>
// //                   <p className="text-[15px] leading-relaxed text-navy/60 font-light">Fully compliant, legally cleared project — buy with complete confidence. Get possession in just 4 months from the date of booking — no long waiting periods.</p>
// //                 </div>
// //               </Reveal>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ---------------------------------------------------------- AMENITIES */}
// //       <section className="relative px-6 lg:px-10 py-32 bg-[#F8F9FA] border-y border-navy/5">
// //         <div className="mx-auto max-w-7xl">
// //           <Reveal className="text-center max-w-2xl mx-auto mb-20">
// //             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Living Here</p>
// //             <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy">
// //               World-Class Amenities for Every Lifestyle
// //             </h2>
// //           </Reveal>
// //           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {AMENITIES.map((a, i) => (
// //               <Reveal key={a.title} delay={i * 100}>
// //                 <div className="group h-full rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gold/30 hover:-translate-y-2">
// //                   <div className="h-14 w-14 rounded-full flex items-center justify-center mb-6 bg-[#F0F4F8] group-hover:bg-gold transition-colors duration-500">
// //                     <a.icon className="h-6 w-6 text-navy group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
// //                   </div>
// //                   <h3 className="text-[17px] font-semibold text-navy mb-3">{a.title}</h3>
// //                   <p className="text-[14px] leading-relaxed text-navy/60">{a.body}</p>
// //                 </div>
// //               </Reveal>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ---------------------------------------------------------- RESIDENCES / FLOOR PLANS */}
// //       <section id="residences" className="relative px-6 lg:px-10 py-32 bg-white">
// //         <div className="mx-auto max-w-7xl">
// //           <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
// //             <div>
// //               <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Residences</p>
// //               <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy max-w-lg">Three levels, one villa</h2>
// //             </div>
// //             <p className="max-w-sm text-[15px] leading-relaxed text-navy/60">
// //               Move through the plan level by level — from the car court and living
// //               spaces at ground, to the private suites above, up to the open sky terrace.
// //             </p>
// //           </Reveal>

// //           {/* GATED FLOOR PLAN IMAGES */}
// //           <Reveal className="mb-20 grid lg:grid-cols-2 gap-10">
// //             {[
// //               { src: "https://ik.imagekit.io/j0xzq9pns/svt/Screenshot%202026-07-18%20142144.png", alt: "First Floor Plan" },
// //               { src: "https://ik.imagekit.io/j0xzq9pns/svt/Screenshot%202026-07-18%20142207.png", alt: "Full Floor Plans" }
// //             ].map((img, idx) => (
// //               <div key={idx} className="rounded-3xl overflow-hidden border border-navy/10 shadow-lg bg-[#F8F9FA] aspect-[4/3] relative group">
// //                 <Image 
// //                   src={img.src}
// //                   alt={img.alt}
// //                   fill
// //                   className={`object-cover transition-all duration-700 ease-out ${!isFloorPlanUnlocked ? "blur-xl scale-110" : "group-hover:scale-105"}`}
// //                 />
                
// //                 {/* Blur Overlay & Unlock Button */}
// //                 {!isFloorPlanUnlocked && (
// //                   <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] flex flex-col items-center justify-center z-10">
// //                     <div className="h-16 w-16 rounded-full bg-navy/5 flex items-center justify-center mb-5 border border-white/40 shadow-sm">
// //                       <Lock className="h-6 w-6 text-navy/70" />
// //                     </div>
// //                     <button 
// //                       onClick={() => setIsPopupOpen(true)}
// //                       className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wide text-navy hover:bg-navy hover:text-pearl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
// //                     >
// //                       Unlock to View Plans
// //                     </button>
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </Reveal>

// //         </div>
// //       </section>

// //       {/* ---------------------------------------------------------- SPECIFICATIONS */}
// //       <section id="specifications" className="relative px-6 lg:px-10 py-32 bg-navy text-pearl">
// //         <div className="mx-auto max-w-7xl">
// //           <Reveal className="mb-16 text-center max-w-2xl mx-auto">
// //             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Specifications</p>
// //             <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-pearl">Built with material honesty</h2>
// //           </Reveal>

// //           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
// //             {SPECS.map((group, gi) => (
// //               <Reveal key={group.group} delay={gi * 100} className="bg-white/5 rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-colors duration-500">
// //                 <h3 className="font-[family-name:var(--font-display)] italic text-2xl text-gold mb-8">{group.group}</h3>
// //                 <dl className="divide-y divide-white/10">
// //                   {group.rows.map(([k, v]) => (
// //                     <div key={k} className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-6 py-4 text-[15px]">
// //                       <dt className="text-pearl/60 font-light">{k}</dt>
// //                       <dd className="text-left sm:text-right text-pearl font-medium">{v}</dd>
// //                     </div>
// //                   ))}
// //                 </dl>
// //               </Reveal>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ---------------------------------------------------------- LOCATION */}
// //       <section id="location" className="relative px-6 lg:px-10 py-32 bg-white overflow-hidden">
// //         <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-start">
// //           <Reveal>
// //             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Prime Location</p>
// //             <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy mb-6">
// //               Set at the centre of Sarjapura Attibele Road
// //             </h2>
// //             <p className="text-[15px] leading-relaxed text-navy/60 mb-10 max-w-lg">
// //               Confident Atria sits in <strong className="text-navy font-semibold">one of Bengaluru's fastest-growing residential corridors with high appreciation</strong>. Excellent Connectivity to Chandapura Road, Sarjapura Circle, Attibele Circle & Whitefield Corridor.
// //             </p>

// //             {/* Address Block */}
// //             <Reveal delay={50} className="mb-12 p-6 rounded-2xl bg-[#F8F9FA] border border-navy/5 inline-block w-full max-w-lg hover:border-gold/30 transition-colors duration-300">
// //               <div className="flex items-start gap-4">
// //                 <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
// //                 <div>
// //                   <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-navy/80 mb-2">Site Address</p>
// //                   <p className="text-[15px] leading-relaxed text-navy/70">
// //                     <strong className="text-navy font-bold">Confident Atria</strong><br />
// //                     Constructed by SVT Developers & Constructions | Marketed by RRL Group<br />
// //                     {ADDRESS[1]}<br />
// //                     {ADDRESS[2]}
// //                   </p>
// //                 </div>
// //               </div>
// //             </Reveal>

// //             <div className="grid sm:grid-cols-2 gap-10">
// //               {LANDMARKS.map(({ category, icon: Icon, places }, i) => (
// //                 <Reveal key={category} delay={i * 100}>
// //                   <div className="flex items-center gap-3 mb-4">
// //                     <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
// //                       <Icon className="h-4 w-4 text-gold" strokeWidth={2} />
// //                     </div>
// //                     <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-navy/80">{category}</p>
// //                   </div>
// //                   <ul className="space-y-2 border-l-2 border-navy/5 pl-4 ml-5">
// //                     {places.map((p) => (
// //                       <li key={p} className="text-[14px] text-navy/70 relative before:absolute before:-left-[21px] before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold">{p}</li>
// //                     ))}
// //                   </ul>
// //                 </Reveal>
// //               ))}
// //             </div>
// //           </Reveal>

// //           {/* Interactive Google Map & Link */}
// //           <Reveal delay={200} className="relative h-full min-h-[500px] w-full rounded-3xl overflow-hidden border border-navy/10 shadow-xl lg:sticky lg:top-32 group">
// //             {/* Embedded Live Map */}
// //             <iframe
// //               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.681177651084!2d77.73356061327117!3d12.805374665510427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ef338f9038d%3A0xc3fdeea0b15b67bc!2sSarjapura%20-%20Attibele%20Rd%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
// //               width="100%"
// //               height="100%"
// //               style={{ border: 0 }}
// //               allowFullScreen={true}
// //               loading="lazy"
// //               referrerPolicy="no-referrer-when-downgrade"
// //               className="absolute inset-0 grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
// //             />
            
// //             {/* Floating "Get Directions" Link Button */}
// //             <a
// //               href="https://maps.google.com/?q=Confident+Aspire,Sarjapura+Attibele+Road,Burgunte+Village,Bengaluru,Karnataka+562107"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="absolute bottom-6 right-6 inline-flex items-center gap-2.5 rounded-full bg-navy px-6 py-3.5 text-[13px] font-semibold tracking-wide text-pearl hover:bg-gold hover:text-navy hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 z-10"
// //             >
// //               <MapPin className="h-4 w-4" /> Open in Google Maps
// //             </a>
// //           </Reveal>
// //         </div>
// //       </section>

// //       {/* ---------------------------------------------------------- ENQUIRE */}
// //       <section id="enquire" className="relative py-32 bg-navy text-pearl overflow-hidden">
// //         {/* Full width background effects */}
// //         <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_right,_rgba(212,175,55,0.15)_0%,_transparent_50%)]" />
// //         <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

// //         <div className="mx-auto max-w-7xl px-6 lg:px-10">
// //           <Reveal className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
// //             {/* Left Column: Context & Contact Info */}
// //             <div className="flex flex-col justify-center h-full">
// //               <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-6">Enquire</p>
// //               <h2 className="font-[family-name:var(--font-display)] italic text-4xl sm:text-5xl text-pearl leading-tight mb-10">
// //                 Only 12 premium villas remain at Confident Atria.
// //               </h2>
              
// //               <div className="flex flex-wrap items-center gap-4 mb-12">
// //                 {PHONES.map((p) => (
// //                   <a
// //                     key={p}
// //                     href={`tel:+91${p}`}
// //                     className="relative inline-flex items-center gap-3 rounded-full border border-gold/30 px-8 py-4 text-[15px] font-medium tracking-wide text-pearl hover:bg-gold hover:text-navy hover:border-gold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
// //                   >
// //                     <Phone className="h-4 w-4 relative" /> <span className="relative">{p}</span>
// //                   </a>
// //                 ))}
// //               </div>

// //               <div className="pt-10 border-t border-white/10">
// //                  <p className="text-[14px] text-pearl/60 font-light leading-relaxed">
// //                    <strong className="text-pearl font-bold uppercase tracking-wide">Constructed by SVT Developers & Constructions | Marketed by RRL Group</strong> <br />
// //                    {ADDRESS[1]}, {ADDRESS[2]}
// //                  </p>
// //               </div>
// //             </div>

// //             {/* Right Column: Premium Contact Form */}
// //             <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 sm:p-12 backdrop-blur-sm shadow-2xl relative">
// //               <div className="absolute -top-10 -right-10 h-32 w-32 bg-gold/20 blur-3xl rounded-full pointer-events-none" />
              
// //               <h3 className="font-[family-name:var(--font-display)] text-2xl text-pearl mb-8">Register your interest</h3>
              
// //               <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
// //                 {/* Name Input */}
// //                 <div className="relative">
// //                   <input 
// //                     type="text" 
// //                     id="name"
// //                     name="name"
// //                     required
// //                     suppressHydrationWarning
// //                     placeholder=" "
// //                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
// //                   />
// //                   <label htmlFor="name" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
// //                     Full Name
// //                   </label>
// //                 </div>

// //                 {/* Phone Input */}
// //                 <div className="relative">
// //                   <input 
// //                     type="tel" 
// //                     id="phone"
// //                     name="phone"
// //                     required
// //                     suppressHydrationWarning
// //                     placeholder=" "
// //                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
// //                   />
// //                   <label htmlFor="phone" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
// //                     Phone Number
// //                   </label>
// //                 </div>

// //                 {/* Email Input */}
// //                 <div className="relative">
// //                   <input 
// //                     type="email" 
// //                     id="email"
// //                     name="email"
// //                     suppressHydrationWarning
// //                     placeholder=" "
// //                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
// //                   />
// //                   <label htmlFor="email" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
// //                     Email Address
// //                   </label>
// //                 </div>

// //                 {/* Message Input */}
// //                 <div className="relative mt-2">
// //                   <textarea 
// //                     id="message"
// //                     name="message"
// //                     rows={3}
// //                     suppressHydrationWarning
// //                     placeholder=" "
// //                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors resize-none"
// //                   />
// //                   <label htmlFor="message" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
// //                     Message (Optional)
// //                   </label>
// //                 </div>

// //                 <button 
// //                   type="submit"
// //                   suppressHydrationWarning
// //                   className="mt-6 w-full rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wider uppercase text-navy hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300"
// //                 >
// //                   Submit Enquiry
// //                 </button>
// //               </form>
// //             </div>
// //           </Reveal>
// //         </div>
// //       </section>

// //       {/* ---------------------------------------------------------- FOOTER */}
// //       <footer className="px-6 lg:px-10 py-16 border-t border-navy/10 bg-white">
// //         <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-10">
// //           <Logo scrolled={true} />
// //           <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-[14px] text-navy/60">
// //             <span className="flex items-center gap-3 hover:text-gold transition-colors">
// //               <MapPin className="h-4 w-4 text-gold" /> {ADDRESS[1]}
// //             </span>
// //             <span className="flex items-center gap-3 hover:text-gold transition-colors">
// //               <Phone className="h-4 w-4 text-gold" /> {PHONES.join(" / ")}
// //             </span>
// //           </div>
// //           <p className="text-[13px] text-navy/80 font-bold tracking-wide uppercase">
// //             © {new Date().getFullYear()} Constructed by SVT Developers & Constructions | Marketed by RRL Group <br/>
// //             <span className="text-gold font-semibold mt-1 block">Beyond Homes. A Lifestyle</span>
// //           </p>
// //         </div>
// //       </footer>

// //       {/* ---------------------------------------------------------- UNLOCK POPUP MODAL */}
// //       {isPopupOpen && (
// //         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
// //           {/* Backdrop */}
// //           <div 
// //             className="absolute inset-0 bg-navy/80 backdrop-blur-md" 
// //             onClick={() => setIsPopupOpen(false)} 
// //           />
          
// //           {/* Modal Content */}
// //           <div className="relative w-full max-w-md rounded-[2.5rem] bg-navy border border-gold/20 p-8 sm:p-10 shadow-2xl animate-in fade-in zoom-in duration-300">
// //             <button 
// //               onClick={() => setIsPopupOpen(false)} 
// //               className="absolute top-6 right-6 text-pearl/50 hover:text-pearl transition-colors"
// //             >
// //               <X className="h-6 w-6" />
// //             </button>
            
// //             <div className="mb-8">
// //               <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
// //                 <Lock className="h-5 w-5 text-gold" />
// //               </div>
// //               <h3 className="font-[family-name:var(--font-display)] text-2xl text-pearl mb-2">Unlock Floor Plans</h3>
// //               <p className="text-[14px] text-pearl/60">Enter your details to instantly view the premium 4BHK layouts.</p>
// //             </div>
            
// //             <form onSubmit={handleUnlockSubmit} className="flex flex-col gap-6">
// //               <div className="relative">
// //                 <input 
// //                   type="text" 
// //                   required 
// //                   suppressHydrationWarning 
// //                   placeholder=" " 
// //                   className="peer w-full bg-transparent border-b border-white/20 py-3 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors" 
// //                 />
// //                 <label className="absolute left-0 top-3 text-[14px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
// //                   Full Name
// //                 </label>
// //               </div>
              
// //               <div className="relative">
// //                 <input 
// //                   type="tel" 
// //                   required 
// //                   suppressHydrationWarning 
// //                   placeholder=" " 
// //                   className="peer w-full bg-transparent border-b border-white/20 py-3 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors" 
// //                 />
// //                 <label className="absolute left-0 top-3 text-[14px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
// //                   Phone Number
// //                 </label>
// //               </div>
              
// //               <button 
// //                 type="submit" 
// //                 className="mt-4 w-full rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wider uppercase text-navy hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
// //               >
// //                 Unlock Now
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </main>
// //   );
// // }

// // /* ------------------------------------------------------------------ */
// // /*  Small components                                                  */
// // /* ------------------------------------------------------------------ */

// // function Logo({ scrolled = true }: { scrolled?: boolean }) {
// //   return (
// //     <a href="#" className="flex items-center gap-4 group">
// //       <span className="relative flex h-10 w-10 items-end gap-[4px]">
// //         <span className="h-5 w-[8px] transition-all duration-500 group-hover:h-6" style={{ backgroundColor: BRONZE }} />
// //         <span className="h-7 w-[8px] bg-gold transition-all duration-500 group-hover:h-8" />
// //         <span className={`h-10 w-[8px] transition-colors duration-500 ${scrolled ? "bg-navy" : "bg-pearl"}`} />
// //       </span>
// //       <span className="leading-none">
// //         <span className={`block font-[family-name:var(--font-display)] text-xl font-medium tracking-wider transition-colors duration-500 ${scrolled ? "text-navy" : "text-pearl"}`}>CONFIDENT</span>
// //         <span className={`block text-[10px] font-bold tracking-[0.25em] transition-colors duration-500 mt-1 ${scrolled ? "text-navy/50" : "text-pearl/60"}`}>ATRIA</span>
// //       </span>
// //     </a>
// //   );
// // }

// // function OverviewPoint({
// //   icon: Icon,
// //   title,
// //   body,
// // }: {
// //   icon: typeof ShieldCheck;
// //   title: string;
// //   body: string;
// // }) {
// //   return (
// //     <div className="group border-t border-navy/10 pt-8 hover:border-gold transition-colors duration-500 relative">
// //       <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
// //       <Icon className="h-6 w-6 text-gold mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
// //       <h3 className="text-[18px] font-semibold text-navy mb-3">{title}</h3>
// //       <p className="text-[15px] leading-relaxed text-navy/60 font-light">{body}</p>
// //     </div>
// //   );
// // }

// "use client";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
// import {
//   Phone,
//   MapPin,
//   Menu,
//   X,
//   ArrowUpRight,
//   Sun,
//   Compass,
//   Building2,
//   GraduationCap,
//   Factory,
//   Milestone,
//   ShieldCheck,
//   Ruler,
//   Layers,
//   Home as HomeIcon,
//   Armchair,
//   Sofa,
//   UtensilsCrossed,
//   ChefHat,
//   Flame,
//   BedDouble,
//   Bath,
//   Car,
//   Users,
//   Shirt,
//   Wind,
//   TreePine,
//   Aperture,
//   Droplets,
//   Hammer,
//   Plug,
//   IndianRupee,
//   Key,
//   Coffee,
//   Waves,
//   Dumbbell,
//   Trophy,
//   Lock,
//   AlertCircle,
//   Camera,
//   Download,
//   FileText,
//   CheckCircle2,
// } from "lucide-react";

// const display = Fraunces({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   style: ["normal", "italic"],
//   variable: "--font-display",
// });

// const body = Manrope({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600"],
//   variable: "--font-body",
// });

// const mono = IBM_Plex_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-mono",
// });

// const BRONZE = "#8B6F3D";

// /* ------------------------------------------------------------------ */
// /*  Formspree config                                                   */
// /* ------------------------------------------------------------------ */
// // TODO: Replace with your real Formspree endpoint, e.g. https://formspree.io/f/abcdwxyz
// const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaqpnwq";

// /* ------------------------------------------------------------------ */
// /*  Assets                                                             */
// /* ------------------------------------------------------------------ */

// const HERO_IMAGE =
//   "https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-07-24%20at%205.11.12%20PM.jpeg";
// const RRL_LOGO = "https://ik.imagekit.io/j0xzq9pns/svt/logo.png";
// const CONFIDENT_ATRIA_LOGO =
//   "https://ik.imagekit.io/j0xzq9pns/svt/ChatGPT%20Image%20Jul%2025,%202026,%2012_41_19%20AM.png?updatedAt=1784920355583";
// const BROCHURE_URL =
//   "https://ik.imagekit.io/j0xzq9pns/svt/STRRPA-Approved-4-BHK-Residential-Villas-in-Confident-Atria-Gated-Community%20(8).pdf";

// const FLOOR_PLAN_IMAGES: { src: string; label: string }[] = [
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012_page-0001.jpg.jpeg", label: "Villa No. 12" },
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012A_page-0001.jpg.jpeg", label: "Villa No. 12A" },
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20124_page-0001.jpg%20(1).jpeg", label: "Villa No. 124" },
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20125_page-0001.jpg.jpeg", label: "Villa No. 125" },
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20181_page-0001.jpg.jpeg", label: "Villa No. 181" },
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20266_page-0001.jpg.jpeg", label: "Villa No. 266" },
// ];

// /* ------------------------------------------------------------------ */
// /*  Content                                                           */
// /* ------------------------------------------------------------------ */

// const PHONES = ["8494966966"];
// const ADDRESS = [
//   "Confident Atria",
//   "Sarjapura - Attibele Road",
//   "Bengaluru, Karnataka",
// ];

// const STATS = [
//   { label: "Configuration", value: "4 BHK", icon: HomeIcon },
//   { label: "Site Area", value: "1162 sqft", icon: Ruler },
//   { label: "Total Built-up", value: "2400.50 sqft", icon: Layers },
//   { label: "Availability", value: "12 Units Left", icon: AlertCircle },
// ];

// // Site-wise plot area table (from brochure)
// const SITE_AREAS: { site: string; area: string }[] = [
//   { site: "12", area: "1,162" },
//   { site: "12A", area: "1,162" },
//   { site: "124", area: "1,302" },
//   { site: "125", area: "1,285" },
//   { site: "181", area: "1,162" },
//   { site: "199", area: "1,346" },
//   { site: "202", area: "1,096" },
//   { site: "218", area: "1,200" },
//   { site: "220", area: "1,200" },
//   { site: "221", area: "1,200" },
//   { site: "256", area: "1,500" },
//   { site: "266", area: "1,200" },
// ];

// // Fully updated exact amenities from the PDF and Flyer
// const AMENITIES = [
//   {
//     icon: Coffee,
//     title: "Premium Clubhouse",
//     body: "A Family & Social hub featuring a premium clubhouse, banquet hall, and an outdoor amphitheater.",
//   },
//   {
//     icon: Waves,
//     title: "Large Swimming Pool",
//     body: "A pristine, large recreational swimming pool designed for daily relaxation and fitness.",
//   },
//   {
//     icon: Trophy,
//     title: "Sports & Courts",
//     body: "Tennis & basketball courts, dedicated indoor squash and badminton courts, and an indoor games room.",
//   },
//   {
//     icon: Dumbbell,
//     title: "Fitness & Tracks",
//     body: "Fully equipped gymnasium alongside dedicated jogging, strolling, and cycling tracks.",
//   },
//   {
//     icon: TreePine,
//     title: "Parks & Open Lawns",
//     body: "Beautiful flower gardens, landscaped open lawns, and a dedicated safe children's play area.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "24/7 Manned Security",
//     body: "Fully gated community with 24/7 manned security, extensive CCTV surveillance, and visitor parking.",
//   },
//   {
//     icon: Droplets,
//     title: "Eco-Friendly Infrastructure",
//     body: "Concrete internal roads, eco-friendly rainwater harvesting, and robust water storage systems.",
//   },
//   {
//     icon: Sun,
//     title: "Vaastu Compliant",
//     body: "Thoughtfully designed spaces ensuring 100% Vaastu compliance along with a dedicated meditation area.",
//   },
// ];

// type Room = { name: string; dim: string };

// function getRoomIcon(name: string) {
//   const n = name.toLowerCase();
//   if (n.includes("sitout")) return Armchair;
//   if (n.includes("living")) return Sofa;
//   if (n.includes("dining")) return UtensilsCrossed;
//   if (n.includes("kitchen")) return ChefHat;
//   if (n.includes("pooja")) return Flame;
//   if (n.includes("bed")) return BedDouble;
//   if (n.includes("toilet")) return Bath;
//   if (n.includes("parking")) return Car;
//   if (n.includes("family")) return Users;
//   if (n.includes("dress")) return Shirt;
//   if (n.includes("balcony")) return Wind;
//   if (n.includes("terrace")) return TreePine;
//   if (n.includes("sky")) return Aperture;
//   return HomeIcon;
// }

// const FLOORS: {
//   id: string;
//   label: string;
//   tag: string;
//   area: string;
//   rooms: Room[];
//   note: string;
// }[] = [
//   {
//     id: "ground",
//     label: "Ground Floor",
//     tag: "Arrival Level",
//     area: "936.80 sqft",
//     note: "Living, dining and a private bedroom open onto a landscaped car court.",
//     rooms: [
//       { name: "Sitout", dim: "15'6\" x 5'0\"" },
//       { name: "Living Area", dim: "13'0\" x 14'6\"" },
//       { name: "Dining Area", dim: "8'6\" x 14'0\"" },
//       { name: "Kitchen", dim: "11'0\" x 8'0\"" },
//       { name: "Pooja", dim: "3'2\" x 4'8\"" },
//       { name: "Bed Room", dim: "10'6\" x 16'0\"" },
//       { name: "Toilet", dim: "5'0\" x 8'0\"" },
//     ],
//   },
//   {
//     id: "first",
//     label: "First Floor",
//     tag: "Private Level",
//     area: "920.40 sqft",
//     note: "Two master suites with dressing rooms, framed by a shared family area and balcony.",
//     rooms: [
//       { name: "Master Bed Room", dim: "11'0\" x 16'0\"" },
//       { name: "Bed Room", dim: "10'6\" x 16'0\"" },
//       { name: "Family Area", dim: "8'6\" x 18'6\"" },
//       { name: "Dress Area", dim: "5'8\" x 8'0\"" },
//       { name: "Dress Area", dim: "7'8\" x 8'0\"" },
//       { name: "Balcony", dim: "4'8\" x 8'6\"" },
//       { name: "Toilet", dim: "5'0\" x 8'0\"" },
//       { name: "Toilet", dim: "5'0\" x 8'0\"" },
//     ],
//   },
//   {
//     id: "terrace",
//     label: "Terrace Floor",
//     tag: "Sky Level",
//     area: "543.30 sqft",
//     note: "A third master suite opens to an open terrace, sitout and skylight above the stair.",
//     rooms: [
//       { name: "Master Bed Room", dim: "11'0\" x 16'0\"" },
//       { name: "Sitout Area", dim: "8'6\" x 16'6\"" },
//       { name: "Dress Area", dim: "5'8\" x 8'0\"" },
//       { name: "Toilet", dim: "5'0\" x 8'0\"" },
//       { name: "Open Terrace", dim: "Open to sky" },
//       { name: "Sky Light", dim: "Above staircase" },
//     ],
//   },
// ];

// const SPECS: { group: string; rows: [string, string][] }[] = [
//   {
//     group: "Approvals & Layout",
//     rows: [
//       ["Layout Approval", "RERA & BMRDA Approved"],
//       ["RERA No.", "PRM/KA/RERA/1251/308/PR/130724/007003"],
//       ["Layout Extent", "25-Acre Gated Community"],
//       ["Layout Name", "Confident Atria"],
//     ],
//   },
//   {
//     group: "Structure & Envelope",
//     rows: [
//       ["Building Structure", "RCC Column Frame"],
//       ["Walls", "6\" Solid Block"],
//       ["Main Door", "Teak Wood"],
//       ["Internal Doors", "Teak Wood Frame, Ready-made Flush Doors"],
//       ["Windows", "3-Track UPVC, Wooden Pattern, Best Quality"],
//     ],
//   },
//   {
//     group: "Interiors & Finishes",
//     rows: [
//       ["Flooring - Bedrooms & Living", "Vitrified Tiles, 4' x 6'"],
//       ["Flooring - Toilet Walls", "Glazed Tiles, 2' x 4'"],
//       ["Flooring - Staircase & Sitout", "Granite"],
//       ["Painting - Internal", "Asian Paints Tractor Emulsion"],
//       ["Painting - External", "Asian Paints Ultima Protek, Texture Finish"],
//     ],
//   },
//   {
//     group: "Electrical & Plumbing",
//     rows: [
//       ["Electrical", "Polycab / V-Guard / Havells"],
//       ["Sanitary - Internal Piping", "Supreme PVC & UPVC"],
//       ["Sanitary - Fittings", "Jaquar"],
//       ["Sanitary - Flush Tanks", "Grohe"],
//     ],
//   },
//   {
//     group: "Utilities & Boundary",
//     rows: [
//       ["Underground Sump", "8000 Ltr, RCC Structure"],
//       ["Overhead Tank", "1000 Ltr, 3-Layer Fibre"],
//       ["Compound Wall", "Individual Compound Wall Provided"],
//     ],
//   },
// ];

// const LANDMARKS: {
//   category: string;
//   icon: typeof GraduationCap;
//   places: string[];
// }[] = [
//   {
//     category: "Education",
//     icon: GraduationCap,
//     places: ["Azim Premji University", "TISB School", "Indus School", "Global Indian International School"],
//   },
//   {
//     category: "Business & Industry",
//     icon: Factory,
//     places: ["Infosys Campus", "Exide Factory", "SVT RMC Plant"],
//   },
//   {
//     category: "Civic & Everyday",
//     icon: ShieldCheck,
//     places: ["Police Station", "Sompura Gate"],
//   },
//   {
//     category: "Connectivity",
//     icon: Milestone,
//     places: ["Sarjapura Circle", "Attibele Circle", "Whitefield Corridor", "Chandapura Road"],
//   },
// ];

// /* ------------------------------------------------------------------ */
// /*  Scroll-reveal helper                                              */
// /* ------------------------------------------------------------------ */

// function Reveal({
//   children,
//   delay = 0,
//   className = "",
// }: {
//   children: React.ReactNode;
//   delay?: number;
//   className?: string;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           io.unobserve(el);
//         }
//       },
//       { threshold: 0.15 }
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       style={{ transitionDelay: `${delay}ms` }}
//       className={`transition-all duration-700 ease-out ${
//         visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//       } ${className}`}
//     >
//       {children}
//     </div>
//   );
// }

// /* ------------------------------------------------------------------ */

// type FormKey = "top" | "enquire" | "unlock";
// type FormStatus = "idle" | "loading" | "success" | "error";

// export default function Page() {
//   const [floorTab, setFloorTab] = useState("ground");
//   const [navOpen, setNavOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [heroIn, setHeroIn] = useState(false);

//   // Unified unlock state: gates Floor Plans + Brochure viewer/download across the site.
//   // Set to true the moment ANY contact form (top form, enquire form, or popup) is submitted.
//   const [isUnlocked, setIsUnlocked] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const [formStatus, setFormStatus] = useState<Record<FormKey, FormStatus>>({
//     top: "idle",
//     enquire: "idle",
//     unlock: "idle",
//   });

//   const activeFloor = FLOORS.find((f) => f.id === floorTab)!;

//   useEffect(() => {
//     const t = setTimeout(() => setHeroIn(true), 80);
//     const onScroll = () => {
//       setScrolled(window.scrollY > 24);
//       const h = document.documentElement;
//       const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
//       setProgress(Math.min(1, Math.max(0, p)));
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     document.title = "Confident Atria by RRL Group";
//     return () => {
//       clearTimeout(t);
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   // Generic Formspree submit handler shared by all contact forms on the page.
//   const submitToFormspree = async (
//     e: React.FormEvent<HTMLFormElement>,
//     key: FormKey
//   ) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     setFormStatus((s) => ({ ...s, [key]: "loading" }));
//     try {
//       const data = new FormData(form);
//       const res = await fetch(FORMSPREE_ENDPOINT, {
//         method: "POST",
//         body: data,
//         headers: { Accept: "application/json" },
//       });
//       if (res.ok) {
//         setFormStatus((s) => ({ ...s, [key]: "success" }));
//         setIsUnlocked(true);
//         if (key === "unlock") setIsPopupOpen(false);
//         form.reset();
//       } else {
//         setFormStatus((s) => ({ ...s, [key]: "error" }));
//       }
//     } catch {
//       setFormStatus((s) => ({ ...s, [key]: "error" }));
//     }
//   };

//   return (
//     <main
//       className={`${display.variable} ${body.variable} ${mono.variable} bg-[#FAFAFA] text-navy font-[family-name:var(--font-body)] selection:bg-gold selection:text-navy scroll-smooth`}
//     >
//       <style jsx global>{`
//         @keyframes floatSlow {
//           0%, 100% { transform: translateY(0) translateX(0); }
//           50% { transform: translateY(-18px) translateX(10px); }
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(14px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-float { animation: floatSlow 9s ease-in-out infinite; }
//         .animate-float-slow { animation: floatSlow 13s ease-in-out infinite; }
//         .fade-in-up { animation: fadeInUp 0.5s ease-out both; }
        
//         :root {
//           --navy: #0B1E36;
//           --gold: #D4AF37;
//           --pearl: #FFFFFF;
//         }
//       `}</style>

//       {/* ---------------------------------------------------------- SCROLL PROGRESS */}
//       <div className="fixed top-0 left-0 h-[2px] bg-gold z-[60] transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />

//       {/* ---------------------------------------------------------- NAV */}
//       <header
//         className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
//           scrolled ? "border-navy/10 bg-pearl/95 backdrop-blur-md shadow-sm" : "border-transparent bg-transparent"
//         }`}
//       >
//         <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20 sm:h-24"}`}>
//           <Logo scrolled={scrolled} />
//           <nav className={`hidden md:flex items-center gap-10 text-[13px] tracking-[0.1em] uppercase transition-colors duration-300 ${
//             scrolled ? "text-navy/70" : "text-pearl/80"
//           }`}>
//             {["Overview", "Residences", "Specifications", "Location", "Enquire"].map((item) => (
//               <a key={item} href={`#${item.toLowerCase()}`} className="relative group py-1 hover:text-gold transition-colors">
//                 {item}
//               </a>
//             ))}
//           </nav>
//           <a
//             href={`tel:+91${PHONES[0]}`}
//             className={`hidden md:inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-[13px] font-medium tracking-wide transition-all duration-300 ${
//               scrolled 
//                 ? "border-navy/20 text-navy hover:bg-navy hover:text-pearl" 
//                 : "border-pearl/40 text-pearl hover:bg-pearl hover:text-navy"
//             }`}
//           >
//             <Phone className="h-3.5 w-3.5" /> Call Us
//           </a>
//           <div className="flex items-center gap-3 md:hidden">
//             <a
//               href={`tel:+91${PHONES[0]}`}
//               aria-label="Call us"
//               className={`inline-flex items-center justify-center h-9 w-9 rounded-full border transition-colors duration-300 ${
//                 scrolled ? "border-navy/20 text-navy" : "border-pearl/40 text-pearl"
//               }`}
//             >
//               <Phone className="h-4 w-4" />
//             </a>
//             <button suppressHydrationWarning onClick={() => setNavOpen((v) => !v)} className={`transition-colors duration-300 ${scrolled ? "text-navy" : "text-pearl"}`} aria-label="Toggle menu">
//               {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
        
//         {/* Mobile Nav */}
//         {navOpen && (
//           <div className="md:hidden border-t border-navy/10 bg-pearl px-6 py-6 flex flex-col gap-5 text-sm tracking-wide uppercase text-navy/80 shadow-2xl">
//             {["Overview", "Residences", "Brochure", "Specifications", "Location", "Enquire"].map((item) => (
//               <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setNavOpen(false)}>
//                 {item}
//               </a>
//             ))}
//           </div>
//         )}
//       </header>

//       {/* ---------------------------------------------------------- HERO */}
//       <section className="relative overflow-hidden bg-navy text-pearl pt-28 sm:pt-32 pb-16 px-6 lg:px-10">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute -top-32 right-[-8%] h-[560px] w-[560px] rounded-full bg-gold/[0.08] blur-[100px] animate-float" />
//           <div className="absolute bottom-[-10%] left-[-8%] h-[420px] w-[420px] rounded-full blur-[90px] animate-float-slow bg-gold/[0.05]" />
//           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
//         </div>

//         <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center min-h-[75vh]">
//           {/* Left Hero Content */}
//           <div className="pt-6 sm:pt-10">
//             <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
//               <span className="h-px w-8 bg-gold/60" />
//               <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gold/90">Confident Atria by RRL Group</span>
//             </div>
            
//             <h1 className={`font-[family-name:var(--font-display)] italic font-light text-[clamp(2.2rem,4.5vw,4.2rem)] leading-[1.1] text-pearl transition-all duration-700 delay-100 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
//               Own the home <br />
//               <span className="not-italic font-medium text-gold">your family deserves.</span>
//             </h1>
            
//             <p className={`mt-6 max-w-lg text-[16px] font-light leading-relaxed text-pearl/70 transition-all duration-700 delay-200 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
//               Premium 4 BHK villa living in a sprawling 25-acre gated community. Sarjapura – Attibele Road, Bengaluru. Starts at just ₹2 CR* onwards.
//             </p>

//             {/* HIGHLIGHTED BADGES — only RRL & Confident Atria are emphasized */}
//             <Reveal delay={250} className={`mt-8 flex flex-wrap items-center gap-3 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
//               <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-medium tracking-[0.1em] uppercase text-pearl/80 backdrop-blur-md">
//                 <Building2 className="h-4 w-4 text-pearl/60" /> Constructed by SVT Developers & Constructions
//               </div>
//               <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-[11px] font-bold tracking-[0.1em] uppercase text-gold backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
//                 <Milestone className="h-4 w-4" /> Marketed by RRL Group
//               </div>
//               <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-bold tracking-[0.1em] uppercase text-white backdrop-blur-md">
//                 <Key className="h-4 w-4 text-gold" /> Possession in 4 Months
//               </div>
//             </Reveal>

//             <div className={`mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-5 transition-all duration-700 delay-300 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
//               <a
//                 href="#enquire"
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-[13px] font-semibold tracking-wide text-navy hover:bg-pearl transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
//               >
//                 Book Your Site Visit Today! <ArrowUpRight className="h-4 w-4" />
//               </a>
//               <a
//                 href="#residences"
//                 className="inline-flex items-center justify-center gap-2 rounded-full border border-pearl/30 px-8 py-4 text-[13px] tracking-wide text-pearl hover:bg-pearl/10 transition-colors"
//               >
//                 View Floor Plans
//               </a>
//             </div>
//           </div>

//           {/* Right Hero Content: Villa Image & Stats */}
//           <div className="w-full flex flex-col gap-6">
//             <Reveal delay={200} className={`relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 transition-all duration-1000 ${heroIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
//               <Image 
//                 src={HERO_IMAGE} 
//                 alt="Confident Atria Premium Villa Exterior" 
//                 fill 
//                 priority
//                 className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
//               <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-navy/60 backdrop-blur-md border border-white/20 px-4 py-1.5">
//                   <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">Only 12 Villas Available</span>
//                 </div>
//               </div>
//             </Reveal>

//             <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 transition-all duration-700 delay-400 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
//               {STATS.map(({ label, value, icon: Icon }) => (
//                 <div key={label} className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm flex flex-col gap-3 hover:bg-white/10 transition-colors">
//                   <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center">
//                     <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
//                   </div>
//                   <div>
//                     <p className="font-[family-name:var(--font-mono)] text-[15px] font-medium text-pearl leading-tight">{value}</p>
//                     <p className="text-[10px] tracking-[0.05em] uppercase text-pearl/50 mt-0.5">{label}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- QUICK ENQUIRY (TOP CONTACT FORM) */}
//       <section id="quick-enquiry" className="relative px-6 lg:px-10 py-16 sm:py-20 bg-[#F8F9FA] border-b border-navy/5">
//         <div className="mx-auto max-w-4xl">
//           <Reveal className="text-center mb-10">
//             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-3">Get Started</p>
//             <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy">
//               Talk to us about <span className="text-gold italic">Confident Atria</span>
//             </h2>
//             <p className="mt-3 text-[14px] sm:text-[15px] text-navy/60 max-w-md mx-auto">
//               Share your details and our team will reach out — plus instantly unlock the brochure & floor plans.
//             </p>
//           </Reveal>

//           <Reveal delay={100} className="bg-white rounded-[2rem] border border-navy/10 shadow-lg p-6 sm:p-10">
//             <form onSubmit={(e) => submitToFormspree(e, "top")} className="grid sm:grid-cols-2 gap-6">
//               <input type="hidden" name="_subject" value="New enquiry — Confident Atria (Quick Form)" />
//               <div className="relative">
//                 <input type="text" id="top-name" name="name" required suppressHydrationWarning placeholder=" " className="peer w-full bg-transparent border-b border-navy/20 py-3 text-[15px] text-navy focus:outline-none focus:border-gold transition-colors" />
//                 <label htmlFor="top-name" className="absolute left-0 top-3 text-[14px] text-navy/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">Full Name</label>
//               </div>
//               <div className="relative">
//                 <input type="tel" id="top-phone" name="phone" required suppressHydrationWarning placeholder=" " className="peer w-full bg-transparent border-b border-navy/20 py-3 text-[15px] text-navy focus:outline-none focus:border-gold transition-colors" />
//                 <label htmlFor="top-phone" className="absolute left-0 top-3 text-[14px] text-navy/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">Phone Number</label>
//               </div>
//               <div className="relative sm:col-span-2">
//                 <input type="email" id="top-email" name="email" suppressHydrationWarning placeholder=" " className="peer w-full bg-transparent border-b border-navy/20 py-3 text-[15px] text-navy focus:outline-none focus:border-gold transition-colors" />
//                 <label htmlFor="top-email" className="absolute left-0 top-3 text-[14px] text-navy/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">Email Address (Optional)</label>
//               </div>

//               <div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
//                 <button
//                   type="submit"
//                   disabled={formStatus.top === "loading"}
//                   suppressHydrationWarning
//                   className="w-full sm:w-auto flex-1 rounded-full bg-gold px-8 py-4 text-[13px] font-semibold tracking-wider uppercase text-navy hover:bg-navy hover:text-pearl transition-all duration-300 disabled:opacity-60"
//                 >
//                   {formStatus.top === "loading" ? "Submitting..." : "Get Details & Unlock Brochure"}
//                 </button>
//                 {formStatus.top === "success" && (
//                   <a
//                     href={BROCHURE_URL}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gold text-gold px-8 py-4 text-[13px] font-semibold tracking-wider uppercase hover:bg-gold hover:text-navy transition-all duration-300"
//                   >
//                     <Download className="h-4 w-4" /> Download Brochure
//                   </a>
//                 )}
//               </div>
//               {formStatus.top === "success" && (
//                 <p className="sm:col-span-2 flex items-center gap-2 text-[13px] text-green-700">
//                   <CheckCircle2 className="h-4 w-4" /> Thank you! Your details were received — floor plans & brochure are now unlocked below.
//                 </p>
//               )}
//               {formStatus.top === "error" && (
//                 <p className="sm:col-span-2 text-[13px] text-red-600">
//                   Something went wrong. Please try again or call us directly at +91 {PHONES[0]}.
//                 </p>
//               )}
//             </form>
//           </Reveal>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- OVERVIEW (WITH ENTRANCE IMAGE) */}
//       <section id="overview" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-white">
//         <div className="mx-auto max-w-7xl">
//           <div className="grid lg:grid-cols-12 gap-16 items-start">
//             <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
//               <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Overview</p>
//               <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy mb-8">
//                 Type 01 — a villa built in three acts
//               </h2>
              
//               {/* Project Entrance Image */}
//               <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-navy/10 group">
//                 <Image 
//                   src="https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-07-18%20at%205.57.47%20PM.jpeg" 
//                   alt="Confident Atria Entrance" 
//                   fill 
//                   className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
//                   <p className="text-sm font-medium tracking-wider uppercase drop-shadow-md">Confident Atria</p>
//                   <p className="text-xs text-white/80 font-light mt-1">Project Entrance View</p>
//                 </div>
//               </div>
//             </Reveal>

//             <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10 lg:pl-10">
//               <Reveal delay={100}>
//                 <OverviewPoint icon={ShieldCheck} title="RERA & BMRDA Approved" body="A 25-acre gated layout at Confident Atria, fully legally cleared with RERA No. PRM/KA/RERA/1251/308/PR/130724/007003." />
//               </Reveal>
//               <Reveal delay={200}>
//                 <OverviewPoint icon={Building2} title="Column-Frame Structure" body="RCC column framing and 6-inch solid block walls, finished with teak wood doors and 3-track UPVC windows." />
//               </Reveal>
//               <Reveal delay={300}>
//                 <OverviewPoint icon={Compass} title="East-Facing, 1162 sqft" body="A 1162 sqft East-facing site carries 2400.50 sqft of built-up area across ground, first and terrace levels." />
//               </Reveal>
//               <Reveal delay={400}>
//                 <OverviewPoint icon={IndianRupee} title="Premium Investment" body="Starting at 2 Cr*, Villa 12 represents a prime opportunity within one of Bengaluru's fastest-growing corridors." />
//               </Reveal>
//               <Reveal delay={500} className="sm:col-span-2">
//                 <div className="group border-t border-navy/10 pt-8 hover:border-gold transition-colors duration-500 relative">
//                   <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
//                   <Key className="h-6 w-6 text-gold mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
//                   <h3 className="text-[18px] font-semibold text-navy mb-3">Ready to Move In Soon</h3>
//                   <p className="text-[15px] leading-relaxed text-navy/60 font-light">Fully compliant, legally cleared project — buy with complete confidence. Get possession in just 4 months from the date of booking — no long waiting periods.</p>
//                 </div>
//               </Reveal>
//             </div>
//           </div>
//         </div>
//       </section>



//       {/* ---------------------------------------------------------- AMENITIES */}
//       <section className="relative px-6 lg:px-10 py-24 sm:py-32 bg-white border-y border-navy/5">
//         <div className="mx-auto max-w-7xl">
//           <Reveal className="text-center max-w-2xl mx-auto mb-20">
//             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Living Here</p>
//             <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy">
//               World-Class Amenities for Every Lifestyle
//             </h2>
//           </Reveal>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {AMENITIES.map((a, i) => (
//               <Reveal key={a.title} delay={i * 100}>
//                 <div className="group h-full rounded-2xl bg-[#F8F9FA] p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gold/30 hover:-translate-y-2">
//                   <div className="h-14 w-14 rounded-full flex items-center justify-center mb-6 bg-white group-hover:bg-gold transition-colors duration-500">
//                     <a.icon className="h-6 w-6 text-navy group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
//                   </div>
//                   <h3 className="text-[17px] font-semibold text-navy mb-3">{a.title}</h3>
//                   <p className="text-[14px] leading-relaxed text-navy/60">{a.body}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- RESIDENCES / FLOOR PLANS */}
//       <section id="residences" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-[#F8F9FA]">
//         <div className="mx-auto max-w-7xl">
//           <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
//             <div>
//               <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Residences</p>
//               <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy max-w-lg">Six villa layouts, one address</h2>
//             </div>
//             <p className="max-w-sm text-[15px] leading-relaxed text-navy/60">
//               Villas 12, 12A, 124, 125, 181 and 266 — each thoughtfully planned across ground,
//               first and terrace levels. Submit your details to view every floor plan.
//             </p>
//           </Reveal>

//           {/* GATED FLOOR PLAN IMAGES — all 6 villas, images only, same reveal flow as brochure */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {FLOOR_PLAN_IMAGES.map((img, idx) => (
//               <Reveal key={img.src} delay={idx * 80} className="rounded-3xl overflow-hidden border border-navy/10 shadow-lg bg-white aspect-[3/4] relative group">
//                 <Image
//                   src={img.src}
//                   alt={img.label}
//                   fill
//                   className={`object-contain bg-white p-2 transition-all duration-700 ease-out ${!isUnlocked ? "blur-xl scale-110" : "group-hover:scale-105"}`}
//                 />

//                 {!isUnlocked && (
//                   <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex flex-col items-center justify-center z-10">
//                     <div className="h-14 w-14 rounded-full bg-navy/5 flex items-center justify-center mb-4 border border-white/40 shadow-sm">
//                       <Lock className="h-5 w-5 text-navy/70" />
//                     </div>
//                     <button
//                       onClick={() => setIsPopupOpen(true)}
//                       suppressHydrationWarning
//                       className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[13px] font-semibold tracking-wide text-navy hover:bg-navy hover:text-pearl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
//                     >
//                       Unlock to View
//                     </button>
//                   </div>
//                 )}
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- BROCHURE VIEWER */}
//       <section id="brochure" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-white">
//         <div className="mx-auto max-w-5xl text-center">
//           <Reveal>
//             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Brochure</p>
//             <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy mb-6">
//               Explore the full <span className="text-gold italic">Confident Atria</span> brochure
//             </h2>
//             <p className="text-[15px] text-navy/60 max-w-xl mx-auto mb-10">
//               Complete details on pricing, floor plans, specifications and amenities — viewable and downloadable in one document.
//             </p>
//           </Reveal>

//           <Reveal delay={100} className="relative rounded-3xl overflow-hidden border border-navy/10 shadow-xl bg-[#F8F9FA] aspect-[3/4] sm:aspect-[16/9] group">
//             <iframe
//               src={`${BROCHURE_URL}#toolbar=0`}
//               title="Confident Atria Brochure"
//               className={`w-full h-full transition-all duration-700 ${!isUnlocked ? "blur-xl scale-110 pointer-events-none" : ""}`}
//             />

//             {!isUnlocked ? (
//               <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex flex-col items-center justify-center z-10">
//                 <div className="h-16 w-16 rounded-full bg-navy/5 flex items-center justify-center mb-5 border border-white/40 shadow-sm">
//                   <Lock className="h-6 w-6 text-navy/70" />
//                 </div>
//                 <button
//                   onClick={() => setIsPopupOpen(true)}
//                   suppressHydrationWarning
//                   className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wide text-navy hover:bg-navy hover:text-pearl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
//                 >
//                   <FileText className="h-4 w-4" /> Unlock Brochure
//                 </button>
//               </div>
//             ) : (
//               <a
//                 href={BROCHURE_URL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="absolute bottom-6 right-6 inline-flex items-center gap-2.5 rounded-full bg-navy px-6 py-3.5 text-[13px] font-semibold tracking-wide text-pearl hover:bg-gold hover:text-navy hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 z-10"
//               >
//                 <Download className="h-4 w-4" /> Download Brochure
//               </a>
//             )}
//           </Reveal>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- SITE-WISE AREA TABLE */}
//       <section className="relative px-6 lg:px-10 py-20 sm:py-24 bg-[#F8F9FA] border-y border-navy/5">
//         <div className="mx-auto max-w-5xl">
//           <Reveal className="mb-10 text-center">
//             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Available Units</p>
//             <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy">
//               Villa Dimensions — Site-wise Area
//             </h2>
//           </Reveal>
//           <Reveal delay={100} className="overflow-x-auto rounded-3xl border border-navy/10 bg-white shadow-sm">
//             <table className="w-full min-w-[420px] text-[14px]">
//               <thead>
//                 <tr className="border-b border-navy/10 bg-[#F8F9FA]">
//                   <th className="text-left px-6 py-4 font-semibold text-navy tracking-wide">Site No.</th>
//                   <th className="text-right px-6 py-4 font-semibold text-navy tracking-wide">Area (Sq.ft)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {SITE_AREAS.map((row, i) => (
//                   <tr key={row.site} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}>
//                     <td className="px-6 py-3.5 text-navy/80 border-t border-navy/5">{row.site}</td>
//                     <td className="px-6 py-3.5 text-right text-navy font-medium border-t border-navy/5">{row.area}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </Reveal>
//           <p className="mt-5 text-center text-[13px] text-navy/50">
//             All villas are 4 BHK · Total Built-Up Area: ~2,400 Sq.ft · Site areas vary by plot
//           </p>
//         </div>
//       </section>
      
//       {/* ---------------------------------------------------------- SPECIFICATIONS */}
//       <section id="specifications" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-navy text-pearl">
//         <div className="mx-auto max-w-7xl">
//           <Reveal className="mb-16 text-center max-w-2xl mx-auto">
//             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Specifications</p>
//             <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-pearl">Built with material honesty</h2>
//           </Reveal>

//           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//             {SPECS.map((group, gi) => (
//               <Reveal key={group.group} delay={gi * 100} className="bg-white/5 rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-colors duration-500">
//                 <h3 className="font-[family-name:var(--font-display)] italic text-2xl text-gold mb-8">{group.group}</h3>
//                 <dl className="divide-y divide-white/10">
//                   {group.rows.map(([k, v]) => (
//                     <div key={k} className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-6 py-4 text-[15px]">
//                       <dt className="text-pearl/60 font-light">{k}</dt>
//                       <dd className="text-left sm:text-right text-pearl font-medium">{v}</dd>
//                     </div>
//                   ))}
//                 </dl>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- LOCATION */}
//       <section id="location" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-white overflow-hidden">
//         <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
//           <Reveal>
//             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Prime Location</p>
//             <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy mb-6">
//               Set at the centre of Sarjapura Attibele Road
//             </h2>
//             <p className="text-[15px] leading-relaxed text-navy/60 mb-10 max-w-lg">
//               <span className="text-gold italic font-medium">Confident Atria</span> sits in <strong className="text-navy font-semibold">one of Bengaluru's fastest-growing residential corridors with high appreciation</strong>. Excellent Connectivity to Chandapura Road, Sarjapura Circle, Attibele Circle & Whitefield Corridor.
//             </p>

//             {/* Address Block */}
//             <Reveal delay={50} className="mb-12 p-6 rounded-2xl bg-[#F8F9FA] border border-navy/5 inline-block w-full max-w-lg hover:border-gold/30 transition-colors duration-300">
//               <div className="flex items-start gap-4">
//                 <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
//                 <div>
//                   <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-navy/80 mb-2">Site Address</p>
//                   <p className="text-[15px] leading-relaxed text-navy/70">
//                     <span className="text-gold font-bold">Confident Atria</span><br />
//                     Constructed by SVT Developers & Constructions | Marketed by <span className="text-gold font-semibold">RRL Group</span><br />
//                     {ADDRESS[1]}<br />
//                     {ADDRESS[2]}
//                   </p>
//                 </div>
//               </div>
//             </Reveal>

//             <div className="grid sm:grid-cols-2 gap-10">
//               {LANDMARKS.map(({ category, icon: Icon, places }, i) => (
//                 <Reveal key={category} delay={i * 100}>
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
//                       <Icon className="h-4 w-4 text-gold" strokeWidth={2} />
//                     </div>
//                     <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-navy/80">{category}</p>
//                   </div>
//                   <ul className="space-y-2 border-l-2 border-navy/5 pl-4 ml-5">
//                     {places.map((p) => (
//                       <li key={p} className="text-[14px] text-navy/70 relative before:absolute before:-left-[21px] before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold">{p}</li>
//                     ))}
//                   </ul>
//                 </Reveal>
//               ))}
//             </div>
//           </Reveal>

//           {/* Interactive Google Map & Link */}
//           <Reveal delay={200} className="relative h-full min-h-[400px] sm:min-h-[500px] w-full rounded-3xl overflow-hidden border border-navy/10 shadow-xl lg:sticky lg:top-32 group">
//             {/* Embedded Live Map */}
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.681177651084!2d77.73356061327117!3d12.805374665510427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ef338f9038d%3A0xc3fdeea0b15b67bc!2sSarjapura%20-%20Attibele%20Rd%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen={true}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="absolute inset-0 grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
//             />
            
//             {/* Floating "Get Directions" Link Button */}
//             <a
//               href="https://maps.google.com/?q=Confident+Aspire,Sarjapura+Attibele+Road,Burgunte+Village,Bengaluru,Karnataka+562107"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2.5 rounded-full bg-navy px-5 sm:px-6 py-3 sm:py-3.5 text-[12px] sm:text-[13px] font-semibold tracking-wide text-pearl hover:bg-gold hover:text-navy hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 z-10"
//             >
//               <MapPin className="h-4 w-4" /> Open in Google Maps
//             </a>
//           </Reveal>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- ENQUIRE */}
//       <section id="enquire" className="relative py-24 sm:py-32 bg-navy text-pearl overflow-hidden">
//         {/* Full width background effects */}
//         <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_right,_rgba(212,175,55,0.15)_0%,_transparent_50%)]" />
//         <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

//         <div className="mx-auto max-w-7xl px-6 lg:px-10">
//           <Reveal className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
//             {/* Left Column: Context & Contact Info */}
//             <div className="flex flex-col justify-center h-full">
//               <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-6">Enquire</p>
//               <h2 className="font-[family-name:var(--font-display)] italic text-4xl sm:text-5xl text-pearl leading-tight mb-10">
//                 Only 12 premium villas remain at <span className="not-italic text-gold">Confident Atria</span>.
//               </h2>
              
//               <div className="flex flex-wrap items-center gap-4 mb-12">
//                 {PHONES.map((p) => (
//                   <a
//                     key={p}
//                     href={`tel:+91${p}`}
//                     className="relative inline-flex items-center gap-3 rounded-full border border-gold/30 px-8 py-4 text-[15px] font-medium tracking-wide text-pearl hover:bg-gold hover:text-navy hover:border-gold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
//                   >
//                     <Phone className="h-4 w-4 relative" /> <span className="relative">{p}</span>
//                   </a>
//                 ))}
//               </div>

//               <div className="pt-10 border-t border-white/10">
//                  <p className="text-[14px] text-pearl/60 font-light leading-relaxed">
//                    Constructed by SVT Developers & Constructions | Marketed by <span className="text-gold font-bold uppercase tracking-wide">RRL Group</span> <br />
//                    {ADDRESS[1]}, {ADDRESS[2]}
//                  </p>
//               </div>
//             </div>

//             {/* Right Column: Premium Contact Form */}
//             <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 sm:p-12 backdrop-blur-sm shadow-2xl relative">
//               <div className="absolute -top-10 -right-10 h-32 w-32 bg-gold/20 blur-3xl rounded-full pointer-events-none" />
              
//               <h3 className="font-[family-name:var(--font-display)] text-2xl text-pearl mb-8">Register your interest</h3>
              
//               <form className="flex flex-col gap-6" onSubmit={(e) => submitToFormspree(e, "enquire")}>
//                 <input type="hidden" name="_subject" value="New enquiry — Confident Atria (Main Form)" />

//                 {/* Name Input */}
//                 <div className="relative">
//                   <input 
//                     type="text" 
//                     id="name"
//                     name="name"
//                     required
//                     suppressHydrationWarning
//                     placeholder=" "
//                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
//                   />
//                   <label htmlFor="name" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
//                     Full Name
//                   </label>
//                 </div>

//                 {/* Phone Input */}
//                 <div className="relative">
//                   <input 
//                     type="tel" 
//                     id="phone"
//                     name="phone"
//                     required
//                     suppressHydrationWarning
//                     placeholder=" "
//                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
//                   />
//                   <label htmlFor="phone" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
//                     Phone Number
//                   </label>
//                 </div>

//                 {/* Email Input */}
//                 <div className="relative">
//                   <input 
//                     type="email" 
//                     id="email"
//                     name="email"
//                     suppressHydrationWarning
//                     placeholder=" "
//                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
//                   />
//                   <label htmlFor="email" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
//                     Email Address
//                   </label>
//                 </div>

//                 {/* Message Input */}
//                 <div className="relative mt-2">
//                   <textarea 
//                     id="message"
//                     name="message"
//                     rows={3}
//                     suppressHydrationWarning
//                     placeholder=" "
//                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors resize-none"
//                   />
//                   <label htmlFor="message" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
//                     Message (Optional)
//                   </label>
//                 </div>

//                 <button 
//                   type="submit"
//                   disabled={formStatus.enquire === "loading"}
//                   suppressHydrationWarning
//                   className="mt-6 w-full rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wider uppercase text-navy hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-60"
//                 >
//                   {formStatus.enquire === "loading" ? "Submitting..." : "Submit Enquiry"}
//                 </button>

//                 {formStatus.enquire === "success" && (
//                   <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
//                     <p className="flex items-center gap-2 text-[13px] text-green-400">
//                       <CheckCircle2 className="h-4 w-4" /> Thank you! We'll be in touch shortly.
//                     </p>
//                     <a
//                       href={BROCHURE_URL}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center justify-center gap-2 rounded-full border border-gold text-gold px-6 py-3 text-[12px] font-semibold tracking-wider uppercase hover:bg-gold hover:text-navy transition-all duration-300"
//                     >
//                       <Download className="h-4 w-4" /> Download Brochure
//                     </a>
//                   </div>
//                 )}
//                 {formStatus.enquire === "error" && (
//                   <p className="text-[13px] text-red-400">Something went wrong. Please try again or call us directly.</p>
//                 )}
//               </form>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- FOOTER */}
//       <footer className="px-6 lg:px-10 py-16 border-t border-navy/10 bg-white">
//         <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-10">
//           <Logo scrolled={true} variant="footer" />
//           <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-[14px] text-navy/60">
//             <span className="flex items-center gap-3 hover:text-gold transition-colors">
//               <MapPin className="h-4 w-4 text-gold" /> {ADDRESS[1]}
//             </span>
//             <span className="flex items-center gap-3 hover:text-gold transition-colors">
//               <Phone className="h-4 w-4 text-gold" /> {PHONES.join(" / ")}
//             </span>
//           </div>
//           <p className="text-[13px] text-navy/70 tracking-wide">
//             Constructed by SVT Developers & Constructions | Marketed by <span className="text-gold font-bold uppercase">RRL Group</span> <br/>
//             <span className="text-navy font-bold uppercase mt-1 block">© {new Date().getFullYear()} <span className="text-gold">Confident Atria</span></span>
//             <span className="text-gold font-semibold mt-1 block">Beyond Homes. A Lifestyle</span>
//           </p>
//         </div>
//       </footer>

//       {/* ---------------------------------------------------------- UNLOCK POPUP MODAL */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//           {/* Backdrop */}
//           <div 
//             className="absolute inset-0 bg-navy/80 backdrop-blur-md" 
//             onClick={() => setIsPopupOpen(false)} 
//           />
          
//           {/* Modal Content */}
//           <div className="relative w-full max-w-md rounded-[2.5rem] bg-navy border border-gold/20 p-8 sm:p-10 shadow-2xl animate-in fade-in zoom-in duration-300">
//             <button 
//               onClick={() => setIsPopupOpen(false)} 
//               className="absolute top-6 right-6 text-pearl/50 hover:text-pearl transition-colors"
//             >
//               <X className="h-6 w-6" />
//             </button>
            
//             <div className="mb-8">
//               <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
//                 <Lock className="h-5 w-5 text-gold" />
//               </div>
//               <h3 className="font-[family-name:var(--font-display)] text-2xl text-pearl mb-2">Unlock Floor Plans & Brochure</h3>
//               <p className="text-[14px] text-pearl/60">Enter your details to instantly view the premium 4BHK layouts and download the full brochure.</p>
//             </div>
            
//             <form onSubmit={(e) => submitToFormspree(e, "unlock")} className="flex flex-col gap-6">
//               <input type="hidden" name="_subject" value="New enquiry — Confident Atria (Unlock Popup)" />
//               <div className="relative">
//                 <input 
//                   type="text" 
//                   name="name"
//                   required 
//                   suppressHydrationWarning 
//                   placeholder=" " 
//                   className="peer w-full bg-transparent border-b border-white/20 py-3 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors" 
//                 />
//                 <label className="absolute left-0 top-3 text-[14px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
//                   Full Name
//                 </label>
//               </div>
              
//               <div className="relative">
//                 <input 
//                   type="tel" 
//                   name="phone"
//                   required 
//                   suppressHydrationWarning 
//                   placeholder=" " 
//                   className="peer w-full bg-transparent border-b border-white/20 py-3 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors" 
//                 />
//                 <label className="absolute left-0 top-3 text-[14px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
//                   Phone Number
//                 </label>
//               </div>
              
//               <button 
//                 type="submit"
//                 disabled={formStatus.unlock === "loading"}
//                 suppressHydrationWarning
//                 className="mt-4 w-full rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wider uppercase text-navy hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-60"
//               >
//                 {formStatus.unlock === "loading" ? "Unlocking..." : "Unlock Now"}
//               </button>
//               {formStatus.unlock === "error" && (
//                 <p className="text-[12px] text-red-400 text-center">Something went wrong. Please try again.</p>
//               )}
//             </form>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Small components                                                  */
// /* ------------------------------------------------------------------ */

// function Logo({
//   scrolled = true,
//   variant = "header",
// }: {
//   scrolled?: boolean;
//   variant?: "header" | "footer";
// }) {
//   const dark = scrolled || variant === "footer";
//   return (
//     <a href="#" className="flex items-center gap-3 group">
//       <span className="flex items-center gap-2.5 sm:gap-3">

//         <span className="relative h-8 sm:h-12 w-[70px] sm:w-[84px]">
//           <Image
//             src={CONFIDENT_ATRIA_LOGO}
//             alt="Confident Atria logo"
//             fill
//             className="object-contain object-left"
//           />
//         </span>
//         <span className={`h-6 w-px shrink-0 ${dark ? "bg-navy/15" : "bg-pearl/25"}`} />
//         <span className="relative h-8 sm:h-9 w-[70px] sm:w-[84px]">
//           <Image
//             src={RRL_LOGO}
//             alt="RRL Group logo"
//             fill
//             className="object-contain object-left"
//           />
//         </span>
//       </span>
//       {/* <span className="leading-none hidden sm:block">
//         <span className="block font-[family-name:var(--font-display)] text-lg font-medium tracking-wider text-gold">
//           Confident Atria
//         </span>
//         <span className={`block text-[10px] font-bold tracking-[0.25em] transition-colors duration-500 mt-1 ${dark ? "text-navy/50" : "text-pearl/60"}`}>
//           BY <span className="text-gold">RRL</span> GROUP
//         </span>
//       </span> */}
//     </a>
//   );
// }

// function OverviewPoint({
//   icon: Icon,
//   title,
//   body,
// }: {
//   icon: typeof ShieldCheck;
//   title: string;
//   body: string;
// }) {
//   return (
//     <div className="group border-t border-navy/10 pt-8 hover:border-gold transition-colors duration-500 relative">
//       <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
//       <Icon className="h-6 w-6 text-gold mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
//       <h3 className="text-[18px] font-semibold text-navy mb-3">{title}</h3>
//       <p className="text-[15px] leading-relaxed text-navy/60 font-light">{body}</p>
//     </div>
//   );
// }
// "use client";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation"; 
// import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
// import {
//   Phone,
//   MapPin,
//   Menu,
//   X,
//   ArrowUpRight,
//   Sun,
//   Compass,
//   Building2,
//   GraduationCap,
//   Factory,
//   Milestone,
//   ShieldCheck,
//   Ruler,
//   Layers,
//   Home as HomeIcon,
//   Armchair,
//   Sofa,
//   UtensilsCrossed,
//   ChefHat,
//   Flame,
//   BedDouble,
//   Bath,
//   Car,
//   Users,
//   Shirt,
//   Wind,
//   TreePine,
//   Aperture,
//   Droplets,
//   Hammer,
//   Plug,
//   IndianRupee,
//   Key,
//   Coffee,
//   Waves,
//   Dumbbell,
//   Trophy,
//   Lock,
//   AlertCircle,
//   Camera,
//   Download,
//   FileText,
//   CheckCircle2,
// } from "lucide-react";

// const display = Fraunces({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   style: ["normal", "italic"],
//   variable: "--font-display",
// });

// const body = Manrope({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600"],
//   variable: "--font-body",
// });

// const mono = IBM_Plex_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-mono",
// });

// const BRONZE = "#8B6F3D";

// /* ------------------------------------------------------------------ */
// /*  Formspree config                                                   */
// /* ------------------------------------------------------------------ */
// // TODO: Replace with your real Formspree endpoint, e.g. https://formspree.io/f/abcdwxyz
// const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaqpnwq";

// /* ------------------------------------------------------------------ */
// /*  Assets                                                             */
// /* ------------------------------------------------------------------ */

// const HERO_IMAGE =
//   "https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-07-24%20at%205.11.12%20PM.jpeg";
// const RRL_LOGO = "https://ik.imagekit.io/j0xzq9pns/svt/logo.png";
// const CONFIDENT_ATRIA_LOGO =
//   "https://ik.imagekit.io/j0xzq9pns/svt/ChatGPT%20Image%20Jul%2025,%202026,%2012_41_19%20AM.png?updatedAt=1784920355583";
// const BROCHURE_URL =
//   "https://ik.imagekit.io/j0xzq9pns/svt/STRRPA-Approved-4-BHK-Residential-Villas-in-Confident-Atria-Gated-Community%20(8).pdf";

// const FLOOR_PLAN_IMAGES: { src: string; label: string }[] = [
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012_page-0001.jpg.jpeg", label: "Villa No. 12" },
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012A_page-0001.jpg.jpeg", label: "Villa No. 12A" },
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20124_page-0001.jpg%20(1).jpeg", label: "Villa No. 124" },
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20125_page-0001.jpg.jpeg", label: "Villa No. 125" },
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20181_page-0001.jpg.jpeg", label: "Villa No. 181" },
//   { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20266_page-0001.jpg.jpeg", label: "Villa No. 266" },
// ];

// /* ------------------------------------------------------------------ */
// /*  Content                                                           */
// /* ------------------------------------------------------------------ */

// const PHONES = ["8494966966"];
// const ADDRESS = [
//   "Confident Atria",
//   "Sarjapura - Attibele Road",
//   "Bengaluru, Karnataka",
// ];

// const STATS = [
//   { label: "Configuration", value: "4 BHK", icon: HomeIcon },
//   { label: "Site Area", value: "1162 sqft", icon: Ruler },
//   { label: "Total Built-up", value: "2400.50 sqft", icon: Layers },
//   { label: "Availability", value: "12 Units Left", icon: AlertCircle },
// ];

// // Site-wise plot area table (from brochure)
// const SITE_AREAS: { site: string; area: string }[] = [
//   { site: "12", area: "1,162" },
//   { site: "12A", area: "1,162" },
//   { site: "124", area: "1,302" },
//   { site: "125", area: "1,285" },
//   { site: "181", area: "1,162" },
//   { site: "199", area: "1,346" },
//   { site: "202", area: "1,096" },
//   { site: "218", area: "1,200" },
//   { site: "220", area: "1,200" },
//   { site: "221", area: "1,200" },
//   { site: "256", area: "1,500" },
//   { site: "266", area: "1,200" },
// ];

// // Fully updated exact amenities from the PDF and Flyer
// const AMENITIES = [
//   {
//     icon: Coffee,
//     title: "Premium Clubhouse",
//     body: "A Family & Social hub featuring a premium clubhouse, banquet hall, and an outdoor amphitheater.",
//   },
//   {
//     icon: Waves,
//     title: "Large Swimming Pool",
//     body: "A pristine, large recreational swimming pool designed for daily relaxation and fitness.",
//   },
//   {
//     icon: Trophy,
//     title: "Sports & Courts",
//     body: "Tennis & basketball courts, dedicated indoor squash and badminton courts, and an indoor games room.",
//   },
//   {
//     icon: Dumbbell,
//     title: "Fitness & Tracks",
//     body: "Fully equipped gymnasium alongside dedicated jogging, strolling, and cycling tracks.",
//   },
//   {
//     icon: TreePine,
//     title: "Parks & Open Lawns",
//     body: "Beautiful flower gardens, landscaped open lawns, and a dedicated safe children's play area.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "24/7 Manned Security",
//     body: "Fully gated community with 24/7 manned security, extensive CCTV surveillance, and visitor parking.",
//   },
//   {
//     icon: Droplets,
//     title: "Eco-Friendly Infrastructure",
//     body: "Concrete internal roads, eco-friendly rainwater harvesting, and robust water storage systems.",
//   },
//   {
//     icon: Sun,
//     title: "Vaastu Compliant",
//     body: "Thoughtfully designed spaces ensuring 100% Vaastu compliance along with a dedicated meditation area.",
//   },
// ];

// type Room = { name: string; dim: string };

// function getRoomIcon(name: string) {
//   const n = name.toLowerCase();
//   if (n.includes("sitout")) return Armchair;
//   if (n.includes("living")) return Sofa;
//   if (n.includes("dining")) return UtensilsCrossed;
//   if (n.includes("kitchen")) return ChefHat;
//   if (n.includes("pooja")) return Flame;
//   if (n.includes("bed")) return BedDouble;
//   if (n.includes("toilet")) return Bath;
//   if (n.includes("parking")) return Car;
//   if (n.includes("family")) return Users;
//   if (n.includes("dress")) return Shirt;
//   if (n.includes("balcony")) return Wind;
//   if (n.includes("terrace")) return TreePine;
//   if (n.includes("sky")) return Aperture;
//   return HomeIcon;
// }

// const FLOORS: {
//   id: string;
//   label: string;
//   tag: string;
//   area: string;
//   rooms: Room[];
//   note: string;
// }[] = [
//   {
//     id: "ground",
//     label: "Ground Floor",
//     tag: "Arrival Level",
//     area: "936.80 sqft",
//     note: "Living, dining and a private bedroom open onto a landscaped car court.",
//     rooms: [
//       { name: "Sitout", dim: "15'6\" x 5'0\"" },
//       { name: "Living Area", dim: "13'0\" x 14'6\"" },
//       { name: "Dining Area", dim: "8'6\" x 14'0\"" },
//       { name: "Kitchen", dim: "11'0\" x 8'0\"" },
//       { name: "Pooja", dim: "3'2\" x 4'8\"" },
//       { name: "Bed Room", dim: "10'6\" x 16'0\"" },
//       { name: "Toilet", dim: "5'0\" x 8'0\"" },
//     ],
//   },
//   {
//     id: "first",
//     label: "First Floor",
//     tag: "Private Level",
//     area: "920.40 sqft",
//     note: "Two master suites with dressing rooms, framed by a shared family area and balcony.",
//     rooms: [
//       { name: "Master Bed Room", dim: "11'0\" x 16'0\"" },
//       { name: "Bed Room", dim: "10'6\" x 16'0\"" },
//       { name: "Family Area", dim: "8'6\" x 18'6\"" },
//       { name: "Dress Area", dim: "5'8\" x 8'0\"" },
//       { name: "Dress Area", dim: "7'8\" x 8'0\"" },
//       { name: "Balcony", dim: "4'8\" x 8'6\"" },
//       { name: "Toilet", dim: "5'0\" x 8'0\"" },
//       { name: "Toilet", dim: "5'0\" x 8'0\"" },
//     ],
//   },
//   {
//     id: "terrace",
//     label: "Terrace Floor",
//     tag: "Sky Level",
//     area: "543.30 sqft",
//     note: "A third master suite opens to an open terrace, sitout and skylight above the stair.",
//     rooms: [
//       { name: "Master Bed Room", dim: "11'0\" x 16'0\"" },
//       { name: "Sitout Area", dim: "8'6\" x 16'6\"" },
//       { name: "Dress Area", dim: "5'8\" x 8'0\"" },
//       { name: "Toilet", dim: "5'0\" x 8'0\"" },
//       { name: "Open Terrace", dim: "Open to sky" },
//       { name: "Sky Light", dim: "Above staircase" },
//     ],
//   },
// ];

// const SPECS: { group: string; rows: [string, string][] }[] = [
//   {
//     group: "Approvals & Layout",
//     rows: [
//       ["Layout Approval", "RERA & BMRDA Approved"],
//       ["RERA No.", "PRM/KA/RERA/1251/308/PR/130724/007003"],
//       ["Layout Extent", "25-Acre Gated Community"],
//       ["Layout Name", "Confident Atria"],
//     ],
//   },
//   {
//     group: "Structure & Envelope",
//     rows: [
//       ["Building Structure", "RCC Column Frame"],
//       ["Walls", "6\" Solid Block"],
//       ["Main Door", "Teak Wood"],
//       ["Internal Doors", "Teak Wood Frame, Ready-made Flush Doors"],
//       ["Windows", "3-Track UPVC, Wooden Pattern, Best Quality"],
//     ],
//   },
//   {
//     group: "Interiors & Finishes",
//     rows: [
//       ["Flooring - Bedrooms & Living", "Vitrified Tiles, 4' x 6'"],
//       ["Flooring - Toilet Walls", "Glazed Tiles, 2' x 4'"],
//       ["Flooring - Staircase & Sitout", "Granite"],
//       ["Painting - Internal", "Asian Paints Tractor Emulsion"],
//       ["Painting - External", "Asian Paints Ultima Protek, Texture Finish"],
//     ],
//   },
//   {
//     group: "Electrical & Plumbing",
//     rows: [
//       ["Electrical", "Polycab / V-Guard / Havells"],
//       ["Sanitary - Internal Piping", "Supreme PVC & UPVC"],
//       ["Sanitary - Fittings", "Jaquar"],
//       ["Sanitary - Flush Tanks", "Grohe"],
//     ],
//   },
//   {
//     group: "Utilities & Boundary",
//     rows: [
//       ["Underground Sump", "8000 Ltr, RCC Structure"],
//       ["Overhead Tank", "1000 Ltr, 3-Layer Fibre"],
//       ["Compound Wall", "Individual Compound Wall Provided"],
//     ],
//   },
// ];

// const LANDMARKS: {
//   category: string;
//   icon: typeof GraduationCap;
//   places: string[];
// }[] = [
//   {
//     category: "Education",
//     icon: GraduationCap,
//     places: ["Azim Premji University", "TISB School", "Indus School", "Global Indian International School"],
//   },
//   {
//     category: "Business & Industry",
//     icon: Factory,
//     places: ["Infosys Campus", "Exide Factory", "SVT RMC Plant"],
//   },
//   {
//     category: "Civic & Everyday",
//     icon: ShieldCheck,
//     places: ["Police Station", "Sompura Gate"],
//   },
//   {
//     category: "Connectivity",
//     icon: Milestone,
//     places: ["Sarjapura Circle", "Attibele Circle", "Whitefield Corridor", "Chandapura Road"],
//   },
// ];

// /* ------------------------------------------------------------------ */
// /*  Scroll-reveal helper                                              */
// /* ------------------------------------------------------------------ */

// function Reveal({
//   children,
//   delay = 0,
//   className = "",
// }: {
//   children: React.ReactNode;
//   delay?: number;
//   className?: string;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           io.unobserve(el);
//         }
//       },
//       { threshold: 0.15 }
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       style={{ transitionDelay: `${delay}ms` }}
//       className={`transition-all duration-700 ease-out ${
//         visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//       } ${className}`}
//     >
//       {children}
//     </div>
//   );
// }

// /* ------------------------------------------------------------------ */

// type FormKey = "top" | "enquire" | "unlock";
// type FormStatus = "idle" | "loading" | "success" | "error";

// export default function Page() {
//   const [floorTab, setFloorTab] = useState("ground");
//   const [navOpen, setNavOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [heroIn, setHeroIn] = useState(false);

//   // Unified unlock state: gates Floor Plans + Brochure viewer/download across the site.
//   // Set to true the moment ANY contact form (top form, enquire form, or popup) is submitted.
//   const [isUnlocked, setIsUnlocked] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const router = useRouter();

//   const [formStatus, setFormStatus] = useState<Record<FormKey, FormStatus>>({
//     top: "idle",
//     enquire: "idle",
//     unlock: "idle",
//   });

//   const activeFloor = FLOORS.find((f) => f.id === floorTab)!;

//   useEffect(() => {
//     const t = setTimeout(() => setHeroIn(true), 80);
//     const onScroll = () => {
//       setScrolled(window.scrollY > 24);
//       const h = document.documentElement;
//       const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
//       setProgress(Math.min(1, Math.max(0, p)));
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     document.title = "Confident Atria by RRL Group";
//     return () => {
//       clearTimeout(t);
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   // Generic Formspree submit handler shared by all contact forms on the page.
//   // const submitToFormspree = async (
//   //   e: React.FormEvent<HTMLFormElement>,
//   //   key: FormKey
//   // ) => {
//   //   e.preventDefault();
//   //   const form = e.currentTarget;
//   //   setFormStatus((s) => ({ ...s, [key]: "loading" }));
//   //   try {
//   //     const data = new FormData(form);
//   //     const res = await fetch(FORMSPREE_ENDPOINT, {
//   //       method: "POST",
//   //       body: data,
//   //       headers: { Accept: "application/json" },
//   //     });
//   //     if (res.ok) {
//   //       setFormStatus((s) => ({ ...s, [key]: "success" }));
//   //       setIsUnlocked(true);
//   //       if (key === "unlock") setIsPopupOpen(false);
//   //       form.reset();
//   //     } else {
//   //       setFormStatus((s) => ({ ...s, [key]: "error" }));
//   //     }
//   //   } catch {
//   //     setFormStatus((s) => ({ ...s, [key]: "error" }));
//   //   }
//   // };

// const submitToFormspree = async (
//     e: React.FormEvent<HTMLFormElement>,
//     key: FormKey
//   ) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     setFormStatus((s) => ({ ...s, [key]: "loading" }));

//     try {
//       const data = new FormData(form);
//       const res = await fetch(FORMSPREE_ENDPOINT, {
//         method: "POST",
//         body: data,
//         headers: { Accept: "application/json" },
//       });

//       if (res.ok) {
//         setFormStatus((s) => ({ ...s, [key]: "success" }));
//         setIsUnlocked(true);
        
//         // Close the popup if the unlock form was submitted
//         if (key === "unlock") {
//           setIsPopupOpen(false);
//         }
        
//         form.reset();

//         // Only redirect to the Thank You page for the top and bottom forms
//         if (key === "enquire" || key === "top") {
//           router.push("/c4/thankyou");
//         }
//       } else {
//         setFormStatus((s) => ({ ...s, [key]: "error" }));
//       }
//     } catch {
//       setFormStatus((s) => ({ ...s, [key]: "error" }));
//     }
//   };

//   return (
//     <main
//       className={`${display.variable} ${body.variable} ${mono.variable} bg-[#FAFAFA] text-navy font-[family-name:var(--font-body)] selection:bg-gold selection:text-navy scroll-smooth overflow-x-hidden`}
//     >
//       <style jsx global>{`
//         @keyframes floatSlow {
//           0%, 100% { transform: translateY(0) translateX(0); }
//           50% { transform: translateY(-18px) translateX(10px); }
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(14px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-float { animation: floatSlow 9s ease-in-out infinite; }
//         .animate-float-slow { animation: floatSlow 13s ease-in-out infinite; }
//         .fade-in-up { animation: fadeInUp 0.5s ease-out both; }
        
//         :root {
//           --navy: #0B1E36;
//           --gold: #D4AF37;
//           --pearl: #FFFFFF;
//         }
//       `}</style>

//       {/* ---------------------------------------------------------- SCROLL PROGRESS */}
//       <div className="fixed top-0 left-0 h-[2px] bg-gold z-[60] transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />

//       {/* ---------------------------------------------------------- NAV */}
//       <header
//         className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
//           scrolled ? "border-navy/10 bg-pearl/95 backdrop-blur-md shadow-sm" : "border-transparent bg-transparent"
//         }`}
//       >
//         <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20 sm:h-24"}`}>
//           <Logo scrolled={scrolled} />
//           <nav className={`hidden md:flex items-center gap-10 text-[13px] tracking-[0.1em] uppercase transition-colors duration-300 ${
//             scrolled ? "text-navy/70" : "text-pearl/80"
//           }`}>
//             {["Overview", "Residences", "Specifications", "Location", "Enquire"].map((item) => (
//               <a key={item} href={`#${item.toLowerCase()}`} className="relative group py-1 hover:text-gold transition-colors">
//                 {item}
//               </a>
//             ))}
//           </nav>
//           <a
//             href={`tel:+91${PHONES[0]}`}
//             className={`hidden md:inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-[13px] font-medium tracking-wide transition-all duration-300 ${
//               scrolled 
//                 ? "border-navy/20 text-navy hover:bg-navy hover:text-pearl" 
//                 : "border-pearl/40 text-pearl hover:bg-pearl hover:text-navy"
//             }`}
//           >
//             <Phone className="h-3.5 w-3.5" /> Call Us
//           </a>
//           <div className="flex items-center gap-3 md:hidden">
//             <a
//               href={`tel:+91${PHONES[0]}`}
//               aria-label="Call us"
//               className={`inline-flex items-center justify-center h-9 w-9 rounded-full border transition-colors duration-300 ${
//                 scrolled ? "border-navy/20 text-navy" : "border-pearl/40 text-pearl"
//               }`}
//             >
//               <Phone className="h-4 w-4" />
//             </a>
//             <button suppressHydrationWarning onClick={() => setNavOpen((v) => !v)} className={`transition-colors duration-300 ${scrolled ? "text-navy" : "text-pearl"}`} aria-label="Toggle menu">
//               {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
        
//         {/* Mobile Nav */}
//         {navOpen && (
//           <div className="md:hidden border-t border-navy/10 bg-pearl px-6 py-6 flex flex-col gap-5 text-sm tracking-wide uppercase text-navy/80 shadow-2xl">
//             {["Overview", "Residences", "Brochure", "Specifications", "Location", "Enquire"].map((item) => (
//               <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setNavOpen(false)}>
//                 {item}
//               </a>
//             ))}
//           </div>
//         )}
//       </header>

//       {/* ---------------------------------------------------------- HERO */}
//       <section className="relative overflow-hidden bg-navy text-pearl pt-28 sm:pt-32 pb-16 px-6 lg:px-10">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute -top-32 right-[-8%] h-[560px] w-[560px] rounded-full bg-gold/[0.08] blur-[100px] animate-float" />
//           <div className="absolute bottom-[-10%] left-[-8%] h-[420px] w-[420px] rounded-full blur-[90px] animate-float-slow bg-gold/[0.05]" />
//           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
//         </div>

//         <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 lg:items-center lg:min-h-[75vh]">
//           {/* Left Hero Content */}
//           <div className="pt-6 sm:pt-10">
//             <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
//               <span className="h-px w-8 bg-gold/60" />
//               <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gold/90">Confident Atria by RRL Group</span>
//             </div>
            
//             <h1 className={`font-[family-name:var(--font-display)] italic font-light text-[clamp(2.2rem,4.5vw,4.2rem)] leading-[1.1] text-pearl transition-all duration-700 delay-100 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
//               Own the home <br />
//               <span className="not-italic font-medium text-gold">your family deserves.</span>
//             </h1>
            
//             <p className={`mt-6 max-w-lg text-[16px] font-light leading-relaxed text-pearl/70 transition-all duration-700 delay-200 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
//               Premium 4 BHK villa living in a sprawling 25-acre gated community. Sarjapura – Attibele Road, Bengaluru. Starts at just ₹2 CR* onwards.
//             </p>

//             {/* HIGHLIGHTED BADGES — only RRL & Confident Atria are emphasized */}
//             <Reveal delay={250} className={`mt-8 flex flex-wrap items-center gap-2 sm:gap-3 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
//               <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-[11px] font-medium tracking-[0.1em] uppercase text-pearl/80 backdrop-blur-md">
//                 <Building2 className="h-4 w-4 text-pearl/60 shrink-0" /> Constructed by SVT Developers & Constructions
//               </div>
//               <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase text-gold backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
//                 <Milestone className="h-4 w-4 shrink-0" /> Marketed by RRL Group
//               </div>
//               <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase text-white backdrop-blur-md">
//                 <Key className="h-4 w-4 text-gold shrink-0" /> Possession in 4 Months
//               </div>
//             </Reveal>

//             <div className={`mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-5 transition-all duration-700 delay-300 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
//               <a
//                 href="#enquire"
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-[13px] font-semibold tracking-wide text-navy hover:bg-pearl transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
//               >
//                 Book Your Site Visit Today! <ArrowUpRight className="h-4 w-4" />
//               </a>
//               <a
//                 href="#residences"
//                 className="inline-flex items-center justify-center gap-2 rounded-full border border-pearl/30 px-8 py-4 text-[13px] tracking-wide text-pearl hover:bg-pearl/10 transition-colors"
//               >
//                 View Floor Plans
//               </a>
//             </div>
//           </div>

//           {/* Right Hero Content: Villa Image & Stats */}
//           <div className="w-full flex flex-col gap-6">
//             <Reveal delay={200} className={`relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 transition-all duration-1000 ${heroIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
//               <Image 
//                 src={HERO_IMAGE} 
//                 alt="Confident Atria Premium Villa Exterior" 
//                 fill 
//                 priority
//                 className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
//               <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
//                 <div className="inline-flex items-center gap-2 rounded-full bg-navy/60 backdrop-blur-md border border-white/20 px-4 py-1.5">
//                   <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">Only 12 Villas Available</span>
//                 </div>
//               </div>
//             </Reveal>

//             <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 transition-all duration-700 delay-400 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
//               {STATS.map(({ label, value, icon: Icon }) => (
//                 <div key={label} className="bg-white/5 border border-white/10 p-3 sm:p-4 rounded-2xl backdrop-blur-sm flex flex-col gap-2 sm:gap-3 hover:bg-white/10 transition-colors">
//                   <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center">
//                     <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
//                   </div>
//                   <div>
//                     <p className="font-[family-name:var(--font-mono)] text-[15px] font-medium text-pearl leading-tight">{value}</p>
//                     <p className="text-[10px] tracking-[0.05em] uppercase text-pearl/50 mt-0.5">{label}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- QUICK ENQUIRY (TOP CONTACT FORM) */}
//       {/* <section id="quick-enquiry" className="relative px-6 lg:px-10 py-16 sm:py-20 bg-[#F8F9FA] border-b border-navy/5">
//         <div className="mx-auto max-w-4xl">
//           <Reveal className="text-center mb-10">
//             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-3">Get Started</p>
//             <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy">
//               Talk to us about <span className="text-gold italic">Confident Atria</span>
//             </h2>
//             <p className="mt-3 text-[14px] sm:text-[15px] text-navy/60 max-w-md mx-auto">
//               Share your details and our team will reach out — plus instantly unlock the brochure & floor plans.
//             </p>
//           </Reveal>

//           <Reveal delay={100} className="bg-white rounded-[2rem] border border-navy/10 shadow-lg p-6 sm:p-10">
//             <form onSubmit={(e) => submitToFormspree(e, "top")} className="grid sm:grid-cols-2 gap-6">
//               <input type="hidden" name="_subject" value="New enquiry — Confident Atria (Quick Form)" />
//               <div className="relative">
//                 <input type="text" id="top-name" name="name" required suppressHydrationWarning placeholder=" " className="peer w-full bg-transparent border-b border-navy/20 py-3 text-[16px] sm:text-[15px] text-navy focus:outline-none focus:border-gold transition-colors" />
//                 <label htmlFor="top-name" className="absolute left-0 top-3 text-[14px] text-navy/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">Full Name</label>
//               </div>
//               <div className="relative">
//                 <input type="tel" id="top-phone" name="phone" required suppressHydrationWarning placeholder=" " className="peer w-full bg-transparent border-b border-navy/20 py-3 text-[16px] sm:text-[15px] text-navy focus:outline-none focus:border-gold transition-colors" />
//                 <label htmlFor="top-phone" className="absolute left-0 top-3 text-[14px] text-navy/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">Phone Number</label>
//               </div>
//               <div className="relative sm:col-span-2">
//                 <input type="email" id="top-email" name="email" suppressHydrationWarning placeholder=" " className="peer w-full bg-transparent border-b border-navy/20 py-3 text-[16px] sm:text-[15px] text-navy focus:outline-none focus:border-gold transition-colors" />
//                 <label htmlFor="top-email" className="absolute left-0 top-3 text-[14px] text-navy/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">Email Address (Optional)</label>
//               </div>

//               <div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
//                 <button
//                   type="submit"
//                   disabled={formStatus.top === "loading"}
//                   suppressHydrationWarning
//                   className="w-full sm:w-auto flex-1 rounded-full bg-gold px-8 py-4 text-[13px] font-semibold tracking-wider uppercase text-navy hover:bg-navy hover:text-pearl transition-all duration-300 disabled:opacity-60"
//                 >
//                   {formStatus.top === "loading" ? "Submitting..." : "Get Details & Unlock Brochure"}
//                 </button>
//                 {formStatus.top === "success" && (
//                   <a
//                     href={BROCHURE_URL}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gold text-gold px-8 py-4 text-[13px] font-semibold tracking-wider uppercase hover:bg-gold hover:text-navy transition-all duration-300"
//                   >
//                     <Download className="h-4 w-4" /> Download Brochure
//                   </a>
//                 )}
//               </div>
//               {formStatus.top === "success" && (
//                 <p className="sm:col-span-2 flex items-center gap-2 text-[13px] text-green-700">
//                   <CheckCircle2 className="h-4 w-4" /> Thank you! Your details were received — floor plans & brochure are now unlocked below.
//                 </p>
//               )}
//               {formStatus.top === "error" && (
//                 <p className="sm:col-span-2 text-[13px] text-red-600">
//                   Something went wrong. Please try again or call us directly at +91 {PHONES[0]}.
//                 </p>
//               )}
//             </form>
//           </Reveal>
//         </div>
//       </section> */}

//       {/* ---------------------------------------------------------- QUICK ENQUIRY (TOP CONTACT FORM) */}
//       <section id="quick-enquiry" className="relative px-6 lg:px-10 py-16 sm:py-20 bg-[#F8F9FA] border-b border-navy/5">
//         <div className="mx-auto max-w-4xl">
//           <Reveal className="text-center mb-10">
//             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-3">Get Started</p>
//             <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy">
//               Talk to us about <span className="text-gold italic">Confident Atria</span>
//             </h2>
//             <p className="mt-3 text-[14px] sm:text-[15px] text-navy/60 max-w-md mx-auto">
//               Share your details and our expert team will reach out to answer your questions and schedule a site visit.
//             </p>
//           </Reveal>

//           <Reveal delay={100} className="bg-white rounded-[2rem] border border-navy/10 shadow-lg p-6 sm:p-10">
//             <form onSubmit={(e) => submitToFormspree(e, "top")} className="grid sm:grid-cols-2 gap-6">
//               <input type="hidden" name="_subject" value="New enquiry — Confident Atria (Quick Form)" />
              
//               <div className="relative">
//                 <input type="text" id="top-name" name="name" required suppressHydrationWarning placeholder=" " className="peer w-full bg-transparent border-b border-navy/20 py-3 text-[16px] sm:text-[15px] text-navy focus:outline-none focus:border-gold transition-colors" />
//                 <label htmlFor="top-name" className="absolute left-0 top-3 text-[14px] text-navy/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">Full Name</label>
//               </div>
              
//               <div className="relative">
//                 <input type="tel" id="top-phone" name="phone" required suppressHydrationWarning placeholder=" " className="peer w-full bg-transparent border-b border-navy/20 py-3 text-[16px] sm:text-[15px] text-navy focus:outline-none focus:border-gold transition-colors" />
//                 <label htmlFor="top-phone" className="absolute left-0 top-3 text-[14px] text-navy/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">Phone Number</label>
//               </div>
              
//               <div className="relative sm:col-span-2">
//                 <input type="email" id="top-email" name="email" suppressHydrationWarning placeholder=" " className="peer w-full bg-transparent border-b border-navy/20 py-3 text-[16px] sm:text-[15px] text-navy focus:outline-none focus:border-gold transition-colors" />
//                 <label htmlFor="top-email" className="absolute left-0 top-3 text-[14px] text-navy/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">Email Address (Optional)</label>
//               </div>

//               <div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
//                 <button
//                   type="submit"
//                   disabled={formStatus.top === "loading"}
//                   suppressHydrationWarning
//                   className="w-full sm:w-auto flex-1 rounded-full bg-gold px-8 py-4 text-[13px] font-semibold tracking-wider uppercase text-navy hover:bg-navy hover:text-pearl transition-all duration-300 disabled:opacity-60"
//                 >
//                   {formStatus.top === "loading" ? "Submitting..." : "Submit Enquiry"}
//                 </button>
//               </div>
              
//               {formStatus.top === "error" && (
//                 <p className="sm:col-span-2 text-[13px] text-red-600">
//                   Something went wrong. Please try again or call us directly at +91 {PHONES[0]}.
//                 </p>
//               )}
//             </form>
//           </Reveal>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- OVERVIEW (WITH ENTRANCE IMAGE) */}
//       <section id="overview" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-white">
//         <div className="mx-auto max-w-7xl">
//           <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
//             <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
//               <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Overview</p>
//               <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy mb-8">
//                 Type 01 — a villa built in three acts
//               </h2>
              
//               {/* Project Entrance Image */}
//               <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-navy/10 group">
//                 <Image 
//                   src="https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-07-18%20at%205.57.47%20PM.jpeg" 
//                   alt="Confident Atria Entrance" 
//                   fill 
//                   className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
//                   <p className="text-sm font-medium tracking-wider uppercase drop-shadow-md">Confident Atria</p>
//                   <p className="text-xs text-white/80 font-light mt-1">Project Entrance View</p>
//                 </div>
//               </div>
//             </Reveal>

//             <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10 lg:pl-10">
//               <Reveal delay={100}>
//                 <OverviewPoint icon={ShieldCheck} title="RERA & BMRDA Approved" body="A 25-acre gated layout at Confident Atria, fully legally cleared with RERA No. PRM/KA/RERA/1251/308/PR/130724/007003." />
//               </Reveal>
//               <Reveal delay={200}>
//                 <OverviewPoint icon={Building2} title="Column-Frame Structure" body="RCC column framing and 6-inch solid block walls, finished with teak wood doors and 3-track UPVC windows." />
//               </Reveal>
//               <Reveal delay={300}>
//                 <OverviewPoint icon={Compass} title="East-Facing, 1162 sqft" body="A 1162 sqft East-facing site carries 2400.50 sqft of built-up area across ground, first and terrace levels." />
//               </Reveal>
//               <Reveal delay={400}>
//                 <OverviewPoint icon={IndianRupee} title="Premium Investment" body="Starting at 2 Cr*, Villa 12 represents a prime opportunity within one of Bengaluru's fastest-growing corridors." />
//               </Reveal>
//               <Reveal delay={500} className="sm:col-span-2">
//                 <div className="group border-t border-navy/10 pt-8 hover:border-gold transition-colors duration-500 relative">
//                   <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
//                   <Key className="h-6 w-6 text-gold mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
//                   <h3 className="text-[18px] font-semibold text-navy mb-3">Ready to Move In Soon</h3>
//                   <p className="text-[15px] leading-relaxed text-navy/60 font-light">Fully compliant, legally cleared project — buy with complete confidence. Get possession in just 4 months from the date of booking — no long waiting periods.</p>
//                 </div>
//               </Reveal>
//             </div>
//           </div>
//         </div>
//       </section>



//       {/* ---------------------------------------------------------- AMENITIES */}
//       <section className="relative px-6 lg:px-10 py-24 sm:py-32 bg-white border-y border-navy/5">
//         <div className="mx-auto max-w-7xl">
//           <Reveal className="text-center max-w-2xl mx-auto mb-20">
//             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Living Here</p>
//             <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy">
//               World-Class Amenities for Every Lifestyle
//             </h2>
//           </Reveal>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//             {AMENITIES.map((a, i) => (
//               <Reveal key={a.title} delay={i * 100}>
//                 <div className="group h-full rounded-2xl bg-[#F8F9FA] p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gold/30 hover:-translate-y-2">
//                   <div className="h-14 w-14 rounded-full flex items-center justify-center mb-6 bg-white group-hover:bg-gold transition-colors duration-500">
//                     <a.icon className="h-6 w-6 text-navy group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
//                   </div>
//                   <h3 className="text-[17px] font-semibold text-navy mb-3">{a.title}</h3>
//                   <p className="text-[14px] leading-relaxed text-navy/60">{a.body}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- RESIDENCES / FLOOR PLANS */}
//       <section id="residences" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-[#F8F9FA]">
//         <div className="mx-auto max-w-7xl">
//           <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
//             <div>
//               <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Residences</p>
//               <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy max-w-lg">Six villa layouts, one address</h2>
//             </div>
//             <p className="max-w-sm text-[15px] leading-relaxed text-navy/60">
//               Villas 12, 12A, 124, 125, 181 and 266 — each thoughtfully planned across ground,
//               first and terrace levels. Submit your details to view every floor plan.
//             </p>
//           </Reveal>

//           {/* GATED FLOOR PLAN IMAGES — all 6 villas, images only, same reveal flow as brochure */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {FLOOR_PLAN_IMAGES.map((img, idx) => (
//               <Reveal key={img.src} delay={idx * 80} className="rounded-3xl overflow-hidden border border-navy/10 shadow-lg bg-white aspect-[3/4] relative group">
//                 <Image
//                   src={img.src}
//                   alt={img.label}
//                   fill
//                   className={`object-contain bg-white p-2 transition-all duration-700 ease-out ${!isUnlocked ? "blur-xl scale-110" : "group-hover:scale-105"}`}
//                 />

//                 {!isUnlocked && (
//                   <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex flex-col items-center justify-center z-10">
//                     <div className="h-14 w-14 rounded-full bg-navy/5 flex items-center justify-center mb-4 border border-white/40 shadow-sm">
//                       <Lock className="h-5 w-5 text-navy/70" />
//                     </div>
//                     <button
//                       onClick={() => setIsPopupOpen(true)}
//                       suppressHydrationWarning
//                       className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[13px] font-semibold tracking-wide text-navy hover:bg-navy hover:text-pearl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
//                     >
//                       Unlock to View
//                     </button>
//                   </div>
//                 )}
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- BROCHURE VIEWER */}
//       <section id="brochure" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-white">
//         <div className="mx-auto max-w-5xl text-center">
//           <Reveal>
//             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Brochure</p>
//             <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy mb-6">
//               Explore the full <span className="text-gold italic">Confident Atria</span> brochure
//             </h2>
//             <p className="text-[15px] text-navy/60 max-w-xl mx-auto mb-10">
//               Complete details on pricing, floor plans, specifications and amenities — viewable and downloadable in one document.
//             </p>
//           </Reveal>

//           <Reveal delay={100} className="relative rounded-3xl overflow-hidden border border-navy/10 shadow-xl bg-[#F8F9FA] aspect-[3/4] sm:aspect-[16/9] group">
//             <iframe
//               src={`${BROCHURE_URL}#toolbar=0`}
//               title="Confident Atria Brochure"
//               className={`w-full h-full transition-all duration-700 ${!isUnlocked ? "blur-xl scale-110 pointer-events-none" : ""}`}
//             />

//             {!isUnlocked ? (
//               <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex flex-col items-center justify-center z-10">
//                 <div className="h-16 w-16 rounded-full bg-navy/5 flex items-center justify-center mb-5 border border-white/40 shadow-sm">
//                   <Lock className="h-6 w-6 text-navy/70" />
//                 </div>
//                 <button
//                   onClick={() => setIsPopupOpen(true)}
//                   suppressHydrationWarning
//                   className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wide text-navy hover:bg-navy hover:text-pearl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
//                 >
//                   <FileText className="h-4 w-4" /> Unlock Brochure
//                 </button>
//               </div>
//             ) : (
//               <a
//                 href={BROCHURE_URL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="absolute bottom-6 right-6 inline-flex items-center gap-2.5 rounded-full bg-navy px-6 py-3.5 text-[13px] font-semibold tracking-wide text-pearl hover:bg-gold hover:text-navy hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 z-10"
//               >
//                 <Download className="h-4 w-4" /> Download Brochure
//               </a>
//             )}
//           </Reveal>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- SITE-WISE AREA TABLE */}
//       <section className="relative px-6 lg:px-10 py-20 sm:py-24 bg-[#F8F9FA] border-y border-navy/5">
//         <div className="mx-auto max-w-5xl">
//           <Reveal className="mb-10 text-center">
//             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Available Units</p>
//             <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy">
//               Villa Dimensions — Site-wise Area
//             </h2>
//           </Reveal>
//           <Reveal delay={100} className="overflow-x-auto rounded-3xl border border-navy/10 bg-white shadow-sm">
//             <table className="w-full min-w-[420px] text-[14px]">
//               <thead>
//                 <tr className="border-b border-navy/10 bg-[#F8F9FA]">
//                   <th className="text-left px-4 sm:px-6 py-4 font-semibold text-navy tracking-wide">Site No.</th>
//                   <th className="text-right px-4 sm:px-6 py-4 font-semibold text-navy tracking-wide">Area (Sq.ft)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {SITE_AREAS.map((row, i) => (
//                   <tr key={row.site} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}>
//                     <td className="px-4 sm:px-6 py-3.5 text-navy/80 border-t border-navy/5">{row.site}</td>
//                     <td className="px-4 sm:px-6 py-3.5 text-right text-navy font-medium border-t border-navy/5">{row.area}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </Reveal>
//           <p className="mt-5 text-center text-[13px] text-navy/50">
//             All villas are 4 BHK · Total Built-Up Area: ~2,400 Sq.ft · Site areas vary by plot
//           </p>
//         </div>
//       </section>
      
//       {/* ---------------------------------------------------------- SPECIFICATIONS */}
//       <section id="specifications" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-navy text-pearl">
//         <div className="mx-auto max-w-7xl">
//           <Reveal className="mb-16 text-center max-w-2xl mx-auto">
//             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Specifications</p>
//             <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-pearl">Built with material honesty</h2>
//           </Reveal>

//           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//             {SPECS.map((group, gi) => (
//               <Reveal key={group.group} delay={gi * 100} className="bg-white/5 rounded-3xl border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-colors duration-500">
//                 <h3 className="font-[family-name:var(--font-display)] italic text-2xl text-gold mb-8">{group.group}</h3>
//                 <dl className="divide-y divide-white/10">
//                   {group.rows.map(([k, v]) => (
//                     <div key={k} className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-6 py-4 text-[15px]">
//                       <dt className="text-pearl/60 font-light">{k}</dt>
//                       <dd className="text-left sm:text-right text-pearl font-medium">{v}</dd>
//                     </div>
//                   ))}
//                 </dl>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- LOCATION */}
//       <section id="location" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-white overflow-hidden">
//         <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
//           <Reveal>
//             <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Prime Location</p>
//             <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy mb-6">
//               Set at the centre of Sarjapura Attibele Road
//             </h2>
//             <p className="text-[15px] leading-relaxed text-navy/60 mb-10 max-w-lg">
//               <span className="text-gold italic font-medium">Confident Atria</span> sits in <strong className="text-navy font-semibold">one of Bengaluru's fastest-growing residential corridors with high appreciation</strong>. Excellent Connectivity to Chandapura Road, Sarjapura Circle, Attibele Circle & Whitefield Corridor.
//             </p>

//             {/* Address Block */}
//             <Reveal delay={50} className="mb-12 p-6 rounded-2xl bg-[#F8F9FA] border border-navy/5 inline-block w-full max-w-lg hover:border-gold/30 transition-colors duration-300">
//               <div className="flex items-start gap-4">
//                 <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
//                 <div>
//                   <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-navy/80 mb-2">Site Address</p>
//                   <p className="text-[15px] leading-relaxed text-navy/70">
//                     <span className="text-gold font-bold">Confident Atria</span><br />
//                     Constructed by SVT Developers & Constructions | Marketed by <span className="text-gold font-semibold">RRL Group</span><br />
//                     {ADDRESS[1]}<br />
//                     {ADDRESS[2]}
//                   </p>
//                 </div>
//               </div>
//             </Reveal>

//             <div className="grid sm:grid-cols-2 gap-10">
//               {LANDMARKS.map(({ category, icon: Icon, places }, i) => (
//                 <Reveal key={category} delay={i * 100}>
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
//                       <Icon className="h-4 w-4 text-gold" strokeWidth={2} />
//                     </div>
//                     <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-navy/80">{category}</p>
//                   </div>
//                   <ul className="space-y-2 border-l-2 border-navy/5 pl-4 ml-5">
//                     {places.map((p) => (
//                       <li key={p} className="text-[14px] text-navy/70 relative before:absolute before:-left-[21px] before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold">{p}</li>
//                     ))}
//                   </ul>
//                 </Reveal>
//               ))}
//             </div>
//           </Reveal>

//           {/* Interactive Google Map & Link */}
//           <Reveal delay={200} className="relative h-full min-h-[320px] sm:min-h-[500px] w-full rounded-3xl overflow-hidden border border-navy/10 shadow-xl lg:sticky lg:top-32 group">
//             {/* Embedded Live Map */}
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.681177651084!2d77.73356061327117!3d12.805374665510427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ef338f9038d%3A0xc3fdeea0b15b67bc!2sSarjapura%20-%20Attibele%20Rd%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen={true}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="absolute inset-0 grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
//             />
            
//             {/* Floating "Get Directions" Link Button */}
//             <a
//               href="https://maps.google.com/?q=Confident+Aspire,Sarjapura+Attibele+Road,Burgunte+Village,Bengaluru,Karnataka+562107"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2.5 rounded-full bg-navy px-5 sm:px-6 py-3 sm:py-3.5 text-[12px] sm:text-[13px] font-semibold tracking-wide text-pearl hover:bg-gold hover:text-navy hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 z-10"
//             >
//               <MapPin className="h-4 w-4" /> Open in Google Maps
//             </a>
//           </Reveal>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- ENQUIRE */}
//       <section id="enquire" className="relative py-24 sm:py-32 bg-navy text-pearl overflow-hidden">
//         {/* Full width background effects */}
//         <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_right,_rgba(212,175,55,0.15)_0%,_transparent_50%)]" />
//         <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

//         <div className="mx-auto max-w-7xl px-6 lg:px-10">
//           <Reveal className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
            
//             {/* Left Column: Context & Contact Info */}
//             <div className="flex flex-col justify-center h-full">
//               <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-6">Enquire</p>
//               <h2 className="font-[family-name:var(--font-display)] italic text-3xl sm:text-4xl lg:text-5xl text-pearl leading-tight mb-10">
//                 Only 12 premium villas remain at <span className="not-italic text-gold">Confident Atria</span>.
//               </h2>
              
//               <div className="flex flex-wrap items-center gap-4 mb-12">
//                 {PHONES.map((p) => (
//                   <a
//                     key={p}
//                     href={`tel:+91${p}`}
//                     className="relative inline-flex items-center gap-3 rounded-full border border-gold/30 px-8 py-4 text-[15px] font-medium tracking-wide text-pearl hover:bg-gold hover:text-navy hover:border-gold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
//                   >
//                     <Phone className="h-4 w-4 relative" /> <span className="relative">{p}</span>
//                   </a>
//                 ))}
//               </div>

//               <div className="pt-10 border-t border-white/10">
//                  <p className="text-[14px] text-pearl/60 font-light leading-relaxed">
//                    Constructed by SVT Developers & Constructions | Marketed by <span className="text-gold font-bold uppercase tracking-wide">RRL Group</span> <br />
//                    {ADDRESS[1]}, {ADDRESS[2]}
//                  </p>
//               </div>
//             </div>

//             {/* Right Column: Premium Contact Form */}
//             <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-6 sm:p-12 backdrop-blur-sm shadow-2xl relative">
//               <div className="absolute -top-10 -right-10 h-32 w-32 bg-gold/20 blur-3xl rounded-full pointer-events-none" />
              
//               <h3 className="font-[family-name:var(--font-display)] text-2xl text-pearl mb-8">Register your interest</h3>
              
//               <form className="flex flex-col gap-6" onSubmit={(e) => submitToFormspree(e, "enquire")}>
//                 <input type="hidden" name="_subject" value="New enquiry — Confident Atria (Main Form)" />

//                 {/* Name Input */}
//                 <div className="relative">
//                   <input 
//                     type="text" 
//                     id="name"
//                     name="name"
//                     required
//                     suppressHydrationWarning
//                     placeholder=" "
//                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[16px] sm:text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
//                   />
//                   <label htmlFor="name" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
//                     Full Name
//                   </label>
//                 </div>

//                 {/* Phone Input */}
//                 <div className="relative">
//                   <input 
//                     type="tel" 
//                     id="phone"
//                     name="phone"
//                     required
//                     suppressHydrationWarning
//                     placeholder=" "
//                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[16px] sm:text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
//                   />
//                   <label htmlFor="phone" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
//                     Phone Number
//                   </label>
//                 </div>

//                 {/* Email Input */}
//                 <div className="relative">
//                   <input 
//                     type="email" 
//                     id="email"
//                     name="email"
//                     suppressHydrationWarning
//                     placeholder=" "
//                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[16px] sm:text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
//                   />
//                   <label htmlFor="email" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
//                     Email Address
//                   </label>
//                 </div>

//                 {/* Message Input */}
//                 <div className="relative mt-2">
//                   <textarea 
//                     id="message"
//                     name="message"
//                     rows={3}
//                     suppressHydrationWarning
//                     placeholder=" "
//                     className="peer w-full bg-transparent border-b border-white/20 py-4 text-[16px] sm:text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors resize-none"
//                   />
//                   <label htmlFor="message" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
//                     Message (Optional)
//                   </label>
//                 </div>

//                 <button 
//                   type="submit"
//                   disabled={formStatus.enquire === "loading"}
//                   suppressHydrationWarning
//                   className="mt-6 w-full rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wider uppercase text-navy hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-60"
//                 >
//                   {formStatus.enquire === "loading" ? "Submitting..." : "Submit Enquiry"}
//                 </button>

//                 {formStatus.enquire === "success" && (
//                   <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
//                     <p className="flex items-center gap-2 text-[13px] text-green-400">
//                       <CheckCircle2 className="h-4 w-4" /> Thank you! We'll be in touch shortly.
//                     </p>
//                     <a
//                       href={BROCHURE_URL}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center justify-center gap-2 rounded-full border border-gold text-gold px-6 py-3 text-[12px] font-semibold tracking-wider uppercase hover:bg-gold hover:text-navy transition-all duration-300"
//                     >
//                       <Download className="h-4 w-4" /> Download Brochure
//                     </a>
//                   </div>
//                 )}
//                 {formStatus.enquire === "error" && (
//                   <p className="text-[13px] text-red-400">Something went wrong. Please try again or call us directly.</p>
//                 )}
//               </form>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- FOOTER */}
//       <footer className="px-6 lg:px-10 py-16 border-t border-navy/10 bg-white">
//         <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-10">
//           <Logo scrolled={true} variant="footer" />
//           <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-[14px] text-navy/60">
//             <span className="flex items-center gap-3 hover:text-gold transition-colors">
//               <MapPin className="h-4 w-4 text-gold" /> {ADDRESS[1]}
//             </span>
//             <span className="flex items-center gap-3 hover:text-gold transition-colors">
//               <Phone className="h-4 w-4 text-gold" /> {PHONES.join(" / ")}
//             </span>
//           </div>
//           <p className="text-[13px] text-navy/70 tracking-wide">
//             Constructed by SVT Developers & Constructions | Marketed by <span className="text-gold font-bold uppercase">RRL Group</span> <br/>
//             <span className="text-navy font-bold uppercase mt-1 block">© {new Date().getFullYear()} <span className="text-gold">Confident Atria</span></span>
//             <span className="text-gold font-semibold mt-1 block">Beyond Homes. A Lifestyle</span>
//           </p>
//         </div>
//       </footer>

//       {/* ---------------------------------------------------------- UNLOCK POPUP MODAL */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//           {/* Backdrop */}
//           <div 
//             className="absolute inset-0 bg-navy/80 backdrop-blur-md" 
//             onClick={() => setIsPopupOpen(false)} 
//           />
          
//           {/* Modal Content */}
//           <div className="relative w-full max-w-md rounded-[2rem] sm:rounded-[2.5rem] bg-navy border border-gold/20 p-6 sm:p-10 shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
//             <button 
//               onClick={() => setIsPopupOpen(false)} 
//               className="absolute top-5 right-5 sm:top-6 sm:right-6 text-pearl/50 hover:text-pearl transition-colors"
//             >
//               <X className="h-6 w-6" />
//             </button>
            
//             <div className="mb-8">
//               <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
//                 <Lock className="h-5 w-5 text-gold" />
//               </div>
//               <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-pearl mb-2 pr-8">Unlock Floor Plans & Brochure</h3>
//               <p className="text-[14px] text-pearl/60">Enter your details to instantly view the premium 4BHK layouts and download the full brochure.</p>
//             </div>
            
//             <form onSubmit={(e) => submitToFormspree(e, "unlock")} className="flex flex-col gap-6">
//               <input type="hidden" name="_subject" value="New enquiry — Confident Atria (Unlock Popup)" />
//               <div className="relative">
//                 <input 
//                   type="text" 
//                   name="name"
//                   required 
//                   suppressHydrationWarning 
//                   placeholder=" " 
//                   className="peer w-full bg-transparent border-b border-white/20 py-3 text-[16px] sm:text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors" 
//                 />
//                 <label className="absolute left-0 top-3 text-[14px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
//                   Full Name
//                 </label>
//               </div>
              
//               <div className="relative">
//                 <input 
//                   type="tel" 
//                   name="phone"
//                   required 
//                   suppressHydrationWarning 
//                   placeholder=" " 
//                   className="peer w-full bg-transparent border-b border-white/20 py-3 text-[16px] sm:text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors" 
//                 />
//                 <label className="absolute left-0 top-3 text-[14px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
//                   Phone Number
//                 </label>
//               </div>
              
//               <button 
//                 type="submit"
//                 disabled={formStatus.unlock === "loading"}
//                 suppressHydrationWarning
//                 className="mt-4 w-full rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wider uppercase text-navy hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-60"
//               >
//                 {formStatus.unlock === "loading" ? "Unlocking..." : "Unlock Now"}
//               </button>
//               {formStatus.unlock === "error" && (
//                 <p className="text-[12px] text-red-400 text-center">Something went wrong. Please try again.</p>
//               )}
//             </form>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Small components                                                  */
// /* ------------------------------------------------------------------ */

// function Logo({
//   scrolled = true,
//   variant = "header",
// }: {
//   scrolled?: boolean;
//   variant?: "header" | "footer";
// }) {
//   const dark = scrolled || variant === "footer";
//   return (
//     <a href="#" className="flex items-center gap-3 group">
//       <span className="flex items-center gap-2.5 sm:gap-3">

//         <span className="relative h-8 sm:h-12 w-[70px] sm:w-[84px]">
//           <Image
//             src={CONFIDENT_ATRIA_LOGO}
//             alt="Confident Atria logo"
//             fill
//             priority
//             className="object-contain object-left"
//           />
//         </span>
//         <span className={`h-6 w-px shrink-0 ${dark ? "bg-navy/15" : "bg-pearl/25"}`} />
//         <span className="relative h-8 sm:h-9 w-[70px] sm:w-[84px]">
//           <Image
//             src={RRL_LOGO}
//             alt="RRL Group logo"
//             fill
//             priority
//             className="object-contain object-left"
//           />
//         </span>
//       </span>
//       {/* <span className="leading-none hidden sm:block">
//         <span className="block font-[family-name:var(--font-display)] text-lg font-medium tracking-wider text-gold">
//           Confident Atria
//         </span>
//         <span className={`block text-[10px] font-bold tracking-[0.25em] transition-colors duration-500 mt-1 ${dark ? "text-navy/50" : "text-pearl/60"}`}>
//           BY <span className="text-gold">RRL</span> GROUP
//         </span>
//       </span> */}
//     </a>
//   );
// }
// function OverviewPoint({
//   icon: Icon,
//   title,
//   body,
// }: {
//   icon: typeof ShieldCheck;
//   title: string;
//   body: string;
// }) {
//   return (
//     <div className="group border-t border-navy/10 pt-8 hover:border-gold transition-colors duration-500 relative">
//       <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
//       <Icon className="h-6 w-6 text-gold mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
//       <h3 className="text-[18px] font-semibold text-navy mb-3">{title}</h3>
//       <p className="text-[15px] leading-relaxed text-navy/60 font-light">{body}</p>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; 
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import {
  Phone,
  MapPin,
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Compass,
  Building2,
  GraduationCap,
  Factory,
  Milestone,
  ShieldCheck,
  Ruler,
  Layers,
  Home as HomeIcon,
  Armchair,
  Sofa,
  UtensilsCrossed,
  ChefHat,
  Flame,
  BedDouble,
  Bath,
  Car,
  Users,
  Shirt,
  Wind,
  TreePine,
  Aperture,
  Droplets,
  Hammer,
  Plug,
  IndianRupee,
  Key,
  Coffee,
  Waves,
  Dumbbell,
  Trophy,
  Lock,
  AlertCircle,
  Camera,
  Download,
  FileText,
  CheckCircle2,
} from "lucide-react";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const BRONZE = "#8B6F3D";

/* ------------------------------------------------------------------ */
/*  Formspree config                                                   */
/* ------------------------------------------------------------------ */
// TODO: Replace with your real Formspree endpoint, e.g. https://formspree.io/f/abcdwxyz
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaqpnwq";

/* ------------------------------------------------------------------ */
/*  Assets                                                             */
/* ------------------------------------------------------------------ */

const HERO_IMAGE =
  "https://ik.imagekit.io/j0xzq9pns/svt/Atria%20poster%20web.png";
const RRL_LOGO = "https://ik.imagekit.io/j0xzq9pns/svt/logo.png";
const CONFIDENT_ATRIA_LOGO =
  "https://ik.imagekit.io/j0xzq9pns/svt/ChatGPT%20Image%20Jul%2025,%202026,%2012_41_19%20AM.png?updatedAt=1784920355583";
const BROCHURE_URL =
  "https://ik.imagekit.io/j0xzq9pns/svt/STRRPA-Approved-4-BHK-Residential-Villas-in-Confident-Atria-Gated-Community%20(8).pdf";

const FLOOR_PLAN_IMAGES: { src: string; label: string }[] = [
  { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012_page-0001.jpg.jpeg", label: "Villa No. 12" },
  { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%2012A_page-0001.jpg.jpeg", label: "Villa No. 12A" },
  { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20124_page-0001.jpg%20(1).jpeg", label: "Villa No. 124" },
  { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20125_page-0001.jpg.jpeg", label: "Villa No. 125" },
  { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20181_page-0001.jpg.jpeg", label: "Villa No. 181" },
  { src: "https://ik.imagekit.io/j0xzq9pns/svt/Villa%20266_page-0001.jpg.jpeg", label: "Villa No. 266" },
];

/* ------------------------------------------------------------------ */
/*  Content                                                           */
/* ------------------------------------------------------------------ */

const PHONES = ["8494966966"];
const ADDRESS = [
  "Confident Atria",
  "Sarjapura - Attibele Road",
  "Bengaluru, Karnataka",
];

const STATS = [
  { label: "Configuration", value: "4 BHK", icon: HomeIcon },
  { label: "Site Area", value: "1162 sqft", icon: Ruler },
  { label: "Total Built-up", value: "2400.50 sqft", icon: Layers },
  { label: "Availability", value: "12 Units Left", icon: AlertCircle },
];

// Site-wise plot area table (from brochure)
const SITE_AREAS: { site: string; area: string }[] = [
  { site: "12", area: "1,162" },
  { site: "12A", area: "1,162" },
  { site: "124", area: "1,302" },
  { site: "125", area: "1,285" },
  { site: "181", area: "1,162" },
  { site: "199", area: "1,346" },
  { site: "202", area: "1,096" },
  { site: "218", area: "1,200" },
  { site: "220", area: "1,200" },
  { site: "221", area: "1,200" },
  { site: "256", area: "1,500" },
  { site: "266", area: "1,200" },
];

// Fully updated exact amenities from the PDF and Flyer
const AMENITIES = [
  {
    icon: Coffee,
    title: "Premium Clubhouse",
    body: "A Family & Social hub featuring a premium clubhouse, banquet hall, and an outdoor amphitheater.",
  },
  {
    icon: Waves,
    title: "Large Swimming Pool",
    body: "A pristine, large recreational swimming pool designed for daily relaxation and fitness.",
  },
  {
    icon: Trophy,
    title: "Sports & Courts",
    body: "Tennis & basketball courts, dedicated indoor squash and badminton courts, and an indoor games room.",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Tracks",
    body: "Fully equipped gymnasium alongside dedicated jogging, strolling, and cycling tracks.",
  },
  {
    icon: TreePine,
    title: "Parks & Open Lawns",
    body: "Beautiful flower gardens, landscaped open lawns, and a dedicated safe children's play area.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Manned Security",
    body: "Fully gated community with 24/7 manned security, extensive CCTV surveillance, and visitor parking.",
  },
  {
    icon: Droplets,
    title: "Eco-Friendly Infrastructure",
    body: "Concrete internal roads, eco-friendly rainwater harvesting, and robust water storage systems.",
  },
  {
    icon: Sun,
    title: "Vaastu Compliant",
    body: "Thoughtfully designed spaces ensuring 100% Vaastu compliance along with a dedicated meditation area.",
  },
];

type Room = { name: string; dim: string };

function getRoomIcon(name: string) {
  const n = name.toLowerCase();
  if (n.includes("sitout")) return Armchair;
  if (n.includes("living")) return Sofa;
  if (n.includes("dining")) return UtensilsCrossed;
  if (n.includes("kitchen")) return ChefHat;
  if (n.includes("pooja")) return Flame;
  if (n.includes("bed")) return BedDouble;
  if (n.includes("toilet")) return Bath;
  if (n.includes("parking")) return Car;
  if (n.includes("family")) return Users;
  if (n.includes("dress")) return Shirt;
  if (n.includes("balcony")) return Wind;
  if (n.includes("terrace")) return TreePine;
  if (n.includes("sky")) return Aperture;
  return HomeIcon;
}

const FLOORS: {
  id: string;
  label: string;
  tag: string;
  area: string;
  rooms: Room[];
  note: string;
}[] = [
  {
    id: "ground",
    label: "Ground Floor",
    tag: "Arrival Level",
    area: "936.80 sqft",
    note: "Living, dining and a private bedroom open onto a landscaped car court.",
    rooms: [
      { name: "Sitout", dim: "15'6\" x 5'0\"" },
      { name: "Living Area", dim: "13'0\" x 14'6\"" },
      { name: "Dining Area", dim: "8'6\" x 14'0\"" },
      { name: "Kitchen", dim: "11'0\" x 8'0\"" },
      { name: "Pooja", dim: "3'2\" x 4'8\"" },
      { name: "Bed Room", dim: "10'6\" x 16'0\"" },
      { name: "Toilet", dim: "5'0\" x 8'0\"" },
    ],
  },
  {
    id: "first",
    label: "First Floor",
    tag: "Private Level",
    area: "920.40 sqft",
    note: "Two master suites with dressing rooms, framed by a shared family area and balcony.",
    rooms: [
      { name: "Master Bed Room", dim: "11'0\" x 16'0\"" },
      { name: "Bed Room", dim: "10'6\" x 16'0\"" },
      { name: "Family Area", dim: "8'6\" x 18'6\"" },
      { name: "Dress Area", dim: "5'8\" x 8'0\"" },
      { name: "Dress Area", dim: "7'8\" x 8'0\"" },
      { name: "Balcony", dim: "4'8\" x 8'6\"" },
      { name: "Toilet", dim: "5'0\" x 8'0\"" },
      { name: "Toilet", dim: "5'0\" x 8'0\"" },
    ],
  },
  {
    id: "terrace",
    label: "Terrace Floor",
    tag: "Sky Level",
    area: "543.30 sqft",
    note: "A third master suite opens to an open terrace, sitout and skylight above the stair.",
    rooms: [
      { name: "Master Bed Room", dim: "11'0\" x 16'0\"" },
      { name: "Sitout Area", dim: "8'6\" x 16'6\"" },
      { name: "Dress Area", dim: "5'8\" x 8'0\"" },
      { name: "Toilet", dim: "5'0\" x 8'0\"" },
      { name: "Open Terrace", dim: "Open to sky" },
      { name: "Sky Light", dim: "Above staircase" },
    ],
  },
];

const SPECS: { group: string; rows: [string, string][] }[] = [
  {
    group: "Approvals & Layout",
    rows: [
      ["Layout Approval", "BMRDA Approved"],
      ["Layout Extent", "25-Acre Gated Community (319 Units)"],
      ["Layout Name", "Confident Atria"],
      ["Developer", "Confident Group"],
      ["Architect", "STAVBA Infra LLP"],
    ],
  },
  {
    group: "Structure & Envelope",
    rows: [
      ["Building Structure", "RCC Column Frame"],
      ["Walls", "6\" Solid Block"],
      ["Main Door", "Teak Wood"],
      ["Internal Doors", "Teak Wood Frame, Ready-made Flush Doors"],
      ["Windows", "3-Track UPVC, Wooden Pattern, Best Quality"],
    ],
  },
  {
    group: "Interiors & Finishes",
    rows: [
      ["Flooring - Bedrooms & Living", "Vitrified Tiles, 4' x 6'"],
      ["Flooring - Toilet Walls", "Glazed Tiles, 2' x 4'"],
      ["Flooring - Staircase & Sitout", "Granite"],
      ["Painting - Internal", "Asian Paints Tractor Emulsion"],
      ["Painting - External", "Asian Paints Ultima Protek, Texture Finish"],
    ],
  },
  {
    group: "Electrical & Plumbing",
    rows: [
      ["Electrical", "Polycab / V-Guard / Havells"],
      ["Sanitary - Internal Piping", "Supreme PVC & UPVC"],
      ["Sanitary - Fittings", "Jaquar"],
      ["Sanitary - Flush Tanks", "Grohe"],
    ],
  },
  {
    group: "Utilities & Boundary",
    rows: [
      ["Underground Sump", "8000 Ltr, RCC Structure"],
      ["Overhead Tank", "1000 Ltr, 3-Layer Fibre"],
      ["Compound Wall", "Individual Compound Wall Provided"],
    ],
  },
];

const LANDMARKS: {
  category: string;
  icon: typeof GraduationCap;
  places: string[];
}[] = [
  {
    category: "Education",
    icon: GraduationCap,
    places: ["Azim Premji University", "TISB School", "Indus School", "Global Indian International School"],
  },
  {
    category: "Business & Industry",
    icon: Factory,
    places: ["Infosys Campus", "Exide Factory", "SVT RMC Plant"],
  },
  {
    category: "Civic & Everyday",
    icon: ShieldCheck,
    places: ["Police Station", "Sompura Gate"],
  },
  {
    category: "Connectivity",
    icon: Milestone,
    places: ["Sarjapura Circle", "Attibele Circle", "Dommasandra", "Whitefield Corridor", "Chandapura Road"],
  },
];

/* ------------------------------------------------------------------ */
/*  Scroll-reveal helper                                              */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */

type FormKey = "top" | "enquire" | "unlock";
type FormStatus = "idle" | "loading" | "success" | "error";

export default function Page() {
  const [floorTab, setFloorTab] = useState("ground");
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [heroIn, setHeroIn] = useState(false);

  // Unified unlock state: gates Floor Plans + Brochure viewer/download across the site.
  // Set to true the moment ANY contact form (top form, enquire form, or popup) is submitted.
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const router = useRouter();

  const [formStatus, setFormStatus] = useState<Record<FormKey, FormStatus>>({
    top: "idle",
    enquire: "idle",
    unlock: "idle",
  });

  const activeFloor = FLOORS.find((f) => f.id === floorTab)!;

  useEffect(() => {
    const t = setTimeout(() => setHeroIn(true), 80);
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.title = "Confident Atria by RRL Group";
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Generic Formspree submit handler shared by all contact forms on the page.
  // const submitToFormspree = async (
  //   e: React.FormEvent<HTMLFormElement>,
  //   key: FormKey
  // ) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   setFormStatus((s) => ({ ...s, [key]: "loading" }));
  //   try {
  //     const data = new FormData(form);
  //     const res = await fetch(FORMSPREE_ENDPOINT, {
  //       method: "POST",
  //       body: data,
  //       headers: { Accept: "application/json" },
  //     });
  //     if (res.ok) {
  //       setFormStatus((s) => ({ ...s, [key]: "success" }));
  //       setIsUnlocked(true);
  //       if (key === "unlock") setIsPopupOpen(false);
  //       form.reset();
  //     } else {
  //       setFormStatus((s) => ({ ...s, [key]: "error" }));
  //     }
  //   } catch {
  //     setFormStatus((s) => ({ ...s, [key]: "error" }));
  //   }
  // };

const submitToFormspree = async (
    e: React.FormEvent<HTMLFormElement>,
    key: FormKey
  ) => {
    e.preventDefault();
    const form = e.currentTarget;
    setFormStatus((s) => ({ ...s, [key]: "loading" }));

    try {
      const data = new FormData(form);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormStatus((s) => ({ ...s, [key]: "success" }));
        setIsUnlocked(true);
        
        // Close the popup if the unlock form was submitted
        if (key === "unlock") {
          setIsPopupOpen(false);
        }
        
        form.reset();

        // Only redirect to the Thank You page for the top and bottom forms
        if (key === "enquire" || key === "top") {
          router.push("/c4/thankyou");
        }
      } else {
        setFormStatus((s) => ({ ...s, [key]: "error" }));
      }
    } catch {
      setFormStatus((s) => ({ ...s, [key]: "error" }));
    }
  };

  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} bg-[#FAFAFA] text-navy font-[family-name:var(--font-body)] selection:bg-gold selection:text-navy scroll-smooth overflow-x-hidden`}
    >
      <style jsx global>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-18px) translateX(10px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: floatSlow 9s ease-in-out infinite; }
        .animate-float-slow { animation: floatSlow 13s ease-in-out infinite; }
        .fade-in-up { animation: fadeInUp 0.5s ease-out both; }
        
        :root {
          --navy: #0B1E36;
          --gold: #D4AF37;
          --pearl: #FFFFFF;
        }
      `}</style>

      {/* ---------------------------------------------------------- SCROLL PROGRESS */}
      <div className="fixed top-0 left-0 h-[2px] bg-gold z-[60] transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />

      {/* ---------------------------------------------------------- NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
          scrolled ? "border-navy/10 bg-pearl/95 backdrop-blur-md shadow-sm" : "border-transparent bg-transparent"
        }`}
      >
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20 sm:h-24"}`}>
          <Logo scrolled={scrolled} />
          <nav className={`hidden md:flex items-center gap-10 text-[13px] tracking-[0.1em] uppercase transition-colors duration-300 ${
            scrolled ? "text-navy/70" : "text-pearl/80"
          }`}>
            {["Overview", "Residences", "Specifications", "Location", "Enquire"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative group py-1 hover:text-gold transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <a
            href={`tel:+91${PHONES[0]}`}
            className={`hidden md:inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-[13px] font-medium tracking-wide transition-all duration-300 ${
              scrolled 
                ? "border-navy/20 text-navy hover:bg-navy hover:text-pearl" 
                : "border-pearl/40 text-pearl hover:bg-pearl hover:text-navy"
            }`}
          >
            <Phone className="h-3.5 w-3.5" /> Call Us
          </a>
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={`tel:+91${PHONES[0]}`}
              aria-label="Call us"
              className={`inline-flex items-center justify-center h-9 w-9 rounded-full border transition-colors duration-300 ${
                scrolled ? "border-navy/20 text-navy" : "border-pearl/40 text-pearl"
              }`}
            >
              <Phone className="h-4 w-4" />
            </a>
            <button suppressHydrationWarning onClick={() => setNavOpen((v) => !v)} className={`transition-colors duration-300 ${scrolled ? "text-navy" : "text-pearl"}`} aria-label="Toggle menu">
              {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Nav */}
        {navOpen && (
          <div className="md:hidden border-t border-navy/10 bg-pearl px-6 py-6 flex flex-col gap-5 text-sm tracking-wide uppercase text-navy/80 shadow-2xl">
            {["Overview", "Residences", "Brochure", "Specifications", "Location", "Enquire"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setNavOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ---------------------------------------------------------- HERO */}
      <section className="relative overflow-hidden bg-navy text-pearl pt-28 sm:pt-32 pb-16 px-6 lg:px-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 right-[-8%] h-[560px] w-[560px] rounded-full bg-gold/[0.08] blur-[100px] animate-float" />
          <div className="absolute bottom-[-10%] left-[-8%] h-[420px] w-[420px] rounded-full blur-[90px] animate-float-slow bg-gold/[0.05]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>

        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 lg:items-center lg:min-h-[75vh]">
          {/* Left Hero Content */}
          <div className="pt-6 sm:pt-10">
            <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="h-px w-8 bg-gold/60" />
              <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gold/90">Confident Atria by RRL Group</span>
            </div>
            
            <h1 className={`font-[family-name:var(--font-display)] italic font-light text-[clamp(2.2rem,4.5vw,4.2rem)] leading-[1.1] text-pearl transition-all duration-700 delay-100 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Own the home <br />
              <span className="not-italic font-medium text-gold">your family deserves.</span>
            </h1>
            
            <p className={`mt-6 max-w-lg text-[16px] font-light leading-relaxed text-pearl/70 transition-all duration-700 delay-200 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Premium 4 BHK villa living in a sprawling 25-acre gated community. Sarjapura – Attibele Road, Bengaluru. Starts at just ₹2 CR* onwards.
            </p>

            {/* HIGHLIGHTED BADGES — only RRL & Confident Atria are emphasized */}
            <Reveal delay={250} className={`mt-8 flex flex-wrap items-center gap-2 sm:gap-3 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-[11px] font-medium tracking-[0.1em] uppercase text-pearl/80 backdrop-blur-md">
                <Building2 className="h-4 w-4 text-pearl/60 shrink-0" /> Constructed by SVT Developers & Constructions
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase text-gold backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <Milestone className="h-4 w-4 shrink-0" /> Marketed by RRL Group
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase text-white backdrop-blur-md">
                <Key className="h-4 w-4 text-gold shrink-0" /> Possession in 4 Months
              </div>
            </Reveal>

            <div className={`mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-5 transition-all duration-700 delay-300 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <a
                href="#enquire"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-[13px] font-semibold tracking-wide text-navy hover:bg-pearl transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                Book Your Site Visit Today! <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#residences"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-pearl/30 px-8 py-4 text-[13px] tracking-wide text-pearl hover:bg-pearl/10 transition-colors"
              >
                View Floor Plans
              </a>
            </div>
          </div>

          {/* Right Hero Content: Villa Image & Stats */}
          <div className="w-full flex flex-col gap-6">
            <Reveal delay={200} className={`relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 transition-all duration-1000 ${heroIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              <Image 
                src={HERO_IMAGE} 
                alt="Confident Atria Premium Villa Exterior" 
                fill 
                priority
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                <div className="inline-flex items-center gap-2 rounded-full bg-navy/60 backdrop-blur-md border border-white/20 px-4 py-1.5">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">Only 12 Villas Available</span>
                </div>
              </div>
            </Reveal>

            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 transition-all duration-700 delay-400 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {STATS.map(({ label, value, icon: Icon }) => (
                <div key={label} className="bg-white/5 border border-white/10 p-3 sm:p-4 rounded-2xl backdrop-blur-sm flex flex-col gap-2 sm:gap-3 hover:bg-white/10 transition-colors">
                  <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[15px] font-medium text-pearl leading-tight">{value}</p>
                    <p className="text-[10px] tracking-[0.05em] uppercase text-pearl/50 mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- QUICK ENQUIRY (TOP CONTACT FORM) */}
      {/* <section id="quick-enquiry" className="relative px-6 lg:px-10 py-16 sm:py-20 bg-[#F8F9FA] border-b border-navy/5">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center mb-10">
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-3">Get Started</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy">
              Talk to us about <span className="text-gold italic">Confident Atria</span>
            </h2>
            <p className="mt-3 text-[14px] sm:text-[15px] text-navy/60 max-w-md mx-auto">
              Share your details and our team will reach out — plus instantly unlock the brochure & floor plans.
            </p>
          </Reveal>

          <Reveal delay={100} className="bg-white rounded-[2rem] border border-navy/10 shadow-lg p-6 sm:p-10">
            <form onSubmit={(e) => submitToFormspree(e, "top")} className="grid sm:grid-cols-2 gap-6">
              <input type="hidden" name="_subject" value="New enquiry — Confident Atria (Quick Form)" />
              <div className="relative">
                <input type="text" id="top-name" name="name" required suppressHydrationWarning placeholder=" " className="peer w-full bg-transparent border-b border-navy/20 py-3 text-[16px] sm:text-[15px] text-navy focus:outline-none focus:border-gold transition-colors" />
                <label htmlFor="top-name" className="absolute left-0 top-3 text-[14px] text-navy/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">Full Name</label>
              </div>
              <div className="relative">
                <input type="tel" id="top-phone" name="phone" required suppressHydrationWarning placeholder=" " className="peer w-full bg-transparent border-b border-navy/20 py-3 text-[16px] sm:text-[15px] text-navy focus:outline-none focus:border-gold transition-colors" />
                <label htmlFor="top-phone" className="absolute left-0 top-3 text-[14px] text-navy/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">Phone Number</label>
              </div>
              <div className="relative sm:col-span-2">
                <input type="email" id="top-email" name="email" suppressHydrationWarning placeholder=" " className="peer w-full bg-transparent border-b border-navy/20 py-3 text-[16px] sm:text-[15px] text-navy focus:outline-none focus:border-gold transition-colors" />
                <label htmlFor="top-email" className="absolute left-0 top-3 text-[14px] text-navy/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">Email Address (Optional)</label>
              </div>

              <div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={formStatus.top === "loading"}
                  suppressHydrationWarning
                  className="w-full sm:w-auto flex-1 rounded-full bg-gold px-8 py-4 text-[13px] font-semibold tracking-wider uppercase text-navy hover:bg-navy hover:text-pearl transition-all duration-300 disabled:opacity-60"
                >
                  {formStatus.top === "loading" ? "Submitting..." : "Get Details & Unlock Brochure"}
                </button>
                {formStatus.top === "success" && (
                  <a
                    href={BROCHURE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gold text-gold px-8 py-4 text-[13px] font-semibold tracking-wider uppercase hover:bg-gold hover:text-navy transition-all duration-300"
                  >
                    <Download className="h-4 w-4" /> Download Brochure
                  </a>
                )}
              </div>
              {formStatus.top === "success" && (
                <p className="sm:col-span-2 flex items-center gap-2 text-[13px] text-green-700">
                  <CheckCircle2 className="h-4 w-4" /> Thank you! Your details were received — floor plans & brochure are now unlocked below.
                </p>
              )}
              {formStatus.top === "error" && (
                <p className="sm:col-span-2 text-[13px] text-red-600">
                  Something went wrong. Please try again or call us directly at +91 {PHONES[0]}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section> */}

      {/* ---------------------------------------------------------- QUICK ENQUIRY (TOP CONTACT FORM) */}
      <section id="quick-enquiry" className="relative px-6 lg:px-10 py-16 sm:py-20 bg-[#F8F9FA] border-b border-navy/5">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center mb-10">
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-3">Get Started</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy">
              Talk to us about <span className="text-gold italic">Confident Atria</span>
            </h2>
            <p className="mt-3 text-[14px] sm:text-[15px] text-navy/60 max-w-md mx-auto">
              Share your details and our expert team will reach out to answer your questions and schedule a site visit.
            </p>
          </Reveal>

          <Reveal delay={100} className="bg-white rounded-[2rem] border border-navy/10 shadow-lg p-6 sm:p-10">
            <form onSubmit={(e) => submitToFormspree(e, "top")} className="grid sm:grid-cols-2 gap-6">
              <input type="hidden" name="_subject" value="New enquiry — Confident Atria (Quick Form)" />
              
              <div className="relative">
                <input type="text" id="top-name" name="name" required suppressHydrationWarning placeholder=" " className="peer w-full bg-transparent border-b border-navy/20 py-3 text-[16px] sm:text-[15px] text-navy focus:outline-none focus:border-gold transition-colors" />
                <label htmlFor="top-name" className="absolute left-0 top-3 text-[14px] text-navy/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">Full Name</label>
              </div>
              
              <div className="relative">
                <input type="tel" id="top-phone" name="phone" required suppressHydrationWarning placeholder=" " className="peer w-full bg-transparent border-b border-navy/20 py-3 text-[16px] sm:text-[15px] text-navy focus:outline-none focus:border-gold transition-colors" />
                <label htmlFor="top-phone" className="absolute left-0 top-3 text-[14px] text-navy/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">Phone Number</label>
              </div>
              
              <div className="relative sm:col-span-2">
                <input type="email" id="top-email" name="email" suppressHydrationWarning placeholder=" " className="peer w-full bg-transparent border-b border-navy/20 py-3 text-[16px] sm:text-[15px] text-navy focus:outline-none focus:border-gold transition-colors" />
                <label htmlFor="top-email" className="absolute left-0 top-3 text-[14px] text-navy/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">Email Address (Optional)</label>
              </div>

              <div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={formStatus.top === "loading"}
                  suppressHydrationWarning
                  className="w-full sm:w-auto flex-1 rounded-full bg-gold px-8 py-4 text-[13px] font-semibold tracking-wider uppercase text-navy hover:bg-navy hover:text-pearl transition-all duration-300 disabled:opacity-60"
                >
                  {formStatus.top === "loading" ? "Submitting..." : "Submit Enquiry"}
                </button>
              </div>
              
              {formStatus.top === "error" && (
                <p className="sm:col-span-2 text-[13px] text-red-600">
                  Something went wrong. Please try again or call us directly at +91 {PHONES[0]}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- OVERVIEW (WITH ENTRANCE IMAGE) */}
      <section id="overview" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
              <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Why Choose Confident Atria?</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy mb-8">
                Starting at ₹2 Cr* — Possession in 4 Months
              </h2>
              
              {/* Project Entrance Image */}
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-navy/10 group">
                <Image 
                  src="https://ik.imagekit.io/j0xzq9pns/svt/WhatsApp%20Image%202026-07-18%20at%205.57.47%20PM.jpeg" 
                  alt="Confident Atria Entrance" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <p className="text-sm font-medium tracking-wider uppercase drop-shadow-md">Confident Atria</p>
                  <p className="text-xs text-white/80 font-light mt-1">Project Entrance View</p>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10 lg:pl-10">
              <Reveal delay={100}>
                <OverviewPoint icon={ShieldCheck} title="BMRDA Approved" body="Fully compliant, legally cleared project — buy with complete confidence." />
              </Reveal>
              <Reveal delay={200}>
                <OverviewPoint icon={Key} title="Ready to Move In" body="Get possession in just 4 months from the date of booking — no long waiting periods." />
              </Reveal>
              <Reveal delay={300}>
                <OverviewPoint icon={Building2} title="Confident Group" body="Renowned developer of well-planned, premium residential communities." />
              </Reveal>
              <Reveal delay={400}>
                <OverviewPoint icon={Hammer} title="SVT Builders & Developers" body="Trusted construction quality across Bengaluru." />
              </Reveal>
              <Reveal delay={500} className="sm:col-span-2">
                <div className="group border-t border-navy/10 pt-8 hover:border-gold transition-colors duration-500 relative">
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
                  <Compass className="h-6 w-6 text-gold mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  <h3 className="text-[18px] font-semibold text-navy mb-3">East-Facing, 1162 sqft</h3>
                  <p className="text-[15px] leading-relaxed text-navy/60 font-light">A 1162 sqft East-facing site carries 2400.50 sqft of built-up area across ground, first and terrace levels — RCC column framing, 6-inch solid block walls, teak wood doors and 3-track UPVC windows.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>



      {/* ---------------------------------------------------------- AMENITIES */}
      <section className="relative px-6 lg:px-10 py-24 sm:py-32 bg-white border-y border-navy/5">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Living Here</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy">
              World-Class Amenities for Every Lifestyle
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <div className="group h-full rounded-2xl bg-[#F8F9FA] p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gold/30 hover:-translate-y-2">
                  <div className="h-14 w-14 rounded-full flex items-center justify-center mb-6 bg-white group-hover:bg-gold transition-colors duration-500">
                    <a.icon className="h-6 w-6 text-navy group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[17px] font-semibold text-navy mb-3">{a.title}</h3>
                  <p className="text-[14px] leading-relaxed text-navy/60">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- INSIDE THE VILLA */}
      <section className="relative px-6 lg:px-10 py-24 sm:py-32 bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">A Glimpse of Your Future Home</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy">
              Inside the Villa
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-navy/60">
              Actual site photos — premium finishes, spacious interiors, and quality craftsmanship throughout.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            <Reveal delay={100}>
              <div className="group h-full rounded-2xl bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gold/30 hover:-translate-y-2">
                <div className="h-14 w-14 rounded-full flex items-center justify-center mb-6 bg-[#F8F9FA] group-hover:bg-gold transition-colors duration-500">
                  <HomeIcon className="h-6 w-6 text-navy group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-semibold text-navy mb-3">Premium Finishes</h3>
                <p className="text-[14px] leading-relaxed text-navy/60">Top-grade materials and brand-name fittings across every room.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="group h-full rounded-2xl bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gold/30 hover:-translate-y-2">
                <div className="h-14 w-14 rounded-full flex items-center justify-center mb-6 bg-[#F8F9FA] group-hover:bg-gold transition-colors duration-500">
                  <Ruler className="h-6 w-6 text-navy group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-semibold text-navy mb-3">Spacious Interiors</h3>
                <p className="text-[14px] leading-relaxed text-navy/60">Thoughtfully designed layouts that maximise comfort and natural light.</p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="group h-full rounded-2xl bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gold/30 hover:-translate-y-2">
                <div className="h-14 w-14 rounded-full flex items-center justify-center mb-6 bg-[#F8F9FA] group-hover:bg-gold transition-colors duration-500">
                  <Hammer className="h-6 w-6 text-navy group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-semibold text-navy mb-3">Quality Craftsmanship</h3>
                <p className="text-[14px] leading-relaxed text-navy/60">Skilled workmanship visible in every corner and surface detail.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- RESIDENCES / FLOOR PLANS */}
      <section id="residences" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-[#F8F9FA] border-t border-navy/5">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Residences</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy max-w-lg">Six villa layouts, one address</h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-navy/60">
              Villas 12, 12A, 124, 125, 181 and 266 — each thoughtfully planned across ground,
              first and terrace levels. Submit your details to view every floor plan.
            </p>
          </Reveal>

          {/* GATED FLOOR PLAN IMAGES — all 6 villas, images only, same reveal flow as brochure */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {FLOOR_PLAN_IMAGES.map((img, idx) => (
              <Reveal key={img.src} delay={idx * 80} className="rounded-3xl overflow-hidden border border-navy/10 shadow-lg bg-white aspect-[3/4] relative group">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className={`object-contain bg-white p-2 transition-all duration-700 ease-out ${!isUnlocked ? "blur-xl scale-110" : "group-hover:scale-105"}`}
                />

                {!isUnlocked && (
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex flex-col items-center justify-center z-10">
                    <div className="h-14 w-14 rounded-full bg-navy/5 flex items-center justify-center mb-4 border border-white/40 shadow-sm">
                      <Lock className="h-5 w-5 text-navy/70" />
                    </div>
                    <button
                      onClick={() => setIsPopupOpen(true)}
                      suppressHydrationWarning
                      className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[13px] font-semibold tracking-wide text-navy hover:bg-navy hover:text-pearl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    >
                      Unlock to View
                    </button>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- BROCHURE VIEWER */}
      <section id="brochure" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Brochure</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy mb-6">
              Explore the full <span className="text-gold italic">Confident Atria</span> brochure
            </h2>
            <p className="text-[15px] text-navy/60 max-w-xl mx-auto mb-10">
              Complete details on pricing, floor plans, specifications and amenities — viewable and downloadable in one document.
            </p>
          </Reveal>

          <Reveal delay={100} className="relative rounded-3xl overflow-hidden border border-navy/10 shadow-xl bg-[#F8F9FA] aspect-[3/4] sm:aspect-[16/9] group">
            <iframe
              src={`${BROCHURE_URL}#toolbar=0`}
              title="Confident Atria Brochure"
              className={`w-full h-full transition-all duration-700 ${!isUnlocked ? "blur-xl scale-110 pointer-events-none" : ""}`}
            />

            {!isUnlocked ? (
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex flex-col items-center justify-center z-10">
                <div className="h-16 w-16 rounded-full bg-navy/5 flex items-center justify-center mb-5 border border-white/40 shadow-sm">
                  <Lock className="h-6 w-6 text-navy/70" />
                </div>
                <button
                  onClick={() => setIsPopupOpen(true)}
                  suppressHydrationWarning
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wide text-navy hover:bg-navy hover:text-pearl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  <FileText className="h-4 w-4" /> Unlock Brochure
                </button>
              </div>
            ) : (
              <a
                href={BROCHURE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 inline-flex items-center gap-2.5 rounded-full bg-navy px-6 py-3.5 text-[13px] font-semibold tracking-wide text-pearl hover:bg-gold hover:text-navy hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 z-10"
              >
                <Download className="h-4 w-4" /> Download Brochure
              </a>
            )}
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- SITE-WISE AREA TABLE */}
      <section className="relative px-6 lg:px-10 py-20 sm:py-24 bg-[#F8F9FA] border-y border-navy/5">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-10 text-center">
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Available Units</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy">
              Villa Dimensions — Site-wise Area
            </h2>
          </Reveal>
          <Reveal delay={100} className="overflow-x-auto rounded-3xl border border-navy/10 bg-white shadow-sm">
            <table className="w-full min-w-[420px] text-[14px]">
              <thead>
                <tr className="border-b border-navy/10 bg-[#F8F9FA]">
                  <th className="text-left px-4 sm:px-6 py-4 font-semibold text-navy tracking-wide">Site No.</th>
                  <th className="text-right px-4 sm:px-6 py-4 font-semibold text-navy tracking-wide">Area (Sq.ft)</th>
                </tr>
              </thead>
              <tbody>
                {SITE_AREAS.map((row, i) => (
                  <tr key={row.site} className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}>
                    <td className="px-4 sm:px-6 py-3.5 text-navy/80 border-t border-navy/5">{row.site}</td>
                    <td className="px-4 sm:px-6 py-3.5 text-right text-navy font-medium border-t border-navy/5">{row.area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="mt-5 text-center text-[13px] text-navy/50">
            All villas are 4 BHK · Total Built-Up Area: ~2,400 Sq.ft · Site areas vary by plot
          </p>
        </div>
      </section>
      
      {/* ---------------------------------------------------------- SPECIFICATIONS */}
      <section id="specifications" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-navy text-pearl">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Specifications</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-pearl">Built with material honesty</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {SPECS.map((group, gi) => (
              <Reveal key={group.group} delay={gi * 100} className="bg-white/5 rounded-3xl border border-white/10 p-6 sm:p-8 hover:bg-white/10 transition-colors duration-500">
                <h3 className="font-[family-name:var(--font-display)] italic text-2xl text-gold mb-8">{group.group}</h3>
                <dl className="divide-y divide-white/10">
                  {group.rows.map(([k, v]) => (
                    <div key={k} className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-6 py-4 text-[15px]">
                      <dt className="text-pearl/60 font-light">{k}</dt>
                      <dd className="text-left sm:text-right text-pearl font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- LOCATION */}
      <section id="location" className="relative px-6 lg:px-10 py-24 sm:py-32 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <Reveal>
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Prime Location</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl leading-tight text-navy mb-6">
              Set at the centre of Sarjapura Attibele Road
            </h2>
            <p className="text-[15px] leading-relaxed text-navy/60 mb-10 max-w-lg">
              <span className="text-gold italic font-medium">Confident Atria</span> sits in <strong className="text-navy font-semibold">one of Bengaluru's fastest-growing residential corridors with high appreciation</strong>. Excellent Connectivity to Chandapura Road, Sarjapura Circle, Attibele Circle, near Dommasandra & the Whitefield Corridor.
            </p>

            {/* Address Block */}
            <Reveal delay={50} className="mb-12 p-6 rounded-2xl bg-[#F8F9FA] border border-navy/5 inline-block w-full max-w-lg hover:border-gold/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
                <div>
                  <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-navy/80 mb-2">Site Address</p>
                  <p className="text-[15px] leading-relaxed text-navy/70">
                    <span className="text-gold font-bold">Confident Atria</span><br />
                    Constructed by SVT Developers & Constructions | Marketed by <span className="text-gold font-semibold">RRL Group</span><br />
                    {ADDRESS[1]}<br />
                    {ADDRESS[2]}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-10">
              {LANDMARKS.map(({ category, icon: Icon, places }, i) => (
                <Reveal key={category} delay={i * 100}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-gold" strokeWidth={2} />
                    </div>
                    <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-navy/80">{category}</p>
                  </div>
                  <ul className="space-y-2 border-l-2 border-navy/5 pl-4 ml-5">
                    {places.map((p) => (
                      <li key={p} className="text-[14px] text-navy/70 relative before:absolute before:-left-[21px] before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold">{p}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Interactive Google Map & Link */}
          <Reveal delay={200} className="relative h-full min-h-[320px] sm:min-h-[500px] w-full rounded-3xl overflow-hidden border border-navy/10 shadow-xl lg:sticky lg:top-32 group">
            {/* Embedded Live Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.681177651084!2d77.73356061327117!3d12.805374665510427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ef338f9038d%3A0xc3fdeea0b15b67bc!2sSarjapura%20-%20Attibele%20Rd%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
            />
            
            {/* Floating "Get Directions" Link Button */}
            <a
              href="https://maps.google.com/?q=Confident+Aspire,Sarjapura+Attibele+Road,Burgunte+Village,Bengaluru,Karnataka+562107"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2.5 rounded-full bg-navy px-5 sm:px-6 py-3 sm:py-3.5 text-[12px] sm:text-[13px] font-semibold tracking-wide text-pearl hover:bg-gold hover:text-navy hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 z-10"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- ENQUIRE */}
      <section id="enquire" className="relative py-24 sm:py-32 bg-navy text-pearl overflow-hidden">
        {/* Full width background effects */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_right,_rgba(212,175,55,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
            
            {/* Left Column: Context & Contact Info */}
            <div className="flex flex-col justify-center h-full">
              <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-6">Enquire</p>
              <h2 className="font-[family-name:var(--font-display)] italic text-3xl sm:text-4xl lg:text-5xl text-pearl leading-tight mb-10">
                Only 12 premium villas remain at <span className="not-italic text-gold">Confident Atria</span>.
              </h2>
              
              <div className="flex flex-wrap items-center gap-4 mb-12">
                {PHONES.map((p) => (
                  <a
                    key={p}
                    href={`tel:+91${p}`}
                    className="relative inline-flex items-center gap-3 rounded-full border border-gold/30 px-8 py-4 text-[15px] font-medium tracking-wide text-pearl hover:bg-gold hover:text-navy hover:border-gold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <Phone className="h-4 w-4 relative" /> <span className="relative">{p}</span>
                  </a>
                ))}
              </div>

              <div className="pt-10 border-t border-white/10">
                 <p className="text-[14px] text-pearl/60 font-light leading-relaxed">
                   Constructed by SVT Developers & Constructions | Marketed by <span className="text-gold font-bold uppercase tracking-wide">RRL Group</span> <br />
                   {ADDRESS[1]}, {ADDRESS[2]}
                 </p>
              </div>
            </div>

            {/* Right Column: Premium Contact Form */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-6 sm:p-12 backdrop-blur-sm shadow-2xl relative">
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-gold/20 blur-3xl rounded-full pointer-events-none" />
              
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-pearl mb-8">Register your interest</h3>
              
              <form className="flex flex-col gap-6" onSubmit={(e) => submitToFormspree(e, "enquire")}>
                <input type="hidden" name="_subject" value="New enquiry — Confident Atria (Main Form)" />

                {/* Name Input */}
                <div className="relative">
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    suppressHydrationWarning
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-[16px] sm:text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
                  />
                  <label htmlFor="name" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
                    Full Name
                  </label>
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    required
                    suppressHydrationWarning
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-[16px] sm:text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
                  />
                  <label htmlFor="phone" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
                    Phone Number
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    suppressHydrationWarning
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-[16px] sm:text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
                  />
                  <label htmlFor="email" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
                    Email Address
                  </label>
                </div>

                {/* Message Input */}
                <div className="relative mt-2">
                  <textarea 
                    id="message"
                    name="message"
                    rows={3}
                    suppressHydrationWarning
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-[16px] sm:text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                  <label htmlFor="message" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
                    Message (Optional)
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={formStatus.enquire === "loading"}
                  suppressHydrationWarning
                  className="mt-6 w-full rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wider uppercase text-navy hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-60"
                >
                  {formStatus.enquire === "loading" ? "Submitting..." : "Submit Enquiry"}
                </button>

                {formStatus.enquire === "success" && (
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <p className="flex items-center gap-2 text-[13px] text-green-400">
                      <CheckCircle2 className="h-4 w-4" /> Thank you! We'll be in touch shortly.
                    </p>
                    <a
                      href={BROCHURE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-gold text-gold px-6 py-3 text-[12px] font-semibold tracking-wider uppercase hover:bg-gold hover:text-navy transition-all duration-300"
                    >
                      <Download className="h-4 w-4" /> Download Brochure
                    </a>
                  </div>
                )}
                {formStatus.enquire === "error" && (
                  <p className="text-[13px] text-red-400">Something went wrong. Please try again or call us directly.</p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- FOOTER */}
      <footer className="px-6 lg:px-10 py-16 border-t border-navy/10 bg-white">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <Logo scrolled={true} variant="footer" />
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-[14px] text-navy/60">
            <span className="flex items-center gap-3 hover:text-gold transition-colors">
              <MapPin className="h-4 w-4 text-gold" /> {ADDRESS[1]}
            </span>
            <span className="flex items-center gap-3 hover:text-gold transition-colors">
              <Phone className="h-4 w-4 text-gold" /> {PHONES.join(" / ")}
            </span>
          </div>
          <p className="text-[13px] text-navy/70 tracking-wide">
            Constructed by SVT Developers & Constructions | Marketed by <span className="text-gold font-bold uppercase">RRL Group</span> <br/>
            <span className="text-navy font-bold uppercase mt-1 block">© {new Date().getFullYear()} <span className="text-gold">Confident Atria</span></span>
            <span className="text-gold font-semibold mt-1 block">Beyond Homes. A Lifestyle</span>
          </p>
        </div>
        <div className="mx-auto max-w-7xl mt-10 pt-8 border-t border-navy/5">
          <p className="text-[11px] leading-relaxed text-navy/40 italic">
            Disclaimer: These particulars are prepared as a general guide only. They do not form any part of a legally binding agreement. Visual representations, measurements, and specifications are approximate and subject to variation. All interested parties must conduct their own independent inquiries and inspections.
          </p>
        </div>
      </footer>

      {/* ---------------------------------------------------------- UNLOCK POPUP MODAL */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-navy/80 backdrop-blur-md" 
            onClick={() => setIsPopupOpen(false)} 
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-md rounded-[2rem] sm:rounded-[2.5rem] bg-navy border border-gold/20 p-6 sm:p-10 shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsPopupOpen(false)} 
              className="absolute top-5 right-5 sm:top-6 sm:right-6 text-pearl/50 hover:text-pearl transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="mb-8">
              <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <Lock className="h-5 w-5 text-gold" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-pearl mb-2 pr-8">Unlock Floor Plans & Brochure</h3>
              <p className="text-[14px] text-pearl/60">Enter your details to instantly view the premium 4BHK layouts and download the full brochure.</p>
            </div>
            
            <form onSubmit={(e) => submitToFormspree(e, "unlock")} className="flex flex-col gap-6">
              <input type="hidden" name="_subject" value="New enquiry — Confident Atria (Unlock Popup)" />
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  required 
                  suppressHydrationWarning 
                  placeholder=" " 
                  className="peer w-full bg-transparent border-b border-white/20 py-3 text-[16px] sm:text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors" 
                />
                <label className="absolute left-0 top-3 text-[14px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
                  Full Name
                </label>
              </div>
              
              <div className="relative">
                <input 
                  type="tel" 
                  name="phone"
                  required 
                  suppressHydrationWarning 
                  placeholder=" " 
                  className="peer w-full bg-transparent border-b border-white/20 py-3 text-[16px] sm:text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors" 
                />
                <label className="absolute left-0 top-3 text-[14px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
                  Phone Number
                </label>
              </div>
              
              <button 
                type="submit"
                disabled={formStatus.unlock === "loading"}
                suppressHydrationWarning
                className="mt-4 w-full rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wider uppercase text-navy hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-60"
              >
                {formStatus.unlock === "loading" ? "Unlocking..." : "Unlock Now"}
              </button>
              {formStatus.unlock === "error" && (
                <p className="text-[12px] text-red-400 text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  Small components                                                  */
/* ------------------------------------------------------------------ */

function Logo({
  scrolled = true,
  variant = "header",
}: {
  scrolled?: boolean;
  variant?: "header" | "footer";
}) {
  const dark = scrolled || variant === "footer";
  return (
    <a href="#" className="flex items-center gap-3 group">
      <span className="flex items-center gap-2.5 sm:gap-3">

        <span className="relative h-8 sm:h-12 w-[70px] sm:w-[84px]">
          <Image
            src={CONFIDENT_ATRIA_LOGO}
            alt="Confident Atria logo"
            fill
            priority
            className="object-contain object-left"
          />
        </span>
        <span className={`h-6 w-px shrink-0 ${dark ? "bg-navy/15" : "bg-pearl/25"}`} />
        <span className="relative h-8 sm:h-9 w-[70px] sm:w-[84px]">
          <Image
            src={RRL_LOGO}
            alt="RRL Group logo"
            fill
            priority
            className="object-contain object-left"
          />
        </span>
      </span>
      {/* <span className="leading-none hidden sm:block">
        <span className="block font-[family-name:var(--font-display)] text-lg font-medium tracking-wider text-gold">
          Confident Atria
        </span>
        <span className={`block text-[10px] font-bold tracking-[0.25em] transition-colors duration-500 mt-1 ${dark ? "text-navy/50" : "text-pearl/60"}`}>
          BY <span className="text-gold">RRL</span> GROUP
        </span>
      </span> */}
    </a>
  );
}

function OverviewPoint({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof ShieldCheck;
  title: string;
  body: string;
}) {
  return (
    <div className="group border-t border-navy/10 pt-8 hover:border-gold transition-colors duration-500 relative">
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
      <Icon className="h-6 w-6 text-gold mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
      <h3 className="text-[18px] font-semibold text-navy mb-3">{title}</h3>
      <p className="text-[15px] leading-relaxed text-navy/60 font-light">{body}</p>
    </div>
  );
}