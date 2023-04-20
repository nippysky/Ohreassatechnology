import Navbar from "@/components/Navbar";
import Head from "next/head";
import client from "@/utils/client";
import SomeProducts from "@/components/Home/SomeProducts";

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

      <main>
        <Navbar />
        <SomeProducts products={products} />
      </main>
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
