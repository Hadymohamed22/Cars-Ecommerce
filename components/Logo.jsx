import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className="text-2xl md:text-4xl text-primary font-bold" href="/">
      MORENT
    </Link>
  );
};

export default Logo;
