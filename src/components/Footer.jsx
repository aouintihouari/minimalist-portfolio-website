import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-[20%] flex w-full flex-col items-center sm:mt-[5vh] lg:mt-0">
      <div className="bg-blue mb-[20%] h-[1px] w-full opacity-30 sm:hidden"></div>
      <div className="text-center sm:mt-[1vh] sm:mb-[6vh] sm:flex sm:items-center sm:gap-[5%] lg:w-full lg:justify-between">
        <h6 className="ibarra mx-auto w-[80%] text-[40px] leading-[42px] font-bold tracking-[-0.36px] sm:text-left lg:ml-0 lg:w-[30%]">
          Interested in doing a project together?
        </h6>
        <div className="bg-blue hidden h-[1px] w-[113px] opacity-30 sm:block lg:w-[534px]"></div>
        <NavLink
          to="/contact-me"
          className="sans mx-auto my-[10%] flex min-h-[48px] min-w-[162px] items-center justify-center border-2 text-[12px] leading-none tracking-[2px] uppercase lg:my-[13vh] lg:mr-0"
        >
          contact me
        </NavLink>
      </div>
      <div className="bg-blue mt-[10%] flex w-screen flex-col items-center sm:mt-0 sm:flex-row sm:items-start sm:justify-between sm:px-[10vw] sm:py-[3%]">
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-[10%]">
          <img
            className="my-[30%] mr-[10%] sm:my-0"
            src="/images/footer-logo.svg"
            alt="footer logo"
          />
          <ul className="sans self-center text-center text-[12px] leading-none tracking-[2px] text-white sm:flex sm:flex-row sm:gap-[10%]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `my-[30%] whitespace-nowrap sm:my-0 ${isActive ? "text-green" : "text-white"}`
              }
            >
              <li className="my-[30%] whitespace-nowrap sm:my-0">HOME</li>
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `my-[30%] whitespace-nowrap sm:my-0 ${isActive ? "text-green" : "text-white"}`
              }
            >
              <li className="my-[30%] whitespace-nowrap sm:my-0">PORTFOLIO</li>
            </NavLink>
            <NavLink
              to="/contact-me"
              className={({ isActive }) =>
                `my-[30%] whitespace-nowrap sm:my-0 ${isActive ? "text-green" : "text-white"}`
              }
            >
              <li className="my-[30%] whitespace-nowrap sm:my-0">CONTACT ME</li>
            </NavLink>
          </ul>
        </div>
        <div className="mx-auto mt-[5%] mb-[10%] flex justify-center gap-[20%] sm:mx-0 sm:my-0 sm:justify-start">
          <img src="/images/icons/github.svg" alt="github" />
          <img src="/images/icons/twitter.svg" alt="twitter" />
          <img src="/images/icons/linkedin.svg" alt="linkedin" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
