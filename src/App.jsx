import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file for styling

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img src={country.flags?.png} alt={country.name?.common} width="200" height="120" />
      <h3>{country.name?.common}</h3>
    </div>
  );
}

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <h1>Country Flags</h1>
      <div className="country-list">
        {countries.map(country => (
          <CountryCard key={country?.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
