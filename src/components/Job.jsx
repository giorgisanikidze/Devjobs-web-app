import React from 'react'
import { Link } from 'react-router-dom'
import './Job.css'

const Job = (props) => {
    
 
    return ( 
        
        <div className='job' id={props.id}>       
            <div className={props.day? 'background-day' : 'background-night'}></div>    
            <img style={{ backgroundColor: props.job.logoBackground }} src={require(`../assets/logos/${props.job.logo}`)} alt={`${props.job.company} Logo`} />
            <div className='data'>
                <p>{props.job.postedAt }</p>
                <p>.</p>
                <p>{props.job.contract }</p>
            </div>
            <Link
                onMouseEnter={(e) => {
                    e.target.style.color = '#6E8098'
                }}
                onMouseOut={(e) => {
                    e.target.style.color = props.day ? '#19202D' : '#FFF'
                }}
                onClick={(e) => {
                props.setElementId(e.target.parentNode.id)
            }} to={`/detail`} style={{ color: props.day ? "#19202D" : '#FFF', textDecoration: 'none' }} className='position'>
                {props.job.position}
            </Link>
            <p className='company'>{props.job.company }</p>      
            <h4 className='location'>{props.job.location }</h4>    
        </div>
    )
}

export default Job