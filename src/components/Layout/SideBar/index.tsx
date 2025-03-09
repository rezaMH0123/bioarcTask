import { NavLink, useLocation } from "react-router";
import { menuItems } from "./sideBar.data";

const Sidebar = () => {
  const location = useLocation(); // گرفتن اطلاعات مسیر فعلی

  return (
    <div
      dir="rtl"
      className="border-t mt-[75px] border-skyBlue h-screen px-11 py-6 font-primary text-sm"
    >
      <h2 className="text-gray3 mb-4">منو اصلی</h2>
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path; // بررسی فعال بودن لینک
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`p-2 flex items-center gap-2 ${
                isActive ? "text-[#5178F5] font-bold" : "text-darkGray"
              }`}
            >
              <item.icon
                className={isActive ? "stroke-[#5178F5]" : "stroke-darkGray"}
              />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
