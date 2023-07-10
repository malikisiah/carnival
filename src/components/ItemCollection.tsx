import ItemCard from "./ItemCard";
import { item } from "./ItemCard";
import Image from "next/image";
import Link from "next/link";
type CollectionProps = {
  items: item[];
  heading: string;
  subHeadings: string[];
};
export default function ItemCollection(props: CollectionProps) {
  return (
    <div className="w-auto h-auto mt-5 flex justify-center">
      <div id="block-container" className="flex flex-col mx-auto">
        <div
          id="block-header"
          className="w-auto h-auto mb-5 flex justify-between"
        >
          <div className="p-2">{props.heading}</div>
          <div className="flex p-2 space-x-2">
            <Link
              href="#"
              className="border-r border-gray-900 pr-2 link link-hover"
            >
              {" "}
              ALL{" "}
            </Link>
            {props.subHeadings.map((item, idx) => {
              return (
                <Link
                  href="#"
                  key={idx}
                  className={`pr-2 link link-hover ${
                    idx === props.subHeadings.length - 1
                      ? ""
                      : "border-r border-gray-900"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex space-x-4">
          <div id="block-banner" className="w-226 h-348">
            <Image
              src="https://via.placeholder.com/226x348"
              alt="banner"
              width={350}
              height={350}
            />
          </div>
          <div id="block-tabs" className="w-872 h-348 space-x-4 flex">
            {props.items.map((item, idx) => {
              return (
                <ItemCard
                  key={idx}
                  productName={item.productName}
                  image={item.image}
                  link={item.link}
                  price={item.price}
                  oldPrice={item.oldPrice}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
