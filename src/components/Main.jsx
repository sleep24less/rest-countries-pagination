import Country from './Country';
import Filter from './Filter';
import '../main.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function Main() {
  // Storing countries for display
  const [countries, setCountries] = useState([]);
  // Storing unfiltered countries for use in sorting function
  const [unfilteredCountries, setUnfilteredCountries] = useState([]);
  // Added numericCode value for key attribute in country component//
  const url =
    'https://restcountries.com/v2/all?fields=name,region,area,numericCode,flag';
  // Function expression for fetching API data
  const getCountriesData = async () => {
    const data = await Axios.get(url).then((res) => res.data);
    setCountries(data);
    setUnfilteredCountries(data);
    console.log(data);
  };
  // load API data onload once
  useEffect(() => {
    getCountriesData();
  }, []);

  // Handles sorting functionality
  const handleFilter = (e) => {
    const { value } = e.target;
    let countriesArray = [];
    const lithuania = unfilteredCountries.find(
      (country) => country.name === 'Lithuania'
    );

    if (value === 'Alphabet') {
      countriesArray = unfilteredCountries.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setCountries(countriesArray);
    } else if (value === 'Reverse') {
      countriesArray = [...unfilteredCountries].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setCountries(countriesArray);
    } else if (value === 'Africa') {
      countriesArray = unfilteredCountries.filter((country) => {
        if (country.region === 'Africa') {
          return country;
        }
      });
      setCountries(countriesArray);
    } else if (value === 'Americas') {
      countriesArray = unfilteredCountries.filter((country) => {
        if (country.region === 'Americas') {
          return country;
        }
      });
      setCountries(countriesArray);
    } else if (value === 'Asia') {
      countriesArray = unfilteredCountries.filter((country) => {
        if (country.region === 'Asia') {
          return country;
        }
      });
      setCountries(countriesArray);
    } else if (value === 'Europe') {
      countriesArray = unfilteredCountries.filter((country) => {
        if (country.region === 'Europe') {
          return country;
        }
      });
      setCountries(countriesArray);
    } else if (value === 'Oceania') {
      countriesArray = unfilteredCountries.filter((country) => {
        if (country.region === 'Oceania') {
          return country;
        }
      });
      setCountries(countriesArray);
    } else if (value === 'Smaller') {
      countriesArray = unfilteredCountries.filter((country) => {
        if (country.area < lithuania.area) return country;
      });
      setCountries(countriesArray);
    } else if (value === 'Bigger') {
      countriesArray = unfilteredCountries.filter((country) => {
        if (country.area > lithuania.area) return country;
      });
      setCountries(countriesArray);
    }
  };

  return (
    <>
      <Filter handleFilter={handleFilter} />
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
