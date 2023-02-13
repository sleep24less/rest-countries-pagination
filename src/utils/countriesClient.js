import Axios from 'axios';

export function getCountries() {
    const url =
        'https://restcountries.com/v2/all?fields=name,region,area,numericCode,flag';

    return Axios.get(url).then((res) => res.data);
}

export function sortOrder(value, array) {
    if (value === true) {
        return [...array].sort((a, b) => b.name.localeCompare(a.name));
    } else {
        return [...array].sort((a, b) => a.name.localeCompare(b.name));
    }
}

export function filterCountries(value, array) {
    const lithuania = array.find((country) => country.name === 'Lithuania');

    if (value === 'All') {
        return array;
    } else if (value === 'Smaller') {
        return array.filter((country) => {
            if (country.area < lithuania.area) return country;
        });
    } else if (value === 'Bigger') {
        return array.filter((country) => {
            if (country.area > lithuania.area) return country;
        });
    } else {
        return array.filter((country) => {
            if (value === country.region) return country;
        });
    }
}
