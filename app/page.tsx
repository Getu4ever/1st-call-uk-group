import Image from "next/image";
import GroupHeader from "./components/GroupHeader";
import Footer from "./components/GroupFooter";

export default function GroupHome() {
  return (
    <>
    {/* HEADER */}
      <GroupHeader />
      {/* PAGE CONTENT */}
      <main className="bg-[#f5f7fb]">
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-14 animate-fade-in">
          
          {/* INTRO */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#233a86] mb-6">
            1st Call UK Group
          </h2>

          <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            A group of professional services based in Nottingham, delivering trusted
            expertise in immigration, financial services, and future growth sectors. Each service within the 1st Call UK Group is delivered by a dedicated
              team of specialists focused on clarity, compliance, and results.
          </p>


          {/* SERVICES SECTION */}
          <section>
            

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {/* IMMIGRATION CARD */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image
                    src="/immigration-card.jpg"
                    alt="UK Immigration advisory services"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-[#233a86] mb-3">
                    Immigration Services
                  </h4>

                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                    Regulated UK immigration advisers providing expert guidance on visas,
                    extensions, appeals, citizenship, sponsorship licences, and family
                    and work routes.
                  </p>

                  <a
                    href="https://1stcalluk.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#233a86] text-white font-semibold py-3 rounded-lg hover:bg-[#1e2f6f] transition"
                  >
                    Visit Immigration Services →
                  </a>
                </div>
              </div>

              {/* FINANCIAL CARD */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image
                    src="/financial-card.jpg"
                    alt="Accounting and financial advisory services"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-[#233a86] mb-3">
                    Financial Services
                  </h4>

                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                    Chartered accountants and financial advisers offering tax returns,
                    bookkeeping, payroll, business accounts, and HMRC support for
                    individuals and companies.
                  </p>

                  <a
                    href="https://1stcalluk.financial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#233a86] text-white font-semibold py-3 rounded-lg hover:bg-[#1e2f6f] transition"
                  >
                    Visit Financial Services →
                  </a>
                </div>
              </div>

              {/* FUTURE SERVICES CARD */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden border border-dashed border-gray-300 flex flex-col">
                <div className="relative h-48">
                  <Image
                    src="/coming-soon-card.jpg"
                    alt="Future professional services"
                    fill
                    className="object-cover grayscale"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-500 mb-3">
                    More Services Coming Soon
                  </h4>

                  <p className="text-gray-500 leading-relaxed flex-grow">
                    The 1st Call UK Group continues to expand into new professional
                    service areas to support individuals and businesses as they grow.
                  </p>

                  <span className="mt-6 inline-flex items-center justify-center py-3 rounded-lg bg-gray-300 text-gray-500 font-semibold cursor-not-allowed">
                    Launching Soon
                  </span>
                </div>
              </div>

            </div>
          </section>
          {/* WHY CHOOSE US */}
<section className="mt-24">
  <h3 className="text-3xl md:text-4xl font-extrabold text-center text-[#233a86] mb-6">
    Why Choose 1st Call UK Group
  </h3>

  <p className="text-center text-gray-700 max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
    We bring together specialist professional services under one trusted group,
    offering clarity, accountability, and long-term support for individuals
    and businesses.
  </p>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    
    {/* Expertise */}
    <div className="bg-white rounded-xl shadow-md p-8 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#233a86]/10">
        <svg className="h-7 w-7 text-[#233a86]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5c-2.28 0-4.39-.64-6.16-1.922L12 14z" />
        </svg>
      </div>
      <h4 className="text-xl font-bold text-[#233a86] mb-3">
        Specialist Expertise
      </h4>
      <p className="text-gray-700 leading-relaxed">
        Each service is delivered by qualified professionals who focus solely
        on their area of expertise — immigration, finance, and beyond.
      </p>
    </div>

    {/* Client Focus */}
    <div className="bg-white rounded-xl shadow-md p-8 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#233a86]/10">
        <svg className="h-7 w-7 text-[#233a86]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8zm6 4a4 4 0 10-8 0" />
        </svg>
      </div>
      <h4 className="text-xl font-bold text-[#233a86] mb-3">
        Client-Focused Approach
      </h4>
      <p className="text-gray-700 leading-relaxed">
        We take time to understand your situation and provide clear,
        practical advice tailored to your needs.
      </p>
    </div>

    {/* Trust & Compliance */}
    <div className="bg-white rounded-xl shadow-md p-8 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#233a86]/10">
        <svg className="h-7 w-7 text-[#233a86]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657 1.343-3 3-3h1a3 3 0 110 6h-1c-1.657 0-3-1.343-3-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 11a3 3 0 013-3h1a3 3 0 110 6H9a3 3 0 01-3-3z" />
        </svg>
      </div>
      <h4 className="text-xl font-bold text-[#233a86] mb-3">
        Trust & Compliance
      </h4>
      <p className="text-gray-700 leading-relaxed">
        Our services operate within strict regulatory frameworks,
        giving you confidence and peace of mind at every step.
      </p>
    </div>

    {/* One Group */}
    <div className="bg-white rounded-xl shadow-md p-8 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#233a86]/10">
        <svg className="h-7 w-7 text-[#233a86]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <h4 className="text-xl font-bold text-[#233a86] mb-3">
        One Group, Multiple Solutions
      </h4>
      <p className="text-gray-700 leading-relaxed">
        Access multiple professional services through one trusted group
        as your needs grow and evolve.
      </p>
    </div>

  </div>
</section>
{/* GROUP MISSION & VALUES */}
<section className="mt-24">
  <h3 className="text-3xl md:text-4xl font-extrabold text-center text-[#233a86] mb-6">
    Our Mission & Values
  </h3>

  <p className="text-center text-gray-700 max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
    At 1st Call UK Group, our mission is to deliver trusted, ethical, and
    specialist professional services that genuinely support people and
    businesses at every stage of their journey.
  </p>

 <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

  {/* Integrity */}
  <div className="bg-white rounded-xl shadow-md p-8 text-center">
    <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold uppercase tracking-wide rounded-full bg-[#233a86]/10 text-[#233a86]">
      Our Principles
    </span>

    <h4 className="text-xl font-bold text-[#233a86] mb-3">
      Integrity & Transparency
    </h4>
    <p className="text-gray-700 leading-relaxed">
      We operate with honesty, clarity, and openness in everything we do —
      providing straightforward advice with no hidden agendas.
    </p>
  </div>

  {/* Excellence */}
  <div className="bg-white rounded-xl shadow-md p-8 text-center">
    <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold uppercase tracking-wide rounded-full bg-[#233a86]/10 text-[#233a86]">
      Our Standards
    </span>

    <h4 className="text-xl font-bold text-[#233a86] mb-3">
      Professional Excellence
    </h4>
    <p className="text-gray-700 leading-relaxed">
      Our teams maintain the highest professional standards through regulation,
      continuous development, and best practice.
    </p>
  </div>

  {/* Client Commitment */}
  <div className="bg-white rounded-xl shadow-md p-8 text-center">
    <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold uppercase tracking-wide rounded-full bg-[#233a86]/10 text-[#233a86]">
      Our Promise
    </span>

    <h4 className="text-xl font-bold text-[#233a86] mb-3">
      Commitment to Clients
    </h4>
    <p className="text-gray-700 leading-relaxed">
      We put our clients first — taking time to understand their needs and
      delivering practical, reliable solutions that create real value.
    </p>
  </div>

</div>

</section>

        </section>
      </main>
      
{/* FOOTER */}
      <Footer />
    </>
    
  );
}