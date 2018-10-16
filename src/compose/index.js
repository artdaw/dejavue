import { compose, reduce, add, map, subtract } from 'ramda';

import { employees } from './data';
import { getProp } from '../curry/map-filter';

// composing native JS methods
var roundAndParseFloat = compose(
  Math.round,
  parseFloat
);
roundAndParseFloat('42.6'); // 43

const totalVacationDays = 28;
const getTotalUnusedVacationDays = compose(
  reduce(add, 0),
  map(subtract(totalVacationDays)),
  map(getProp('vacationDaysUsed'))
);
getTotalUnusedVacationDays(employees); // 40
