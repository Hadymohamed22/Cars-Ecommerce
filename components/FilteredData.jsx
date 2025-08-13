"use client";

import { fetchCars } from "@/utils/FetchCars";
import { useEffect, useState } from "react";
import Cars from "./Cars";
import { useFilters } from "@/context/FiltersContext";

const FilteredData = ({ className }) => {
  const [cars, setCars] = useState([]); // cars filtered or not it will display on screen
  const [allCars, setAllCars] = useState([]); // all cars from api
  const { filters, maxPrice } = useFilters();

  // check and add cars in localstorage
  useEffect(() => {
    let savedCars = localStorage.getItem("cars");

    // set data in localstorage
    if (savedCars) {
      setCars(JSON.parse(savedCars));
      setAllCars(JSON.parse(savedCars));
    } else {
      fetchCars().then((data) => {
        setCars(data);
        setAllCars(data);
        localStorage.setItem("cars", JSON.stringify(data));
      });
    }
  }, []);

  // filter data by types and engine
  useEffect(() => {
    if (filters && filters.length > 0 && maxPrice) {
      let lowerCaseFilters = filters.map((f) => f.toLowerCase());
      let filteredCars = allCars.filter((car) => {
        if (lowerCaseFilters.includes("all")) return true;
        let matchType = lowerCaseFilters.includes(
          String(car.type).toLowerCase()
        );
        let matchEngine = lowerCaseFilters.includes(
          String(car.engine).toLowerCase()
        );
        let stored = sessionStorage.getItem("max-price");
        let currentMaxPrice =
          stored !== null ? Number(stored) : Number(maxPrice);
        let matchPrice = Number(car.price) <= Number(currentMaxPrice);
        return matchType && matchEngine && matchPrice;
      });
      setCars(filteredCars);
    } else {
      setCars(allCars);
    }
  }, [filters, maxPrice, allCars]);

  return <Cars data={cars} className={className} />;
};

export default FilteredData;
