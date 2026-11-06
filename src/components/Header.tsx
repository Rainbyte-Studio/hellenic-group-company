import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageRoute } from '../data/companyData';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, capabilitySlug?: string | null) => void;
}

const NAV_ITEMS: { label: string; route: PageRoute }[] = [
  { label: 'About', route: 'about' },
  { label: 'Capabilities', route: 'capabilities' },
  { label: 'Facilities', route: 'facilities' },
  { label: 'Projects', route: 'projects' },
  { label: 'Contact', route: 'contact' },
];

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route, null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A111E]/95 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="font-display text-base sm:text-lg font-bold tracking-tight text-white hover:text-slate-200 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#60A5FA]"
        >
          Hellenic Group Company
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.route;
            return (
              <a
                key={item.route}
                href={`#${item.route}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.route);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#60A5FA] ${
                  isActive
                    ? 'text-white border-[#3B82F6]'
                    : 'text-slate-300 border-transparent hover:text-white hover:border-slate-500'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]"
          >
            Discuss Your Project
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-primary-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-slate-200 hover:text-white rounded border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-primary-menu"
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#0A111E] border-b border-slate-800 px-5 pt-3 pb-6 space-y-2"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className={`block py-2.5 text-sm font-medium border-b border-slate-800/70 ${
              currentPage === 'home' ? 'text-white font-semibold' : 'text-slate-300'
            }`}
          >
            Home
          </a>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.route}
              href={`#${item.route}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.route);
              }}
              className={`block py-2.5 text-sm font-medium border-b border-slate-800/70 ${
                currentPage === item.route ? 'text-white font-semibold' : 'text-slate-300'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded text-center transition-colors whitespace-nowrap"
            >
              Discuss Your Project
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
