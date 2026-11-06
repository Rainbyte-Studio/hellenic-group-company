import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import {
  PROJECTS,
  ProjectItem,
  PageRoute,
} from '../data/companyData';
import { MaritimeImage } from '../components/MaritimeImage';
import { ProjectModal } from '../components/ProjectModal';

interface ProjectsPageProps {
  onNavigate: (page: PageRoute, capabilitySlug?: string | null) => void;
}

const CATEGORIES: ('All Projects' | ProjectItem['category'])[] = [
  'All Projects',
  'Repairs & Steelworks',
  'Conversions',
  'Shipbuilding',
  'EGCS Scrubbers',
  'BWTS & Piping',
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<'All Projects' | ProjectItem['category']>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#F8FAFC]">
      {/* Page Hero */}
      <section className="bg-[#0A111E] text-white border-b border-slate-800 py-16 lg:py-22">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#60A5FA] mb-4">
              <span>Reference Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Perama Repair Zone &amp; Drapetsona Docks</span>
              <span aria-hidden="true">·</span>
              <span>Commercial Fleets, Tankers, Ro-Ro &amp; Ferries</span>
            </div>
            <h1
              className="font-display font-bold text-white tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
            >
              Projects &amp; Maritime Engineering Portfolio
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore documented dry-dockings, side-shell collision renewals, inner-bottom steel replacements, single-to-double hull and pipe-laying vessel conversions, commercial newbuildings up to 5,000 DWT, and turnkey EGCS scrubber and BWTS retrofits.
            </p>
          </div>

          {/* Interactive Category Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter projects by engineering category"
            className="mt-10 pt-6 border-t border-slate-800 flex items-center gap-2 overflow-x-auto pb-2"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              const count =
                category === 'All Projects'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === category).length;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#1D4ED8] text-white'
                      : 'bg-[#111C2D] text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white border border-slate-200 hover:border-slate-400 rounded overflow-hidden flex flex-col justify-between transition-colors cursor-pointer"
              >
                <div>
                  <div className="h-64 sm:h-72 overflow-hidden">
                    <MaritimeImage
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                      containerClassName="w-full h-full bg-[#0A111E]"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500">
                      <span className="text-[#1D4ED8] font-semibold">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.vesselType}</span>
                    </div>

                    <h2 className="mt-2.5 font-display text-xl font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors">
                      {project.title}
                    </h2>

                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5">
                      <p className="text-xs font-semibold text-slate-900">
                        Key Executed Works:
                      </p>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {project.technicalScope.map((scope, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="font-mono text-[#1D4ED8]">▸</span>
                            <span>{scope}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-7 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div className="font-mono text-slate-600">
                    {project.metrics.map((m, idx) => (
                      <span key={m.label}>
                        {idx > 0 && <span className="mx-2">·</span>}
                        <strong className="text-slate-900">{m.label}:</strong> {m.value}
                      </span>
                    ))}
                  </div>
                  <span className="font-semibold text-[#1D4ED8] inline-flex items-center gap-1 shrink-0 ml-4">
                    Inspect Dossier
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Custom Tender Box */}
          <div className="mt-16 p-8 bg-white border border-slate-200 rounded flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-mono text-[#1D4ED8]">
                Custom Vessel Specifications &amp; Fleet Agreements
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-slate-900">
                Planning a Dry-Docking, Conversion, or Environmental Retrofit?
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Submit your repair specification, general arrangement plan, or BWTS/EGCS retrofit requirements to our Perama estimating department for a detailed technical and commercial proposal.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded inline-flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start md:self-center"
            >
              Submit Vessel Specification
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigate={onNavigate}
      />
    </div>
  );
};
