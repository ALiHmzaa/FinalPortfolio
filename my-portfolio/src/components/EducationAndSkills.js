import React from 'react';
import '../App.css';

const EducationAndSkills = () => {
  return (
    <div className="education-and-skills">
      <div className="education-content">
        <h2>Education</h2>
        <p>Bachelor's in Computer Science - Islamia University Bahawalpur</p>
        <p>Currently pursuing a DevOps Fellowship at UET.</p>
      </div>
      <div className="skills-content">
        <h2>Skills</h2>
        <ul>
          <li>WordPress</li>
          <li>HTML, CSS, Tailwind CSS</li>
          <li>JavaScript, React</li>
          <li>Python, Django</li>
        </ul>
      </div>
    </div>
  );
}

export default EducationAndSkills;
