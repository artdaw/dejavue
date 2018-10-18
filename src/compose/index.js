import {
  compose,
  prop,
  reduce,
  add,
  map,
  subtract,
  uniq,
  values,
  unnest,
  reject,
  isNil,
  props,
  keys,
  propEq,
  filter
} from 'ramda';
import { employees, indexedEmployees, employeeData, shifts } from './data';

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
  map(prop('vacationDaysUsed'))
);

getTotalUnusedVacationDays(employees); // 44

/* returns only the unique names
note that initial data is an object -
which R.map can be applied to as well */
const getEmployeeProp = (data, property) =>
  compose(
    uniq,
    values,
    map(prop(property))
  )(data);

getEmployeeProp(indexedEmployees, 'name'); // ["Sang", "Hesham"]

/* gets the values of the props, ignores undefined,
turns array of arrays into one level array */
const flattenEmployeeData = employeeData =>
  compose(
    unnest,
    reject(isNil),
    props(['shifts', 'timepunches', 'absence_shifts'])
  )(employeeData);

flattenEmployeeData(employeeData); // [1, 2, 3, 4, 5]

const getShiftKeyById = (shiftId, shifts) =>
  compose(
    keys,
    filter(propEq('shiftId', shiftId))
  )(shifts);

getShiftKeyById('123', shifts); // 'abc'
