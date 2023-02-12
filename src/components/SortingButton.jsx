import React from 'react';

function SortingButton({ handleClick }) {
    return (
        <button className='sorting_button' onClick={handleClick}>
            A-Z
        </button>
    );
}

export default SortingButton;
