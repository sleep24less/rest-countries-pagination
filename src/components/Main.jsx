import { useState, useEffect } from 'react';
import Axios from 'axios';

function Main() {
  // Storing country data in state
  const [countries, setCountries] = useState([]);
  // Added numericCode value in the API address for the key attribute in country components //
  const url =
    'https://restcountries.com/v2/all?fields=name,region,area,numericCode';
  // Function expression for fetching API data
  const getCountriesData = async () => {
    const data = await Axios.get(url).then((res) => res.data);
    setCountries(data);
    console.log(data);
  };
  // load API data onload once
  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <div className='container'>
      <div className='main'>
        {countries.map((country) => {
          return (
            <div>
              <h1>{country.name}</h1>
              <p>{country.region}</p>
              <p>{country.area} km2</p>
              <p>{country.numericCode}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
