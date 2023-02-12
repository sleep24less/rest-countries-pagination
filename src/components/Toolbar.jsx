import React from 'react';
import './toolbar.css';
import SearchBar from './SearchBar';
import SortingButton from './SortingButton';
import FilterDropdown from './FilterDropdown';

function Filter({ handleChange, handleClick, handleSearch }) {
    return (
        <div className='toolbar'>
            <SearchBar handleSearch={handleSearch} />
            <div className='container_select'>
                <SortingButton handleClick={handleClick} />
                <FilterDropdown handleChange={handleChange} />
            </div>
        </div>
    );
}

export default Filter;
