"use client";
import Image from "next/image";
import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";
export default function ProductCard({
  image,
  name,
  price,
  purchaseDate,
  stripe_id,
}: ShopItem) {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("No Context Present");
  }

  const { addToCart } = context;
  return (
    <article className="flex bg-white transition hover:shadow-xl">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          dateTime="2022-10-10"
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>Purchased</span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
          <span>{purchaseDate}</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56">
        <Image
          alt=""
          src={image}
          className="aspect-square h-full w-full object-cover"
          width={500}
          height={500}
          quality={100}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <div>
            <h3 className="font-bold uppercase text-gray-900">
              {name} - ${price}
            </h3>
          </div>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <button
            onClick={() =>
              addToCart({
                image: image,
                name: name,
                price: price,
                stripe_id: stripe_id,
                qty: 1,
              })
            }
            className="block bg-[#ff4601] px-5 py-3 text-center text-xs font-semibold uppercase text-white transition hover:bg-[#992a01]"
          >
            Purchase Again
          </button>
        </div>
      </div>
    </article>
  );
}
