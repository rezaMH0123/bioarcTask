import BellIcon from "../../Icons/BellIcon";
import CommentIcon from "../../Icons/Comment";
import ProfileIcon from "../../Icons/ProfileIcon";
import SettingIcon from "../../Icons/Setting";
import LanguageToggle from "../../LanguageToggle";
import SelectBox, { OptionType } from "../../SelectBox";
import companyLogo from "./../../../assets/img/logo-w.png";
import HeaderMenu from "./HeaderMenu";

const options: OptionType[] = [
  { value: "1", label: "محمود اکبریان" },
  { value: "2", label: "رضا محنت کش" },
  { value: "3", label: "سارا احمدی" },
  { value: "4", label: "مبینا رحیمی" },
];

const options2: OptionType[] = [
  { value: "1", label: "روماتولوژی " },
  { value: "2", label: "گوارش و کبد" },
  { value: "3", label: "غدد درون‌ریز" },
  { value: "4", label: "قلب و عروق" },
  { value: "5", label: "ریه‌شناسی " },
];

const options3: OptionType[] = [
  { value: "1", label: "بیمارستان شریعتی " },
  { value: "2", label: "بیمارستان لاله " },
  { value: "3", label: "بیمارستان امام خمینی " },
];

export default function Header() {
  return (
    <div>
      <div className="bg-[#5178F5] h-16 flex items-center px-7 justify-between">
        <div className="h-full flex items-center">
          <div className="rounded-full border-2 border-white  h-10 w-10 flex justify-center items-center p-2 relative ">
            <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50] border-2 border-white absolute -right-1 top-0 "></div>
            <ProfileIcon className="w-full h-full stroke-white" />
          </div>
          <div className="border border-white items-center font-primary text-[12px]  gap-x-2 w-[550px] h-10 bg-white px-4 rounded-md ml-6 shadow-[inset_0px_0px_7px_4px_#C7D3F7] flex">
            <div className="h-full flex items-center ">
              <SelectBox options={options} width="120px" height="25px" />
              <span className="text-darkGray ml-1">:از طرف</span>
            </div>
            <div className="h-full flex items-center mr-2">
              <SelectBox options={options2} width="100px" height="25px" />
            </div>
            <div className="h-full flex items-center mr-2">
              <SelectBox options={options3} width="140px" height="25px" />
              <span className="text-darkGray ml-1">: پلی کلنیک</span>
            </div>
          </div>
          <div className="ml-5 h-10  border border-lightBlue rounded-md flex items-center gap-x-5 px-5 ">
            <BellIcon className="w-5 h-5 stroke-lightBlue" />
            <CommentIcon className="w-5 h-5 stroke-lightBlue" />
            <div className="relative">
              <SettingIcon
                className="w-5 h-5 stroke-lightBlue"
                fill="#D9E1F6"
              />
              <div
                className="w-4 h-4 rounded-full bg-lightred border-2 border-white text-white flex 
            justify-center items-center absolute -right-2 -top-2 text-[10px] font-secondary"
              >
                3
              </div>
            </div>
          </div>
          <LanguageToggle />
        </div>
        <div>
          <img src={companyLogo} alt="company-logo" />
        </div>
      </div>
      <HeaderMenu />
    </div>
  );
}
