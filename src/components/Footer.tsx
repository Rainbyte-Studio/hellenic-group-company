import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import {
  COMPANY_INFO,
  CAPABILITIES,
  CORPORATE_BROCHURES,
  PageRoute,
} from '../data/companyData';

interface FooterProps {
  onNavigate: (page: PageRoute, capabilitySlug?: string | null) => void;
  showCtaBanner?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  showCtaBanner = true,
}) => {
  return (
    <footer className="bg-[#070D17] text-slate-300 border-t border-slate-800/90">
      {/* Corporate CTA Section */}
      {showCtaBanner && (
        <section
          aria-labelledby="footer-cta-heading"
          className="border-b border-slate-800/80 bg-[#0A111E]"
        >
          <div className="max-w-[1360px] mx-auto px-5 sm:px-8 py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xs font-mono text-[#60A5FA] tracking-wide mb-3">
                Perama Repair Zone · Piraeus, Greece · 24/7 Dispatch
              </p>
              <h2
                id="footer-cta-heading"
                className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight"
              >
                Discuss Your Project
              </h2>
              <p className="mt-3 text-slate-300 text-base leading-relaxed">
                Engage directly with our naval architects, repair superintendents, and commercial estimating desk for dry-dockings, structural steel renewals, conversions, NewBuildings, or turnkey EGCS and BWTS retrofits.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Request Technical Consultation
              </button>
              <a
                href={`tel:${COMPANY_INFO.contacts.commercialPhonePrimary.replace(/\s+/g, '')}`}
                className="px-5 py-3 text-sm font-mono text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 rounded transition-colors whitespace-nowrap shrink-0"
              >
                {COMPANY_INFO.contacts.commercialPhonePrimary}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Main Footer Grid */}
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Group Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="font-display text-lg font-bold text-white tracking-tight">
              {COMPANY_INFO.brandName}
            </div>
            <p className="text-xs font-mono text-slate-400">
              Operating Shipyard Division: {COMPANY_INFO.operatingDivision}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Established Greek maritime and industrial organization specializing in ship repairs, structural conversions, commercial newbuildings up to 5,000 DWT, and environmental retrofits in Perama, Piraeus.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1 font-mono">
              <p>ISO 9001:2015 · ISO 14001:2015 · ISO 45001:2018</p>
              <p className="text-slate-500">Certified by LRQA Hellas S.A. (UKAS Accredited 0001)</p>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold text-white tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {(
                [
                  { label: 'Home', route: 'home' },
                  { label: 'About the Group', route: 'about' },
                  { label: 'Capabilities', route: 'capabilities' },
                  { label: 'Facilities & Docks', route: 'facilities' },
                  { label: 'Project Portfolio', route: 'projects' },
                  { label: 'Contact & Dispatch', route: 'contact' },
                ] as { label: string; route: PageRoute }[]
              ).map((item) => (
                <li key={item.route}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.route, null)}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-white tracking-wide">
              Core Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {CAPABILITIES.map((cap) => (
                <li key={cap.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate('capabilities', cap.slug)}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {cap.shortTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Shipyard & Commercial Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-white tracking-wide">
              Shipyard &amp; Workshops
            </h3>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-1" />
                <span>{COMPANY_INFO.location.fullAddress}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-slate-500 shrink-0 mt-1" />
                <div className="font-mono text-xs space-y-1">
                  <p>
                    <a
                      href={`tel:${COMPANY_INFO.contacts.commercialPhonePrimary.replace(/\s+/g, '')}`}
                      className="hover:text-white transition-colors"
                    >
                      {COMPANY_INFO.contacts.commercialPhonePrimary}
                    </a>{' '}
                    (Commercial)
                  </p>
                  <p>
                    <a
                      href={`tel:${COMPANY_INFO.contacts.mobile24x7Primary.replace(/\s+/g, '')}`}
                      className="hover:text-white transition-colors"
                    >
                      {COMPANY_INFO.contacts.mobile24x7Primary}
                    </a>{' '}
                    (24/7 Line)
                  </p>
                  <p>
                    <a
                      href={`tel:${COMPANY_INFO.contacts.accountingPhone.replace(/\s+/g, '')}`}
                      className="hover:text-white transition-colors"
                    >
                      {COMPANY_INFO.contacts.accountingPhone}
                    </a>{' '}
                    (Accounting)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-slate-500 shrink-0 mt-1" />
                <div className="font-mono text-xs space-y-1 break-all">
                  <p>
                    <a
                      href={`mailto:${COMPANY_INFO.contacts.commercialEmail}`}
                      className="hover:text-white transition-colors"
                    >
                      {COMPANY_INFO.contacts.commercialEmail}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${COMPANY_INFO.contacts.accountingEmail}`}
                      className="hover:text-white transition-colors"
                    >
                      {COMPANY_INFO.contacts.accountingEmail}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Publications / Downloads */}
            <div className="pt-3 border-t border-slate-800/70">
              <p className="text-xs font-semibold text-slate-300 mb-2">
                Official Technical Presentations
              </p>
              <div className="space-y-1.5">
                {CORPORATE_BROCHURES.map((doc) => (
                  <a
                    key={doc.fileUrl}
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs text-slate-400 hover:text-white transition-colors py-0.5"
                  >
                    <span className="truncate pr-2">{doc.title.replace('Hellenic Shipbuilding Industry — ', '')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Company Legal Information Section */}
        <div className="py-8 border-b border-slate-800/80">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            {/* Legal Entity Names */}
            <div className="lg:max-w-md space-y-2">
              <h3 className="text-xs font-semibold text-white tracking-wide">
                Company Information
              </h3>
              <div className="space-y-1.5 text-xs text-slate-400">
                <p>
                  <span className="text-slate-500">Legal Name:</span>{' '}
                  <span className="text-slate-200 font-medium">
                    {COMPANY_INFO.legal.englishLegalName}
                  </span>
                </p>
                <p>
                  <span className="text-slate-500">Επωνυμία:</span>{' '}
                  <span className="text-slate-200 font-medium">
                    {COMPANY_INFO.legal.greekLegalName}
                  </span>
                </p>
              </div>
            </div>

            {/* Registry, Tax & Registered Office */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 text-xs text-slate-400 flex-1 lg:max-w-3xl">
              <div>
                <p className="text-slate-500 mb-1">GEMI / Αρ. ΓΕΜΗ</p>
                <p className="font-mono font-medium text-slate-200 tabular-nums">
                  {COMPANY_INFO.legal.gemi}
                </p>
              </div>

              <div>
                <p className="text-slate-500 mb-1">VAT Number / ΑΦΜ</p>
                <p className="font-mono font-medium text-slate-200 tabular-nums">
                  {COMPANY_INFO.legal.vat}
                </p>
              </div>

              <div>
                <p className="text-slate-500 mb-1">Registered Office / Έδρα</p>
                <a
                  href={COMPANY_INFO.legal.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-1.5 text-slate-300 hover:text-white transition-colors"
                  aria-label="View Hellenic Group Company registered office on Google Maps (opens in new tab)"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#60A5FA] shrink-0 mt-0.5 group-hover:text-blue-400 transition-colors" />
                  <span className="underline underline-offset-2 decoration-slate-600 group-hover:decoration-slate-300">
                    {COMPANY_INFO.legal.registeredOfficeGreek}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                </a>
                <p className="text-[11px] text-slate-500 mt-1">
                  {COMPANY_INFO.legal.registeredOfficeEnglish}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Domain Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.brandName} ({COMPANY_INFO.domainName}) · {COMPANY_INFO.operatingDivision}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={COMPANY_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={COMPANY_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Instagram
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={COMPANY_INFO.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Facebook
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors font-mono"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
