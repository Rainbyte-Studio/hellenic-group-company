import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, FileText, CheckCircle2 } from 'lucide-react';
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
      <section className="bg-[#0A111E] text-white border-b border-slate-800 py-16 lg:py-22">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
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
            className="mt-10 pt-6 border-t border-slate-800 flex items-center gap-2 overflow-x-auto pb-2"
          >
            <button
              type="button"
              role="tab"
              aria-selected={!selectedCapability}
              onClick={() => onSelectCapability(null)}
              className={`px-3.5 py-2 text-xs font-semibold rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                !selectedCapability
                  ? 'bg-[#1D4ED8] text-white'
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
                      ? 'bg-[#1D4ED8] text-white'
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
        <div className="py-16 lg:py-24 space-y-20">
          {/* Capability Deep-Dive Split */}
          <section className="max-w-[1360px] mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#1D4ED8]">
                  <span>Capability {selectedCapability.index}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedCapability.category}</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                  Technical Overview &amp; Execution Methodology
                </h2>

                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  {selectedCapability.overview.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-4">
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-4">
                    Scope of Services &amp; Works
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {selectedCapability.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-white border border-slate-200 rounded flex items-start gap-3"
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

              {/* Right Column: Visuals, Technical Specs & Facilities */}
              <div className="lg:col-span-5 space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <MaritimeImage
                    src={selectedCapability.heroImage}
                    alt={selectedCapability.imageAlt}
                    className="w-full h-64 sm:h-72 object-cover"
                    containerClassName="relative overflow-hidden rounded border border-slate-200 bg-[#0A111E]"
                    caption={`${selectedCapability.shortTitle} · Perama Facility Execution`}
                  />
                  <MaritimeImage
                    src={selectedCapability.secondaryImage}
                    alt={`${selectedCapability.title} — Secondary Engineering View`}
                    className="w-full h-56 object-cover"
                    containerClassName="relative overflow-hidden rounded border border-slate-200 bg-[#0A111E]"
                    caption="Onboard & Workshop Fabrication Detail"
                  />
                </div>

                {/* Technical Specifications Box */}
                <div className="bg-white border border-slate-200 rounded p-6 space-y-4">
                  <h3 className="font-display text-sm font-bold text-slate-900">
                    Technical Specifications
                  </h3>
                  <dl className="divide-y divide-slate-200 text-xs">
                    {selectedCapability.technicalSpecs.map((spec) => (
                      <div key={spec.label} className="py-3 flex justify-between gap-4">
                        <dt className="text-slate-500">{spec.label}</dt>
                        <dd className="font-mono font-semibold text-slate-900 text-right">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="pt-3 border-t border-slate-200">
                    <h4 className="text-xs font-semibold text-slate-900 mb-2">
                      Assigned Facilities &amp; Infrastructure
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {selectedCapability.facilitiesUsed.map((fac, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-mono text-[#1D4ED8]">•</span>
                          <span>{fac}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-col gap-2.5">
                    <button
                      type="button"
                      onClick={() => onNavigate('contact')}
                      className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded inline-flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Request Quotation for {selectedCapability.shortTitle}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {selectedCapability.brochureUrl && (
                      <a
                        href={selectedCapability.brochureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-300 rounded inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#1D4ED8]" />
                        Download Technical Presentation (PDF)
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Projects for this Capability */}
          {relatedProjects.length > 0 && (
            <section className="max-w-[1360px] mx-auto px-5 sm:px-8 pt-12 border-t border-slate-200">
              <div className="flex items-center justify-between gap-4 mb-8">
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
                  className="text-xs font-semibold text-[#1D4ED8] hover:text-[#1E40AF] inline-flex items-center gap-1 cursor-pointer whitespace-nowrap"
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
                    className="group bg-white border border-slate-200 hover:border-slate-400 rounded overflow-hidden grid grid-cols-1 sm:grid-cols-12 cursor-pointer transition-colors"
                  >
                    <div className="sm:col-span-5 h-48 sm:h-full">
                      <MaritimeImage
                        src={proj.image}
                        alt={proj.imageAlt}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full bg-[#0A111E]"
                      />
                    </div>
                    <div className="sm:col-span-7 p-5 flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-mono text-slate-500">
                          {proj.category} · {proj.location}
                        </p>
                        <h4 className="mt-1.5 font-display text-base font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors">
                          {proj.title}
                        </h4>
                        <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {proj.summary}
                        </p>
                      </div>
                      <span className="mt-4 text-xs font-semibold text-[#1D4ED8] inline-flex items-center gap-1">
                        Open Technical Dossier
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        /* VIEW B: ALL CAPABILITIES OVERVIEW */
        <section className="py-16 lg:py-24">
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-12">
            {CAPABILITIES.map((cap) => (
              <article
                key={cap.id}
                className="bg-white border border-slate-200 rounded overflow-hidden grid grid-cols-1 lg:grid-cols-12"
              >
                <div className="lg:col-span-5 min-h-[280px] lg:min-h-full">
                  <MaritimeImage
                    src={cap.heroImage}
                    alt={cap.imageAlt}
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full bg-[#0A111E]"
                    caption={`${cap.index}. ${cap.shortTitle} · Perama, Piraeus`}
                  />
                </div>

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

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-5 border-t border-slate-200">
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

                  <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
                      {cap.technicalSpecs.slice(0, 2).map((spec, sIdx) => (
                        <span key={spec.label}>
                          {sIdx > 0 && <span className="mr-4">·</span>}
                          <strong className="text-slate-800">{spec.label}:</strong> {spec.value}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectCapability(cap.slug)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#0A111E] hover:bg-[#1D4ED8] rounded inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Open Detailed Specification
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
