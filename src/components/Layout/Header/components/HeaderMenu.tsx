import { Link } from "react-router";
import SelectBox, { OptionType } from "../../../SelectBox";

type TmenuOption = { label: string; path: string }[];
const menuOption: TmenuOption = [
  { label: "پنل من", path: "/dashboard" },
  { label: "بیماران من", path: "/patients" },
  { label: "درمان", path: "/treatment" },
  { label: "مالی", path: "/finance" },
  { label: "مدیریت", path: "/management" },
];

const options: OptionType[] = [
  { value: "1", label: "سرویس 1" },
  { value: "2", label: "سرویس 2" },
  { value: "3", label: "سرویس 3" },
];

const HeaderMenu = () => {
  return (
    <div className="w-full md:flex md:flex-row-reverse border-b border-[#DDF1F7] px-4 md:px-10 py-4 text-right bg-white">
      <div className="flex justify-between items-center w-full md:w-fit  md:justify-end mb-10 md:mb-0 md:ml-20 ">
        <SelectBox
          options={options}
          className="font-secondary"
          firstOption={false}
          placeholder="سرویس‌ها"
          width="120px"
          fontSize="20px"
        />
      </div>

      <ul className="flex flex-col md:flex-row md:items-center  md:justify-end w-full md:w-fit gap-4 md:gap-x-8 font-primary text-[15px] md:text-[16px]">
        {menuOption.map((item) => (
          <li
            key={item.path}
            className="cursor-pointer text-grayMedium font-secondary bg-[#F7F9FF] md:bg-transparent py-2 px-4 md:px-0 rounded-md shadow-sm md:shadow-none hover:bg-[#eaf1ff] md:hover:bg-transparent transition-all"
          >
            <Link to={item.path} className="block hover:text-blue-600">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenu;
