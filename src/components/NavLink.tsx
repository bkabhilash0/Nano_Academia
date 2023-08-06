import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  href: string;
}

const NavLink: React.FC<Props> = ({ title, href }) => {
  return (
    <li className="font-semibold px-2">
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default NavLink;
