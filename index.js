/*
    This function takes last element as pivot,
   places the pivot element at its correct
   position in sorted array, and places all
   smaller (smaller than pivot) to left of
   pivot and all greater elements to right
   of pivot
 */
function partition (arr, low, high) {
  const pivot = arr[high]
  let i = (low - 1) // index of smaller element
  for (var j = low; j < high; j++) {
    // If current element is smaller than the pivot
    if (arr[j] < pivot) {
      i++
      // swap arr[i] and arr[j]
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
  // swap arr[i+1] and arr[high] (or pivot)
  const temp = arr[i + 1]
  arr[i + 1] = arr[high]
  arr[high] = temp
  return i + 1
}
/*
    The main function that implements QuickSort()
  arr --> Array to be sorted,
  low  --> Starting index default zero,
  high  --> Ending index
*/
function sort (arr, low = 0, high) {
  if (!high) {
    high = arr.length - 1
  }
  if (low < high) {
    // pi is partitioning index, arr[pi] is now at right place
    const pi = partition(arr, low, high)
    // Recursively sort elements before
    // partition and after partition
    sort(arr, low, pi - 1)
    sort(arr, pi + 1, high)
    return arr
  }
}
module.exports = sort
