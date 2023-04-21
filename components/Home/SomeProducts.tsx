import Link from "next/link";
import React from "react";
import ProdutItem from "../ProdutItem";
import { motion } from "framer-motion";

type ProductsObject = {
  _id: string;
  name: string;
  slug: string;
  image: any;
  price: number;
  variation: string[];
  description: any;
  otherImages: any[];
}[];

export default function SomeProducts({
  products,
}: {
  products: ProductsObject;
}) {
  return (
    <section className="px-5 lg:px-40 mb-40">
      <section className="w-full flex flex-col lg:flex-row gap-5 justify-between items-center my-10">
        <div className="lg:w-1/2 w-full flex justify-start">
          <h1 className="font-black uppercase text-black tracking-wide text-2xl">
            Patronize The Best
          </h1>
        </div>

        <div className="lg:w-1/2 w-full lg:justify-end flex items-center">
          <Link href={"https://wa.link/eyxs7n"}>
            <button className=" bg-mainPurple text-center text-[0.75rem] font-semibold uppercase text-white tracking-wider py-3 px-5 hover:bg-mainYellow rounded-full">
              ShOP FROM OUR WHATSAPP
            </button>
          </Link>
        </div>
      </section>

      {/* List Some Products */}
      <section className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center place-content-center">
        {products.slice(0, 6).map((product: any) => (
          <motion.div
            key={product._id}
            whileHover={{ scale: 1.1 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className=" rounded-xl  p-3"
          >
            <ProdutItem
              name={product.name}
              image={product.image}
              slug={product.slug.current}
              price={product.price}
            />
          </motion.div>
        ))}
      </section>
    </section>
  );
}
