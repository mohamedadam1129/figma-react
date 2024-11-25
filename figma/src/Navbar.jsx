import React from 'react'
import solid from '../src/assets/solid logo.svg';    

function navbar() {
  return (
    <header>
      <nav>
        <a href='#' className='navbar-logo'></a>
        <img src = {solid}></img>
        <a href = "#" className='navbar-features'>features</a>
      </nav>
      <div className='navbar-right'>
        <p>Dark mode</p>
        <label className='switch'>
          <input type = "checkbox"></input>
          <span className='slider-round'></span>
        </label>

       <a href = "#" className='navbar-button'>
        <i className='fa-thin fa-user-large'></i>
        <span>Sign in/ up</span>
       </a>

       <button className='btn-mobile'><i className='fa-solid fa-bars'></i></button>
      </div>
    </header>
  )
     
}

export default navbar