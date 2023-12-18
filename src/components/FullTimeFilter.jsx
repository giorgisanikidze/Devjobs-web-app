import React from 'react'

const FullTimeFilter = (props) => {
  return ( 
    <input style={{cursor: 'pointer'}} ref={props.fullTimeFilterRef} type='checkbox' />
  )
}

export default FullTimeFilter