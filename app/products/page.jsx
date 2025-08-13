import ContentWrapper from "@/components/Products/ContentWrapper";
import { FilterProvider } from "@/context/FiltersContext";
const page = () => {
  return (
    <main>
      <FilterProvider>
        <ContentWrapper />
      </FilterProvider>
    </main>
  );
};

export default page;
