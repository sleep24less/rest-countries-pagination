import Country from './Country';
import Filter from './Filter';
import Paginate from './Paginate';
import LoadingSpinner from './LoadingSpinner';
import '../main.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function Main() {
    // Storing countries for display
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // Storing unfiltered countries for use in sorting function
    const [unfilteredCountries, setUnfilteredCountries] = useState([]);
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(8);
    // Added numericCode value for key attribute in country component
    const url =
        'https://restcountries.com/v2/all?fields=name,region,area,numericCode,flag';

    // Function expression for fetching API data
    const getCountriesData = async () => {
        setLoading(true);
        await Axios.get(url)
            .then((res) => {
                setCountries(res.data);
                setUnfilteredCountries(res.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
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

        // Alphabetical sorting
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
        }
        // Region filtering
        else if (value === 'Africa') {
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
        }
        // Area filtering
        else if (value === 'Smaller') {
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

    // Pagination variables for displaying
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(
        indexOfFirstCountry,
        indexOfLastCountry
    );
    // Function that sets the current page for the Pagination component to use
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const firstPage = () => {
        setCurrentPage(1);
    };
    const lastPage = () => {
        const numberOfPages = Math.ceil(
            unfilteredCountries.length / countriesPerPage
        );
        setCurrentPage(numberOfPages);
    };
    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== 1) {
            setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
        }
    };

    return (
        <>
            <Filter handleFilter={handleFilter} />
            <main className='main'>
                {/* Display error from API */}
                {error && <h1 className='error'>{error.message}</h1>}
                {/* Display loading while fetching */}
                {loading && <LoadingSpinner />}
                {/* Display countries */}
                {currentCountries.map((country) => {
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
                <Paginate
                    countriesPerPage={countriesPerPage}
                    totalCountries={countries.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    firstPage={firstPage}
                    lastPage={lastPage}
                    previousPage={previousPage}
                    nextPage={nextPage}
                />
            </main>
        </>
    );
}

export default Main;
