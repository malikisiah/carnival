import Categories from "@/components/Categories";
import CGGearHotDeals from "./components/CGGearHotDeals";
import CGHeader from "./CGHeader";

export default function Page() {
  return (
    <>
      <CGHeader />
      <div className="flex items-center justify-center pt-8">
        <CGGearHotDeals />
      </div>
      <div className="flex min-h-screen justify-center items-center bg-white">
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
