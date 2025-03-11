import BellIcon from "../../Icons/BellIcon";
import CommentIcon from "../../Icons/Comment";
import ProfileIcon from "../../Icons/ProfileIcon";
import SettingIcon from "../../Icons/Setting";
import LanguageToggle from "../../LanguageToggle";
import companyLogo from "./../../../assets/img/logo-w.png";
import HeaderMenu from "./components/HeaderMenu";
import SelectBoxGroup from "./components/SelectBoxGroup";

export default function Header() {
  return (
    <div>
      <div className="bg-[#5178F5] h-72 md:h-36 lg:h-16  items-center lg:flex px-7 lg:justify-between ">
        <div className="w-full flex items-center">
          <div
            className="h-fit lg:h-full w-full md:w-fit  flex justify-between md:justify-normal 
          items-center mt-4 lg:mt-0  "
          >
            <div className="rounded-full border-2 border-white h-10 w-10 flex justify-center items-center p-2 relative">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50] border-2 border-white absolute -right-1 top-0"></div>
              <ProfileIcon className="w-full h-full stroke-white" />
            </div>
            <SelectBoxGroup className="hidden lg:flex border border-white items-center font-primary text-[12px] gap-x-2 w-[550px] h-10 bg-white px-4 rounded-md ml-6 shadow-[inset_0px_0px_7px_4px_#C7D3F7]" />
            <div className="ml-5 h-10 border border-lightBlue rounded-md flex items-center gap-x-5 px-5">
              <BellIcon className="w-5 h-5 stroke-lightBlue" />
              <CommentIcon className="w-5 h-5 stroke-lightBlue" />
              <div className="relative">
                <SettingIcon
                  className="w-5 h-5 stroke-lightBlue"
                  fill="#D9E1F6"
                />
                <div className="w-4 h-4 rounded-full bg-lightred border-2 border-white text-white flex justify-center items-center absolute -right-2 -top-2 text-[10px] font-secondary">
                  3
                </div>
              </div>
            </div>
            <LanguageToggle />
          </div>
          <div className="hidden md:block mt-4 lg:mt-0 ml-auto mr-10 lg:mr-0">
            <img src={companyLogo} alt="company-logo" />
          </div>
        </div>

        <SelectBoxGroup className="w-full flex flex-col items-end md:flex-row md:justify-between md:items-center h-48 md:h-10 lg:hidden border border-white font-primary text-[12px] mt-6 bg-white px-4 rounded-md shadow-[inset_0px_0px_7px_4px_#C7D3F7]" />
      </div>
      <HeaderMenu />
    </div>
  );
}
