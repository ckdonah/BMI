// src/components/BMICalculator.js
import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      determineMessage(bmiValue);
    } else {
      alert('Please enter positive values for both weight and height.');
    }
  };

  const determineMessage = (bmi) => {
    if (bmi < 18.5) {
      setMessage('Underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMessage('Normal weight');
    } else if (bmi >= 25 && bmi < 29.9) {
      setMessage('Overweight');
    } else {
      setMessage('Obesity');
    }
  };

  return (
    <div className="bmi-container">
      <h1>BMI Calculator</h1>
      <div className="input-container">
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <h3>{message}</h3>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
