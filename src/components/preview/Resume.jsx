import { format, addMonths } from 'date-fns';

export default function Resume({ resume }) {

  return (
    <div className="resume">
      <div className="resume-header">
        <h1>{resume.name}</h1>
        <hr />
        <p className='header-details'>
          {resume.phone} | {resume.email} | {resume.location}
        </p>
      </div>
      <br />
      <div className="resume-experiences">
        <h2>PROFESSIONAL EXPERIENCE</h2>
        <hr />
        <ul>
          {resume.experiences.map((experience, index) => (
            <li key={index}>
              <h3>{experience.company}</h3>
              <p className='italicized'>{experience.position}</p>
              {experience.location && <p>{experience.location}</p>}
              {experience.startDate && (
                <p>
                  {format(addMonths(new Date(experience.startDate), 1), 'MMMM yyyy')} - 
                  {experience.endDate ? format(addMonths(new Date(experience.endDate), 1), 'MMMM yyyy') : 'Present'}
                </p>
              )}
              <ul className='bullets'>
                {experience.summary.split('.').map((summary, index) => {
                  return summary.trim() && <li key={index}>{summary.trim()}.</li>
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <div className="resume-education">
        <h2>EDUCATION</h2>
        <hr />
        <ul>
          {resume.education.map((education, index) => (
            <li key={index}>
              <h3>{education.institution}</h3>
              <p className='italicized'>{education.degree}</p>
              {education.location && <p>{education.location}</p>}
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
