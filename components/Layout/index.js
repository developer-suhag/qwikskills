import { CssBaseline } from "@mui/material";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <CssBaseline>{children}</CssBaseline>
      </main>
      <footer>{/* <Footer /> */}</footer>
    </>
  );
};

export default Layout;
