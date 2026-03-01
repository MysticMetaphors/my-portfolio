"use client";

import Sidebar from '@/app/components/dashboard/sidebar';
import { Users, Component, LayoutDashboard, Sparkle, Box, VectorSquare, Code, Layers2, Mail } from 'lucide-react';
import { useAuth } from '@/hook/useAuth';
import { useState } from 'react';
import Header from '../components/dashboard/header';
import { SidebarProvider } from '@/context/SidebarContext';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [isOpen, setOpen] = useState(false)
  const MenuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    // { name: 'Templates', icon: Box, href: '/dashboard/templates' },
    // {
    //   name: 'Layouts', icon: Layers2, href: '/dashboard/layouts', more: [
    //     { name: 'Hero', href: '/dashboard/layouts/hero' },
    //     { name: 'Contact', href: '/dashboard/layouts/contact' },
    //     { name: 'About', href: '/dashboard/layouts/about' },
    // { name: 'Content', href: '/dashboard/layouts/content' },
    // { name: 'CTA', href: '/dashboard/layouts/cta' },
    // //{ name: 'Navigation', href: '/dashboard/layouts/navbar' },
    // { name: 'Sidebar', href: '/dashboard/layouts/sidebar' },
    // { name: 'Topbar', href: '/dashboard/layouts/topbar' },
    // { name: 'Mega Menu', href: '/dashboard/layouts/mega-menu' },
    // // { name: 'Footer', href: '/dashboard/layouts/footer' },
    // { name: 'Bento', href: '/dashboard/layouts/bento' },
    // { name: '404', href: '/dashboard/layouts/404' },
    // { name: '500', href: '/dashboard/layouts/500' },
    // { name: 'Blank', href: '/dashboard/layouts/blank' },
    //   ]
    // },
    {
      name: 'Components', icon: Component, href: '/dashboard/components', more: [
        { name: 'Button', href: '/dashboard/components/button' },
        // { name: 'Card', href: '/dashboard/components/card' },
        // { name: 'Dropdown', href: '/dashboard/components/dropdown' },
        // { name: 'Modal', href: '/dashboard/components/modal' },
        // { name: 'Table', href: '/dashboard/components/table' },
        // { name: 'Tabs', href: '/dashboard/components/tabs' },
        // { name: 'Toast', href: '/dashboard/components/toast' },
        // { name: 'Skeleton', href: '/dashboard/components/skeleton' },
        // { name: 'Alert', href: '/dashboard/components/alert' },
        // { name: 'Tooltip', href: '/dashboard/components/tooltip' },
        // { name: 'Toggle', href: '/dashboard/components/toggle' },
        // { name: 'Pagination', href: '/dashboard/components/pagination' },
        // { name: 'Progress', href: '/dashboard/components/progress' },
        // { name: 'ToggleGroup', href: '/dashboard/components/toggle-group' },
      ]
    },
    // { name: 'AI Prompts', icon: Sparkle, href: '/dashboard/ai-prompts' },
    // { name: 'Utilities', icon: VectorSquare, href: '/dashboard/utilities' },
    // { name: 'Scripts', icon: Code, href: '/dashboard/scripts' },
    // { name: 'Canvas', icon: Box, href: '/dashboard/canvas' },
    // { name: 'Cold Email', icon: Mail, href: '/dashboard/cold-emails' },
  ];

  return (
    <SidebarProvider>
      <div className='flex relative md:ml-72'>
        <div className="h-screen bg-eerie-black/90 w-full overflow-hidden">
          <div className="flex relative h-screen">
            <Sidebar title="Employee" icon={<Users size={24} className="text-white" />} menus={MenuItems} user={user} />
            <main className="flex-1 h-[calc(100vh)] flex flex-col transition-all overflow-hidden">
              <Header />
              {children}
            </main>

            <div className="absolute bottom-0 -left-[9999px] w-full h-16 bg-brand-primary/50">
              <div className="text-brand-primary/70 bg-brand-primary/70 bg-red-500 border border-brand-primary/70"></div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}