import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="mainContainer">
      <h1 className="ccbp">MY JOURNEY OF CCBP 4.0</h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            primary: '#0967d2',
            secondary: 'white',
            cardBgColor: 'white',
            cardForeColor: 'violet',
            titleColor: 'black',
          }}
        >
          {timelineItemsList.map(each => {
            if (each.categoryId === 'PROJECT') {
              return <ProjectTimelineCard item={each} key={each.id} />
            }
            return <CourseTimelineCard item={each} key={each.id} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
