import Link from "next/link";

const Copyright = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div className="copyright mt-7 py-5 border-t border-[#13131329] flex flex-col md:flex-row md:justify-between items-center gap-y-3  text-xs md:text-sm">
      <div className="copyright-text text-center md:text-start">
        @{currentYear}{" "}
        <a
          href="https://www.linkedin.com/in/hady-elnifali/"
          target="_blank"
          className="underline duration-300 hover:text-primary"
        >
          Hady Mohamed
        </a>{" "}
        All rights reserved
      </div>
      <div className="policy-terms flex items-center gap-2 md:gap-5">
        <Link href="/" className="duration-300 hover:text-primary">
          Privacy & Policy
        </Link>
        <Link href="/" className="duration-300 hover:text-primary">
          Terms & Condition
        </Link>
      </div>
    </div>
  );
};

export default Copyright;
