"use server";

import { cookies } from "next/headers";
import { getWishlist } from "./getWishlist";

export async function removeFromWishlist(id) {
  let cookiesStore = await cookies();
  let wishlist = await getWishlist();
  let updatedWishlist = wishlist
    .map(String)
    .filter((e_id) => e_id != String(id));
  cookiesStore.set("wishlist", JSON.stringify(updatedWishlist), {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}
