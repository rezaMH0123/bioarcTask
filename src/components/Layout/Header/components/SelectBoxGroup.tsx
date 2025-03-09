import SelectBox, { OptionType } from "../../../SelectBox";

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

type SelectBoxGroupProps = {
  className?: string;
};

const SelectBoxGroup = ({ className }: SelectBoxGroupProps) => (
  <div className={className}>
    <div className="h-16 md:h-full flex items-center">
      <SelectBox options={options} width="120px" height="25px" />
      <span className="text-darkGray ml-1">:از طرف</span>
    </div>
    <div className="h-16 md:h-full flex items-center mr-2">
      <SelectBox options={options2} width="100px" height="25px" />
    </div>
    <div className="h-16 md:h-full flex items-center mr-2">
      <SelectBox options={options3} width="140px" height="25px" />
      <span className="text-darkGray ml-1">: پلی کلنیک</span>
    </div>
  </div>
);
export default SelectBoxGroup;
