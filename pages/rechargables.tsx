import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ShopFeed from "@/components/Shop/ShopFeed";
import client from "@/utils/client";
import Head from "next/head";
import React from "react";

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

export default function Rechargables({
  products,
}: {
  products: ProductsObject;
}) {
  console.log({ result: products });
  return (
    <>
      <Head>
        <title>Rechargables - Ohreassa Technology</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className="w-full px-5 lg:px-32 py-1 my-10">
        <div className="mb-20 text-[2rem] font-bold">Rechargables</div>

        <ShopFeed products={products} />
      </section>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const fecthProduct = await client.fetch(
    `*[_type == "products" && category._ref == "927e07d4-9a77-4bcf-a0ed-3b8732a8eb2a"]`
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
