import Link from "next/link";
import React from "react";
import FooterLinkList from "./FooterLinkList";
import { explore_links, quick_links } from "@/data/footerLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-20 px-3">
      <div className="w-full max-w-screen-xl mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-5">
        <div className="">
          <Link href={"/"} className="mb-10 block">
            <h1 className="font-bold text-3xl leading-none">ACADEMIA</h1>
            <p className="text-primaryColor text-sm">
              Online Education & Learning
            </p>
          </Link>
          <p className="text-gray-400 mb-4">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="flex gap-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primaryColor"></div>
            <div className="w-10 h-10 rounded-full bg-primaryColor"></div>
            <div className="w-10 h-10 rounded-full bg-primaryColor"></div>
          </div>
        </div>
        <FooterLinkList title="Explore" links={explore_links} />
        <FooterLinkList title="Quick Links" links={quick_links} />
      </div>
    </footer>
  );
};

export default Footer;
