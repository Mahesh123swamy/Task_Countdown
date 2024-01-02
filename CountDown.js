import React, { useState, useEffect } from 'react';
import './countdown.css'; // Import the CSS file

const SalesCountdownTimer = () => {
  const calculateTimeLeft = () => {
    const saleEndDate = new Date("2024-01-15T23:59:59"); // Set your sale end date and time as you needed 
    const difference = saleEndDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className="sales-countdown-timer">
        
      <h1 className='heading'> Myntra Exclusive Sale Ends Soon!</h1>
      <div className="timer-display">
        
          <h1>{formatTime(timeLeft.days)}days</h1> 
        
        
          <h1>{formatTime(timeLeft.hours)}hours</h1> 
       
        
          <h1>{formatTime(timeLeft.minutes)}minutes</h1> 
       
        
          <h1>{formatTime(timeLeft.seconds)}seconds</h1> 
       
      </div>
      <br></br>
      <br></br>
      <br></br>
      <p>Hurry up and grab the exclusive offers before they expire!</p>
      <div className='images'></div>
      <img src='https://t4.ftcdn.net/jpg/03/13/59/79/360_F_313597923_bsXXA0mIh3QERYwiZGq5M0CAFlgDRpas.jpg'></img>
      <img   src='https://brifly-media.s3.ap-south-1.amazonaws.com/s3fs-public/styles/large/public/article/2021-01/e-myntra_0.png?itok=wnxeFetB'></img>
    </div>
  );
};

export default SalesCountdownTimer;
