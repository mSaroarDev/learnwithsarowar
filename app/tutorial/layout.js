import { Inter } from "next/font/google";
import Navbar from "../components/NavbarT";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ওয়েব ডেভেলপমেন্ট টিউটোরিয়াল",
  description: "প্রোগ্রামিং শিখুন মাতৃভাষায়",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
