import { curry } from 'ramda';

// partially applied split
const split = curry((delimiter, str) => str.split(delimiter));
export const splitBySpace = split(' ');
