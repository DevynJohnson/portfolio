import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import "../App.css";

const projectData = [
  {
    imageSrc: "/assets/PEX.png",
    imageAlt: "PEX screenshot",
    githubUrl: "https://github.com/DevynJohnson/virtualPEX",
    projectUrl: "https://virtualpex.onrender.com",
    projectName: "Virtual PEX Board",
    projectDescription:
      "A collaborative full-stack application developed by a team of four utilizing the MERN stack (MongoDB, Express.js, React, and Node.js) with JavaScript. This virtual Picture Exchange (PEX) board is designed to support children who are non-verbal or have speech delays by providing an interactive communication tool. The application presents a grid of images paired with corresponding words, enabling children to express their needs, wants, and emotions. When a user selects an image, the associated word is spoken aloud using text-to-speech functionality. The current database includes over 275 words across categories such as people, food and beverages, clothing, verbs, and feelings — providing caregivers with a comprehensive set of everyday expressions. Future development plans include features that allow custom item card creation, expanding the database, allowing user TTS customization options, and enhancing the app's adaptability and usefulness for families, caregivers and educators.",
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
    imageSrc: "/assets/emp_tracker_screenshot.png",
    imageAlt: "screenshot of employee tracker",
    githubUrl: "https://github.com/DevynJohnson/employeeTracker",
    projectUrl: "https://github.com/DevynJohnson/employeeTracker",
    projectName: "Employee Tracker",
    projectDescription:
      "A comprehensive command-line tool designed to help employers manage organizational structure by tracking departments, job roles, and employee records. Built from the ground up using a provided ERD, this project involved designing and implementing a relational database with PostgreSQL, defining the schema, and creating robust CRUD operations. The Inquirer npm package was used to guide user interaction through intuitive prompts, allowing users to add, view, update, and delete data with ease. This project served as a strong introduction to database architecture and back-end development fundamentals.",
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
