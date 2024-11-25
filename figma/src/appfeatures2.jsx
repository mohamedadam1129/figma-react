import React from 'react'
import apppscreen from '../src/assets/app screen.svg'; 
import contacts from '../src/assets/contacts.svg'; 
export default function appfeatures2() {
  return (
    <div>
        <div className='app-features2'>
            <div className='feature-text'>
                <h2>Make your money transfer simple and clear</h2>
                <ul>
                    <li>Banking transactions are free for you </li>
                    <li>No montlhy cash commission</li>
                    <li>Manage payments and transactions online</li>
                </ul>
                <a href='#' className='learn-more'>Learn more <span className='arrow'></span> </a>
            </div>
        </div>
        <div className='feature-images'>
            <img src={apppscreen} alt='App screen' className='main-screen'></img>
        </div>
        <div className='feature-row reverse'>
            <div className='feature-text2'>
                <h2>Recevie payment from international bank details</h2>
                <ul>
                    <li>Manage your payments online</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nobis adipisci cupiditate quibusdam beatae saepe rem exercitationem pariatur esse. Eius, animi doloribus culpa qui quae saepe voluptatem recusandae natus incidunt.</li>
                </ul>
                <a href='#' className='learn-more'>Learn more <span className='arrow'></span></a>
            </div>
            <div className='feature-images'>
                <img src= {contacts} alt='contacts and cardscreen' className='main screen2'></img>
            </div>
        </div>
    </div>
  )
}
