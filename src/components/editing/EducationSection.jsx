import Input from "../Input";
import { addMonths, format } from "date-fns";

export default function EducationSection({ educations, onChange, onAdd, onRemove, onExpand }) {

  const educationList = educations.map((education) => {
    const index = educations.indexOf(education);
    if (education.expanded) {
      return (
        <li key={index} data-key={index} className="expanded-section">
          <Input
            label="Institution"
            type="text"
            name="institution"
            value={education.institution}
            onChange={onChange}
          />
          <Input
            label="Degree"
            type="text"
            name="degree"
            value={education.degree}
            onChange={onChange}
          />
          <Input
            label="Location"
            type="text"
            name="location"
            value={education.location}
            onChange={onChange}
          />
          <Input
            label="Graduation/Expected Graduation Date"
            type="month"
            name="graduation"
            value={format(addMonths(education.graduation, 1), 'yyyy-MM')}
            onChange={onChange}
          />
          <div className="buttons">
            <button className="remove-btn" onClick={() => onRemove(index)}>Delete</button>
            <button onClick={() => onExpand(index)}>Save</button>
          </div>
        </li>
      )
    } else {
      return (
        <li key={index} className="collapsed-section">
          <h3>{education.institution} | {education.degree}</h3>
          <div className="expand-container">
            <button className="expand" onClick={() => onExpand(index)}>
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
          </div>
        </li>
      )
    }
  });

  return (
    <div className="education-section">
      <h2>Education</h2>
      <ul>{educationList}</ul>
      <button onClick={onAdd}>Add Education</button>
    </div>
  )
}