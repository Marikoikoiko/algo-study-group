# 1. Linear Search
😁 Not a big deal. iterating through the array one by one.

Going through each element one at a time simiar to these methods
- indexOf()
- includes()
- find()
- findIndex()

```javascript
/*
Write a function that accepts an array and a value. Loop through the array and check if the current array element is equal to the value. If it is, return the index at which the element is found. If the value is never found, return -1.
*/

function linearSearch (arr, value){
    for(let i=0; i<arr.length; i++){
        if(value === arr[i]) return i   
    }
    return -1
}

const numbers = [1,2,3,4,5]
const myValue = 3
console.log(linearSearch(numbers, myValue))//2


```