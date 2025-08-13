"use server";

import { cookies } from "next/headers";
import { getCart } from "./getCart";

export async function removeFromCart(id) {
  let cookiesStore = await cookies();
  let cart = await getCart();
  let updatedCart = cart.filter((e_id) => e_id !== id);
  cookiesStore.set("cart", JSON.stringify(updatedCart), {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}
