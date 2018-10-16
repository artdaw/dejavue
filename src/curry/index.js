import { items, people } from './data';

import { splitBySpace } from './split';
import { mapToIds, oddAgePeople } from './map-filter';
import { isOdd } from './modulo';

/*** usage examples ***/

splitBySpace('Split me!'); // ["Split", "me!"]

mapToIds(items); // [0, 1, 2]

oddAgePeople(people); // { name: "Susan", age: 33 }

isOdd(2); // false
