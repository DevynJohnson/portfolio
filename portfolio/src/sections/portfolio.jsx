import { Card, Container, Row, Col } from "react-bootstrap";
import githubDark from "../images/githubDark.svg";


function projectCard1() {
  return (
    <div>
      <Card className="projectCard" style={{ width: "36rem" }}>
        <Card.Img className="projectCardImage"
          variant="top"
          src="/assets/statTrick.png"
          alt="screenshot of stattrick application"
          />
        <Card.Body>
              <a href="https://github.com/AMShegstad/StatTrick" target="_blank"><img className="cardGithubLogo" src={githubDark} alt="github logo" /></a>
          <Card.Text className="projectCardName">
            <a
              href="https://stattrick.onrender.com/"
              target="_blank"
              >
            Stat-Trick
            </a>
          <Card.Text className="projectCardDescription">
            A full-stack application created by a team of 4 developers that allows users to track statistics for their favorite NHL teams and players.
            <br></br>
            Built using Vite + React + TypeScript, Node.js, Express, postgreSQL, and user authentication with jsonwebtoken. Deployed on Render.
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
            <br></br>
            Key technologies include HTML, CSS, JavaScript, Express, OpenWeather API, and is deployed on Render.
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
            A web-based game of Rock, Paper, Scissors. Play against the computer and see if you can win!
            <br></br>
            Key technologies include HTML, Bootstrap CSS, JavaScript and local storage.

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
              A command-line application allowing users to easily generate a professional README file for their projects.
              <br></br>
              Key technologies include JavaScript, Node.js, and the Inquirer npm package.
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
    <div className="portfolioPage">
      <h2>Check out my work!</h2>
      <h5 style={{ textAlign: "center" }}>Click on the project name to view the deployed project if applicable, or click the Github logo to see the repository.</h5>
      <Container fluid>
  <Row className="justify-content-center">
    <Col lg={6} md={6} sm={12} className="d-flex justify-content-center mb-4">{projectCard1()}</Col>
    <Col lg={6} md={6} sm={12} className="d-flex justify-content-center mb-4">{projectCard2()}</Col>
  </Row>
  <Row className="justify-content-center">
    <Col lg={6} md={6} sm={12} className="d-flex justify-content-center mb-4">{projectCard3()}</Col>
    <Col lg={6} md={6} sm={12} className="d-flex justify-content-center mb-4">{projectCard4()}</Col>
  </Row>
  <Row className="justify-content-center">
    <Col lg={6} md={6} sm={12} className="d-flex justify-content-center mb-4">{projectCard5()}</Col>
    <Col lg={6} md={6} sm={12} className="d-flex justify-content-center mb-4">{projectCard6()}</Col>
  </Row>
</Container>
    </div>
  );
}

export default Portfolio;
