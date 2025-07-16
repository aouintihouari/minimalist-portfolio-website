const ProjectBackground = ({ project }) => {
  return (
    <section className="text-blue my-[10%]">
      <div className="my-10 hidden h-[1px] w-full bg-[#33323D] opacity-30 sm:block lg:w-[70%]"></div>
      <div>
        <div className="sm:flex sm:gap-[10%]">
          <div>
            <h1 className="ibarra my-[5%] text-[40px] leading-[42px] font-bold tracking-[-0.36px] sm:my-0">
              {project.title}
            </h1>
            <p className="sans text-[15px] leading-[30px] tracking-[0px] sm:hidden lg:my-[3%] lg:block lg:w-[30vw]">
              {project.description}
            </p>
            <ul className="text-green sans my-[5%] text-[13px] leading-[30px] font-bold tracking-[0px] whitespace-nowrap lg:my-[3%] lg:text-[16px]">
              <li>Interaction Design / Front End Development</li>
              <li>HTML / CSS / JS</li>
            </ul>
            <a className="sans flex h-[48px] w-[178px] cursor-pointer items-center justify-center border-2 border-[#33323D] text-[12px] leading-none tracking-[2px]">
              VISIT WEBSITE
            </a>
          </div>
          <p className="sans hidden text-[15px] leading-[30px] tracking-[0px] sm:block lg:hidden">
            {project.description}
          </p>
        </div>
      </div>
      <div className="my-10 h-[1px] w-full bg-[#33323D] opacity-30 sm:block lg:w-[70%]"></div>
    </section>
  );
};

export default ProjectBackground;
