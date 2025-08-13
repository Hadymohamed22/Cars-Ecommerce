export const fetchCars = () => {
  return fetch("https://6885fd6ff52d34140f6b1124.mockapi.io/ecommerce/v1/cars")
    .then((res) => res.json())
    .catch((err) => {
      console.error(`data fetched is failed : ${err}`);
    });
};
