// Import all project images
import get2KnowMeImg from "../images/get2knowme_homepage_screenshot.png";
import pexImg from "../images/pex_animals.png";
import realtorImg from "../images/realtorScreenshot.png";
import readmeGenImg from "../images/readmeGenScreenshot.png";
import rpsImg from "../images/rpsScreenshot.png";
import zoneMeetImg from "../images/ZoneMeet_Sccreenshot.png";

export const projectData = [
  {
    id: 1,
    imageSrc: get2KnowMeImg,
    imageAlt: "screenshot of Get2KnowMe application",
    githubUrl: "https://github.com/DevynJohnson/Get2KnowMe",
    projectUrl: "https://get2know.me",
    projectName: "Get2KnowMe",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "QR Generation"],
    projectDescription:
    `An accessibility-focused web application enabling neurodivergent individuals to create personalized Communication Passports—digital profiles that support better social interactions. Users can document health alerts, diagnoses, communication preferences, triggers, and emergency contacts, and securely share this information via QR code or passcode. Developed in close collaboration with the NHS professional who conceived the idea, I served as the sole developer for both the front-end and back-end, ensuring the platform met clinical and user needs. The app supports a range of neurodivergent and mental health conditions, promoting independence and inclusive communication.\n\nGet2KnowMe is fully GDPR and UK GDPR compliant, prioritizing user privacy and data protection. Features include explicit consent, data minimization, field-level encryption, secure password hashing, and robust parental consent for underage users. All personal data is encrypted in transit and at rest, and users can access or delete their data at any time. Only reputable, GDPR-compliant third-party processors are used, and no data is sold or shared for marketing. Full Privacy Policy and Terms of Service are available in the app and repository.`,
  },
   {
    id: 2,
    imageSrc: zoneMeetImg,
    imageAlt: "screenshot of zone meet application",
    githubUrl: "https://github.com/DevynJohnson/zoneMeet",
    projectUrl: "https://www.zone-meet.com/",
    projectName: "Zone-Meet",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "OAuth 2.0", "Tailwind CSS", "Upstash"],
    projectDescription:
      `A location-aware appointment booking platform designed for service providers who operate across multiple geographic locations, enabling clients to schedule appointments based on both where and when providers will be available. The system addresses a critical challenge for contractors, consultants, medical specialists, and other professionals serving clients across cities, states, or countries—coordinating complex, multi-location schedules without endless phone calls and email chains. Providers can manage multiple service locations, set recurring schedule patterns, and integrate with Outlook, Microsoft Teams, Google Calendar, and Apple iCloud to prevent double-bookings. Clients access their provider's real-time availability across all locations, filter by preferred area, and book instantly with automatic calendar confirmation.\n\nDeveloped as a custom solution for a contractor client working across multiple U.S. states, I served as the sole developer for the full-stack application. The platform features advanced availability controls allowing providers to define location-specific business hours, rotating schedules, and custom booking rules. Built with Next.js, TypeScript, Prisma ORM, and PostgreSQL, the application emphasizes security and reliability with CSRF protection, rate limiting via Upstash, JWT-based authentication with automatic token refresh, account lockout mechanisms, and comprehensive security monitoring. Calendar synchronization is achieved through OAuth 2.0 integrations with major calendar providers, ensuring seamless two-way sync of appointments and existing commitments.`,
  },
  {
    id: 3,
    imageSrc: pexImg,
    imageAlt: "PEX screenshot",
    githubUrl: "https://github.com/DevynJohnson/virtualPEX",
    projectUrl: "https://virtualpex.onrender.com",
    projectName: "Virtual PEX Board",
    techStack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Bootstrap"],
    projectDescription:
      "A collaborative full-stack web application developed by a multidisciplinary team of four developers utilizing the MERN stack (MongoDB, Express.js, React, and Node.js). This virtual Picture Exchange Communication System (PECS) board serves as an assistive technology tool designed to support non-verbal children and those with speech delays in developing essential communication skills. The application features an intuitive grid interface displaying images paired with corresponding text labels, enabling users to express needs, wants, and emotions through visual selection. Advanced text-to-speech functionality provides immediate auditory feedback when images are selected, reinforcing language learning and communication pathways. The comprehensive database encompasses over 275 carefully curated vocabulary items across critical communication categories including people, food and beverages, clothing, action verbs, and emotional expressions. The platform's scalable architecture supports future enhancements including custom vocabulary card creation, expanded multilingual databases, personalized text-to-speech voice options, and enhanced accessibility features—positioning it as a valuable resource for families, caregivers, speech-language pathologists, and educational professionals working with children who have diverse communication needs.",
  },
  {
    id: 4,
    imageSrc: realtorImg,
    imageAlt: "screenshot of professional realtor website",
    githubUrl: "https://github.com/DevynJohnson/Real-Estate-Website",
    projectUrl: "https://www.elisejohnsonrealtor.com/",
    projectName: "Professional Realtor Website",
    techStack: ["React", "Node.js", "MongoDB", "Bootstrap", "JWT"],
    projectDescription:
      "A comprehensive, mobile-responsive professional website developed using React and modern JavaScript frameworks for a licensed real estate professional serving the Twin Cities metropolitan area. This client-focused digital platform serves as the agent's primary online presence, featuring direct integration with the agent's Coldwell Banker profile for current listings access, comprehensive buyer and seller resource centers, and multiple streamlined contact channels for lead generation. The project encompassed the complete software development lifecycle from initial stakeholder consultation and content strategy through final deployment and ongoing maintenance. Key technical implementations include responsive design optimization, modern React development practices, user experience design principles, and secure user authentication. This real-world client project provided valuable experience in professional client communication, project timeline management, and delivering production-ready applications that directly impact business outcomes and client acquisition in the competitive real estate market.",
  },
  {
    id: 5,
    imageSrc: readmeGenImg,
    imageAlt: "screenshot of readme generator application",
    githubUrl: "https://github.com/DevynJohnson/readmeGenerator",
    projectUrl: "https://github.com/DevynJohnson/readmeGenerator",
    projectName: "README Generator",
    techStack: ["Node.js", "Inquirer.js", "File System API"],
    projectDescription:
      "A sophisticated command-line interface (CLI) application engineered to automate and standardize the creation of professional README documentation for software development projects. Built with Node.js and leveraging the Inquirer.js library for interactive prompt sequences, this tool streamlines project documentation workflows through dynamic content generation based on user input. The application employs template-driven architecture to produce consistently formatted, comprehensive Markdown files that adhere to industry best practices and open-source documentation standards. Key features include customizable project metadata collection, automated badge generation, structured section templates, and export functionality. This productivity tool has been integrated into my personal development workflow to ensure consistent documentation quality across all projects, significantly reducing setup time while maintaining professional presentation standards. The tool demonstrates proficiency in CLI development, file system operations, template processing, and developer experience optimization—skills directly applicable to DevOps automation and development tooling roles.",
  },
  {
    id: 6,
    imageSrc: rpsImg,
    imageAlt: "screenshot of rock paper scissors application",
    githubUrl: "https://github.com/DevynJohnson/RockPaperScissors",
    projectUrl: "https://devynjohnson.github.io/RockPaperScissors/",
    projectName: "Rock, Paper, Scissors Showdown",
    techStack: ["JavaScript", "HTML/CSS", "Bootstrap", "Local Storage"],
    projectDescription:
      "An interactive web-based game application that evolved from a core JavaScript logic challenge into a fully-featured front-end experience, demonstrating progressive enhancement and user interface development skills. Initially developed to master fundamental programming concepts including conditional logic, random number generation, and game state management, the project was subsequently enhanced with a responsive Bootstrap-powered user interface. The application features real-time score tracking, comprehensive game statistics including choice frequency analysis, and responsive card-based components that adapt seamlessly across desktop and mobile devices. This project showcases the ability to transform simple algorithmic challenges into engaging user experiences through thoughtful UI/UX design, effective use of CSS frameworks, and implementation of accessibility best practices. The development process highlighted skills in iterative enhancement, responsive design principles, and the practical application of front-end frameworks to create polished, user-friendly applications.",
  },
 
];
