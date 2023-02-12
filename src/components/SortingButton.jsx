import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowDownAZ,
    faArrowDownZA,
} from '@fortawesome/free-solid-svg-icons';
import './sortingbutton.css';

function SortingButton({ handleClick, sortingOrder }) {
    return (
        <button type='button' className='sorting_button' onClick={handleClick}>
            {sortingOrder === 'Alphabet' ? (
                <FontAwesomeIcon icon={faArrowDownAZ} />
            ) : (
                <FontAwesomeIcon icon={faArrowDownZA} />
            )}
        </button>
    );
}

export default SortingButton;
