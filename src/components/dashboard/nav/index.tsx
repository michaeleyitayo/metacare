import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface ILink {
  to: string;
}

const Link: FC<ILink> = ({ children, to }) => {
  const location = useLocation();
  console.log(location);
  return (
    <NavLink
      to={to}
      className={
        "text-[16px] h-full flex items-center" +
        (location.pathname === to
          ? "  border-b-[2px] border-b-[#6837EF] text-black"
          : "")
      }
    >
      {children}
    </NavLink>
  );
};

const Nav = () => {
  return (
    <div className="h-[58px] border-b border-grey flex items-center gap-[40px] px-[40px] text-primary">
      <Link to="/">Efficiency</Link>
      <Link to="/volume">Volume</Link>
      <Link to="/cus">Customer Satisfaction</Link>
      <Link to="/backlog">Backlog</Link>
    </div>
  );
};

export default Nav;
