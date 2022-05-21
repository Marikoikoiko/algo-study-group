# 2. Binary Search
🤩 bigger deal seems like lots of interviews have this

---
Question 1: Use binary search to find a value within an array.

``` javascript
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
``` 