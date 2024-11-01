import Input from "../Input";
import { addMonths, format } from "date-fns";

export default function EducationSection({ educations, onChange, onAdd, onRemove, onExpand }) {

  const educationList = educations.map((education) => {
    const index = educations.indexOf(education);
    if (education.expanded) {
      return (
        <li key={index} data-key={index}>
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
            label="Graduation/Expected Graduation Date"
            type="month"
            name="graduation"
            value={format(addMonths(education.graduation, 1), 'yyyy-MM')}
            onChange={onChange}
          />
          <button onClick={() => onRemove(index)}>Remove Education</button>
          <button onClick={() => onExpand(index)}>Collapse</button>
        </li>
      )
    } else {
      return (
        <li key={index}>
          <h3>{education.institution} | {education.degree}</h3>
          <button onClick={() => onExpand(index)}>Expand</button>
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