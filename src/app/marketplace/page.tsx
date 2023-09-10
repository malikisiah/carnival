import LatestDeals from "./components/LatestDeals";
import { getData } from "../../../utils";
import FloorProducts from "./FloorProducts";

export default async function Page() {
  const hairItems = await getData("Hair_Items");
  const nailItems = await getData("Nail_Items");

  return (
    <>
      <div className="bg-white">
        <LatestDeals />
        <FloorProducts header="HAIR" items={hairItems} theme="#ff4601" />
        <FloorProducts header="NAILS" items={nailItems} theme="#00ae31" />
        {/* TODO: ADD floor products for make-up, eyelashes, and accessories */}
      </div>
    </>
  );
}
