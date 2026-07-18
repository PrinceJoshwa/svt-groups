// // // // "use client"

// // // // import { useState } from "react"
// // // // import Image from "next/image"
// // // // import Link from "next/link"
// // // // import { motion } from "framer-motion"
// // // // import { useForm, ValidationError } from '@formspree/react'

// // // // // UI Components
// // // // import { Button } from "@/components/ui/button"
// // // // import { Input } from "@/components/ui/input"
// // // // import { Textarea } from "@/components/ui/textarea"

// // // // // Icons
// // // // import {
// // // //   ArrowRight, Star, Building, MapPin, 
// // // //   Building2, Phone, Send, ShieldCheck, CheckCircle2, 
// // // //   Droplets, PaintRoller, DoorOpen, Grid, Maximize,
// // // //   Compass, Lightbulb, Zap, LayoutDashboard
// // // // } from "lucide-react"

// // // // // ==========================================
// // // // // 1. HERO SECTION
// // // // // ==========================================
// // // // function HeroSection() {
// // // //   return (
// // // //     <section className="relative min-h-screen overflow-hidden bg-black flex items-center py-20 border-b border-[#333]">
// // // //       <div className="absolute inset-0 bg-grid-white/[0.03]" />
// // // //       <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#d9a406]/10 blur-[120px]" />
// // // //       <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#d9a406]/5 blur-[100px]" />

// // // //       <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
// // // //         <div className="grid lg:grid-cols-2 gap-16 items-center">
          
// // // //           <motion.div
// // // //             className="space-y-8"
// // // //             initial={{ opacity: 0, x: -60 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.8 }}
// // // //           >
// // // //             <div className="flex flex-wrap items-center gap-4">
// // // //               <div className="inline-flex items-center gap-3 rounded-full border border-[#d9a406]/30 bg-[#d9a406]/10 backdrop-blur-xl px-6 py-3">
// // // //                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d9a406]">
// // // //                   <ShieldCheck className="h-5 w-5 text-black" />
// // // //                 </div>
// // // //                 <span className="text-sm font-semibold text-[#d9a406] tracking-wide uppercase">
// // // //                   STRRPA-BMRDA Approved
// // // //                 </span>
// // // //               </div>
// // // //               <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl px-4 py-2">
// // // //                 <span className="text-xs font-bold text-white tracking-widest uppercase">
// // // //                   Villa 12
// // // //                 </span>
// // // //               </div>
// // // //             </div>

// // // //             <div className="space-y-6">
// // // //               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white font-playfair">
// // // //                 Confident Atria 
// // // //                 <span className="block text-[#d9a406]">
// // // //                   By SVT Group
// // // //                 </span>
// // // //               </h1>
              
// // // //               <div className="space-y-5 text-lg leading-relaxed text-gray-300">
// // // //                 <p>
// // // //                   Experience grand living in a sprawling 30-acre premium gated community. 
// // // //                   Meticulously crafted 4 BHK residential villas designed for modern 
// // // //                   luxury and absolute tranquility in Sarjapura.
// // // //                 </p>
// // // //                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
// // // //                   <div className="border-l-2 border-[#d9a406] pl-4">
// // // //                     <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Starting Price</p>
// // // //                     <p className="text-xl text-white font-bold font-playfair">2 Cr*</p>
// // // //                   </div>
// // // //                   <div className="border-l-2 border-[#d9a406] pl-4">
// // // //                     <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Configuration</p>
// // // //                     <p className="text-xl text-white font-bold font-playfair">4 BHK</p>
// // // //                   </div>
// // // //                   <div className="border-l-2 border-[#d9a406] pl-4">
// // // //                     <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Total BUA</p>
// // // //                     <p className="text-xl text-white font-bold font-playfair">2400.50 Sqft</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="flex flex-col sm:flex-row gap-4 pt-4">
// // // //               <Link href="#contact">
// // // //                 <Button
// // // //                   size="lg"
// // // //                   className="group rounded-full bg-[#d9a406] px-8 py-6 text-lg font-semibold text-black hover:bg-[#b08505] transition-all duration-300 shadow-[0_0_25px_rgba(217,164,6,0.3)] w-full sm:w-auto"
// // // //                 >
// // // //                   Register Interest
// // // //                   <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
// // // //                 </Button>
// // // //               </Link>
// // // //             </div>
// // // //           </motion.div>

// // // //           <motion.div
// // // //             className="relative flex flex-col gap-6"
// // // //             initial={{ opacity: 0, x: 50 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // //           >
// // // //             <div className="relative h-[600px] w-full overflow-hidden rounded-[2rem] border border-[#d9a406]/20 shadow-[0_0_40px_rgba(217,164,6,0.08)] group">
// // // //               <Image
// // // //                 src="/placeholder-villa.jpg" 
// // // //                 alt="Confident Atria Premium Villa"
// // // //                 fill
// // // //                 priority
// // // //                 className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
// // // //               />
// // // //               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
// // // //               <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
// // // //                 <div className="inline-flex items-center gap-2 rounded-full border border-[#d9a406]/30 bg-black/60 backdrop-blur-md px-5 py-2 mb-5">
// // // //                   <Compass className="w-4 h-4 text-[#d9a406]" />
// // // //                   <span className="text-xs uppercase tracking-[0.2em] text-[#d9a406] font-semibold">
// // // //                     Site Facing East
// // // //                   </span>
// // // //                 </div>
// // // //                 <h3 className="text-3xl font-bold leading-tight text-white font-playfair">
// // // //                   Type-01 Premium Layout
// // // //                 </h3>
// // // //                 <p className="text-gray-300 mt-2 flex items-center gap-2">
// // // //                   <Maximize className="w-4 h-4 text-gray-500" /> Site Area: 1162 SQFT
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }

// // // // // ==========================================
// // // // // 2. FLOOR PLANS & AREA STATEMENT
// // // // // ==========================================
// // // // function FloorPlans() {
// // // //   const areas = [
// // // //     { label: "Ground Floor Area", value: "936.80 SQFT" },
// // // //     { label: "First Floor Area", value: "920.40 SQFT" },
// // // //     { label: "Terrace Floor Area", value: "543.30 SQFT" },
// // // //     { label: "Total BUA", value: "2400.50 SQFT", highlight: true },
// // // //   ]

// // // //   const dimensions = [
// // // //     { room: "Living Area", size: "13'0\" x 14'6\"" },
// // // //     { room: "Dining Area", size: "8'6\" x 14'0\"" },
// // // //     { room: "Kitchen", size: "11'0\" x 8'0\"" },
// // // //     { room: "Master Bedroom (GF)", size: "11'0\" x 16'0\"" },
// // // //     { room: "Master Bedroom (FF)", size: "11'0\" x 16'0\"" },
// // // //     { room: "Family Area (FF)", size: "8'6\" x 18'6\"" },
// // // //     { room: "Bedroom (FF)", size: "10'6\" x 16'0\"" },
// // // //     { room: "Sitout (GF)", size: "15'6\" x 5'6\"" },
// // // //     { room: "Sitout Area (Terrace)", size: "8'6\" x 16'6\"" },
// // // //     { room: "Pooja", size: "3'2\" x 4'8\"" },
// // // //   ]

// // // //   return (
// // // //     <section className="py-24 bg-neutral-950 relative border-b border-gold-900/30">
// // // //       <div className="container mx-auto px-4 max-w-7xl relative z-10">
// // // //         <div className="text-center mb-16">
// // // //            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
// // // //             Space & <span className="text-[#d9a406]">Dimensions</span>
// // // //           </h2>
// // // //           <p className="text-gray-400 mt-4 text-lg">Detailed architectural breakdown for TYPE-01 4BHK Villa</p>
// // // //         </div>

// // // //         <div className="grid lg:grid-cols-3 gap-8">
// // // //           {/* Area Statement */}
// // // //           <motion.div 
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //             className="col-span-1 bg-black p-8 rounded-[2rem] border border-white/5 shadow-2xl"
// // // //           >
// // // //             <h3 className="text-2xl font-bold font-playfair text-white mb-6 flex items-center gap-3">
// // // //               <LayoutDashboard className="text-[#d9a406]" /> Area Statement
// // // //             </h3>
// // // //             <div className="space-y-4">
// // // //               {areas.map((area, idx) => (
// // // //                 <div key={idx} className={`flex justify-between items-center pb-4 border-b ${area.highlight ? 'border-[#d9a406] pt-4' : 'border-gray-800'}`}>
// // // //                   <span className={`text-sm ${area.highlight ? 'text-[#d9a406] font-bold uppercase tracking-widest' : 'text-gray-400'}`}>{area.label}</span>
// // // //                   <span className={`font-mono ${area.highlight ? 'text-2xl text-white font-bold' : 'text-white'}`}>{area.value}</span>
// // // //                 </div>
// // // //               ))}
// // // //               <div className="pt-4 flex justify-between items-center">
// // // //                  <span className="text-sm text-gray-400">Site Area</span>
// // // //                  <span className="font-mono text-white">1162 SQFT</span>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>

// // // //           {/* Room Dimensions Grid */}
// // // //           <motion.div 
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ delay: 0.2 }}
// // // //             viewport={{ once: true }}
// // // //             className="col-span-1 lg:col-span-2 bg-black p-8 rounded-[2rem] border border-white/5 shadow-2xl"
// // // //           >
// // // //              <h3 className="text-2xl font-bold font-playfair text-white mb-6 flex items-center gap-3">
// // // //               <Maximize className="text-[#d9a406]" /> Premium Room Dimensions
// // // //             </h3>
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
// // // //               {dimensions.map((dim, idx) => (
// // // //                 <div key={idx} className="flex justify-between items-center p-4 bg-[#111] rounded-xl border border-white/5 hover:border-[#d9a406]/30 transition-colors">
// // // //                   <span className="text-gray-300 text-sm font-medium">{dim.room}</span>
// // // //                   <span className="text-[#d9a406] font-mono text-sm font-bold">{dim.size}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //             <p className="text-xs text-gray-600 mt-6 text-right">* Also features dedicated Car Parking, Study Table space, multiple Dress Areas, and Sky Light.</p>
// // // //           </motion.div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }

// // // // // ==========================================
// // // // // 3. FULL PROJECT SPECIFICATIONS
// // // // // ==========================================
// // // // function Specifications() {
// // // //   const specs = [
// // // //     { icon: Building2, title: "Approvals & Structure", desc: "STRRPA-BMRDA approved layout. 30 Acres extent. Robust Column Frame construction with 6\" Solid Blocks." },
// // // //     { icon: DoorOpen, title: "Doors & Windows", desc: "Premium Teak Wood Main Door. Teak Wood Frame & Ready Made Flush internal doors. Best quality 3 Track UPVC (Wooden Pattern) Windows." },
// // // //     { icon: Grid, title: "Luxury Flooring", desc: "Bedrooms & Living Areas feature 4'x6' Vitrified Tiles. Bathrooms utilize 2'x4' wall tiles. Staircase & Sitout adorned with Granite." },
// // // //     { icon: PaintRoller, title: "Painting & Finishes", desc: "Internal walls coated with Asian Paints Tractor Emulsion. Exterior features Asian Paints Ultima Protek (Texture Finishing)." },
// // // //     { icon: Zap, title: "Electrical & Fittings", desc: "High-grade cabling and switches from POLICAB, V-GUARD, or HAVELLS ensuring complete safety and durability." },
// // // //     { icon: Droplets, title: "Sanitary & Plumbing", desc: "Internal piping by Supreme-PVC & UPVC. Premium JAQUAR fittings paired with GROHE flush tanks." },
// // // //     { icon: ShieldCheck, title: "Water & Boundaries", desc: "Massive 8000 LTR RCC Under Ground Sump & 1000 LTR 3-Layer Fiber Overhead Tank. Individual compound walls provided." }
// // // //   ]

// // // //   return (
// // // //     <section className="py-24 bg-[#0a0a0a] relative border-b border-gold-900/30">
// // // //       <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
// // // //         <div className="mb-16 text-center">
// // // //           <motion.h2 
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //             className="text-4xl md:text-5xl font-playfair font-bold text-white"
// // // //           >
// // // //             The 20-Point <span className="text-[#d9a406]">Specification Standard</span>
// // // //           </motion.h2>
// // // //           <p className="text-gray-400 mt-4 text-lg">Every detail strictly adhered to highest industry benchmarks.</p>
// // // //         </div>

// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //           {specs.map((spec, index) => (
// // // //             <motion.div
// // // //               key={index}
// // // //               initial={{ opacity: 0, y: 30 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ duration: 0.5, delay: index * 0.1 }}
// // // //               viewport={{ once: true }}
// // // //               className="group relative p-8 rounded-[2rem] bg-black border border-white/5 hover:border-[#d9a406]/50 transition-all duration-500 shadow-xl"
// // // //             >
// // // //               <div className="h-14 w-14 rounded-2xl bg-[#d9a406]/10 flex items-center justify-center mb-6 group-hover:bg-[#d9a406] transition-colors duration-500">
// // // //                 <spec.icon className="h-7 w-7 text-[#d9a406] group-hover:text-black transition-colors duration-500" />
// // // //               </div>
// // // //               <h3 className="text-xl font-bold text-white font-playfair mb-3">{spec.title}</h3>
// // // //               <p className="text-gray-400 text-sm leading-relaxed">{spec.desc}</p>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }

// // // // // ==========================================
// // // // // 4. LOCATION & CONNECTIVITY
// // // // // ==========================================
// // // // function LocationSection() {
// // // //   // Exhaustive list from the provided map PDF
// // // //   const landmarks = [
// // // //     "Infosys", "SVT RMC Plant (2 Locations)", "TISB School", 
// // // //     "Global Indian School", "Inventure", "Azim Premji University", 
// // // //     "Indus School", "Exide Factory", "Police Station"
// // // //   ]

// // // //   const zones = [
// // // //     "Sarjapura Circle", "Abbaya Circle", "Attibele Circle", 
// // // //     "Sompura Gate", "Dommasandra", "Chandapura"
// // // //   ]

// // // //   const routes = [
// // // //     "To White Field", "To Hosur", "To Malur", "Chandapura Road"
// // // //   ]

// // // //   return (
// // // //     <section className="py-24 bg-black relative border-b border-[#333]">
// // // //       <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#d9a406]/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      
// // // //       <div className="container mx-auto px-4 max-w-7xl relative z-10">
// // // //         <div className="grid lg:grid-cols-12 gap-16 items-start">
          
// // // //           <motion.div 
// // // //             className="lg:col-span-6 space-y-10"
// // // //             initial={{ opacity: 0, x: -40 }}
// // // //             whileInView={{ opacity: 1, x: 0 }}
// // // //             viewport={{ once: true }}
// // // //           >
// // // //             <div>
// // // //               <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white leading-tight mb-4">
// // // //                 Strategically <span className="text-[#d9a406]">Located</span>
// // // //               </h2>
// // // //               <p className="text-lg text-gray-400 font-light leading-relaxed">
// // // //                 Situated perfectly amongst major educational, tech, and transit hubs. Your gateway to effortless commuting.
// // // //               </p>
// // // //             </div>
            
// // // //             <div className="space-y-6">
// // // //               <div>
// // // //                 <h3 className="text-[#d9a406] text-sm font-bold uppercase tracking-widest mb-4 border-b border-[#d9a406]/20 pb-2 inline-block">Key Institutions & Landmarks</h3>
// // // //                 <div className="grid grid-cols-2 gap-y-3 gap-x-4">
// // // //                   {landmarks.map((landmark, i) => (
// // // //                     <div key={i} className="flex items-center gap-2">
// // // //                       <div className="w-1.5 h-1.5 rounded-full bg-[#d9a406]" />
// // // //                       <span className="text-sm text-gray-300">{landmark}</span>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>

// // // //               <div>
// // // //                  <h3 className="text-[#d9a406] text-sm font-bold uppercase tracking-widest mb-4 border-b border-[#d9a406]/20 pb-2 inline-block">Surrounding Hubs</h3>
// // // //                  <div className="flex flex-wrap gap-2">
// // // //                   {zones.map((zone, i) => (
// // // //                     <span key={i} className="bg-[#111] text-gray-300 px-3 py-1.5 rounded-md text-xs border border-white/5">{zone}</span>
// // // //                   ))}
// // // //                  </div>
// // // //               </div>
// // // //             </div>
            
// // // //             <div className="pt-6 border-t border-gray-800">
// // // //               <p className="text-sm text-gray-500 uppercase tracking-wider mb-4 font-bold">Connecting Routes</p>
// // // //               <div className="flex flex-wrap gap-3">
// // // //                 {routes.map((route, i) => (
// // // //                    <span key={i} className="bg-[#d9a406]/10 text-[#d9a406] px-4 py-2 rounded-lg text-sm border border-[#d9a406]/30 font-semibold">{route}</span>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>

// // // //           <motion.div 
// // // //             className="lg:col-span-6"
// // // //             initial={{ opacity: 0, x: 40 }}
// // // //             whileInView={{ opacity: 1, x: 0 }}
// // // //             viewport={{ once: true }}
// // // //           >
// // // //             <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden border border-[#d9a406]/30 shadow-[0_0_40px_rgba(217,164,6,0.1)] p-2 bg-[#111]">
// // // //                <div className="w-full h-full bg-black rounded-3xl overflow-hidden relative flex flex-col items-center justify-center border border-white/5 p-8 text-center">
// // // //                  <MapPin className="h-16 w-16 text-[#d9a406] mb-4" />
// // // //                  <h3 className="text-white font-playfair text-2xl font-bold mb-2">Confident Atria Hub</h3>
// // // //                  <p className="text-gray-500 text-sm max-w-sm">Access to major IT Corridors, top-tier international schools, and seamless highway networks.</p>
// // // //                </div>
// // // //             </div>
// // // //           </motion.div>

// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }

// // // // // ==========================================
// // // // // 5. CONTACT / CALL TO ACTION
// // // // // ==========================================
// // // // function ContactSection() {
// // // //   const [formData, setFormData] = useState({ name: "", email: "", contact: "", message: "" })
// // // //   const [loading, setLoading] = useState(false)

// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault()
// // // //     setLoading(true)
// // // //     setTimeout(() => {
// // // //       setLoading(false)
// // // //       alert("Thank you! SVT Group will contact you shortly.")
// // // //     }, 1000)
// // // //   }

// // // //   return (
// // // //     <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-[#111] to-black py-24 text-white">
// // // //       <div className="container relative mx-auto px-4 max-w-7xl">
// // // //         <div className="mb-16 text-center">
// // // //           <h2 className="mb-6 text-4xl font-bold font-playfair lg:text-5xl">Enquire About <span className="text-[#d9a406]">Confident Atria</span></h2>
// // // //           <p className="mx-auto max-w-2xl text-xl text-gray-400">
// // // //             Connect directly with SVT Developer & Constructions to secure your luxury villa.
// // // //           </p>
// // // //         </div>

// // // //         <div className="grid items-start gap-16 lg:grid-cols-2">
          
// // // //           <motion.div
// // // //             className="rounded-[2rem] p-8 md:p-10 bg-black border border-[#d9a406]/30 shadow-[0_0_40px_rgba(217,164,6,0.1)]"
// // // //             initial={{ opacity: 0, scale: 0.95 }}
// // // //             whileInView={{ opacity: 1, scale: 1 }}
// // // //             transition={{ duration: 0.8, ease: "easeOut" }}
// // // //           >
// // // //             <h3 className="mb-6 text-2xl font-bold font-playfair">Register Your Interest</h3>
// // // //             <form onSubmit={handleSubmit} className="space-y-6">
// // // //               <div className="grid gap-4 md:grid-cols-2">
// // // //                 <div>
// // // //                   <label className="mb-2 block text-xs font-medium text-gray-400 uppercase tracking-widest">Name *</label>
// // // //                   <Input
// // // //                     placeholder="Your name"
// // // //                     value={formData.name}
// // // //                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// // // //                     className="bg-[#111] border-gray-800 focus:border-[#d9a406] text-white h-12 rounded-xl"
// // // //                     required
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <label className="mb-2 block text-xs font-medium text-gray-400 uppercase tracking-widest">Contact *</label>
// // // //                   <Input
// // // //                     placeholder="Mobile number"
// // // //                     value={formData.contact}
// // // //                     onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
// // // //                     className="bg-[#111] border-gray-800 focus:border-[#d9a406] text-white h-12 rounded-xl"
// // // //                     required
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //               <div>
// // // //                 <label className="mb-2 block text-xs font-medium text-gray-400 uppercase tracking-widest">Email *</label>
// // // //                 <Input
// // // //                   type="email"
// // // //                   placeholder="Email address"
// // // //                   value={formData.email}
// // // //                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// // // //                   className="bg-[#111] border-gray-800 focus:border-[#d9a406] text-white h-12 rounded-xl"
// // // //                   required
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <label className="mb-2 block text-xs font-medium text-gray-400 uppercase tracking-widest">Message</label>
// // // //                 <Textarea
// // // //                   placeholder="How can we help you?"
// // // //                   value={formData.message}
// // // //                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
// // // //                   className="min-h-[100px] bg-[#111] border-gray-800 focus:border-[#d9a406] text-white rounded-xl"
// // // //                 />
// // // //               </div>
// // // //               <Button
// // // //                 type="submit"
// // // //                 disabled={loading}
// // // //                 className="group w-full rounded-xl py-6 font-bold text-black bg-[#d9a406] hover:bg-white transition-all duration-300 text-lg shadow-[0_0_20px_rgba(217,164,6,0.2)]"
// // // //               >
// // // //                 {loading ? "Submitting..." : "Submit Inquiry"}
// // // //                 <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
// // // //               </Button>
// // // //             </form>
// // // //           </motion.div>

// // // //           <motion.div
// // // //             className="space-y-10 lg:pl-8"
// // // //             initial={{ opacity: 0, x: 50 }}
// // // //             whileInView={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.8, ease: "easeOut" }}
// // // //           >
// // // //             <div>
// // // //               <h3 className="mb-4 text-3xl font-bold font-playfair">SVT Group</h3>
// // // //               <p className="leading-relaxed text-gray-400 max-w-md">
// // // //                 SVT Developer & Constructions is dedicated to building affordable, high-quality, and structurally superior homes for the modern family.
// // // //               </p>
// // // //             </div>
            
// // // //             <div className="space-y-8">
// // // //               <div className="flex items-start space-x-5 group">
// // // //                 <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-[#d9a406]/30 bg-[#d9a406]/10 group-hover:bg-[#d9a406] transition-colors duration-300">
// // // //                   <Phone className="h-5 w-5 text-[#d9a406] group-hover:text-black transition-colors" />
// // // //                 </div>
// // // //                 <div>
// // // //                   <h4 className="mb-1 text-sm text-gray-500 uppercase tracking-widest">Direct Contact</h4>
// // // //                   <a href="tel:9945042228" className="block text-xl font-semibold text-white hover:text-[#d9a406] transition-colors">9945042228</a>
// // // //                   <a href="tel:9620229020" className="block text-xl font-semibold text-white hover:text-[#d9a406] transition-colors">9620229020</a>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="flex items-start space-x-5 group">
// // // //                 <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-[#d9a406]/30 bg-[#d9a406]/10 group-hover:bg-[#d9a406] transition-colors duration-300">
// // // //                   <Building className="h-5 w-5 text-[#d9a406] group-hover:text-black transition-colors" />
// // // //                 </div>
// // // //                 <div>
// // // //                   <h4 className="mb-1 text-sm text-gray-500 uppercase tracking-widest">Corporate Office</h4>
// // // //                   <p className="text-gray-300 leading-relaxed">
// // // //                     5th Floor, Site No.108, Door No.33, SVT Homes,<br/>
// // // //                     Sarjapura Attibele Road, Confident Aspire,<br/>
// // // //                     Burgunte Village, Bengaluru, Karnataka - 562107
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }

// // // // // ==========================================
// // // // // MAIN EXPORT
// // // // // ==========================================
// // // // export default function SVTLandingPage() {
// // // //   return (
// // // //     <main className="bg-black min-h-screen">
// // // //       <HeroSection />
// // // //       <FloorPlans />
// // // //       <Specifications />
// // // //       <LocationSection />
// // // //       <ContactSection />
// // // //     </main>
// // // //   )
// // // // }
// // // "use client"

// // // import { useRef, useState } from "react"
// // // import Image from "next/image"
// // // import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
// // // import { ArrowRight, MapPin, Phone, Download, Check, Plus, Minus } from "lucide-react"

// // // // ==========================================
// // // // 1. CINEMATIC HERO SECTION
// // // // ==========================================
// // // function Hero() {
// // //   const containerRef = useRef(null)
// // //   const { scrollYProgress } = useScroll({
// // //     target: containerRef,
// // //     offset: ["start start", "end start"],
// // //   })

// // //   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
// // //   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

// // //   return (
// // //     <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#050505]">
// // //       <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
// // //         {/* Replace with your high-res exterior render */}
// // //         <Image
// // //           src="/hero-exterior.jpg"
// // //           alt="Confident Atria Exterior"
// // //           fill
// // //           className="object-cover opacity-60"
// // //           priority
// // //         />
// // //         <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-[#050505]" />
// // //       </motion.div>

// // //       <div className="relative z-10 flex h-full w-full flex-col justify-end pb-24 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 1, delay: 0.2 }}
// // //           className="flex flex-col gap-6"
// // //         >
// // //           <div className="flex flex-wrap items-center gap-4">
// // //             <span className="rounded-full border border-[#d9a406]/50 bg-black/50 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-[#d9a406] uppercase">
// // //               STRRPA-BMRDA Approved
// // //             </span>
// // //             <span className="rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-white uppercase">
// // //               Villa 12
// // //             </span>
// // //           </div>

// // //           <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter text-white leading-[0.9]">
// // //             Confident <br />
// // //             <span className="text-transparent flex-wrap bg-clip-text bg-gradient-to-r from-[#d9a406] to-[#f3cf65]">Atria.</span>
// // //           </h1>

// // //           <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full max-w-4xl gap-8 border-t border-white/10 pt-8 mt-4">
// // //             <p className="text-gray-400 font-light max-w-md text-lg leading-relaxed">
// // //               A 30-acre gated sanctuary in Sarjapura. Discover 4 BHK residential villas engineered for unparalleled luxury.
// // //             </p>
// // //             <div className="text-left sm:text-right">
// // //               <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Starting From</p>
// // //               <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">₹ 2 Cr*</p>
// // //             </div>
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // // ==========================================
// // // // 2. STICKY SCROLL ARCHITECTURE & SPECS
// // // // ==========================================
// // // function Specifications() {
// // //   const containerRef = useRef(null)
// // //   const { scrollYProgress } = useScroll({
// // //     target: containerRef,
// // //     offset: ["start start", "end end"],
// // //   })

// // //   const areas = [
// // //     { label: "Ground Floor Area", value: "936.80 SQFT" },
// // //     { label: "First Floor Area", value: "920.40 SQFT" },
// // //     { label: "Terrace Floor Area", value: "543.30 SQFT" },
// // //     { label: "Total Built-Up Area", value: "2400.50 SQFT", isTotal: true },
// // //   ]

// // //   const dimensions = [
// // //     { space: "Living Area", size: "13'0\" x 14'6\"" },
// // //     { space: "Dining Area", size: "8'6\" x 14'0\"" },
// // //     { space: "Kitchen", size: "11'0\" x 8'0\"" },
// // //     { space: "Master Bedroom (GF)", size: "11'0\" x 16'0\"" },
// // //     { space: "Family Area", size: "8'6\" x 18'6\"" },
// // //   ]

// // //   return (
// // //     <section ref={containerRef} className="relative h-[200vh] bg-[#050505]">
// // //       <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
// // //         <div className="container mx-auto px-6 md:px-16 max-w-[1600px] grid lg:grid-cols-2 gap-16 lg:gap-24">
          
// // //           {/* Left: Dynamic Sticky Content */}
// // //           <div className="flex flex-col justify-center h-full">
// // //             <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8">
// // //               The <br/><span className="text-[#d9a406]">Blueprint.</span>
// // //             </h2>
            
// // //             <div className="space-y-12">
// // //               <div>
// // //                 <p className="text-[#d9a406] text-sm font-bold tracking-widest uppercase mb-6">Type 01 / 4 BHK / East Facing</p>
// // //                 <div className="space-y-4">
// // //                   {areas.map((area, i) => (
// // //                     <div key={i} className={`flex justify-between items-end border-b ${area.isTotal ? 'border-[#d9a406] pb-4' : 'border-white/10 pb-4'}`}>
// // //                       <span className={`text-sm tracking-wide ${area.isTotal ? 'text-[#d9a406] font-bold' : 'text-gray-400'}`}>{area.label}</span>
// // //                       <span className={`font-mono ${area.isTotal ? 'text-2xl text-white font-bold' : 'text-lg text-gray-200'}`}>{area.value}</span>
// // //                     </div>
// // //                   ))}
// // //                   <div className="flex justify-between items-end pb-4 pt-2">
// // //                     <span className="text-sm tracking-wide text-gray-500">Site Area</span>
// // //                     <span className="font-mono text-lg text-gray-400">1162 SQFT</span>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Right: Scrolling Blueprint Image */}
// // //           <div className="relative h-[60vh] lg:h-[80vh] w-full rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a]">
// // //             {/* The image scrolls inside the sticky container based on overall scroll */}
// // //             <motion.div 
// // //               className="absolute inset-0 w-full h-[150%]"
// // //               style={{
// // //                 y: useTransform(scrollYProgress, [0, 1], ["0%", "-33%"])
// // //               }}
// // //             >
// // //               {/* Replace with your floor plan image */}
// // //               <Image 
// // //                 src="/blueprint.png"
// // //                 alt="Villa Blueprint"
// // //                 fill
// // //                 className="object-cover opacity-50 blend-luminosity"
// // //               />
// // //             </motion.div>

// // //             {/* Floating Glass Specs Card */}
// // //             <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-2xl border border-white/10 p-6 rounded-xl">
// // //               <p className="text-xs text-[#d9a406] font-bold tracking-widest uppercase mb-4">Key Dimensions</p>
// // //               <div className="grid grid-cols-2 gap-4">
// // //                 {dimensions.map((dim, i) => (
// // //                   <div key={i}>
// // //                     <p className="text-[10px] text-gray-500 uppercase">{dim.space}</p>
// // //                     <p className="font-mono text-sm text-white">{dim.size}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // // ==========================================
// // // // 3. MINIMALIST ACCORDION SPECS
// // // // ==========================================
// // // function Materials() {
// // //   const [openIndex, setOpenIndex] = useState<number | null>(0)

// // //   const details = [
// // //     { title: "Doors & Windows", desc: "Premium Teak Wood Main Door. Internal doors feature Teak Wood Frames with ready-made flush doors. Best-in-class 3 Track UPVC windows in a wooden pattern." },
// // //     { title: "Plumbing & Sanitary", desc: "Internal piping executed with Supreme-PVC & UPVC. Outfitted with luxury JAQUAR fittings and concealed GROHE flush tanks." },
// // //     { title: "Flooring Excellence", desc: "Expansive 4'x6' Vitrified Tiles grace the bedrooms and living spaces. Staircases and sit-outs are finished with solid Granite. 2'x4' tiles used for toilet walls." },
// // //     { title: "Paint & Textures", desc: "Internal walls finished with Asian Paints Tractor Emulsion. Exteriors are protected and styled with Asian Paints Ultima Protek texture finishing." },
// // //     { title: "Electrical Setup", desc: "Wired with industry-leading POLICAB, V-GUARD, or HAVELLS cables and switches for uncompromising safety." },
// // //     { title: "Infrastructure", desc: "6\" Solid Block column frame structure. Equipped with an 8000 LTR RCC underground sump and a 1000 LTR 3-layer fiber overhead tank. Individual compound walls included." }
// // //   ]

// // //   return (
// // //     <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
// // //       <div className="container mx-auto px-6 md:px-16 max-w-[1000px]">
// // //         <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-16 text-center">
// // //           Material <span className="text-[#d9a406]">Integrity.</span>
// // //         </h2>

// // //         <div className="border-t border-white/10">
// // //           {details.map((item, index) => (
// // //             <div key={index} className="border-b border-white/10">
// // //               <button 
// // //                 onClick={() => setOpenIndex(openIndex === index ? null : index)}
// // //                 className="w-full py-8 flex items-center justify-between group text-left"
// // //               >
// // //                 <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-[#d9a406]' : 'text-gray-400 group-hover:text-white'}`}>
// // //                   {item.title}
// // //                 </span>
// // //                 <span className="text-gray-500 group-hover:text-[#d9a406] transition-colors">
// // //                   {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
// // //                 </span>
// // //               </button>
              
// // //               <AnimatePresence>
// // //                 {openIndex === index && (
// // //                   <motion.div
// // //                     initial={{ height: 0, opacity: 0 }}
// // //                     animate={{ height: "auto", opacity: 1 }}
// // //                     exit={{ height: 0, opacity: 0 }}
// // //                     transition={{ duration: 0.4, ease: "easeInOut" }}
// // //                     className="overflow-hidden"
// // //                   >
// // //                     <p className="pb-8 text-gray-400 text-lg font-light leading-relaxed max-w-2xl">
// // //                       {item.desc}
// // //                     </p>
// // //                   </motion.div>
// // //                 )}
// // //               </AnimatePresence>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // // ==========================================
// // // // 4. DARK ABSTRACT MAP / LOCATION
// // // // ==========================================
// // // function Location() {
// // //   const landmarks = [
// // //     "Infosys", "Azim Premji University", "TISB School", 
// // //     "Inventure", "Global Indian School", "Indus School", "Exide Factory"
// // //   ]

// // //   return (
// // //     <section className="relative py-32 bg-[#050505] overflow-hidden">
// // //       {/* Abstract Grid Map Background */}
// // //       <div className="absolute inset-0 opacity-20 pointer-events-none">
// // //         <div className="w-full h-full border-[0.5px] border-white/10 rounded-full scale-[2] absolute -top-1/2 -left-1/2" />
// // //         <div className="w-full h-full border-[0.5px] border-white/10 rounded-full scale-[1.5] absolute -top-1/4 -left-1/4" />
// // //         <div className="w-full h-full border-[0.5px] border-[#d9a406]/30 rounded-full scale-[1] absolute top-0 left-0" />
// // //       </div>

// // //       <div className="container mx-auto px-6 md:px-16 max-w-[1600px] relative z-10 grid lg:grid-cols-2 gap-20">
// // //         <div>
// // //           <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8">
// // //             The <span className="text-[#d9a406]">Coordinates.</span>
// // //           </h2>
// // //           <p className="text-xl text-gray-400 font-light mb-12 max-w-md">
// // //             Anchored in Sarjapura. Surrounded by elite institutions, tech parks, and seamless connectivity to Malur, Hosur, and Whitefield.
// // //           </p>

// // //           <div className="flex flex-wrap gap-3">
// // //             {landmarks.map((loc, i) => (
// // //               <span key={i} className="px-4 py-2 border border-white/10 rounded-full text-sm text-gray-300 font-medium bg-white/5 backdrop-blur-sm">
// // //                 {loc}
// // //               </span>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Custom Radar/Map Visual */}
// // //         <div className="relative aspect-square w-full max-w-lg mx-auto bg-[#0a0a0a] rounded-full border border-white/5 shadow-[0_0_80px_rgba(217,164,6,0.05)] flex items-center justify-center overflow-hidden">
// // //           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#d9a406_0%,transparent_1px)] bg-[size:40px_40px] opacity-10" />
          
// // //           {/* Pulsing Center */}
// // //           <div className="relative flex items-center justify-center">
// // //             <div className="absolute w-32 h-32 bg-[#d9a406]/20 rounded-full animate-ping" />
// // //             <div className="absolute w-16 h-16 bg-[#d9a406]/40 rounded-full" />
// // //             <div className="w-4 h-4 bg-[#d9a406] rounded-full z-10 shadow-[0_0_20px_#d9a406]" />
            
// // //             <div className="absolute top-8 left-8 whitespace-nowrap text-white text-xs font-bold tracking-widest bg-black/80 px-3 py-1 rounded border border-[#d9a406]/30">
// // //               Confident Atria
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // // ==========================================
// // // // 5. HIGH CONTRAST CONTACT
// // // // ==========================================
// // // function Contact() {
// // //   return (
// // //     <section className="bg-[#d9a406] py-32 text-black">
// // //       <div className="container mx-auto px-6 md:px-16 max-w-[1200px]">
// // //         <div className="grid md:grid-cols-2 gap-16 items-center">
          
// // //           <div>
// // //             <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
// // //               Claim Your <br /> Space.
// // //             </h2>
// // //             <p className="text-black/70 font-medium text-lg mb-12 max-w-sm">
// // //               Connect with SVT Developer & Constructions to view full brochures, pricing, and availability.
// // //             </p>

// // //             <div className="space-y-6">
// // //               <a href="tel:9945042228" className="flex items-center gap-4 group">
// // //                 <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
// // //                   <Phone className="w-5 h-5 text-[#d9a406]" />
// // //                 </div>
// // //                 <span className="text-2xl font-bold tracking-tight">9945042228</span>
// // //               </a>
// // //               <a href="tel:9620229020" className="flex items-center gap-4 group">
// // //                 <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
// // //                   <Phone className="w-5 h-5 text-[#d9a406]" />
// // //                 </div>
// // //                 <span className="text-2xl font-bold tracking-tight">9620229020</span>
// // //               </a>
// // //               <div className="flex items-start gap-4 pt-4">
// // //                 <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
// // //                   <MapPin className="w-5 h-5 text-[#d9a406]" />
// // //                 </div>
// // //                 <p className="font-medium text-black/80 max-w-xs mt-2">
// // //                   5th Floor, Site No.108, Door No.33, SVT Homes, Sarjapura Attibele Road, Burgunte Village, Bengaluru - 562107
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-black p-8 md:p-10 rounded-3xl">
// // //             <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Request Details</h3>
// // //             <form className="space-y-4">
// // //               <input 
// // //                 type="text" 
// // //                 placeholder="FULL NAME" 
// // //                 className="w-full bg-transparent border-b border-white/20 pb-4 pt-2 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#d9a406] transition-colors uppercase text-sm font-bold tracking-widest"
// // //               />
// // //               <input 
// // //                 type="tel" 
// // //                 placeholder="PHONE NUMBER" 
// // //                 className="w-full bg-transparent border-b border-white/20 pb-4 pt-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#d9a406] transition-colors uppercase text-sm font-bold tracking-widest"
// // //               />
// // //               <input 
// // //                 type="email" 
// // //                 placeholder="EMAIL ADDRESS" 
// // //                 className="w-full bg-transparent border-b border-white/20 pb-4 pt-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#d9a406] transition-colors uppercase text-sm font-bold tracking-widest"
// // //               />
              
// // //               <button className="w-full bg-[#d9a406] text-black font-black uppercase tracking-widest py-5 mt-8 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
// // //                 Send Inquiry <ArrowRight className="w-5 h-5" />
// // //               </button>
// // //             </form>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // export default function SVTPremiumLanding() {
// // //   return (
// // //     <main className="bg-[#050505] min-h-screen selection:bg-[#d9a406] selection:text-black">
// // //       <Hero />
// // //       <Specifications />
// // //       <Materials />
// // //       <Location />
// // //       <Contact />
// // //     </main>
// // //   )
// // // }

// // "use client";

// // import { useState } from "react";
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
// // } from "lucide-react";

// // const display = Fraunces({
// //   subsets: ["latin"],
// //   weight: ["400", "500", "600"],
// //   style: ["normal", "italic"],
// //   variable: "--font-display",
// // });

// // const body = Manrope({
// //   subsets: ["latin"],
// //   weight: ["400", "500", "600", "700"],
// //   variable: "--font-body",
// // });

// // const mono = IBM_Plex_Mono({
// //   subsets: ["latin"],
// //   weight: ["400", "500"],
// //   variable: "--font-mono",
// // });

// // /* ------------------------------------------------------------------ */
// // /*  Content — sourced from the SVT Group / Confident Atria brochure    */
// // /* ------------------------------------------------------------------ */

// // const PHONES = ["9945042228", "9620229020"];
// // const ADDRESS = [
// //   "5th Floor, Site No. 108, Door No. 33, SVT Homes",
// //   "Sarjapura Attibele Road, Confident Aspire",
// //   "Burgunte Village, Bengaluru, Karnataka 562107",
// // ];

// // const STATS = [
// //   { label: "Configuration", value: "4 BHK", icon: HomeIcon },
// //   { label: "Site Area", value: "1162 sqft", icon: Ruler },
// //   { label: "Total Built-up Area", value: "2400.50 sqft", icon: Layers },
// //   { label: "Facing", value: "East", icon: Sun },
// // ];

// // type Room = { name: string; dim: string };

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
// //       { name: "Dining Area", dim: "8'6\" x 4'0\"" },
// //       { name: "Kitchen", dim: "11'0\" x 8'0\"" },
// //       { name: "Pooja", dim: "3'2\" x 4'8\"" },
// //       { name: "Bed Room", dim: "11'0\" x 11'0\"" },
// //       { name: "Toilet", dim: "7'6\" x 4'8\"" },
// //       { name: "Car Parking", dim: "16'6\" x 9'0\"" },
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
// //       { name: "Family Area", dim: "8'6\" x 16'6\"" },
// //       { name: "Dress Area", dim: "5'8\" x 8'0\"" },
// //       { name: "Dress Area", dim: "7'6\" x 8'0\"" },
// //       { name: "Balcony", dim: "4'6\" x 8'6\"" },
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
// //       ["Layout Approval", "STRRPA - BMRDA"],
// //       ["Layout Name", "Confident Atria (Gated Community)"],
// //       ["Layout Extent", "30 Acres"],
// //       ["Villa Approval", "STRRPA"],
// //     ],
// //   },
// //   {
// //     group: "Structure & Envelope",
// //     rows: [
// //       ["Building Structure", "RCC Column Frame"],
// //       ["Walls", "6\" Solid Block"],
// //       ["Main Door", "Teak Wood"],
// //       ["Internal Doors", "Teak Wood Frame, Ready-made Flush Doors"],
// //       ["Windows", "3-Track UPVC, Wooden Finish, Best Quality"],
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
// //     places: ["Azim Premji University", "TISB School", "Indus School", "Global Indian School"],
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
// //     places: ["Sarjapura Circle", "Attibele Circle", "Abbaya Circle", "Chandapura Road"],
// //   },
// // ];

// // /* ------------------------------------------------------------------ */

// // export default function Page() {
// //   const [floorTab, setFloorTab] = useState("ground");
// //   const [navOpen, setNavOpen] = useState(false);
// //   const activeFloor = FLOORS.find((f) => f.id === floorTab)!;

// //   return (
// //     <main
// //       className={`${display.variable} ${body.variable} ${mono.variable} bg-pearl text-navy font-[family-name:var(--font-body)] selection:bg-gold selection:text-navy`}
// //     >
// //       {/* ---------------------------------------------------------- NAV */}
// //       <header className="fixed top-0 inset-x-0 z-50 border-b border-navy/10 bg-pearl/90 backdrop-blur-md">
// //         <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
// //           <Logo />
// //           <nav className="hidden md:flex items-center gap-9 text-[13px] tracking-[0.08em] uppercase text-navy/70">
// //             {["Overview", "Residences", "Specifications", "Location", "Enquire"].map(
// //               (item) => (
// //                 <a
// //                   key={item}
// //                   href={`#${item.toLowerCase()}`}
// //                   className="hover:text-gold transition-colors duration-300"
// //                 >
// //                   {item}
// //                 </a>
// //               )
// //             )}
// //           </nav>
// //           <a
// //             href={`tel:+91${PHONES[0]}`}
// //             className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-[13px] tracking-wide text-navy hover:bg-gold hover:border-gold transition-colors duration-300"
// //           >
// //             <Phone className="h-3.5 w-3.5" /> Call Us
// //           </a>
// //           <button
// //             onClick={() => setNavOpen((v) => !v)}
// //             className="md:hidden text-navy"
// //             aria-label="Toggle menu"
// //           >
// //             {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //           </button>
// //         </div>
// //         {navOpen && (
// //           <div className="md:hidden border-t border-navy/10 bg-pearl px-6 py-6 flex flex-col gap-5 text-sm tracking-wide uppercase text-navy/80">
// //             {["Overview", "Residences", "Specifications", "Location", "Enquire"].map(
// //               (item) => (
// //                 <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setNavOpen(false)}>
// //                   {item}
// //                 </a>
// //               )
// //             )}
// //             <a href={`tel:+91${PHONES[0]}`} className="text-gold">
// //               {PHONES[0]}
// //             </a>
// //           </div>
// //         )}
// //       </header>

// //       {/* ---------------------------------------------------------- HERO */}
// //       <section className="relative overflow-hidden bg-navy text-pearl pt-32 pb-16 px-6 lg:px-10">
// //         <div className="absolute inset-0 -z-10">
// //           <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-gold/[0.08] blur-[120px]" />
// //           <div className="absolute bottom-0 left-[-10%] h-[380px] w-[380px] rounded-full bg-gold/[0.05] blur-[110px]" />
// //         </div>

// //         <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.3fr_1fr] gap-14 items-end min-h-[70vh]">
// //           <div className="pt-10">
// //             <p className="flex items-center gap-3 text-[12px] tracking-[0.18em] uppercase text-gold/90 mb-8">
// //               <span className="h-px w-8 bg-gold/60" />
// //               Confident Atria - Gated Villa Community
// //             </p>
// //             <h1 className="font-[family-name:var(--font-display)] italic font-normal text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.15] text-pearl">
// //               Where the terrace
// //               <br />
// //               <span className="not-italic font-medium text-gold">meets the sky.</span>
// //             </h1>
// //             <p className="mt-8 max-w-md text-[15px] leading-relaxed text-pearl/65">
// //               A limited collection of East-facing 4 BHK villas rising through three
// //               considered levels — arrival, private, and sky — inside a 30-acre gated
// //               address on Sarjapura Attibele Road.
// //             </p>
// //             <div className="mt-10 flex flex-wrap items-center gap-4">
// //               <a
// //                 href="#enquire"
// //                 className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[13px] font-semibold tracking-wide text-navy hover:bg-pearl transition-colors duration-300"
// //               >
// //                 Enquire Now <ArrowUpRight className="h-4 w-4" />
// //               </a>
// //               <a
// //                 href="#residences"
// //                 className="inline-flex items-center gap-2 rounded-full border border-pearl/25 px-7 py-3.5 text-[13px] tracking-wide text-pearl/80 hover:border-pearl/60 transition-colors duration-300"
// //               >
// //                 View Floor Plans
// //               </a>
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-2 gap-px bg-pearl/10 border border-pearl/10 lg:mb-2">
// //             {STATS.map(({ label, value, icon: Icon }) => (
// //               <div key={label} className="bg-navy p-6 flex flex-col gap-3">
// //                 <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
// //                 <div>
// //                   <p className="font-[family-name:var(--font-mono)] text-lg text-pearl">
// //                     {value}
// //                   </p>
// //                   <p className="text-[11px] tracking-[0.08em] uppercase text-pearl/45 mt-1">
// //                     {label}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ---------------------------------------------------------- OVERVIEW */}
// //       <section id="overview" className="relative px-6 lg:px-10 py-24 border-b border-navy/10">
// //         <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
// //           <div className="lg:col-span-4">
// //             <p className="text-[12px] tracking-[0.18em] uppercase text-gold mb-4">
// //               Overview
// //             </p>
// //             <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-navy">
// //               Type 01 — a villa built in three considered acts
// //             </h2>
// //           </div>
// //           <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8 lg:pt-2">
// //             <OverviewPoint
// //               icon={ShieldCheck}
// //               title="STRRPA-BMRDA Approved"
// //               body="A 30-acre gated layout at Confident Atria, approved under STRRPA-BMRDA, with individually walled villa plots."
// //             />
// //             <OverviewPoint
// //               icon={Building2}
// //               title="Column-Frame Structure"
// //               body="RCC column framing and 6-inch solid block walls, finished with teak wood doors and 3-track UPVC windows."
// //             />
// //             <OverviewPoint
// //               icon={Compass}
// //               title="East-Facing, 1162 sqft"
// //               body="A 1162 sqft East-facing site carries 2400.50 sqft of built-up area across ground, first and terrace levels."
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       {/* ---------------------------------------------------------- RESIDENCES / FLOOR PLANS */}
// //       <section id="residences" className="relative px-6 lg:px-10 py-24 bg-navy text-pearl">
// //         <div className="mx-auto max-w-7xl">
// //           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
// //             <div>
// //               <p className="text-[12px] tracking-[0.18em] uppercase text-gold mb-4">
// //                 Residences
// //               </p>
// //               <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-pearl max-w-lg">
// //                 Three levels, one villa
// //               </h2>
// //             </div>
// //             <p className="max-w-sm text-sm leading-relaxed text-pearl/55">
// //               Move through the plan level by level — from the car court and living
// //               spaces at ground, to the private suites above, up to the open sky terrace.
// //             </p>
// //           </div>

// //           <div className="flex flex-wrap gap-3 mb-10">
// //             {FLOORS.map((f) => (
// //               <button
// //                 key={f.id}
// //                 onClick={() => setFloorTab(f.id)}
// //                 className={`rounded-full px-6 py-3 text-[13px] tracking-wide border transition-colors duration-300 ${
// //                   floorTab === f.id
// //                     ? "bg-gold text-navy border-gold"
// //                     : "border-pearl/20 text-pearl/60 hover:border-gold/60"
// //                 }`}
// //               >
// //                 {f.label}
// //               </button>
// //             ))}
// //           </div>

// //           <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
// //             <div className="border border-gold/25 p-8 lg:p-10">
// //               <p className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.14em] uppercase text-gold">
// //                 {activeFloor.tag}
// //               </p>
// //               <h3 className="font-[family-name:var(--font-display)] text-3xl text-pearl mt-3">
// //                 {activeFloor.label}
// //               </h3>
// //               <p className="mt-5 text-sm leading-relaxed text-pearl/60">
// //                 {activeFloor.note}
// //               </p>
// //               <div className="mt-8 flex items-baseline gap-3 border-t border-pearl/15 pt-6">
// //                 <span className="font-[family-name:var(--font-mono)] text-3xl text-gold">
// //                   {activeFloor.area}
// //                 </span>
// //                 <span className="text-[11px] tracking-[0.08em] uppercase text-pearl/40">
// //                   Floor Area
// //                 </span>
// //               </div>
// //             </div>

// //             <div className="grid sm:grid-cols-2 gap-px bg-pearl/10 border border-pearl/10">
// //               {activeFloor.rooms.map((room, i) => (
// //                 <div key={i} className="bg-navy p-6 flex items-center justify-between gap-4">
// //                   <span className="text-[14px] text-pearl/85">{room.name}</span>
// //                   <span className="font-[family-name:var(--font-mono)] text-[12px] text-gold whitespace-nowrap">
// //                     {room.dim}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="mt-10 border-t border-pearl/15 pt-8 flex flex-wrap gap-x-10 gap-y-3 text-[13px] text-pearl/50">
// //             <span>Ground Floor — 936.80 sqft</span>
// //             <span>First Floor — 920.40 sqft</span>
// //             <span>Terrace Floor — 543.30 sqft</span>
// //             <span className="text-gold">Total Built-up Area — 2400.50 sqft</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ---------------------------------------------------------- SPECIFICATIONS */}
// //       <section id="specifications" className="relative px-6 lg:px-10 py-24 border-b border-navy/10">
// //         <div className="mx-auto max-w-7xl">
// //           <div className="mb-14 max-w-lg">
// //             <p className="text-[12px] tracking-[0.18em] uppercase text-gold mb-4">
// //               Specifications
// //             </p>
// //             <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-navy">
// //               Built with material honesty
// //             </h2>
// //           </div>

// //           <div className="grid lg:grid-cols-2 gap-x-14 gap-y-12">
// //             {SPECS.map((group) => (
// //               <div key={group.group}>
// //                 <h3 className="font-[family-name:var(--font-display)] italic text-xl text-gold mb-5">
// //                   {group.group}
// //                 </h3>
// //                 <dl className="divide-y divide-navy/10 border-t border-navy/10">
// //                   {group.rows.map(([k, v]) => (
// //                     <div key={k} className="flex justify-between gap-6 py-3.5 text-sm">
// //                       <dt className="text-navy/50">{k}</dt>
// //                       <dd className="text-right text-navy/90">{v}</dd>
// //                     </div>
// //                   ))}
// //                 </dl>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ---------------------------------------------------------- LOCATION */}
// //       <section id="location" className="relative px-6 lg:px-10 py-24 bg-navy text-pearl overflow-hidden">
// //         <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
// //           <div>
// //             <p className="text-[12px] tracking-[0.18em] uppercase text-gold mb-4">
// //               Location
// //             </p>
// //             <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-pearl mb-6">
// //               Set at the centre of Sarjapura Attibele Road
// //             </h2>
// //             <p className="text-sm leading-relaxed text-pearl/55 mb-10 max-w-md">
// //               Confident Atria sits between Sarjapura and Attibele Circles — close to
// //               Infosys and the tech corridor, ringed by established schools and a
// //               university, with Chandapura Road and the roads to Malur, Hosur and
// //               Whitefield all within reach.
// //             </p>

// //             <div className="grid sm:grid-cols-2 gap-8">
// //               {LANDMARKS.map(({ category, icon: Icon, places }) => (
// //                 <div key={category}>
// //                   <div className="flex items-center gap-2 mb-3">
// //                     <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
// //                     <p className="text-[11px] tracking-[0.1em] uppercase text-pearl/50">
// //                       {category}
// //                     </p>
// //                   </div>
// //                   <ul className="space-y-1.5">
// //                     {places.map((p) => (
// //                       <li key={p} className="text-[14px] text-pearl/80">
// //                         {p}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <LocationRadar />
// //         </div>
// //       </section>

// //       {/* ---------------------------------------------------------- ENQUIRE */}
// //       <section id="enquire" className="relative px-6 lg:px-10 py-24">
// //         <div className="mx-auto max-w-7xl relative overflow-hidden border border-gold/30 px-8 py-16 sm:px-16 sm:py-20 text-center">
// //           <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.06)_0%,_transparent_70%)]" />
// //           <p className="text-[12px] tracking-[0.18em] uppercase text-gold mb-5">
// //             Enquire
// //           </p>
// //           <h2 className="font-[family-name:var(--font-display)] italic text-3xl sm:text-4xl text-navy max-w-2xl mx-auto leading-tight">
// //             A limited number of Type 01 villas remain at Confident Atria.
// //           </h2>
// //           <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
// //             {PHONES.map((p) => (
// //               <a
// //                 key={p}
// //                 href={`tel:+91${p}`}
// //                 className="inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-[15px] font-semibold tracking-wide text-navy hover:bg-navy hover:text-pearl transition-colors duration-300"
// //               >
// //                 <Phone className="h-4 w-4" /> {p}
// //               </a>
// //             ))}
// //           </div>
// //           <p className="mt-8 text-[13px] text-navy/45">
// //             {ADDRESS.join(" · ")}
// //           </p>
// //         </div>
// //       </section>

// //       {/* ---------------------------------------------------------- FOOTER */}
// //       <footer className="px-6 lg:px-10 py-14 border-t border-navy/10">
// //         <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-8">
// //           <Logo />
// //           <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-[13px] text-navy/50">
// //             <span className="flex items-center gap-2">
// //               <MapPin className="h-3.5 w-3.5 text-gold" /> {ADDRESS[2]}
// //             </span>
// //             <span className="flex items-center gap-2">
// //               <Phone className="h-3.5 w-3.5 text-gold" /> {PHONES.join(" / ")}
// //             </span>
// //           </div>
// //           <p className="text-[12px] text-navy/35">
// //             © {new Date().getFullYear()} SVT Developer &amp; Constructions
// //           </p>
// //         </div>
// //       </footer>
// //     </main>
// //   );
// // }

// // /* ------------------------------------------------------------------ */
// // /*  Small components                                                   */
// // /* ------------------------------------------------------------------ */

// // function Logo() {
// //   return (
// //     <a href="#" className="flex items-center gap-3">
// //       <span className="relative flex h-8 w-8 items-end gap-[3px]">
// //         <span className="h-4 w-[7px] bg-navy/40" />
// //         <span className="h-6 w-[7px] bg-gold" />
// //         <span className="h-8 w-[7px] bg-navy" />
// //       </span>
// //       <span className="leading-none">
// //         <span className="block font-[family-name:var(--font-display)] text-lg tracking-wide text-navy">
// //           SVT
// //         </span>
// //         <span className="block text-[9px] tracking-[0.22em] text-navy/45">
// //           GROUP
// //         </span>
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
// //     <div className="border-t border-gold/40 pt-6">
// //       <Icon className="h-5 w-5 text-gold mb-4" strokeWidth={1.5} />
// //       <h3 className="text-[15px] font-semibold text-navy mb-2">{title}</h3>
// //       <p className="text-[13.5px] leading-relaxed text-navy/55">{body}</p>
// //     </div>
// //   );
// // }

// // function LocationRadar() {
// //   const points = [
// //     { label: "Infosys", angle: -35, r: 34 },
// //     { label: "TISB School", angle: -110, r: 40 },
// //     { label: "Azim Premji University", angle: 40, r: 42 },
// //     { label: "Exide Factory", angle: -70, r: 22 },
// //     { label: "Attibele Circle", angle: 15, r: 26 },
// //     { label: "Sarjapura Circle", angle: 195, r: 20 },
// //   ];
// //   return (
// //     <div className="relative mx-auto aspect-square w-full max-w-md">
// //       <svg viewBox="0 0 200 200" className="h-full w-full">
// //         {[85, 62, 38].map((r) => (
// //           <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#D4AF37" strokeOpacity="0.22" />
// //         ))}
// //         {points.map((p) => {
// //           const rad = (p.angle * Math.PI) / 180;
// //           const x = 100 + p.r * Math.cos(rad);
// //           const y = 100 + p.r * Math.sin(rad);
// //           return (
// //             <g key={p.label}>
// //               <line x1="100" y1="100" x2={x} y2={y} stroke="#D4AF37" strokeOpacity="0.3" strokeWidth="0.6" />
// //               <circle cx={x} cy={y} r="2.6" fill="#D4AF37" />
// //             </g>
// //           );
// //         })}
// //         <circle cx="100" cy="100" r="6" fill="#D4AF37" />
// //         <circle cx="100" cy="100" r="6" fill="none" stroke="#0B1E36" strokeWidth="1.5" />
// //       </svg>
// //       {points.map((p) => {
// //         const rad = (p.angle * Math.PI) / 180;
// //         const x = 50 + p.r * 0.5 * Math.cos(rad);
// //         const y = 50 + p.r * 0.5 * Math.sin(rad);
// //         return (
// //           <span
// //             key={p.label}
// //             style={{ left: `${x}%`, top: `${y}%` }}
// //             className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] tracking-wide text-pearl/60 bg-navy px-1.5"
// //           >
// //             {p.label}
// //           </span>
// //         );
// //       })}
// //       <span className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-3 whitespace-nowrap text-[10px] tracking-[0.1em] uppercase text-gold">
// //         Proposed Villa
// //       </span>
// //     </div>
// //   );
// // }

// "use client";

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
// } from "lucide-react";

// const display = Fraunces({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   style: ["normal", "italic"],
//   variable: "--font-display",
// });

// const body = Manrope({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-body",
// });

// const mono = IBM_Plex_Mono({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-mono",
// });

// const BRONZE = "#8B6F3D";

// /* ------------------------------------------------------------------ */
// /*  Content — sourced from the SVT Group / Confident Atria brochure    */
// /* ------------------------------------------------------------------ */

// const PHONES = ["9945042228", "9620229020"];
// const ADDRESS = [
//   "5th Floor, Site No. 108, Door No. 33, SVT Homes",
//   "Sarjapura Attibele Road, Confident Aspire",
//   "Burgunte Village, Bengaluru, Karnataka 562107",
// ];

// const STATS = [
//   { label: "Configuration", value: "4 BHK", icon: HomeIcon },
//   { label: "Site Area", value: "1162 sqft", icon: Ruler },
//   { label: "Total Built-up Area", value: "2400.50 sqft", icon: Layers },
//   { label: "Facing", value: "East", icon: Sun },
// ];

// const AMENITIES = [
//   {
//     icon: ShieldCheck,
//     title: "Gated & secure",
//     body: "A 30-acre STRRPA-BMRDA approved layout with an individual compound wall around every villa.",
//   },
//   {
//     icon: Droplets,
//     title: "Water security",
//     body: "8000 litre underground sump with RCC structure, plus a 1000 litre 3-layer fibre overhead tank.",
//   },
//   {
//     icon: Hammer,
//     title: "Crafted interiors",
//     body: "Teak wood doors, vitrified tile flooring, and granite staircases and sitouts throughout.",
//   },
//   {
//     icon: Plug,
//     title: "Trusted fittings",
//     body: "Jaquar sanitary fittings, Grohe flush tanks, and Polycab / V-Guard / Havells electricals.",
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
//       { name: "Dining Area", dim: "8'6\" x 4'0\"" },
//       { name: "Kitchen", dim: "11'0\" x 8'0\"" },
//       { name: "Pooja", dim: "3'2\" x 4'8\"" },
//       { name: "Bed Room", dim: "11'0\" x 11'0\"" },
//       { name: "Toilet", dim: "7'6\" x 4'8\"" },
//       { name: "Car Parking", dim: "16'6\" x 9'0\"" },
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
//       { name: "Family Area", dim: "8'6\" x 16'6\"" },
//       { name: "Dress Area", dim: "5'8\" x 8'0\"" },
//       { name: "Dress Area", dim: "7'6\" x 8'0\"" },
//       { name: "Balcony", dim: "4'6\" x 8'6\"" },
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
//       ["Layout Approval", "STRRPA - BMRDA"],
//       ["Layout Name", "Confident Atria (Gated Community)"],
//       ["Layout Extent", "30 Acres"],
//       ["Villa Approval", "STRRPA"],
//     ],
//   },
//   {
//     group: "Structure & Envelope",
//     rows: [
//       ["Building Structure", "RCC Column Frame"],
//       ["Walls", "6\" Solid Block"],
//       ["Main Door", "Teak Wood"],
//       ["Internal Doors", "Teak Wood Frame, Ready-made Flush Doors"],
//       ["Windows", "3-Track UPVC, Wooden Finish, Best Quality"],
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
//     places: ["Azim Premji University", "TISB School", "Indus School", "Global Indian School"],
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
//     places: ["Sarjapura Circle", "Attibele Circle", "Abbaya Circle", "Chandapura Road"],
//   },
// ];

// /* ------------------------------------------------------------------ */
// /*  Scroll-reveal helper                                               */
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

// export default function Page() {
//   const [floorTab, setFloorTab] = useState("ground");
//   const [navOpen, setNavOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [heroIn, setHeroIn] = useState(false);
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
//     return () => {
//       clearTimeout(t);
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   return (
//     <main
//       className={`${display.variable} ${body.variable} ${mono.variable} bg-pearl text-navy font-[family-name:var(--font-body)] selection:bg-gold selection:text-navy`}
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
//       `}</style>

//       {/* ---------------------------------------------------------- SCROLL PROGRESS */}
//       <div className="fixed top-0 left-0 h-[2px] bg-gold z-[60] transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />

//       {/* ---------------------------------------------------------- NAV */}
// {/* ---------------------------------------------------------- NAV */}
//       <header
//         className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
//           scrolled ? "border-navy/10 bg-pearl/95 backdrop-blur-md shadow-[0_1px_0_rgba(11,30,54,0.04)]" : "border-transparent bg-pearl/0"
//         }`}
//       >
//         <div className={`mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
//           <Logo scrolled={scrolled} />
          
//           <nav className={`hidden md:flex items-center gap-9 text-[13px] tracking-[0.08em] uppercase transition-colors duration-300 ${
//             scrolled ? "text-navy/70" : "text-pearl/80"
//           }`}>
//             {["Overview", "Residences", "Specifications", "Location", "Enquire"].map((item) => (
//               <a key={item} href={`#${item.toLowerCase()}`} className="relative group py-1">
//                 {item}
//                 <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
//               </a>
//             ))}
//           </nav>

//           <a
//             href={`tel:+91${PHONES[0]}`}
//             className={`hidden md:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] tracking-wide hover:bg-gold hover:border-gold hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 ${
//               scrolled ? "border-gold/50 text-navy" : "border-pearl/40 text-pearl hover:text-navy"
//             }`}
//           >
//             <Phone className="h-3.5 w-3.5" /> Call Us
//           </a>

//           <button onClick={() => setNavOpen((v) => !v)} className={`md:hidden transition-colors duration-300 ${scrolled ? "text-navy" : "text-pearl"}`} aria-label="Toggle menu">
//             {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
        
//         {navOpen && (
//           <div className="md:hidden border-t border-navy/10 bg-pearl px-6 py-6 flex flex-col gap-5 text-sm tracking-wide uppercase text-navy/80 fade-in-up shadow-lg">
//             {["Overview", "Residences", "Specifications", "Location", "Enquire"].map((item) => (
//               <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setNavOpen(false)}>
//                 {item}
//               </a>
//             ))}
//             <a href={`tel:+91${PHONES[0]}`} className="text-gold font-medium">
//               {PHONES[0]}
//             </a>
//           </div>
//         )}
//       </header>

//       {/* ---------------------------------------------------------- HERO */}
//       <section className="relative overflow-hidden bg-navy text-pearl pt-32 pb-16 px-6 lg:px-10">
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute -top-32 right-[-8%] h-[560px] w-[560px] rounded-full bg-gold/[0.10] blur-[130px] animate-float" />
//           <div className="absolute bottom-[-10%] left-[-8%] h-[420px] w-[420px] rounded-full blur-[120px] animate-float-slow" style={{ backgroundColor: `${BRONZE}1a` }} />
//           <svg className="absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 100 100" preserveAspectRatio="none">
//             {Array.from({ length: 11 }).map((_, i) => (
//               <line key={i} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="#D4AF37" strokeWidth="0.05" />
//             ))}
//           </svg>
//         </div>

//         <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.3fr_1fr] gap-14 items-end min-h-[68vh]">
//           <div className="pt-10">
//             <p
//               className={`flex items-center gap-3 text-[12px] tracking-[0.18em] uppercase text-gold/90 mb-8 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//             >
//               <span className="h-px w-8 bg-gold/60" />
//               Confident Atria - Gated Villa Community
//             </p>
//             <h1
//               className={`font-[family-name:var(--font-display)] italic font-normal text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.15] text-pearl transition-all duration-700 delay-100 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//             >
//               Where the terrace
//               <br />
//               <span className="not-italic font-medium text-gold">meets the sky.</span>
//             </h1>
//             <p
//               className={`mt-8 max-w-md text-[15px] leading-relaxed text-pearl/65 transition-all duration-700 delay-200 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//             >
//               A limited collection of East-facing 4 BHK villas rising through three
//               considered levels — arrival, private, and sky — inside a 30-acre gated
//               address on Sarjapura Attibele Road.
//             </p>
//             <div className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-300 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
//               <a
//                 href="#enquire"
//                 className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[13px] font-semibold tracking-wide text-navy hover:bg-pearl hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
//               >
//                 Enquire Now <ArrowUpRight className="h-4 w-4" />
//               </a>
//               <a
//                 href="#residences"
//                 className="inline-flex items-center gap-2 rounded-full border border-pearl/25 px-7 py-3.5 text-[13px] tracking-wide text-pearl/80 hover:border-pearl/60 hover:-translate-y-0.5 transition-all duration-300"
//               >
//                 View Floor Plans
//               </a>
//             </div>
//           </div>

//           <div className={`grid grid-cols-2 gap-px bg-pearl/10 border border-pearl/10 lg:mb-2 transition-all duration-700 delay-200 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
//             {STATS.map(({ label, value, icon: Icon }) => (
//               <div key={label} className="bg-navy p-6 flex flex-col gap-3 hover:bg-navy/60 transition-colors duration-300">
//                 <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
//                 <div>
//                   <p className="font-[family-name:var(--font-mono)] text-lg text-pearl">{value}</p>
//                   <p className="text-[11px] tracking-[0.08em] uppercase text-pearl/45 mt-1">{label}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- OVERVIEW */}
//       <section id="overview" className="relative px-6 lg:px-10 py-24 border-b border-navy/10">
//         <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
//           <Reveal className="lg:col-span-4">
//             <p className="text-[12px] tracking-[0.18em] uppercase text-gold mb-4">Overview</p>
//             <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-navy">
//               Type 01 — a villa built in three considered acts
//             </h2>
//           </Reveal>
//           <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8 lg:pt-2">
//             <Reveal delay={80}>
//               <OverviewPoint icon={ShieldCheck} title="STRRPA-BMRDA Approved" body="A 30-acre gated layout at Confident Atria, approved under STRRPA-BMRDA, with individually walled villa plots." />
//             </Reveal>
//             <Reveal delay={160}>
//               <OverviewPoint icon={Building2} title="Column-Frame Structure" body="RCC column framing and 6-inch solid block walls, finished with teak wood doors and 3-track UPVC windows." />
//             </Reveal>
//             <Reveal delay={240}>
//               <OverviewPoint icon={Compass} title="East-Facing, 1162 sqft" body="A 1162 sqft East-facing site carries 2400.50 sqft of built-up area across ground, first and terrace levels." />
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- AMENITIES */}
//       <section className="relative px-6 lg:px-10 py-24 border-b border-navy/10" style={{ backgroundColor: "#FAF6EC" }}>
//         <div className="mx-auto max-w-7xl">
//           <Reveal className="max-w-lg mb-14">
//             <p className="text-[12px] tracking-[0.18em] uppercase text-gold mb-4">Living Here</p>
//             <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-navy">
//               Every detail, considered
//             </h2>
//           </Reveal>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {AMENITIES.map((a, i) => (
//               <Reveal key={a.title} delay={i * 90}>
//                 <div className="group h-full rounded-[12px] border border-gold/25 bg-pearl p-6 hover:border-gold hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
//                   <div className="h-10 w-10 rounded-full flex items-center justify-center mb-5 bg-navy group-hover:bg-gold transition-colors duration-300">
//                     <a.icon className="h-4.5 w-4.5 text-gold group-hover:text-navy transition-colors duration-300" strokeWidth={1.5} />
//                   </div>
//                   <h3 className="text-[15px] font-semibold text-navy mb-2">{a.title}</h3>
//                   <p className="text-[13.5px] leading-relaxed text-navy/55">{a.body}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- RESIDENCES / FLOOR PLANS */}
//       <section id="residences" className="relative px-6 lg:px-10 py-24">
//         <div className="mx-auto max-w-7xl">
//           <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
//             <div>
//               <p className="text-[12px] tracking-[0.18em] uppercase text-gold mb-4">Residences</p>
//               <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-navy max-w-lg">Three levels, one villa</h2>
//             </div>
//             <p className="max-w-sm text-sm leading-relaxed text-navy/55">
//               Move through the plan level by level — from the car court and living
//               spaces at ground, to the private suites above, up to the open sky terrace.
//             </p>
//           </Reveal>

//           <Reveal className="flex flex-wrap gap-3 mb-10">
//             {FLOORS.map((f) => (
//               <button
//                 key={f.id}
//                 onClick={() => setFloorTab(f.id)}
//                 className={`rounded-full px-6 py-3 text-[13px] tracking-wide border transition-all duration-300 ${
//                   floorTab === f.id
//                     ? "bg-navy text-pearl border-navy shadow-md"
//                     : "border-navy/20 text-navy/60 hover:border-gold hover:text-navy"
//                 }`}
//               >
//                 {f.label}
//               </button>
//             ))}
//           </Reveal>

//           <div key={floorTab} className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start fade-in-up">
//             <div className="border border-navy/15 rounded-[12px] p-8 lg:p-10 bg-[#FAF6EC]">
//               <p className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.14em] uppercase" style={{ color: BRONZE }}>
//                 {activeFloor.tag}
//               </p>
//               <h3 className="font-[family-name:var(--font-display)] text-3xl text-navy mt-3">{activeFloor.label}</h3>
//               <p className="mt-5 text-sm leading-relaxed text-navy/60">{activeFloor.note}</p>
//               <div className="mt-8 flex items-baseline gap-3 border-t border-navy/10 pt-6">
//                 <span className="font-[family-name:var(--font-mono)] text-3xl text-gold">{activeFloor.area}</span>
//                 <span className="text-[11px] tracking-[0.08em] uppercase text-navy/40">Floor Area</span>
//               </div>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-3">
//               {activeFloor.rooms.map((room, i) => {
//                 const RoomIcon = getRoomIcon(room.name);
//                 return (
//                   <div
//                     key={i}
//                     className="group flex items-center gap-4 rounded-[12px] border border-navy/10 bg-pearl p-4 hover:border-gold hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
//                   >
//                     <div className="h-10 w-10 shrink-0 rounded-full bg-navy/[0.06] flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-300">
//                       <RoomIcon className="h-4.5 w-4.5 text-navy/70" strokeWidth={1.5} />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="text-[14px] text-navy/85 truncate">{room.name}</p>
//                       <p className="font-[family-name:var(--font-mono)] text-[12px]" style={{ color: BRONZE }}>
//                         {room.dim}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <Reveal className="mt-10 border-t border-navy/10 pt-8 flex flex-wrap gap-x-10 gap-y-3 text-[13px] text-navy/50">
//             <span>Ground Floor — 936.80 sqft</span>
//             <span>First Floor — 920.40 sqft</span>
//             <span>Terrace Floor — 543.30 sqft</span>
//             <span className="text-gold font-medium">Total Built-up Area — 2400.50 sqft</span>
//           </Reveal>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- SPECIFICATIONS */}
//       <section id="specifications" className="relative px-6 lg:px-10 py-24 bg-navy text-pearl">
//         <div className="mx-auto max-w-7xl">
//           <Reveal className="mb-14 max-w-lg">
//             <p className="text-[12px] tracking-[0.18em] uppercase text-gold mb-4">Specifications</p>
//             <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-pearl">Built with material honesty</h2>
//           </Reveal>

//           <div className="grid lg:grid-cols-2 gap-x-14 gap-y-10">
//             {SPECS.map((group, gi) => (
//               <Reveal key={group.group} delay={gi * 70} className="rounded-[12px] border border-pearl/10 p-6 hover:border-gold/40 transition-colors duration-300">
//                 <h3 className="font-[family-name:var(--font-display)] italic text-xl text-gold mb-5">{group.group}</h3>
//                 <dl className="divide-y divide-pearl/10 border-t border-pearl/10">
//                   {group.rows.map(([k, v]) => (
//                     <div key={k} className="flex justify-between gap-6 py-3.5 text-sm hover:bg-pearl/[0.03] -mx-2 px-2 rounded transition-colors duration-200">
//                       <dt className="text-pearl/50">{k}</dt>
//                       <dd className="text-right text-pearl/90">{v}</dd>
//                     </div>
//                   ))}
//                 </dl>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- LOCATION */}
//       <section id="location" className="relative px-6 lg:px-10 py-24 overflow-hidden">
//         <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
//           <Reveal>
//             <p className="text-[12px] tracking-[0.18em] uppercase text-gold mb-4">Location</p>
//             <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-navy mb-6">
//               Set at the centre of Sarjapura Attibele Road
//             </h2>
//             <p className="text-sm leading-relaxed text-navy/55 mb-10 max-w-md">
//               Confident Atria sits between Sarjapura and Attibele Circles — close to
//               Infosys and the tech corridor, ringed by established schools and a
//               university, with Chandapura Road and the roads to Malur, Hosur and
//               Whitefield all within reach.
//             </p>

//             <div className="grid sm:grid-cols-2 gap-8">
//               {LANDMARKS.map(({ category, icon: Icon, places }, i) => (
//                 <Reveal key={category} delay={i * 80}>
//                   <div className="flex items-center gap-2 mb-3">
//                     <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
//                     <p className="text-[11px] tracking-[0.1em] uppercase text-navy/50">{category}</p>
//                   </div>
//                   <ul className="space-y-1.5">
//                     {places.map((p) => (
//                       <li key={p} className="text-[14px] text-navy/80">{p}</li>
//                     ))}
//                   </ul>
//                 </Reveal>
//               ))}
//             </div>
//           </Reveal>

//           <Reveal delay={120}>
//             <LocationRadar />
//           </Reveal>
//         </div>
//       </section>

//       {/* ---------------------------------------------------------- ENQUIRE */}
//       <section id="enquire" className="relative px-6 lg:px-10 py-24">
//         <Reveal className="mx-auto max-w-7xl relative overflow-hidden rounded-[16px] border border-gold/30 px-8 py-16 sm:px-16 sm:py-20 text-center bg-navy text-pearl">
//           <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.10)_0%,_transparent_70%)]" />
//           <p className="text-[12px] tracking-[0.18em] uppercase text-gold mb-5">Enquire</p>
//           <h2 className="font-[family-name:var(--font-display)] italic text-3xl sm:text-4xl text-pearl max-w-2xl mx-auto leading-tight">
//             A limited number of Type 01 villas remain at Confident Atria.
//           </h2>
//           <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
//             {PHONES.map((p) => (
//               <a
//                 key={p}
//                 href={`tel:+91${p}`}
//                 className="relative inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-[15px] font-semibold tracking-wide text-navy hover:bg-pearl hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
//               >
//                 <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" style={{ animationDuration: "2.5s" }} />
//                 <Phone className="h-4 w-4 relative" /> <span className="relative">{p}</span>
//               </a>
//             ))}
//           </div>
//           <p className="mt-8 text-[13px] text-pearl/45">{ADDRESS.join(" · ")}</p>
//         </Reveal>
//       </section>

//       {/* ---------------------------------------------------------- FOOTER */}
//       <footer className="px-6 lg:px-10 py-14 border-t border-navy/10">
//         <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-8">
//           <Logo />
//           <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-[13px] text-navy/50">
//             <span className="flex items-center gap-2">
//               <MapPin className="h-3.5 w-3.5 text-gold" /> {ADDRESS[2]}
//             </span>
//             <span className="flex items-center gap-2">
//               <Phone className="h-3.5 w-3.5 text-gold" /> {PHONES.join(" / ")}
//             </span>
//           </div>
//           <p className="text-[12px] text-navy/35">© {new Date().getFullYear()} SVT Developer &amp; Constructions</p>
//         </div>
//       </footer>
//     </main>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Small components                                                   */
// /* ------------------------------------------------------------------ */

// function Logo({ scrolled = true }: { scrolled?: boolean }) {
//   return (
//     <a href="#" className="flex items-center gap-3 group">
//       <span className="relative flex h-8 w-8 items-end gap-[3px]">
//         <span className="h-4 w-[7px] transition-all duration-300 group-hover:h-5" style={{ backgroundColor: BRONZE }} />
//         <span className="h-6 w-[7px] bg-gold transition-all duration-300 group-hover:h-7" />
//         <span className={`h-8 w-[7px] transition-colors duration-300 ${scrolled ? "bg-navy" : "bg-pearl"}`} />
//       </span>
//       <span className="leading-none">
//         <span className={`block font-[family-name:var(--font-display)] text-lg tracking-wide transition-colors duration-300 ${scrolled ? "text-navy" : "text-pearl"}`}>SVT</span>
//         <span className={`block text-[9px] tracking-[0.22em] transition-colors duration-300 ${scrolled ? "text-navy/45" : "text-pearl/60"}`}>GROUP</span>
//       </span>
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
//     <div className="group border-t-2 border-gold/40 pt-6 hover:border-gold transition-colors duration-300">
//       <Icon className="h-5 w-5 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
//       <h3 className="text-[15px] font-semibold text-navy mb-2">{title}</h3>
//       <p className="text-[13.5px] leading-relaxed text-navy/55">{body}</p>
//     </div>
//   );
// }

// function LocationRadar() {
//   const points = [
//     { label: "Infosys", angle: -35, r: 34 },
//     { label: "TISB School", angle: -110, r: 40 },
//     { label: "Azim Premji University", angle: 40, r: 42 },
//     { label: "Exide Factory", angle: -70, r: 22 },
//     { label: "Attibele Circle", angle: 15, r: 26 },
//     { label: "Sarjapura Circle", angle: 195, r: 20 },
//   ];
//   return (
//     <div className="relative mx-auto aspect-square w-full max-w-md rounded-full" style={{ backgroundColor: "#FAF6EC" }}>
//       <svg viewBox="0 0 200 200" className="h-full w-full">
//         {[85, 62, 38].map((r) => (
//           <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#D4AF37" strokeOpacity="0.25" />
//         ))}
//         {points.map((p) => {
//           const rad = (p.angle * Math.PI) / 180;
//           const x = 100 + p.r * Math.cos(rad);
//           const y = 100 + p.r * Math.sin(rad);
//           return (
//             <g key={p.label}>
//               <line x1="100" y1="100" x2={x} y2={y} stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="0.6" />
//               <circle cx={x} cy={y} r="2.6" fill="#D4AF37" />
//             </g>
//           );
//         })}
//         <circle cx="100" cy="100" r="10" fill="#D4AF37" fillOpacity="0.25">
//           <animate attributeName="r" values="8;14;8" dur="2.5s" repeatCount="indefinite" />
//           <animate attributeName="fill-opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite" />
//         </circle>
//         <circle cx="100" cy="100" r="6" fill="#0B1E36" />
//         <circle cx="100" cy="100" r="6" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
//       </svg>
//       {points.map((p) => {
//         const rad = (p.angle * Math.PI) / 180;
//         const x = 50 + p.r * 0.5 * Math.cos(rad);
//         const y = 50 + p.r * 0.5 * Math.sin(rad);
//         return (
//           <span
//             key={p.label}
//             style={{ left: `${x}%`, top: `${y}%` }}
//             className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] tracking-wide text-navy/70 bg-[#FAF6EC] px-1.5"
//           >
//             {p.label}
//           </span>
//         );
//       })}
//       <span className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-3 whitespace-nowrap text-[10px] tracking-[0.1em] uppercase text-navy font-medium">
//         Proposed Villa
//       </span>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  Map,
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
/*  Content                                                           */
/* ------------------------------------------------------------------ */

const PHONES = ["9945042228", "9620229020"];
const ADDRESS = [
  "5th Floor, Site No. 108, Door No. 33, SVT Homes",
  "Sarjapura Attibele Road, Confident Aspire",
  "Burgunte Village, Bengaluru, Karnataka 562107",
];

const STATS = [
  { label: "Configuration", value: "4 BHK", icon: HomeIcon },
  { label: "Site Area", value: "1162 sqft", icon: Ruler },
  { label: "Total Built-up", value: "2400.50 sqft", icon: Layers },
  { label: "Starting Price", value: "2 Cr*", icon: IndianRupee },
];

const AMENITIES = [
  {
    icon: ShieldCheck,
    title: "Gated & Secure",
    body: "A 30-acre STRRPA-BMRDA approved layout with an individual compound wall around every villa.",
  },
  {
    icon: Droplets,
    title: "Water Security",
    body: "8000 litre underground sump with RCC structure, plus a 1000 litre 3-layer fibre overhead tank.",
  },
  {
    icon: Hammer,
    title: "Crafted Interiors",
    body: "Teak wood doors, vitrified tile flooring, and granite staircases and sitouts throughout.",
  },
  {
    icon: Plug,
    title: "Trusted Fittings",
    body: "Jaquar sanitary fittings, Grohe flush tanks, and Polycab / V-Guard / Havells electricals.",
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
      ["Layout Approval", "STRRPA-BMRDA"],
      ["Layout Name", "Confident Atria (Gated Community)"],
      ["Layout Extent", "30 Acres"],
      ["Villa Approval", "STRRPA"],
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
    places: ["Azim Premji University", "TISB School", "Indus School", "Global Indian School"],
  },
  {
    category: "Business & Industry",
    icon: Factory,
    places: ["Infosys", "Exide Factory", "SVT RMC Plant"],
  },
  {
    category: "Civic & Everyday",
    icon: ShieldCheck,
    places: ["Police Station", "Sompura Gate"],
  },
  {
    category: "Connectivity",
    icon: Milestone,
    places: ["Sarjapura Circle", "Attibele Circle", "Abbaya Circle", "Chandapura Road"],
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

export default function Page() {
  const [floorTab, setFloorTab] = useState("ground");
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [heroIn, setHeroIn] = useState(false);
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
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} bg-[#FAFAFA] text-navy font-[family-name:var(--font-body)] selection:bg-gold selection:text-navy scroll-smooth`}
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
        <div className={`mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-24"}`}>
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
          <button onClick={() => setNavOpen((v) => !v)} className={`md:hidden transition-colors duration-300 ${scrolled ? "text-navy" : "text-pearl"}`} aria-label="Toggle menu">
            {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Nav */}
        {navOpen && (
          <div className="md:hidden border-t border-navy/10 bg-pearl px-6 py-6 flex flex-col gap-5 text-sm tracking-wide uppercase text-navy/80 shadow-2xl">
            {["Overview", "Residences", "Specifications", "Location", "Enquire"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setNavOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ---------------------------------------------------------- HERO */}
      <section className="relative overflow-hidden bg-navy text-pearl pt-32 pb-16 px-6 lg:px-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 right-[-8%] h-[560px] w-[560px] rounded-full bg-gold/[0.08] blur-[100px] animate-float" />
          <div className="absolute bottom-[-10%] left-[-8%] h-[420px] w-[420px] rounded-full blur-[90px] animate-float-slow bg-gold/[0.05]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>

        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center min-h-[75vh]">
          <div className="pt-10">
            <p
              className={`flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase text-gold/90 mb-6 transition-all duration-700 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span className="h-px w-8 bg-gold/60" />
              Villa 12 • Confident Atria
            </p>
            <h1
              className={`font-[family-name:var(--font-display)] italic font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] text-pearl transition-all duration-700 delay-100 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Where the terrace <br />
              <span className="not-italic font-medium text-gold">meets the sky.</span>
            </h1>
            <p
              className={`mt-8 max-w-lg text-[16px] font-light leading-relaxed text-pearl/70 transition-all duration-700 delay-200 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              A limited collection of East-facing 4 BHK villas rising through three considered levels — arrival, private, and sky. Starting Price 2 Cr*.
            </p>
            <div className={`mt-10 flex flex-wrap items-center gap-5 transition-all duration-700 delay-300 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-[13px] font-semibold tracking-wide text-navy hover:bg-pearl transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                Enquire Now <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#residences"
                className="inline-flex items-center gap-2 rounded-full border border-pearl/30 px-8 py-4 text-[13px] tracking-wide text-pearl hover:bg-pearl/10 transition-colors"
              >
                View Floor Plans
              </a>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-4 lg:gap-6 transition-all duration-700 delay-400 ${heroIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {STATS.map(({ label, value, icon: Icon }) => (
              <div key={label} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm flex flex-col gap-4 hover:bg-white/10 transition-colors">
                <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-xl text-pearl">{value}</p>
                  <p className="text-[11px] tracking-[0.1em] uppercase text-pearl/50 mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- OVERVIEW */}
      <section id="overview" className="relative px-6 lg:px-10 py-32 bg-white">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16 items-start">
          <Reveal className="lg:col-span-4 sticky top-32">
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Overview</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy">
              Type 01 — a villa built in three acts
            </h2>
          </Reveal>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-10">
            <Reveal delay={100}>
              <OverviewPoint icon={ShieldCheck} title="STRRPA-BMRDA Approved" body="A 30-acre gated layout at Confident Atria, approved under STRRPA-BMRDA, with individually walled villa plots." />
            </Reveal>
            <Reveal delay={200}>
              <OverviewPoint icon={Building2} title="Column-Frame Structure" body="RCC column framing and 6-inch solid block walls, finished with teak wood doors and 3-track UPVC windows." />
            </Reveal>
            <Reveal delay={300}>
              <OverviewPoint icon={Compass} title="East-Facing, 1162 sqft" body="A 1162 sqft East-facing site carries 2400.50 sqft of built-up area across ground, first and terrace levels." />
            </Reveal>
            <Reveal delay={400}>
              <OverviewPoint icon={IndianRupee} title="Premium Investment" body="Starting at 2 Cr*, Villa 12 represents a prime opportunity within the Sarjapura Attibele tech corridor." />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- AMENITIES */}
      <section className="relative px-6 lg:px-10 py-32 bg-[#F8F9FA] border-y border-navy/5">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Living Here</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy">
              Every detail, considered
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <div className="group h-full rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gold/30 hover:-translate-y-2">
                  <div className="h-14 w-14 rounded-full flex items-center justify-center mb-6 bg-[#F0F4F8] group-hover:bg-gold transition-colors duration-500">
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

      {/* ---------------------------------------------------------- RESIDENCES / FLOOR PLANS */}
      <section id="residences" className="relative px-6 lg:px-10 py-32 bg-white">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Residences</p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy max-w-lg">Three levels, one villa</h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-navy/60">
              Move through the plan level by level — from the car court and living
              spaces at ground, to the private suites above, up to the open sky terrace.
            </p>
          </Reveal>

          {/* PDF Floor Plan Image Placeholders */}
<Reveal className="mb-20 grid lg:grid-cols-2 gap-10">
            {/* Image 1 Container */}
            <div className="rounded-3xl overflow-hidden border border-navy/10 shadow-lg bg-[#F8F9FA] aspect-[4/3] relative group cursor-pointer">
              <Image 
                src="https://ik.imagekit.io/j0xzq9pns/svt/Screenshot%202026-07-18%20142144.png" /* Replace with your actual image path */
                alt="First Floor Plan"
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-105 blur-[3px] group-hover:blur-0"
              />
            </div>
            
            {/* Image 2 Container */}
            <div className="rounded-3xl overflow-hidden border border-navy/10 shadow-lg bg-[#F8F9FA] aspect-[4/3] relative group cursor-pointer">
              <Image 
                src="https://ik.imagekit.io/j0xzq9pns/svt/Screenshot%202026-07-18%20142207.png" /* Replace with your actual image path */
                alt="Full Floor Plans"
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-105 blur-[3px] group-hover:blur-0"
              />
            </div>
          </Reveal>

          <Reveal className="flex flex-wrap gap-4 mb-12 justify-center">
            {FLOORS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFloorTab(f.id)}
                className={`rounded-full px-8 py-3.5 text-[14px] font-medium tracking-wide transition-all duration-300 ${
                  floorTab === f.id
                    ? "bg-navy text-white shadow-lg scale-105"
                    : "bg-[#F0F4F8] text-navy/60 hover:bg-gold/10 hover:text-navy"
                }`}
              >
                {f.label}
              </button>
            ))}
          </Reveal>

          <div key={floorTab} className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start fade-in-up">
            <div className="bg-[#F8F9FA] rounded-3xl p-10 border border-navy/5">
              <p className="font-[family-name:var(--font-mono)] text-[12px] tracking-[0.2em] uppercase text-gold">
                {activeFloor.tag}
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-3xl text-navy mt-4">{activeFloor.label}</h3>
              <p className="mt-6 text-[15px] leading-relaxed text-navy/60">{activeFloor.note}</p>
              <div className="mt-10 flex items-baseline gap-4 border-t border-navy/10 pt-8">
                <span className="font-[family-name:var(--font-mono)] text-4xl text-navy">{activeFloor.area}</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {activeFloor.rooms.map((room, i) => {
                const RoomIcon = getRoomIcon(room.name);
                return (
                  <div
                    key={i}
                    className="group flex items-center gap-5 rounded-2xl border border-navy/5 bg-white p-5 hover:border-gold/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="h-12 w-12 shrink-0 rounded-full bg-[#F0F4F8] flex items-center justify-center group-hover:bg-gold/20 group-hover:text-gold transition-colors duration-300">
                      <RoomIcon className="h-5 w-5 text-navy/60 group-hover:text-gold" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[15px] font-medium text-navy truncate">{room.name}</p>
                      <p className="font-[family-name:var(--font-mono)] text-[13px] text-navy/50 mt-1">
                        {room.dim}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- SPECIFICATIONS */}
      <section id="specifications" className="relative px-6 lg:px-10 py-32 bg-navy text-pearl">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Specifications</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-pearl">Built with material honesty</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {SPECS.map((group, gi) => (
              <Reveal key={group.group} delay={gi * 100} className="bg-white/5 rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-colors duration-500">
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
{/* ---------------------------------------------------------- LOCATION */}
      <section id="location" className="relative px-6 lg:px-10 py-32 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-start">
          <Reveal>
            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-4">Location</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-navy mb-6">
              Set at the centre of Sarjapura Attibele Road
            </h2>
            <p className="text-[15px] leading-relaxed text-navy/60 mb-10 max-w-lg">
              Confident Atria sits between Sarjapura and Attibele Circles — close to
              Infosys and the tech corridor, ringed by established schools and a
              university, with Chandapura Road and the roads to Malur, Hosur and
              Whitefield all within reach.
            </p>

            {/* Address Block */}
            <Reveal delay={50} className="mb-12 p-6 rounded-2xl bg-[#F8F9FA] border border-navy/5 inline-block w-full max-w-lg hover:border-gold/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
                <div>
                  <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-navy/80 mb-2">Site Address</p>
                  <p className="text-[15px] leading-relaxed text-navy/70">
                    SVT Developer & Constructions<br />
                    {ADDRESS[0]}<br />
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
          <Reveal delay={200} className="relative h-full min-h-[500px] w-full rounded-3xl overflow-hidden border border-navy/10 shadow-xl lg:sticky lg:top-32 group">
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
              className="absolute bottom-6 right-6 inline-flex items-center gap-2.5 rounded-full bg-navy px-6 py-3.5 text-[13px] font-semibold tracking-wide text-pearl hover:bg-gold hover:text-navy hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 z-10"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- ENQUIRE */}
{/* ---------------------------------------------------------- ENQUIRE */}
      <section id="enquire" className="relative py-32 bg-navy text-pearl overflow-hidden">
        {/* Full width background effects */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_right,_rgba(212,175,55,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Context & Contact Info */}
            <div className="flex flex-col justify-center h-full">
              <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-6">Enquire</p>
              <h2 className="font-[family-name:var(--font-display)] italic text-4xl sm:text-5xl text-pearl leading-tight mb-10">
                A limited number of Type 01 villas remain at Confident Atria.
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
                   <strong className="text-pearl font-medium">SVT Developer & Constructions</strong> <br />
                   {ADDRESS.join(", ")}
                 </p>
              </div>
            </div>

            {/* Right Column: Premium Contact Form */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 sm:p-12 backdrop-blur-sm shadow-2xl relative">
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-gold/20 blur-3xl rounded-full pointer-events-none" />
              
              <h3 className="font-[family-name:var(--font-display)] text-2xl text-pearl mb-8">Register your interest</h3>
              
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Name Input */}
                <div className="relative">
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
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
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
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
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors"
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
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-white/20 py-4 text-[15px] text-pearl focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                  <label htmlFor="message" className="absolute left-0 top-4 text-[15px] text-pearl/40 transition-all peer-focus:-top-3 peer-focus:text-[11px] peer-focus:text-gold peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-3 peer-valid:text-[11px] peer-valid:text-gold peer-valid:tracking-widest peer-valid:uppercase">
                    Message (Optional)
                  </label>
                </div>

                <button 
                  type="submit"
                  className="mt-6 w-full rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wider uppercase text-navy hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- FOOTER */}
      <footer className="px-6 lg:px-10 py-16 border-t border-navy/10 bg-white">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <Logo scrolled={true} />
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-[14px] text-navy/60">
            <span className="flex items-center gap-3 hover:text-gold transition-colors">
              <MapPin className="h-4 w-4 text-gold" /> {ADDRESS[2]}
            </span>
            <span className="flex items-center gap-3 hover:text-gold transition-colors">
              <Phone className="h-4 w-4 text-gold" /> {PHONES.join(" / ")}
            </span>
          </div>
          <p className="text-[13px] text-navy/40 font-medium tracking-wide">© {new Date().getFullYear()} SVT Developer &amp; Constructions</p>
        </div>
      </footer>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  Small components                                                  */
/* ------------------------------------------------------------------ */

function Logo({ scrolled = true }: { scrolled?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-4 group">
      <span className="relative flex h-10 w-10 items-end gap-[4px]">
        <span className="h-5 w-[8px] transition-all duration-500 group-hover:h-6" style={{ backgroundColor: BRONZE }} />
        <span className="h-7 w-[8px] bg-gold transition-all duration-500 group-hover:h-8" />
        <span className={`h-10 w-[8px] transition-colors duration-500 ${scrolled ? "bg-navy" : "bg-pearl"}`} />
      </span>
      <span className="leading-none">
        <span className={`block font-[family-name:var(--font-display)] text-xl font-medium tracking-wider transition-colors duration-500 ${scrolled ? "text-navy" : "text-pearl"}`}>SVT</span>
        <span className={`block text-[10px] font-bold tracking-[0.25em] transition-colors duration-500 mt-1 ${scrolled ? "text-navy/50" : "text-pearl/60"}`}>GROUP</span>
      </span>
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