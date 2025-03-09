import { IconProps } from "@material-ui/core";
import CallIcon from "../../Icons/CallIcon";
import HealthIcon from "../../Icons/Health";

type TmenuItems = {
  path: string;
  name: string;
  icon: React.FC<IconProps>;
};
export const menuItems: TmenuItems[] = [
  {
    path: "/dashboard",
    name: "داشبورد",
    icon: HealthIcon,
  },
  {
    path: "/outgoing-calls",
    name: "تماس خروجی",
    icon: CallIcon,
  },
  {
    path: "/add-appointment",
    name: "افزودن نوبت",
    icon: HealthIcon,
  },
  {
    path: "/tasks",
    name: "وظایف",
    icon: HealthIcon,
  },
  {
    path: "/patients",
    name: "بیماران",
    icon: HealthIcon,
  },
  {
    path: "/employees",
    name: "کارمند",
    icon: HealthIcon,
  },
  {
    path: "/call-history",
    name: "تاریخچه تماس‌ها",
    icon: HealthIcon,
  },
];
