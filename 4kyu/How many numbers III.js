function findAll(sum, k) {
  let valid_min_num = 0, valid_max_num = 0, count = 0;
  function getSum(num) {
      let number_sum = 0;
      for (let i = 0; i < num.length; i++) {
          number_sum += +num[i];
      }
      return number_sum;
  }
  function for_n(num, n) {
      if (num.length == k && getSum(num) == sum) {
          valid_min_num = valid_min_num==0? num : valid_min_num; 
          valid_max_num = num;
          count++;
      }
      for (let i = num ? +num[num.length - 1] : 1; i <= 9; i++) {
          if (n) {
              for_n(num + i, n - 1);
          }
      }
  }
  
  for_n('', k);
  if(count > 0){
    return [count, valid_min_num, valid_max_num];
  }
  return [];
}