import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Wanna Submit Feedback?
        </p>
        <p className='footer-subscription-text'>
          Do so Below
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='feedback'
              type='feedback'
              placeholder='Enter Feedback Here'
            />
            <Button buttonStyle='btn--outline' buttonLink='/feedback'>Submit</Button>
          </form>
        </div>
        </section>
    </div>
  );
}

export default Footer;