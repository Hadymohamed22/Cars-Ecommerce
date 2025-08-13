"use client";
import Image from "next/image";
import CarCardTitle from "./CarCardTitle";
import CarInfoBox from "./CarInfoBox";
import PriceBuyBox from "./Price_BuyBox";
import { useEffect, useState } from "react";
import { getWishlist } from "@/actions/getWishlist";

const CarCard = ({
  id,
  title,
  type,
  image,
  engine,
  fuel,
  buyers,
  sale,
  price,
  buyLink,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    const fetchWishlist = async () => {
      let wishlist = await getWishlist();
      if (wishlist.map(String).includes(String(id))) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    };

    fetchWishlist();
  }, [id]);
  return (
    <div className="card bg-white rounded-lg p-3 md:p-5">
      <CarCardTitle
        title={title}
        type={type}
        id={id}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
      />
      <div className="image my-12 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[50px] before:bg-gradient-to-t before:from-white before:to-white/0 before:z-10">
        <div className="image-container mx-auto w-[90%] h-[120px] relative">
          <Image src={image} alt={`${title} ${type} car`} fill />
        </div>
      </div>
      <div className="info flex items-center justify-between flex-wrap">
        <CarInfoBox icon="fuel" infoText={fuel} />
        <CarInfoBox icon="engine" infoText={engine} />
        <CarInfoBox icon="buyers" infoText={buyers} />
      </div>
      <PriceBuyBox sale={sale || 0} price={price} buyLink={buyLink} />
    </div>
  );
};

export default CarCard;
