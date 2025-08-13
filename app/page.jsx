import Hero from "@/components/HomeHero/Hero";
import PopularCars from "@/components/popular cars/PopularCars";
import RecommendedCars from "@/components/recommended cars/RecommendedCars";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularCars />
      <RecommendedCars />
    </main>
  );
}
