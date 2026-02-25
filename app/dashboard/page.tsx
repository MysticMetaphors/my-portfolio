'use client';

import React from 'react';
import { Box, Component, Sparkles, SquareDashed, Code, ArrowRight } from 'lucide-react';
import Link from 'next/link'; // Assuming you are using Next.js
import Header from '../components/dashboard/header';

const dashboardItems = [
  // {
  //   name: 'Templates',
  //   icon: Box,
  //   href: '/dashboard/templates',
  //   description: 'Complete, responsive webpage templates for quick starts and rapid prototyping.',
  //   count: 12,
  // },
  {
    name: 'Components',
    icon: Component,
    href: '/dashboard/components',
    description: 'Pre-built, modular UI elements like badges, buttons, and intricate cards.',
    count: 48,
  },
  // {
  //   name: 'AI Prompts',
  //   icon: Sparkles, 
  //   href: '/dashboard/ai-prompts',
  //   description: 'A curated library of highly effective prompts to accelerate LLM workflows.',
  //   count: 24,
  // },
  // {
  //   name: 'Utilities',
  //   icon: SquareDashed, 
  //   href: '/dashboard/utilities',
  //   description: 'Handy CSS/JS utilities, custom hooks, and layout helper functions.',
  //   count: 18,
  // },
  // {
  //   name: 'Scripts',
  //   icon: Code,
  //   href: '/dashboard/scripts',
  //   description: 'Reusable code snippets, backend logic, and automation scripts.',
  //   count: 35,
  // },
];

export default function DashboardGrid() {
  return (
    <>
      <Header />
      <div className="min-h-screen p-8 pb-30 text-slate-200 font-sans overflow-y-scroll scrollbar-custom">

        {/* Header Section */}
        <div className="mb-12 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
            Resource <span className="text-blue-primary">Library</span>
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Von Bryan's centralized repository of tools, components, and scripts. Everything you need to build efficient, scalable digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {dashboardItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link href={item.href} key={item.name} className="group block relative rounded-2xl outline-none">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-primary/0 via-blue-primary/50 to-blue-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-[#141E30] rounded-2xl border border-white/5 p-6 overflow-hidden flex flex-col transition-all duration-300">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-primary rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center shadow-inner group-hover:border-blue-primary/30 group-hover:text-blue-primary transition-colors duration-300">
                      <Icon size={24} className="text-slate-300 group-hover:text-blue-primary transition-colors duration-300" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-[#0a0a0a] text-slate-400 rounded-full border border-white/5">
                      {item.count} Items
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-6 flex items-center text-sm font-medium text-blue-primary opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Explore {item.name.toLowerCase()}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}