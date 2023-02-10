import React from 'react';
import '../loadingspinner.css';

function LoadingSpinner() {
    return (
        <div class='lds-ring'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default LoadingSpinner;
