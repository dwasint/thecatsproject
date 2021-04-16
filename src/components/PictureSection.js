import React from 'react';
import '../App.css';
import { Button } from './Button';
import './PictureSection.css';



function PictureSection() {
    return (
        <div className='pic-container'>
            <video src="./videos/picture.mp4"  autoPlay loop muted />
            <h1> Pictures</h1>  
            <p>Browse Em</p>
            <div className="pic-btns">

            </div>
        </div>
    )
}

export default PictureSection
