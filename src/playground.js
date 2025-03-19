const add = (param1, param2) => {
  return param1 + param2;
};

// console.log(add(2, 3));
// console.log(add('hello ', 'world'));
// console.log(typeof add( '1', 1));

// Unit Test One
const unitTestExampleOne = () => {
  // test description
  console.log(' Test 1: Adding two numbers (2 and 3)');
  // test assertion
  console.log(add(2, 3) === 5 ? 'Passed' : 'Failed');
};

// Unit Test Two
const unitTestExampleTwo = () => {
  // test description
  console.log('Test 2: Adding two non-number strings("hello", "world")');

  console.log(add('hello ', 'world') === 'hello world' ? 'Passed' : 'Failed');
  
};
 unitTestExampleOne();
 unitTestExampleTwo();
