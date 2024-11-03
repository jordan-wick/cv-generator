import Input from "../Input";
import { addMonths, format } from "date-fns";

export default function ExperienceSection({ experiences, onChange, onAdd, onRemove, onExpand }) {

  const experiencesList = experiences.map((experience) => {
    const index = experiences.indexOf(experience);
    if (experience.expanded) {
      return (
        <li key={index} data-key={index} className="expanded-section">
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
          <div className="buttons">
            <button onClick={() => onRemove(index)} className="remove-btn">Delete</button>
            <button onClick={() => onExpand(index)}>Save</button>
          </div>
        </li>
      )
    } else {
      return (
        <li key={index} className="collapsed-section">
          <h3>{experience.company} | {experience.position}</h3>
          <button onClick={() => onExpand(index)} className="expand">
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </button>
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