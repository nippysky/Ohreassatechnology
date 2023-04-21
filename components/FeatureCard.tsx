import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdGppGood } from "react-icons/md";
import { BsPatchCheckFill } from "react-icons/bs";

export default function FeatureCard() {
  return (
    <section className="w-full py-20 lg:px-40 px-5 bg-violet-200">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center">
        {/* DELIVERY */}
        <div className="flex lg:justify-start justify-center gap-5 items-center lg:w-[33%] w-full text-mainPurple mb-10 lg:mb-0">
          <TbTruckDelivery size={40} />

          <p className="text-[1rem] font-semibold">Delivered With Care</p>
        </div>

        {/* QUALITY */}
        <div className="flex justify-center gap-5 items-center lg:w-[33%] w-full text-mainPurple mb-10 lg:mb-0">
          <BsPatchCheckFill size={40} />

          <p className="text-[1rem] font-semibold">Quality Products</p>
        </div>

        {/* SERVICE */}
        <div className="flex lg:justify-end justify-center gap-5 items-center lg:w-[33%] w-full text-mainPurple mb-10 lg:mb-0">
          <MdGppGood size={40} />

          <p className="text-[1rem] font-semibold">Excellence Service</p>
        </div>
      </div>
    </section>
  );
}
