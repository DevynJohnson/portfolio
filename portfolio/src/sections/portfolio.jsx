import { Card, Container, Row, Col } from "react-bootstrap";
import githubDark from "../images/githubDark.svg";

function projectCard1() {
  return (
    <div>
        <Card className="projectCard" style={{ width: "36rem" }}>
          <Card.Img className="projectCardImage"
            variant="top"
            src="/assets/readmeGenScreenshot.png"
            alt="screenshot of readme generator application"
            />
          <Card.Body>
                <a href="https://github.com/DevynJohnson/readmeGenerator" target="_blank"><img className="cardGithubLogo" src={githubDark} alt="github logo" /></a>
            <Card.Text className="projectCardName">
              <a
                href="https://github.com/DevynJohnson/readmeGenerator"
                target="_blank"
                >
              README Generator
              </a>
            <Card.Text className="projectCardDescription">
              An application allowing users to easily generate a professional README file for their projects.
    
            </Card.Text>
          </Card.Text>
            </Card.Body>
            </Card>
      </div>
    );
  }

function projectCard2() {
  return (
    <div>
      <Card className="projectCard" style={{ width: "36rem" }}>
        <Card.Img className="projectCardImage"
          variant="top"
          src="/assets/weatherDashboardScreenshot.png"
          alt="screenshot of weather dashboard application"
          />
        <Card.Body>
              <a href="https://github.com/DevynJohnson/weatherDashboard" target="_blank"><img className="cardGithubLogo" src={githubDark} alt="github logo" /></a>
          <Card.Text className="projectCardName">
            <a
              href="https://weatherdashboard-vgcp.onrender.com/"
              target="_blank"
            >
            Weather Dashboard
            </a>
          <Card.Text className="projectCardDescription">
            An application allowing users to search for a city to view the current weather, plus a 5-day forecast.
          </Card.Text>
        </Card.Text>
          </Card.Body>
          </Card>
    </div>
  );
}

function projectCard3() {
  return (
    <div>
      <Card className="projectCard" style={{ width: "36rem" }}>
        <Card.Img className="projectCardImage"
          variant="top"
          src="/assets/rpsScreenshot.png"
          alt="screenshot of rock paper scissors application"
          />
        <Card.Body>
              <a href="https://github.com/DevynJohnson/RockPaperScissors" target="_blank"><img className="cardGithubLogo" src={githubDark} alt="github logo" /></a>
          <Card.Text className="projectCardName">
            <a
              href="https://weatherdashboard-vgcp.onrender.com/"
              target="_blank"
              >
            Rock, Paper, Scissors Showdown
            </a>
          <Card.Text className="projectCardDescription">
            A web-based game of Rock, Paper, Scissors. Play against the computer and see if you can win! Uses local storage to keep track of your score.
          </Card.Text>
        </Card.Text>
          </Card.Body>
          </Card>
    </div>
  );
}

function projectCard4() {
  return (
    <div>
      <Card className="projectCard" style={{ width: "36rem" }}>
        <Card.Img className="projectCardImage"
          variant="top"
          src="/assets/vehiclesScreenshot.png"
          alt="screenshot of fun with vehicles application"
          />
        <Card.Body>
              <a href="https://github.com/DevynJohnson/funWithVehicles" target="_blank"><img className="cardGithubLogo" src={githubDark} alt="github logo" /></a>
          <Card.Text className="projectCardName">
            <a
              href="https://github.com/DevynJohnson/funWithVehicles"
              target="_blank"
              >
            Fun With Vehicles!
            </a>
          <Card.Text className="projectCardDescription">
            A command-line application utilizing TypeScript interfaces and classes to create vehicles, and select interactions from a list unique to vehicle types.
          </Card.Text>
        </Card.Text>
          </Card.Body>
          </Card>
    </div>
  );
}

function projectCard5() {
  return (
    <div>
      <Card className="projectCard" style={{ width: "36rem" }}>
        <Card.Img className="projectCardImage"
          variant="top"
          src="/assets/bookclubScreenshot.png"
          alt="screenshot of bootcamp book club application"
          />
        <Card.Body>
              <a href="https://github.com/DevynJohnson/BootcampBookClub" target="_blank"><img className="cardGithubLogo" src={githubDark} alt="github logo" /></a>
          <Card.Text className="projectCardName">
            <a
              href="https://devynjohnson.github.io/BootcampBookClub/"
              target="_blank"
              >
            Bootcamp Book Club
            </a>
          <Card.Text className="projectCardDescription">
            A webpage application allowing users to set and track personal reading goals from a built-in library or add their own books.
          </Card.Text>
        </Card.Text>
          </Card.Body>
          </Card>
    </div>
  );
}

function projectCard6() {
  return (
    <div>
      <Card className="projectCard" style={{ width: "36rem" }}>
        <Card.Img className="projectCardImage"
          variant="top"
          src="/assets/realtorScreenshot.png"
          alt="screenshot of professional realtor website"
          />
        <Card.Body>
              <a href="https://github.com/DevynJohnson/Real-Estate-Website" target="_blank"><img className="cardGithubLogo" src={githubDark} alt="github logo" /></a>
          <Card.Text className="projectCardName">
            <a
              href="https://www.elisejohnsonrealtor.com/"
              target="_blank"
            >
            Professional Realtor Website
            </a>
          <Card.Text className="projectCardDescription">
            A website created for a Twin Cities based realtor, with links to her listings, contact information, and information for both buyers and sellers.
          </Card.Text>
        </Card.Text>
          </Card.Body>
          </Card>
    </div>
  );
}
function Portfolio() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Check out my work!</h2>
      <h4 style={{ textAlign: "center" }}>Click on the project name to view the deployed project if applicable, or click the Github logo to see the repository.</h4>
      <Container>
        <Row className="mb-4">
          <Col md={6} className="px-3">{projectCard1()}</Col>
          <Col md={6} className="px-3">{projectCard2()}</Col>
        </Row>
        <Row className="mb-4">
        <Col md={6} className="px-3">{projectCard3()}</Col>
        <Col md={6} className="px-3">{projectCard4()}</Col>
        </Row>
        <Row className="mb-4">
          <Col md={6} className="px-3">{projectCard5()}</Col>
          <Col md={6} className="px-3">{projectCard6()}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
