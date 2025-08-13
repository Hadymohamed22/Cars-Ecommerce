"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const UserProcessIconBox = ({
  icon,
  link = "/",
  wishlistLength = 0,
  cartLength = 0,
}) => {
  const pathname = usePathname();
  const icons = {
    cart: <MdOutlineShoppingCart />,
    wishlist: <FaRegHeart />,
  };
  return (
    <Link
      className={`${
        pathname === link && "text-primary bg-gray-400/20"
      } wishlist relative w-8 h-8 md:w-9 md:h-9 rounded-full border border-gray-400 text-[#596780] elements-center-center duration-300 hover:text-primary hover:bg-gray-400/20 cursor-pointer`}
      href={link}
    >
      {icons[icon]}
      <div className="wishlist-count w-4 h-4 rounded-full bg-red-500 text-white elements-center-center absolute right-[-2px] top-[-7px] text-[10px]">
        {icon === "wishlist" ? wishlistLength : icon === "cart" && cartLength}
      </div>
    </Link>
  );
};

export default UserProcessIconBox;
