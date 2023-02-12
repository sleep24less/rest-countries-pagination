function SearchBar({ handleSearch }) {
    return (
        <input
            type='search'
            name='search'
            placeholder='Search for a country...'
            onChange={handleSearch}
        />
    );
}

export default SearchBar;
