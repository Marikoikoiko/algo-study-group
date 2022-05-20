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

/*
BINARY SEARCH - must be sorted array

This type of search is used more often in interview questions. The idea here is to have 2 pointers on each end of a sorted array and have a middle pointer. You compare the mid pointer with the value you are searching for and adjust the two end pointers accordingly. Each iteration cuts the array in half.

*/
function binarySearch1(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}
console.log(binarySearch1([2, 5, 6, 9, 13, 15, 28, 30], 28));// 6
// [2, 5, 6, 9, 13, 15, 28, 30]
// S            M           E
// [2, 5, 6, 9, 13, 15, 28, 30]
//             S    M       E

// Example 2
function binarySearch2(array, value) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    const mid = Math.floor((rightPointer + leftPointer) / 2);
    if (array[mid] === value) return mid;
    if (array[mid] < value) leftPointer += 1;
    if (array[mid] > value) rightPointer -= 1;
  }
  return -1;
}

console.log(binarySearch2([2, 5, 9, 10, 7], 9));// 2
