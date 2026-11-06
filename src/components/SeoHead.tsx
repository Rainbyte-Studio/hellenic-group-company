import React, { useEffect } from 'react';
import { COMPANY_INFO, PageRoute, CAPABILITIES } from '../data/companyData';

interface SeoHeadProps {
  currentPage: PageRoute;
  activeCapabilitySlug?: string | null;
}

const PAGE_META: Record<
  PageRoute,
  { title: string; description: string; path: string }
> = {
  home: {
    title: 'Hellenic Group Company — Maritime Engineering, Shipbuilding & Ship Repair',
    description:
      'Hellenic Group Company & Hellenic Shipbuilding Industry (HSI) in Perama, Piraeus, Greece. Ship repairs, vessel conversions, newbuildings up to 5,000 DWT, Panamax dry docking, BWTS & EGCS scrubbers.',
    path: '/',
  },
  about: {
    title: 'About & Maritime Heritage — Hellenic Group Company',
    description:
      'Discover Hellenic Group Company and Hellenic Shipbuilding Industry Ltd. (HSI). Over 50 years of vessel conversion heritage, commercial shipbuilding since 1996, and LRQA UKAS-accredited ISO 9001, 14001 & 45001 certification.',
    path: '/about',
  },
  capabilities: {
    title: 'Shipbuilding, Repair, Conversion & Retrofit Capabilities — Hellenic Group Company',
    description:
      'Full-spectrum marine engineering in Perama, Piraeus: ship repairs & steelworks, vessel conversions, newbuildings up to 5,000 DWT, in-house EGCS scrubbers, BWTS D-2 testing, and GRE/SMO piping.',
    path: '/capabilities',
  },
  facilities: {
    title: 'Shipyard Facilities & 5 Dry Docks in Piraeus — Hellenic Group Company',
    description:
      'Explore our 6,000 m² Perama workshops with robotic plate-cutting systems and access to 5 dry docks (up to Panamax 240 m / 22,000 tons lifting capacity) in cooperation with Piraeus Port Authority (OLP S.A.).',
    path: '/facilities',
  },
  projects: {
    title: 'Maritime Projects & Reference Portfolio — Hellenic Group Company',
    description:
      'Inspect completed ship repair, dry-docking, structural steel renewal, single-to-double hull conversion, turnkey EGCS scrubber, and BWTS commissioning projects in Perama, Greece.',
    path: '/projects',
  },
  contact: {
    title: 'Contact & Project Inquiries — Hellenic Group Company (Perama, Piraeus)',
    description:
      'Contact Hellenic Group Company & Hellenic Shipbuilding Industry Ltd. at Free Zone OLP, 18863 Perama, Piraeus, Greece. Commercial desk, 24/7 emergency dispatch, and project quotation inquiries.',
    path: '/contact',
  },
};

export const SeoHead: React.FC<SeoHeadProps> = ({
  currentPage,
  activeCapabilitySlug,
}) => {
  useEffect(() => {
    let meta = PAGE_META[currentPage] || PAGE_META.home;

    if (currentPage === 'capabilities' && activeCapabilitySlug) {
      const cap = CAPABILITIES.find((c) => c.slug === activeCapabilitySlug);
      if (cap) {
        meta = {
          title: `${cap.title} — Hellenic Group Company`,
          description: cap.summary,
          path: `/capabilities/${cap.slug}`,
        };
      }
    }

    const canonicalUrl = `${COMPANY_INFO.canonicalDomain}${meta.path}`;
    document.title = meta.title;

    const setMetaTag = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) {
        el.setAttribute('content', content);
      }
    };

    setMetaTag('meta[name="description"]', meta.description);
    setMetaTag('meta[property="og:title"]', meta.title);
    setMetaTag('meta[property="og:description"]', meta.description);
    setMetaTag('meta[property="og:url"]', canonicalUrl);
    setMetaTag('meta[name="twitter:title"]', meta.title);
    setMetaTag('meta[name="twitter:description"]', meta.description);

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    }
  }, [currentPage, activeCapabilitySlug]);

  return null;
};
