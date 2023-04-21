import { selectItems } from "@/redux/slices/cartSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { RiShoppingCartLine } from "react-icons/ri";

export default function Navbar() {
  const { asPath } = useRouter();
  const items = useSelector(selectItems);

  return (
    <header className="w-full flex gap-10 justify-between items-center py-3 bg-mainPurple px-5 lg:px-20">
      {/* Logo */}
      <Link href={"/"}>
        <div className="w-[30%] text-white font-semibold text-[1.5rem]">
          Ohreassa
        </div>
      </Link>

      <nav className="w-[70%] flex gap-10 justify-end items-center">
        {/* shop */}
        <Link href={"/shop"}>
          <div
            className={`font-semibold text-[0.85rem] tracking-wider ${
              asPath === "/shop"
                ? "bg-mainYellow py-1 px-3 rounded-full text-mainPurple"
                : "text-white"
            }`}
          >
            Shop
          </div>
        </Link>

        {/* cart */}
        <div
          className={` ${
            asPath === "/shop/cart" ? " text-mainYellow" : "text-white"
          } flex justify-center`}
        >
          <a href={"/shop/cart"}>
            <div className={`flex relative`}>
              {/* bag */}
              <RiShoppingCartLine size={25} />
              {/* count circle */}
              <div
                className={`w-[16px] h-[16px] bg-mainYellow rounded-full absolute bottom-0 -right-2 flex justify-center items-center text-mainBlue ${
                  asPath === "/shop/cart" ? "bg-white text-mainPurple" : null
                }`}
              >
                <small className="text-[0.65rem] font-bold">
                  {items.length}
                </small>
              </div>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
