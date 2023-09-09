import ShopComponent from "./ShopComponent";
import LatestDeals from "./components/LatestDeals";
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { firebaseApp } from "../../../firebase/config";
import Example from "./FloorProducts";
import FloorProducts from "./FloorProducts";

async function getData() {
  const db = getFirestore(firebaseApp);
  let res: ShopItem[] = [];

  const q = query(collection(db, "Hair_Items"), orderBy("name"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => res.push(doc.data() as ShopItem));

  return res;
}

export default async function Page() {
  const items = await getData();

  return (
    <>
      <FloorProducts />
      {/* <ShopComponent header="HAIR" items={items} /> */}
      <LatestDeals />
    </>
  );
}
