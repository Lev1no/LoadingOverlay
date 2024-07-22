import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(15 * 60); // 15 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [customMinutes, setCustomMinutes] = useState(15);
  const [customSeconds, setCustomSeconds] = useState(0);
  const [totalTime, setTotalTime] = useState(15 * 60); // Track the total time set by the user
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
    const newTotalTime = customMinutes * 60 + customSeconds;
    setTime(newTotalTime);
    setTotalTime(newTotalTime); // Reset the total time as well
  };

  const handleAdd30Seconds = () => {
    setTime(prevTime => prevTime + 30);
    setTotalTime(prevTotalTime => prevTotalTime + 30); // Update total time as well
  };

  const handleCustomMinutesChange = (e) => {
    const newMinutes = parseInt(e.target.value, 10);
    setCustomMinutes(newMinutes);
    const newTotalTime = newMinutes * 60 + customSeconds;
    setTime(newTotalTime);
    setTotalTime(newTotalTime); // Update total time as well
  };

  const handleCustomSecondsChange = (e) => {
    const newSeconds = parseInt(e.target.value, 10);
    setCustomSeconds(newSeconds);
    const newTotalTime = customMinutes * 60 + newSeconds;
    setTime(newTotalTime);
    setTotalTime(newTotalTime); // Update total time as well
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercentage = ((totalTime - time) / totalTime) * 100;

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
        <button onClick={handleAdd30Seconds}>+30s</button>
        <div className="time-inputs">
          <input 
            type="number" 
            value={customMinutes} 
            onChange={handleCustomMinutesChange} 
            min="0"
            disabled={isRunning}
            placeholder="Minutes"
          />
          <span>:</span>
          <input 
            type="number" 
            value={customSeconds} 
            onChange={handleCustomSecondsChange} 
            min="0" 
            max="59"
            disabled={isRunning}
            placeholder="Seconds"
          />
        </div>
      </div>
    </div>
  );
};

export default Timer;

