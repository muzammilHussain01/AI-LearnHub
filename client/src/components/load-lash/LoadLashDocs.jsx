import React, { useState } from 'react';
import {Row, Col, InputGroup, Button, Form, Navbar} from 'react-bootstrap';

const lodashMethods = [
    {
        name: 'add',
        category: 'Math',
        desc: 'Adds two numbers.',
        example: `_.add(6, 4); // => 10`
    },
    {
        name: 'subtract',
        category: 'Math',
        desc: 'Subtracts the second number from the first.',
        example: `_.subtract(10, 4); // => 6`
    },
    {
        name: 'ceil',
        category: 'Math',
        desc: 'Rounds number up to the nearest integer.',
        example: `_.ceil(4.006); // => 5`
    },
    {
        name: 'floor',
        category: 'Math',
        desc: 'Rounds number down to the nearest integer.',
        example: `_.floor(4.999); // => 4`
    },
    {
        name: 'clamp',
        category: 'Number',
        desc: 'Clamps number within the inclusive lower and upper bounds.',
        example: `_.clamp(-10, -5, 5); // => -5`
    },
    {
        name: 'random',
        category: 'Number',
        desc: 'Produces a random number between lower and upper (inclusive).',
        example: `_.random(0, 5); // => an integer between 0 and 5`
    },
    {
        name: 'chunk',
        category: 'Array',
        desc: 'Splits array into chunks of specified size',
        example: `_.chunk(['a', 'b', 'c', 'd'], 2); // => [['a','b'], ['c','d']]`
    },
    {
        name: 'debounce',
        category: 'Function',
        desc: 'Delays invoking a function until after wait ms',
        example: `const debounced = _.debounce(() => alert("Hi"), 300);`
    },
    {
        name: 'cloneDeep',
        category: 'Object',
        desc: 'Deep clones a value',
        example: `const newObj = _.cloneDeep({ a: { b: 2 } });`
    },
    {
        name: 'uniq',
        category: 'Array',
        desc: 'Removes duplicate values from array',
        example: `_.uniq([2, 1, 2]); // => [2, 1]`
    },
    {
        name: 'merge',
        category: 'Object',
        desc: 'Deeply merges objects',
        example: `_.merge({ a: 1 }, { b: 2 }); // => { a: 1, b: 2 }`
    },
    {
        name: 'sortBy',
        category: 'Collection',
        desc: 'Sorts collection by iteratees',
        example: `_.sortBy([1, 5, 3]); // => [1, 3, 5]`
    },
    {
        name: 'get',
        category: 'Object',
        desc: 'Gets value at path of object',
        example: `_.get({ a: { b: 2 } }, 'a.b'); // => 2`
    },
    {
        name: 'isEqual',
        category: 'Lang',
        desc: 'Performs deep comparison between two values',
        example: `_.isEqual({ a: 1 }, { a: 1 }); // => true`
    },
    {
        name: 'camelCase',
        category: 'String',
        desc: 'Converts string to camel case',
        example: `_.camelCase('Foo Bar'); // => 'fooBar'`
    },
    {
        name: 'throttle',
        category: 'Function',
        desc: 'Throttles a function to only run once per ms',
        example: `const throttled = _.throttle(() => alert('Hey!'), 2000);`
    },
    {
        name: 'flatten',
        category: 'Array',
        desc: 'Flattens array a single level deep',
        example: `_.flatten([1, [2, [3, [4]], 5]]); // => [1, 2, [3, [4]], 5]`
    },
    {
        name: 'flattenDeep',
        category: 'Array',
        desc: 'Recursively flattens array',
        example: `_.flattenDeep([1, [2, [3, [4]], 5]]); // => [1, 2, 3, 4, 5]`
    },
    {
        name: 'pick',
        category: 'Object',
        desc: 'Creates an object by picking specific properties',
        example: `_.pick({ a: 1, b: 2, c: 3 }, ['a', 'c']); // => { a: 1, c: 3 }`
    },
    {
        name: 'omit',
        category: 'Object',
        desc: 'Creates an object excluding specific properties',
        example: `_.omit({ a: 1, b: 2, c: 3 }, ['b']); // => { a: 1, c: 3 }`
    },
    {
        name: 'groupBy',
        category: 'Collection',
        desc: 'Creates object composed of keys generated from results of running each element through iteratee',
        example: `_.groupBy([6.1, 4.2, 6.3], Math.floor); // => { '4': [4.2], '6': [6.1, 6.3] }`
    },
    {
        name: 'range',
        category: 'Number',
        desc: 'Creates array of numbers progressing from start up to, but not including, end',
        example: `_.range(0, 5); // => [0, 1, 2, 3, 4]`
    },
    {
        name: 'shuffle',
        category: 'Collection',
        desc: 'Creates an array of shuffled values',
        example: `_.shuffle([1, 2, 3, 4]); // => [3, 1, 4, 2] // order varies`
    },
    {
        name: 'template',
        category: 'String',
        desc: 'Creates a compiled template function',
        example: `const compiled = _.template('Hello <%= user %>!'); compiled({ user: 'Muzammil' }); // => 'Hello Muzammil!'`
    },
    {
        name: 'zip',
        category: 'Array',
        desc: 'Creates an array of grouped elements, the first of which contains the first elements of the given arrays',
        example: `_.zip(['a', 'b'], [1, 2], [true, false]); // => [['a', 1, true], ['b', 2, false]]`
    },
    {
        name: 'noop',
        category: 'Util',
        desc: 'A function that returns undefined',
        example: `_.noop(); // => undefined`
    },
    {
        name: 'drop',
        category: 'Array',
        desc: 'Creates a slice of array with n elements dropped from the beginning',
        example: `_.drop([1, 2, 3], 1); // => [2, 3]`
    },
    {
        name: 'dropRight',
        category: 'Array',
        desc: 'Creates a slice of array with n elements dropped from the end',
        example: `_.dropRight([1, 2, 3], 1); // => [1, 2]`
    },
    {
        name: 'fill',
        category: 'Array',
        desc: 'Fills elements of array with value from start up to, but not including, end',
        example: `_.fill([1, 2, 3], 'a'); // => ['a', 'a', 'a']`
    },
    {
        name: 'findIndex',
        category: 'Array',
        desc: 'Returns index of first element predicate returns truthy for',
        example: `_.findIndex([1, 2, 3], n => n % 2 === 1); // => 0`
    },
    {
        name: 'head',
        category: 'Array',
        desc: 'Gets the first element of array',
        example: `_.head([1, 2, 3]); // => 1`
    },
    {
        name: 'initial',
        category: 'Array',
        desc: 'Gets all but the last element of array',
        example: `_.initial([1, 2, 3]); // => [1, 2]`
    },
    {
        name: 'join',
        category: 'Array',
        desc: 'Joins elements of array into string separated by separator',
        example: `_.join(['a', 'b', 'c'], '~'); // => 'a~b~c'`
    },
    {
        name: 'nth',
        category: 'Array',
        desc: 'Gets the element at index n of array. If n is negative, returns from end',
        example: `_.nth(['a', 'b', 'c'], -2); // => 'b'`
    },
    {
        name: 'reverse',
        category: 'Array',
        desc: 'Reverses array in place',
        example: `_.reverse([1, 2, 3]); // => [3, 2, 1]`
    },
    {
        name: 'tail',
        category: 'Array',
        desc: 'Gets all but the first element of array',
        example: `_.tail([1, 2, 3]); // => [2, 3]`
    },
    {
        name: 'take',
        category: 'Array',
        desc: 'Creates slice of array with n elements taken from beginning',
        example: `_.take([1, 2, 3], 2); // => [1, 2]`
    },
    {
        name: 'takeRight',
        category: 'Array',
        desc: 'Creates slice of array with n elements taken from end',
        example: `_.takeRight([1, 2, 3], 2); // => [2, 3]`
    },
    {
        name: 'uniqBy',
        category: 'Array',
        desc: 'Like uniq but using iteratee for comparison',
        example: `_.uniqBy([2.1, 1.2, 2.3], Math.floor); // => [2.1, 1.2]`
    },
    {
        name: 'xor',
        category: 'Array',
        desc: 'Creates array of values not included in other given arrays',
        example: `_.xor([2, 1], [2, 3]); // => [1, 3]`
    },
    {
        name: 'countBy',
        category: 'Collection',
        desc: 'Creates object composed of keys generated from iteratee results',
        example: `_.countBy([6.1, 4.2, 6.3], Math.floor); // => { '4': 1, '6': 2 }`
    },
    {
        name: 'each',
        category: 'Collection',
        desc: 'Iterates over elements of collection and invokes iteratee for each element',
        example: `_.each([1, 2], value => console.log(value));`
    },
    {
        name: 'filter',
        category: 'Collection',
        desc: 'Iterates over elements and returns array of all elements predicate returns truthy for',
        example: `_.filter([1, 2, 3], n => n % 2); // => [1, 3]`
    },
    {
        name: 'find',
        category: 'Collection',
        desc: 'Returns first element predicate returns truthy for',
        example: `_.find([1, 2, 3, 4], n => n % 2 === 0); // => 2`
    },
    {
        name: 'map',
        category: 'Collection',
        desc: 'Creates array of values by running each element through iteratee',
        example: `_.map([1, 2, 3], n => n * 3); // => [3, 6, 9]`
    },
    {
        name: 'reject',
        category: 'Collection',
        desc: 'Opposite of filter; returns elements predicate returns false for',
        example: `_.reject([1, 2, 3], n => n % 2); // => [2]`
    },
    {
        name: 'sample',
        category: 'Collection',
        desc: 'Gets a random element from collection',
        example: `_.sample([1, 2, 3, 4]); // => 2 (random)`
    },
    {
        name: 'size',
        category: 'Collection',
        desc: 'Gets size of collection',
        example: `_.size([1, 2, 3]); // => 3`
    },
    {
        name: 'every',
        category: 'Collection',
        desc: 'Checks if predicate returns truthy for all elements',
        example: `_.every([true, 1, null, 'yes'], Boolean); // => false`
    },
    {
        name: 'some',
        category: 'Collection',
        desc: 'Checks if predicate returns truthy for any element',
        example: `_.some([null, 0, 'yes'], Boolean); // => true`
    },
    {
        name: 'after',
        category: 'Function',
        desc: 'Creates function that invokes func after n calls',
        example: `const saves = _.after(3, () => console.log('saved'));`
    },
    {
        name: 'ary',
        category: 'Function',
        desc: 'Creates function that accepts up to n arguments',
        example: `_.map(['6', '8', '10'], _.ary(parseInt, 1)); // => [6, 8, 10]`
    },
    {
        name: 'before',
        category: 'Function',
        desc: 'Creates function that invokes func while it’s called less than n times',
        example: `const limited = _.before(3, () => console.log('called'));`
    },
    {
        name: 'curry',
        category: 'Function',
        desc: 'Creates function that accepts arguments one at a time',
        example: `const curried = _.curry((a, b) => a + b); curried(1)(2); // => 3`
    },
    {
        name: 'once',
        category: 'Function',
        desc: 'Creates function that is restricted to invoking func once',
        example: `const initialize = _.once(() => console.log('Init'));`
    },
    {
        name: 'flip',
        category: 'Function',
        desc: 'Creates function that invokes func with arguments reversed',
        example: `const flipped = _.flip((a, b, c) => [a, b, c]); flipped(1, 2, 3); // => [3, 2, 1]`
    },
    {
        name: 'negate',
        category: 'Function',
        desc: 'Creates function that negates result of predicate',
        example: `_.filter([1, 2, 3, 4], _.negate(isEven));`
    },
    {
        name: 'identity',
        category: 'Util',
        desc: 'Returns the first argument it receives',
        example: `_.identity('hello'); // => 'hello'`
    },
    {
        name: 'constant',
        category: 'Util',
        desc: 'Creates function that returns value',
        example: `const always5 = _.constant(5); always5(); // => 5`
    },
    {
        name: 'times',
        category: 'Util',
        desc: 'Invokes iteratee n times, returning an array of results',
        example: `_.times(3, String); // => ['0', '1', '2']`
    },
    {
        name: 'noop',
        category: 'Util',
        desc: 'A function that returns undefined',
        example: `_.noop(); // => undefined`
    },
    {
        name: 'rangeRight',
        category: 'Number',
        desc: 'Creates array of numbers from end to start',
        example: `_.rangeRight(0, 5); // => [4, 3, 2, 1, 0]`
    },
    {
        name: 'inRange',
        category: 'Number',
        desc: 'Checks if number is in range (start inclusive, end exclusive)',
        example: `_.inRange(3, 2, 4); // => true`
    },
    {
        name: 'max',
        category: 'Math',
        desc: 'Computes the maximum value of array',
        example: `_.max([4, 2, 8, 6]); // => 8`
    },
    {
        name: 'min',
        category: 'Math',
        desc: 'Computes the minimum value of array',
        example: `_.min([4, 2, 8, 6]); // => 2`
    },
    {
        name: 'sum',
        category: 'Math',
        desc: 'Computes the sum of values in array',
        example: `_.sum([4, 2, 8, 6]); // => 20`
    },
    {
        name: 'sumBy',
        category: 'Math',
        desc: 'Computes the sum of values by iteratee',
        example: `_.sumBy([{ n: 4 }, { n: 2 }, { n: 8 }], 'n'); // => 14`
    },
    {
        name: 'clone',
        category: 'Object',
        desc: 'Creates a shallow clone of value',
        example: `_.clone({ a: 1 }); // => { a: 1 }`
    },
    {
        name: 'has',
        category: 'Object',
        desc: 'Checks if path is a direct property of object',
        example: `_.has({ a: { b: 2 } }, 'a.b'); // => true`
    },
    {
        name: 'set',
        category: 'Object',
        desc: 'Sets value at path of object',
        example: `const obj = {}; _.set(obj, 'a.b', 2); // => { a: { b: 2 } }`
    },
    {
        name: 'unset',
        category: 'Object',
        desc: 'Removes the property at path of object',
        example: `const obj = { a: { b: 2 } }; _.unset(obj, 'a.b'); // => true`
    },
    {
        name: 'defaults',
        category: 'Object',
        desc: 'Assigns default properties for missing object values',
        example: `_.defaults({ a: 1 }, { a: 3, b: 2 }); // => { a: 1, b: 2 }`
    },
    { name: 'compact', category: 'Array', desc: 'Removes falsey values from array', example: `_.compact([0,1,false,2,'',3]); // => [1,2,3]` },
    { name: 'concat', category: 'Array', desc: 'Concatenates values to array', example: `_.concat([1],[2,3],4); // => [1,2,3,4]` },
    { name: 'difference', category: 'Array', desc: 'Array of values not present in other arrays', example: `_.difference([2,1],[2,3]); // => [1]` },
    { name: 'differenceBy', category: 'Array', desc: 'Like difference but with iteratee', example: `_.differenceBy([2.1,1.2],[2.3,3.4], Math.floor);` },
    { name: 'differenceWith', category: 'Array', desc: 'Difference using comparator', example: `_.differenceWith([{x:1}], [{x:2}], _.isEqual);` },
    { name: 'dropRightWhile', category: 'Array', desc: 'Drops elements from end while predicate truthy', example: `_.dropRightWhile([1,2,3,4], n => n > 2); // => [1,2]` },
    { name: 'dropWhile', category: 'Array', desc: 'Drops elements from start while predicate truthy', example: `_.dropWhile([1,2,3,1], n => n < 3); // => [3,1]` },
    { name: 'findLastIndex', category: 'Array', desc: 'Like findIndex but from right', example: `_.findLastIndex([1,2,3,2], n => n === 2); // => 3` },
    { name: 'fromPairs', category: 'Array', desc: 'Converts pairs to object', example: `_.fromPairs([['a',1],['b',2]]); // => {a:1,b:2}` },
    { name: 'intersection', category: 'Array', desc: 'Common values of arrays', example: `_.intersection([1,2],[2,3]); // => [2]` },
    { name: 'intersectionBy', category: 'Array', desc: 'Intersection with iteratee', example: `_.intersectionBy([2.1,1.2],[2.3,3.4], Math.floor);` },
    { name: 'pull', category: 'Array', desc: 'Removes given values mutably', example: `_.pull([1,2,3,1,2], 2,1); // => [3]` },
    { name: 'pullAll', category: 'Array', desc: 'Removes all given values from array', example: `_.pullAll([1,2,3,1], [1,2]); // => [3]` },
    { name: 'pullAt', category: 'Array', desc: 'Removes elements at specified indexes', example: `_.pullAt([10,20,30,40], [1,3]); // => [20,40] remaining [10,30]` },
    { name: 'remove', category: 'Array', desc: 'Removes elements predicate matches, returns removed', example: `_.remove([1,2,3,4], n => n%2==0); // => [2,4]` },
    { name: 'slice', category: 'Array', desc: 'Slices array from start up to end', example: `_.slice([1,2,3,4],1,3); // => [2,3]` },
    { name: 'sortedIndex', category: 'Array', desc: 'Find insertion index to keep sorted', example: `_.sortedIndex([10,20,30],25); // => 2` },
    { name: 'sortedIndexOf', category: 'Array', desc: 'Index of value in sorted array', example: `_.sortedIndexOf([1,1,2,2,3],2); // => 2` },
    { name: 'sortedUniq', category: 'Array', desc: 'Unique values in sorted array', example: `_.sortedUniq([1,1,2,2,3]); // => [1,2,3]` },
    { name: 'union', category: 'Array', desc: 'Union of arrays (unique)', example: `_.union([1,2],[2,3]); // => [1,2,3]` },
    { name: 'keyBy', category: 'Collection', desc: 'Creates object keyed by iteratee result', example: `_.keyBy([{id:1},{id:2}], 'id'); // => {1:{…},2:{…}}` },
    { name: 'sortedLastIndex', category: 'Collection', desc: 'Insertion position from right in sorted', example: `_.sortedLastIndex([10,20,20,30],20); // => 3` },
    { name: 'findLast', category: 'Collection', desc: 'Like find but from right', example: `_.findLast([1,2,3,2], n => n%2==0); // => 2` },
    { name: 'sampleSize', category: 'Collection', desc: 'Gets n random elements', example: `_.sampleSize([1,2,3,4],2); // => [2,4]` },
    { name: 'includes', category: 'Collection', desc: 'Checks if value is in collection', example: `_.includes([1,2,3],2); // => true` },
    { name: 'unionBy', category: 'Collection', desc: 'Union with iteratee', example: `_.unionBy([2.1],[1.2], Math.floor); // => [2.1,1.2]` },
    { name: 'unionWith', category: 'Collection', desc: 'Union with comparator', example: `_.unionWith([{x:1}], [{x:1}], _.isEqual);` },
    { name: 'xor', category: 'Collection', desc: 'Difference symmetrically between arrays', example: `_.xor([1,2],[2,3]); // => [1,3]` },
    { name: 'xorBy', category: 'Collection', desc: 'XOR with iteratee', example: `_.xorBy([2.1],[1.2], Math.floor);` },
    { name: 'xorWith', category: 'Collection', desc: 'XOR with comparator', example: `_.xorWith([{x:1}], [{x:1}], _.isEqual);` },
    { name: 'bind', category: 'Function', desc: 'Bind function to thisArg and partials', example: `const f = _.bind(func, obj, 1);` },
    { name: 'bindKey', category: 'Function', desc: 'Binds method name of object', example: `const f = _.bindKey(obj, 'method', 1);` },
    { name: 'curryRight', category: 'Function', desc: 'Curried from right args', example: `_.curryRight((a,b)=>[a,b])(2)(1); // => [1,2]` },
    { name: 'defer', category: 'Function', desc: 'Defers invocation until next tick', example: `_.defer(() => console.log('later'));` },
    { name: 'delay', category: 'Function', desc: 'Invokes after delay ms', example: `_.delay(console.log, 100, 'hi');` },
    { name: 'memoize', category: 'Function', desc: 'Caches function results', example: `const m = _.memoize(fib);` },
    { name: 'partial', category: 'Function', desc: 'Partially applies arguments left', example: `_.partial(f, 'a');` },
    { name: 'partialRight', category: 'Function', desc: 'Partial from right', example: `_.partialRight(f, 'z');` },
    { name: 'rearg', category: 'Function', desc: 'Reorder arguments', example: `_.rearg(f, [2,0,1]);` },
    { name: 'spread', category: 'Function', desc: 'Spread array into function args', example: `const s = _.spread((x,y)=>x+y); s([1,2]);` },
    { name: 'assign', category: 'Object', desc: 'Assign own enumerable props', example: `_.assign({a:1}, {b:2});` },
    { name: 'assignWith', category: 'Object', desc: 'Assign with customizer', example: `_.assignWith(a,b, customizer);` },
    { name: 'assignIn', category: 'Object', desc: 'Assign including inherited props', example: `_.assignIn(target, source);` },
    { name: 'assignInWith', category: 'Object', desc: 'Assign in with customizer', example: `_.assignInWith(a,b, customizer);` },
    { name: 'defaultsDeep', category: 'Object', desc: 'Recursive defaults assignment', example: `_.defaultsDeep(o, defaults);` },
    { name: 'entriesIn', category: 'Object', desc: 'Own + inherited key‑value pairs', example: `_.entriesIn(obj);` },
    { name: 'extend', category: 'Object', desc: 'Alias of assignIn', example: `_.extend(a,b);` },
    { name: 'invert', category: 'Object', desc: 'Swap keys and values', example: `_.invert({a:1,b:2});` },
    { name: 'invertBy', category: 'Object', desc: 'Invert grouped by iteratee', example: `_.invertBy({a:1,b:2}, n => n%2);` },
    { name: 'mapKeys', category: 'Object', desc: 'Map object keys', example: `_.mapKeys({a:1}, v => v);` },
    { name: 'mapValues', category: 'Object', desc: 'Map object values', example: `_.mapValues({a:1,b:2}, v=>v*2);` },
    { name: 'omitBy', category: 'Object', desc: 'Omit props predicate matches', example: `_.omitBy(obj, v=>v==null);` },
    { name: 'pickBy', category: 'Object', desc: 'Pick props predicate truthy', example: `_.pickBy(obj, v=>v>1);` },
    { name: 'result', category: 'Object', desc: 'Invoke value at path or return value', example: `_.result(obj, 'a.b', 'default');` },
    { name: 'toPairs', category: 'Object', desc: 'Object to array of [key,value]', example: `_.toPairs({a:1});` },
    { name: 'transform', category: 'Object', desc: 'Transform object via iteratee', example: `_.transform(obj, (acc,v,k)=>acc[k]=v*2, {});` },
    { name: 'update', category: 'Object', desc: 'Update value at path', example: `_.update(obj, 'a.b', v=>v+1);` },
    { name: 'updateWith', category: 'Object', desc: 'Update using customizer for path creation', example: `_.updateWith(obj,'a.b',fn, customizer);` },
    { name: 'hasIn', category: 'Object', desc: 'Checks key exists own or inherited', example: `_.hasIn(obj, 'a.b');` },
    { name: 'functionsIn', category: 'Object', desc: 'Function names own+inherited', example: `_.functionsIn(obj);` },
    { name: 'attempt', category: 'Util', desc: 'Attempts function, returns error or result', example: `_.attempt(fn);` },
    { name: 'bindAll', category: 'Util', desc: 'Bind object methods to object', example: `_.bindAll(obj, ['method']);` },
    { name: 'cond', category: 'Util', desc: 'Function of predicate‑func pairs', example: `_.cond([[p1, f1],[_,f2]])({a:1});` },
    { name: 'conforms', category: 'Util', desc: 'Matches object to predicate props', example: `_.conforms({b: _.isNumber})({b:2});` },
    { name: 'flow', category: 'Util', desc: 'Compose left-to-right', example: `_.flow([f1,f2])(value);` },
    { name: 'flowRight', category: 'Util', desc: 'Compose right-to-left', example: `_.flowRight([f1,f2])(value);` },
    { name: 'iteratee', category: 'Util', desc: 'Generates callback from path, object, or func', example: `_.iteratee('a');` },
    { name: 'matches', category: 'Util', desc: 'Returns function matching source object', example: `_.matches({a:1})(object);` },
    { name: 'matchesProperty', category: 'Util', desc: 'Matches object property at path', example: `_.matchesProperty('a.b',2)(obj);` },
    { name: 'method', category: 'Util', desc: 'Invoke method by path', example: `_.method('a.b')(obj, args);` },
    { name: 'methodOf', category: 'Util', desc: 'Invoke method from object', example: `_.methodOf(obj)('a.b', args);` },
    { name: 'mixin', category: 'Util', desc: 'Add functions to lodash namespace', example: `_.mixin({ my: fn });` },
    { name: 'noConflict', category: 'Util', desc: 'Restore previous _ and return lodash', example: `const lodash = _.noConflict();` },
    { name: 'nthArg', category: 'Util', desc: 'Returns function returning nth argument', example: `_.nthArg(1)('a','b'); // => 'b'` },
    { name: 'propertyOf', category: 'Util', desc: 'Returns function returning value at path in given object', example: `_.propertyOf(obj)('a.b');` },
    { name: 'stubArray', category: 'Util', desc: 'Returns new empty array', example: `_.stubArray(); // => []` },
    { name: 'stubFalse', category: 'Util', desc: 'Returns false', example: `_.stubFalse(); // => false` },
    { name: 'stubObject', category: 'Util', desc: 'Returns empty object', example: `_.stubObject();` },
    { name: 'stubString', category: 'Util', desc: 'Returns empty string', example: `_.stubString();` },
    { name: 'stubTrue', category: 'Util', desc: 'Returns true', example: `_.stubTrue();` },
    { name: 'uniqueId', category: 'Util', desc: 'Generates unique id', example: `_.uniqueId('item_'); // => 'item_1'` }
];

const LodashDocs = () => {
    const [copied, setCopied] = useState(null);
    const [searchKey, setSearchKey] = useState("")
    // console.log(searchKey);
    const filteredMethods = lodashMethods.filter(
        (methods)=> methods.name.toLowerCase().includes(searchKey)
    )
    console.log(filteredMethods.length)

    const handleCopy = async (text, key) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(key);
            setTimeout(() => setCopied(null), 1500);
        } catch {
            alert('Failed to copy');
        }
    };

    return (
        <div className="container my-4 bg-white p-4 rounded shadow-sm">
            <h2 className="text-primary mb-4">📦 Lodash Documentation</h2>

            <p>
                Lodash is a modern JavaScript utility library delivering modularity, performance & extras. It helps with common tasks
                involving arrays, numbers, objects, strings, etc. Below is a collection of useful Lodash methods with examples.
            </p>

            <h5 className="mt-4">⚙️ Installation</h5>
            <pre className="bg-light p-2 border rounded">npm install lodash</pre>

            <h5 className="mt-4">🚀 Common Methods with Examples</h5>
            <div className="table-responsive">
                <Navbar className="bg-body-tertiary justify-content-between">
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                    onChange={e => setSearchKey(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Navbar>
                <table className="table table-bordered table-striped align-middle">
                    <thead className="table-light">
                    <tr>
                        <th>Method</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Example</th>
                        <th>Copy</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredMethods.map((method, idx) => (
                        <tr key={idx}>
                            <td><code>_.{method.name}()</code></td>
                            <td>{method.category}</td>
                            <td>{method.desc}</td>
                            <td>
                                <pre className="bg-light p-2 rounded text-wrap">{method.example}</pre>
                            </td>
                            <td>
                                <button
                                    className="btn btn-sm btn-outline-primary"
                                    onClick={() => handleCopy(method.example, idx)}
                                >
                                    {copied === idx ? 'Copied!' : 'Copy'}
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <p className="mt-4">
                Lodash includes <strong>over 300 functions</strong>. Visit the official documentation for a complete list at{' '}
                <a href="https://lodash.com/docs" target="_blank" rel="noopener noreferrer">lodash.com/docs</a>.
            </p>
        </div>
    );
};

export default LodashDocs;
