import Link from "next/link";
import React from "react";

const footLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Shop",
    link: "/shop",
  },

  {
    name: "Cart",
    link: "/shop/cart",
  },
];

export default function Footer() {
  return (
    <footer className="w-full py-10 lg:px-40 px-5 bg-mainPurple">
      <div className="flex justify-between gap-5 items-center lg:mx-96 mx-20">
        {footLinks.map((links, index) => (
          <Link key={index} href={links.link}>
            <div className="text-white font-semibold tracking-widest text-[0.85rem] uppercase">
              {links.name}
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10 mb-5 text-mainYellow font-black text-4xl">
        Ohreassa Technology
      </div>

      <div className="text-center mb-10 px-10">
        <p className="text-[0.85rem] text-white font-semibold tracking-wide">
          No. 2 St. Patrick’s road opposite St. Patrick’s church building Alaba
          international
        </p>

        <p className="text-[0.85rem] text-white font-semibold tracking-wide my-2">
          Call Us On: 08122214307
        </p>
      </div>

      <div className="w-full h-[1px] bg-white" />

      <div className="text-center mt-10 text-white text-[0.75rem]">
        © Ohreassa Technology. Developed by NIPPYSKY.
      </div>
    </footer>
  );
}
