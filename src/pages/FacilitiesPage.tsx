import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  DRY_DOCK_FACILITIES,
  COMPANY_INFO,
  PageRoute,
} from '../data/companyData';
import { MaritimeImage } from '../components/MaritimeImage';

interface FacilitiesPageProps {
  onNavigate: (page: PageRoute, capabilitySlug?: string | null) => void;
}

const WORKSHOP_DIVISIONS = [
  {
    code: 'WS-01',
    title: 'Robotic Plate-Cutting & Heavy Steel Fabrication Shop',
    area: 'Perama Shipyard (6,000 m² Sheltered & Open Total)',
    equipment: 'CNC / Robotic Plate-Cutting Systems, Automated Welding Robots, Overhead Gantry Cranes',
    description:
      'High-precision cutting, beveling, and sub-assembly welding of marine-grade hull plates, double-bottom floors, longitudinal stiffeners, new deck sections, and funnel "backpack" extensions.',
    image: '/assets/hsi/cutting-stiffeners.jpg',
    imageAlt: 'Cutting stiffeners and hull steel fabrication at Perama shipyard',
  },
  {
    code: 'WS-02',
    title: 'In-House EGCS Scrubber Body & Process Tank Manufacturing Bay',
    area: 'Perama Repair Zone, Piraeus',
    equipment: 'High-Alloy SMO & Stainless Steel Rolling, TIG/MIG Orbital Welding, Non-Destructive Testing (NDT)',
    description:
      'Dedicated production line manufacturing Exhaust Gas Cleaning System (EGCS) scrubber towers, process tanks, and sea-chest pump foundations directly in Perama to guarantee metallurgical integrity and corrosion resistance.',
    image: '/assets/hsi/scrubber-process-tank.jpg',
    imageAlt: 'Scrubber process tank manufactured at HSI Perama facility',
  },
  {
    code: 'WS-03',
    title: 'GRE, SMO Alloy, Inox & Carbon Steel Piping Prefabrication Shop',
    area: 'Perama Repair Zone, Piraeus',
    equipment: 'Isometric Spool Prefabrication, Certified GRE Lamination & Bonding, Hydrostatic Pressure Testing up to DN200+',
    description:
      'Specialized marine piping workshop processing Glass-Reinforced Epoxy (GRE), corrosion-resistant SMO austenitic alloys, stainless steel (Inox), and heavy-wall carbon steel piping for BWTS, scrubber, ballast, and cargo systems.',
    image: '/assets/hsi/gre-piping.jpg',
    imageAlt: 'GRE and carbon steel marine piping workshop at Perama shipyard',
  },
  {
    code: 'WS-04',
    title: '3D Laser Scanning, Naval Architecture & BWMS LuminUltra Testing Unit',
    area: 'Perama Engineering Office & Mobile Onboard Deployment',
    equipment: '3D Shipboard Laser Scanners (with Studio Navale), 2D/3D CAD Workstations, LuminUltra Biological Testing Kit',
    description:
      'Provides 3D point-cloud scanning of confined engine rooms, stability & class approval packages, and onboard IMO BWM.2/Circ.70/Rev.1 D-2 biological commissioning testing for Ballast Water Management Systems.',
    image: '/assets/hsi/bwts-system-2.jpg',
    imageAlt: 'Onboard Ballast Water Treatment System and engineering inspection',
  },
];

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F8FAFC]">
      {/* Page Hero */}
      <section className="bg-[#0A111E] text-white border-b border-slate-800 py-16 lg:py-24">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#60A5FA] mb-4">
                <span>Shipyard Infrastructure &amp; Dry Docks</span>
                <span aria-hidden="true">·</span>
                <span>{COMPANY_INFO.location.zone}</span>
                <span aria-hidden="true">·</span>
                <span>Up to Panamax Capacity</span>
              </div>
              <h1
                className="font-display font-bold text-white tracking-tight leading-tight"
                style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
              >
                Shipyard Facilities &amp; Dry-Docking Infrastructure
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                Hellenic Group Company operates <strong>6,000 m² of sheltered and open shipyard space</strong> in Perama equipped with robotic plate-cutting and automated welding systems, complemented by direct operational access to <strong>five dry docks</strong> (up to 240 m / 22,000 tons lifting capacity) and repair berths in cooperation with <strong>Piraeus Port Authority (OLP S.A.)</strong>.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Check Dock &amp; Berth Availability</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Five Dry Docking Facilities (OLP S.A. Cooperation) */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono text-[#1D4ED8] font-medium tracking-wide">
              01. Dry Docking Facilities — In Cooperation with Piraeus Port Authority (OLP S.A.)
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Three Floating Dry Docks &amp; Two Permanent Graving Docks
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Through our established cooperation with Piraeus Port Authority (OLP S.A.), Hellenic Shipbuilding Industry undertakes dry-docking, underwater hull treatment, tailshaft/rudder works, and major structural conversions across five fully equipped docks in the Perama Repair Zone and Akti Vasileiadi, Drapetsona.
            </p>
          </div>

          {/* Aerial Visual + Summary Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
            <div className="lg:col-span-7">
              <MaritimeImage
                src="/assets/hsi/hero-shipyard-aerial.jpg"
                alt="Floating dry docks and repair berths in Perama Repair Zone, Piraeus"
                className="w-full h-full min-h-[320px] object-cover"
                containerClassName="w-full h-full rounded border border-slate-200 overflow-hidden bg-[#0A111E]"
                caption="Floating Dry Docks Piraeus I, II & III · Perama Repair Zone (Up to 240 m Length / 22,000 t)"
              />
            </div>

            <div className="lg:col-span-5 bg-[#0A111E] text-white rounded border border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-xs font-mono text-[#60A5FA]">
                  Comparative Dimensional Scale (Max 240 m Panamax)
                </p>
                <h3 className="font-display text-lg font-bold">
                  Dock Length &amp; Lifting Capacity Profile
                </h3>

                <div className="space-y-4 pt-2">
                  {DRY_DOCK_FACILITIES.map((dock) => {
                    const widthPct = Math.round((dock.lengthMeters / 240) * 100);
                    return (
                      <div key={dock.id} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-200 font-medium">
                            {dock.name}
                          </span>
                          <span className="text-[#60A5FA] tabular-nums">
                            {dock.lengthMeters} m × {dock.internalWidthMeters} m
                            {dock.liftingCapacityTons
                              ? ` · ${dock.liftingCapacityTons.toLocaleString()} t`
                              : ''}
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-xs overflow-hidden">
                          <div
                            className="h-full bg-[#3B82F6]"
                            style={{ width: `${widthPct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 text-xs text-slate-400 font-mono">
                All docks supported by heavy portal crane infrastructure, shore power, and high-pressure hydroblasting lines.
              </div>
            </div>
          </div>

          {/* Individual Engineering Specification Cards for Each Dock */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DRY_DOCK_FACILITIES.map((dock, idx) => (
              <div
                key={dock.id}
                className="bg-[#F8FAFC] border border-slate-200 rounded p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span className="text-[#1D4ED8] font-semibold">
                      DOCK 0{idx + 1} · {dock.type.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-slate-900">
                    {dock.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-mono text-slate-500">
                    {dock.zone}
                  </p>

                  <dl className="mt-5 divide-y divide-slate-200 border-y border-slate-200 text-xs">
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-slate-500">Overall Length</dt>
                      <dd className="font-mono font-semibold text-slate-900 tabular-nums">
                        {dock.lengthMeters} m
                      </dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-slate-500">Internal Width</dt>
                      <dd className="font-mono font-semibold text-slate-900 tabular-nums">
                        {dock.internalWidthMeters} m
                      </dd>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <dt className="text-slate-500">Lifting Capacity</dt>
                      <dd className="font-mono font-semibold text-[#1D4ED8] tabular-nums">
                        {dock.liftingCapacityTons
                          ? `${dock.liftingCapacityTons.toLocaleString()} Tons`
                          : 'Permanent Graving Dock'}
                      </dd>
                    </div>
                    <div className="py-2.5 flex justify-between gap-4">
                      <dt className="text-slate-500 shrink-0">Vessel Support</dt>
                      <dd className="font-medium text-slate-800 text-right">
                        {dock.vesselClassSupport}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                    {dock.notes}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 text-[11px] font-mono text-slate-500">
                  {dock.operator}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Perama Shipyard & Industrial Workshops (6,000 m²) */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono text-[#1D4ED8] font-medium tracking-wide">
              02. Perama Shipyard &amp; Robotic Workshops (6,000 m²)
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Automated Steel Processing, Scrubber Fabrication &amp; Piping Shops
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Located in the Free Zone OLP of Perama, our 6,000 m² of sheltered and open workshops house specialized robotic plate-cutting lines, automated welding stations, and dedicated non-metallic (GRE) and high-alloy (SMO / Inox) piping bays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORKSHOP_DIVISIONS.map((ws) => (
              <article
                key={ws.code}
                className="bg-white border border-slate-200 rounded overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="h-60">
                    <MaritimeImage
                      src={ws.image}
                      alt={ws.imageAlt}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full bg-[#0A111E]"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <span className="text-[#1D4ED8] font-semibold">{ws.code}</span>
                      <span aria-hidden="true">·</span>
                      <span>{ws.area}</span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-bold text-slate-900">
                      {ws.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {ws.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 py-4 bg-slate-50 border-t border-slate-200 text-xs font-mono text-slate-600">
                  <strong className="text-slate-900">Equipment:</strong> {ws.equipment}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
