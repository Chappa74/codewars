function narcissistic(value) {
  const nums = value.toString().split('');
  let sum = 0;
  for(num of nums){
    sum+=Math.pow(num, nums.length);
  }
  return value === sum;
}