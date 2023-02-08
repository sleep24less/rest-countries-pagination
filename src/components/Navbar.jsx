import '../navbar.css';

function Navbar() {
  return (
    <div className='container navbar'>
      <nav className='navbar'>
        <h1 className='logo'>
          <b>REST</b>Countries
        </h1>
        {/* Placeholder icon for dark/light mode switch */}
        <i className='fa-solid fa-moon'></i>
      </nav>
    </div>
  );
}

export default Navbar;
