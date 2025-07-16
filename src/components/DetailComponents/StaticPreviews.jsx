const StaticPreviews = ({ project }) => {
  return (
    <section className="my-[10%] text-[#33323D]">
      <h3 className="ibarra mt-[10%] mb-[2%] text-[32px] leading-[42px] font-bold tracking-[-0.29px]">
        Project Background
      </h3>
      <p className="sans text-[15px] leading-[30px] tracking-[0px]">
        {project.projectBackground}
      </p>
      <h3 className="ibarra my-[5%] text-[32px] leading-[42px] font-bold tracking-[-0.29px]">
        Static Previews
      </h3>
      {project.previewImages.map((image, index) => (
        <picture key={index}>
          <source srcSet={image.desktop} media="(min-width: 1024px)" />
          <source srcSet={image.tablet} media="(min-width: 769px)" />
          <source srcSet={image.mobile} media="(min-width: 768px)" />
          <img
            src={image.mobile}
            alt={`${project.title} preview ${index + 1}`}
            className={index > 0 ? "my-[5%]" : ""}
          />
        </picture>
      ))}
    </section>
  );
};

export default StaticPreviews;
