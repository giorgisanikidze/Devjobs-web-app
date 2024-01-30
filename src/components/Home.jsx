import Filter from './Filter'
import Job from './Job'
import { React, useState, useRef } from 'react';
import data from '../data.json'
import './Home.css'


const Home = (props) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [fullTimeFilter, setFullTimeFilter] = useState(false);


  
  const titleFilterRef = useRef(null)
  const locationFilterRef = useRef(null)
  const fullTimeFilterRef = useRef(null)




  const filterFunc = () => {
    if (titleFilter === '' && locationFilter === '' && fullTimeFilter === false) {
      return data
    }
    if (fullTimeFilter) {
      return data.filter((job) => job.position.toLowerCase().includes(titleFilter.toLowerCase()) && job.location.toLowerCase().includes(locationFilter.toLowerCase()) && job.contract === 'Full Time' ) 
    }
    return data.filter((job) => job.position.toLowerCase().includes(titleFilter.toLowerCase()) && job.location.toLowerCase().includes(locationFilter.toLowerCase()) ) 
  }


  return (
    <>
      <div className='container' style={{ backgroundColor: props.day ? '#F4F6F8' : '#121721' }}>
        <Filter fullTimeFilter={fullTimeFilter} setFullTimeFilter={setFullTimeFilter} fullTimeFilterRef={fullTimeFilterRef} titleFilterRef={titleFilterRef} locationFilterRef={locationFilterRef} setTitleFilter={setTitleFilter} setLocationFilter={setLocationFilter} locationFilter={locationFilter} screenWidth={props.screenWidth} day={props.day} filterDisplay={props.filterDisplay} setFilterDisplay={props.setFilterDisplay} /> 
        
        <div className='jobs' >
          {filterFunc().map((job) => {
            return <Job setElementId={props.setElementId} id={job.id} key={job.id} job={job} day={props.day} />
          })}
     
        </div>
      </div>
      <div className="overlay" style={{display : props.filterDisplay ? "block" : "none"}}>

      </div>
    </>
  )
}

export default Home