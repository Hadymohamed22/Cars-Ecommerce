"use client";
import Link from "next/link";
import React from "react";

const PriceBuyBox = ({ sale, price, buyLink }) => {
  return (
    <div className="price-buy flex flex-col md:flex-row gap-y-3 items-center justify-between pt-5">
      <div className="price text-center md:text-start">
        <h5 className="font-bold text-xl md:text-2xl">${price}K</h5>
        {sale !== 0 && sale !== "false" && (
          <p className="text-xs text-para line-through">{sale}K</p>
        )}
      </div>
      <div className="buy w-full flex-grow md:grow-0 md:w-fit text-center">
        <Link
          href={buyLink}
          role="button"
          aria-label="buy car"
          className="inline-block w-full py-2 px-5 rounded-lg text-white duration-300 hover:shadow-inner hover:shadow-black/20 hover:scale-95 bg-primary"
        >
          Buy
        </Link>
      </div>
    </div>
  );
};

export default PriceBuyBox;
