import './header.css';
import ThemeSwitch from './ThemeSwitch';

function Header() {
    return (
        <header className='header'>
            <div className='header_container'>
                <h1 className='logo'>
                    <b>REST</b>Countries
                </h1>
                <ThemeSwitch />
            </div>
        </header>
    );
}

export default Header;
