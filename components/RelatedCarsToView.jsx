import CarCard from "./CarCard";

const RelatedCarsToView = ({ cars }) => {
  return (
    <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {cars.length === 0 && (
        <h2 className="text-primary font-bold animate-pulse text-3xl md:text-4xl">
          Loading...
        </h2>
      )}
      {cars.map((e) => {
        return (
          <CarCard
            id={e.id}
            key={e.slug}
            title={e.title}
            buyLink={`/cars/${e.slug}`}
            engine={e.engine}
            fuel={e.fuel}
            image={e.image}
            buyers={e.buyers}
            price={e.price}
            sale={e.sale}
            type={e.type}
          />
        );
      })}
    </div>
  );
};

export default RelatedCarsToView;
