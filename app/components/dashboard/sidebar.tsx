'use client';

import { ChevronDown, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hook/useAuth';
import { useState } from 'react';

interface SidebarProps {
  title: string;
  icon: React.ReactNode;
  menus: {
    name: string;
    icon: React.ElementType;
    href: string;
    more?: {
      name: string;
      href: string;
    }[];
  }[];
  user: any;
}

export default function Sidebar({ menus = [], user }: SidebarProps) {
  const { logout } = useAuth();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <aside className="w-72 bg-eerie-black border-r border-charleston-green flex flex-col h-[calc(100vh)] left-0 top-[89px] z-50">

      {/* Header Section */}
      <div className="p-6 py-4 flex items-center gap-3 border-b border-charleston-green relative">
        <Link href="/" className="w-8 h-8 rounded-lg bg-charleston-green border border-[#3E3E3E] flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-blue-primary" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 pb-16 space-y-1 overflow-y-auto scrollbar-custom">
        {/* Optional Header */}
        {/* <p className="px-4 text-xs font-bold text-[#A0A0A0] uppercase tracking-wider mb-3">
      {title} Management
    </p> */}

        {menus.length > 0 && menus.map((item, i) => {
          const isActive = pathname === item.href;
          console.log(pathname, item.href);
          const Icon = item.icon;

          return (
            <div key={i}>
              <Link
                href={item.href}
                className={`flex relative items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group
                ${isActive
                    ? 'bg-charleston-green/50 text-white border border-[#3E3E3E]'
                    : 'text-[#A0A0A0] border border-transparent hover:bg-charleston-green hover:text-white'
                  }`}
              >
                <Icon
                  size={18}
                  className={`transition-colors ${isActive ? 'text-white' : 'text-[#A0A0A0] group-hover:text-white'}`}
                />
                {item.name}
                {item.more && (
                  <div onClick={() => openMenu === item.name ? setOpenMenu(null) : setOpenMenu(item.name)} className="absolute hover:bg-eerie-black/50 rounded-full p-1 right-4 z-10">
                    <ChevronDown size={16} className="text-[#A0A0A0] group-hover:text-white transition-colors" />
                  </div>
                )}
              </Link>
              {item.more && openMenu === item.name && (
                <div>
                  {item.more && (
                    item.more.map((subItem, index) => (
                      <Link
                        key={index}
                        href={subItem.href}
                        className={`flex ml-12 relative items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group
                      ${isActive && pathname === subItem.href
                            ? 'bg-charleston-green/50 text-white border border-[#3E3E3E]'
                            : 'text-[#A0A0A0] border border-transparent hover:bg-charleston-green hover:text-white'
                          }`}
                      >
                        {subItem.name}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          );
        })}


      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-charleston-green">
        <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-charleston-green text-[#A0A0A0] hover:text-[#EF4444] transition-colors group">
          {/* Sign Out Icon Container */}
          <div className="w-8 h-8 rounded-full bg-charleston-green border border-[#3E3E3E] flex items-center justify-center group-hover:border-[#EF4444]/30 group-hover:bg-[#EF4444]/10 transition-all">
            <LogOut size={16} className="group-hover:text-[#EF4444]" />
          </div>

          <div className="text-left" onClick={() => logout()}>
            <p className="text-sm font-bold group-hover:text-white transition-colors">Sign Out</p>
            <p className="text-xs text-[#707070]">{user?.email}</p>
          </div>
        </button>
      </div>

    </aside>
  );
}