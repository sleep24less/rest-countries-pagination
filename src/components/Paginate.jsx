import React from 'react';
import './paginate.css';

function Paginate({
    countriesPerPage,
    totalCountries,
    paginate,
    currentPage,
    previousPage,
    nextPage,
    firstPage,
    lastPage,
}) {
    // Store all pages in pageNumbers
    const pageNumbers = [];
    const numberOfPages = Math.ceil(totalCountries / countriesPerPage);
    for (let i = 1; i <= numberOfPages; i++) {
        pageNumbers.push(i);
    }
    // Display only 8 pages at the time using currentPage as anchor
    const start = currentPage <= 4 ? 0 : currentPage - 4;
    const end = currentPage <= 4 ? 8 : currentPage + 4;
    const pagesToDisplay = pageNumbers.slice(start, end);
    console.log(pagesToDisplay);

    return (
        <div className='pagination_container'>
            <ul className='pagination'>
                <li className='page_btn' onClick={firstPage}>
                    &lt;&lt;
                </li>
                <li className='page_btn left_side' onClick={previousPage}>
                    &lt;
                </li>
                {pagesToDisplay.map((number) => {
                    return (
                        <li
                            key={number}
                            className={`page_number ${
                                number === currentPage ? 'selected' : ''
                            }`}
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </li>
                    );
                })}
                <li className='page_btn right_side' onClick={nextPage}>
                    &gt;
                </li>
                <li className='page_btn' onClick={lastPage}>
                    &gt;&gt;
                </li>
            </ul>
        </div>
    );
}

export default Paginate;
