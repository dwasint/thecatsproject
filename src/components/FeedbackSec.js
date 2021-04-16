import React from 'react';
import '../App.css';
import { Button } from './Button';
import './FeedbackSec.css';



function FeedbackSec() {
    return (
        <div className='feed-container'>
            <video src="/videos/feedback.mp4"  autoPlay />
            <div className="feed-btns">
            </div>
        </div>
    )
}

export default FeedbackSec;
