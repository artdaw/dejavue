import { curry } from 'ramda';

// PARTIALLY APPLIED SPLIT
const split = curry((delimiter, str) => str.split(delimiter));
const splitBySpace = split(' ');

splitBySpace('Split me!'); // ["Split", "me!"]
