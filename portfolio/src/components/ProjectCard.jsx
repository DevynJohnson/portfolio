import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import githubDark from "../images/githubDark.svg";

function ProjectCard({
  imageSrc,
  imageAlt,
  githubUrl,
  projectUrl,
  projectName,
  projectDescription,
  techStack = [],
}) {
  return (
    <Card className="projectCard h-100">
      <div className="projectCard-image-container">
        <Card.Img
          className="projectCard-image"
          variant="top"
          src={imageSrc}
          alt={imageAlt}
        />
        <div className="projectCard-image-overlay"></div>
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="projectCard-header d-flex justify-content-between align-items-start mb-3">
          <Card.Title className="projectCard-name flex-grow-1">
            <a 
              href={projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              {projectName}
            </a>
          </Card.Title>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="projectCard-github-link"
          >
            <img 
              className="projectCard-github-logo" 
              src={githubDark} 
              alt="GitHub repository" 
            />
          </a>
        </div>
        {techStack.length > 0 && (
          <div className="tech-stack mb-3">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}
        <Card.Text className="projectCard-description flex-grow-1">
          {projectDescription}
        </Card.Text>
        <div className="projectCard-actions mt-auto pt-3">
          <div className="d-flex gap-2 flex-wrap">
            <Button
              variant="primary"
              size="sm"
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-fill"
            >
              View Project
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-fill"
            >
              View Code
            </Button>
          </div>
        </div>
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
  techStack: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
