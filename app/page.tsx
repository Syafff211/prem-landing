// app/page.tsx
'use client';
import dynamic from 'next/dynamic';
import SmoothScroll from '@/components/SmoothScroll';
import CursorGlow from '@/components/CursorGlow';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeatureBar from '@/components/FeatureBar';

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

export default function Page() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen w-full overflow-hidden bg-bg">
        {/* WebGL background */}
        <Scene />

        {/* Cinematic overlays */}
        <div className="vignette" />
        <div className="noise" />

        {/* Cursor */}
        <CursorGlow />

        {/* UI */}
        <Navigation />
        <Hero />
        <FeatureBar />
      </main>
    </SmoothScroll>
  );
}