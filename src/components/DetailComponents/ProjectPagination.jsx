import { Link } from "react-router";
import projects from "../../data/projects.js";

const ProjectPagination = ({ project }) => {
  const previousProject = projects.find((p) => p.slug === project.previous);
  const nextProject = projects.find((p) => p.slug === project.next);

  return (
    <>
      <div className="mt-6 h-0.5 w-full bg-[#33323D] opacity-30"></div>
      <section className="flex w-full items-center justify-between text-[#33323D]">
        <Link
          to={`/portfolio/${previousProject.slug}`}
          className="relative flex cursor-pointer items-center"
        >
          <img
            className="absolute top-[-40%] left-0 sm:top-[30%]"
            src="/images/icons/arrow-left.svg"
            alt="left arrow"
          />
          <div className="w-full sm:ml-[30%]">
            <h4 className="ibarra text-[32px] leading-[36px] tracking-[-0.29px]">
              {previousProject.title}
            </h4>
            <p className="sans text-[16px] leading-[30px] tracking-[0px] whitespace-nowrap opacity-50">
              Previous Project
            </p>
          </div>
        </Link>
        <div className="h-[146px] w-0.5 bg-[#33323D] opacity-30"></div>
        <Link
          to={`/portfolio/${nextProject.slug}`}
          className="relative cursor-pointer"
        >
          <img
            className="absolute top-[-40%] right-0 sm:top-[30%]"
            src="/images/icons/arrow-right.svg"
            alt="right arrow"
          />
          <div className="w-full sm:mr-[3vw] lg:mr-[2vw]">
            <h4 className="ibarra text-[32px] leading-[36px] tracking-[-0.29px]">
              {nextProject.title}
            </h4>
            <p className="sans text-[16px] leading-[30px] tracking-[0px] opacity-50">
              Next Project
            </p>
          </div>
        </Link>
      </section>
      <div className="h-0.5 w-full bg-[#33323D] opacity-30"></div>
    </>
  );
};

export default ProjectPagination;
