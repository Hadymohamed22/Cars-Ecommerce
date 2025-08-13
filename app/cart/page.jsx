import CartContent from "@/components/CartContent";
import PageTitle from "@/components/PageTitle";

export const metadata = {
  title: "Cart | Car E-Commerce",
  description:
    "Review the cars and products in your shopping cart before checkout.",
  keywords: [
    "Cart",
    "Shopping Cart",
    "Car E-Commerce",
    "Checkout",
    "Buy Cars Online",
  ],
  openGraph: {
    title: "Cart | Car E-Commerce",
    description:
      "Review the cars and products in your shopping cart before checkout.",
    siteName: "Car E-Commerce",
    type: "website",
  },
};

const page = () => {
  return (
    <main>
      <PageTitle title={"your cart"} />
      <CartContent />
    </main>
  );
};

export default page;
