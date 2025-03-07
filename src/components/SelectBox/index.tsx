import React, { useState } from "react";
import Select, { StylesConfig, ActionMeta } from "react-select";

export type OptionType = {
  value: string;
  label: string;
};

interface SelectBoxProps {
  options: OptionType[];
  className?: string;
  width?: string;
  height?: string;
}

const customStyles: StylesConfig<OptionType> = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#717C99",
    fontSize: "14px",
    paddingRight: "0px",
  }),
  control: (provided, state) => ({
    ...provided!,
    borderRadius: "8px",
    borderColor: state.isFocused ? "transparent" : "transparent",
    borderWidth: "0",
    outline: state.isFocused ? "none" : "none",
    boxShadow: state.isFocused ? "none" : "none",
  }),
  placeholder: (provided) => ({
    ...provided!,
    paddingRight: "0px",
    color: "#B3B3B3",
  }),
  input: (provided) => ({
    ...provided,
    paddingRight: "0px",
    outline: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "0px", // اینجا برای کاهش فاصله استفاده می‌کنیم
    margin: "0px", // اینجا می‌توانید فاصله را کم کنید
  }),
};

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  className,
  width = "300px",
  height = "30px",
}) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const handleChange = (
    newValue: OptionType | null,
    actionMeta: ActionMeta<OptionType>
  ) => {
    setSelectedOption(newValue);
  };

  return (
    <div
      className={className}
      style={{
        width: width,
        height: height,
        direction: "rtl",
      }}
    >
      <Select<OptionType, false>
        options={options}
        value={selectedOption}
        onChange={handleChange}
        styles={customStyles}
      />
    </div>
  );
};

export default SelectBox;
