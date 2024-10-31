import { format, addMonths } from 'date-fns';

export default function Resume({ resume }) {
  return (
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
              {experience.startDate && (
                <p>
                  {format(addMonths(new Date(experience.startDate), 1), 'MMMM yyyy')} - 
                  {experience.endDate ? format(addMonths(new Date(experience.endDate), 1), 'MMMM yyyy') : 'Present'}
                </p>
              )}
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
              {education.graduation && (
                <p>{format(addMonths(new Date(education.graduation), 1), 'MMMM yyyy')}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

}