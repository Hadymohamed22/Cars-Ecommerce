"use server";

import { cookies } from "next/headers";

export async function getWishlist() {
  let cookiesStore = await cookies();
  let wishlist = JSON.parse(cookiesStore.get("wishlist")?.value || "[]");
  return wishlist;
}
