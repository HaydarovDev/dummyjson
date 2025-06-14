import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
