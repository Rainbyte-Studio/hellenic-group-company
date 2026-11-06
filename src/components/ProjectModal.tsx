import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { ProjectItem, PageRoute } from '../data/companyData';
import { MaritimeImage } from './MaritimeImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNavigate: (page: PageRoute, capabilitySlug?: string | null) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#070D17]/85 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="px-6 py-4 bg-[#0A111E] text-white flex items-center justify-between gap-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="text-[#60A5FA]">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.location}</span>
              <span aria-hidden="true">·</span>
              <span>{project.vesselType}</span>
            </div>
            <h3 id="project-modal-title" className="font-display text-lg sm:text-xl font-bold mt-1">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project technical dossier"
            className="p-2 text-slate-300 hover:text-white rounded border border-slate-700 hover:border-slate-500 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className={`grid grid-cols-1 ${project.secondaryImage ? 'md:grid-cols-2' : ''} gap-4`}>
            <MaritimeImage
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-64 object-cover"
              containerClassName="relative overflow-hidden rounded border border-slate-200 bg-[#0A111E]"
              caption="Primary Execution Documentation · Perama Facility"
            />
            {project.secondaryImage && (
              <MaritimeImage
                src={project.secondaryImage}
                alt={`${project.title} — Secondary Technical View`}
                className="w-full h-64 object-cover"
                containerClassName="relative overflow-hidden rounded border border-slate-200 bg-[#0A111E]"
                caption="On-Site Engineering & Fabrication Detail"
              />
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="font-display text-sm font-bold text-slate-900">
                Engineering Overview
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.summary}
              </p>

              <h4 className="font-display text-sm font-bold text-slate-900 pt-2">
                Executed Technical Scope
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                {project.technicalScope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-mono text-xs text-[#1D4ED8] font-semibold mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded p-5 space-y-4 self-start">
              <h4 className="font-display text-xs font-bold text-slate-900 tracking-wide">
                Project Specifications
              </h4>
              <dl className="divide-y divide-slate-200 text-xs">
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-slate-500">Vessel Type</dt>
                  <dd className="font-mono font-medium text-slate-900 text-right">{project.vesselType}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-slate-500">Location</dt>
                  <dd className="font-mono font-medium text-slate-900 text-right">{project.location}</dd>
                </div>
                {project.metrics.map((m) => (
                  <div key={m.label} className="py-2.5 flex justify-between gap-4">
                    <dt className="text-slate-500">{m.label}</dt>
                    <dd className="font-mono font-medium text-slate-900 text-right">{m.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onNavigate('capabilities', project.relatedCapabilityId);
                  }}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded transition-colors cursor-pointer whitespace-nowrap"
                >
                  View Related Capability Specification
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onNavigate('contact');
                  }}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Inquire About Similar Vessel Scope
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
