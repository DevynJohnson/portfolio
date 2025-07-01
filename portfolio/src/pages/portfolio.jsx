import { Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../data/projectData";
import "../App.css";
import "../styles/page-common.css";
import "../styles/portfolio.css";

function Portfolio() {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        <div className="page-content-card">
              {/* Header */}
              <div className="page-header">
                <h2 className="page-title">My Portfolio</h2>
                <div className="page-subtitle">
                  Innovative Projects & Professional Development
                </div>
              </div>

              <div className="portfolio-intro">
                <p className="portfolio-text">
                  Explore my collection of full-stack applications, each built with purpose and attention to accessibility. 
                  Click on project names or &quot;View Project&quot; to see deployed applications, or &quot;View Code&quot; to explore repositories.
                </p>
              </div>

              {/* Project Cards Grid */}
              <div className="portfolio-projects">
                <Row className="g-4 justify-content-center">
                  {projectData.map((project) => (
                    <Col
                      key={project.id}
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      xl={6}
                      className="d-flex"
                    >
                      <ProjectCard {...project} />
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Portfolio;
