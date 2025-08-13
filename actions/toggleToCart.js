"use server";

import { cookies } from "next/headers";
import { getCart } from "./getCart";

export async function toggleToCart(id) {
  let cookiesStore = await cookies();
  let cart = await getCart();
  let updatedCart;

  if (cart.includes(id)) {
    updatedCart = cart.filter((e_id) => e_id != id);
  } else {
    updatedCart = [...cart, id];
  }
  cookiesStore.set("cart", JSON.stringify(updatedCart), {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return updatedCart;
}
