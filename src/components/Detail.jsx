import React from 'react'
import data from '../data.json'
import './Detail.css'

const Detail = (props) => {


  const getJob = () => {
    return data.filter((job) =>
      String(job.id) === String( props.elementId))[0]

  }

  console.log(getJob().logo)

  
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '64px', background: props.day ? '#F4F6F8' : '#121721'}}>
      <div className='details'>
        <div className="job-stats" style={{backgroundColor: props.day ? '#FFF' : '#19202D'}}>
          <div className="job-stats-left">
            <img style={{ backgroundColor: getJob().logoBackground }} src={require(`../assets/logos/${getJob().logo}`)} alt={`${getJob().company} Logo`} />
            <div className="company-name">
              <h2 style={{color: !props.day ? '#FFF' : '#19202D'}}>{getJob().company}</h2>
              <h3>{getJob().company.toLowerCase() + '.com' }</h3>
            </div>
          </div>

          <a href={getJob().website}>Company Site</a>

        </div>
        <div className="main" style={{backgroundColor: props.day ? '#FFF' : '#19202D'}}>

          <div className="job-data">  
            <div className="data-left">
              <div className="data-detail">
                <p>{getJob().postedAt }</p>
                <p>.</p>
                <p>{getJob().contract }</p>
              </div>
              <h3 style={{color: !props.day ? '#FFF' : '#19202D'}}>{getJob().position}</h3>
              <h4 className='location'>{getJob().location }</h4>   
            </div>
            <a className='apply' href={getJob().apply}>Apply Now</a>
          </div>
          <p className='description'>{getJob().description}</p>
          <div className="requirements">
            <h2 style={{color: !props.day ? '#FFF' : '#19202D'}}>Requirements</h2>
            <p>{getJob().requirements.content}</p>
            <ul>
              {getJob().requirements.items.map((elem) => {
                return <li>
                  {elem}
                </li>
              })}
            </ul>
          </div>

          <div className="role">
            <h2 style={{color: !props.day ? '#FFF' : '#19202D'}}>What You Will Do</h2>
            <p>{getJob().role.content}</p>
            <ol>
              {getJob().role.items.map((elem) => {
                return <li>
                  {elem}
                </li>
              })}
            </ol>
          </div>
        </div>
      </div>

      <div className="footer" style={{ backgroundColor: props.day ? '#FFF' : '#19202D' }}>
        <div className="footer-child">

          {props.screenWidth > 767 ?
            <div>
              <h2 style={{color: !props.day ? '#FFF' : '#19202D'}}>{getJob().position}</h2>
              <h3>{getJob().company }</h3>
            </div> : null}
          <a href={getJob().apply }>Apply Now</a>
        </div>
        </div>

      
    </div>
  )
}

export default Detail