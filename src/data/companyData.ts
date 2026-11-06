export type PageRoute =
  | 'home'
  | 'about'
  | 'capabilities'
  | 'facilities'
  | 'projects'
  | 'contact';

export interface CapabilityItem {
  id: string;
  index: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  overview: string[];
  services: string[];
  technicalSpecs: { label: string; value: string }[];
  facilitiesUsed: string[];
  heroImage: string;
  secondaryImage: string;
  imageAlt: string;
  brochureUrl?: string;
}

export interface DryDockSpec {
  id: string;
  name: string;
  type: 'Floating Dry Dock' | 'Permanent Graving Dock';
  zone: 'Perama Repair Zone' | 'Akti Vasileiadi, Drapetsona';
  operator: string;
  lengthMeters: number;
  internalWidthMeters: number;
  liftingCapacityTons: number | null;
  vesselClassSupport: string;
  notes: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Repairs & Steelworks' | 'Conversions' | 'Shipbuilding' | 'EGCS Scrubbers' | 'BWTS & Piping';
  location: string;
  vesselType: string;
  summary: string;
  technicalScope: string[];
  metrics: { label: string; value: string }[];
  image: string;
  secondaryImage?: string;
  imageAlt: string;
  relatedCapabilityId: string;
}

export interface CertificationItem {
  standard: string;
  title: string;
  certificateNumber: string;
  accreditationBody: string;
  scope: string;
  certificateImage: string;
}

export interface CorporateBrochure {
  title: string;
  subtitle: string;
  date: string;
  format: string;
  fileUrl: string;
}

export const COMPANY_INFO = {
  brandName: 'Hellenic Group Company',
  canonicalDomain: 'https://hellenicgroupcompany.com',
  domainName: 'hellenicgroupcompany.com',
  operatingDivision: 'Hellenic Shipbuilding Industry Ltd. (HSI)',
  tagline: 'Maritime Engineering, Shipbuilding, Ship Repair & Industrial Retrofits',
  positioningStatement:
    'Delivering heavy ship repairs, complex vessel conversions, commercial newbuildings up to 5,000 DWT, and turnkey environmental retrofits from Greece’s premier maritime hub in Perama, Piraeus.',
  establishedNewbuildingYear: 1996,
  conversionHeritageYears: '50+ Years',
  location: {
    zone: 'Free Zone OLP, Perama Repair Zone',
    postalCode: 'GR-188 63',
    city: 'Perama, Piraeus',
    country: 'Greece',
    fullAddress: 'Free Zone OLP, Perama Repair Zone, 18863 Perama, Piraeus – Greece',
    coordinates: { lat: 37.9636, lng: 23.5681 },
  },
  contacts: {
    commercialPhonePrimary: '+30 210 4410 729',
    commercialPhoneSecondary: '+30 210 4414 547',
    mobile24x7Primary: '+30 6985 580 737',
    mobile24x7Secondary: '+30 6936 783 852',
    accountingPhone: '+30 217 7000 389',
    commercialEmail: 'contact@hellenicshipbuildingind.com',
    accountingEmail: 'info@hellenicshipbuildingind.com',
    groupEmails: {
      general: 'info@hellenicgroupcompany.com',
      commercial: 'sales@hellenicgroupcompany.com',
    },
  },
  workingHours: {
    weekdays: 'Monday – Friday: 08:00 – 17:30 EET',
    saturday: 'Saturday: 08:00 – 17:30 EET',
    sunday: 'Sunday: Closed (24/7 Voyage & Emergency Repair Dispatch Available)',
  },
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/hellenic-shipbuilding-industry-ltd',
    instagram: 'https://www.instagram.com/hellenic_shipbuilding_industry',
    facebook: 'https://www.facebook.com/HellenicShipbuildingIndustry',
    sourceSite: 'https://hellenicshipbuildingind.com',
  },
  legal: {
    greekLegalName: 'HELLENIC GROUP COMPANY ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.',
    englishLegalName: 'HELLENIC GROUP COMPANY SINGLE MEMBER P.C.',
    gemi: '188951108000',
    vat: '803081823',
    registeredOfficeGreek: 'ΣΤΕΦΑΝΟΥ ΣΑΡΑΦΗ 21, ΕΛΕΥΣΙΝΑΣ / ΔΥΤΙΚΗΣ ΑΤΤΙΚΗΣ, 19200',
    registeredOfficeEnglish: 'Stefanou Sarafi 21, Elefsina, West Attica, 19200, Greece',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=ΣΤΕΦΑΝΟΥ+ΣΑΡΑΦΗ+21+ΕΛΕΥΣΙΝΑ+19200',
  },
};

export const KEY_METRICS = [
  {
    value: '50+',
    unit: 'Years',
    label: 'Combined Shipbuilding & Conversion Heritage',
    detail: 'Proven naval engineering know-how across commercial and specialized fleets',
  },
  {
    value: '1996',
    unit: 'Est.',
    label: 'NewBuilding Construction Division',
    detail: 'Medium-sized commercial vessels, Ro-Ro ships, ferries, and tankers up to 5,000 DWT',
  },
  {
    value: '6,000',
    unit: 'm²',
    label: 'Perama Shipyard & Workshop Space',
    detail: 'Sheltered and open fabrication facilities with robotic plate-cutting and welding',
  },
  {
    value: '5',
    unit: 'Dry Docks',
    label: 'In Cooperation with OLP S.A. (P.P.A.)',
    detail: '3 floating dry docks and 2 permanent graving docks up to Panamax size (240 m / 22,000 t)',
  },
];

export const GROUP_DIVISIONS = [
  {
    name: 'Hellenic Shipbuilding Industry Ltd. (HSI)',
    role: 'Core Shipyard, NewBuilding, Conversion & Heavy Repair Operations',
    location: 'Free Zone OLP, Perama Repair Zone, Piraeus',
    description:
      'Operates 6,000 m² of sheltered and open shipyard workshops in Perama equipped with automated robotic plate-cutting and welding systems. Executes full-scale ship repairs, steel renewals, vessel conversions, and commercial newbuildings up to 5,000 DWT.',
    highlights: [
      'ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 Certified by LRQA Hellas S.A.',
      'In-house fabrication of Exhaust Gas Cleaning System (EGCS) scrubber towers',
      'GRE, SMO alloy, Inox (stainless steel), and carbon steel marine piping workshops',
    ],
  },
  {
    name: 'Piraeus Port Authority (OLP S.A. / P.P.A.) Docking Cooperation',
    role: 'Strategic Dry-Docking & Repair Berth Infrastructure Access',
    location: 'Perama Repair Zone & Akti Vasileiadi, Drapetsona',
    description:
      'Through established operational cooperation with Piraeus Port Authority (OLP S.A.), Hellenic Group Company deploys repair teams across five fully equipped dry docks (three floating docks and two permanent graving docks) and repair berths in Drapetsona.',
    highlights: [
      'Accommodates commercial vessels up to Panamax dimensions (240 m length, 35 m width)',
      'Floating dock lifting capacities up to 22,000 metric tons (Piraeus III)',
      'Supported by heavy portal crane infrastructure and deep-water repair quays',
    ],
  },
  {
    name: 'Turnkey Naval Engineering & EGCS Alliance (with Studio Navale)',
    role: '3D Laser Scanning, Naval Architecture & Turnkey Retrofit Engineering',
    location: 'Piraeus & International On-Voyage Deployment',
    description:
      'In technical partnership with Studio Navale, Hellenic Group Company delivers end-to-end naval architecture, 3D shipboard laser scanning, feasibility studies, class approval packages, and turnkey EGCS scrubber and BWTS installations.',
    highlights: [
      'High-precision 3D scanning of confined engine rooms and casings',
      '2D/3D engineering plans, stability calculations, and as-built class documentation',
      'On-site supervision and continuous progress reporting for fleet owners',
    ],
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'ship-repairs-steelworks',
    index: '01',
    slug: 'ship-repairs-steelworks',
    title: 'Ship Repairs & Structural Steelworks',
    shortTitle: 'Repairs & Steelworks',
    category: 'Ship Repair & Maintenance',
    summary:
      'Comprehensive hull, structural steel, piping, mechanical, electrical, and surface treatment repairs executed in dry dock, alongside repair berths, or during voyage with minimal vessel downtime.',
    overview: [
      'Hellenic Group Company (through Hellenic Shipbuilding Industry Ltd.) has completed hundreds of ship repair projects across all vessel classes—ranging from commercial cargo ships, bulk carriers, and tankers to passenger ferries, offshore units, and luxury yachts.',
      'Our Perama workshops and mobile riding squads cover the complete repair spectrum: from heavy collision steel renewals, inner-bottom tank top replacements, and sea-chest foundation fabrication to complex mechanical, boiler, electrical, and accommodation refits.',
      'By combining robotic plate-cutting automation with certified welders and disciplined project management, we guarantee short lead times, class-approved weld integrity, and strict adherence to redelivery schedules.',
    ],
    services: [
      'Certified structural steel renewals, side-shell collision repairs, and stiffener fabrication',
      'Inner-bottom / double-bottom steel replacement and sea-chest pump foundation construction',
      'Plate and piping fabrication in carbon steel, GRE, SMO alloys, and stainless steel (Inox)',
      'Hydroblasting, grit-blasting, marine painting, tank coating, and specialized tank cleaning',
      'Mechanical overhauls, marine boilers, thermal insulation, and electrical workshop works',
      'Interior accommodation repair, refit, and emergency port or on-voyage repairs',
    ],
    technicalSpecs: [
      { label: 'Workshop Footprint', value: '6,000 m² Sheltered & Open (Perama)' },
      { label: 'Steel Processing', value: 'Robotic Plate-Cutting & Certified Welding' },
      { label: 'Piping Materials', value: 'Carbon Steel, GRE, SMO Alloys, Inox' },
      { label: 'Deployment Modes', value: 'Dry Dock · Repair Berth · On-Voyage' },
    ],
    facilitiesUsed: [
      'Perama Repair Zone Sheltered Steel & Piping Workshops (6,000 m²)',
      'Five OLP S.A. Floating & Permanent Dry Docks (up to 240 m / 22,000 t)',
      'Drapetsona Deep-Water Repair Berths & Heavy Crane Quays',
    ],
    heroImage: '/assets/hsi/side-shell-repair-completed.jpg',
    secondaryImage: '/assets/hsi/side-shell-repair-progress.jpg',
    imageAlt: 'Completed structural side-shell steel repair on commercial vessel at Perama shipyard',
    brochureUrl: '/assets/hsi/HSI-Corporate-Presentation-Nov2025.pdf',
  },
  {
    id: 'vessel-conversions',
    index: '02',
    slug: 'vessel-conversions',
    title: 'Vessel Conversions & Major Modifications',
    shortTitle: 'Vessel Conversions',
    category: 'Structural Conversions',
    summary:
      'Over 50 years of specialized engineering heritage in complex ship conversions, structural hull lengthening, new deck constructions, and mission-profile transformations.',
    overview: [
      'With more than five decades of cumulative conversion know-how, Hellenic Group Company is one of Greece’s premier centers for structural vessel transformations and commercial life-extension engineering.',
      'Our engineering and production teams have successfully executed high-complexity conversions including transforming cable-laying vessels into pipe-laying vessels, upgrading single-hull tankers into MARPOL-compliant double-hull tankers, and converting Roll-On/Roll-Off (Ro-Ro) cargo ships into Ro-Ro passenger ferries.',
      'Every conversion is backed by in-house naval architecture, 2D/3D structural modeling, class compliance engineering, and dedicated project management from concept feasibility through sea trials.',
    ],
    services: [
      'Conversion of cable-laying vessels into offshore pipe-laying vessels',
      'Upgrading single-hull tankers to double-hull tankers with full inner-hull fabrication',
      'Transformation of Ro-Ro cargo vessels into Ro-Ro passenger (Ro-Pax) vessels',
      'Vessel length extensions (mid-body lengthening) and major hull geometry modifications',
      'Construction and integration of new structural decks, ramps, and superstructures',
      'Complete naval architecture, stability reassessment, and classification society approval support',
    ],
    technicalSpecs: [
      { label: 'Conversion Heritage', value: '50+ Years Track Record' },
      { label: 'Tanker Upgrades', value: 'Single-Hull to Double-Hull Retrofits' },
      { label: 'Ro-Ro Transformations', value: 'Cargo to Ro-Pax Passenger Vessels' },
      { label: 'Offshore Conversions', value: 'Cable-Laying to Pipe-Laying Vessels' },
    ],
    facilitiesUsed: [
      'Perama Heavy Structural Steel Prefabrication Bays',
      'Panamax Floating Dry Dock Piraeus III (240 m × 35 m, 22,000 t lifting capacity)',
      'In-house Naval Architecture & 2D/3D CAD Engineering Office',
    ],
    heroImage: '/assets/hsi/agios-nikolaos-1.jpg',
    secondaryImage: '/assets/hsi/inner-bottom-replacement.jpg',
    imageAlt: 'Vessel undergoing structural conversion and dry-dock modification in Perama, Piraeus',
    brochureUrl: '/assets/hsi/HSI-Corporate-Presentation-Nov2025.pdf',
  },
  {
    id: 'newbuildings',
    index: '03',
    slug: 'newbuildings',
    title: 'NewBuilding & Custom Vessel Construction',
    shortTitle: 'NewBuildings',
    category: 'Shipbuilding',
    summary:
      'End-to-end design, licensing, steel construction, outfitting, and delivery of customized commercial vessels, Ro-Ro ships, ferries, tankers, tugboats, and offshore platforms up to 5,000 DWT.',
    overview: [
      'Founded by naval professionals with over 50 years of shipbuilding expertise, Hellenic Shipbuilding Industry entered the commercial NewBuilding sector in 1996 with a clear mandate: delivering complete, custom-engineered vessel constructions on schedule and within budget.',
      'Since 1996, our yard has specialized in building medium-sized commercial vessels up to 5,000 DWT, encompassing Ro-Ro passenger and cargo ferries, coastal tankers, tugboats, luxury yachts, and specialized offshore platforms.',
      'Our Perama facility incorporates high-level automation—including robotic plate cutting and welding robots—yielding superior weld consistency, shortened building timelines, and full compliance with international classification standards.',
    ],
    services: [
      'Turnkey newbuilding construction for commercial vessels up to 5,000 DWT',
      'Custom construction of Ro-Ro ferries, coastal tankers, tugboats, and workboats',
      'Yacht hull construction, superstructure fabrication, and offshore platform modules',
      'Initial planning, naval architectural design, licensing, and classification society approvals',
      'Robotic plate cutting, automated sub-assembly welding, and block erection',
      'Complete mechanical propulsion, piping, electrical, BWTS, and outfitting integration',
    ],
    technicalSpecs: [
      { label: 'NewBuilding Division', value: 'Active Since 1996' },
      { label: 'Maximum Vessel Size', value: 'Up to 5,000 DWT' },
      { label: 'Vessel Types', value: 'Ro-Ro, Ferries, Tankers, Tugs, Yachts, Offshore' },
      { label: 'Production Tech', value: 'Robotic Plate-Cutting & Automated Welding' },
    ],
    facilitiesUsed: [
      'Perama Automated Shipbuilding & Block Assembly Facility',
      'Robotic Cutting & Welding Production Lines',
      'Perama Waterfront Launching & Outfitting Quays',
    ],
    heroImage: '/assets/hsi/hero-shipyard-aerial.jpg',
    secondaryImage: '/assets/hsi/agios-nikolaos-8.jpg',
    imageAlt: 'Commercial vessel construction and shipyard operations in Perama, Greece',
    brochureUrl: '/assets/hsi/HSI-Corporate-Presentation-Nov2025.pdf',
  },
  {
    id: 'scrubber-systems-egcs',
    index: '04',
    slug: 'scrubber-systems-egcs',
    title: 'Exhaust Gas Cleaning Systems (EGCS / Scrubbers)',
    shortTitle: 'EGCS Scrubber Systems',
    category: 'Environmental Retrofits',
    summary:
      'In-house scrubber body manufacturing in Perama and turnkey EGCS installation—including 3D scanning, funnel "backpack" extensions, GRE/SMO piping, pump rooms, and automation—at berth, in dock, or during voyage.',
    overview: [
      'Hellenic Group Company is one of the leading marine engineering organizations in the Mediterranean undertaking complete prefabrication, installation, and retrofitting of Exhaust Gas Cleaning Systems (EGCS / Scrubbers)—whether in dry dock, alongside the repair berth, or while the vessel is on voyage.',
      'Crucially, scrubber bodies and process tanks are manufactured directly at our facility in Perama, Greece. Controlling the in-house fabrication process, specialized metallurgy (SMO alloys, stainless steel), and welding quality is critical to preventing acidic exhaust gas corrosion.',
      'In partnership with Studio Navale, we offer turnkey EGCS packages starting from 3D laser scanning of engine rooms and feasibility studies through class approval, "backpack" funnel extension prefabrication, secondary machinery (pumps, blowers, heat exchangers, process tanks), electrical control panels, and final commissioning.',
    ],
    services: [
      'In-house manufacturing of scrubber towers and process tanks at our Perama facility',
      'Turnkey EGCS engineering in partnership with Studio Navale (3D scanning, feasibility, class plans)',
      'Prefabrication and installation of "backpack" funnel extensions and structural casings',
      'Fabrication and installation of corrosion-resistant GRE, SMO alloy, and stainless steel piping',
      'New pump room construction, sea-chest modifications, blowers, valves, and heat exchangers',
      'EGCS electrical control panel and PLC automation integration with minimal vessel downtime',
    ],
    technicalSpecs: [
      { label: 'Tower Fabrication', value: 'Manufactured In-House (Perama, Greece)' },
      { label: 'Specialized Piping', value: 'GRE, SMO Alloys & Marine Stainless Steel' },
      { label: 'Engineering Partner', value: 'Turnkey 3D Scanning with Studio Navale' },
      { label: 'Installation Options', value: 'Dry Dock · Alongside Berth · On-Voyage' },
    ],
    facilitiesUsed: [
      'Perama Scrubber Body & Process Tank Manufacturing Shop',
      'GRE & High-Alloy SMO Welding Workshops',
      'Mobile Voyage Riding Teams & Electrical Automation Workshops',
    ],
    heroImage: '/assets/hsi/scrubber-process-tank.jpg',
    secondaryImage: '/assets/hsi/scrubber-pump-room.jpg',
    imageAlt: 'Exhaust Gas Cleaning System scrubber process tank and pump room installation by HSI',
    brochureUrl: '/assets/hsi/HSI-Scrubber-Technical-Brochure.pdf',
  },
  {
    id: 'ballast-water-treatment-bwts',
    index: '05',
    slug: 'ballast-water-treatment-bwts',
    title: 'Ballast Water Treatment Systems (BWTS & BWMS Testing)',
    shortTitle: 'BWTS & Commissioning',
    category: 'Environmental Retrofits',
    summary:
      'Turnkey engineering, prefabrication, onboard installation, and mandatory IMO BWM.2/Circ.70/Rev.1 D-2 biological commissioning testing (using LuminUltra equipment) for Type-Approved BWTS.',
    overview: [
      'Hellenic Shipbuilding Industry is one of Greece’s foremost providers of Ballast Water Treatment System (BWTS) retrofits and newbuild integrations, backed by multi-vessel fleet agreements with prominent international shipping companies.',
      'Because existing vessels were rarely designed with dedicated space or power margins for ballast water treatment units, our engineering teams custom-adapt every retrofit to the vessel’s actual pump room and engine room constraints—prefabricating sea-chest pump foundations, filters, UV/electrochlorination skids, and GRE/carbon steel piping spools in advance.',
      'To fulfill the IMO Ballast Water Management Convention D-2 standard and BWM.2/Circ.70/Rev.1 requirements for obtaining the International Ballast Water Management Certificate, HSI performs certified onboard BWMS Commissioning Testing using calibrated LuminUltra equipment.',
    ],
    services: [
      '3D onboard space verification, power load integration, and retrofit engineering for existing fleets',
      'Prefabrication of BWTS skids, sea-chest pump foundations, and interconnecting piping spools',
      'Turnkey onboard installation of Type-Approved BWTS units across tankers, bulkers, and cargo ships',
      'Electrical power supply, control cabinet integration, and valve actuator wiring',
      'Official onboard BWMS Commissioning Testing per IMO BWM.2/Circ.70/Rev.1',
      'Biological compliance analysis using LuminUltra equipment and official D-2 Test Report issuance',
    ],
    technicalSpecs: [
      { label: 'Regulatory Standard', value: 'IMO BWM Convention D-2 Standard' },
      { label: 'Testing Protocol', value: 'BWM.2/Circ.70/Rev.1 Compliant' },
      { label: 'Diagnostic Equipment', value: 'Onboard LuminUltra Biological Testing' },
      { label: 'Certification Output', value: 'Intl. Ballast Water Management Certificate' },
    ],
    facilitiesUsed: [
      'Perama Pipe Spool & Foundation Prefabrication Workshop',
      'Mobile BWMS LuminUltra Commissioning & Testing Unit',
      'Perama & Drapetsona Repair Berths',
    ],
    heroImage: '/assets/hsi/bwts-system.jpg',
    secondaryImage: '/assets/hsi/bwts-install-1.jpg',
    imageAlt: 'Ballast Water Treatment System installation and commissioning testing aboard commercial vessel',
    brochureUrl: '/assets/hsi/HSI-Corporate-Presentation-Nov2025.pdf',
  },
  {
    id: 'naval-architecture-piping',
    index: '06',
    slug: 'naval-architecture-piping',
    title: 'Naval Architecture, 3D Design & Specialized Piping',
    shortTitle: 'Engineering & Piping',
    category: 'Marine & Industrial Engineering',
    summary:
      'Complete 2D/3D naval architecture, 3D laser scanning, class approval documentation, work progress reporting, and industrial prefabrication of GRE, SMO, Inox, and carbon steel piping networks.',
    overview: [
      'Every successful maritime construction, conversion, or environmental retrofit begins with rigorous engineering. Hellenic Group Company maintains an integrated naval architecture and marine engineering department capable of handling complex 2D/3D design, stability assessments, and classification society submissions.',
      'Complementing our design office, our Perama industrial workshops specialize in high-specification plate and piping fabrication—routinely processing Glass-Reinforced Epoxy (GRE), high-molybdenum SMO austenitic stainless steel, Inox, and high-pressure carbon steel piping up to DN200+ diameters.',
      'Clients receive transparent, continuous work-progress reporting, detailed repair specifications, and complete as-built documentation at project handover.',
    ],
    services: [
      'Naval architecture, 2D & 3D structural and piping plans, and isometric spool drawings',
      '3D laser scanning of engine rooms, pump rooms, and funnels for clash-free retrofit modeling',
      'Technical drafting, repair specifications, and complete as-built documentation packages',
      'Continuous project monitoring, quality control inspections, and scheduled client progress reports',
      'Engineering liaison and documentation for all major Marine Classification Societies',
      'Workshop prefabrication & onboard installation of GRE, SMO, Inox, and Carbon Steel piping',
    ],
    technicalSpecs: [
      { label: 'CAD & Scanning', value: '3D Laser Scanning & 2D/3D Naval Plans' },
      { label: 'Non-Metallic Piping', value: 'GRE (Glass-Reinforced Epoxy) Certified' },
      { label: 'Metallic Alloys', value: 'SMO 254, Stainless Inox, Carbon Steel' },
      { label: 'Documentation', value: 'Class Approvals, Specs & As-Built Reports' },
    ],
    facilitiesUsed: [
      'Perama Naval Architecture & CAD Engineering Department',
      'Dedicated GRE, SMO & Carbon Steel Pipe Prefabrication Shop',
      'Non-Destructive Testing (NDT) & Hydrostatic Pressure Testing Bay',
    ],
    heroImage: '/assets/hsi/gre-piping.jpg',
    secondaryImage: '/assets/hsi/carbon-steel-piping.jpg',
    imageAlt: 'GRE and carbon steel marine piping prefabrication and engineering by Hellenic Shipbuilding Industry',
    brochureUrl: '/assets/hsi/HSI-Scrubber-Technical-Brochure.pdf',
  },
];

export const DRY_DOCK_FACILITIES: DryDockSpec[] = [
  {
    id: 'piraeus-iii',
    name: 'Floating Dock “Piraeus III”',
    type: 'Floating Dry Dock',
    zone: 'Perama Repair Zone',
    operator: 'In Cooperation with Piraeus Port Authority (OLP S.A.)',
    lengthMeters: 240,
    internalWidthMeters: 35,
    liftingCapacityTons: 22000,
    vesselClassSupport: 'Up to Panamax Size Vessels',
    notes: 'Heavy portal crane infrastructure, full shore power, high-pressure hydroblasting and hull treatment access.',
  },
  {
    id: 'piraeus-i',
    name: 'Floating Dock “Piraeus I”',
    type: 'Floating Dry Dock',
    zone: 'Perama Repair Zone',
    operator: 'In Cooperation with Piraeus Port Authority (OLP S.A.)',
    lengthMeters: 202,
    internalWidthMeters: 31,
    liftingCapacityTons: 15000,
    vesselClassSupport: 'Handymax / Supramax & Medium Commercial Vessels',
    notes: 'Equipped with dual wing-wall cranes and direct logistics access from HSI Perama workshops.',
  },
  {
    id: 'piraeus-ii',
    name: 'Floating Dock “Piraeus II”',
    type: 'Floating Dry Dock',
    zone: 'Perama Repair Zone',
    operator: 'In Cooperation with Piraeus Port Authority (OLP S.A.)',
    lengthMeters: 113,
    internalWidthMeters: 18,
    liftingCapacityTons: 4000,
    vesselClassSupport: 'Coastal Tankers, Ro-Ro Ferries, Tugs & Yachts',
    notes: 'Ideal for rapid turnaround dry-dockings, tailshaft/rudder works, and hull conversions.',
  },
  {
    id: 'drapetsona-large',
    name: 'Large Permanent Dry Dock',
    type: 'Permanent Graving Dock',
    zone: 'Akti Vasileiadi, Drapetsona',
    operator: 'In Cooperation with Piraeus Port Authority (OLP S.A.)',
    lengthMeters: 140,
    internalWidthMeters: 18.5,
    liftingCapacityTons: null,
    vesselClassSupport: 'Medium Commercial Ships, Passenger Ferries & Special Purpose Vessels',
    notes: 'Permanent concrete graving dock in Drapetsona suitable for extended structural conversions and bottom steel renewals.',
  },
  {
    id: 'drapetsona-small',
    name: 'Small Permanent Dry Dock',
    type: 'Permanent Graving Dock',
    zone: 'Akti Vasileiadi, Drapetsona',
    operator: 'In Cooperation with Piraeus Port Authority (OLP S.A.)',
    lengthMeters: 85,
    internalWidthMeters: 12.5,
    liftingCapacityTons: null,
    vesselClassSupport: 'Tugboats, Workboats, Megayachts & Coastal Craft',
    notes: 'Permanent graving dock supporting specialized repairs, shafting, and hull coatings.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'mv-agios-nikolaos-drydock',
    title: 'M/V Agios Nikolaos — Dry-Docking, Hull Treatment & Overhaul',
    category: 'Repairs & Steelworks',
    location: 'Perama Repair Zone, Piraeus',
    vesselType: 'Commercial Bulk / Cargo Vessel',
    summary:
      'Complete dry-docking overhaul in floating dock including high-pressure hydroblasting, anti-corrosion hull coating application, sea-chest grating & valve overhaul, and structural steel inspections.',
    technicalScope: [
      'Full dry-docking blocks arrangement and hull surface preparation in Perama Floating Dock',
      'High-pressure hydroblasting, primer application, and anti-fouling marine coating system',
      'Overhaul of sea valves, overboard discharges, rudder clearances, and tailshaft seals',
    ],
    metrics: [
      { label: 'Docking Location', value: 'Perama Floating Dock' },
      { label: 'Scope', value: 'Hull Coating & Mechanical Overhaul' },
    ],
    image: '/assets/hsi/agios-nikolaos-1.jpg',
    secondaryImage: '/assets/hsi/agios-nikolaos-4.jpg',
    imageAlt: 'Commercial vessel Agios Nikolaos in floating dry dock at Perama Repair Zone',
    relatedCapabilityId: 'ship-repairs-steelworks',
  },
  {
    id: 'side-shell-collision-repair',
    title: 'Side-Shell Structural Damage Renewal & Stiffener Fabrication',
    category: 'Repairs & Steelworks',
    location: 'Perama Shipyard, Piraeus',
    vesselType: 'Commercial Cargo Vessel',
    summary:
      'Precision cropping of damaged side-shell plating and internal longitudinal stiffeners, robotic cutting of marine-grade replacement steel plates, and class-approved welding restoration.',
    technicalScope: [
      'Cropping and removal of deformed side-shell hull plates and internal frame brackets',
      'Robotic plate cutting and prefabrication of new longitudinal stiffeners and web frames',
      'Full-penetration certified welding, NDT ultrasonic/magnetic particle inspection, and coating',
    ],
    metrics: [
      { label: 'Execution', value: 'In-Berth Structural Steel Renewal' },
      { label: 'Quality Standard', value: '100% Class NDT Approved' },
    ],
    image: '/assets/hsi/side-shell-repair-completed.jpg',
    secondaryImage: '/assets/hsi/cutting-stiffeners.jpg',
    imageAlt: 'Side-shell hull damage repair and stiffener steelwork completed by HSI',
    relatedCapabilityId: 'ship-repairs-steelworks',
  },
  {
    id: 'inner-bottom-tank-top-renewal',
    title: 'Double-Bottom / Inner-Bottom Steel Plate & Frame Replacement',
    category: 'Repairs & Steelworks',
    location: 'Perama Repair Zone, Piraeus',
    vesselType: 'Commercial Carrier',
    summary:
      'Heavy internal structural steel renewal of corroded inner-bottom tank top plating and cellular double-bottom floors, executed with prefabricated steel blocks to minimize dry-dock stay.',
    technicalScope: [
      'Gas-freeing, staging, and precision flame/plasma removal of worn inner-bottom plating',
      'Workshop prefabrication of double-bottom floors, girders, and tank-top panels in Perama',
      'Installation, vacuum box testing, hydrostatic tank testing, and protective ballast tank coating',
    ],
    metrics: [
      { label: 'Structural Area', value: 'Inner-Bottom & Ballast Tank Top' },
      { label: 'Certification', value: 'ISO 9001 & Class Witnessed' },
    ],
    image: '/assets/hsi/inner-bottom-replacement.jpg',
    secondaryImage: '/assets/hsi/side-shell-repair-progress.jpg',
    imageAlt: 'Inner-bottom steel replacement in progress inside vessel cargo hold',
    relatedCapabilityId: 'ship-repairs-steelworks',
  },
  {
    id: 'turnkey-egcs-scrubber-retrofit',
    title: 'Turnkey Exhaust Gas Cleaning System (EGCS) & New Pump Room Retrofit',
    category: 'EGCS Scrubbers',
    location: 'Perama Facility & Onboard Retrofit',
    vesselType: 'Ocean-Going Commercial Tanker / Bulk Carrier',
    summary:
      'End-to-end SOx scrubber retrofit featuring in-house Perama manufacture of the scrubber process tank, construction of a new dedicated pump room, GRE/SMO alloy piping, and PLC control panel integration.',
    technicalScope: [
      '3D laser scanning of engine casing and funnel in collaboration with Studio Navale',
      'In-house fabrication of scrubber tower body and process tank at HSI Perama workshops',
      'Construction of new scrubber pump room, heavy pump foundations, GRE/SMO piping, and electrical automation panels',
    ],
    metrics: [
      { label: 'Compliance', value: 'IMO MARPOL Annex VI SOx' },
      { label: 'Piping Spec', value: 'GRE & SMO Corrosion-Resistant Alloys' },
    ],
    image: '/assets/hsi/scrubber-process-tank.jpg',
    secondaryImage: '/assets/hsi/scrubber-pump-room.jpg',
    imageAlt: 'Turnkey EGCS scrubber process tank and new pump room installation',
    relatedCapabilityId: 'scrubber-systems-egcs',
  },
  {
    id: 'bwts-retrofit-luminultra-commissioning',
    title: 'Type-Approved BWTS Retrofit, Sea-Chest Foundation & D-2 Commissioning',
    category: 'BWTS & Piping',
    location: 'Perama Repair Zone, Piraeus',
    vesselType: 'Commercial Fleet Retrofit',
    summary:
      'Custom engine-room adaptation and installation of a Type-Approved Ballast Water Treatment System, including new sea-chest pump foundations, interconnecting piping, and IMO D-2 LuminUltra commissioning testing.',
    technicalScope: [
      'Construction and structural welding of new sea-chest pump foundations in the engine room',
      'Prefabrication and onboard fitting of filtration unit, treatment skid, and ballast line tie-ins',
      'Onboard biological commissioning testing per BWM.2/Circ.70/Rev.1 using LuminUltra equipment',
    ],
    metrics: [
      { label: 'Standard', value: 'IMO D-2 & BWM.2/Circ.70/Rev.1' },
      { label: 'Testing Tech', value: 'LuminUltra Biological Verification' },
    ],
    image: '/assets/hsi/bwts-system.jpg',
    secondaryImage: '/assets/hsi/pump-foundation-seachest.jpg',
    imageAlt: 'Ballast Water Treatment System unit and sea-chest pump foundation construction',
    relatedCapabilityId: 'ballast-water-treatment-bwts',
  },
  {
    id: 'gre-smo-carbon-piping-networks',
    title: 'High-Specification GRE, SMO Alloy & DN200 Carbon Steel Piping Works',
    category: 'BWTS & Piping',
    location: 'Perama Workshops & Onboard Installation',
    vesselType: 'Tankers, Cargo Ships & Retrofit Vessels',
    summary:
      'Workshop prefabrication and onboard installation of complex marine piping systems utilizing Glass-Reinforced Epoxy (GRE), SMO stainless alloys, and heavy-wall DN200 carbon steel spools.',
    technicalScope: [
      'Isometric spool drafting and CNC/robotic pipe cutting and beveling in Perama workshops',
      'Certified lamination and bonding of GRE marine pipes for corrosive scrubber/ballast lines',
      'TIG/MIG welding of SMO/Inox alloys and high-pressure hydrostatic testing prior to onboard fitment',
    ],
    metrics: [
      { label: 'Pipe Diameters', value: 'Up to DN200+ Custom Spools' },
      { label: 'Materials', value: 'GRE · SMO · Inox · Carbon Steel' },
    ],
    image: '/assets/hsi/gre-piping.jpg',
    secondaryImage: '/assets/hsi/dn200-piping.jpg',
    imageAlt: 'GRE and DN200 carbon steel piping prefabrication and installation',
    relatedCapabilityId: 'naval-architecture-piping',
  },
  {
    id: 'major-vessel-conversions-portfolio',
    title: 'Single-to-Double Hull Tanker, Ro-Pax & Pipe-Laying Vessel Conversions',
    category: 'Conversions',
    location: 'Perama & Drapetsona Dry Docks',
    vesselType: 'Tankers, Ro-Ro Vessels & Offshore Ships',
    summary:
      'Multi-decade conversion portfolio encompassing the structural transformation of cable-laying ships into pipe-laying vessels, single-hull to double-hull tankers, and Ro-Ro cargo carriers into Ro-Ro passenger ships.',
    technicalScope: [
      'Complete naval architectural redesign, stability calculations, and class approval drawings',
      'Mid-body hull lengthening, new structural deck constructions, and double-hull wing tank insertion',
      'Integration of passenger accommodation modules, stern/bow ramps, and specialized deck machinery',
    ],
    metrics: [
      { label: 'Track Record', value: '50+ Years Conversion Expertise' },
      { label: 'Dock Capacity', value: 'Up to Panamax Size (240 m)' },
    ],
    image: '/assets/hsi/drydock-vessel.jpg',
    secondaryImage: '/assets/hsi/agios-nikolaos-8.jpg',
    imageAlt: 'Vessels in dry dock undergoing structural conversion and hull modification',
    relatedCapabilityId: 'vessel-conversions',
  },
  {
    id: 'commercial-newbuildings-5000dwt',
    title: 'Medium-Sized Commercial Vessels, Ro-Ro & Tanker NewBuildings',
    category: 'Shipbuilding',
    location: 'Perama Shipbuilding Facility, Piraeus',
    vesselType: 'Commercial Vessels up to 5,000 DWT',
    summary:
      'Complete new construction of custom-designed commercial vessels up to 5,000 DWT—including Ro-Ro ferries, coastal tankers, tugboats, luxury yachts, and offshore platforms—active since 1996.',
    technicalScope: [
      'End-to-end execution from initial design and licensing to hull block erection and launching',
      'High-automation steel processing using robotic plate-cutting and robotic welding systems',
      'Full machinery room outfitting, propulsion shafting, electrical switchboards, and sea trials',
    ],
    metrics: [
      { label: 'Division Established', value: '1996' },
      { label: 'Capacity', value: 'New Constructions up to 5,000 DWT' },
    ],
    image: '/assets/hsi/shipyard-aerial-2.jpg',
    secondaryImage: '/assets/hsi/hero-shipyard-aerial.jpg',
    imageAlt: 'Aerial view of Perama shipyard and vessel construction facilities',
    relatedCapabilityId: 'newbuildings',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    standard: 'ISO 9001:2015',
    title: 'Quality Management System',
    certificateNumber: '00026471',
    accreditationBody: 'LRQA Hellas S.A. (UKAS Accredited Management Systems — 0001)',
    scope: 'Shipbuilding, ship repairs, vessel conversions, steelworks, piping fabrication, and marine engineering services.',
    certificateImage: '/assets/hsi/iso-9001-cert.jpg',
  },
  {
    standard: 'ISO 14001:2015',
    title: 'Environmental Management System',
    certificateNumber: '00036988',
    accreditationBody: 'LRQA Hellas S.A. (UKAS Accredited Management Systems — 0001)',
    scope: 'Environmental management across shipyard operations, green maritime retrofits (BWTS, EGCS scrubbers), and waste/emissions control.',
    certificateImage: '/assets/hsi/iso-14001-cert.jpg',
  },
  {
    standard: 'ISO 45001:2018',
    title: 'Occupational Health & Safety Management System',
    certificateNumber: '00036989',
    accreditationBody: 'LRQA Hellas S.A. (UKAS Accredited Management Systems — 0001)',
    scope: 'Strict occupational health and safety protocols safeguarding all shipyard personnel, riding crews, and subcontractors.',
    certificateImage: '/assets/hsi/iso-45001-cert.jpg',
  },
];

export const CORPORATE_BROCHURES: CorporateBrochure[] = [
  {
    title: 'Hellenic Shipbuilding Industry — Corporate Presentation',
    subtitle: 'Overview of Ship Repairs, Conversions, NewBuildings up to 5,000 DWT, Facilities & ISO Certifications',
    date: 'November 2025',
    format: 'PDF · 12 Pages',
    fileUrl: '/assets/hsi/HSI-Corporate-Presentation-Nov2025.pdf',
  },
  {
    title: 'EGCS (Scrubbers) Turnkey Engineering & Installation',
    subtitle: 'In-House Scrubber Fabrication, GRE/SMO Piping, Control Panels & 3D Scanning with Studio Navale',
    date: 'October 2025',
    format: 'PDF · 15 Pages',
    fileUrl: '/assets/hsi/HSI-Scrubber-Technical-Brochure.pdf',
  },
  {
    title: 'HSI Maritime Executive Brochure (German Edition — Berlin Summit)',
    subtitle: 'Presented at “From Wake to Wave: Shipping Path to 2050” · Ritz-Carlton Berlin, Hellenic Maritime Club Hamburg',
    date: 'December 2025',
    format: 'PDF · 6 Pages',
    fileUrl: '/assets/hsi/HSI-Maritime-Brochure-Dec2025.pdf',
  },
];
