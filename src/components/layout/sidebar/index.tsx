import React from "react";
import Nav from "./nav";

const SideBar: React.FC = () => {
  return (
    <div className="w-[262px] border-r-[1px]  border-r-[#ECEBF5] h-[100vh]">
      <div className="w-full pt-[21px] pl-[22px] pr-[19px]">
        <div className="w-full border-reg py-[12px] px-[30px] rounded-[8px] flex items-center gap-2 mb-[10px]">
          <div className="w-[20px] h-[20px]"></div>
          <div className="">
            <p className="font-bold text-[14px]">Metacare</p>
            <p className="text-[12px] font-normal text-primary">
              adeyinka@metacare.app
            </p>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default SideBar;
