import { FooterLinks } from "@/data/footerLinks";
import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  href: string;
}

const FooterLink: React.FC<FooterLinks> = ({ title, href }) => {
  return (
    <li className="flex items-center gap-x-3">
      <span className="text-primaryColor">-</span>
      <Link
        href={href}
        className="text-gray-500 font-semibold transition-all hover:text-primaryColor"
      >
        {title}
      </Link>
    </li>
  );
};

export default FooterLink;
