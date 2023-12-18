import React from 'react'
import filterIcon from '../assets/mobile/icon-filter.svg'
import searchIcon from '../assets/desktop/icon-search.svg'
import location from '../assets/desktop/icon-location.svg'
import TitleFilter from './TitleFilter'
import LocationFilter from './LocationFilter'
import FullTimeFilter from './FullTimeFilter'
import MobileFilter from './MobileFilter'
import './Filter.css'


const Filter = (props) => {




  return (   
      <div className='filter' style={{ backgroundColor: props.day ? '#FFF' : '#19202D' }}>
        {props.screenWidth > 767 ?
          <>
            <div className='title-filter'>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" fill-rule="nonzero" /></svg>
              <TitleFilter titleFilterRef={props.titleFilterRef} day={props.day} screenWidth ={props.screenWidth} /> 
            </div>
            <div className='location-filter'>
              <div className='filter-line'></div>  
              <div className='location-filter-child'>
            <img src={location} alt='' />
            <LocationFilter locationFilterRef={props.locationFilterRef} day={props.day}  />
              </div>
            </div>
            <div className='fulltime-search-filter'> 
              <div className='filter-line'></div>
              <div className='full-time'>
                <FullTimeFilter fullTimeFilterRef={props.fullTimeFilterRef} checked={ props.FullTimeFilter} />   
                <h2 style={{ color: props.day ? '#19202D' : '#FFF' }}>Full Time {props.screenWidth > 1439 ? 'only' : ''}</h2> 
              </div>
              <button onClick={() => {
                props.setTitleFilter(props.titleFilterRef.current.value)
                props.setLocationFilter(props.locationFilterRef.current.value)
                props.setFullTimeFilter(props.fullTimeFilterRef.current.checked)
              }} className='search-button'>search</button>  
            </div>
          </>
          :
          <>
            <div className='title-filter'>  
              <TitleFilter titleFilterRef={props.titleFilterRef} day={props.day} screenWidth ={props.screenWidth} /> 
            </div>
             <div className='filter-icons'>
               <img onClick={() => { props.setFilterDisplay(!props.filterDisplay) }} src={filterIcon} alt='' />
               <img onClick={() => {
                props.setTitleFilter(props.titleFilterRef.current.value)
                props.setLocationFilter(props.locationFilterRef.current.value)
                props.setFullTimeFilter(props.fullTimeFilterRef.current.checked)
              }}   className='search-icon' src={searchIcon}  alt=''/>
            </div>
            <MobileFilter filterDisplay={props.filterDisplay} day={props.day} locationFilterRef={props.locationFilterRef} fullTimeFilterRef={props.fullTimeFilterRef} FullTimeFilter={props.FullTimeFilter} setFullTimeFilter={props.setFullTimeFilter} setFilterDisplay={props.setFilterDisplay} setLocationFilter={props.setLocationFilter} />
            
          </>
        }
        

      
      </div>
        
  )
}

export default Filter