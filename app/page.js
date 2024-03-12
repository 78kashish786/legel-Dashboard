import Image from "next/image";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import Main from "./_components/Main";
import { HomeIcon } from "lucide-react";

export default function Home({ children }) {
  return (
    <>
      {/* <div className="grid grid-cols-12 ">
        <div className="col-span-2 ">
          <Sidebar />
        </div>
        <div className="col-span-10">
          <Header /> */}
      <Main>
        {children}
        <h1><HomeIcon size={15} color="green" className="my-1" /></h1>
        <div className="w-full h-auto p-4 py-10 flex-col justify-center items-center text-center bg-white ">
          <h1 className="text-4xl font-semibold mb-5">Get Started with Legel Dashbaord</h1>
          <p className="text-xl font-[400] text-gray-600">Your all in one Court Managemnt System</p>
          <h4 className="text-green-400 font-[300] mt-5">Click on any of the menu to get started</h4>
        </div>
      </Main>
      {/* </div>

      </div> */}
    </>
  );
}
