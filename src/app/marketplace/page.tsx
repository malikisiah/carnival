import LatestDeals from "./components/LatestDeals";
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { firebaseApp } from "../../../firebase/config";

import FloorProducts from "./FloorProducts";

async function getData(collectionName: string) {
  const db = getFirestore(firebaseApp);
  let res: ShopItem[] = [];

  const q = query(collection(db, collectionName), orderBy("name"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => res.push(doc.data() as ShopItem));

  return res;
}

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
