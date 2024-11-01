import { useState } from 'react'
import example from './example.jsx'
import './App.css'
import PersonalForm from './components/editing/PersonalForm.jsx'
import ExperiencesSection from './components/editing/ExperienceSection.jsx'
import EducationSection from './components/editing/EducationSection.jsx'
import Resume from './components/preview/Resume.jsx'
import { useEffect } from 'react'

function App() {
  const [resume, setResume] = useState(example);

  useEffect(() => {
    setResume(prevState => ({
      ...prevState,
      experiences: resume.experiences,
      education: resume.education
    }));
  }, [resume.experiences, resume.education]);

  function handlePersonalInfoChange(e) {
    setResume({ ...resume, [e.target.name]: e.target.value });
  }

  function handleExperienceChange(e) {
    const { name, value } = e.target;
    const index = parseInt(e.target.closest('li').dataset.key, 10);
    setResume(prevState => ({
      ...prevState,
      experiences: prevState.experiences.map((exp, ind) => 
        ind === index ? { ...exp, [name]: value } : exp
      )
    }));
  }

  function addExperience() {
    const newExperience = {
      company: '',
      position: '',
      startDate: Date.now('yyyy-MM'),
      endDate: Date.now('yyyy-MM'),
      summary: '',
      expanded: true,
      id: crypto.randomUUID(),
    }
    setResume({...resume, experiences: [...resume.experiences, newExperience]})
  }

  function removeExperience(index) {
    setResume({...resume, experiences: resume.experiences.filter((exp, ind) => ind !== index)})
  }

  function expandExperience(index) {
    setResume(prevState => ({
      ...prevState,
      experiences: prevState.experiences.map((exp, ind) => 
        ind === index ? { ...exp, expanded: !exp.expanded } : exp
      )
    }));
  }

  function handleEducationChange(e) {
    const { name, value } = e.target;
    const index = parseInt(e.target.closest('li').dataset.key, 10);
    setResume(prevState => ({
      ...prevState,
      education: prevState.education.map((edu, ind) => 
        ind === index ? { ...edu, [name]: value } : edu
      )
    }));
  }

  function addEducation() {
    const newEducation = {
      institution: '',
      degree: '',
      graduation: Date.now('yyyy-MM'),
      expanded: true,
      id: crypto.randomUUID(),
    }
    setResume({...resume, education: [...resume.education, newEducation]})
  }

  function removeEducation(index) {
    setResume({...resume, education: resume.education.filter((edu, ind) => ind !== index)})
  }

  function expandEducation(index) {
    setResume(prevState => ({
      ...prevState,
      education: prevState.education.map((edu, ind) => 
        ind === index ? { ...edu, expanded: !edu.expanded } : edu
      )
    }));
  }

  return (
    <div className="app">
      <div className="editing">
        <PersonalForm resume={resume} onChange={handlePersonalInfoChange} />
        <ExperiencesSection 
          experiences={resume.experiences} 
          onChange={handleExperienceChange}
          onAdd={addExperience} 
          onRemove={removeExperience}
          onExpand={expandExperience}
        />
        <EducationSection 
          educations={resume.education}
          onChange={handleEducationChange}
          onAdd={addEducation} 
          onRemove={removeEducation}
          onExpand={expandEducation}
        />
      </div>
      <Resume resume={resume} />
    </div>
  );
}

export default App
