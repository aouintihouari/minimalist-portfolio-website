import { NavLink } from "react-router";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="mt-30 flex flex-col sm:flex-row lg:mt-[15vh] lg:gap-[10vw]"
    >
      <picture className="mr-[10vw]">
        <source
          srcSet="./images/homepage/desktop/image-homepage-profile@2x.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="./images/homepage/tablet/image-homepage-profile@2x.jpg"
          media="(min-width: 769px)"
        />
        <source
          srcSet="./images/homepage/mobile/image-homepage-profile@2x.jpg"
          media="(min-width: 768px)"
        />
        <img
          className="sm:max-h-[600px] sm:min-h-[600px] sm:min-w-[281px] sm:bg-cover lg:max-w-[540px] lg:min-w-[540px]"
          src="./images/homepage/mobile/image-homepage-profile@2x.jpg"
          alt="image homepage"
        />
      </picture>
      <article className="my-10 text-[#33323D] sm:my-0 sm:max-h-full sm:min-h-full sm:w-[100%] lg:mb-[10vh] lg:w-[30vw]">
        <div className="my-10 h-[1px] w-full bg-[#33323D] opacity-30 sm:mt-0 lg:w-[90%]"></div>
        <h2 className="ibarra mb-5 text-[40px] leading-[42px] font-bold tracking-[-0.36px]">
          About Me
        </h2>
        <p className="sans mb-5 text-[16px] leading-[30px] tracking-[0px] lg:w-[90%]">
          I'm a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I'm based in London, UK, but I'm happy working remotely and have
          experience in remote teams. When I'm not coding, you'll find me
          outdoors. I love being out in nature whether that's going for a walk,
          run or cycling. I'd love you to check out my work.
        </p>
        <NavLink
          className="sans flex h-[48px] w-[202px] cursor-pointer items-center justify-center border-2 border-[#33323D] text-[12px] leading-none tracking-[2px] text-[#33323D]"
          to="/portfolio"
        >
          GO TO PORTFOLIO
        </NavLink>
        <div className="my-10 hidden h-[1px] w-full bg-[#33323D] opacity-30 sm:block lg:w-[70%]"></div>
      </article>
    </section>
  );
};

export default AboutMe;
