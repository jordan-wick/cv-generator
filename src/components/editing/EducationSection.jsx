import Input from "../Input";
import example from "../../example";
import { addMonths, format } from "date-fns";
import { useState, useEffect } from "react";

export default function EducationSection({ setResume, onAdd, onRemove }) {
  const [educationSection, setEducationSection] = useState(example.education);

  useEffect(() => {
    setResume(prevState => ({
      ...prevState,
      education: educationSection
    }));
  }, [educationSection, setResume]);

  function handleEducationChange(e) {
    const { name, value } = e.target;
    const index = parseInt(e.target.closest('li').dataset.key, 10);
    setEducationSection(prevState => 
      prevState.map((edu, ind) => 
        ind === index ? { ...edu, [name]: value } : edu
      )
    );
  }

  const educationList = educationSection.map((education) => {
    const index = educationSection.indexOf(education);
    if (education.expanded) {
      return (
        <li key={index} data-key={index}>
          <Input
            label="Institution"
            type="text"
            name="institution"
            value={education.institution}
            onChange={handleEducationChange}
          />
          <Input
            label="Degree"
            type="text"
            name="degree"
            value={education.degree}
            onChange={handleEducationChange}
          />
          <Input
            label="Graduation/Expected Graduation Date"
            type="month"
            name="graduation"
            value={format(addMonths(education.startDate, 1), 'yyyy-MM')}
            onChange={handleEducationChange}
          />
          <button onClick={() => onRemove(index)}>Remove Education</button>
          <button onClick={() => expandEducation(index)}>Collapse</button>
        </li>
      )
    } else {
      return (
        <li key={index}>
          <h3>{education.school}/{education.degree}</h3>
          <button onClick={() => expandEducation(index)}>Expand</button>
        </li>
      )
    }
  });

  function expandEducation(index) {
    setEducationSection(prevState => 
      prevState.map((edu, ind) => 
        ind === index ? { ...edu, expanded: !edu.expanded } : edu
      )
    );
  }

  return (
    <div className="education-section">
      <h2>Education</h2>
      <ul>{educationList}</ul>
      <button onClick={onAdd}>Add Education</button>
    </div>
  )
}