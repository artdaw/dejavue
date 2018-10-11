import { curry } from 'ramda';

const split = curry((delimiter, str) => str.split(delimiter));
const words = split(' ');

document.getElementById('app').innerHTML = words('Test string');
