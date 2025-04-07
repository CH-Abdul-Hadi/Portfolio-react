import React from "react";
import "./eduStyle.css";

const TimelineItem = ({ year, title, content, isLast }) => {
  return (
    <div className="timeline-item">
      {/* Year and marker */}
      <div className="timeline-year-wrapper">
        <div className="timeline-year-container">
          <span className="timeline-year">{year}</span>
          <div
            className="timeline-marker"
            style={{ background: "Wheat" }}
          ></div>
          {/* Horizontal connector - mobile only */}
          <div
            className="timeline-connector-mobile"
            style={{ background: "Wheat" }}
          ></div>
        </div>
      </div>

      {/* Pill-shaped content container */}
      <div
        className="timeline-content"
        style={{ background: "#1a1a1a", borderColor: "#333333", border: 'solid 2px Wheat' }}
      >
        <h3 className="timeline-title" style={{ background: "inherit" }}>
          {title}
        </h3>
        <p className="timeline-text" style={{ background: "inherit" }}>
          {content}
        </p>
      </div>

      {/* Vertical connector - desktop only */}
      {!isLast && (
        <div
          className="timeline-connector-vertical"
          style={{ background: "Wheat" }}
        />
      )}
    </div>
  );
};

function Educations() {
  const educationData = [
    {
      year: "2023",
      title: "Advanced Web Development Certification",
      content:
        "Completed intensive training in modern frontend frameworks including React, Vue, and Node.js backend integration.",
    },
    {
      year: "2022",
      title: "Bachelor of Computer Science",
      content:
        "Graduated with honors, specializing in software engineering and database management systems.",
    },
    {
      year: "2021",
      title: "Web Development Bootcamp",
      content:
        "Learned fundamentals of HTML, CSS, JavaScript, and responsive design principles.",
    },
  ];

  return (
    <section className="educations-section" id="edu">
      <h1 className="educations-title">Education</h1>

      <div className="timeline-container">
        {educationData.map((edu, index) => (
          <TimelineItem
            key={index}
            year={edu.year}
            title={edu.title}
            content={edu.content}
            isLast={index === educationData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

export default Educations;
