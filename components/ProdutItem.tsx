import numberToCurrency from "@/utils/convertNumberToCurrency";
import urlFor from "@/utils/sanity-image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Prop = {
  name: string;
  image: unknown;
  slug: string;
  price: number;
};

export default function ProdutItem({ name, image, slug, price }: Prop) {
  return (
    <Link href={`/shop/${slug}`}>
      {/* image */}
      <div className="">
        <Image
          src={`${urlFor(image)}`}
          alt={name}
          width={360}
          height={360}
          priority
          unoptimized
        />
      </div>

      {/* name */}
      <p className="tracking-widest text-[0.85rem] capitalize font-semibold my-2">
        {name}
      </p>
      {/* price */}
      <p className="text-mainPurple font-bold text-[1rem] my-2">
        ₦{numberToCurrency(price)}
      </p>
    </Link>
  );
}
