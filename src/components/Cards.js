import React from 'react'
import './Cards.css'
import CardItem from './CardItem'


function Cards() {
    return (
        <div className='cards'>
           <h1>Check out these EPIC cat photos</h1> 
           <div className ='cards__container'>
               <div className='cards__wrapper'>
                   <ul className='cards__items'>
                   <CardItem 
                       src='images/cat.png'
                       text='Little man working'
                       label='Working Cat'
                       path='/'
                       />
                      <CardItem 
                       src='images/cat2.png'
                       text='Look at him whore for attention'
                       label='Ahegao Cat'
                       path='/'
                       />
                   </ul>
               </div>
           </div>
        </div>
    )
}

export default Cards
