"use client";
import { createContext, useContext, useState } from "react";

const filtersContext = createContext();

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState([]);
  const [maxPrice, setMaxPrice] = useState(500);
  return (
    <filtersContext.Provider
      value={{ filters, setFilters, maxPrice, setMaxPrice }}
    >
      {children}
    </filtersContext.Provider>
  );
}

export const useFilters = () => useContext(filtersContext);
