const Hero = ({ project }) => {
  return (
    <picture>
      <source srcSet={project.heroImage.desktop} media="(min-width: 1024px)" />
      <source srcSet={project.heroImage.tablet} media="(min-width: 769px)" />
      <source srcSet={project.heroImage.mobile} media="(min-width: 768px)" />
      <img src={project.heroImage.mobile} alt={`${project.title} hero`} />
    </picture>
  );
};

export default Hero;
