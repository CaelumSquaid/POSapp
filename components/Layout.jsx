import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({children}) {
  return (
    <div className="h-full flex flex-col">
      <div className="h-[10vh]">
        <Navbar />
      </div>
      <div className="flex-1">{children}</div>
      <div className="h-[10vh]">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
