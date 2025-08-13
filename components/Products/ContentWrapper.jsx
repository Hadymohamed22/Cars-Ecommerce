import CustomCheckBox from "@/components/Products/filters/CustomCheckBox";
import CustomRangeSlider from "@/components/Products/filters/CustomRangeSlider";
import FilteredData from "@/components/FilteredData";
import { Suspense } from "react";

const ContentWrapper = () => {
  return (
    <div className="content grid grid-cols-1 md:grid-cols-5">
      <aside className="filters bg-white p-5 col-span-1 md:col-span-1">
        <div className="type">
          <h5 className="text-sm text-para mb-3">TYPE</h5>
          <div className="types flex flex-row md:flex-col items-start flex-wrap gap-3">
            <CustomCheckBox text="All" num="11" />
            <CustomCheckBox text="Sport" num="3" />
            <CustomCheckBox text="SUV" num="5" />
            <CustomCheckBox text="Hatchback" num="2" />
          </div>
        </div>
        <div className="category">
          <h5 className="text-sm text-para mb-3 mt-7">CATEGORIES</h5>
          <div className="categories flex flex-row md:flex-col items-start flex-wrap gap-3">
            <CustomCheckBox text="manual" num="3" />
            <CustomCheckBox text="automatic" num="5" />
          </div>
        </div>
        <div className="price">
          <h5 className="text-sm text-para mb-3 mt-7">PRICE</h5>
          <div className="categories flex flex-row md:flex-col items-start flex-wrap gap-3">
            <CustomRangeSlider min={0} max={1000} label="max price" />
          </div>
        </div>
      </aside>
      <Suspense
        fallback={
          <h2 className="text-primary font-bold animate-pulse text-3xl md:text-4xl">
            Loading...
          </h2>
        }
      >
        <FilteredData className="col-span-1 md:col-span-4" />
      </Suspense>
    </div>
  );
};

export default ContentWrapper;
