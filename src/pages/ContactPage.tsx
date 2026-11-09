import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Send,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  vesselDetails: string;
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  subject: 'Ship Repair & Dry-Docking Inquiry',
  vesselDetails: '',
  message: '',
};

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [submittedSnapshot, setSubmittedSnapshot] = useState<FormState | null>(null);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    if (!form.company.trim()) {
      nextErrors.company = 'Please enter your shipping company or organization name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid corporate email address.';
    }
    const phoneRegex = /^[+\d\s\-().]{7,25}$/;
    if (!form.phone.trim() || !phoneRegex.test(form.phone.trim())) {
      nextErrors.phone = 'Please enter a valid telephone number (with country code).';
    }
    if (!form.subject.trim()) {
      nextErrors.subject = 'Please specify a project subject or department.';
    }
    if (!form.message.trim() || form.message.trim().length < 15) {
      nextErrors.message =
        'Please provide a brief project specification or inquiry message (at least 15 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const refId = `HGC-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmittedSnapshot({ ...form });
    setSubmittedRef(refId);
    setForm(INITIAL_FORM);
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="bg-[#F8FAFC]">
      {/* Page Hero */}
      <section className="bg-[#0A111E] text-white border-b border-slate-800 py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#60A5FA] mb-4">
              <span>Commercial &amp; Technical Dispatch</span>
              <span aria-hidden="true">·</span>
              <span>Free Zone OLP, 18863 Perama, Piraeus</span>
              <span aria-hidden="true">·</span>
              <span>24/7 Emergency Support</span>
            </div>
            <h1
              className="font-display font-bold text-white tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
            >
              Contact Hellenic Group Company
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Connect directly with our Commercial Department, Naval Engineering Office, or Accounting Desk at our shipyard headquarters in the Perama Repair Zone, Piraeus, Greece.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Verified Corporate Contact Information (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200 rounded p-6 sm:p-8 space-y-6">
                <div>
                  <p className="text-xs font-mono text-[#1D4ED8] font-medium">
                    Direct Corporate Channels
                  </p>
                  <h2 className="mt-1 font-display text-xl font-bold text-slate-900">
                    Shipyard &amp; Departmental Contacts
                  </h2>
                </div>

                {/* Address */}
                <div className="pt-4 border-t border-slate-200 flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-sm font-bold text-slate-900">
                      Shipyard &amp; Workshops Address
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {COMPANY_INFO.operatingDivision}
                    </p>
                    <p className="text-sm text-slate-700 font-medium">
                      {COMPANY_INFO.location.fullAddress}
                    </p>
                  </div>
                </div>

                {/* Commercial Department */}
                <div className="pt-4 border-t border-slate-200 flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <h3 className="font-display text-sm font-bold text-slate-900">
                      Commercial &amp; Technical Department
                    </h3>
                    <div className="text-xs font-mono text-slate-700 space-y-1">
                      <p>
                        Switchboard:{' '}
                        <a
                          href="tel:+302104410729"
                          className="text-[#1D4ED8] hover:underline font-semibold"
                        >
                          {COMPANY_INFO.contacts.commercialPhonePrimary}
                        </a>{' '}
                        /{' '}
                        <a
                          href="tel:+302104414547"
                          className="text-[#1D4ED8] hover:underline font-semibold"
                        >
                          {COMPANY_INFO.contacts.commercialPhoneSecondary}
                        </a>
                      </p>
                      <p>
                        24/7 Mobile &amp; Voyage Dispatch:{' '}
                        <a
                          href="tel:+306985580737"
                          className="text-[#1D4ED8] hover:underline font-semibold"
                        >
                          {COMPANY_INFO.contacts.mobile24x7Primary}
                        </a>{' '}
                        /{' '}
                        <a
                          href="tel:+306936783852"
                          className="text-[#1D4ED8] hover:underline font-semibold"
                        >
                          {COMPANY_INFO.contacts.mobile24x7Secondary}
                        </a>
                      </p>
                      <p>
                        Email:{' '}
                        <a
                          href={`mailto:${COMPANY_INFO.contacts.commercialEmail}`}
                          className="text-[#1D4ED8] hover:underline"
                        >
                          {COMPANY_INFO.contacts.commercialEmail}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accounting Department */}
                <div className="pt-4 border-t border-slate-200 flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <h3 className="font-display text-sm font-bold text-slate-900">
                      Accounting &amp; Administration Department
                    </h3>
                    <div className="text-xs font-mono text-slate-700 space-y-1">
                      <p>
                        Telephone:{' '}
                        <a
                          href="tel:+302177000389"
                          className="text-[#1D4ED8] hover:underline font-semibold"
                        >
                          {COMPANY_INFO.contacts.accountingPhone}
                        </a>
                      </p>
                      <p>
                        Email:{' '}
                        <a
                          href={`mailto:${COMPANY_INFO.contacts.accountingEmail}`}
                          className="text-[#1D4ED8] hover:underline"
                        >
                          {COMPANY_INFO.contacts.accountingEmail}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="pt-4 border-t border-slate-200 flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h3 className="font-display text-sm font-bold text-slate-900">
                      Shipyard Operating Hours
                    </h3>
                    <p className="text-xs font-mono text-slate-600">
                      {COMPANY_INFO.workingHours.weekdays}
                    </p>
                    <p className="text-xs font-mono text-slate-600">
                      {COMPANY_INFO.workingHours.saturday}
                    </p>
                    <p className="text-xs text-slate-500">
                      {COMPANY_INFO.workingHours.sunday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Perama Repair Zone Interactive Map Embed */}
              <div className="bg-white border border-slate-200 rounded overflow-hidden">
                <div className="px-5 py-3.5 bg-[#0A111E] text-white flex items-center justify-between text-xs font-mono">
                  <span>Perama Repair Zone (Free Zone OLP)</span>
                  <span className="text-[#60A5FA]">37°57&apos;49&quot;N 23°34&apos;05&quot;E</span>
                </div>
                <div className="h-64 w-full bg-slate-100">
                  <iframe
                    title="Hellenic Group Company — Perama Repair Zone, Piraeus Map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=23.5450%2C37.9500%2C23.6000%2C37.9800&layer=mapnik&marker=37.9636%2C23.5681"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Validated Corporate Contact & Tender Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded p-6 sm:p-10">
              <div className="pb-6 border-b border-slate-200">
                <p className="text-xs font-mono text-[#1D4ED8] font-medium">
                  Project Inquiry &amp; Technical Specification Form
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold text-slate-900">
                  Send Us Your Inquiry
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  For further information about shipbuilding, dry-docking, structural repairs, vessel conversions, or BWTS / EGCS scrubber retrofits, complete the form below. Our technical desk will respond promptly.
                </p>
              </div>

              {submittedRef && submittedSnapshot ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-6 p-6 bg-slate-50 border border-slate-300 rounded space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-mono text-slate-500">
                        Inquiry Reference: {submittedRef}
                      </p>
                      <h3 className="font-display text-lg font-bold text-slate-900">
                        Inquiry Logged for Technical Review
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                        Thank you, <strong>{submittedSnapshot.name}</strong> ({submittedSnapshot.company}). Your message regarding <strong>{submittedSnapshot.subject}</strong> has been prepared for our Perama Commercial &amp; Estimating Department.
                      </p>
                    </div>
                  </div>

                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 text-xs">
                    <div>
                      <dt className="text-slate-500">Contact Email</dt>
                      <dd className="font-mono font-medium text-slate-900">{submittedSnapshot.email}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500">Telephone</dt>
                      <dd className="font-mono font-medium text-slate-900">{submittedSnapshot.phone}</dd>
                    </div>
                    {submittedSnapshot.vesselDetails && (
                      <div className="sm:col-span-2">
                        <dt className="text-slate-500">Vessel / Fleet Reference</dt>
                        <dd className="font-mono font-medium text-slate-900">{submittedSnapshot.vesselDetails}</dd>
                      </div>
                    )}
                  </dl>

                  <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
                    <a
                      href={`mailto:${COMPANY_INFO.contacts.commercialEmail}?subject=${encodeURIComponent(
                        `[${submittedRef}] ${submittedSnapshot.subject} — ${submittedSnapshot.company}`
                      )}&body=${encodeURIComponent(
                        `Name: ${submittedSnapshot.name}\nCompany: ${submittedSnapshot.company}\nPhone: ${submittedSnapshot.phone}\nEmail: ${submittedSnapshot.email}\nVessel Details: ${submittedSnapshot.vesselDetails || 'N/A'}\n\nProject Specification / Message:\n${submittedSnapshot.message}`
                      )}`}
                      className="px-4 py-2.5 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded inline-flex items-center justify-center gap-2 transition-colors text-center"
                    >
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <span>Dispatch Direct Email Copy to Commercial Desk</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedRef(null);
                        setSubmittedSnapshot(null);
                      }}
                      className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded transition-colors cursor-pointer text-center"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="e.g. Capt. Nikos Papadopoulos"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'err-name' : undefined}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] ${
                          errors.name ? 'border-red-600' : 'border-slate-300'
                        }`}
                      />
                      {errors.name && (
                        <p id="err-name" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        Company / Fleet Operator <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="e.g. Aegean Maritime Management S.A."
                        aria-invalid={Boolean(errors.company)}
                        aria-describedby={errors.company ? 'err-company' : undefined}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] ${
                          errors.company ? 'border-red-600' : 'border-slate-300'
                        }`}
                      />
                      {errors.company && (
                        <p id="err-company" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.company}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        Corporate Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="technical@shippingcompany.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'err-email' : undefined}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] ${
                          errors.email ? 'border-red-600' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && (
                        <p id="err-email" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        Telephone <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+30 210 ..."
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'err-phone' : undefined}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] ${
                          errors.phone ? 'border-red-600' : 'border-slate-300'
                        }`}
                      />
                      {errors.phone && (
                        <p id="err-phone" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        Subject / Inquiry Scope <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={form.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                      >
                        <option value="Ship Repair & Dry-Docking Inquiry">
                          Ship Repair &amp; Dry-Docking Inquiry
                        </option>
                        <option value="Vessel Conversion & Hull Modification">
                          Vessel Conversion &amp; Hull Modification
                        </option>
                        <option value="NewBuilding Construction (Up to 5,000 DWT)">
                          NewBuilding Construction (Up to 5,000 DWT)
                        </option>
                        <option value="EGCS Scrubber System Installation / Retrofit">
                          EGCS Scrubber System Installation / Retrofit
                        </option>
                        <option value="BWTS Installation & IMO D-2 LuminUltra Testing">
                          BWTS Installation &amp; IMO D-2 LuminUltra Testing
                        </option>
                        <option value="GRE / SMO / Inox Piping & Steel Fabrication">
                          GRE / SMO / Inox Piping &amp; Steel Fabrication
                        </option>
                        <option value="Accounting & General Administration">
                          Accounting &amp; General Administration
                        </option>
                      </select>
                    </div>

                    {/* Optional Vessel Name / IMO / DWT */}
                    <div>
                      <label
                        htmlFor="contact-vessel"
                        className="block text-xs font-semibold text-slate-800 mb-1.5"
                      >
                        Vessel Name / IMO / Dimensions (Optional)
                      </label>
                      <input
                        id="contact-vessel"
                        name="vesselDetails"
                        type="text"
                        value={form.vesselDetails}
                        onChange={(e) => handleChange('vesselDetails', e.target.value)}
                        placeholder="e.g. M/V Example · LOA 190m · Beam 30m"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      Project Specification / Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Describe the required repair scope, target dry-docking window in Piraeus/Perama, conversion parameters, or BWTS/EGCS retrofit requirements..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'err-message' : undefined}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] ${
                        errors.message ? 'border-red-600' : 'border-slate-300'
                      }`}
                    />
                    {errors.message && (
                      <p id="err-message" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                      Direct Commercial Desk:{' '}
                      <span className="font-mono text-slate-700">
                        {COMPANY_INFO.contacts.commercialEmail}
                      </span>
                    </p>
                    <button
                      type="submit"
                      className="px-6 py-3 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Project Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
