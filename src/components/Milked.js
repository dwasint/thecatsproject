import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Milked.css';



function Milked() {
    return (
        <div className='ignore-container'>
            <video src="./videos/milk.mp4"  autoPlay loop muted />
            <h1>You give the cat Milk</h1>  
            <p></p>
            <div className="ignore-btns">
            </div>
        </div>
    )
}

export default Milked
