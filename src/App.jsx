import { useState } from 'react'
import example from './example.jsx'
import { format, addMonths } from 'date-fns'
import './App.css'
import PersonalForm from './components/editing/PersonalForm.jsx'
import ExperiencesSection from './components/editing/ExperienceSection.jsx'
import EducationSection from './components/editing/EducationSection.jsx'

function App() {
  const [resume, setResume] = useState(example);

  function handlePersonalInfoChange(e) {
    setResume({ ...resume, [e.target.name]: e.target.value });
  }

  function addExperience() {
    const newExperience = {
      company: '',
      position: '',
      startDate: new Date(),
      endDate: new Date(),
      summary: '',
      id: crypto.randomUUID(),
    }
    setResume({...resume, experiences: [...resume.experiences, newExperience]})
  }

  function addEducation() {
    const newEducation = {
      institution: '',
      degree: '',
      startDate: new Date(),
      endDate: new Date(),
      id: crypto.randomUUID(),
    }
    setResume({...resume, education: [...resume.education, newEducation]})
  }

  return (
    <div className="app">
      <div className="editing">
        <PersonalForm resume={resume} onChange={handlePersonalInfoChange} />
        <ExperiencesSection onAdd={addExperience} setResume={setResume}/>
        <EducationSection onAdd={addEducation} setResume={setResume}/>
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
                <p>{format(addMonths(new Date(experience.startDate), 1), 'MMMM yyyy')} - {experience.endDate ? format(addMonths(new Date(experience.endDate), 1), 'MMMM yyyy') : 'Present'}</p>
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
                <p>{format(addMonths(new Date(education.startDate), 1), 'MMMM yyyy')} - {education.endDate ? format(addMonths(new Date(education.endDate), 1), 'MMMM yyyy') : 'Present'}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App
