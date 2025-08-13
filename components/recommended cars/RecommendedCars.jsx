import SectionTitle from "../SectionTitle";
import RecommendedCarsSwiper from "./RecommendedCarsSwiper";

const RecommendedCars = () => {
  return (
    <section className="my-12">
      <div className="container mx-auto px-5 py-5 border-b border-[#e0e0e0]">
        <SectionTitle title="Recommended Cars" />
        <div className="content">
          <RecommendedCarsSwiper />
        </div>
      </div>
    </section>
  );
};

export default RecommendedCars;
