'use client';

import { useAuth } from "@/hook/useAuth";
import { LogOut, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function Header({ title, subtitle, children }: HeaderProps) {
  const { logout, user } = useAuth();
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  console.log(user.picture);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !profileDropdownRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="flex h-[65px] bg-eerie-black px-8 py-[25px] border-b border-charleston-green flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>
      <div className="flex gap-3">
        {children}
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer relative">
          <img src={user.picture} alt="" className="w-8 h-8 rounded-full" />
        </div>
        {isOpen && (
          <div ref={profileDropdownRef} className="absolute z-50 top-14 right-4 bg-eerie-black border border-charleston-green rounded-lg p-2">
            {/* <div className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-charleston-green text-[#A0A0A0] hover:text-[#EF4444] transition-colors group">
              <Settings size={16} className="group-hover:text-[#EF4444]" />
              Profile
            </div> */}

            <div className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-charleston-green text-[#A0A0A0] hover:text-[#EF4444] transition-colors group">
              <img src={user.picture} alt="" className="w-8 h-8 rounded-full" />
              <div className="flex flex-col">
                <p className="text-sm font-bold group-hover:text-white transition-colors">{user.nickname}</p>
                <p className="text-xs text-[#707070]">{user.email}</p>
              </div>
            </div>

            <button onClick={() => logout()} className="hover:bg-charleston-green cursor-pointer rounded-lg flex items-center gap-3 w-full p-3 hover:bg-charleston-green text-[#A0A0A0] hover:text-[#EF4444] transition-colors group">
              {/* Sign Out Icon Container */}
              <div className="w-8 h-8 rounded-full bg-charleston-green border border-[#3E3E3E] flex items-center justify-center group-hover:border-[#EF4444]/30 group-hover:bg-[#EF4444]/10 transition-all">
                <LogOut size={16} className="group-hover:text-[#EF4444]" />
              </div>

              <div className="text-left">
                <p className="text-sm font-bold group-hover:text-white transition-colors">Sign Out</p>
                <p className="text-xs text-[#707070]">{user?.email}</p>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}