"use client";

import { useFilters } from "@/context/FiltersContext";
import { useState } from "react";

const CustomCheckBox = ({ text, isChecked = false }) => {
  const { setFilters } = useFilters();
  const [checked, setChecked] = useState(isChecked);

  const handleChange = (e) => {
    let sessionFilters = sessionStorage.getItem("filters");
    let currentFilters = Array.isArray(JSON.parse(sessionFilters))
      ? JSON.parse(sessionFilters)
      : [];

    const isNowChecked = e.target.checked;
    setChecked(isNowChecked);
    if (isNowChecked) {
      currentFilters.push(text);
      sessionStorage.setItem("filters", JSON.stringify(currentFilters));
      setFilters(currentFilters);
    } else {
      let newFilters = currentFilters;
      newFilters = newFilters.filter((e) => e !== text);
      sessionStorage.setItem("filters", JSON.stringify(newFilters));
      setFilters(newFilters);
    }
  };

  return (
    <label className="flex items-center space-x-2 min-w-[96px]">
      <input
        type="checkbox"
        className="hidden peer"
        checked={checked}
        onChange={handleChange}
      />
      <span className="w-5 h-5 inline-block border-2 border-[#3563E9] rounded-md peer-checked:bg-primary peer-checked:after:rotate-[360deg] after:duration-300 peer-checked:relative peer-checked:after:content-['✓'] peer-checked:after:text-white peer-checked:after:absolute peer-checked:after:top-1/2 peer-checked:after:left-1/2 peer-checked:after:transform peer-checked:after:-translate-x-1/2 peer-checked:after:-translate-y-1/2 cursor-pointer"></span>
      <span className="text-gray-700">{text}</span>
    </label>
  );
};

export default CustomCheckBox;
