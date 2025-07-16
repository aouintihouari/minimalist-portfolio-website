const ButtonAbout = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection)
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <button
      onClick={scrollToAbout}
      className="group sans relative flex h-[48px] w-[200px] cursor-pointer items-center bg-[#203A4C] text-white transition-colors duration-300 hover:bg-[#5fb4a2]"
    >
      <span className="flex h-full w-[48px] items-center justify-center bg-[#1d3444] transition-colors duration-300 group-hover:bg-[#56a292]">
        <svg
          className="text-[#5FB4A2] transition-colors group-hover:text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="14"
        >
          <g fill="none" fillRule="evenodd" stroke="currentColor">
            <path d="M0 9l8 4 8-4" />
            <path opacity=".5" d="M0 5l8 4 8-4" />
            <path opacity=".25" d="M0 1l8 4 8-4" />
          </g>
        </svg>
      </span>
      <span className="ml-[40px]">ABOUT ME</span>
    </button>
  );
};

export default ButtonAbout;
