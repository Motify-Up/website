'use client';

import { useEffect, useMemo, useState } from 'react';

type AnchorNavProps = {
  locale: string;
  featuresLabel: string;
  galleryLabel: string;
  downloadLabel: string;
};

export default function AnchorNav({ locale, featuresLabel, galleryLabel, downloadLabel }: AnchorNavProps) {
  const [activeId, setActiveId] = useState<'features' | 'screenshots' | 'download' | null>(null);

  const sectionIds = useMemo(() => ['features', 'screenshots', 'download'] as const, []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));

        if (visible[0]?.target?.id) {
          const id = visible[0].target.id as 'features' | 'screenshots' | 'download';
          setActiveId(id);
        } else {
          // Fallback: find the one closest to top
          const closest = entries
            .map((e) => ({ id: e.target.id as 'features' | 'screenshots' | 'download', top: e.boundingClientRect.top }))
            .sort((a, b) => Math.abs(a.top) - Math.abs(b.top))[0];
          if (closest) setActiveId(closest.id);
        }
      },
      {
        root: null,
        // Favor the middle of the viewport
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  const itemBase =
    'group relative flex items-center gap-2 px-3 py-2 rounded-2xl text-gray-800 bg-white/30 border border-white/40 shadow-sm transition-all backdrop-saturate-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300/60';
  const itemActive = 'text-green-800 bg-white/60 border-green-200 shadow';
  const icon = 'w-4 h-4 text-green-600 drop-shadow-sm';
  const label = 'text-sm font-semibold tracking-wide';

  return (
    <nav className="hidden md:flex fixed right-6 top-1/3 z-40">
      <div className="flex flex-col gap-2 rounded-3xl border border-white/30 bg-white/40 bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-xl shadow-[0_8px_30px_rgba(31,41,55,0.08)] ring-1 ring-inset ring-white/20 p-2 transition-all">
        <a href={`/${locale}#features`} className={`${itemBase} ${activeId === 'features' ? itemActive : ''}`} aria-current={activeId === 'features' ? 'true' : undefined}>
          <svg className={icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className={label}>{featuresLabel}</span>
        </a>
        <a href={`/${locale}#screenshots`} className={`${itemBase} ${activeId === 'screenshots' ? itemActive : ''}`} aria-current={activeId === 'screenshots' ? 'true' : undefined}>
          <svg className={icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1-1a2 2 0 012.828 0L20 15m-6-9h6a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6" />
          </svg>
          <span className={label}>{galleryLabel}</span>
        </a>
        <a href={`/${locale}#download`} className={`${itemBase} ${activeId === 'download' ? itemActive : ''}`} aria-current={activeId === 'download' ? 'true' : undefined}>
          <svg className={icon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-7 2h14v2H5v-2z" />
          </svg>
          <span className={label}>{downloadLabel}</span>
        </a>
      </div>
    </nav>
  );
}

