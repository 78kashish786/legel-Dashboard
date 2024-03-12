import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      {/* <div className="grid grid-cols-12 ">
        <div className="col-span-2 ">
          <Sidebar />
        </div>
        <div className="col-span-10">
          <Header />
          <Main>
            {children}
          </Main>
        </div>

      </div> */}
    </>
  );
}

