import { useState, useEffect } from 'react';
import {
    getCountries,
    sortOrder,
    filterCountries,
} from '../utils/countriesClient';
import Country from './Country';
import Toolbar from './Toolbar';
import Paginate from './Paginate';
import LoadingSpinner from './LoadingSpinner';
import './content.css';

function Content() {
    const [countries, setCountries] = useState([]);
    const [unfilteredCountries, setUnfilteredCountries] = useState([]);
    const [initialSearchCountries, setInitialSearchCountries] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [sortingOrder, setSortingOrder] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(8);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [paginatedCountries, setPaginatedCountries] = useState([]);

    const getCountriesData = () => {
        setLoading(true);
        getCountries()
            .then((data) => {
                setCountries(data);
                setUnfilteredCountries(data);
                setInitialSearchCountries(data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                setError(err);
            });
    };

    useEffect(() => {
        getCountriesData();
    }, []);

    // SORT / FILTER / SEARCH
    const handleFilter = (e) => {
        const { value } = e.target;
        let countriesArray = filterCountries(value, unfilteredCountries);
        setCountries(countriesArray);
        setInitialSearchCountries(countriesArray);
    };

    const onClickSort = () => {
        let countriesArray = sortOrder(sortingOrder, countries);
        setCountries(countriesArray);
        setInitialSearchCountries(countriesArray);
        setSortingOrder((prevSortingOrder) => !prevSortingOrder);
    };

    const handleSearch = (e) => {
        const { value } = e.target;
        if (!value) return setCountries(initialSearchCountries);
        const filteredCountries = countries.filter((country) =>
            country.name.toLowerCase().includes(value.toLowerCase())
        );
        setCountries(filteredCountries);
    };

    // PAGINATION
    useEffect(() => {
        const indexOfLastCountry = currentPage * countriesPerPage;
        const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
        setPaginatedCountries(
            countries.slice(indexOfFirstCountry, indexOfLastCountry)
        );
    }, [countries, currentPage, countriesPerPage]);

    useEffect(() => {
        const numberOfPages = Math.ceil(countries.length / countriesPerPage);
        setNumberOfPages(numberOfPages);
        setCurrentPage(1);
    }, [countries]);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleFirstPageClick = () => {
        setCurrentPage(1);
    };
    const handleLastPageClick = () => {
        setCurrentPage(numberOfPages);
    };
    const handlePreviousPageClick = () => {
        if (currentPage !== 1) {
            setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
        }
    };
    const handleNextPageClick = () => {
        if (currentPage !== numberOfPages) {
            setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
        }
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
                {paginatedCountries.map((country) => {
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
