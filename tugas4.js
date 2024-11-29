const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2]
console.log(arr3)

const person = {
  name: "john",
  age: 30,
};

const gender = {
  ...person,
  gender: 'male',
};
console.log(gender)