import React from "react";
import FooterLink from "./FooterLink";
import { FooterLinks } from "@/data/footerLinks";

interface Props {
  title: string;
  links: FooterLinks[];
}

const FooterLinkList: React.FC<Props> = ({ title, links }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold my-10 md:mt-0">{title}</h2>
      <ul className="list-none flex flex-col gap-y-5">
        {links.map((link) => (
          <FooterLink {...link} key={link.title.concat(link.href)} />
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
