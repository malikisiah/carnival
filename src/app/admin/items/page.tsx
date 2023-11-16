import ItemTable from "./itemTable";
import { getItems } from "@/lib/utils";

export default async function ItemsPage() {
  const hairItems = await getItems("Hair_Items");
  const nailItems = await getItems("Nail_Items");
  const makeupItems = await getItems("Makeup_Items");
  const eyelashItems = await getItems("Eyelash_Items");
  const accessoryItems = await getItems("Accessory_Items");
  return (
    <>
      <ItemTable
        hair={hairItems}
        nails={nailItems}
        makeup={makeupItems}
        eyelashes={eyelashItems}
        accessories={accessoryItems}
      />
    </>
  );
}
