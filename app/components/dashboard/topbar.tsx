import { Bell, FileText, Home, LogOut, Search, Settings, Upload, User } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Topbar() {
  const pathname = usePathname();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const TOPBAR_MENUS = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Employee",
      href: "/dashboard/employee",
    },
    {
      name: "Schedule",
      href: "/dashboard/schedule",
    },
    {
      name: "Attendance",
      href: "/dashboard/attendance",
    },
    {
      name: "Timesheet",
      href: "/dashboard/timesheet",
    },
    {
      name: "Payroll",
      href: "/dashboard/payroll",
    },
    {
      name: "Approval",
      href: "/dashboard/approval",
    },
    {
      name: "Reports",
      href: "/dashboard/reports",
    },
    {
      name: "Import",
      href: "/dashboard/import",
    },
  ];

  const router = useRouter();

  const signOut = () => {
    router.push('/');
  };

  return (
    <div className="flex h-fit bg-white px-8 py-6 border-b border-gray-200 flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <nav className="flex items-center">
        {TOPBAR_MENUS.map((item) => {
          const isActive = item.href === '/dashboard'
            ? pathname === '/dashboard'
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors 
              ${isActive
                  ? "bg-blue-primary text-white"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-4">
        <div className="col-span-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search Employee Code..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-primary focus:ring-1 focus:ring-blue-primary transition-all"
            />
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            className="flex items-center gap-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <div className="w-8 h-8 bg-blue-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
              JD
            </div>
          </button>
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-40">
              <Link href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <User size={16} /> Profile
              </Link>
              <Link href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <Settings size={16} /> Settings
              </Link>
              <Link href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <Bell size={16} /> Notifications
              </Link>
              <Link href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <Home size={16} /> Home
              </Link>
              <hr className="my-1 border-gray-200" />
              <div onClick={() => signOut()} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <LogOut size={16} /> Sign out
              </div>
              <hr className="my-1 border-gray-200" />
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="w-8 h-8 bg-blue-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                  JD
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-xs text-gray-500">john.doe@example.com</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}