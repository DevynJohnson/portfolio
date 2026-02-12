import { Accordion, Button } from "react-bootstrap";
import { SkillCard, EducationCard } from "../components/ResumeCards";
import { skillsData } from "../data/skillsData";
import "../styles/page-common.css";
import "../styles/resume.css";

function downloadResume() {
  const link = document.createElement("a");
  link.href = "/assets/Devyn Johnson - Full-Stack Web Developer.pdf";
  link.download = "Devyn Johnson - Full-Stack Web Developer.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function WorkHistory() {
  return (
    <Accordion flush className="work-history-accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          February 2026 - Present | General Manager at The Quarry Taproom, Hastings MN
        </Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>Manage daily operations of a high-volume restaurant and bar, including staff, inventory, and customer service to ensure smooth functioning and positive guest experiences.</li>
          <li>Creation of comprehensive training materials and onboarding processes for new hires, resulting in improved staff performance and retention.</li>
          <li>Ownership of key metrics including overall sales, inventory management, labor percentage, and financial reporting to drive informed business decisions and optimize profitability.</li>
          <li>Lead community engagement initiatives, fostering strong relationships with local businesses and customers to enhance brand presence and drive repeat business.</li>
          <li>Implement innovative marketing and operational strategies to attract new customers and retain existing ones, contributing to revenue growth and brand loyalty.</li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          December 2025 - Present | Owner/Operator at Devyn Johnson Digital Solutions, LLC, Hastings MN
        </Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>Successfully delivered custom web development projects for clients in real estate and small business sectors.</li>
          <li>Create web-based applications using a variety of technologies and tools with a focus on accessibility and user-centered design, solving real-world challenges for clients and end-users.</li>
          <li>Manage all aspects of client projects from initial consultation through deployment and ongoing maintenance.</li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          December 2024 - February 2026 | Chef at Saint Therese of Woodbury, Woodbury MN
        </Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>Prepare and serve meals for residents across a continuum of care, including memory care, transitional care (TCU), long-term care, assisted living, and independent living.</li>
          <li>Ensure all meals meet individual dietary needs, including texture modifications, allergy accommodations, and personal preferences.</li>
          <li>Responsible for thorough meal prep to support efficient service and maintain consistent quality.</li>
          <li>Follow standardized recipes that align with nutritional guidelines set by state and federal regulations, prioritizing both taste and health.</li>
          <li>Collaborate with dietary and care teams to provide a positive dining experience that supports resident well-being.</li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          July 2024 - Oct 2024 | Owner/Operator at Buns of Wheel Burger Company
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
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          January 2022 - July 2024 | Campus Director of Nutrition at Martin Luther Care Center, Bloomington MN
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
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          June 2020 - January 2022 | Restaurant Manager at B52s Burgers and Brews, Inver Grove Heights MN
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
      <Accordion.Item eventKey="6">
        <Accordion.Header>
          May 2017 - August 2019 | General Manager at Green Mill Restaurant and Bar, Hastings MN
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
      <Accordion.Item eventKey="7">
        <Accordion.Header>
          January 2014 - May 2017 | Retail Support Specialist at Verizon Wireless, Bloomington MN
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
  );
}

function Resume() {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        <div className="page-content-card">
              {/* Header */}
              <div className="page-header">
                <h2 className="page-title">Professional Resume</h2>
                <div className="page-subtitle">
                  Full Stack Developer & Technical Professional
                </div>
              </div>

              <div className="resume-intro">
                <p className="resume-text">
                  Download my complete resume in PDF format for a comprehensive overview of my experience and qualifications.
                </p>
                <div className="text-center mb-4">
                  <Button className="download-resume-btn" onClick={downloadResume}>
                    <i className="fas fa-download"></i> Download Resume PDF
                  </Button>
                </div>
              </div>

              {/* Tech Skills Section */}
              <div className="resume-section">
                <h3 className="resume-section-title">Technical Skills</h3>
                <div className="skills-flex-container">
                  <div className="skill-card-wrapper">
                    <SkillCard {...skillsData.frontEnd} />
                  </div>
                  <div className="skill-card-wrapper">
                    <SkillCard {...skillsData.backEnd} />
                  </div>
                  <div className="skill-card-wrapper">
                    <SkillCard {...skillsData.databases} />
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="resume-section">
                <h3 className="resume-section-title">Education</h3>
                <EducationCard />
              </div>

              {/* Work History Section */}
              <div className="resume-section">
                <h3 className="resume-section-title">Work History</h3>
                <WorkHistory />
              </div>
            </div>
          </div>
    </div>
  );
}

export default Resume;
