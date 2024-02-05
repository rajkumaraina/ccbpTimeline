import './index.css'

import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {item} = props
  const {projectTitle, description, duration, imageUrl, projectUrl} = item
  console.log(item)
  return (
    <div className="projectContainer">
      <img src={imageUrl} alt="project" className="projectImg" />
      <div className="courseTop">
        <h1 className="courseHeading">{projectTitle}</h1>
        <div className="coursePara">
          <AiFillCalendar className="courseDuration" />
          <p className="courseDuration">{duration}</p>
        </div>
      </div>
      <p className="courseDescription">{description}</p>
      <a href={projectUrl} className="anchorElement">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
