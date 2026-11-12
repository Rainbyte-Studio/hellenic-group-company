import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  FileText,
  Anchor,
  Compass,
  Building2,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { MaritimeImage } from '../components/MaritimeImage';

export const ContactPage: React.FC = () => {
  const peramaGoogleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Free+Zone+OLP+Perama+Repair+Zone+18863+Perama+Piraeus+Greece';

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Page Hero */}
      <section className="bg-[#0A111E] text-white border-b border-slate-800 py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#60A5FA] mb-4">
              <span>Commercial &amp; Technical Dispatch</span>
              <span aria-hidden="true">·</span>
              <span>Free Zone OLP, 18863 Perama, Piraeus</span>
              <span aria-hidden="true">·</span>
              <span>24/7 Voyage &amp; Emergency Support</span>
            </div>
            <h1
              className="font-display font-bold text-white tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
            >
              Contact Hellenic Group Company
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Direct commercial, technical, and operational dispatch for shipowners, technical
              superintendents, fleet managers, and maritime operators worldwide. Connect directly
              with our Perama shipyard headquarters, dry-docking desks, and emergency repair teams.
            </p>

            {/* Quick-Action Channels */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.contacts.commercialPhonePrimary.replace(/\s+/g, '')}`}
                className="px-5 py-3 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call Commercial Desk</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.contacts.commercialEmail}?subject=${encodeURIComponent(
                  'Dry-Docking & Technical Inquiry — Hellenic Group Company'
                )}`}
                className="px-5 py-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/25 rounded inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>Email Commercial Desk</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.contacts.mobile24x7Primary.replace(/\s+/g, '')}`}
                className="px-5 py-3 text-xs font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Anchor className="w-4 h-4 shrink-0" />
                <span>24/7 Emergency Mobile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Departmental Contact Cards (3-Column Grid) */}
      <section className="py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono text-[#1D4ED8] font-medium tracking-wide">
              Direct Corporate Departments
            </p>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Operational Channels &amp; Technical Desks
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Our Perama facility coordinates directly with clients, classification societies, and
              the Piraeus Port Authority (OLP S.A.) to provide immediate quotation, berth
              allocation, and project execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Commercial & Technical Department */}
            <div className="bg-white border border-slate-200 rounded p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="flex items-center justify-between">
                  <span className="p-2.5 bg-blue-50 text-[#1D4ED8] rounded">
                    <Building2 className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 bg-blue-50 text-[#1D4ED8] rounded">
                    Primary Yard Desk
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  Commercial &amp; Technical Department
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Direct management of dry-docking reservations, ship repair tenders, newbuilding
                  specifications up to 5,000 DWT, complex vessel conversions, and BWTS / EGCS
                  scrubber retrofits.
                </p>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-3.5 text-xs">
                  <div>
                    <span className="text-slate-500 block mb-1">Commercial Switchboard</span>
                    <div className="font-mono text-slate-900 font-semibold space-y-1">
                      <p>
                        <a
                          href={`tel:${COMPANY_INFO.contacts.commercialPhonePrimary.replace(/\s+/g, '')}`}
                          className="hover:text-[#1D4ED8] transition-colors"
                        >
                          {COMPANY_INFO.contacts.commercialPhonePrimary}
                        </a>
                      </p>
                      <p>
                        <a
                          href={`tel:${COMPANY_INFO.contacts.commercialPhoneSecondary.replace(/\s+/g, '')}`}
                          className="hover:text-[#1D4ED8] transition-colors"
                        >
                          {COMPANY_INFO.contacts.commercialPhoneSecondary}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-500 block mb-1">Commercial Emails</span>
                    <div className="font-mono space-y-1">
                      <p>
                        <a
                          href={`mailto:${COMPANY_INFO.contacts.commercialEmail}`}
                          className="text-[#1D4ED8] hover:underline break-all"
                        >
                          {COMPANY_INFO.contacts.commercialEmail}
                        </a>
                      </p>
                      <p>
                        <a
                          href={`mailto:${COMPANY_INFO.contacts.groupEmails.commercial}`}
                          className="text-slate-700 hover:text-[#1D4ED8] hover:underline break-all"
                        >
                          {COMPANY_INFO.contacts.groupEmails.commercial}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <a
                  href={`mailto:${COMPANY_INFO.contacts.commercialEmail}?subject=${encodeURIComponent(
                    'Tender Specification / Inquiry — Commercial Desk'
                  )}`}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded inline-flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>Email Commercial Desk</span>
                </a>
              </div>
            </div>

            {/* Card 2: 24/7 Emergency & Voyage Repair Dispatch */}
            <div className="bg-white border border-slate-200 rounded p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="flex items-center justify-between">
                  <span className="p-2.5 bg-amber-50 text-amber-700 rounded">
                    <Anchor className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 bg-amber-50 text-amber-800 rounded">
                    Immediate Response
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  24/7 Emergency &amp; Voyage Dispatch
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Continuous technical on-call service for urgent afloat steel renewals, collision
                  damage response, mechanical breakdowns, certified riding squads, and emergency
                  dry-dock allocation in Piraeus.
                </p>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-3.5 text-xs">
                  <div>
                    <span className="text-slate-500 block mb-1">24/7 Mobile Hotlines</span>
                    <div className="font-mono text-slate-900 font-semibold space-y-1">
                      <p>
                        <a
                          href={`tel:${COMPANY_INFO.contacts.mobile24x7Primary.replace(/\s+/g, '')}`}
                          className="hover:text-[#1D4ED8] transition-colors"
                        >
                          {COMPANY_INFO.contacts.mobile24x7Primary}
                        </a>
                      </p>
                      <p>
                        <a
                          href={`tel:${COMPANY_INFO.contacts.mobile24x7Secondary.replace(/\s+/g, '')}`}
                          className="hover:text-[#1D4ED8] transition-colors"
                        >
                          {COMPANY_INFO.contacts.mobile24x7Secondary}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-500 block mb-1">Voyage Squad Coverage</span>
                    <p className="text-slate-700 font-mono">
                      Mediterranean, Black Sea &amp; Worldwide Ports
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <a
                  href={`tel:${COMPANY_INFO.contacts.mobile24x7Primary.replace(/\s+/g, '')}`}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded inline-flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>Call Emergency Dispatch</span>
                </a>
              </div>
            </div>

            {/* Card 3: Accounting & Administration Department */}
            <div className="bg-white border border-slate-200 rounded p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors md:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center justify-between">
                  <span className="p-2.5 bg-slate-100 text-slate-700 rounded">
                    <FileText className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 bg-slate-100 text-slate-700 rounded">
                    Administration Desk
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                  Accounting &amp; Administration
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Financial management, vendor documentation, commercial contracts, port authority
                  and customs clearance verification, class survey filing, and corporate governance.
                </p>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-3.5 text-xs">
                  <div>
                    <span className="text-slate-500 block mb-1">Direct Accounting Telephone</span>
                    <p className="font-mono text-slate-900 font-semibold">
                      <a
                        href={`tel:${COMPANY_INFO.contacts.accountingPhone.replace(/\s+/g, '')}`}
                        className="hover:text-[#1D4ED8] transition-colors"
                      >
                        {COMPANY_INFO.contacts.accountingPhone}
                      </a>
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-500 block mb-1">Administration Emails</span>
                    <div className="font-mono space-y-1">
                      <p>
                        <a
                          href={`mailto:${COMPANY_INFO.contacts.accountingEmail}`}
                          className="text-[#1D4ED8] hover:underline break-all"
                        >
                          {COMPANY_INFO.contacts.accountingEmail}
                        </a>
                      </p>
                      <p>
                        <a
                          href={`mailto:${COMPANY_INFO.contacts.groupEmails.general}`}
                          className="text-slate-700 hover:text-[#1D4ED8] hover:underline break-all"
                        >
                          {COMPANY_INFO.contacts.groupEmails.general}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <a
                  href={`mailto:${COMPANY_INFO.contacts.accountingEmail}?subject=${encodeURIComponent(
                    'Administration & Accounting Inquiry — Hellenic Group Company'
                  )}`}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded inline-flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>Email Administration</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Location, Shipyard Headquarters & Interactive Map Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column (5 Cols): Physical Addresses, Operating Hours & Legal Identity */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs font-mono text-[#1D4ED8] font-medium tracking-wide">
                  Physical Infrastructure &amp; Seat
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold text-slate-900 tracking-tight">
                  Shipyard Location &amp; Headquarters
                </h2>
              </div>

              {/* Shipyard Facilities & Workshops Card */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded p-6 sm:p-7 space-y-5">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="font-display text-sm font-bold text-slate-900">
                      Shipyard &amp; Fabrication Workshops
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">
                      {COMPANY_INFO.operatingDivision}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 font-mono">
                      {COMPANY_INFO.location.fullAddress}
                    </p>
                    <p className="text-xs font-mono text-[#1D4ED8] pt-1">
                      Coordinates: 37°57&apos;49&quot;N 23°34&apos;05&quot;E
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <a
                    href={peramaGoogleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#1D4ED8] hover:text-[#1E40AF] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Open Shipyard Location in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded p-6 sm:p-7 space-y-4">
                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div className="space-y-2 w-full">
                    <h3 className="font-display text-sm font-bold text-slate-900">
                      Shipyard &amp; Office Working Hours
                    </h3>
                    <dl className="divide-y divide-slate-200 text-xs">
                      <div className="py-2 flex justify-between gap-4">
                        <dt className="text-slate-500">Monday – Friday</dt>
                        <dd className="font-mono font-medium text-slate-900 text-right">
                          08:00 – 17:30 EET
                        </dd>
                      </div>
                      <div className="py-2 flex justify-between gap-4">
                        <dt className="text-slate-500">Saturday</dt>
                        <dd className="font-mono font-medium text-slate-900 text-right">
                          08:00 – 17:30 EET
                        </dd>
                      </div>
                      <div className="py-2 flex justify-between gap-4">
                        <dt className="text-slate-500">Sunday</dt>
                        <dd className="font-medium text-slate-700 text-right">
                          Closed · 24/7 Emergency Dispatch Available
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              {/* Official Company Legal Information Card */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded p-6 sm:p-7 space-y-4">
                <div className="flex items-start gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div className="space-y-3 w-full">
                    <div>
                      <h3 className="font-display text-sm font-bold text-slate-900">
                        Official Legal Entity Information (Στοιχεία Εταιρείας)
                      </h3>
                      <p className="mt-1 text-xs text-slate-600">
                        Registered in the General Commercial Registry of the Hellenic Republic
                      </p>
                    </div>

                    <dl className="divide-y divide-slate-200 text-xs">
                      <div className="py-2">
                        <dt className="text-slate-500">Greek Legal Name</dt>
                        <dd className="font-mono font-medium text-slate-900 mt-0.5">
                          {COMPANY_INFO.legal.greekLegalName}
                        </dd>
                      </div>
                      <div className="py-2">
                        <dt className="text-slate-500">English Legal Name</dt>
                        <dd className="font-mono font-medium text-slate-900 mt-0.5">
                          {COMPANY_INFO.legal.englishLegalName}
                        </dd>
                      </div>
                      <div className="py-2 flex justify-between gap-4">
                        <dt className="text-slate-500">GEMI Registration No.</dt>
                        <dd className="font-mono font-semibold text-slate-900">
                          {COMPANY_INFO.legal.gemi}
                        </dd>
                      </div>
                      <div className="py-2 flex justify-between gap-4">
                        <dt className="text-slate-500">VAT Number (ΑΦΜ)</dt>
                        <dd className="font-mono font-semibold text-[#1D4ED8]">
                          {COMPANY_INFO.legal.vat}
                        </dd>
                      </div>
                      <div className="py-2">
                        <dt className="text-slate-500">Registered Office (Έδρα)</dt>
                        <dd className="font-medium text-slate-900 mt-0.5">
                          {COMPANY_INFO.legal.registeredOfficeEnglish}
                        </dd>
                        <dd className="text-slate-500 font-mono text-[11px] mt-0.5">
                          {COMPANY_INFO.legal.registeredOfficeGreek}
                        </dd>
                      </div>
                    </dl>

                    <div className="pt-2">
                      <a
                        href={COMPANY_INFO.legal.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#1D4ED8] hover:text-[#1E40AF] inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>Open Registered Office in Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corporate Social & Reference Links */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded p-6 sm:p-7">
                <div className="flex items-center gap-3 text-xs">
                  <Compass className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  <span className="font-semibold text-slate-900">Official Social &amp; Reference Channels:</span>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href={COMPANY_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded hover:border-slate-400 text-slate-700 hover:text-[#1D4ED8] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={COMPANY_INFO.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded hover:border-slate-400 text-slate-700 hover:text-[#1D4ED8] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={COMPANY_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded hover:border-slate-400 text-slate-700 hover:text-[#1D4ED8] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={COMPANY_INFO.socialLinks.sourceSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-white border border-slate-300 rounded hover:border-slate-400 text-slate-700 hover:text-[#1D4ED8] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Reference Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column (7 Cols): Interactive Map & Shipyard Visual Asset */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-xs font-mono text-[#1D4ED8] font-medium tracking-wide">
                  Port Infrastructure &amp; Dock Access
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold text-slate-900 tracking-tight">
                  Perama Repair Zone &amp; Piraeus Harbour Docks
                </h2>
              </div>

              {/* Interactive OpenStreetMap Embed */}
              <div className="bg-white border border-slate-200 rounded overflow-hidden shadow-sm">
                <div className="px-5 py-3.5 bg-[#0A111E] text-white flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span>Perama Repair Zone (Free Zone OLP, Piraeus)</span>
                  <span className="text-[#60A5FA]">37°57&apos;49&quot;N 23°34&apos;05&quot;E</span>
                </div>
                <div className="h-80 sm:h-96 w-full bg-slate-100">
                  <iframe
                    title="Hellenic Group Company — Perama Repair Zone, Piraeus Map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=23.5450%2C37.9500%2C23.6000%2C37.9800&layer=mapnik&marker=37.9636%2C23.5681"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-slate-600">
                    Direct maritime access for commercial vessels, tankers, Ro-Ro ships &amp; tugs.
                  </span>
                  <a
                    href={peramaGoogleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#1D4ED8] hover:text-[#1E40AF] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Open in Google Maps for Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Shipyard Aerial Visual Asset Card */}
              <div className="bg-white border border-slate-200 rounded overflow-hidden">
                <div className="h-64 sm:h-72 w-full overflow-hidden">
                  <MaritimeImage
                    src="/assets/hsi/hero-shipyard-aerial.jpg"
                    alt="Aerial view of Perama Repair Zone and floating dry docks in Piraeus"
                    className="w-full h-full object-cover"
                    caption="Perama Repair Zone Waterfront · Access to 5 Floating & Graving Dry Docks (OLP S.A. Cooperation)"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-bold text-slate-900">
                    Operational Access to Five Dry-Docking Facilities
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Operating inside the designated Free Zone OLP in Perama with 6,000 m² of covered
                    and open workshop capacity. Hellenic Group Company works in structured
                    cooperation with Piraeus Port Authority (OLP S.A.) utilizing three floating dry
                    docks in Perama and two permanent graving docks in Akti Vasileiadi, Drapetsona
                    for vessels up to 240 m length and 22,000 tons lifting capacity.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500">
                    <span className="px-2.5 py-1 bg-slate-100 rounded text-slate-700">
                      Panamax Capable
                    </span>
                    <span className="px-2.5 py-1 bg-slate-100 rounded text-slate-700">
                      Deep-Water Quayside
                    </span>
                    <span className="px-2.5 py-1 bg-slate-100 rounded text-slate-700">
                      ISO 9001 / 14001 / 45001
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technical Tender & RFQ Submission Protocol */}
      <section className="py-16 bg-[#0A111E] text-white">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="bg-[#111C2D] border border-slate-800 rounded p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#60A5FA]">
                  <FileText className="w-4 h-4" />
                  <span>Technical Tender &amp; RFQ Submission Protocol</span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Submitting Vessel Specifications &amp; Dry-Docking Dossiers
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                  For formal repair specifications, vessel conversion tenders, or retrofit quotations,
                  please transmit your technical dossier directly to our Commercial Desk. We
                  recommend including:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-[#60A5FA] font-bold">01.</span>
                    <span>Vessel particulars: Name, IMO number, LOA, Beam, Draft, and DWT</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-[#60A5FA] font-bold">02.</span>
                    <span>Detailed repair specification list or conversion drawings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-[#60A5FA] font-bold">03.</span>
                    <span>Target dry-docking or repair schedule in Piraeus/Perama</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-[#60A5FA] font-bold">04.</span>
                    <span>Classification society requirements and class status</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-3">
                <a
                  href={`mailto:${COMPANY_INFO.contacts.commercialEmail}?subject=${encodeURIComponent(
                    'Tender Specification / Dry-Docking Dossier — [Vessel Name]'
                  )}`}
                  className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded inline-flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Transmit Dossier to Commercial Desk</span>
                </a>
                <p className="text-[11px] font-mono text-slate-400 text-left lg:text-right">
                  Standard response window: within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
