// src/components/skeletons/PortfolioSkeleton.jsx
import React from "react";

function Skeleton({ className = "", ...props }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-slate-200 dark:bg-slate-800 ${className}`}
      {...props}
    />
  );
}

export function PortfolioSkeleton() {
  return (
    <div className="min-h-screen font-sans transition-colors bg-white dark:bg-slate-950">
      
      {/* 1. HEADER SKELETON (Navbar matching image) */}
      <header className="sticky top-0 z-40 w-full px-4 py-3 border-b backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-slate-100 dark:border-slate-800/60 sm:px-8">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          
          {/* Logo / Name Placeholder */}
          <Skeleton className="w-32 rounded-lg h-7" />

          {/* Navigation Pill Menu Placeholder */}
          <div className="hidden md:flex items-center gap-2 p-1.5 rounded-full bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/50">
            <Skeleton className="w-16 rounded-full h-7" />
            <Skeleton className="w-16 rounded-full h-7" />
            <Skeleton className="w-20 rounded-full h-7" />
            <Skeleton className="w-16 rounded-full h-7" />
            <Skeleton className="w-20 rounded-full h-7" />
          </div>

          {/* Language & Theme Switches */}
          <div className="flex items-center gap-2">
            <Skeleton className="w-16 rounded-full h-9" />
            <Skeleton className="rounded-full h-9 w-9" />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-6xl px-6 py-12 mx-auto space-y-20 sm:px-8 md:py-20">
        
        {/* 2. HERO SECTION SKELETON (Exact layout from image) */}
        <div className="max-w-3xl space-y-6">
          {/* Role Pill Badge */}
          <Skeleton className="rounded-full h-7 w-52" />

          {/* Large Title: "Hi, I'm Linda." */}
          <Skeleton className="w-3/4 h-14 sm:h-16 rounded-2xl" />

          {/* Paragraph Description Lines */}
          <div className="space-y-2.5 pt-2">
            <Skeleton className="w-full h-5 rounded-md" />
            <Skeleton className="w-11/12 h-5 rounded-md" />
            <Skeleton className="w-2/3 h-5 rounded-md" />
          </div>

          {/* Call to Action Buttons */}
          <div className="flex items-center gap-3 pt-4">
            <Skeleton className="h-11 w-36 rounded-xl" />
            <Skeleton className="w-32 h-11 rounded-xl" />
          </div>

          {/* Bottom Tech Badges Row */}
          <div className="flex items-center gap-2 pt-6">
            <Skeleton className="w-16 rounded-md h-7" />
            <Skeleton className="w-20 rounded-md h-7" />
            <Skeleton className="rounded-md h-7 w-14" />
            <Skeleton className="w-16 rounded-md h-7" />
          </div>
        </div>

        {/* 3. ABOUT & EXPERIENCE SKELETON (Lower page sections) */}
        <div className="pt-12 space-y-8 border-t border-slate-200/70 dark:border-slate-800/80">
          <div className="space-y-3">
            <Skeleton className="w-24 h-5 rounded-full" />
            <Skeleton className="w-64 h-8 rounded-xl" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Skeleton className="h-40 rounded-2xl" />
            <Skeleton className="h-40 rounded-2xl" />
            <Skeleton className="h-40 rounded-2xl" />
          </div>
        </div>

      </main>
    </div>
  );
}