import React from 'react'
import logo1 from '../src/assets/logo 1.svg';
import logo2 from '../src/assets/logo 2.svg';
import logo3 from '../src/assets/logo 3.svg';
import logo4 from '../src/assets/logo 4.svg'; 
import logo5 from '../src/assets/logo 5.svg'; 
import logo6 from '../src/assets/logo 6.svg'; 
export default function Brands() {
  return (
     <div className='brands'>
      <dic className = "logo-row">
       <img src={logo1} alt = "logo 1"></img>
       <img src = {logo2} alt = "logo 2"></img>
       <img src= {logo3} alt='log 3'></img>
       <img src= {logo4} alt = "logo 4"></img>
       <img src= {logo5} alt='logo 5'></img>
       <img src={logo6} alt = "logo 6"></img>
      </dic>
     </div>
  )
}
