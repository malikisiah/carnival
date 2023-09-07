import ShopComponent from "./ShopComponent";
import LatestDeals from "./components/LatestDeals";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { firebaseApp } from "../../../firebase/config";

async function getData() {
  const db = getFirestore(firebaseApp);
  let res: ShopItem[] = [];

  const query = await getDocs(collection(db, "Hair_Items"));

  query.forEach((doc) => res.push(doc.data() as ShopItem));

  return res;
}

export default async function Page() {
  const items = await getData();

  getData();

  return (
    <div className="flex min-h-screen justify-center items-center">
      <ShopComponent header="HAIR" items={items} />
      <LatestDeals/>
    </div>
  );
}
