import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./SideBar";

export default function Layout() {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="w-full h-[800px] flex relative">
        <div dir="rtl" className="h-[800px] flex-grow">
          <Outlet />
        </div>
        <div className="lg:border lg:border-skyBlue w-0 h-0 lg:w-[260px] lg:h-[800px] overflow-hidden lg:block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
