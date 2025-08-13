import CarDetails from "@/components/carDetails/CarDetails";
import { getProductBy } from "@/utils/getProductBy";

export async function generateStaticParams() {
  const res = await fetch(
    `https://6885fd6ff52d34140f6b1124.mockapi.io/ecommerce/v1/cars/`
  );
  const data = await res.json();
  return data.map((car) => ({
    slug: car.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const car = await getProductBy("slug", slug);

  if (!car) {
    return {
      title: "Product Not Found",
      description: "This car could not be found.",
    };
  }

  return {
    title: car.name,
    description: car.description,
    openGraph: {
      title: car.name,
      description: car.description,
      images: [car.image],
    },
  };
}

const page = async ({ params }) => {
  const { slug } = await params;
  const car = await getProductBy("slug", slug);

  return (
    <CarDetails
      id={car.id}
      image={car.image}
      title={car.name}
      rate={car.rate}
      buyers={car.buyers}
      description={car.description}
      type={car.type}
      fuel={car.fuel}
      engine={car.engine}
      price={car.price}
      sale={car.sale}
    />
  );
};

export default page;
