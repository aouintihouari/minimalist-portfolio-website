import ButtonAbout from "../UI/Button";

const Hero = () => {
  return (
    <section className="relative">
      <picture>
        <source
          srcSet="./images/homepage/desktop/image-homepage-hero@2x.jpg"
          media="(min-width: 1024px"
        />
        <source
          srcSet="./images/homepage/tablet/image-homepage-hero@2x.jpg"
          media="(min-width: 769px"
        />
        <source
          srcSet="./images/homepage/mobile/image-homepage-hero@2x.jpg"
          media="(max-width: 768px"
        />
        <img
          src="./images/homepage/mobile/image-homepage-hero@2x.jpg"
          alt="hero image"
        />
      </picture>
      <div className="left-[-1%] w-[80%] sm:absolute sm:top-[28vh] sm:h-[30vh] sm:bg-white lg:top-[50vh] lg:left-0 lg:h-[50vh] lg:w-[33vw]">
        <h1 className="ibarra my-[10%] text-[40px] leading-[42px] font-bold tracking-[-0.36px] sm:my-[5%] sm:w-[88%] lg:mb-[10%] lg:w-[62%] lg:text-[50px] lg:leading-[50px] lg:tracking-[-0.45px]">
          Hey, I’m Alex Spencer and I love building beautiful websites
        </h1>
        <ButtonAbout />
      </div>
    </section>
  );
};

export default Hero;
