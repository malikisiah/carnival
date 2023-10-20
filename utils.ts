import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
  updateDoc,
  getDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";

import { firebaseApp } from "./firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// database connection
const db = getFirestore(firebaseApp);

const getItems = async (collectionName: string) => {
  let res: ShopItem[] = [];

  const q = query(collection(db, collectionName), orderBy("name"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => res.push(doc.data() as ShopItem));

  return res;
};

const saveItem = async (userID: string, item: CartItem) => {
  const userRef = doc(db, "users", "aePESWDPn4WySlPQYHm4N6hsGfr1");
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    await updateDoc(userRef, {
      orderHistory: arrayUnion(item),
    });
  }
};

export { getItems, saveItem };
