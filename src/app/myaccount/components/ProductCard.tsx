import Image from "next/image";

export default function ProductCard({
  image,
  name,
  price,
  purchaseDate,
}: ShopItem) {
  return (
    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
      <div className="mt-1.5 sm:mt-0">
        <p className="text-gray-500">Purchased</p>

        <p className="font-medium">{purchaseDate}</p>
      </div>
      <Image
        alt="Home"
        src={image}
        className="h-56 w-full rounded-md object-cover"
        width={500}
        height={500}
        quality={100}
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">${price}</dd>
          </div>

          <div>
            <dt className="sr-only">Name</dt>

            <dd className="font-medium">{name}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
