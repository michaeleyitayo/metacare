import { FC } from "react";

interface ISubNavItem {
  pos: number;
}

const SubNavItem: FC<ISubNavItem> = ({ children, pos }) => {
  return (
    <p
      className={`text-[16px] pl-[20px] leading-[1.2] cursor-pointer ${
        !pos && "border-l-reg text-black"
      }`}
    >
      {children}
    </p>
  );
};

export default SubNavItem;
