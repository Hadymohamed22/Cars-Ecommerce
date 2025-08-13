export const getProductBy = async (by, content) => {
  const res = await fetch(
    `https://6885fd6ff52d34140f6b1124.mockapi.io/ecommerce/v1/cars/`
  );
  const data = await res.json();
  if (by === "slug") {
    return data.find((car) => car.slug === content);
  } else if (by === "type") {
    return data.filter((car) => car.type === content);
  }
};
