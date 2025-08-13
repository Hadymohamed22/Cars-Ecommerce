import { getWishlist } from "@/actions/getWishlist";
import CarSummaryBox from "./CarSummaryBox";

const WishListContent = async () => {
  let wishlist = await getWishlist();
  let res = await fetch(
    "https://6885fd6ff52d34140f6b1124.mockapi.io/ecommerce/v1/cars"
  );
  let data = await res.json();
  let cars = data.filter((e) => wishlist.includes(e.id));
  return (
    <div className="content-container container mx-auto px-5 mb-12 flex flex-col gap-10">
      {wishlist.length === 0 ? (
        <h4 className="text-xl md:text-xl text-secondary">
          Don't Have Wishlist.
        </h4>
      ) : (
        cars.map((e) => (
          <CarSummaryBox
            id={e.id}
            key={e.id}
            name={e.name}
            image={e.image}
            type={e.type}
            engine={e.engine}
            fuel={e.fuel}
            price={e.price}
            sale={e.sale}
          />
        ))
      )}
    </div>
  );
};

export default WishListContent;
