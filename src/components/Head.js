import React from 'react';
import './styles.css';
import video8g from '../assets/videodemo.mp4';

function Head(){
    return(
        <div className='main'>
            <div className='overlay' />
             <video src={video8g} autoPlay loop muted />
              <div className='content'>
                <h1 className='text-wel'>WELCOME TO <span className='text-name'>Fly Food</span></h1>
                <p className='text-content'>We are here to serve you the best food in the world.</p>
              </div>
        </div>
    )
}
export default Head;