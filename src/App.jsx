import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="country-container">
      {countries.map((country) => (
        <div className="country-card" key={country.cca3}>
          <img src={country.flags.png} alt={country.name.common} />
          <h3>{country.name.common}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
