import React from 'react';
import './themeswitch.css';

function ThemeSwitch() {
    // function for dark/light mode toggle //
    function handleChange(e) {
        if (e.target.checked) {
            document.querySelector(':root').classList.add('dark');
        } else {
            document.querySelector(':root').classList.remove('dark');
        }
    }

    return (
        <input
            type='checkbox'
            id='theme_switch'
            onChange={(e) => handleChange(e)}
        />
    );
}

export default ThemeSwitch;
