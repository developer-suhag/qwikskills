import { CssBaseline } from "@mui/material";
import React from "react";
import Navigation from "../shared/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      {/* Navigation  */}
      <Navigation />
      {/* main body  */}
      <main>
        <CssBaseline>{children}</CssBaseline>
      </main>
      {/* footer  */}
      <footer>{/* <Footer /> */}</footer>
    </>
  );
};

export default Layout;
