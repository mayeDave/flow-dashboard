import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";

import { useAppStore } from "../../store/useAppStore";

import {
  MdDashboard,
  MdSwapHoriz,
  MdAccountBalance,
  MdTrendingUp,
  MdCreditCard,
  MdAttachMoney,
  MdBuild,
  MdCardMembership,
  MdSettings,
  MdCheckBox,
} from "react-icons/md";

const links = [
  { name: "Dashboard", path: "/dashboard", icon: MdDashboard },
  { name: "Transactions", path: "/transactions", icon: MdSwapHoriz },
  { name: "Accounts", path: "/accounts", icon: MdAccountBalance },
  { name: "Investments", path: "/investments", icon: MdTrendingUp },
  { name: "Credit Cards", path: "/cards", icon: MdCreditCard },
  { name: "Loans", path: "/loans", icon: MdAttachMoney },
  { name: "Services", path: "/services", icon: MdBuild },
  { name: "My Privileges", path: "/privileges", icon: MdCardMembership },
  { name: "Setting", path: "/settings", icon: MdSettings },
];

export default function Sidebar() {
  const isOpen = useAppStore((s) => s.sidebarOpen);
  const close = useAppStore((s) => s.closeSidebar);

  return (
    <>
      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white z-50
          transform transition-transform duration-300

          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          md:static md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">

          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-800 text-white">
              <MdCheckBox size={18} />
            </div>

            <span className="text-xl font-semibold text-slate-600">
              Flow
            </span>
          </div>

          {/* Close (Mobile) */}
          <button
            onClick={close}
            className="md:hidden"
          >
            <MdClose size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6 space-y-2">

          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.name}
                to={link.path}
                end
                onClick={close}
                className={({ isActive }) =>
                  `
                  flex items-center gap-4 rounded-xl px-4 py-3 text-sm transition

                  ${
                    isActive
                      ? "bg-slate-100 text-slate-900 font-medium"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }
                `
                }
              >
                <Icon size={20} />
                {link.name}
              </NavLink>
            );
          })}

        </nav>
      </aside>
    </>
  );
}
