import ContentWrapper from "@/components/Products/ContentWrapper";
import { FilterProvider } from "@/context/FiltersContext";

export const metadata = {
  title: "Products | Car E-Commerce",
  description:
    "Explore our wide range of cars and accessories at competitive prices in our Car E-Commerce store.",
  keywords: [
    "Car Products",
    "Online Car Shop",
    "Car Accessories",
    "Buy Cars Online",
    "Vehicles",
  ],
  openGraph: {
    title: "Products | Car E-Commerce",
    description:
      "Explore our wide range of cars and accessories at competitive prices in our Car E-Commerce store.",
    siteName: "Car E-Commerce",
    type: "website",
  },
};

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
