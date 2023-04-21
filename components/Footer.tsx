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

      <div className="text-center my-10 text-mainYellow font-black text-4xl">
        Ohreassa Technology
      </div>

      <div className="w-full h-[1px] bg-white" />

      <div className="text-center mt-10 text-white text-[0.75rem]">
        © Ohreassa Technology. Developed by NIPPYSKY.
      </div>
    </footer>
  );
}
