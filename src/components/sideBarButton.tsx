"use client";
import Image from "next/image";
import { updateItems } from "@/lib/utils";
import { SetStateAction, useState } from "react";
type sideBarProps = {
  item: ShopItem;
  collection: string;
};
export default function SideBarButton({ item, collection }: sideBarProps) {
  const [priceInput, setPriceInput] = useState(item.price);
  const [nameInput, setNameInput] = useState(item.name);

  function handlePriceChange(e: { target: { value: SetStateAction<any> } }) {
    setPriceInput(e.target.value);
  }

  function handleNameChange(e: { target: { value: SetStateAction<any> } }) {
    setNameInput(e.target.value);
  }
  return (
    <div className="drawer drawer-end">
      <input
        id={`drawer-${item.name}`}
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        <label
          htmlFor={`drawer-${item.name}`}
          className="drawer-button btn btn-info normal-case ml-2"
        >
          Edit
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor={`drawer-${item.name}`}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-fit bg-base-200 text-base-content my-96 flex items-center justify-center">
          <div className="avatar pb-6">
            <div className="w-24 rounded-xl">
              <Image
                alt=""
                height={500}
                width={500}
                quality={100}
                src={item.image}
              />
            </div>
          </div>
          <input
            type="text"
            placeholder={item.name}
            className="input w-full max-w-xs mb-6"
            onChange={(e) => handleNameChange(e)}
          />
          <input
            type="number"
            placeholder={item.price.toString()}
            className="input w-full max-w-xs mb-6"
            onChange={(e) => handlePriceChange(e)}
          />
          <button
            className="btn btn-primary normal-case"
            onClick={() => console.log(priceInput, nameInput)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
