import { Card, ListGroup, Container, Row, Col, Accordion } from "react-bootstrap";
import { Button } from "react-bootstrap";

function downloadResume() {
  const link = document.createElement("a");
  link.href = "/assets/DevynJohnsonResumePDF.pdf"; // Update with the actual path to your resume file
  link.download = "DevynJohnsonResumePDF.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function frontEndLanguages() {
  return (
    <Card style={{ width: "100%", maxWidth: "820px", margin: "0 auto" }}>
      <Card.Header className="frontEndHeader">Front-end Tools</Card.Header>
      <ListGroup className="listGroupResume" variant="flush">
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>Vite</ListGroup.Item>
        <ListGroup.Item>Bootstrap CSS</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

function backEndLanguages() {
  return (
    <Card style={{ width: "100%", maxWidth: "820px", margin: "0 auto" }}>
      <Card.Header className="backEndHeader">Back-end Tools</Card.Header>
      <ListGroup className="listGroupResume" variant="flush">
        <ListGroup.Item>Node.js</ListGroup.Item>
        <ListGroup.Item>Express</ListGroup.Item>
        <ListGroup.Item>GraphQL</ListGroup.Item>
        <ListGroup.Item>APIs and Routing</ListGroup.Item>
        <ListGroup.Item>postgreSQL</ListGroup.Item>
        <ListGroup.Item>MongoDB</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

function otherTools() {
  return (
    <Card style={{ width: "100%", maxWidth: "820px", margin: "0 auto" }}>
      <Card.Header className="otherToolsHeader">
        Languages and Tools
      </Card.Header>
      <ListGroup className="listGroupResume" variant="flush">
        <ListGroup.Item>TypeScript</ListGroup.Item>
        <ListGroup.Item>Python</ListGroup.Item>
        <ListGroup.Item>git</ListGroup.Item>
        <ListGroup.Item>Github</ListGroup.Item>
        <ListGroup.Item>Insomnia</ListGroup.Item>
        <ListGroup.Item>npm</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

function education() {
  return (
    <Card style={{ width: "100%", maxWidth: "820px", margin: "0 auto" }}>
      <Card.Header className="educationHeader">Education</Card.Header>
      <ListGroup className="listGroupResume" variant="flush">
        <ListGroup.Item>
          Full Stack Coding Bootcamp, University of Minnesota - April 2025
        </ListGroup.Item>
        <ListGroup.Item>
          B.S. Business Management from Western Governors University - March
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

function WorkHistory() {
  return (
    <Card style={{ width: "100%", maxWidth: "820px", margin: "0 auto" }}>
      <Card.Header className="workHistory">Work History</Card.Header>
      <Card.Body>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              July 2024 - Present: Owner/Operator of Buns of Wheel Burger Company
            </Accordion.Header>
            <Accordion.Body>
            <ul>
              <li>Founded and operate a Twin Cities-based food truck business specializing in gourmet smashburgers and tater tots.</li>
              <li>Ensure full compliance with all city, county, state, and federal food safety laws, permits, and tax regulations.</li>
              <li>Manage company finances using QuickBooks including expense tracking and asset/liability management.</li>
              <li>Develop standard operating procedures, recipes, and sanitation schedules.</li>
              <li>Oversee all hiring, training, and HR responsibilities.</li>
              <li>Handle all aspects of customer service and food preparation.</li>
            </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              January 2022 - July 2024: Campus Director of Nutrition at Martin Luther Care Center, Bloomington MN
            </Accordion.Header>
            <Accordion.Body>
            <ul>
              <li>Led nutrition services for 130-resident skilled nursing facility with diverse dietary needs.</li>
              <li>Ensured regulatory compliance through strategic menu planning and safety protocols.</li>
              <li>Managed departmental budgets, billing, and records to maintain operational efficiency.</li>
              <li>Recruited and supervised staff including supervisors, dieticians, and kitchen personnel.</li>
              <li>Collaborated with nursing and therapy departments to align dietary care with patient needs.</li>
              <li>Supported operations hands-on by filling in for staff during shortages.</li>
            </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              June 2020 - January 2022: Restaurant Manager at B52s Burgers and Brews, Inver Grove Heights MN
            </Accordion.Header>
            <Accordion.Body>
            <ul>
              <li>Directed daily front-of-house operations and ensured smooth guest experiences.</li>
              <li>Maintained liquor and beverage inventory and managed vendor ordering.</li>
              <li>Oversaw staffing, labor hour management, and shift scheduling.</li>
              <li>Completed accounting, reconciliation, and performance tracking responsibilities.</li>
            </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              May 2017 - August 2019: General Manager at Green Mill Restaurant and Bar, Hastings MN
            </Accordion.Header>
            <Accordion.Body>
            <ul>
              <li>Oversaw full store operations including staff management, scheduling, and budgeting.</li>
              <li>Handled accounting duties including payroll reporting, invoice coding, and financial tracking.</li>
              <li>Planned and managed off-site catering events, banquets, and weddings.</li>
              <li>Maintained quality control, addressed customer concerns, and ensured facility cleanliness.</li>
            </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              January 2014 - May 2017: Retail Support Specialist at Verizon Wireless, Bloomington MN
            </Accordion.Header>
            <Accordion.Body>
            <ul>
              <li>Conducted customer training sessions and provided in-store technical support to customers.</li>
              <li>Assisted sales teams with POS systems and managed in-store promotional inventory.</li>
              <li>Checked in and reconciled store inventory on a daily basis.</li>
            </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
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
      <h3>Tech Skills</h3>
      <Container>
        <Row className="justify-content-center">
          <Col md={4} sm={12} className="d-flex justify-content-center mb-3">
            {frontEndLanguages()}
          </Col>
          <Col md={4} sm={12} className="d-flex justify-content-center mb-3">
            {backEndLanguages()}
          </Col>
          <Col md={4} sm={12} className="d-flex justify-content-center mb-3">
            {otherTools()}
          </Col>
        </Row>
      </Container>
      <Container className="educationContainer">
        <Row>
          <Col>{education()}</Col>
        </Row>
      </Container>
      <Container className="workHistoryContainer">
        <Row>
          <Col>{WorkHistory()}</Col>
        </Row>
      </Container>
    </div>
  );
}




export default Resume;
