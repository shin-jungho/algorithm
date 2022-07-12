// Merge Sort

function merge(leftA, rightA) {
  let results = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftA.length && rightIdx < rightA.length) {
    if (leftA[leftIdx] < rightA[rightIdx]) {
      results.push(leftA[leftIdx++]);
      // console.log('leftA[leftIdx++], leftA :', leftA[leftIdx++], results);
    } else {
      results.push(rightA[rightIdx++]);
      // console.log('rightA[rightIdx++], rightA :', rightA[rightIdx++], results);
    }
    // console.log('results :', results);
  }

  let leftRemains = leftA.slice(leftIdx);
  // console.log('leftRemains :', leftRemains);
  let rightRemains = rightA.slice(rightIdx);
  // console.log('rightRemains :', rightRemains);

  return results.concat(leftRemains).concat(rightRemains);
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let midpoint = Math.floor((arr.length) / 2);
  let leftArr = arr.slice(0, midpoint);
  let rightArr = arr.slice(midpoint);

  // console.log('leftArr, rightArr :', leftArr, rightArr);
  
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.log(mergeSort([6, 1, 23, 4, 2, 3]));