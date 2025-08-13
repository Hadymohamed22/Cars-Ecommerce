import { getWishlist } from "@/actions/getWishlist";
import UserProcessIconBox from "./nav/UserProcessIconBox";
import { getCart } from "@/actions/getCart";

const WishlistCart = async () => {
  let wishlist = await getWishlist();
  let cart = await getCart();
  return (
    <div className="wishlist-cart hidden md:flex items-center gap-3">
      <UserProcessIconBox
        icon="wishlist"
        link="/wishlist"
        wishlistLength={wishlist.length}
      />
      <UserProcessIconBox icon="cart" link="/cart" cartLength={cart.length} />
    </div>
  );
};

export default WishlistCart;
