import { NavLink } from "react-router";

const Header = ({ openMenu, onOpenMenu }) => {
  return (
    <header className="relative mb-10 flex h-auto items-center justify-between">
      <img src="/images/logo.svg" alt="logo" />
      <img
        onClick={onOpenMenu}
        className="sm:hidden"
        src={
          openMenu ? "/images/icons/close.svg" : "/images/icons/hamburger.svg"
        }
        alt="hamburger"
      />
      <ul
        className={`${
          openMenu
            ? "bg-blue fixed top-[10%] right-[10%] z-4 flex h-[186px] w-[223px] flex-col items-center justify-center text-white"
            : "text-blue hidden sm:flex sm:items-center"
        } sans text-[12px] leading-none tracking-[2px]`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `my-[5%] sm:my-0 ${isActive && "text-green"}`
          }
        >
          <li>HOME</li>
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `my-[5%] sm:my-0 sm:ml-[5vw] ${isActive && "text-green"}`
          }
        >
          <li>PORTFOLIO</li>
        </NavLink>
        <NavLink
          to="/contact-me"
          className={({ isActive }) =>
            `my-[5%] sm:my-0 sm:ml-[5vw] ${isActive && "text-green"}`
          }
        >
          <li>CONTACT ME</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
