import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

function downloadResume() {
  const link = document.createElement("a");
  link.href = "/assets/Devyn_Johnson_Resume_2025.pdf"; // Update with the actual path to your resume file
  link.download = "Devyn_Johnson_Resume_2025.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function frontEndLanguages() {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Header className="frontEndHeader">Front-end Tools</Card.Header>
      <ListGroup className="listGroupResume" variant="flush">
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>TypeScript</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>Vite</ListGroup.Item>
        <ListGroup.Item>Bootstrap</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

function backEndLanguages() {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Header className="backEndHeader">Back-end Tools</Card.Header>
      <ListGroup className="listGroupResume" variant="flush">
        <ListGroup.Item>Node.js</ListGroup.Item>
        <ListGroup.Item>Express</ListGroup.Item>
        <ListGroup.Item>APIs and Routing</ListGroup.Item>
        <ListGroup.Item>postgreSQL</ListGroup.Item>
        <ListGroup.Item>MongoDB</ListGroup.Item>
        <ListGroup.Item>Sequelize</ListGroup.Item>
        <ListGroup.Item>Insomnia</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

function otherTools() {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Header className="otherToolsHeader">
        Other Tools and Technologies
      </Card.Header>
      <ListGroup className="listGroupResume" variant="flush">
        <ListGroup.Item>git</ListGroup.Item>
        <ListGroup.Item>Github</ListGroup.Item>
        <ListGroup.Item>GitLab</ListGroup.Item>
        <ListGroup.Item>npm</ListGroup.Item>
        <ListGroup.Item>Render</ListGroup.Item>
        <ListGroup.Item>Netlify</ListGroup.Item>
        <ListGroup.Item>Stack Overflow</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

function education() {
  return (
    <Card style={{ width: "51rem" }}>
      <Card.Header className="educationHeader">Education</Card.Header>
      <ListGroup className="listGroupResume" variant="flush">
        <ListGroup.Item>
          In Progress: Full Stack Coding Bootcamp, University of Minnesota
        </ListGroup.Item>
        <ListGroup.Item>
          B.S. Business Management from Western Governors University - March,
          2022
        </ListGroup.Item>
        <ListGroup.Item>
          High School Diploma from Tartan Senior High School, Oakdale MN - June
          2006
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

function workHistory() {
  return (
    <Card style={{ width: "51rem" }}>
      <Card.Header className="workHistory">Work History</Card.Header>
      <ListGroup className="listGroupResume" variant="flush">
        <ListGroup.Item className="job">
          {" "}
          July 2024 - Present: Owner/Operator of Buns of Wheel Burger Company
        </ListGroup.Item>
        <ListGroup.Item className="desc">
          Owner and operator of a Twin Cities based food truck serving
          smashburgers and tater tots.
        </ListGroup.Item>
        <ListGroup.Item className="space"></ListGroup.Item>
        <ListGroup.Item className="job">
          {" "}
          January 2022 - July 2024: Campus Director of Nutrition at Martin
          Luther Care Center, Bloomington MN
        </ListGroup.Item>
        <ListGroup.Item className="desc">
          Director-level position overseeing food service operations and all
          dietary staff in a skilled-nursing facility.
        </ListGroup.Item>
        <ListGroup.Item className="space"></ListGroup.Item>
        <ListGroup.Item className="job">
          {" "}
          June 2020 - January 2022: Restaurant Manager at B52s Burgers and
          Brews, Inver Grove Heights MN
        </ListGroup.Item>
        <ListGroup.Item className="desc">
          FOH manager at a restaurant/bar. Oversee server and bartender staff,
          open and close cash registers, order liquor, beer, wine and soda on a
          budget.
        </ListGroup.Item>
        <ListGroup.Item className="space"></ListGroup.Item>
        <ListGroup.Item className="job">
          {" "}
          May 2017 - August 2019: General Manager at Green Mill Restaurant and
          Bar, Hastings MN
        </ListGroup.Item>
        <ListGroup.Item className="desc">
          Oversee entire store operations including all staffing, FOH and BOH
          operations, catering and banquet events, order all food and catering
          supplies on a budget.
        </ListGroup.Item>
        <ListGroup.Item className="space"></ListGroup.Item>
        <ListGroup.Item className="job">
          January 2014 -May 2017: Retail Support Specialist at Verizon Wireless,
          Bloomington MN
        </ListGroup.Item>
        <ListGroup.Item className="desc">
          Non-commissioned corporate store rep. Conduct how-to classes for
          customers, troubleshoot customer issues, assit sales staff with POS
          system, track inventory and manage POP.
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

function Resume() {
  return (
    <div className="resume">
      <Container style={{textAlign: 'center'}} className="downloadResumeContainer">
        <Row>
          <Col>
            <Button className="resumeButton" onClick={downloadResume} variant="primary">
              Click Here to Download My Resume In PDF Format
            </Button>
          </Col>
        </Row>
      </Container>
      <h3>Technology Skills Profile</h3>
      <Container className="techSkillsContainer">
        <Row>
          <Col>{frontEndLanguages()}</Col>
          <Col>{backEndLanguages()}</Col>
          <Col>{otherTools()}</Col>
        </Row>
      </Container>
      <Container className="educationContainer">
        <Row>
          <Col>{education()}</Col>
        </Row>
      </Container>
      <Container className="workHistoryContainer">
        <Row>
          <Col>{workHistory()}</Col>
        </Row>
      </Container>
    </div>
  );
}




export default Resume;
