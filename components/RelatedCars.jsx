"use client";
import { getProductBy } from "@/utils/getProductBy";
import SectionTitle from "./SectionTitle";
import RelatedCarsToView from "./RelatedCarsToView";
import { useEffect, useState } from "react";

const RelatedCars = ({ type }) => {
  const [relatedCars, setRelatedCars] = useState([]);
  useEffect(() => {
    getProductBy("type", type).then((data) => setRelatedCars(data));
  }, [type]);
  return (
    <div className="related-cars">
      <div className="container mx-auto px-5">
        <SectionTitle title="Related Cars" />
      </div>
      <RelatedCarsToView cars={relatedCars} />
    </div>
  );
};

export default RelatedCars;
