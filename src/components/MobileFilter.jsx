import React from 'react'
import location from '../assets/desktop/icon-location.svg'
import LocationFilter from './LocationFilter'
import FullTimeFilter from './FullTimeFilter'
import './MobileFilter.css'


const MobileFilter = (props) => {
  return (

    <div className='mobile-filter' style={{ display: props.filterDisplay ? 'flex' : 'none', backgroundColor: props.day ? "#FFF": "#19202D"}}>
      <div className='mobile-filter-location'>
        <img src={location} alt='' />
        <LocationFilter locationFilterRef={props.locationFilterRef} day={props.day} />
      </div>
      <div className='line'></div>
      <div className='full-time'>
        <FullTimeFilter fullTimeFilterRef={props.fullTimeFilterRef} checked={props.FullTimeFilter } />
        <h2 style={{color: props.day ? '#19202D' : '#FFF'}} >Full Time Only</h2>
      </div>
      <button onClick={() => {  
        props.setFullTimeFilter(props.fullTimeFilterRef.current.checked);
        props.setFilterDisplay(false)
        props.setLocationFilter(props.locationFilterRef.current.value)
        
      }} className='mobile-search'>search</button> 
      
    </div>
  )
}

export default MobileFilter