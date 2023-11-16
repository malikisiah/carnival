import CarouselMarketPlace from "./components/CarouselMarketPlace";
import LatestDeals from "./components/LatestDeals";
import { getItems } from "../../lib/utils";

// import { getData } from "../../../utils";
import FloorProducts from "./FloorProducts";

export default async function Page() {
  const hairItems = await getItems("Hair_Items");
  const nailItems = await getItems("Nail_Items");
  const makeupItems = await getItems("Makeup_Items");
  const eyelashItems = await getItems("Eyelash_Items");
  const accessoryItems = await getItems("Accessory_Items");

  return (
    <>
      <div className="bg-white">
        <CarouselMarketPlace />
        <LatestDeals />
        <FloorProducts header="HAIR" items={hairItems} theme="#ff4601" />
        <FloorProducts header="NAILS" items={nailItems} theme="#00ae31" />
        <FloorProducts header="MAKE-UP" items={makeupItems} theme="#9683ec" />
        <FloorProducts
          header="EYELASHES"
          items={eyelashItems}
          theme="#ff2e98"
        />
        <FloorProducts
          header="ACCESSORIES"
          items={accessoryItems}
          theme="#e6bd37"
        />
        {/* TODO: ADD floor products for make-up, eyelashes, and accessories */}
      </div>
    </>
  );
}
