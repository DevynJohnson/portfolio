import PropTypes from "prop-types";

export function SkillCard({ title, skills }) {
  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <h3>{title}</h3>
      </div>
      <div className="skill-card-content">
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export function EducationCard() {
  const educationData = [
    {
      degree: "Full Stack Coding Bootcamp",
      institution: "University of Minnesota",
      period: "2024 - 2025"
    },
    {
      degree: "B.S. Business Management",
      institution: "Western Governors University",
      period: "2018 - 2022"
    },
    {
      degree: "High School Diploma",
      institution: "Tartan Senior High School, Oakdale MN",
      period: "2002 - 2006"
    }
  ];

  return (
    <div className="education-content">
      {educationData.map((education, index) => (
        <div key={index} className="education-item">
          <h4 className="education-degree">{education.degree}</h4>
          <p className="education-institution">{education.institution}</p>
          <p className="education-period">{education.period}</p>
        </div>
      ))}
    </div>
  );
}
