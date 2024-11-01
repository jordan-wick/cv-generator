import { format, addMonths } from 'date-fns';

export default function Resume({ resume }) {

  return (
    <div className="resume">
      <div className="resume-header">
        <h1>{resume.name}</h1>
        <p className='header-details'>
          {resume.phone} | {resume.email} | {resume.location}
        </p>
        <hr />
      </div>
      <br />
      <div className="resume-experiences">
        <h2>PROFESSIONAL EXPERIENCE</h2>
        <hr />
        <ul>
          {resume.experiences.map((experience, index) => (
            <li key={index}>
              <div className="experience-item">
                <div className="experience-header">
                  <div className="left-aligned">
                    <h3>{experience.company}</h3>
                    <p className='italicized'>{experience.position}</p>
                  </div>
                  <div className="right-aligned">
                    {experience.startDate && (
                      <p className='bold'>
                        {format(addMonths(new Date(experience.startDate), 1), 'MMMM yyyy')} - {' '}
                        {experience.endDate ? format(addMonths(new Date(experience.endDate), 1), 'MMMM yyyy') : 'Present'}
                      </p>
                    )}
                    {experience.location && <p className='italicized'>{experience.location}</p>}
                  </div>
                </div>
                <ul className='bullets'>
                  {experience.summary.split('.').map((summary, index) => {
                    return summary.trim() && <li key={index}>{summary.trim()}.</li>
                  })}
                </ul>
              </div>
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
              <div className="education-item">
                <div className="left-aligned">
                  <h3>{education.institution}</h3>
                  <p className='italicized'>{education.degree}</p>
                </div>
                <div className="right-aligned">
                  {education.graduation && (
                    <p className='bold'>{format(addMonths(new Date(education.graduation), 1), 'MMMM yyyy')}</p>
                  )}
                  {education.location && <p className='italicized'>{education.location}</p>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

}
