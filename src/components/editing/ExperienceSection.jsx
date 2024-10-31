import Input from "../Input";
import example from "../../example";
import { addMonths, format } from "date-fns";
import { useState, useEffect } from "react";

export default function ExperienceSection({ setResume, onAdd, onRemove }) {
  const [experiencesSection, setExperiencesSection] = useState(example.experiences);

  useEffect(() => {
    setResume(prevState => ({
      ...prevState,
      experiences: experiencesSection
    }));
  }, [experiencesSection, setResume]);

  function handleExperienceChange(e) {
    const { name, value } = e.target;
    const index = parseInt(e.target.closest('li').dataset.key, 10);
    setExperiencesSection(prevState => 
      prevState.map((exp, ind) => 
        ind === index ? { ...exp, [name]: value } : exp
      )
    );
  }

  const experiencesList = experiencesSection.map((experience) => {
    const index = experiencesSection.indexOf(experience);
    if (experience.expanded) {
      return (
        <li key={index} data-key={index}>
          <Input
            label="Company"
            type="text"
            name="company"
            value={experience.company}
            onChange={handleExperienceChange}
          />
          <Input
            label="Position"
            type="text"
            name="position"
            value={experience.position}
            onChange={handleExperienceChange}
          />
          <Input
            label="Start Date"
            type="month"
            name="startDate"
            value={format(addMonths(experience.startDate, 1), 'yyyy-MM')}
            onChange={handleExperienceChange}
          />
          <Input
            label="End Date"
            type="month"
            name="endDate"
            value={format(addMonths(experience.endDate, 1), 'yyyy-MM')}
            onChange={handleExperienceChange}
          />
          <Input
            label="Summary"
            type="textarea"
            name="summary"
            value={experience.summary}
            onChange={handleExperienceChange}
          />
          <button onClick={() => onRemove(index)}>Remove Experience</button>
          <button onClick={() => expandExperience(index)}>Collapse</button>
        </li>
      )
    } else {
      return (
        <li key={index}>
          <h3>{experience.company}/{experience.position}</h3>
          <button onClick={() => expandExperience(index)}>Expand</button>
        </li>
      )
    }
  });

  function expandExperience(index) {
    setExperiencesSection(prevState => 
      prevState.map((exp, ind) => 
        ind === index ? { ...exp, expanded: !exp.expanded } : exp
      )
    );
  }

  return (
    <div className="experiences-section">
      <h2>Experiences</h2>
      <ul>{experiencesList}</ul>
      <button onClick={onAdd}>Add Experience</button>
    </div>
  )
}