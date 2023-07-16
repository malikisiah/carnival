import Categories from "@/components/Categories";
import CGGearHotDeals from "./components/CGGearHotDeals";

export default function Page() {
  return (
    <>
    <CGGearHotDeals/>
    <div className="flex min-h-screen justify-center items-center bg-white">
      {<h1 className="text-3xl text-center"> CG Gear </h1>}
      <>
        <Categories
            subHeading="Women"
            image="https://via.placeholder.com/238x239"
        />
        <Categories
            subHeading="Men"
            image="https://via.placeholder.com/238x239"
        />
        <Categories
            subHeading="Accessory"
            image="https://via.placeholder.com/238x239"
        />
      </>
    </div>
    </>
  );
}
