import Country from './Country';
import Filter from './Filter';
import '../main.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function Main() {
  // Storing country data in state
  const [countries, setCountries] = useState([]);
  // Added numericCode value in the API address for the key attribute in country components //
  const url =
    'https://restcountries.com/v2/all?fields=name,region,area,numericCode,flag';
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
    <>
      <Filter fetchData={getCountriesData} />
      <main className='main'>
        {countries.map((country) => {
          const { name, region, area, numericCode, flag } = country;
          return (
            <Country
              key={numericCode}
              name={name}
              region={region}
              area={area}
              flag={flag}
            />
          );
        })}
      </main>
    </>
  );
}

export default Main;
