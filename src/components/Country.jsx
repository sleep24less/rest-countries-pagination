import './country.css';

function Country(props) {
    return (
        <div className='country'>
            <img
                src={props.flag}
                className='country_flag'
                alt={`Picture of ${props.name} flag`}
            ></img>
            <div className='country_info'>
                <h3 className='country_name'>{props.name}</h3>
                <p>
                    <b>Region:</b> {props.region}
                </p>
                <p>
                    <b>Area:</b> {props.area} km²
                </p>
            </div>
        </div>
    );
}

export default Country;
