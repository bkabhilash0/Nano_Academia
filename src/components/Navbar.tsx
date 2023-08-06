"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import NavLink from "./NavLink";

// const variants: Variants = {
//   open: { opacity: 1, height: "auto" },
//   closed: { opacity: 0, height: 0 },
// };

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <nav className="absolute top-24 left-0 w-full flex items-center justify-center">
      <div className="px-3 bg-secondaryBgColor max-w-screen-xl w-full text-white grid grid-cols-2 items-center lg:flex lg:flex-row-reverse lg:pr-0 lg:bg-white/20 lg:overflow-hidden">
        <Link
          href={"/"}
          className="uppercase bg-primaryBgColor py-6 px-3 block text-sm font-semibold w-64 text-center"
        >
          Get Certificate
        </Link>

        <h2
          className="uppercase text-right cursor-pointer lg:hidden block"
          onClick={toggleNav}
        >
          Menu
        </h2>

        <div
          className={`col-span-2 bg-secondaryBgColor h-0 transition-all opacity-0 pointer-events-none
        ${showNav ? "h-80 opacity-100 pointer-events-auto" : " "} 
        lg:h-auto lg:flex-1 lg:bg-transparent lg:opacity-100 lg:pointer-events-auto`}
        >
          <ul
            className={`flex flex-col gap-y-5 px-3 py-5 lg:flex-row lg:gap-x-6`}
          >
            <NavLink title="Home" href="/" />
            <NavLink title="All Courses" href="/" />
            <NavLink title="About" href="/" />
            <NavLink title="Team" href="/" />
            <NavLink title="Pricing" href="/" />
            <NavLink title="Journal" href="/" />
            <NavLink title="Contact" href="/" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
