// Free open source pure CSS loading spinner from loading.io css spinner ( https://loading.io/css/ )

import React from 'react';
import './loadingspinner.css';

function LoadingSpinner() {
    return (
        <div className='lds-ring'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default LoadingSpinner;
