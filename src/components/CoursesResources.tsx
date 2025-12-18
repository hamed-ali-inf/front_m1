import React from "react";
import { FiEdit } from "react-icons/fi";

import "./CoursesResources.css";

const CoursesResources = () => {
  const courses = [
    "Algorithmique et structure de données avancées 1",
    "Architectures Orientées Services",
    "Architecture et administration des bases de données",
    "Protocoles réseaux",
    "Modélisation et Architectures logicielles",
    "Mathématique avancé"
  ];

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1>Cours & Ressources</h1>
      </div>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-content">
              <h3>{course}</h3>
            </div>
            <div className="course-actions">
              <FiEdit className="edit-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesResources;