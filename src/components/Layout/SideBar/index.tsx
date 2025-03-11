import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { menuItems } from "./sideBar.data";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const renderSidebarContent = () => (
    <div dir="rtl" className="px-6 py-6 font-primary text-sm h-full bg-white">
      <h2 className="text-gray3 mb-4">منو اصلی</h2>
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`p-2 flex items-center gap-2 ${
                isActive ? "text-[#5178F5] font-bold" : "text-darkGray"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <item.icon
                className={`w-5 h-5 ${
                  isActive ? "stroke-[#5178F5]" : "stroke-darkGray"
                }`}
              />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      <button
        className="lg:hidden fixed top-4 right-4 z-50 bg-white p-2 rounded-md shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <Bars3Icon className="w-6 h-6 text-gray-700" />
      </button>

      <div className="hidden lg:block border border-skyBlue w-[260px] h-full mt-[85px]">
        {renderSidebarContent()}
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="fixed top-0 right-0 w-[260px] h-full bg-white z-50 shadow-lg"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <button
                className="absolute top-4 left-4 text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <div className="mt-[85px] h-full overflow-hidden">
                {renderSidebarContent()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
