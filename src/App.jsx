import { useState } from 'react'
import example from './example.jsx'
import './App.css'
import PersonalForm from './components/editing/PersonalForm.jsx'
import ExperiencesSection from './components/editing/ExperienceSection.jsx'
import EducationSection from './components/editing/EducationSection.jsx'
import Resume from './components/preview/Resume.jsx'

function App() {
  const [resume, setResume] = useState(example);

  function handlePersonalInfoChange(e) {
    setResume({ ...resume, [e.target.name]: e.target.value });
  }

  function addExperience() {
    const newExperience = {
      company: '',
      position: '',
      startDate: null,
      endDate: null,
      summary: '',
      id: crypto.randomUUID(),
    }
    setResume({...resume, experiences: [...resume.experiences, newExperience]})
  }

  function addEducation() {
    const newEducation = {
      institution: '',
      degree: '',
      graduation: null,
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
      <Resume resume={resume} />
    </div>
  );
}

export default App
