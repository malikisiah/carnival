"use client";
import SideBarButton from "@/components/sideBarButton";
import Image from "next/image";
import { useState } from "react";

type ItemTableProps = {
  accessories: ShopItem[];
  hair: ShopItem[];
  makeup: ShopItem[];
  eyelashes: ShopItem[];
  nails: ShopItem[];
};

export default function ItemTable({
  accessories,
  hair,
  makeup,
  eyelashes,
  nails,
}: ItemTableProps) {
  const tableItems = [
    {
      label: "Accessories",
      title: "Accessory Shop Items",
      collection: "Accessory_Items",
      items: accessories,
    },
    {
      label: "Hair",
      title: "Hair Shop Items",
      collection: "Hair_Items",
      items: hair,
    },
    {
      label: "Make-Up",
      title: "Make-Up Shop Items",
      collection: "Makeup_Items",
      items: makeup,
    },
    {
      label: "Eyelashes",
      title: "Eyelash Shop Items",
      collection: "Eyelash_Items",
      items: eyelashes,
    },
    {
      label: "Nails",
      title: "Nail Shop Items",
      collection: "Nail_Items",
      items: nails,
    },
  ];

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 min-h-screen mt-16">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
          Shop Items
        </h3>
        <p className="text-gray-600 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="text-sm mt-12 overflow-x-auto">
        <ul
          role="tablist"
          className="w-full border-b flex items-center gap-x-3 overflow-x-auto"
        >
          {tableItems.map((item, idx) => (
            <li
              key={idx}
              className={`py-2 border-b-2 ${
                selectedItem == idx
                  ? "border-[#ff4601] text-[#ff4601]"
                  : "border-white text-gray-500"
              }`}
            >
              <button
                role="tab"
                aria-selected={selectedItem == idx ? true : false}
                aria-controls={`tabpanel-${idx + 1}`}
                className="py-2.5 px-4 rounded-lg duration-150 hover:text-[#ff4601] hover:bg-gray-50 active:bg-gray-100 font-medium"
                onClick={() => setSelectedItem(idx)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <table className="w-full table-auto text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="w-9/12 py-4 pr-6">
                {tableItems[selectedItem].title}
              </th>
              <th className="py-4 pr-6">Price</th>
              <th className="py-4 pl-6">Edit</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems[selectedItem].items.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4 whitespace-nowrap">
                  <div className="flex align-middle items-center">
                    <div className="avatar pr-4">
                      <div className="w-12 rounded-xl">
                        <Image
                          alt=""
                          width={500}
                          height={500}
                          quality={100}
                          src={item.image}
                        />
                      </div>
                    </div>
                    {item.name}
                  </div>
                </td>
                <td className="pr-6 py-4 whitespace-nowrap text-[#ff4601]">
                  ${item.price}
                </td>
                <td className="pr-6 py-4 whitespace-nowrap">
                  <span className="py-2 px-3 rounded-full font-semibold text-xs">
                    <SideBarButton
                      item={{
                        name: item.name,
                        price: item.price,
                        image: item.image,
                      }}
                      collection={tableItems[selectedItem].collection}
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
