import React from 'react'
import icontop from '../src/assets/icon top.svg'; 
import iconcashback from '../src/assets/icon cashback.svg'; 
import iconsupport from '../src/assets/icon support.svg'; 
import inconcost from '../src/assets/icon cost.svg'; 
import icondata from '../src/assets/icon data security.svg';
import iconeasy from '../src/assets/icon easy payments.svg';
import appscreenshot from '../src/assets/app screenshot.svg'; 
import contacts from '../src/assets/contacts.svg'; 
const TransferFeatures = () => (
    <section id="money-transfer">
      <div className="container">
        <div className="feature-row">
          <div className="feature-text">
            <h2>Make your money transfer simple and clear</h2>
            <ul>
              <li>Banking transactions are free for you</li>
              <li>No monthly cash commission</li>
              <li>Manage payments and transactions online</li>
            </ul>
            <a href="#" className="learn-more">
              Learn more <span className="arrow">→</span>
            </a>
          </div>
          <div className="feature-images">
            <img src={appscreenshot} alt="App screen" className="main-screen" />
          </div>
        </div>
        <div className="feature-row reverse">
          <div className="feature-text">
            <h2>Receive payment from international bank details</h2>
            <ul>
              <li>Manage your payments online</li>
              <li>A elementum viveira et maecenas sem praesium...</li>
            </ul>
            <a href="#" className="learn-more">
              Learn more <span className="arrow">→</span>
            </a>
          </div>
          <div className="feature-images">
            <img src={contacts} alt="Contacts and card screen" className="main-screen" />
          </div>
        </div>
      </div>
    </section>
  );

  export default TransferFeatures;
  
