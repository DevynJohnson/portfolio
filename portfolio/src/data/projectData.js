// Import all project images
import get2KnowMeImg from "../images/get2knowme_screenshot.png";
import pexImg from "../images/pex_animals.png";
import realtorImg from "../images/realtorScreenshot.png";
import readmeGenImg from "../images/readmeGenScreenshot.png";
import rpsImg from "../images/rpsScreenshot.png";
import empTrackerImg from "../images/emp_tracker_screenshot.png";

export const projectData = [
  {
    id: 1,
    imageSrc: get2KnowMeImg,
    imageAlt: "screenshot of Get2KnowMe application",
    githubUrl: "https://github.com/DevynJohnson/Get2KnowMe",
    projectUrl: "https://get2knowme.onrender.com/",
    projectName: "Get2KnowMe",
    projectDescription:
    "An innovative accessibility-focused web application that empowers neurodivergent individuals to create personalized Communication Passports—comprehensive digital profiles that facilitate better social interactions and support. Users can document their specific diagnosis, preferred communication accommodations (such as speaking slowly, avoiding complex language, or steering clear of trigger topics), and emergency contact information for trusted support persons. The application features intuitive QR code generation and secure passcode access, enabling seamless sharing with any third party who may benefit from understanding the user's accommodation needs in social interactions. Currently developed in collaboration with NHS professionals in the UK, this project actively incorporates feedback from mental health experts across both the UK and US to ensure clinical relevance and user safety. The platform is designed to support individuals with autism, ADHD, AuDHD, OCD, Tourette's Syndrome, and other neurodivergent conditions, promoting greater independence, self-advocacy, and inclusive communication across all social contexts. This project demonstrates my commitment to developing technology that creates meaningful social impact while addressing real-world accessibility challenges in digital communication.",
  },
  {
    id: 2,
    imageSrc: pexImg,
    imageAlt: "PEX screenshot",
    githubUrl: "https://github.com/DevynJohnson/virtualPEX",
    projectUrl: "https://virtualpex.onrender.com",
    projectName: "Virtual PEX Board",
    projectDescription:
      "A collaborative full-stack web application developed by a multidisciplinary team of four developers utilizing the MERN stack (MongoDB, Express.js, React, and Node.js). This virtual Picture Exchange Communication System (PECS) board serves as an assistive technology tool designed to support non-verbal children and those with speech delays in developing essential communication skills. The application features an intuitive grid interface displaying images paired with corresponding text labels, enabling users to express needs, wants, and emotions through visual selection. Advanced text-to-speech functionality provides immediate auditory feedback when images are selected, reinforcing language learning and communication pathways. The comprehensive database encompasses over 275 carefully curated vocabulary items across critical communication categories including people, food and beverages, clothing, action verbs, and emotional expressions. The platform's scalable architecture supports future enhancements including custom vocabulary card creation, expanded multilingual databases, personalized text-to-speech voice options, and enhanced accessibility features—positioning it as a valuable resource for families, caregivers, speech-language pathologists, and educational professionals working with children who have diverse communication needs.",
  },
  {
    id: 3,
    imageSrc: realtorImg,
    imageAlt: "screenshot of professional realtor website",
    githubUrl: "https://github.com/DevynJohnson/Real-Estate-Website",
    projectUrl: "https://www.elisejohnsonrealtor.com/",
    projectName: "Professional Realtor Website",
    projectDescription:
      "A comprehensive, mobile-responsive professional website developed using React and modern JavaScript frameworks for a licensed real estate professional serving the Twin Cities metropolitan area. This client-focused digital platform serves as the agent's primary online presence, featuring direct integration with the agent's Coldwell Banker profile for current listings access, comprehensive buyer and seller resource centers, and multiple streamlined contact channels for lead generation. The project encompassed the complete software development lifecycle from initial stakeholder consultation and content strategy through final deployment and ongoing maintenance. Key technical implementations include responsive design optimization, modern React development practices, user experience design principles, and secure user authentication. This real-world client project provided valuable experience in professional client communication, project timeline management, and delivering production-ready applications that directly impact business outcomes and client acquisition in the competitive real estate market.",
  },
  {
    id: 4,
    imageSrc: readmeGenImg,
    imageAlt: "screenshot of readme generator application",
    githubUrl: "https://github.com/DevynJohnson/readmeGenerator",
    projectUrl: "https://github.com/DevynJohnson/readmeGenerator",
    projectName: "README Generator",
    projectDescription:
      "A sophisticated command-line interface (CLI) application engineered to automate and standardize the creation of professional README documentation for software development projects. Built with Node.js and leveraging the Inquirer.js library for interactive prompt sequences, this tool streamlines project documentation workflows through dynamic content generation based on user input. The application employs template-driven architecture to produce consistently formatted, comprehensive Markdown files that adhere to industry best practices and open-source documentation standards. Key features include customizable project metadata collection, automated badge generation, structured section templates, and export functionality. This productivity tool has been integrated into my personal development workflow to ensure consistent documentation quality across all projects, significantly reducing setup time while maintaining professional presentation standards. The tool demonstrates proficiency in CLI development, file system operations, template processing, and developer experience optimization—skills directly applicable to DevOps automation and development tooling roles.",
  },
  {
    id: 5,
    imageSrc: rpsImg,
    imageAlt: "screenshot of rock paper scissors application",
    githubUrl: "https://github.com/DevynJohnson/RockPaperScissors",
    projectUrl: "https://devynjohnson.github.io/RockPaperScissors/",
    projectName: "Rock, Paper, Scissors Showdown",
    projectDescription:
      "An interactive web-based game application that evolved from a core JavaScript logic challenge into a fully-featured front-end experience, demonstrating progressive enhancement and user interface development skills. Initially developed to master fundamental programming concepts including conditional logic, random number generation, and game state management, the project was subsequently enhanced with a responsive Bootstrap-powered user interface. The application features real-time score tracking, comprehensive game statistics including choice frequency analysis, and responsive card-based components that adapt seamlessly across desktop and mobile devices. This project showcases the ability to transform simple algorithmic challenges into engaging user experiences through thoughtful UI/UX design, effective use of CSS frameworks, and implementation of accessibility best practices. The development process highlighted skills in iterative enhancement, responsive design principles, and the practical application of front-end frameworks to create polished, user-friendly applications.",
  },
  {
    id: 6,
    imageSrc: empTrackerImg,
    imageAlt: "screenshot of employee tracker",
    githubUrl: "https://github.com/DevynJohnson/employeeTracker",
    projectUrl: "https://github.com/DevynJohnson/employeeTracker",
    projectName: "Employee Tracker",
    projectDescription:
      "A comprehensive command-line interface application engineered for enterprise-level organizational data management, featuring complete CRUD (Create, Read, Update, Delete) operations for employee, department, and role administration. Developed from ground-up using a provided Entity Relationship Diagram (ERD), this project demonstrates full-stack database development expertise including PostgreSQL schema design, relational database architecture, and complex query optimization. The application leverages the Inquirer.js library to provide an intuitive, menu-driven user experience that guides administrators through data management workflows with input validation and error handling. Technical implementations include normalized database relationships, foreign key constraints, and optimized JOIN operations for efficient data retrieval across multiple related tables. This project serves as a foundational demonstration of database design principles, server-side JavaScript development, and enterprise application architecture—providing essential experience in data modeling, SQL operations, and business logic implementation that directly translates to full-stack web development and database administration roles.",
  },
];
