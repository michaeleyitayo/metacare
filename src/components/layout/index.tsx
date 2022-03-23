import React from "react";
import Header from "./header";
import SideBar from "./sidebar/index";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
