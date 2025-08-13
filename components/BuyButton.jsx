"use client";

import { getCart } from "@/actions/getCart";
import { toggleToCart } from "@/actions/toggleToCart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const BuyButton = ({ id }) => {
  const router = useRouter();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      let cart = await getCart();
      if (cart.includes(id)) {
        setIsInCart(true);
      } else {
        setIsInCart(false);
      }
    };

    fetchCart();
  }, [id]);
  return (
    <div
      className="buy-btn inline-block w-full md:w-fit text-center cursor-pointer py-2 px-5 rounded-lg text-white duration-300 hover:shadow-inner hover:shadow-black/20 hover:scale-95 bg-primary"
      role="button"
      onClick={async () => {
        await toggleToCart(id);
        setIsInCart((prev) => !prev);
        router.refresh();
      }}
    >
      {!isInCart ? (
        <div className="flex items-center gap-2">
          <FaCartArrowDown />
          <span>Add To Cart</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <FaCircleCheck />

          <span>Done</span>
        </div>
      )}
    </div>
  );
};

export default BuyButton;
