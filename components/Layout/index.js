import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className='mx-auto max-w-6xl px-4 '>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
