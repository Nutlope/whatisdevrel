import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className=' dark:bg-[#101010] '>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
