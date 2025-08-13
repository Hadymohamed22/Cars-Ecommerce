import Image from "next/image";
import styles from "./CarDetails.module.scss";
import Stars from "../Stars";
import Love from "../Love";
import CarInfoBox from "../CarInfoBox";
import RelatedCars from "../RelatedCars";
import { getWishlist } from "@/actions/getWishlist";
import BuyButton from "../BuyButton";

const CarDetails = async ({
  id,
  image,
  title,
  rate,
  buyers,
  description,
  type,
  fuel,
  engine,
  sale,
  price,
}) => {
  let wishlist = await getWishlist();
  let isLiked = wishlist.includes(id);
  return (
    <div className={`${styles["car-details"]} car-details my-12`}>
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          className={`${styles.image} image flex items-center justify-center rounded-2xl bg-primary h-[400px]`}
        >
          <div className="image-container w-[70%] h-[200px] relative z-10">
            <Image src={image} alt={title} fill />
          </div>
        </div>
        <div className="info rounded-2xl bg-white p-5 flex flex-col">
          <div className="title flex justify-between items-center">
            <div className="title-reviews">
              <h3 className="text-2xl md:text-3xl text-secondary font-bold mb-1">
                {title}
              </h3>
              <div className="rate flex items-center gap-1">
                <Stars rate={rate} />
                <span className="text-[#596780] text-xs md:text-sm">
                  {" "}
                  {buyers} Reviewers
                </span>
              </div>
            </div>
            <Love id={id} isLiked={isLiked} />
          </div>
          <p className="text-sm md:text-base text-gray-400 mt-3">
            {description}
          </p>
          <div className="more-info grid grid-cols-2 grid-rows-2 px-5 py-3 border-t border-gray-300 gap-y-2 mt-3">
            <CarInfoBox infoText={type} text="Car Type" />
            <CarInfoBox infoText={buyers} text="Car Buyers" />
            <CarInfoBox infoText={fuel} text="Car Fuel" />
            <CarInfoBox infoText={engine} text="Car Engine" />
          </div>
          <div className="buy flex flex-col md:flex-row gap-y-3 items-center justify-between mt-auto">
            <div className="price text-center md:text-start">
              <h5 className="font-bold text-xl md:text-2xl">${price}K</h5>
              {sale !== 0 && sale !== "false" && (
                <p className="text-xs text-para line-through">{sale}K</p>
              )}
            </div>
            <BuyButton id={id} />
          </div>
        </div>
      </div>
      <RelatedCars type={type} />
    </div>
  );
};

export default CarDetails;
