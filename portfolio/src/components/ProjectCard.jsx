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
    <Card className="projectCard" style={{ width: "100%", maxWidth: "820px", margin: "0 auto" }}>
      <Card.Img
        className="projectCardImage"
        variant="top"
        src={imageSrc}
        alt={imageAlt}
      />
      <Card.Body>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img className="cardGithubLogo" src={githubDark} alt="GitHub logo" />
        </a>
        <Card.Text className="projectCardName">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            {projectName}
          </a>
          <Card.Text className="projectCardDescription">
            {projectDescription}
          </Card.Text>
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
