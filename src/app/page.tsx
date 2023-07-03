"use client";
import Footer from "@/components/Footer";

import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../../firebase/config";
import DealsComponent from "../components/HotDeals";
import ItemCollection from "@/components/ItemCollection";
import Banner from "@/components/Banner";
import {
  makeUpItems,
  topSellersInItems,
  specialProductsItems,
  eventsItems,
} from "@/components/Items";

export default function Home() {
  const [user, loading, error] = useAuthState(firebaseAuth);
  console.log("Loading:", loading, "|", "Current user:", user);

  return (
    <>
      <DealsComponent />
      <Banner img1="/adspc1.jpg" img2="/adspc6.jpg" />

      <ItemCollection
        items={makeUpItems}
        heading="MAKE UP"
        subHeadings={["WOMEN FASHION", "BAGS", "SHOES", "GLASSES"]}
      />

      <ItemCollection
        items={topSellersInItems}
        heading="TOP SELLERS IN"
        subHeadings={["DRESSES", "TOP", "BOTTOM", "JEWELRY", "SKIN CARE"]}
      />
      <ItemCollection
        items={specialProductsItems}
        heading="SPECIAL PRODUCTS"
        subHeadings={[
          "WOMEN FASHION",
          "JACKETS",
          "PANTS",
          "PERFUME",
          "JEWELRY",
          "ACCESORIES",
        ]}
      />
      <ItemCollection
        items={eventsItems}
        heading="EVENTS"
        subHeadings={["FOR WOMEN", "FOR MEN", "FOR KIDS", "ACCESSORIES"]}
      />
      <Banner img1="/adspc1.jpg" img2="/adspc2.jpg" />
    </>
  );
}
