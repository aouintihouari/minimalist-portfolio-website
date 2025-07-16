import { NavLink } from "react-router";

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "Manage",
      description:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
      image: {
        desktop: "./images/portfolio/desktop/image-portfolio-manage@2x.jpg",
        tablet: "./images/portfolio/desktop/image-portfolio-manage@2x.jpg",
        mobile: "./images/portfolio/mobile/image-portfolio-manage@2x.jpg",
      },
      layout: "left",
    },
    {
      id: 2,
      title: "Bookmark",
      description:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
      image: {
        desktop: "./images/portfolio/desktop/image-portfolio-bookmark@2x.jpg",
        tablet: "./images/portfolio/desktop/image-portfolio-bookmark@2x.jpg",
        mobile: "./images/portfolio/mobile/image-portfolio-bookmark@2x.jpg",
      },
      layout: "right",
    },
    {
      id: 3,
      title: "Insure",
      description:
        "This was a small project which mostly consisted of HTML and CSS. I built a fully responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
      image: {
        desktop: "./images/portfolio/desktop/image-portfolio-insure@2x.jpg",
        tablet: "./images/portfolio/desktop/image-portfolio-insure@2x.jpg",
        mobile: "./images/portfolio/mobile/image-portfolio-insure@2x.jpg",
      },
      layout: "left",
    },
    {
      id: 4,
      title: "Fylo",
      description:
        "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
      image: {
        desktop: "./images/portfolio/desktop/image-portfolio-fylo@2x.jpg",
        tablet: "./images/portfolio/desktop/image-portfolio-fylo@2x.jpg",
        mobile: "./images/portfolio/mobile/image-portfolio-fylo@2x.jpg",
      },
      layout: "right",
    },
  ];

  return (
    <div>
      {projects.map((project) => (
        <section
          className={`${project.layout === "right" && "sm:flex-row-reverse"} mt-[10%] sm:flex sm:items-center sm:gap-[15%]`}
          key={project.id}
        >
          <picture className="sm:max-h-full sm:w-[50%]">
            <source
              srcSet={project.image.desktop}
              media="(min-width: 1024px)"
            />
            <source srcSet={project.image.tablet} media="(min-width: 769px)" />
            <source srcSet={project.image.mobile} media="(max-width: 768px)" />
            <img src={project.image.mobile} alt={project.title} />
          </picture>
          <article className="text-[#33323D] sm:h-[100%] sm:max-h-full sm:w-[50%]">
            <div className="my-[10%] h-[1px] w-full bg-[#33323D] opacity-30 sm:mt-0"></div>
            <h2 className="ibarra text-[40px] leading-[42px] font-bold tracking-[-0.36px]">
              {project.title}
            </h2>
            <p className="sans my-[10%] text-[15px] leading-[30px] tracking-[0px] opacity-80 lg:text-[16px]">
              {project.description}
            </p>
            <NavLink
              to={`${project.title.toLowerCase()}`}
              className="my-[10%] flex h-[48px] w-[175px] cursor-pointer items-center justify-center border-2 border-[#33323D]"
            >
              VIEW PROJECT
            </NavLink>
            <div
              className={`${project.id === projects.length && "hidden sm:block"} my-[10%] h-[1px] w-full bg-[#33323D] opacity-30 sm:m-0`}
            ></div>
          </article>
        </section>
      ))}
    </div>
  );
};

export default Gallery;
