import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file for styling

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img src={country.flags.png} alt={country.name.common} width="200" height="120" />
      <h3>{country.name.common}</h3>
    </div>
  );
}

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Country Flags</h1>
      <div className="country-list">
        {countries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
