"use client";
import Footer from "@/components/footer";
import NavBar from "../components/navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../../firebase/config";
import DealsComponent from "../components/HotDeals";
import HomepageBanner from "@/components/homepageBanner";
import Carousel from "@/components/carousel";

export default function Home() {
  const [user, loading, error] = useAuthState(firebaseAuth);
  console.log("Loading:", loading, "|", "Current user:", user);

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="mb-5 text-5xl font-bold text-center">Carnival Guide</h1>
      </div>
      <Carousel />
      <HomepageBanner />
      <DealsComponent />
      <Footer />
    </div>
  );
}
