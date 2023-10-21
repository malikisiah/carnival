import Image from "next/image";

export default function ProductCard({ image, name, price }: ShopItem) {
  return (
    <div className="pl-12 block group w-48">
      <Image
        src={image}
        alt=""
        className="object-cover w-full rounded aspect-square"
        width={500}
        height={500}
        quality={100}
      />

      <div className="mt-3">
        <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
          {name}
        </h3>

        <p className="mt-1 text-sm text-gray-700">${price}</p>
      </div>
    </div>
  );
}
