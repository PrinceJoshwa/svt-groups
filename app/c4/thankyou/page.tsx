// "use client"

// import React from "react"
// import Link from "next/link"
// import Script from "next/script" // Import the Next.js Script component
// import { Button } from "@/components/ui/button" // Assuming this path is correct
// import { ArrowLeft } from "lucide-react" // Using an icon for the button

// export default function ThankYouPage() {
//   return (
//     <>
//       {/* Event snippet for Request quote conversion page 
//         This uses next/script to safely inject the script after
//         the page is interactive.
//       */}
//       {/* <Script id="gtm-conversion-event" strategy="afterInteractive">
//         {`
//           console.log("Firing GTM conversion event...");
//           if (typeof gtag === 'function') {
//             gtag('event', 'conversion', {'send_to': 'AW-11451380206/2ZfiCPrMmbUbEO7juNQq'});
//           } else {
//             console.warn("gtag not defined, conversion event skipped.");
//           }
//         `}
//       </Script> */}

//       <section className="flex items-center justify-center min-h-screen bg-light-gold">
//         <div className="container mx-auto px-4">
//           <div className="max-w-md mx-auto text-center bg-white rounded-2xl shadow-2xl p-8">
//             <h1 className="text-3xl font-bold text-black mb-4 font-playfair">
//               Thank You!
//             </h1>
//             <p className="text-lg text-gray-700 mb-8">
//               Thank you, we’ll contact you soon.
//             </p>
//             <Link href="/" passHref>
//               <Button className="bg-gold-500 hover:bg-gold-600 text-black">
//                 <ArrowLeft className="h-4 w-4 mr-2" />
//                 Back to Home
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

"use client"

import React from "react"
import Link from "next/link"
import Script from "next/script" // Import the Next.js Script component
import { Button } from "@/components/ui/button" // Assuming this path is correct
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export default function ThankYouPage() {
  return (
    <>
      {/* Event snippet for Request quote conversion page 
        This uses next/script to safely inject the script after
        the page is interactive.
      */}
      {/* <Script id="gtm-conversion-event" strategy="afterInteractive">
        {`
          console.log("Firing GTM conversion event...");
          if (typeof gtag === 'function') {
            gtag('event', 'conversion', {'send_to': 'AW-11451380206/2ZfiCPrMmbUbEO7juNQq'});
          } else {
            console.warn("gtag not defined, conversion event skipped.");
          }
        `}
      </Script> */}

      <section className="relative flex items-center justify-center min-h-screen bg-navy px-4 py-16 overflow-hidden">
        {/* Ambient background glow, consistent with hero styling on the main site */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 right-[-8%] h-[560px] w-[560px] rounded-full bg-gold/[0.08] blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-8%] h-[420px] w-[420px] rounded-full blur-[90px] bg-gold/[0.05]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center bg-white rounded-[2rem] shadow-2xl border border-navy/10 p-8 sm:p-10">
            <div className="h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-6 w-6 text-gold" strokeWidth={1.5} />
            </div>

            <p className="text-[12px] tracking-[0.2em] uppercase text-gold mb-3">
              Enquiry Received
            </p>

            <h1 className="font-[family-name:var(--font-display)] italic text-3xl sm:text-4xl leading-tight text-navy mb-4">
              Thank <span className="not-italic font-medium text-gold">You!</span>
            </h1>

            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/60 font-light mb-8">
              We've received your details — our team will get in touch with you shortly.
            </p>

            <Link href="/" passHref>
              <Button className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-[13px] font-semibold tracking-wide text-navy hover:bg-navy hover:text-pearl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}