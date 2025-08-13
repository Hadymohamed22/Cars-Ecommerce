import Link from "next/link";
import Logo from "../Logo";
import FooterColTitle from "./FooterColTitle";
import { footerLinksCols } from "./footerLinksCols";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container pt-12 mx-auto px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-5">
          <div className="col col-span-1 lg:col-span-2">
            <Logo />
            <p className="para-styles w-[90%] md:w-[85%] lg:w-[60%] mt-1">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          {footerLinksCols.map((col, colIndex) => {
            return (
              <div key={colIndex} className="col col-span-1 lg:col-span-1">
                <FooterColTitle title={col.title} />
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => {
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.link}
                          className="text-[#13131399] duration-300 text-xs md:text-sm relative before:absolute before:bottom-[-2px] before:left-0 before:w-[0%] before:h-[2px] before:duration-300 before:bg-primary hover:text-primary hover:before:w-full"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
