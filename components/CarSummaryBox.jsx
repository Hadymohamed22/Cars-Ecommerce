"use client";
import Image from "next/image";
import CarSummaryBoxInfo from "./CarSummaryBoxInfo";
import { IoCloseOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { removeFromWishlist } from "@/actions/removeFromWishlist";
import { removeFromCart } from "@/actions/removeFromCart";

const CarSummaryBox = ({
  name,
  type,
  engine,
  fuel,
  price,
  sale,
  image,
  id,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="car-summary-box flex justify-between items-center p-5 border-2 border-gray-300 rounded-2xl relative">
      <div className="left flex gap-5 items-center">
        <div className="image w-[350px] h-[150px] bg-[url(../assets/images/hero-bg1.svg)] bg-center bg-cover elements-center-center rounded-xl">
          <div className="image-container w-[80%] h-[80%] relative">
            <Image src={image} alt={`${name} car`} fill />
          </div>
        </div>
        <div className="info">
          <h5 className="text-xl md:text-2xl font-bold text-secondary">
            {name}
          </h5>
          <CarSummaryBoxInfo type="Type" text={type} />
          <CarSummaryBoxInfo type="Engine" text={engine} />
          <CarSummaryBoxInfo type="Fuel" text={fuel} />
        </div>
      </div>
      <div className="right price text-center md:text-start">
        <h5 className="font-bold text-2xl md:text-3xl text-secondary">
          ${price}K
        </h5>
        {sale !== 0 && sale !== "false" && (
          <p className="text-xs text-para line-through">${sale}K</p>
        )}
      </div>
      <div
        className="delete-icon w-8 h-8 md:w-9 md:h-9 bg-red-500 rounded-full elements-center-center text-white text-xl md:text-2xl absolute top-[-12px] right-[-6px] border-4 border-[#F6F7F9] cursor-pointer duration-300 hover:scale-115"
        onClick={async () => {
          if (pathname === "/cart") {
            await removeFromCart(id);
          } else if (pathname === "/wishlist") {
            await removeFromWishlist(id);
          }
          router.refresh();
        }}
      >
        <IoCloseOutline />
      </div>
    </div>
  );
};

export default CarSummaryBox;
