import React from 'react'
import sun from '../assets/desktop/icon-sun.svg'
import moon from '../assets/desktop/icon-moon.svg'
import logo from '../assets/desktop/logo.svg'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
  
  return (
    <div className='header' style={{ backgroundColor: props.screenWidth > 767 && props.day ? '#F4F6F8' : '#121721' }}>
      <Link to={'/'}>
        <img src={logo } alt=''></img>
      </Link>
        <div className='mode-change'>
          <img src={sun} alt='' />
          <div onClick={() => {props.setDay(!props.day)}} style={{justifyContent: props.day? 'left': 'right'}}  className='mode'>
            <span className='mode-button'></span>
          </div>
          <img src={moon} alt=''/>
        </div>
      </div>
  )
}

export default Header