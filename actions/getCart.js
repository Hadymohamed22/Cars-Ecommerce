"use server";

import { cookies } from "next/headers";

export async function getCart() {
  let cookiesStore = await cookies();
  let cart = JSON.parse(cookiesStore.get("cart")?.value || "[]");
  return cart;
}
