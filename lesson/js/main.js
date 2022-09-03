// Array method

// map()
// filter()
// find()
// reduce
// foreach()

// Object method

// Object.keys()
// Object.values()
// Object.entries()

// Array

const arr = ['1', '2', '3', '4'];

const id = 2;

const numArr = arr.map((item) => +item);
const filteredArr = arr.filter((item) => +item < 3);
const entity = arr.find((item) => +item === id);
const sum = arr.reduce((previousValue, currentValue) => previousValue + Number(currentValue), 0);

arr.forEach((item) => {
  console.log(item);
});

// Object

const obj = {
  name: 'name',
  age: 25,
  message: 'message'
};

Object.keys(obj).forEach((key) => {
  console.log(key)
});

Object.values(obj).forEach((value) => {
  console.log(value);
});

Object.entries(obj).forEach((item) => {
  const [key, value] = item; // item - массив. Деструктурируем его
  console.log(`key: ${key} value: ${value}`)
});