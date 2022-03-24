import { FC, useState } from "react";
import ang from "../../../../../assets/icons/ang.svg";
import ang2 from "../../../../../assets/icons/ang2.svg";
import SubNavItem from "./sub-nav-item";

interface IIcon {
  fill: string;
}

interface INavItem {
  Icon: FC<IIcon>;
  name: string;
  subNavs?: { name: string }[];
  isActive?: boolean;
}

const NavItem: FC<INavItem> = ({ Icon, name, subNavs, isActive }) => {
  const [active, setActive] = useState<boolean>(isActive || false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="w-full">
      <div
        className=" flex items-center gap-[18.25px] cursor-pointer"
        onClick={handleClick}
      >
        <Icon fill={active ? "#6837EF" : "#696D8C"} />
        <p
          className="text-[16px]"
          style={{ color: active ? "#6837EF" : "#696D8C" }}
        >
          {name}
        </p>
        {subNavs && (
          <img src={active ? ang2 : ang} className="ml-auto mt-[2px]" alt="" />
        )}
      </div>
      {subNavs && active && (
        <div
          className={
            "flex flex-col mt-[10px] gap-[10px] ml-[16px] text-primary"
          }
        >
          {subNavs.map((subNav, i) => (
            <SubNavItem key={i} pos={i}>
              {subNav.name}
            </SubNavItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
