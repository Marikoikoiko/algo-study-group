/*
LINEAR SEARCH: going through each element one at a time

Exapmles of linear search methods
indexOf()
includes()
find()
findIndex()

Example Challenge:
Write a function that accepts an array and a value. Loop through the array and check if the current array element is equal to the value. If it is, return the index at which the element is found. If the value is never found, return -1.
*/

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) return i;
  }
  return -1;
}

const numbers = [1, 2, 3, 4, 5];
const myValue = 3;

console.log(linearSearch(numbers, myValue));// 2
