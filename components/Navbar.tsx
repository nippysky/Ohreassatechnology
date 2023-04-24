import { selectItems } from "@/redux/slices/cartSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RiShoppingCartLine } from "react-icons/ri";
import Image from "next/image";
import Logo from "../public/home/OhreassaWhite.svg";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const MENULINKS = [
  {
    name: "Solar Street Light",
    path: "/solar-street-light",
  },

  {
    name: "Solar Flood Light",
    path: "/solar-flood-light",
  },

  {
    name: "Rechargables",
    path: "/rechargables",
  },
];

export default function Navbar() {
  const { asPath } = useRouter();
  const [mobile, setMobile] = useState(false);
  const items = useSelector(selectItems);

  return (
    <header className="w-full flex gap-10 justify-between items-center py-3 bg-mainPurple px-5 lg:px-20">
      {/* Logo */}
      <Link href={"/"}>
        <div className="w-[20%] text-white font-semibold text-[1.5rem]">
          <Image
            src={Logo}
            alt="Ohreassa Logo"
            unoptimized
            width={400}
            height={100}
          />
        </div>
      </Link>

      <nav className="w-[80%] flex gap-10 justify-end items-center">
        {/* menu links */}
        <div className="lg:flex gap-10 justify-end items-center hidden">
          <Link href={"/solar-street-light"}>
            <div
              className={`font-semibold text-[0.75rem] tracking-widest uppercase ${
                asPath === "/solar-street-light"
                  ? "bg-mainYellow py-1 px-3 rounded-full text-mainPurple"
                  : "text-white"
              }`}
            >
              Solar Street Light
            </div>
          </Link>

          <Link href={"/solar-flood-light"}>
            <div
              className={`font-semibold text-[0.75rem] tracking-widest uppercase ${
                asPath === "/solar-flood-light"
                  ? "bg-mainYellow py-1 px-3 rounded-full text-mainPurple"
                  : "text-white"
              }`}
            >
              Solar Flood Light
            </div>
          </Link>

          <Link href={"/rechargables"}>
            <div
              className={`font-semibold text-[0.75rem] tracking-widest uppercase ${
                asPath === "/rechargables"
                  ? "bg-mainYellow py-1 px-3 rounded-full text-mainPurple"
                  : "text-white"
              }`}
            >
              Rechargables
            </div>
          </Link>
        </div>

        {/* cart */}
        <div
          className={` ${
            asPath === "/shop/cart" ? " text-mainYellow" : "text-white"
          } flex justify-center`}
        >
          <a href={"/shop/cart"}>
            <div className={`flex relative`}>
              {/* bag */}
              <RiShoppingCartLine size={22} />
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

        {/* Harmburger Menu */}
        <div
          className="text-white lg:hidden flex cursor-pointer"
          onClick={() => setMobile(true)}
        >
          <HiOutlineMenu size={30} />
        </div>
      </nav>

      {/* Mobile Menu Div */}
      {mobile && (
        <section className="w-1/2 h-screen fixed top-0 right-0 bg-mainPurple pt-5 px-5 z-50 duration-500">
          <div className="text-white flex justify-end ">
            <div className="cursor-pointer" onClick={() => setMobile(false)}>
              <IoClose size={30} />
            </div>
          </div>

          <nav className="flex flex-col gap-10 mt-10 text-white">
            {MENULINKS.map((link, index) => (
              <div
                key={index}
                className="text-passengerWhite text-[0.75rem] font-medium tracking-widest uppercase"
              >
                <Link href={link.path}>{link.name}</Link>
              </div>
            ))}
          </nav>
        </section>
      )}
    </header>
  );
}
