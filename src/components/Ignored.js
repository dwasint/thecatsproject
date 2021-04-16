import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Ignored.css';



function Ignored() {
    return (
        <div className='ignore-container'>
            <video src="/videos/ignore.mp4"  autoPlay loop muted />
            <h1>You Ignore the Cat</h1>  
            <p></p>
            <div className="ignore-btns">
            </div>
        </div>
    )
}

export default Ignored
