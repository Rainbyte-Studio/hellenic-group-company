import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, FileText, ShieldCheck } from 'lucide-react';
import {
  COMPANY_INFO,
  KEY_METRICS,
  CAPABILITIES,
  DRY_DOCK_FACILITIES,
  PROJECTS,
  CERTIFICATIONS,
  CORPORATE_BROCHURES,
  PageRoute,
  CertificationItem,
  ProjectItem,
} from '../data/companyData';
import { MaritimeImage } from '../components/MaritimeImage';
import { CertificateModal } from '../components/CertificateModal';
import { ProjectModal } from '../components/ProjectModal';

interface HomePageProps {
  onNavigate: (page: PageRoute, capabilitySlug?: string | null) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#070D17] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0">
          <MaritimeImage
            src="/assets/hsi/hero-shipyard-aerial.jpg"
            alt="Aerial view of Hellenic Group Company and HSI shipyard and floating dry docks in Perama, Piraeus"
            className="w-full h-full object-cover object-center"
            containerClassName="w-full h-full"
            eager={true}
            overlayGradient="hero"
          />
        </div>

        <div className="relative max-w-[1360px] mx-auto px-5 sm:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#93C5FD] tracking-wide mb-5">
              <span>Free Zone OLP, Perama · Piraeus, Greece</span>
              <span aria-hidden="true">·</span>
              <span>Hellenic Shipbuilding Industry Ltd. (HSI)</span>
              <span aria-hidden="true">·</span>
              <span>ISO 9001 / 14001 / 45001</span>
            </div>

            <h1
              className="font-display font-bold text-white tracking-tight leading-[1.08]"
              style={{ fontSize: 'clamp(2.25rem, 4.2vw, 3.75rem)' }}
            >
              Hellenic Group Company
            </h1>

            <p className="mt-4 font-display text-lg sm:text-xl text-slate-200 font-medium leading-snug max-w-2xl">
              {COMPANY_INFO.positioningStatement}
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Combining 6,000 m² of automated steel and piping workshops in Perama with access to five Panamax-capable dry docks in cooperation with Piraeus Port Authority (OLP S.A.), we execute demanding repairs, structural conversions, newbuildings, and in-house manufactured EGCS scrubber and BWTS retrofits.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('capabilities')}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Explore Our Capabilities</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/25 rounded transition-colors inline-flex items-center justify-center cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Verified KPI Strip */}
        <div className="relative bg-[#0A111E]/95 border-t border-slate-800/90">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-slate-800">
            {KEY_METRICS.map((metric, idx) => (
              <div key={metric.label} className={idx > 0 ? 'lg:pl-8' : ''}>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-3xl sm:text-4xl font-semibold text-white tabular-nums">
                    {metric.value}
                  </span>
                  <span className="font-mono text-xs text-[#60A5FA] font-medium">
                    {metric.unit}
                  </span>
                </div>
                <p className="mt-1.5 font-display text-sm font-semibold text-slate-200">
                  {metric.label}
                </p>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <section className="py-20 lg:py-28 border-b border-slate-200 bg-white">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <p className="text-xs font-mono text-[#1D4ED8] font-medium tracking-wide">
                  01. Corporate Profile &amp; Maritime Heritage
                </p>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                  Greece’s Trusted Hub for Shipbuilding, Heavy Repairs &amp; Vessel Conversions
                </h2>
                <p className="mt-5 text-base text-slate-700 leading-relaxed">
                  <strong>Hellenic Group Company</strong>—operating through its flagship shipyard division, <strong>Hellenic Shipbuilding Industry Ltd. (HSI)</strong> in the Perama Repair Zone of Piraeus—was founded by naval engineering professionals with more than 50 years of combined shipbuilding and conversion expertise.
                </p>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  Since expanding into the construction of medium-sized commercial vessels in 1996, our organization has built a respected reputation across the international shipping community. We combine automated robotic plate-cutting and welding systems with experienced naval architects and certified steel and piping technicians to execute complex projects on schedule.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display text-sm font-bold text-slate-900">
                    In-House Manufacturing Control
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Scrubber tower bodies, structural blocks, and GRE / SMO / Inox piping spools are fabricated directly in our 6,000 m² Perama facility for rigorous metallurgical and weld quality control.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-slate-900">
                    Flexible Operational Execution
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    Works are carried out in dry dock (5 OLP S.A. docks up to Panamax size), alongside repair berths in Perama and Drapetsona, or via mobile teams during voyage.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors cursor-pointer"
                >
                  Read Full Corporate Profile &amp; Group Structure
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              <MaritimeImage
                src="/assets/hsi/agios-nikolaos-1.jpg"
                alt="Commercial vessel inside Perama floating dry dock undergoing hull treatment and repair"
                className="w-full h-full min-h-[280px] object-cover"
                containerClassName="relative overflow-hidden rounded border border-slate-200 bg-[#0A111E] sm:col-span-2"
                caption="Floating Dry Dock Operations · Perama Repair Zone, Piraeus"
              />
              <MaritimeImage
                src="/assets/hsi/side-shell-repair-completed.jpg"
                alt="Completed structural side-shell hull steel renewal at Perama shipyard"
                className="w-full h-56 object-cover"
                containerClassName="relative overflow-hidden rounded border border-slate-200 bg-[#0A111E]"
                caption="Certified Structural Steel Renewals"
              />
              <MaritimeImage
                src="/assets/hsi/scrubber-process-tank.jpg"
                alt="In-house fabricated EGCS scrubber process tank and marine piping"
                className="w-full h-56 object-cover"
                containerClassName="relative overflow-hidden rounded border border-slate-200 bg-[#0A111E]"
                caption="EGCS Scrubber & GRE/SMO Piping"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES */}
      <section className="py-20 lg:py-28 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-mono text-[#1D4ED8] font-medium tracking-wide">
                02. Core Industrial &amp; Maritime Capabilities
              </p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Engineered Solutions Across the Vessel Lifecycle
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                From emergency collision steelworks and multi-month vessel conversions to newbuildings up to 5,000 DWT and IMO-compliant environmental retrofits.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('capabilities')}
              className="self-start md:self-auto px-5 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              View All Capability Specifications
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Asymmetric Bento Capability Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {CAPABILITIES.map((cap, idx) => {
              const isWide = idx === 0 || idx === 3;
              return (
                <article
                  key={cap.id}
                  onClick={() => onNavigate('capabilities', cap.slug)}
                  className={`${
                    isWide ? 'lg:col-span-7' : 'lg:col-span-5'
                  } group bg-white border border-slate-200 hover:border-slate-400 rounded overflow-hidden flex flex-col justify-between transition-colors cursor-pointer`}
                >
                  <div>
                    <div className="h-60 sm:h-64 overflow-hidden relative">
                      <MaritimeImage
                        src={cap.heroImage}
                        alt={cap.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                        containerClassName="w-full h-full bg-[#0A111E]"
                      />
                    </div>
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                        <span className="text-[#1D4ED8] font-semibold">{cap.index}.</span>
                        <span>{cap.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{cap.technicalSpecs[0]?.value}</span>
                      </div>

                      <h3 className="mt-2.5 font-display text-xl font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors">
                        {cap.title}
                      </h3>

                      <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                        {cap.summary}
                      </p>

                      <ul className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                        {cap.services.slice(0, 3).map((srv, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <span className="text-slate-400 font-mono">•</span>
                            <span>{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-6 sm:px-7 py-4 bg-slate-50/70 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-900 group-hover:text-[#1D4ED8] transition-colors">
                      Inspect Technical Scope &amp; Specs
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FACILITIES & DRY-DOCKING INFRASTRUCTURE */}
      <section className="py-20 lg:py-28 bg-[#0A111E] text-white border-b border-slate-800">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-mono text-[#60A5FA] tracking-wide">
                03. Shipyard Facilities &amp; Dry-Docking Infrastructure
              </p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                6,000 m² Perama Workshops &amp; Five Dry Docks Up to Panamax Scale
              </h2>
              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                Our privately operated 6,000 m² sheltered and open workshops in the Perama Repair Zone are equipped with robotic plate-cutting and automated welding systems. In cooperation with <strong>Piraeus Port Authority (OLP S.A.)</strong>, we provide direct access to three floating dry docks in Perama and two permanent dry docks in Akti Vasileiadi, Drapetsona.
              </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <button
                type="button"
                onClick={() => onNavigate('facilities')}
                className="px-5 py-3 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Explore Complete Facilities &amp; Dock Specs
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Verified Dry Dock Technical Specifications Table */}
          <div className="bg-[#111C2D] border border-slate-800 rounded overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="font-display text-sm font-semibold text-white">
                Dry Docking Specifications — In Cooperation with Piraeus Port Authority (OLP S.A.)
              </h3>
              <span className="text-xs font-mono text-slate-400">
                Perama Repair Zone &amp; Akti Vasileiadi, Drapetsona
              </span>
            </div>

            <div className="overflow-x-auto">
              <div className="sm:hidden px-4 py-2 bg-[#0A111E] border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Swipe horizontally to inspect all dock metrics</span>
                <span className="text-[#60A5FA]">→</span>
              </div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-[11px] font-mono text-slate-400 bg-[#0D1626]">
                    <th className="py-3.5 px-6 font-medium">Facility Designation</th>
                    <th className="py-3.5 px-6 font-medium">Dock Type</th>
                    <th className="py-3.5 px-6 font-medium">Location Zone</th>
                    <th className="py-3.5 px-6 font-medium text-right">Length (L)</th>
                    <th className="py-3.5 px-6 font-medium text-right">Internal Width (B)</th>
                    <th className="py-3.5 px-6 font-medium text-right">Lifting Capacity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-sm">
                  {DRY_DOCK_FACILITIES.map((dock) => (
                    <tr
                      key={dock.id}
                      className="hover:bg-slate-800/40 transition-colors"
                    >
                      <td className="py-4 px-6 font-display font-semibold text-white whitespace-nowrap">
                        {dock.name}
                      </td>
                      <td className="py-4 px-6 text-slate-300 whitespace-nowrap">
                        {dock.type}
                      </td>
                      <td className="py-4 px-6 text-slate-400 whitespace-nowrap">
                        {dock.zone}
                      </td>
                      <td className="py-4 px-6 font-mono text-white text-right tabular-nums whitespace-nowrap">
                        {dock.lengthMeters.toFixed(1).replace('.0', '')} m
                      </td>
                      <td className="py-4 px-6 font-mono text-white text-right tabular-nums whitespace-nowrap">
                        {dock.internalWidthMeters} m
                      </td>
                      <td className="py-4 px-6 font-mono text-[#60A5FA] text-right tabular-nums whitespace-nowrap">
                        {dock.liftingCapacityTons
                          ? `${dock.liftingCapacityTons.toLocaleString()} t`
                          : 'Permanent Graving Dock'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS / EXPERIENCE SHOWCASE */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-mono text-[#1D4ED8] font-medium tracking-wide">
                04. Executed Projects &amp; Technical Experience
              </p>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Proven Execution Across Commercial Fleets
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Representative shipbuilding, dry-docking, collision steel renewal, vessel conversion, and EGCS / BWTS retrofit works executed by our Perama teams.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="self-start md:self-auto px-5 py-2.5 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Browse Full Project Portfolio ({PROJECTS.length})
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 6).map((project) => (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-[#F8FAFC] border border-slate-200 hover:border-slate-400 rounded overflow-hidden flex flex-col justify-between transition-colors cursor-pointer"
              >
                <div>
                  <div className="h-56 overflow-hidden">
                    <MaritimeImage
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                      containerClassName="w-full h-full bg-[#0A111E]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <span className="text-[#1D4ED8] font-medium">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{project.location}</span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 font-mono">
                      Vessel Class: {project.vesselType}
                    </p>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-3.5 bg-white border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800 group-hover:text-[#1D4ED8] transition-colors">
                    Open Technical Dossier
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#1D4ED8] transition-colors" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY HELLENIC GROUP — CERTIFIED QUALITY, SAFETY & TECHNICAL PUBLICATIONS */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Why Hellenic Group & ISO Certificates */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-mono text-[#1D4ED8] font-medium tracking-wide">
                05. Quality Assurance, Safety &amp; Accredited Governance
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Certified to the Highest International Maritime Standards
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Hellenic Group Company places occupational safety, metallurgical accuracy, and environmental compliance at the core of every dry-docking, conversion, and newbuilding project. Our Integrated Management System is audited and certified by <strong>LRQA Hellas S.A.</strong> under <strong>UKAS Accreditation (0001)</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {CERTIFICATIONS.map((cert) => (
                  <button
                    key={cert.standard}
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="text-left p-5 bg-white border border-slate-200 hover:border-[#1D4ED8] rounded transition-colors flex flex-col justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs text-slate-500">
                          Cert. #{cert.certificateNumber}
                        </span>
                        <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
                      </div>
                      <h3 className="mt-2 font-display text-base font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors">
                        {cert.standard}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-slate-700">
                        {cert.title}
                      </p>
                      <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                        LRQA Hellas S.A. · UKAS Accredited
                      </p>
                    </div>
                    <span className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-[#1D4ED8] inline-flex items-center gap-1">
                      Inspect Certificate
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Official Technical Presentations & Brochures */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <p className="text-xs font-mono text-slate-500">
                      Technical Documentation Library
                    </p>
                    <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                      Official Corporate &amp; Engineering Brochures
                    </h3>
                  </div>
                  <img
                    src="/assets/hsi/lrqa-logo.svg"
                    alt="LRQA UKAS Accredited Certification Mark"
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="divide-y divide-slate-200 mt-2">
                  {CORPORATE_BROCHURES.map((brochure) => (
                    <a
                      key={brochure.fileUrl}
                      href={brochure.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-4 flex items-start justify-between gap-4 group"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                          <span>{brochure.date}</span>
                          <span aria-hidden="true">·</span>
                          <span>{brochure.format}</span>
                        </div>
                        <h4 className="font-display text-sm font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors">
                          {brochure.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {brochure.subtitle}
                        </p>
                      </div>
                      <FileText className="w-4 h-4 text-slate-400 group-hover:text-[#1D4ED8] shrink-0 mt-1 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>IMO BWM.2/Circ.70/Rev.1 · LuminUltra D-2 Testing</span>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="font-semibold text-[#1D4ED8] hover:text-[#1E40AF] cursor-pointer whitespace-nowrap"
                >
                  Request Custom Tender →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals for Certificate Inspection & Project Dossier */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigate={onNavigate}
      />
    </div>
  );
};
