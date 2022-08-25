function quickSort(items) {
  return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(items, left, right) {
  let index;

  if (items.length > 1) {
    index = partition(items, left, right);

    if (left < index - 1) {
      quickSortHelper(items, left, index -1);
    }

    if (index < right) {
      quickSortHelper(items, index, right);
    }
  }

  return items;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)];

  while(left <= right) {
    while (pivot > arr[left]) {
      left++;
    }
    while (pivot < arr[right]) {
      right--;
    }

    if (left <= right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}

console.log(quickSort([6, 1 ,23, 4, 2, 3]));