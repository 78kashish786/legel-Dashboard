import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/Sidebar";
import Main from "./_components/Main";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Legel Dashboard",
  description: "Created with Love By Kashish Kataria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-12 ">
          <div className="col-span-2  ">
            <Sidebar  />
          </div>
          <div className="col-span-10">
            <Header />
            <Main>
              {children}
            </Main>
          </div>

        </div>
        {/* {children} */}
      </body>
    </html>
  );
}
