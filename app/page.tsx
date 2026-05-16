"use client";

import { useState } from "react";
import Image from "next/image";
import GroupHeader from "./components/GroupHeader";
import GroupFooter from "./components/GroupFooter";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-bold text-[#233a86] text-lg hover:text-[#1e2f6f] transition-colors"
      >
        <span>{question}</span>
        <span className="text-2xl ml-4 font-mono">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-700 leading-relaxed text-base animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function GroupHome() {
  return (
    <>
      {/* HEADER */}
      <GroupHeader />
      
      {/* PAGE CONTENT */}
      <main className="bg-[#f5f7fb]">
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-14 animate-fade-in">
          
          {/* INTRO */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#233a86] mb-6">
            1st Call UK Group
          </h1>

          <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            A corporate group of premier professional services based in Nottingham, delivering trusted
            expertise in immigration, accounting, financial solutions, and future growth sectors. Each service within the 1st Call UK Group is delivered by a dedicated
            team of specialists focused on clarity, compliance, and results.
          </p>

          {/* SERVICES SECTION */}
          <section aria-label="Our Core Services">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {/* IMMIGRATION CARD */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image
                    src="/immigration-card.jpg"
                    alt="UK Immigration advisory services in Nottingham"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#233a86] mb-3">
                    Immigration Services
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                    Regulated UK immigration advisers providing expert guidance on visas,
                    extensions, appeals, citizenship, sponsorship licences, and family
                    and work routes.
                  </p>

                  <a
                    href="https://www.1stcalluk.com/"
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
                    alt="Accounting and financial advisory services Nottingham"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#233a86] mb-3">
                    Financial Services
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                    Chartered accountants and financial advisers offering tax returns,
                    bookkeeping, payroll, business accounts, and HMRC support for
                    individuals and companies.
                  </p>

                  <a
                    href="https://www.1stcalluk.financial/"
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
                    alt="Future web design and digital marketing services"
                    fill
                    className="object-cover grayscale"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-500 mb-3">
                    Web & Digital Solutions
                  </h3>

                  <p className="text-gray-500 leading-relaxed flex-grow">
                    The 1st Call UK Group is expanding into technical engineering, high-performance web development, and digital marketing strategies to help businesses grow online.
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#233a86] mb-6">
              Why Choose 1st Call UK Group
            </h2>

            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
              We bring together specialist professional services under one trusted group,
              offering clarity, accountability, and long-term support for individuals
              and businesses.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              
              {/* Expertise */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#233a86]/10">
                  <svg className="h-7 w-7 text-[#233a86]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5c-2.28 0-4.39-.64-6.16-1.922L12 14z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#233a86] mb-3">
                  Specialist Expertise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Each service is delivered by qualified professionals who focus solely
                  on their area of expertise — immigration, finance, and technical growth.
                </p>
              </div>

              {/* Client Focus */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#233a86]/10">
                  <svg className="h-7 w-7 text-[#233a86]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8zm6 4a4 4 0 10-8 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#233a86] mb-3">
                  Client-Focused Approach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We take time to understand your situation and provide clear,
                  practical advice tailored to your corporate needs.
                </p>
              </div>

              {/* Trust & Compliance */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#233a86]/10">
                  <svg className="h-7 w-7 text-[#233a86]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657 1.343-3 3-3h1a3 3 0 110 6h-1c-1.657 0-3-1.343-3-3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 11a3 3 0 013-3h1a3 3 0 110 6H9a3 3 0 01-3-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#233a86] mb-3">
                  Trust & Compliance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our service units operate within strict UK regulatory frameworks,
                  giving you full business confidence and peace of mind.
                </p>
              </div>

              {/* One Group */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#233a86]/10">
                  <svg className="h-7 w-7 text-[#233a86]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#233a86] mb-3">
                  One Umbrella Group
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Access multiple professional enterprise services through one trusted corporate partner as your company scales.
                </p>
              </div>

            </div>
          </section>

          {/* GROUP MISSION & VALUES */}
          <section className="mt-24">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#233a86] mb-6">
              Our Mission & Values
            </h2>

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
                <h3 className="text-xl font-bold text-[#233a86] mb-3">
                  Integrity & Transparency
                </h3>
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
                <h3 className="text-xl font-bold text-[#233a86] mb-3">
                  Professional Excellence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our teams maintain the highest professional standards through regulation,
                  continuous development, and industry best practices.
                </p>
              </div>

              {/* Client Commitment */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold uppercase tracking-wide rounded-full bg-[#233a86]/10 text-[#233a86]">
                  Our Promise
                </span>
                <h3 className="text-xl font-bold text-[#233a86] mb-3">
                  Commitment to Clients
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We put our clients first — taking time to understand their needs and
                  delivering practical, reliable solutions that create real business value.
                </p>
              </div>

            </div>
          </section>

          {/* ACCORDION FAQ SECTION */}
          <section className="bg-white rounded-2xl shadow-sm mt-24 py-16 px-6 md:px-12 border border-gray-100">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#233a86] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-center text-gray-600 max-w-xl mx-auto mb-10 text-base">
                Find clear answers regarding the operational structures and professional service pillars of the 1st Call UK Group.
              </p>
              
              <div className="space-y-2">
                <FAQItem 
                  question="What is the 1st Call UK Group?" 
                  answer="The 1st Call UK Group is a unified corporate umbrella network based in Nottingham. We deliver highly specialized, regulated professional business solutions across critical commercial sectors including UK immigration routing, financial accountancy, asset wealth management, and custom enterprise technical infrastructure." 
                />
                <FAQItem 
                  question="Are the services within the group legally regulated?" 
                  answer="Yes, absolute legal compliance is the core foundation of our network. Each operational branch functions within its respective legal and professional regulatory framework. Our immigration consultants are fully regulated corporate specialists, and our financial service sectors are managed by qualified chartered accountants." 
                />
                <FAQItem 
                  question="How can I access multiple corporate services?" 
                  answer="Our group architecture allows clients to cross-navigate ecosystem requirements seamlessly. You can engage with individual specialists directly through their dedicated brand service portals linked above, ensuring comprehensive corporate support tailored entirely to your personal or business journey." 
                />
              </div>
            </div>
          </section>

        </section>
      </main>
      
      {/* FOOTER */}
      <GroupFooter />
    </>
  );
}