import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';
import {
  CAPABILITIES,
  PROJECTS,
  PageRoute,
  ProjectItem,
} from '../data/companyData';
import { MaritimeImage } from '../components/MaritimeImage';
import { ProjectModal } from '../components/ProjectModal';

interface CapabilitiesPageProps {
  activeCapabilitySlug: string | null;
  onSelectCapability: (slug: string | null) => void;
  onNavigate: (page: PageRoute, capabilitySlug?: string | null) => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({
  activeCapabilitySlug,
  onSelectCapability,
  onNavigate,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const selectedCapability = activeCapabilitySlug
    ? CAPABILITIES.find((c) => c.slug === activeCapabilitySlug) || null
    : null;

  const relatedProjects = selectedCapability
    ? PROJECTS.filter((p) => p.relatedCapabilityId === selectedCapability.id)
    : [];

  return (
    <div className="bg-[#F8FAFC]">
      {/* Page Hero */}
      <section className="bg-[#0A111E] text-white border-b border-slate-800 py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            {selectedCapability && (
              <button
                type="button"
                onClick={() => onSelectCapability(null)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#60A5FA] hover:text-white transition-colors mb-4 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                Back to Capabilities Overview
              </button>
            )}

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#60A5FA] mb-4">
              <span>Maritime &amp; Industrial Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Perama Shipyard &amp; OLP S.A. Dry Docks</span>
              <span aria-hidden="true">·</span>
              <span>ISO 9001 / 14001 / 45001</span>
            </div>

            <h1
              className="font-display font-bold text-white tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
            >
              {selectedCapability
                ? `${selectedCapability.index}. ${selectedCapability.title}`
                : 'Shipbuilding, Repair, Conversion & Retrofit Capabilities'}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {selectedCapability
                ? selectedCapability.summary
                : 'Complete engineering, fabrication, and dry-docking execution across commercial vessels, tankers, Ro-Ro ships, passenger ferries, yachts, and offshore units.'}
            </p>
          </div>

          {/* Interactive Capability Selector Bar */}
          <div
            role="tablist"
            aria-label="Filter or select specific capability"
            className="mt-10 pt-6 border-t border-slate-800 flex items-center gap-2 overflow-x-auto pb-2 scroll-smooth"
          >
            <button
              type="button"
              role="tab"
              aria-selected={!selectedCapability}
              onClick={() => onSelectCapability(null)}
              className={`px-3.5 py-2 text-xs font-semibold rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                !selectedCapability
                  ? 'bg-[#1D4ED8] text-white shadow-sm'
                  : 'bg-[#111C2D] text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              All Capabilities (Overview)
            </button>
            {CAPABILITIES.map((cap) => {
              const isSelected = selectedCapability?.slug === cap.slug;
              return (
                <button
                  key={cap.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onSelectCapability(cap.slug)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1D4ED8] text-white shadow-sm'
                      : 'bg-[#111C2D] text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  {cap.index}. {cap.shortTitle}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIEW A: DETAILED SINGLE CAPABILITY PAGE */}
      {selectedCapability ? (
        <div className="py-16 lg:py-24 space-y-16 lg:space-y-20">
          {/* Capability Deep-Dive Split */}
          <section className="max-w-[1360px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Technical Overview & Services Grid */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#1D4ED8]">
                    <span>Capability {selectedCapability.index}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedCapability.category}</span>
                  </div>

                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-slate-900">
                    Technical Overview &amp; Execution Methodology
                  </h2>
                </div>

                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  {selectedCapability.overview.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-4">
                    Scope of Services &amp; Works
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {selectedCapability.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-white border border-slate-200 rounded flex items-start gap-3 shadow-xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual, Technical Specs & Action Card */}
              <div className="lg:col-span-5 space-y-6">
                {/* Primary Capability Photograph */}
                <div className="rounded border border-slate-200 overflow-hidden shadow-xs">
                  <MaritimeImage
                    src={selectedCapability.heroImage}
                    alt={selectedCapability.imageAlt}
                    className="w-full h-64 sm:h-72 object-cover"
                    containerClassName="w-full bg-[#0A111E]"
                    caption={`${selectedCapability.shortTitle} · Perama Facility Execution`}
                  />
                </div>

                {/* Technical Specifications Box */}
                <div className="bg-white border border-slate-200 rounded p-6 sm:p-7 space-y-5 shadow-xs">
                  <h3 className="font-display text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                    Technical Specifications
                  </h3>

                  <dl className="space-y-3 divide-y divide-slate-100 text-xs">
                    {selectedCapability.technicalSpecs.map((spec) => (
                      <div
                        key={spec.label}
                        className="pt-3 first:pt-0 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4"
                      >
                        <dt className="text-slate-500 font-medium shrink-0">
                          {spec.label}
                        </dt>
                        <dd className="font-mono font-semibold text-slate-900 text-left sm:text-right">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="text-xs font-semibold text-slate-900 mb-2">
                      Assigned Facilities &amp; Infrastructure
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {selectedCapability.facilitiesUsed.map((fac, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-mono text-[#1D4ED8] shrink-0">•</span>
                          <span>{fac}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 flex flex-col gap-2.5">
                    <button
                      type="button"
                      onClick={() => onNavigate('contact')}
                      className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded inline-flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
                    >
                      <span>Request Quotation for {selectedCapability.shortTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </button>

                    {selectedCapability.brochureUrl && (
                      <a
                        href={selectedCapability.brochureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded inline-flex items-center justify-center gap-2 transition-colors text-center"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                        <span>Download Technical Presentation (PDF)</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Secondary Engineering & Fabrication Spotlight */}
          <section className="max-w-[1360px] mx-auto px-5 sm:px-8">
            <div className="bg-white border border-slate-200 rounded p-6 sm:p-8 lg:p-10 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#1D4ED8]">
                    <span>Engineering Documentation</span>
                    <span aria-hidden="true">·</span>
                    <span>Perama Shipyard &amp; Onboard Execution</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                    Onboard &amp; Workshop Fabrication Detail
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    All fabrication, prefabrication, and installation works for {selectedCapability.title.toLowerCase()} are executed under our certified ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 management systems, audited by LRQA Hellas S.A., guaranteeing full compliance with international classification society standards.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors cursor-pointer"
                    >
                      Inquire About Fabrication Capacity
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="rounded border border-slate-200 overflow-hidden">
                    <MaritimeImage
                      src={selectedCapability.secondaryImage}
                      alt={`${selectedCapability.title} — Secondary Engineering View`}
                      className="w-full h-72 sm:h-80 object-cover"
                      containerClassName="w-full bg-[#0A111E]"
                      caption="Onboard & Workshop Fabrication Detail · Perama Facility"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Projects for this Capability */}
          {relatedProjects.length > 0 && (
            <section className="max-w-[1360px] mx-auto px-5 sm:px-8 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <p className="text-xs font-mono text-[#1D4ED8]">
                    Reference Execution
                  </p>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
                    Related {selectedCapability.shortTitle} Projects
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="self-start sm:self-auto text-xs font-semibold text-[#1D4ED8] hover:text-[#1E40AF] inline-flex items-center gap-1 cursor-pointer whitespace-nowrap"
                >
                  View All Projects
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((proj) => (
                  <article
                    key={proj.id}
                    onClick={() => setSelectedProject(proj)}
                    className="group bg-white border border-slate-200 hover:border-slate-400 rounded overflow-hidden flex flex-col justify-between cursor-pointer transition-colors shadow-xs"
                  >
                    <div>
                      <div className="h-56 sm:h-64 w-full overflow-hidden">
                        <MaritimeImage
                          src={proj.image}
                          alt={proj.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                          containerClassName="w-full h-full bg-[#0A111E]"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-xs font-mono text-slate-500">
                          {proj.category} · {proj.location}
                        </p>
                        <h4 className="mt-1.5 font-display text-lg font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors">
                          {proj.title}
                        </h4>
                        <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {proj.summary}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-600 truncate mr-2">
                        {proj.vesselType}
                      </span>
                      <span className="font-semibold text-[#1D4ED8] inline-flex items-center gap-1 shrink-0">
                        Inspect Technical Dossier
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Capability Closing Tender / Discussion Card */}
          <section className="max-w-[1360px] mx-auto px-5 sm:px-8">
            <div className="p-8 sm:p-10 bg-[#0A111E] text-white rounded border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-mono text-[#60A5FA]">
                  Direct Technical Estimating Desk · Perama Repair Zone
                </p>
                <h3 className="mt-1.5 font-display text-xl sm:text-2xl font-bold text-white">
                  Plan Your {selectedCapability.shortTitle} Project With Hellenic Group
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Submit vessel specifications, docking windows, or general arrangement drawings to our engineering department for a detailed feasibility analysis and quotation.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  Request Technical Quotation
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </section>
        </div>
      ) : (
        /* VIEW B: ALL CAPABILITIES OVERVIEW */
        <section className="py-16 lg:py-24">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-12">
            {CAPABILITIES.map((cap) => (
              <article
                key={cap.id}
                className="bg-white border border-slate-200 rounded overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs hover:border-slate-300 transition-colors"
              >
                {/* Left Column: Image with guaranteed dimensions and contained caption */}
                <div className="lg:col-span-5 relative w-full h-64 sm:h-72 lg:h-auto min-h-[280px] lg:min-h-[380px] overflow-hidden bg-[#0A111E]">
                  <MaritimeImage
                    src={cap.heroImage}
                    alt={cap.imageAlt}
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                    caption={`${cap.index}. ${cap.shortTitle} · Perama, Piraeus`}
                  />
                </div>

                {/* Right Column: Content, services, specs & CTA */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500">
                      <span className="text-[#1D4ED8] font-semibold">
                        Capability {cap.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{cap.category}</span>
                    </div>

                    <h2 className="mt-2 font-display text-2xl font-bold text-slate-900">
                      {cap.title}
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {cap.overview[0]}
                    </p>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-5 border-t border-slate-100">
                      {cap.services.map((srv, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-700"
                        >
                          <span className="font-mono text-[#1D4ED8] font-bold">▸</span>
                          <span>{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-slate-500">
                      {cap.technicalSpecs.slice(0, 2).map((spec, sIdx) => (
                        <span key={spec.label} className="inline-flex items-center gap-1.5">
                          {sIdx > 0 && (
                            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
                              ·
                            </span>
                          )}
                          <span className="text-slate-500">{spec.label}:</span>
                          <strong className="text-slate-800 font-semibold">
                            {spec.value}
                          </strong>
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectCapability(cap.slug)}
                      className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-white bg-[#0A111E] hover:bg-[#1D4ED8] rounded inline-flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0"
                    >
                      <span>Open Detailed Specification</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigate={onNavigate}
      />
    </div>
  );
};
