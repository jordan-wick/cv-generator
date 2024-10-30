import { useState } from 'react'
import example from './example.jsx'
import { format } from 'date-fns'
import './App.css'
import PersonalForm from './components/editing/PersonalForm.jsx'

function App() {
  const [resume, setResume] = useState(example);

  function handlePersonalInfoChange(e) {
    setResume({ ...resume, [e.target.name]: e.target.value });
  }

  return (
    <div className="app">
      <div className="editing">
        <PersonalForm resume={resume} onChange={handlePersonalInfoChange} />
        <div className="experience-form">
          <h2>Experiences</h2>
          {/* TODO */}
        </div>
      </div>
      <div className="resume">
        <div className="resume-header">
          <h1>{resume.name}</h1>
          <p>{resume.phone}</p>
          <p>{resume.email}</p>
          <p>{resume.location}</p>
        </div>
        <div className="resume-experiences">
          <h2>Experiences</h2>
          <ul>
            {resume.experiences.map((experience, index) => (
              <li key={index}>
                <h3>{experience.company}</h3>
                <p>{experience.position}</p>
                <p>{format(new Date(experience.startDate), 'MMMM yyyy')} - {experience.endDate ? format(new Date(experience.endDate), 'MMMM yyyy') : 'Present'}</p>
                <p>{experience.summary}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="resume-education">
          <h2>Education</h2>
          <ul>
            {resume.education.map((education, index) => (
              <li key={index}>
                <h3>{education.institution}</h3>
                <p>{education.degree}</p>
                <p>{format(new Date(education.startDate), 'MMMM yyyy')} - {education.endDate ? format(new Date(education.endDate), 'MMMM yyyy') : 'Present'}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App
