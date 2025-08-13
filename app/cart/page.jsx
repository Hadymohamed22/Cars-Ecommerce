import CartContent from "@/components/CartContent";
import PageTitle from "@/components/PageTitle";

const page = () => {
  return (
    <main>
      <PageTitle title={"your cart"} />
      <CartContent />
    </main>
  );
};

export default page;
