// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// Bubble Sort
// From i = 0 to array.length
//  From j = 0 to array.length - i
//    If element at j is greater than j+1
//      Swap elements at j and j + 1

function bubbleSort(arr) {
// Implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

// return the sorted array
return arr;
}

// Selection Sort
// From i = 0 to array.length
//  Assume the element at 'i' is the least in the array, assign i to 'indexOfmin'
//  For j from i+1 to end of array
//    see if there is an element with lower value
//      if there is, record it's index
//  If the index of the current element and the index of the lowest element is not the same, swap them
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let indexOfMin = i;
  
      for (let j = i+1; j <arr.length; j++) {
        if (arr[j] < arr[indexOfMin]) {
          indexOfMin = j;
        }
      }
  
      if (indexOfMin !== i) {
        let lesser = arr[indexOfMin];
        arr[indexOfMin] = arr[i];
        arr[i] = lesser;
      }
    }
  
    return arr;
  }

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
