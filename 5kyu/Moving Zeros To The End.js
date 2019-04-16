var moveZeros = function (arr) {
  let count = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] === 0) {
      arr.splice(i, 1);
      count++;
      i--;
    }
  }
  for(let i=0; i<count; i++){
    arr.push(0);
  }
  return arr;
}