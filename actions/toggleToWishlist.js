"use server";

import { cookies } from "next/headers";

export async function toggleToWishlist(id) {
  const cookiesStore = await cookies();
  const wishlistCookies = JSON.parse(
    cookiesStore.get("wishlist")?.value || "[]"
  ).map(String);
  let strID = String(id);
  let updatedWishlist;
  if (wishlistCookies.includes(strID)) {
    updatedWishlist = wishlistCookies.filter((e_id) => e_id !== strID);
  } else {
    updatedWishlist = [...wishlistCookies, strID];
  }
  cookiesStore.set("wishlist", JSON.stringify(updatedWishlist), {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return updatedWishlist;
}
