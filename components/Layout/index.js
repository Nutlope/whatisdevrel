import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className=" mx-auto max-h-full max-w-6xl">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
