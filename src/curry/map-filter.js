import { curry, compose, map, filter } from 'ramda';
import { isOdd } from './modulo';

const getProp = curry((prop, object) => object[prop]);

/* instead of pasing function definition to the .map(),
  we first define curried function which takes prop and object,
  and call it with the prop we want to map to. This will
  return the function which takes the object and returns
  the value of the prop that we first passed. */
export const mapToIds = map(getProp('id'));

/* filtering by composing functions getProp and isOdd,
which is already created by composing toBool and 
partially applied, curried function modulo */
export const oddAgePeople = filter(
  compose(
    isOdd,
    getProp('age')
  )
);
