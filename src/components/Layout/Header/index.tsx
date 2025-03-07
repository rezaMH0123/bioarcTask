import ProfileIcon from "../../Icons/ProfileIcon";
import SelectBox, { OptionType } from "../../SelectBox";
import companyLogo from "./../../../assets/img/logo-w.png";

const options: OptionType[] = [
  { value: "1", label: "محمود اکبریان" },
  { value: "2", label: "رضا محنت کش" },
  { value: "3", label: "سارا احمدی" },
  { value: "4", label: "مبینا رحیمی" },
];

export default function Header() {
  return (
    <div className="bg-[#5178F5] h-16 flex items-center px-7 justify-between">
      <div className="w-2/3 border border-red-700 h-full flex items-center">
        <div className="rounded-full border-2 border-white  h-10 w-10 flex justify-center items-center p-2 relative ">
          <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50] border-2 border-white absolute -right-1 top-0 "></div>
          <ProfileIcon className="w-full h-full stroke-white" />
        </div>
        <div className="border border-white  w-[465px] h-14 bg-white px-4 rounded-md ml-6 shadow-[inset_0px_0px_7px_4px_#C7D3F7] flex">
          <SelectBox
            options={options}
            width="130px"
            height="25px"
            className="mt-2.5"
          />
        </div>
      </div>
      <div>
        <img src={companyLogo} alt="company-logo" />
      </div>
    </div>
  );
}
