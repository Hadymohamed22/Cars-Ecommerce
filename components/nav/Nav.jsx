import Image from "next/image";
import profileImage from "@/assets/images/profile-photo.png";
import NavLinks from "./NavLinks";
import Logo from "../Logo";
import WishlistCart from "../WishlistCart";

const Nav = () => {
  return (
    <nav className="py-4 bg-white px-2 border-b border-[#C3D4E966] relative">
      <div className="container mx-auto px-5 flex items-center justify-between">
        <div className="logo">
          <Logo />
        </div>
        <NavLinks />
        <div className="wishlist-cart-profile hidden md:flex items-center gap-3">
          <WishlistCart />
          <div className="profile relative w-8 h-8 md:w-9 md:h-9 rounded-full border border-gray-400 text-[#596780] overflow-hidden">
            <Image
              src={profileImage}
              className="object-cover"
              alt="user profile image"
              placeholder="blur"
              fill
              sizes="100%"
              priority
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
