
function maximum_subarray(arr) {
  let currentMax = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    currentMax = Math.max(0, currentMax + arr[i]);
    max = Math.max(currentMax, max);
  }

  return max;
}

