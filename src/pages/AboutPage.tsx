import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, FileText } from 'lucide-react';
import {
  COMPANY_INFO,
  KEY_METRICS,
  GROUP_DIVISIONS,
  CERTIFICATIONS,
  CORPORATE_BROCHURES,
  PageRoute,
  CertificationItem,
} from '../data/companyData';
import { MaritimeImage } from '../components/MaritimeImage';
import { CertificateModal } from '../components/CertificateModal';

interface AboutPageProps {
  onNavigate: (page: PageRoute, capabilitySlug?: string | null) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <div className="bg-[#F8FAFC]">
      {/* Page Hero */}
      <section className="bg-[#0A111E] text-white border-b border-slate-800 py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#60A5FA] mb-4">
              <span>Corporate Profile</span>
              <span aria-hidden="true">·</span>
              <span>Perama Repair Zone, Piraeus</span>
              <span aria-hidden="true">·</span>
              <span>Est. 1996 NewBuilding Division · 50+ Years Heritage</span>
            </div>
            <h1
              className="font-display font-bold text-white tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
            >
              About Hellenic Group Company
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Positioned at the heart of Greece’s maritime repair and industrial zone in Perama, Piraeus, Hellenic Group Company—operating through <strong>Hellenic Shipbuilding Industry Ltd. (HSI)</strong>—combines over five decades of naval engineering know-how with modern shipyard automation and certified quality governance.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & History Split */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-mono text-[#1D4ED8] font-medium tracking-wide">
                01. Company Overview &amp; Maritime Heritage
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Decades of Shipbuilding, Conversion &amp; Heavy Repair Execution
              </h2>

              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Founded by naval architects, marine engineers, and master shipbuilders with more than <strong>50 years of combined industry experience</strong>, Hellenic Shipbuilding Industry Ltd. (HSI) has grown into one of Greece’s premier centers for ship repair, structural conversions, and new vessel construction.
                </p>
                <p>
                  In <strong>1996</strong>, building upon decades of complex hull conversion and repair work in Piraeus, the organization expanded into the <strong>commercial NewBuilding sector</strong>, specializing in custom-designed vessels up to 5,000 DWT—including Roll-On/Roll-Off (Ro-Ro) cargo and passenger ferries, coastal tankers, tugboats, luxury yachts, and offshore platforms.
                </p>
                <p>
                  Today, operating from 6,000 m² of sheltered and open workshops in the Free Zone OLP of Perama, and utilizing five dry docks up to Panamax size in cooperation with the Piraeus Port Authority (OLP S.A.), Hellenic Group Company serves Greek and international fleet owners with single-point accountability from 2D/3D engineering to final sea trials.
                </p>
              </div>

              {/* International Presence Highlight */}
              <div className="p-5 bg-[#F8FAFC] border border-slate-200 rounded space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#1D4ED8]">
                  <span>European Maritime Presence</span>
                  <span aria-hidden="true">·</span>
                  <span>Berlin &amp; Hamburg</span>
                </div>
                <h3 className="font-display text-sm font-bold text-slate-900">
                  “From Wake to Wave: Shipping Path to 2050” — Hellenic Maritime Club Hamburg
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hellenic Shipbuilding Industry actively participates in European maritime decarbonization forums, including presenting our turnkey EGCS scrubber and BWTS environmental retrofit programs at the Ritz-Carlton Berlin conference organized by the Hellenic Maritime Club Hamburg.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <MaritimeImage
                src="/assets/hsi/shipyard-aerial-2.jpg"
                alt="Aerial view of Perama Repair Zone shipyard and dry docking operations"
                className="w-full h-72 lg:h-80 object-cover"
                containerClassName="relative overflow-hidden rounded border border-slate-200 bg-[#0A111E]"
                caption="Perama Repair Zone & OLP S.A. Dry Docking Hub · Piraeus, Greece"
              />

              <div className="grid grid-cols-2 gap-4">
                {KEY_METRICS.map((m) => (
                  <div
                    key={m.label}
                    className="p-4 bg-[#F8FAFC] border border-slate-200 rounded"
                  >
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-mono text-2xl font-bold text-slate-900 tabular-nums">
                        {m.value}
                      </span>
                      <span className="font-mono text-xs text-[#1D4ED8] font-semibold">
                        {m.unit}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-semibold text-slate-800">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Structure & Strategic Alliances */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono text-[#1D4ED8] font-medium tracking-wide">
              02. Group Structure &amp; Operational Ecosystem
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Integrated Shipyard, Dry-Docking &amp; Naval Engineering Divisions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Hellenic Group Company coordinates specialized operational units and institutional port alliances to execute projects of any scale without bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {GROUP_DIVISIONS.map((div, index) => (
              <div
                key={div.name}
                className="bg-white border border-slate-200 rounded p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <span className="text-[#1D4ED8] font-semibold">0{index + 1}.</span>
                    <span>{div.location}</span>
                  </div>
                  <h3 className="mt-2.5 font-display text-lg font-bold text-slate-900">
                    {div.name}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-slate-500">
                    {div.role}
                  </p>
                  <p className="mt-3.5 text-sm text-slate-600 leading-relaxed">
                    {div.description}
                  </p>
                </div>

                <ul className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  {div.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-mono text-[#1D4ED8]">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Philosophy, Mission & Sustainability */}
      <section className="py-16 lg:py-24 bg-[#0A111E] text-white border-b border-slate-800">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-mono text-[#60A5FA] tracking-wide">
              03. Engineering Philosophy &amp; Core Pillars
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Safety, Accuracy, and Technical Know-How
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111C2D] border border-slate-800 rounded p-6 sm:p-7 space-y-3">
              <p className="text-xs font-mono text-[#60A5FA]">Pillar 01</p>
              <h3 className="font-display text-lg font-bold text-white">
                Mission &amp; Production Automation
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We integrate advanced robotic plate-cutting systems, automated welding technologies, and 3D laser shipboard scanning with decades of traditional naval craftsmanship. This reduces vessel downtime, eliminates rework, and delivers consistent class-approved weld quality.
              </p>
            </div>

            <div className="bg-[#111C2D] border border-slate-800 rounded p-6 sm:p-7 space-y-3">
              <p className="text-xs font-mono text-[#60A5FA]">Pillar 02</p>
              <h3 className="font-display text-lg font-bold text-white">
                Occupational Health &amp; Safety (ISO 45001)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Safeguarding our people, vessel crews, and subcontractors is non-negotiable. All staging, hot work, confined-space tank renewals, and heavy crane lifts are governed by our UKAS-accredited ISO 45001:2018 Occupational Health &amp; Safety Management System.
              </p>
            </div>

            <div className="bg-[#111C2D] border border-slate-800 rounded p-6 sm:p-7 space-y-3">
              <p className="text-xs font-mono text-[#60A5FA]">Pillar 03</p>
              <h3 className="font-display text-lg font-bold text-white">
                Maritime Sustainability (ISO 14001)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We actively advance the shipping industry’s green transition through in-house fabrication and installation of SOx Exhaust Gas Cleaning Systems (EGCS scrubbers), Type-Approved Ballast Water Treatment Systems (BWTS), and onboard IMO D-2 LuminUltra biological commissioning testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Certifications & Official Downloads */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="mb-10">
            <p className="text-xs font-mono text-[#1D4ED8] font-medium tracking-wide">
              04. Accredited Management Systems
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              ISO 9001:2015 · ISO 14001:2015 · ISO 45001:2018
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Certified by <strong>LRQA Hellas S.A.</strong> under UKAS Accreditation (0001). Select any certificate below to view the official registration document.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.standard}
                className="bg-[#F8FAFC] border border-slate-200 rounded p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>Certificate No. {cert.certificateNumber}</span>
                    <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-slate-900">
                    {cert.standard}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {cert.title}
                  </p>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    {cert.scope}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    LRQA Hellas S.A.
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs font-semibold text-[#1D4ED8] hover:text-[#1E40AF] inline-flex items-center gap-1 cursor-pointer"
                  >
                    Inspect Document
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Official Corporate Presentations */}
          <div className="mt-12 p-6 sm:p-8 bg-[#F8FAFC] border border-slate-200 rounded flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Download Official Corporate &amp; Technical Presentations
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Access our official PDF brochures covering shipbuilding, repairs, conversions, and turnkey EGCS scrubber installations.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {CORPORATE_BROCHURES.map((b) => (
                <a
                  key={b.fileUrl}
                  href={b.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded inline-flex items-center gap-2 transition-colors whitespace-nowrap"
                >
                  <FileText className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  {b.date} Brochure ({b.format})
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
};
