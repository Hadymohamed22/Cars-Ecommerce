import Nav from "@/components/nav/Nav";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/footer/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Home",
    template: "%s | Cars E-Commerce",
  },
  description: "cars e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} bg-[#F6F7F9]`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
