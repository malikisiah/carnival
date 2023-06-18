import "./globals.css";
import NavBar from "../components/navbar";
import { Inter } from "next/font/google";

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
    <html lang='en' data-theme='garden'>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
