import '../header.css';

function Header() {
    return (
        <div className='header_background'>
            <header className='header'>
                <h1 className='logo'>
                    <b>REST</b>Countries
                </h1>
                {/* Placeholder icon for dark/light mode switch */}
                <i className='fa-solid fa-moon'></i>
            </header>
        </div>
    );
}

export default Header;
