import Link from "next/link";
import React from "react";

export default function SlideTwo() {
  return (
    <section
      className="w-full lg:h-screen h-[300px] bg-cover lg:bg-fill flex justify-center items-center px-5 lg:px-20 py-10"
      style={{
        backgroundImage: "url('/home/HeroSlide2.webp')",
      }}
    >
      <div className="flex flex-col items-center">
        {/* <h1 className="text-white lg:text-4xl text-2xl font-bold text-center">
          Ohreassa Technology
        </h1> */}

        <h4 className="text-white lg:text-xl font-medium my-5 text-center px-10 lg:px-60">
          The Best Place To Get Your Rechargable Lights, Solar Street Lights,
          Solar Generators, and More..
        </h4>

        <Link href={"/shop"}>
          <button className="bg-mainPurple py-2 px-7 rounded-full text-[0.85rem] text-white tracking-widest mt-5 hover:bg-mainYellow">
            View Our Shop
          </button>
        </Link>
      </div>
    </section>
  );
}
