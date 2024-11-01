import Input from "../Input";
import { addMonths, format } from "date-fns";

export default function ExperienceSection({ experiences, onChange, onAdd, onRemove, onExpand }) {

  const experiencesList = experiences.map((experience) => {
    const index = experiences.indexOf(experience);
    if (experience.expanded) {
      return (
        <li key={index} data-key={index}>
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
            label="Location"
            type="text"
            name="location"
            value={experience.location}
            onChange={onChange}
          />
          <Input
            label="Start Date"
            type="month"
            name="startDate"
            value={format(addMonths(experience.startDate, 1), 'yyyy-MM')}
            onChange={onChange}
          />
          <Input
            label="End Date"
            type="month"
            name="endDate"
            value={format(addMonths(experience.endDate, 1), 'yyyy-MM')}
            onChange={onChange}
          />
          <Input
            label="Summary"
            type="textarea"
            name="summary"
            value={experience.summary}
            onChange={onChange}
          />
          <button onClick={() => onRemove(index)}>Remove Experience</button>
          <button onClick={() => onExpand(index)}>Collapse</button>
        </li>
      )
    } else {
      return (
        <li key={index}>
          <h3>{experience.company} | {experience.position}</h3>
          <button onClick={() => onExpand(index)}>Expand</button>
        </li>
      )
    }
  });

  return (
    <div className="experiences-section">
      <h2>Experiences</h2>
      <ul>{experiencesList}</ul>
      <button onClick={onAdd}>Add Experience</button>
    </div>
  )
}