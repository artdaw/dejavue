import { curry, compose } from 'ramda';
import { isOdd } from './modulo';

// CURRY + MAP
const objects = [{ id: 0, name: 'zero' }, { id: 1, name: 'one' }, { id: 2, name: 'two' }];
const getProp = curry((prop, object) => object[prop]);

/* instead of pasing function definition to the .map(),
  we first define curried function which takes prop and object,
  and call it with the prop we want to map to. This will
  return the function which takes the object and returns
  the value of the prop that we first passed.  */
objects.map(getProp('id')); // [0, 1, 2]

const items = [
  {
    name: 'Peter',
    age: 28
  },
  {
    name: 'Susan',
    age: 33
  }
];

const oddAgePeople = items.filter(
  compose(
    isOdd,
    getProp('age')
  )
); // { name: 'Susan', age: 33 }
/* filtering by composing functions getProp and isOdd,
which is already created by composing toBool and 
partially applied, curried function modulo */
