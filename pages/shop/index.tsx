import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";
import client from "../../utils/client";
import ShopFeed from "@/components/Shop/ShopFeed";
import Footer from "@/components/Footer";

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

export default function Shop({ products }: { products: ProductsObject }) {
  return (
    <>
      <Head>
        <title>Ohreassa Technology - Shop Page</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className="w-full px-5 lg:px-32 py-1 my-10">
        <div className="mb-20 text-[2rem] font-bold">Our Solar Shop</div>

        <ShopFeed products={products} />
      </section>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
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

  const fecthProduct: ProductsObject = await client.fetch(
    `*[_type == "products"]`
  );
  const products = fecthProduct.sort(() => Math.random() - 0.5);

  if (!products) {
    return {
      notfound: true,
    };
  }

  return {
    props: {
      products,
    },
    revalidate: 360,
  };
}
