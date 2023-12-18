import React from 'react'

const LocationFilter = (props) => {
  return (
    <input ref={props.locationFilterRef} style={{ backgroundColor: props.day ? '#FFF' : '#19202D', color: props.day ? '#19202D' : '#FFF' }} type='text' placeholder='Filter by location...' />

  )
}

export default LocationFilter