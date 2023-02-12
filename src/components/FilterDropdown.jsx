import React from 'react';

function FilterDropdown({ handleChange }) {
    return (
        <select
            name='select'
            className='select'
            onChange={handleChange}
            defaultValue='Filter by region'
        >
            <option value='Filter by region' disabled hidden>
                Filter by...
            </option>
            <optgroup label='Region'>
                <option value='All'>All</option>
                <option value='Africa'>Africa</option>
                <option value='Americas'>Americas</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </optgroup>
            <optgroup label='Area'>
                <option value='Smaller'>Smaller than LT</option>
                <option value='Bigger'>Bigger than LT</option>
            </optgroup>
        </select>
    );
}

export default FilterDropdown;
