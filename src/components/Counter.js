import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
  const [year, setYear] = useState(2021);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleCounter = () => {
    const newYear = new Date(year, 0, 1, 0, 0, 0, 0);
    const currentDate = new Date();
    const totalSeconds = (newYear - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    if (newYear <= currentDate) {
      setYear((prevValue) => prevValue + 1);
    } else {
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }
  };

  useEffect(() => {
    const indexInterval = setInterval(handleCounter, 1000);
    return () => clearInterval(indexInterval);
  }, []);

  return (
    <ul className="counter-list">
      <li className="counter-list-item">
        <p>{days === "" ? `0${days}` : days}</p>
        <p>days</p>
      </li>
      <li className="counter-list-item">
        <p>{hours <= 9 ? `0${hours}` : hours}</p>
        <p>hours</p>
      </li>
      <li className="counter-list-item">
        <p>{minutes <= 9 ? `0${minutes}` : minutes}</p>
        <p>minutes</p>
      </li>
      <li className="counter-list-item">
        <p>{seconds <= 9 ? `0${seconds}` : seconds}</p>
        <p>seconds</p>
      </li>
    </ul>
  );
};

export default Counter;
