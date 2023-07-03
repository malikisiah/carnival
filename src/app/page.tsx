"use client";
import Footer from "@/components/footer";
import NavBar from "../components/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../../firebase/config";
import DealsComponent from "../components/HotDeals";
import MakeUp from "../components/MakeUp";
import TopSellersIn from "../components/TopSellersIn";
import SpecialProducts from "../components/SpecialProducts";
import Events from "../components/Events";
import Hero from "../components/Hero";

export default function Home() {
  const [user, loading, error] = useAuthState(firebaseAuth);
  console.log("Loading:", loading, "|", "Current user:", user);

  return (
    <div>
      <Hero />
      <DealsComponent />
      <MakeUp />
      <TopSellersIn />
      <SpecialProducts />
      <Events />
      <Footer />
    </div>
  );
}
