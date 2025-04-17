import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import "../App.css";

const projectData = [
  {
    imageSrc: "/assets/under_construction.jpg",
    imageAlt: "under construction sign",
    githubUrl: "https://github.com/DevynJohnson/virtualPEX",
    projectUrl: "https://virtualpex.onrender.com",
    projectName: "Virtual PEX Board",
    projectDescription:
      "A collaborative full-stack application developed by a team of four using the MERN stack (MongoDB, Express, React, Node.js) with JavaScript integration. This virtual PEX (Picture Exchange) board is designed to be used by children who are non-verbal or speech delayed. The application displays a grid of images and corresponding words, allowing children to point out items to express their wants, needs, or feelings and have the name of that item read out loud using text-to-speech. With over 275 words in our database including people, food and beverages, clothing items, verbs, feelings, and more parents and caregivers should be able to find the most common expressions. With plans to expand functionality in the future to include the ability to customize existing cards and to allow users to create their own custom cards, we hope this application can prove useful to families in helping children express themselves.",
  },
  {
    imageSrc: "/assets/weatherDashboardScreenshot.png",
    imageAlt: "screenshot of weather dashboard application",
    githubUrl: "https://github.com/DevynJohnson/weatherDashboard",
    projectUrl: "https://weatherdashboard-vgcp.onrender.com/",
    projectName: "Weather Dashboard",
    projectDescription:
    "This project involved extending the functionality of a pre-built front-end application as part of a class assignment. The primary objective was to integrate back-end logic that enabled users to search for cities and retrieve real-time weather data using the OpenWeatherMap API. I implemented the necessary CRUD operations to dynamically display both the current weather conditions and a 5-day forecast. User search history was stored and managed in a JSON file using fs/promises, allowing for persistent data retrieval and display. This project emphasized the importance of understanding and adapting to existing code structures—an essential skill for collaborating on team-based software development.",
  },
  {
    imageSrc: "/assets/rpsScreenshot.png",
    imageAlt: "screenshot of rock paper scissors application",
    githubUrl: "https://github.com/DevynJohnson/RockPaperScissors",
    projectUrl: "https://devynjohnson.github.io/RockPaperScissors/",
    projectName: "Rock, Paper, Scissors Showdown",
    projectDescription:
      "Originally built as a JavaScript logic challenge, this application was expanded to include a front-end interface in order to practice web development fundamentals. After developing the core game logic, I implemented a user-friendly UI using the Bootstrap CSS framework. The interface features responsive card components to display the user's score in real time, as well as track the frequency of each player choice—rock, paper, or scissors. This project showcases my ability to enhance simple functionality with clean, accessible UI design and to apply styling frameworks effectively to improve user experience.",
  },
  {
    imageSrc: "/assets/readmeGenScreenshot.png",
    imageAlt: "screenshot of readme generator application",
    githubUrl: "https://github.com/DevynJohnson/readmeGenerator",
    projectUrl: "https://github.com/DevynJohnson/readmeGenerator",
    projectName: "README Generator",
    projectDescription:
      "A command-line application designed to streamline the creation of professional, consistent README files for new projects. Built with JavaScript, Node.js, and the Inquirer npm package, this tool prompts the user with a series of questions and dynamically generates a well-structured markdown file based on the input. I regularly use this generator at the start of my development process to save time and ensure that each project begins with a detailed, polished, and uniform README—improving clarity and presentation for collaborators and future reference.",
  },
  {
    imageSrc: "/assets/emp_tracker_screenshot.png",
    imageAlt: "screenshot of employee tracker",
    githubUrl: "https://github.com/DevynJohnson/employeeTracker",
    projectUrl: "https://github.com/DevynJohnson/employeeTracker",
    projectName: "Employee Tracker",
    projectDescription:
      "A comprehensive command-line tool designed to help employers manage organizational structure by tracking departments, job roles, and employee records. Built from the ground up using a provided ERD, this project involved designing and implementing a relational database with PostgreSQL, defining the schema, and creating robust CRUD operations. The Inquirer npm package was used to guide user interaction through intuitive prompts, allowing users to add, view, update, and delete data with ease. This project served as a strong introduction to database architecture and back-end development fundamentals.",
  },
  {
    imageSrc: "/assets/realtorScreenshot.png",
    imageAlt: "screenshot of professional realtor website",
    githubUrl: "https://github.com/DevynJohnson/Real-Estate-Website",
    projectUrl: "https://www.elisejohnsonrealtor.com/",
    projectName: "Professional Realtor Website",
    projectDescription:
      "A responsive and client-focused website built with React and JavaScript for a Twin Cities-based real estate agent. Designed to serve as her primary professional presence online, the site includes links to current listings, comprehensive resources for both buyers and sellers, and multiple channels for contact. This project provided valuable real-world experience in full-cycle web development, from initial planning and content organization to deployment and user experience design.",
  },
];

function Portfolio() {
  return (
    <div className="portfolioPage">
      <h2>Check out my work!</h2>
      <h5 style={{ textAlign: "center" }}>
        Click on the project name to view the deployed project if applicable, or
        click the Github logo to see the repository.
      </h5>
      <div className="scrollWrapper">
        <Container fluid>
          <Row className="justify-content-start">
            {projectData.map((project, index) => (
              <Col
                key={index}
                lg={6}
                md={6}
                sm={12}
                className="d-flex justify-content-center mb-4"
              >
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Portfolio;
