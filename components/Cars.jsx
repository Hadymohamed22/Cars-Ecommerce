import CarCard from "./CarCard";

const Cars = ({ data = [], className }) => {
  return (
    <div className={`${className} cars`}>
      <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.length === 0 && (
          <h2 className="text-primary font-bold text-3xl md:text-4xl animate-pulse">
            Loading...
          </h2>
        )}
        {data.map((car) => {
          return (
            <CarCard
              id={car.id}
              key={car.id}
              title={car.name}
              buyers={car.buyers}
              image={car.image}
              engine={car.engine}
              fuel={car.fuel}
              type={car.type}
              price={car.price}
              buyLink={`/cars/${car.slug}`}
              sale={car.sale}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cars;
