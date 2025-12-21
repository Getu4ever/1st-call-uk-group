"use client";

import Link from "next/link";
import Image from "next/image";

export default function GroupHeader() {
  return (
    <>
      <header className="text-white shadow-lg relative z-50">
 {/* TOP BAR */}
<div className="bg-[#233a86]">
  <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-between items-center">
    <span className="text-xs text-white/80">1st Call UK Group</span>
    <span className="hidden md:block text-xs text-white/70 tracking-wide">
      Independent UK Professional Services Group
    </span>
  </div>
</div>


  {/* MAIN HEADER */}
  <div className="bg-[#2d459c]">
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center md:items-center gap-4">

     {/* LOGO */}
<Link href="/" className="block md:ml-6">
  <div className="w-[280px] h-[110px] relative bg-white rounded-xl shadow-md border border-white/40 overflow-hidden">
    <Image
      src="/1st-calluk-group-logo.jpg"
      alt="1st Call UK Group Logo"
      fill
      priority
      className="object-contain scale-[1.18]"
    />
  </div>
</Link>


      {/* CENTERED GROUP STATEMENT */}
      <div className="md:ml-auto text-center md:text-right">
        <h1 className="text-white text-lg md:text-xl font-semibold tracking-wide">
          Professional Services Group
        </h1>
        <p className="text-white/80 text-sm mt-1">
          Immigration • Financial • Advisory
        </p>
      </div>

    </div>
  </div>
</header>


      {/* ===== HERO SECTION ===== */}
<section className="relative -mt-px h-[45vh] sm:h-[50vh] md:h-[55vh] overflow-hidden">
        {/* HERO IMAGE */}
        <Image
          src="/group-hero.jpg"
          alt="1st Call UK Group professional services"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#2d459c]/80 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            One Group. Trusted Expertise.
          </h1>

          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
            Professional services delivered through specialist teams in
            immigration, financial services, and future growth sectors.
          </p>
        </div>
      </section>
    </>
  );
}
