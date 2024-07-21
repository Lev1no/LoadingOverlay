// Timer.js
import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(15 * 60); // 15 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  useEffect(() => {
    if (time <= 0) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  }, [time]);

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(15 * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };
  // Change to scale with custom time
  const progressPercentage = ((15 * 60 - time) / (15 * 60)) * 100;

  return (
    <div className="timer-container">
      <div className="timer-display">{formatTime(time)}</div>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="controls">
        <button onClick={handlePlayPause}>{isRunning ? 'Pause' : 'Play'}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;

