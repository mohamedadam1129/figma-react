import React from 'react'
import appscreenshot from '../src/assets/app screenshot.svg'; 
import iconeasy from '../src/assets/icon easy payments.svg';
import icondata from '../src/assets/icon data security.svg'; 
import inconcost from '../src/assets/icon cost.svg'; 
import iconsupport from '../src/assets/icon support.svg'; 
import iconcashback from '../src/assets/icon cashback.svg'; 
import icontop from '../src/assets/icon top.svg'; 
import screen1 from '../src/assets/screen 1.svg'; 
import screen2 from '../src/assets/screen 2.svg'; 
import screen3 from '../src/assets/screen 3.svg'; 
import appscreen from '../src/assets/app screen.svg';
import contacts from '../src/assets/contacts.svg';  
export default function appfeatures() {
  return (
    <div className='features-content'>
        <div className='feature-image'>
         <img src={appscreenshot} alt='App screenshot'></img>
        </div>
        <div className='feature-text'>
            <h2>App Features</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores neque, impedit cupiditate, dolor quaerat maxime dolorem provident voluptatibus cum sequi magnam tenetur ducimus voluptate officiis praesentium unde sit corrupti.</p>
        </div>
        <div className='feature-grid'>
            <div className='feature-item'>
                <img src= {iconeasy} alt='Easy payments'></img>
                <h3>Easy payments</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim assumenda vel, officia voluptatibus omnis voluptas reprehenderit a quidem animi magni deserunt mollitia excepturi nobis adipisci. Iure provident consequuntur ratione.</p>
            </div>
        </div>
        <div className='feature-item'>
            <img src= {icondata} alt='Data security'></img>
            <h3>Data security</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, nisi sapiente. Labore, sequi sint eligendi placeat, error ut nobis expedita esse mollitia ab rem quisquam veritatis doloremque cupiditate iure accusantium?</p>
        </div>
        <div className='feature-item'>
         <img src = {inconcost} alt='cost statistics'></img>
         <h3>Cost statistics</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero totam autem beatae nemo officiis, minus deleniti est iusto ipsum ex nulla optio impedit. Aut qui dignissimos iure quos fuga. Vel.</p>
        </div>
        <div className='feature-item'>
            <img src={iconsupport} alt='support 24/7'></img>
            <h3>Support 24/7</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, hic a eos molestiae dicta provident quibusdam eum nostrum odio qui, id fugiat ducimus esse, excepturi sed perspiciatis aspernatur quam. In!</p>
        </div>
        <div className='feature-item'>
            <img src= {iconcashback} alt='regular cashback'></img>
            <h3>Regular cashback</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima incidunt repellat suscipit. Consequatur neque adipisci dolores dicta placeat ut doloremque quod quam. Nulla aliquam nostrum eligendi minus aliquid impedit quo!</p>
        </div>
        <div className='feature-item'>
            <img src= {icontop} alt='top standards'></img>
            <h3>Top standards</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, explicabo magni deleniti, eum nobis expedita suscipit quae voluptates libero repellendus laudantium quo numquam et natus. Quod dolores voluptatibus quas porro?</p>
        </div>
        <div>
         <div className='how-it-works'>
            <h2>How it works </h2>
         </div>
         <div className='app-showcase'>
            <img src={screen1} alt='budget screen'></img>
         </div>
         <div className='phone-screen main-screen'>
            <img src={screen2} alt='Transactions screen'></img>
            <h3>Latest transaction history</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempora vel aliquam earum, voluptatem blanditiis similique veritatis cupiditate laudantium, aspernatur, voluptatibus soluta eligendi doloribus accusantium possimus perspiciatis consequatur quidem tempore!</p>
         </div>
         <div className='phone-screen'>
            <img src={screen3} alt='Transfer screen'></img>
         </div>
        </div>
        <div className='appfeatures'>
            <div className='feature-row'>
                <div className='feature-text'>
                    <h2>Make your money transfer simple and clear</h2>
                    <ul>
                        <li>Banking transactions are free for you</li>
                        <li>No monthly cash commission</li>
                        <li>Manage payments and transactions online</li>
                    </ul>
                    <a href='#' className='learn-more'>Learn more <span className='Main-screen'></span></a>
                </div>
                <div className='feature-images'>
                    <img src={appscreen} alt='App screen' className='main-screen'></img>
                </div>
                <div className='feature-row reverse'>
                    <h2>Receive payment from international bank details </h2>
                    <ul>
                        <li>Manage your payments online</li>
                        <li>A element viveira et maecenas sem praesium etiam nector faucibus </li>
                    </ul>
                    <a href='#' className='learn-more'>Learn more <span className='arrow'></span></a>
                </div>
                <div className='feature-images'>
                    <img src={contacts} alt='contacts and cards' className='main-screen'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

