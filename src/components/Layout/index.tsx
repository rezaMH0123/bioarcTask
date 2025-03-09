import Header from "./Header";
import Sidebar from "./SideBar";

export default function Layout() {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="w-full h-[800px] flex">
        <div className=" h-[800px] flex-grow"></div>
        <div className="border border-skyBlue w-[260px] h-[800px]">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
