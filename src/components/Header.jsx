import '../header.css';
import ThemeSwitch from './ThemeSwitch';

function Header() {
    return (
        <div className='header_background'>
            <header className='header'>
                <h1 className='logo'>
                    <b>REST</b>Countries
                </h1>
                <ThemeSwitch />
            </header>
        </div>
    );
}

export default Header;
