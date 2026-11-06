import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { CertificationItem } from '../data/companyData';
import { MaritimeImage } from './MaritimeImage';

interface CertificateModalProps {
  certificate: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#070D17]/85 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-[#0A111E] text-white flex items-center justify-between gap-4 border-b border-slate-800">
          <div>
            <p className="text-xs font-mono text-[#60A5FA]">
              Certificate No. {certificate.certificateNumber} · {certificate.accreditationBody}
            </p>
            <h3 id="cert-modal-title" className="font-display text-lg font-bold">
              {certificate.standard} — {certificate.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate preview"
            className="p-2 text-slate-300 hover:text-white rounded border border-slate-700 hover:border-slate-500 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 bg-slate-50">
          <p className="text-sm text-slate-600 leading-relaxed">
            {certificate.scope}
          </p>
          <div className="border border-slate-200 bg-white p-2 rounded">
            <MaritimeImage
              src={certificate.certificateImage}
              alt={`${certificate.standard} LRQA Certificate ${certificate.certificateNumber}`}
              className="w-full h-auto max-h-[65vh] object-contain mx-auto"
              containerClassName="bg-white"
            />
          </div>
        </div>

        <div className="px-6 py-3.5 bg-white border-t border-slate-200 flex items-center justify-between gap-4">
          <span className="text-xs text-slate-500 font-mono">
            Issued to Hellenic Shipbuilding Industry Ltd. (HSI)
          </span>
          <a
            href={certificate.certificateImage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8] hover:text-[#1E40AF] whitespace-nowrap"
          >
            Open Full-Resolution Document
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
