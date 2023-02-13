import { useState, useEffect } from 'react';
import './themeswitch.css';

function ThemeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleChange = (e) => {
        setIsDarkMode(e.target.checked);
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (
        <input
            type='checkbox'
            id='theme_switch'
            onChange={(e) => handleChange(e)}
        />
    );
}

export default ThemeSwitch;
