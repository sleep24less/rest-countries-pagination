import React, { useState, useEffect } from 'react';
import './themeswitch.css';

function ThemeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleChange = (e) => {
        setIsDarkMode(e.target.checked);
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    // // function for dark/light mode toggle //
    // function handleChange(e) {
    //     if (e.target.checked) {
    //         document.querySelector(':root').classList.add('dark');
    //     } else {
    //         document.querySelector(':root').classList.remove('dark');
    //     }
    // }

    return (
        <input
            type='checkbox'
            id='theme_switch'
            onChange={(e) => handleChange(e)}
        />
    );
}

export default ThemeSwitch;
