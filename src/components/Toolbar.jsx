import './toolbar.css';
import SearchBar from './SearchBar';
import SortingButton from './SortingButton';
import FilterDropdown from './FilterDropdown';

function Toolbar({ handleChange, handleClick, handleSearch, sortingOrder }) {
    return (
        <div className='toolbar'>
            <SearchBar handleSearch={handleSearch} />
            <div className='container_select'>
                <SortingButton
                    handleClick={handleClick}
                    sortingOrder={sortingOrder}
                />
                <FilterDropdown handleChange={handleChange} />
            </div>
        </div>
    );
}

export default Toolbar;
