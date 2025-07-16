import { useParams } from "react-router";
import projects from "../data/projects";
import {
  Hero,
  ProjectBackground,
  StaticPreviews,
  ProjectPagination,
} from "../components/DetailComponents";

const Details = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <Hero project={project} />
      <div className="lg:grid lg:grid-cols-2">
        <ProjectBackground project={project} />
        <StaticPreviews project={project} />
      </div>
      <ProjectPagination project={project} />
    </>
  );
};

export default Details;
