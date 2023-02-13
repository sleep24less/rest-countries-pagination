import Axios from 'axios';

export function getCountries() {
    const url =
        'https://restcountries.com/v2/all?fields=name,region,area,numericCode,flag';

    return Axios.get(url).then((res) => res.data);
}

export function sortOrder(isDescending, array) {
    if (isDescending === true) {
        return [...array].sort((a, b) => b.name.localeCompare(a.name));
    }
    return [...array].sort((a, b) => a.name.localeCompare(b.name));
}

export function filterCountries(value, array) {
    const lithuania = array.find((country) => country.name === 'Lithuania');

    if (value === 'All') {
        return array;
    }
    if (value === 'Smaller') {
        return array.filter((country) => country.area < lithuania.area);
    }
    if (value === 'Bigger') {
        return array.filter((country) => country.area > lithuania.area);
    }
    return array.filter((country) => value === country.region);
}
