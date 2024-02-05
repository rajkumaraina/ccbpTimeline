import './index.css'

import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {item} = props
  const {courseTitle, description, duration, tagsList} = item
  console.log(item)
  return (
    <div className="courseContainer">
      <div className="courseTop">
        <h1 className="courseHeading">{courseTitle}</h1>
        <div className="coursePara">
          <AiFillClockCircle className="courseDuration" />
          <p className="courseDuration">{duration}</p>
        </div>
      </div>
      <p className="courseDescription">{description}</p>
      <ul className="courseUnorderedList">
        {tagsList.map(each => (
          <li key={each.id} className="courseListItem">
            <p className="tagListPara">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
