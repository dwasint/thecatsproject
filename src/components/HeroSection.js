import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="./videos/main.mov"  autoPlay loop muted />
            <h1> I WANT MILK</h1>  
            <p>Do you have some?</p>
            <div className="hero-btns">
               <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    buttonLink='/thecatsproject/milk'
                >
                   I HAVE MILK
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    buttonLink=''
                >
                   SEX <i className='far fa-play-circle'/>
                </Button>

            </div>
        </div>
    )
}

export default HeroSection
