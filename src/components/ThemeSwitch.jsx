import React from 'react';
import '../themeswitch.css';

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
        <label className='switch'>
            <input type='checkbox' onChange={(e) => handleChange(e)}></input>
            <span className='slider'></span>
        </label>
    );
}

export default ThemeSwitch;
