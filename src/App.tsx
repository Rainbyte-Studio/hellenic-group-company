/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { PageRoute, CAPABILITIES } from './data/companyData';
import { SeoHead } from './components/SeoHead';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

function parseHashRoute(): { page: PageRoute; capabilitySlug: string | null } {
  const raw = window.location.hash.replace(/^#\/?/, '').trim();
  if (!raw || raw === 'home') {
    return { page: 'home', capabilitySlug: null };
  }
  const parts = raw.split('/');
  const first = parts[0] as PageRoute;
  if (first === 'capabilities') {
    const sub = parts[1] || null;
    const validCap = sub && CAPABILITIES.some((c) => c.slug === sub) ? sub : null;
    return { page: 'capabilities', capabilitySlug: validCap };
  }
  if (['about', 'facilities', 'projects', 'contact'].includes(first)) {
    return { page: first, capabilitySlug: null };
  }
  return { page: 'home', capabilitySlug: null };
}

export default function App() {
  const [routeState, setRouteState] = useState<{
    page: PageRoute;
    capabilitySlug: string | null;
  }>(() => parseHashRoute());

  const handleNavigate = useCallback(
    (page: PageRoute, capabilitySlug: string | null = null) => {
      setRouteState({ page, capabilitySlug });
      const nextHash =
        page === 'home'
          ? '#home'
          : page === 'capabilities' && capabilitySlug
          ? `#capabilities/${capabilitySlug}`
          : `#${page}`;
      if (window.location.hash !== nextHash) {
        window.history.pushState(null, '', nextHash);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  useEffect(() => {
    const onPopState = () => {
      setRouteState(parseHashRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', onPopState);
    window.addEventListener('hashchange', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('hashchange', onPopState);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      <SeoHead
        currentPage={routeState.page}
        activeCapabilitySlug={routeState.capabilitySlug}
      />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#1D4ED8] focus:text-white focus:text-xs focus:font-semibold focus:rounded"
      >
        Skip to main content
      </a>

      <Header currentPage={routeState.page} onNavigate={handleNavigate} />

      <main id="main-content" className="flex-1">
        {routeState.page === 'home' && <HomePage onNavigate={handleNavigate} />}
        {routeState.page === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {routeState.page === 'capabilities' && (
          <CapabilitiesPage
            activeCapabilitySlug={routeState.capabilitySlug}
            onSelectCapability={(slug) => handleNavigate('capabilities', slug)}
            onNavigate={handleNavigate}
          />
        )}
        {routeState.page === 'facilities' && (
          <FacilitiesPage onNavigate={handleNavigate} />
        )}
        {routeState.page === 'projects' && (
          <ProjectsPage onNavigate={handleNavigate} />
        )}
        {routeState.page === 'contact' && <ContactPage />}
      </main>

      <Footer
        onNavigate={handleNavigate}
        showCtaBanner={routeState.page !== 'contact'}
      />
    </div>
  );
}
