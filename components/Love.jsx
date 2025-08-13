"use client";
import { toggleToWishlist } from "@/actions/toggleToWishlist";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Love = ({ id, isLiked }) => {
  const [liked, setLiked] = useState(isLiked || false);
  const router = useRouter();
  return (
    <div
      className={`${
        liked && "rotate-y-[360deg]"
      } like duration-750 hover:translate-y-[-5px] cursor-pointer`}
      onClick={async () => {
        setLiked((prev) => !prev);
        await toggleToWishlist(id);
        router.refresh();
      }}
    >
      {liked ? (
        <FaHeart className="text-red-500 text-xl md:text-2xl" />
      ) : (
        <FaRegHeart className="text-gray-400 text-xl md:text-2xl" />
      )}
    </div>
  );
};

export default Love;
