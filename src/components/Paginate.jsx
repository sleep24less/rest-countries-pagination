import React, { useEffect, useState } from 'react';
import './paginate.css';

const getNumberOfPages = (totalCountries, countriesPerPage) => {
    const pageNumbers = [];
    const numberOfPages = Math.ceil(totalCountries / countriesPerPage);
    for (let i = 1; i <= numberOfPages; i++) {
        pageNumbers.push(i);
    }
    return pageNumbers;
};

function Paginate({
    countriesPerPage,
    totalCountries,
    handlePageClick,
    currentPage,
    handlePreviousPageClick,
    handleNextPageClick,
    handleFirstPageClick,
    handleLastPageClick,
}) {
    const [pagesToDisplay, setPagesToDisplay] = useState([]);

    useEffect(() => {
        const start = currentPage <= 4 ? 0 : currentPage - 4;
        const end = currentPage <= 4 ? 7 : currentPage + 3;
        setPagesToDisplay(
            getNumberOfPages(totalCountries, countriesPerPage).slice(start, end)
        );
    }, [currentPage, countriesPerPage, totalCountries]);

    return (
        <div className='pagination_container'>
            <button
                type='button'
                className='page_btn'
                onClick={handleFirstPageClick}
            >
                &lt;&lt;
            </button>
            <button
                type='button'
                className='page_btn left_side'
                onClick={handlePreviousPageClick}
            >
                &lt;
            </button>
            <ul className='pagination'>
                {pagesToDisplay.map((number) => {
                    return (
                        <li
                            key={number}
                            className={`page_number ${
                                number === currentPage ? 'selected' : ''
                            }`}
                            onClick={() => handlePageClick(number)}
                        >
                            {number}
                        </li>
                    );
                })}
            </ul>
            <button
                type='button'
                className='page_btn right_side'
                onClick={handleNextPageClick}
            >
                &gt;
            </button>
            <button
                type='button'
                className='page_btn'
                onClick={handleLastPageClick}
            >
                &gt;&gt;
            </button>
        </div>
    );
}

export default Paginate;
