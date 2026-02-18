import {
  MdSearch,
  MdSettings,
  MdNotifications,
  MdMenu,
} from "react-icons/md";

import { useAppStore } from "../../store/useAppStore";
import { useLocation } from "react-router-dom";

export default function TopBar() {
  const user = useAppStore((s) => s.user);
  const openSidebar = useAppStore((s) => s.openSidebar);

  // i want the title to be dynamic based on the route, so i will use useLocation from react-router-dom to get the current path and then set the title accordingly
  const location = useLocation();
  const title = location.pathname.split("/").pop()?.replace("-", " ") || "Dashboard";

  return (
    <header className="bg-white">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex items-center justify-between px-6 py-4">

        {/* Title */}
        <h1 className="text-2xl font-semibold text-slate-700">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </h1>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div className="flex items-center gap-3 bg-slate-100 px-5 py-2 rounded-full w-65">
            <MdSearch size={18} className="text-slate-400" />

            <input
              type="text"
              placeholder="Search for something"
              className="bg-transparent outline-none text-sm w-full text-slate-600"
            />
          </div>

          {/* Settings */}
          <button className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition">
            <MdSettings size={18} className="text-slate-600" />
          </button>

          {/* Notifications */}
          <button className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition">
            <MdNotifications size={18} className="text-slate-600" />
          </button>

          {/* Avatar */}
          <img
            src={user?.avatar || "https://i.pravatar.cc/40"}
            alt="User"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-4 py-4 space-y-4">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Menu */}
          <button onClick={openSidebar}>
            <MdMenu size={26} className="text-slate-700" />
          </button>

          {/* Title */}
          <h1 className="text-lg font-semibold text-slate-800">
            Overview
          </h1>

          {/* Avatar */}
          <img
            src={user?.avatar || "https://i.pravatar.cc/40"}
            alt="User"
            className="h-9 w-9 rounded-full object-cover"
          />
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 bg-slate-100 px-5 py-3 rounded-full">
          <MdSearch size={20} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent outline-none text-sm w-full text-slate-600"
          />
        </div>

      </div>
    </header>
  );
}
