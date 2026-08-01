import { Image, Row, Col } from "react-bootstrap";
import LinkedInProfilePic from "../images/LinkedInProfilePic.jpg";
import devynHockey from "../images/devyn_hockey.jpg";
import devynBabiesABCs from "../images/devyn_babies_abcs.jpg";
import familyBeach from "../images/family_beach.jpg";
import "../styles/page-common.css";
import "../styles/about.css";

function AboutMe() {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        <div className="page-content-card">
              {/* Header with Profile Photo */}
              <div className="page-header-with-photo">
                <div className="profile-photo-left">
                  <Image
                    src={LinkedInProfilePic}
                    alt="Devyn Johnson - Full Stack Developer"
                    className="aboutMe-main-photo"
                    fluid
                  />
                </div>
                <div className="page-header-text">
                  <h2 className="page-title">About Me</h2>
                  <div className="page-subtitle">
                    Building Technology with Purpose & Accessibility
                  </div>
                </div>
              </div>

              <div className="aboutMe-section">
                <h3 className="aboutMe-section-title">My Mission</h3>
                <p className="aboutMe-text">
                  As a Full Stack Developer, I&apos;m driven by a deeply personal mission: creating 
                  technology that empowers and includes everyone, especially neurodivergent 
                  individuals and their caregivers. My experience as a parent to neurodivergent 
                  children has given me firsthand insight into the challenges they face and the 
                  incredible impact that thoughtfully-designed, accessible technology can have 
                  on their daily lives and independence.
                </p>
              </div>

              <div className="aboutMe-section">
                <h3 className="aboutMe-section-title">Technical Expertise</h3>
                <p className="aboutMe-text">
                  With expertise spanning the full development stack, I specialize in building 
                  intuitive, scalable applications using the MERN and PERN stacks. My technical 
                  toolkit includes modern JavaScript frameworks, API architecture, database 
                  management (SQL & NoSQL), user authentication, and responsive web design. 
                  I write clean, maintainable code with accessibility and user experience 
                  at the forefront of every decision.
                </p>
              </div>

              <div className="aboutMe-section">
                <h3 className="aboutMe-section-title">Beyond the Code</h3>
                <p className="aboutMe-text">
                  Summer 2026 brought a big change for my family - my wife accepted a job opportunity that brought us from the Twin Cities area of Minnesota to the beautiful town of Friday Harbor, Washington located on San Juan Island. We have four wonderful sons (two teenagers and twin toddlers) and have enjoyed settling into our new community. When I am not out exploring our new home or at the playground with the kids, I will likely be found buried in a book, playing video games, or rolling some dice playing Dungeons & Dragons with my friends.
                </p>
              </div>

              <div className="aboutMe-section">
                <div className="aboutMe-cta">
                  <p className="aboutMe-text aboutMe-closing">
                    I&apos;m passionate about bringing inclusive, accessible technology to life. 
                    Let&apos;s collaborate to build something meaningful together—something that 
                    not only works beautifully but makes a real difference in people&apos;s lives.
                  </p>
                </div>
              </div>
            </div>

            {/* Life Beyond Code - Separate Card */}
            <div className="page-content-card mt-4">
              <div className="aboutMe-gallery">
                <h3 className="aboutMe-gallery-title text-center mb-4">Life Beyond Code</h3>
                <Row className="g-3">
                  <Col xs={12} md={4}>
                    <div className="aboutMe-gallery-item">
                      <Image
                        src={devynHockey}
                        alt="Devyn playing ice hockey"
                        className="aboutMe-gallery-photo"
                        fluid
                      />
                      <div className="aboutMe-gallery-caption">On the ice</div>
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="aboutMe-gallery-item">
                      <Image
                        src={devynBabiesABCs}
                        alt="Devyn teaching his twin toddlers their ABCs"
                        className="aboutMe-gallery-photo"
                        fluid
                      />
                      <div className="aboutMe-gallery-caption">Teaching the twins</div>
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="aboutMe-gallery-item">
                      <Image
                        src={familyBeach}
                        alt="Devyn with his family at the beach"
                        className="aboutMe-gallery-photo"
                        fluid
                      />
                      <div className="aboutMe-gallery-caption">Family time</div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
    </div>
  );
}

export default AboutMe;
