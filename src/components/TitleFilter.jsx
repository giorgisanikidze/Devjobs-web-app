import React from 'react'

const TitleFilter = (props) => {
  return (
    <input
          ref={props.titleFilterRef}
      style={{ backgroundColor: props.day ? '#FFF' : '#19202D', color: props.day ? '#19202D' : '#FFF' }} type='text' placeholder={props.screenWidth > 1439 ? 'Filter by title, companies, expertise…' : 'Filter by title...'} />
          
  )
}

export default TitleFilter