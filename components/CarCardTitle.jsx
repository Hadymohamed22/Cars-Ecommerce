"use client";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { toggleToWishlist } from "@/actions/toggleToWishlist";
import { useRouter } from "next/navigation";

const CarCardTitle = ({ id, title, type, isLiked = false, setIsLiked }) => {
  const router = useRouter();

  return (
    <div className="title flex items-center justify-between">
      <div className="text">
        <h5 className="text-secondary font-bold text-lg md:text-xl">{title}</h5>
        <p className="text-para text-xs md:text-sm">{type}</p>
      </div>
      <div
        className="isLiked cursor-pointer duration-300 hover:drop-shadow-md hover:scale-105"
        onClick={async () => {
          setIsLiked((prev) => !prev);
          await toggleToWishlist(id);
          router.refresh();
        }}
      >
        {isLiked ? (
          <FaHeart className="text-red-500 text-xl" />
        ) : (
          <FaRegHeart className="text-xl" />
        )}
      </div>
    </div>
  );
};

export default CarCardTitle;
