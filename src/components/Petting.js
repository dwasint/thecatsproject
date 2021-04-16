import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Petting.css';



function Petting() {
    return (
        <div className='petting-container'>
            <video src="/videos/pet.mp4"  autoPlay loop muted />
            <h1>You Pet The Cat</h1>  
            <p></p>
            <div className="petting-btns">
            </div>
        </div>
    )
}

export default Petting
