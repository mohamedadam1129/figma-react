import React from 'react'
import icontop from '../src/assets/icon top.svg'; 
import iconcashback from '../src/assets/icon cashback.svg'; 
import iconsupport from '../src/assets/icon support.svg'; 
import inconcost from '../src/assets/icon cost.svg'; 
import icondata from '../src/assets/icon data security.svg';
import iconeasy from '../src/assets/icon easy payments.svg';
import appscreenshot from '../src/assets/app screenshot.svg'; 
import contacts from '../src/assets/contacts.svg'; 
import appscreen from '../src/assets/app screen.svg'; 
const TransferFeatures = () => (
    <div className='transfer'>
      <div className='left-section'>
        <div className='feature-text'>
        <h1>Make your money transfers simple and clear </h1>
        <ul>
          <li>Banking transactions are free for you </li>
          <li>No monthly cas commission </li>
          <li>Manage payments and transactions online</li>
        </ul>
        <button className='learn-more'>Learn more</button>
        </div>
    
        <div className='contacts-card'>
          <img src={appscreen} alt='contactslist'></img>
          <ul className='contacts-list'>
          </ul>
        </div>

        <div className='right-section'>
          <img src={contacts} alt='app-screen' className='main-screen'></img>
          <div className='details'>
          <h3>Receive payment from international bank details</h3>
          <p>manage your payments online </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nesciunt. Ipsam magnam laudantium omnis, eum aliquid et cupiditate eius quidem provident. Velit eum quod iure id sint aperiam, nisi reprehenderit.</p>
          <button className='learn-more'>Learn more </button>
        </div>
      </div>
        </div>
    </div>
  );

  export default TransferFeatures;
  
