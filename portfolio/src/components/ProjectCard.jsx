import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import githubDark from "../images/githubDark.svg";

function ProjectCard({
  imageSrc,
  imageAlt,
  githubUrl,
  projectUrl,
  projectName,
  projectDescription,
}) {
  return (
    <Card className="projectCard mx-auto" style={{ maxWidth: "820px" }}>
      <Card.Img
        className="projectCardImage"
        variant="top"
        src={imageSrc}
        alt={imageAlt}
      />
      <Card.Body>
        <div className="projectLinks mb-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink"
          >
            <img
              className="cardGithubLogo"
              src={githubDark}
              alt="GitHub logo"
            />
            View Code
          </a>
        </div>

        <Card.Text className="projectCardName mb-1">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="projectTitle"
          >
            {projectName}
          </a>
        </Card.Text>

        <Card.Text className="projectCardDescription">
          {projectDescription}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

ProjectCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
};

export default ProjectCard;
