'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  isFullPage?: boolean;
  isDashboard?: boolean;
}

export default function ProjectImage({ src, alt, isFullPage = false, isDashboard = false }: ProjectImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint in Tailwind
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable expansion on mobile

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded, isMobile]);

  if (isDashboard) {
    return (
      <>
        <div className="mb-6 overflow-hidden rounded-xl border border-zinc-200 shadow-lg dark:border-zinc-800">
          <div className="relative aspect-video w-full">
            <Image
              src={src}
              alt={alt}
              fill
              className={`object-contain transition-transform ${!isMobile ? 'cursor-pointer hover:scale-[1.02]' : ''}`}
              onClick={() => !isMobile && setIsExpanded(true)}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3 dark:from-indigo-950/30 dark:to-purple-950/30">
            <p className="text-xs font-medium text-indigo-700 dark:text-indigo-300">
              💼 Admin Dashboard View
            </p>
          </div>
        </div>
        {isExpanded && !isMobile && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm fade-in duration-300"
            onClick={() => setIsExpanded(false)}
          >
            <div className="relative max-h-[90vh] max-w-[90vw] zoom-in-95 duration-300">
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute -top-12 right-0 rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={src}
                alt={alt}
                width={1920}
                height={1080}
                className="max-h-[90vh] w-auto rounded-lg object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </>
    );
  }

  if (isFullPage) {
    return (
      <>
        <div className="mb-6 overflow-hidden rounded-xl border border-zinc-200 shadow-lg dark:border-zinc-800">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              className={`object-cover object-top transition-transform ${!isMobile ? 'cursor-pointer hover:scale-105' : ''}`}
              onClick={() => !isMobile && setIsExpanded(true)}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            {!isMobile && (
              <div className="absolute bottom-4 left-4 right-4">
                <button 
                  className="w-full rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-zinc-900 backdrop-blur-sm transition-all hover:bg-white dark:bg-zinc-900/90 dark:text-zinc-100 dark:hover:bg-zinc-800"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(true);
                  }}
                >
                  🖼️ View Full Page Screenshot
                </button>
              </div>
            )}
          </div>
        </div>
        {isExpanded && !isMobile && (
          <div
            className="fixed inset-0 z-50 overflow-y-auto bg-black/95 p-4 backdrop-blur-sm fade-in duration-300"
            onClick={() => setIsExpanded(false)}
          >
            <div className="relative mx-auto max-w-6xl py-8 slide-in-from-bottom-4 duration-500">
              <button
                onClick={() => setIsExpanded(false)}
                className="sticky top-4 z-10 ml-auto mb-4 flex rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close full page view"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="rounded-lg border-2 border-white/10 bg-white/5 p-2 shadow-2xl">
                <Image
                  src={src}
                  alt={alt}
                  width={1920}
                  height={5000}
                  className="w-full rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <p className="mt-4 text-center text-sm text-white/70 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                Scroll to view the full page • Click outside to close
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </p>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="mb-6 overflow-hidden rounded-xl border border-zinc-200 shadow-lg dark:border-zinc-800">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="w-full object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

