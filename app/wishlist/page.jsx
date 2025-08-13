import PageTitle from "@/components/PageTitle";
import WishListContent from "@/components/WishListContent";

const page = () => {
  return (
    <main>
      <PageTitle title={"your wishlist"} />
      <WishListContent />
    </main>
  );
};

export default page;
