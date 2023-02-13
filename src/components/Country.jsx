import './country.css';

function Country({ flag, name, region, area }) {
    return (
        <div className='country'>
            <img
                src={flag}
                className='country_flag'
                alt={`Picture of ${name} flag`}
            />
            <div className='country_info'>
                <h3 className='country_name'>{name}</h3>
                <p>
                    <b>Region:</b> {region}
                </p>
                <p>
                    <b>Area:</b> {area} km²
                </p>
            </div>
        </div>
    );
}

export default Country;
