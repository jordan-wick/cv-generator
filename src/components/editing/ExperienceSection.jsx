import Input from "../Input";
import example from "../../example";
import { useState } from "react";

export default function ExperienceSection({ onChange, onAdd, onRemove }) {
  const [experiencesSection, setExperiencesSection] = useState(example.experiences);

  const experiencesList = experiencesSection.map((experience, index) => {
    if (experience.expanded) {
      return (
        <li key={index}>
          <Input
            label="Company"
            type="text"
            name="company"
            value={experience.company}
            onChange={onChange}
          />
          <Input
            label="Position"
            type="text"
            name="position"
            value={experience.position}
            onChange={onChange}
          />
          <Input
            label="Start Date"
            type="date"
            name="startDate"
            value={experience.startDate}
            onChange={onChange}
          />
          <Input
            label="End Date"
            type="date"
            name="endDate"
            value={experience.endDate}
            onChange={onChange}
          />
          <Input
            label="Summary"
            type="text"
            name="summary"
            value={experience.summary}
            onChange={onChange}
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
    experiencesSection.forEach(experience => {
      console.log(`${experience.company} is expanded: ${experience.expanded}`);
    })
  }

  return (
    <div className="experiences-section">
      <h2>Experiences</h2>
      <ul>{experiencesList}</ul>
      <button onClick={onAdd}>Add Experience</button>
    </div>
  )
}