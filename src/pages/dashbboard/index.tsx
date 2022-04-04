import React from "react";
import Nav from "../../components/dashboard/nav";
import Layout from "../../components/layout";
import search from "../../assets/icons/search.svg";
import caret from "../../assets/icons/caret.svg";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Nav />
      <div className="px-[40px] pt-[33px] pb-[32px] flex items-center gap-[24px]">
        <h2 className="text-[24px] font-bold">Efficiency Analytics</h2>
        <div className="w-[350px] h-[44px] rounded-[8px] border-[1px] border-grey ml-auto flex items-center px-[18px]">
          <img src={search} className="w-[16px]" alt="" />
          <input
            type="text"
            placeholder="Search"
            className="flex h-full text-[16px] placeholder-[#A3A3C2] text-black font-normal outline-none ml-[18px] flex-1"
          />
        </div>
        <div className="h-[44px] rounded-[8px] border-[1px] border-grey flex items-center justify-between text-[16px] font-bold cursor-pointer overflow-hidden">
          <select
            name=""
            id="thisselect"
            style={{
              WebkitAppearance: "none",
              MozAppearance: "none",
              textIndent: "1px",
              textOverflow: "",
            }}
            autoFocus={true}
            className="pl-[16px] outline-none pr-[19.5px] flex-1 h-full cursor-pointer"
          >
            <option value="Filter Options">Filter Options</option>
            <option value="Option 1">Option 1</option>
          </select>
          <label
            className="pr-[16px] h-full flex items-center cursor-pointer"
            htmlFor="thisselect"
          >
            <img src={caret} alt="" />
          </label>
        </div>
        <button className="bg-[#25BB87] h-[44px] w-[105px] text-[16px] text-center text-white rounded-[8px]">
          Export
        </button>
      </div>
    </Layout>
  );
};

export default Dashboard;
