import React, { useEffect, useState } from "react";
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
  firstOption?: boolean;
  fontSize?: string;
  placeholder?: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  className,
  width = "300px",
  height = "30px",
  firstOption = true,
  fontSize = "12px",
  placeholder,
}) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const handleChange = (
    newValue: OptionType | null,
    actionMeta: ActionMeta<OptionType>
  ) => {
    setSelectedOption(newValue);
  };

  useEffect(() => {
    if (firstOption === true) {
      setSelectedOption(options[0]);
    }
  }, []);

  const customStyles: StylesConfig<OptionType> = {
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#424242",
      fontSize: fontSize,
      paddingRight: "0px",
    }),
    control: (provided, state) => ({
      ...provided!,
      borderRadius: "8px",
      borderColor: state.isFocused ? "transparent" : "transparent",
      borderWidth: "0",
      outline: state.isFocused ? "none" : "none",
      boxShadow: state.isFocused ? "none" : "none",
      height: 25, // تغییر ارتفاع کنترل
      minHeight: 25,
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: "0px",
    }),
    placeholder: (provided) => ({
      ...provided!,
      fontSize: fontSize,
      paddingRight: "0px",
      color: "#424242",
    }),
    input: (provided) => ({
      ...provided,
      paddingRight: "0px",
      outline: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "0px",
      margin: "0px",
    }),
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
        placeholder={placeholder ? placeholder : "انتخاب کنید"}
        isSearchable={false}
      />
    </div>
  );
};

export default SelectBox;
