import { curry, compose } from 'ramda';

// PARTIALLY APPLIED MODULO
const modulo = curry((divisor, dividend) => dividend % divisor);
const toBool = value => !!value;

export const isOdd = compose(
  toBool,
  modulo(2)
);

isOdd(2); // false
