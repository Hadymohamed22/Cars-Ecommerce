import CarCard from "../CarCard";

const Products = async ({ className = "" }) => {
  const res = await fetch(
    "https://6885fd6ff52d34140f6b1124.mockapi.io/ecommerce/v1/cars"
  );
  const cars = await res.json();
  return (
    <div className={`${className} products`}>
      <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cars.map((car) => {
          return (
            <CarCard
              key={car.id}
              title={car.name}
              buyers={car.buyers}
              image={car.image}
              engine={car.engine}
              fuel={car.fuel}
              type={car.type}
              price={car.price}
              buyLink={`/cars/${car.id}`}
              sale={car.sale}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
