import CarCard from "../CarCard";
import SectionTitle from "../SectionTitle";

const PopularCars = async () => {
  let res = await fetch(
    "https://6885fd6ff52d34140f6b1124.mockapi.io/ecommerce/v1/cars"
  );
  let data = await res.json();

  return (
    <section className="my-12">
      <div className="container mx-auto px-5 py-5 border-b border-[#e0e0e0]">
        <SectionTitle title="Popular Car" viewAll link="/" />
        <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.slice(0, 4).map((e) => {
            return (
              <CarCard
                key={e.slug}
                id={e.id}
                title={e.name}
                type={e.type}
                image={e.image}
                fuel={e.fuel}
                engine={e.engine}
                buyers={e.buyers}
                buyLink={`/cars/${e.slug}`}
                price={e.price}
                sale={e.sale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCars;
