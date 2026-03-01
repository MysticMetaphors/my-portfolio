'use client';

import { useAuth } from "@/hook/useAuth";
import { LogOut, Mail, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MenuToggle from "../ui/MenuToggle";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function Header({ title, subtitle, children }: HeaderProps) {
  const { logout, user } = useAuth();
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isModalOpen && !profileDropdownRef.current?.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isModalOpen]);

  return (
    <div className={`flex h-[65px] bg-eerie-black px-8 py-[25px] border-b border-charleston-green items-center relative`}>
      <div className="flex-1 flex justify-start items-center">
        <MenuToggle />
      </div>

      <div className="flex-none flex justify-center items-center">
        {children}
      </div>

      <div className="flex-1 flex justify-end items-center gap-4">
        <Link href="/dashboard/cold-emails" className="text-[#A0A0A0] border border-transparent hover:bg-charleston-green hover:text-white p-2 rounded-sm transition-colors">
          <Mail size={20} />
        </Link>
        <div onClick={() => setIsModalOpen(!isModalOpen)} className="cursor-pointer relative">
          <img src={user.picture} alt="" className="w-8 h-8 rounded-full" />
        </div>
      </div>

      {isModalOpen && (
        <div ref={profileDropdownRef} className="absolute z-50 top-16 right-8 bg-eerie-black border border-charleston-green rounded-lg p-2 w-64 shadow-lg">

          <div className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-charleston-green text-[#A0A0A0] hover:text-white transition-colors group">
            <img src={user.picture} alt="" className="w-8 h-8 rounded-full" />
            <div className="flex flex-col overflow-hidden">
              <p className="text-sm font-bold group-hover:text-white transition-colors truncate">{user.nickname}</p>
              <p className="text-xs text-[#707070] truncate">{user.email}</p>
            </div>
          </div>

          <button onClick={() => logout()} className="mt-1 cursor-pointer rounded-lg flex items-center gap-3 w-full p-3 hover:bg-charleston-green text-[#A0A0A0] hover:text-[#EF4444] transition-colors group">
            {/* Sign Out Icon Container */}
            <div className="w-8 h-8 rounded-full bg-charleston-green border border-[#3E3E3E] flex items-center justify-center group-hover:border-[#EF4444]/30 group-hover:bg-[#EF4444]/10 transition-all">
              <LogOut size={16} className="group-hover:text-[#EF4444]" />
            </div>

            <div className="text-left overflow-hidden">
              <p className="text-sm font-bold group-hover:text-[#EF4444] transition-colors">Sign Out</p>
              <p className="text-xs text-[#707070] truncate">{user?.email}</p>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}