import { Link } from "react-router";
import SelectBox, { OptionType } from "../../SelectBox";

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
    <div className="border-b border-[#DDF1F7] h-12 flex items-center justify-end gap-x-8 px-10">
      <ul className="flex items-center gap-x-5 font-primary h-full">
        {menuOption.map((item) => (
          <li
            key={item.path}
            className="cursor-pointer text-grayMedium font-secondary"
          >
            <Link to={item.path} className="hover:text-blue-500 transition">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <SelectBox
        options={options}
        className="font-secondary"
        firstOption={false}
        placeholder="سرویس ها"
        width="100px"
        height="25px"
        fontSize="18px"
      />
    </div>
  );
};

export default HeaderMenu;
