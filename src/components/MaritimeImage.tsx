import React, { useState } from 'react';
import { Anchor } from 'lucide-react';

interface MaritimeImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  eager?: boolean;
  overlayGradient?: 'none' | 'subtle' | 'hero' | 'card';
  caption?: string;
}

export const MaritimeImage: React.FC<MaritimeImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative overflow-hidden bg-[#0F172A]',
  eager = false,
  overlayGradient = 'none',
  caption,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={containerClassName}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={className}
        />
      ) : (
        <div
          className="w-full h-full min-h-[240px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#0A111E] via-[#111C2D] to-[#1E293B] text-slate-300"
          role="img"
          aria-label={alt}
        >
          <Anchor className="w-8 h-8 text-[#60A5FA] mb-3 opacity-80" />
          <p className="text-xs font-mono tracking-wide text-slate-300 max-w-xs">
            {alt}
          </p>
          <p className="text-[11px] text-slate-400 mt-1">
            Hellenic Group Company · Perama Shipyard, Piraeus
          </p>
        </div>
      )}

      {overlayGradient === 'hero' && (
        <div
          className="
            absolute inset-0 pointer-events-none
            bg-gradient-to-r from-[#070D17]/95 via-[#0A111E]/80 to-[#0A111E]/45
          "
          aria-hidden="true"
        />
      )}

      {overlayGradient === 'card' && (
        <div
          className="
            absolute inset-0 pointer-events-none
            bg-gradient-to-t from-[#0A111E]/85 via-[#0A111E]/25 to-transparent
          "
          aria-hidden="true"
        />
      )}

      {overlayGradient === 'subtle' && (
        <div
          className="
            absolute inset-0 pointer-events-none
            bg-gradient-to-t from-[#0A111E]/55 via-transparent to-transparent
          "
          aria-hidden="true"
        />
      )}

      {caption && (
        <div className="absolute bottom-0 inset-x-0 px-4 py-2.5 bg-[#0A111E]/80 backdrop-blur-[2px] border-t border-white/10">
          <p className="text-xs text-slate-200 font-mono truncate">{caption}</p>
        </div>
      )}
    </div>
  );
};
