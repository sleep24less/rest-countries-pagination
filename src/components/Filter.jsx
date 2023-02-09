import React from 'react';
import '../filter.css';

function Filter(props) {
  // Handles search-bar functionality
  function handleSearch(e) {
    const { value } = e.target;
    // Get countries from DOM
    const countryName = document.querySelectorAll('.country_name');
    countryName.forEach((name) => {
      // Compare each country name to search-bar input value
      if (name.textContent.toLowerCase().includes(value.toLowerCase())) {
        name.parentElement.parentElement.style.display = 'flex';
      } else {
        name.parentElement.parentElement.style.display = 'none';
      }
    });
  }

  return (
    <div className='filter'>
      <form className='form'>
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search for a country...'
          onChange={handleSearch}
        ></input>
        <div className='container_select'>
          <select name='select' id='select' className='select'>
            <option
              value='Filter by region'
              disabled='disabled'
              selected='true'
            >
              Filter by...
            </option>
            <option value='All'>A-Z</option>
            <option value='Reverse'>Z-A</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filter;
