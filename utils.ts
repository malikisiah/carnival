import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { firebaseApp } from "./firebase/config";

export const getItems = async (collectionName: string) => {
  const db = getFirestore(firebaseApp);
  let res: ShopItem[] = [];

  const q = query(collection(db, collectionName), orderBy("name"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => res.push(doc.data() as ShopItem));

  return res;
};
