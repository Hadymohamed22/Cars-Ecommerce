import PageTitle from "@/components/PageTitle";
import WishListContent from "@/components/WishListContent";

export const metadata = {
  title: "Wishlist | Car E-Commerce",
  description:
    "View and manage your saved favorite cars and products in your wishlist.",
  keywords: ["Wishlist", "Favorite Cars", "Car E-Commerce", "Saved Products"],
  openGraph: {
    title: "Wishlist | Car E-Commerce",
    description:
      "View and manage your saved favorite cars and products in your wishlist.",
    siteName: "Car E-Commerce",
    type: "website",
  },
};

const page = () => {
  return (
    <main>
      <PageTitle title={"your wishlist"} />
      <WishListContent />
    </main>
  );
};

export default page;
