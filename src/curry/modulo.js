import { curry, compose } from 'ramda';

// partially applied modulo
const modulo = curry((divisor, dividend) => dividend % divisor);
const toBool = value => !!value;

export const isOdd = compose(
  toBool,
  modulo(2)
);
