import React from "react";
import Header from "./header";
import SideBar from "./sidebar/index";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 border-l-[1px]  border-l-[#ECEBF5] h-full">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
