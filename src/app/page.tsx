import Footer from "@/components/footer";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <div className='flex items-center justify-center min-h-screen'>
        <h1 className='mb-5 text-5xl font-bold text-center'>Carnival Guide</h1>
      </div>
      <Footer />
    </div>
  );
}
