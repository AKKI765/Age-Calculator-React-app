import React, { useState } from 'react';
import baby from './images/baby.jpg';
import Teen from './images/Teen.jpg';
import adultav from './images/adultav.jpg';
import man from './images/man.jpg';
import old from './images/Old Man.jpg';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthdateTimestamp = Date.parse(birthdate);
    const now = Date.now();
    const ageInMilliseconds = now - birthdateTimestamp;
    const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000; // accounting for leap years
    const calculatedAge = Math.floor(ageInMilliseconds / millisecondsPerYear);
    setAge(calculatedAge);
  };

  const getAvatarImage = () => {
    if (age <= 5) {
      return <img src={baby} alt="Baby" />;
    } else if (6 <= age && age <= 18) {
      return <img src={Teen} alt="Teen" />;
    }
    else if (19 <= age && age <= 40) {
        return <img src={adultav} alt="Adult" />;
      }

      else if (41 <= age && age <= 60) {
        return <img src={man} alt="Senior" />;
      }
    // Add more conditions for different age ranges and avatar images if desired
    return <img src={old} alt="Old" />;
  };

  return (
    <div className="AgeCal">
      <h1>Age Calculator</h1>
      <h2>Enter Your Date Of Birth</h2>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <br />
      <button onClick={calculateAge}>Calculate</button>
      {age && (
        <div>
          <p>You are {age} years old</p>
          {getAvatarImage()}
        </div>   
      )}
    </div>

    
  );
}

export default AgeCalculator;
