import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { CartProvider } from "@/context/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Carnvial",
  description: "Capstone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="garden">
      <body className={inter.className}>
        <CartProvider>
          <NavBar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
