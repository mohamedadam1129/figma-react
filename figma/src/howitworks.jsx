import React from 'react'
import screen1 from '../src/assets/screen 1.svg'; 
import screen2 from '../src/assets/screen 2.svg'; 
import screen3 from '../src/assets/screen 3.svg'; 
function appfeatures() {
  return (
     <div>
        <div className='how-it-works'>
            <h2>How it works</h2>
        </div>
        <div className='app-features'>
            <img src={screen1} alt='budget screen'></img>
        </div>
        <div className='phone-screen main scree'>
            <img src={screen2} alt='transactions screen'></img>
        </div>
        <div className='screen-description'>
            <h3>scree transaction history</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo maiores, quam corporis dolorem numquam minus eligendi tempora quisquam neque cumque nostrum sequi aut nisi, blanditiis, illo doloremque facere placeat.</p>
        </div>
        <div className='phone-screen'>
            <img src={screen3} alt='transfer screen'></img>
        </div>
     </div>
  )
}

export default appfeatures