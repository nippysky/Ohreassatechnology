import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import client from "@/utils/client";
import SomeProducts from "@/components/Home/SomeProducts";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Home/Hero";

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

export default function Home({ products }: { products: ProductsObject }) {
  return (
    <>
      <Head>
        <title>Ohreassa Technolgy - Home</title>
        <meta name="description" content="Ohreassa Technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />

      <main>
        <SomeProducts products={products} />

        <div className="w-full flex justify-center items-center mb-10">
          <Link href={"/shop"}>
            <button className="font-semibold border bg-mainPurple hover:bg-mainYellow text-white text-center text-clayBrown py-3 px-20 rounded-full">
              View All Products
            </button>
          </Link>
        </div>

        <FeatureCard />
      </main>

      <Footer />
    </>
  );
}

// className="px-5 lg:px-32"

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
