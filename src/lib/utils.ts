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

import { firebaseApp } from "../../firebase/config";
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

const saveItem = async (item: ShopItem) => {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);

      const today = new Date();

      item.purchaseDate = `${
        today.getMonth() + 1
      }-${today.getDate()}-${today.getFullYear()}`;

      if (userSnap.exists()) {
        await updateDoc(userRef, {
          orderHistory: arrayUnion(item),
        });
      }
    } else {
      console.log("User is signed out");
    }
  });
};

const getPurchaseHistory = async () => {
  return new Promise<ShopItem[]>(async (resolve, reject) => {
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;

        const userRef = doc(db, "users", uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          resolve(userSnap.data().orderHistory);
        } else {
          reject("No such document!");
        }
      } else {
        reject("User is signed out");
      }
    });
  });
};

export { getItems, saveItem, getPurchaseHistory };
