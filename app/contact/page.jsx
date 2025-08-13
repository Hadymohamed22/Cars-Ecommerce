import ContactData from "@/components/Contact Page/ContactData";
import ContactForm from "@/components/Contact Page/ContactForm";
import SubHero from "@/components/SubHero";

export const metadata = {
  title: "Contact Us | Car E-Commerce",
  description:
    "Get in touch with Car E-Commerce for any inquiries, support, or partnership opportunities.",
  keywords: [
    "Contact",
    "Car E-Commerce",
    "Customer Support",
    "Help",
    "Get in Touch",
  ],
  openGraph: {
    title: "Contact Us | Car E-Commerce",
    description:
      "Get in touch with Car E-Commerce for any inquiries, support, or partnership opportunities.",
    siteName: "Car E-Commerce",
    type: "website",
  },
};

const page = () => {
  return (
    <main>
      <SubHero title="Contact" />
      <div className="container my-5 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <ContactData
          className="col-span-1 md:col-span-2 lg:col-span-1"
          title="Get In Touch"
        />
        <ContactForm className="col-span-1 md:col-span-2 lg:col-span-2" />
      </div>
    </main>
  );
};

export default page;
