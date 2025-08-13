"use client";
import { useFilters } from "@/context/FiltersContext";
import { useState } from "react";

const CustomRangeSlider = ({
  min = 0,
  max = 100,
  value = 500,
  onChange,
  label = "max price",
}) => {
  const { setMaxPrice } = useFilters();
  const [rangeValue, setRangeValue] = useState(value);

  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    setRangeValue(newValue);
    sessionStorage.setItem("max-price", newValue);
    setMaxPrice(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="flex flex-col space-y-2 w-full max-w-xs">
      <input
        type="range"
        min={min}
        max={max}
        value={rangeValue}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
                  focus:outline-none focus:ring-2 focus:ring-[#3563E9]"
        style={{
          background: `linear-gradient(to right, #3563E9 0%, #3563E9 ${
            ((rangeValue - min) * 100) / (max - min)
          }%, #e5e7eb ${
            ((rangeValue - min) * 100) / (max - min)
          }%, #e5e7eb 100%)`,
        }}
      />
      <label className="text-gray-700">
        {label}: {rangeValue}K
      </label>
    </div>
  );
};

export default CustomRangeSlider;
