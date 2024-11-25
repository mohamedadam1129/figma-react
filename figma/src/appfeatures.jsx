import React from 'react'
import appscreenshot from '../src/assets/app screenshot.svg';
import iconeasy from '../src/assets/icon easy payments.svg';
import icondata from '../src7assets/icon data security.svg';
import iconcost from '../src/assets/icon cost.svg'; 
import iconsupport from '../src/assets/icon support.svg'; 
import iconcashback from '../src/assets/icon cashback.svg'; 
import icontop from '../src/assets/icon top.svg'; 
function appfeatures2() {
  return (
    <div className='features-content'>
        <div className='feature-image'>
         <img src={appscreenshot} alt='App screenshot'></img>
        </div>
        <div className='feature-text'>
            <h2>App Features</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores neque, impedit cupiditate, dolor quaerat maxime dolorem provident voluptatibus cum sequi magnam tenetur ducimus voluptate officiis praesentium unde sit corrupti.</p>
        </div>
        <div className='feature-gird'>
            <div className='feature-item'>
                <img src= {iconeasy} alt='Easy payments'></img>
                <h3>Easy payments</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim assumenda vel, officia voluptatibus omnis voluptas reprehenderit a quidem animi magni deserunt mollitia excepturi nobis adipisci. Iure provident consequuntur ratione.</p>
            </div>
        </div>
        <div className='feature-item2'>
            <img src= {icondata} alt='Data security'></img>
            <h3>Data security</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, nisi sapiente. Labore, sequi sint eligendi placeat, error ut nobis expedita esse mollitia ab rem quisquam veritatis doloremque cupiditate iure accusantium?</p>
        </div>
        <div className='feature-iteam3'>
         <img src = {iconcost} alt='cost statistics'></img>
         <h3>Cost statistics</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero totam autem beatae nemo officiis, minus deleniti est iusto ipsum ex nulla optio impedit. Aut qui dignissimos iure quos fuga. Vel.</p>
        </div>
        <div className='feature-iteam4'>
            <img src={iconsupport} alt='support 24/7'></img>
            <h3>Support 24/7</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, hic a eos molestiae dicta provident quibusdam eum nostrum odio qui, id fugiat ducimus esse, excepturi sed perspiciatis aspernatur quam. In!</p>
        </div>
        <div className='feature-iteam5'>
            <img src= {iconcashback} alt='regular cashback'></img>
            <h3>Regular cashback</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima incidunt repellat suscipit. Consequatur neque adipisci dolores dicta placeat ut doloremque quod quam. Nulla aliquam nostrum eligendi minus aliquid impedit quo!</p>
        </div>
        <div className='feature-iteam6'>
            <img src= {icontop} alt='top standards'></img>
            <h3>Top standards</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, explicabo magni deleniti, eum nobis expedita suscipit quae voluptates libero repellendus laudantium quo numquam et natus. Quod dolores voluptatibus quas porro?</p>
        </div>
    </div>
  )
}

export default appfeatures2