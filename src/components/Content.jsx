import { useState, useEffect } from 'react';
import Axios from 'axios';
import Country from './Country';
import Toolbar from './Toolbar';
import Paginate from './Paginate';
import LoadingSpinner from './LoadingSpinner';
import './content.css';

function Content() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [unfilteredCountries, setUnfilteredCountries] = useState([]);
    const [initialSearchCountries, setInitialSearchCountries] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(8);

    const [sortingOrder, setSortingOrder] = useState('Alphabet');

    const url =
        'https://restcountries.com/v2/all?fields=name,region,area,numericCode,flag';

    // Function expression for fetching API data
    const getCountriesData = () => {
        setLoading(true);
        Axios.get(url)
            .then((res) => {
                setCountries(res.data);
                setUnfilteredCountries(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                setError(err);
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
        if (value === 'All') {
            countriesArray = unfilteredCountries;
        }
        // Region filtering
        else if (value === 'Africa') {
            countriesArray = unfilteredCountries.filter((country) => {
                if (country.region === 'Africa') {
                    return country;
                }
            });
        } else if (value === 'Americas') {
            countriesArray = unfilteredCountries.filter((country) => {
                if (country.region === 'Americas') {
                    return country;
                }
            });
        } else if (value === 'Asia') {
            countriesArray = unfilteredCountries.filter((country) => {
                if (country.region === 'Asia') {
                    return country;
                }
            });
        } else if (value === 'Europe') {
            countriesArray = unfilteredCountries.filter((country) => {
                if (country.region === 'Europe') {
                    return country;
                }
            });
        } else if (value === 'Oceania') {
            countriesArray = unfilteredCountries.filter((country) => {
                if (country.region === 'Oceania') {
                    return country;
                }
            });
        }
        // Area filtering
        else if (value === 'Smaller') {
            countriesArray = unfilteredCountries.filter((country) => {
                if (country.area < lithuania.area) return country;
            });
        } else if (value === 'Bigger') {
            countriesArray = unfilteredCountries.filter((country) => {
                if (country.area > lithuania.area) return country;
            });
        }
        setCountries(countriesArray);
        setInitialSearchCountries(countriesArray);
    };

    const onClickSort = () => {
        let countriesArray = [];
        if (sortingOrder === 'Alphabet') {
            countriesArray = [...countries].sort((a, b) =>
                b.name.localeCompare(a.name)
            );
            setCountries(countriesArray);
            setInitialSearchCountries(countriesArray);
            setSortingOrder('Reverse');
        } else if (sortingOrder === 'Reverse') {
            countriesArray = countries.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
            setCountries(countriesArray);
            setInitialSearchCountries(countriesArray);
            setSortingOrder('Alphabet');
        }
    };

    const handleSearch = (e) => {
        const { value } = e.target;
        if (!value) return setCountries(initialSearchCountries);
        const filteredCountries = countries.filter((country) =>
            country.name.toLowerCase().includes(value.toLowerCase())
        );
        setCountries(filteredCountries);
    };

    // Pagination variables for displaying
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(
        indexOfFirstCountry,
        indexOfLastCountry
    );
    // Function that sets the current page for the Pagination component to use
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleFirstPageClick = () => {
        setCurrentPage(1);
    };
    const handleLastPageClick = () => {
        const numberOfPages = Math.ceil(
            unfilteredCountries.length / countriesPerPage
        );
        setCurrentPage(numberOfPages);
    };
    const handlePreviousPageClick = () => {
        if (currentPage !== 1) {
            setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
        }
    };

    const handleNextPageClick = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    };

    return (
        <>
            <Toolbar
                handleChange={handleFilter}
                handleClick={onClickSort}
                handleSearch={handleSearch}
                sortingOrder={sortingOrder}
            />
            <main className='content'>
                {error && <h1>{error.message}</h1>}
                {loading && <LoadingSpinner />}
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
            </main>
            <Paginate
                countriesPerPage={countriesPerPage}
                totalCountries={countries.length}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
                handleFirstPageClick={handleFirstPageClick}
                handleLastPageClick={handleLastPageClick}
                handlePreviousPageClick={handlePreviousPageClick}
                handleNextPageClick={handleNextPageClick}
            />
        </>
    );
}

export default Content;
