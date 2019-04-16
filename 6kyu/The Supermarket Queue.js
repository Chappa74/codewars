function queueTime(customers, n) {
  let work_mas = [], sum = 0;
  while (customers.length || work_mas.length) {
    work_mas = work_mas.concat(customers.splice(0, n - work_mas.length));
    let min = Math.min(...work_mas);
    sum+=min;
    work_mas = work_mas.map(a => {return a-min}).filter(a => { return a !=0 });
  }
  return sum;
  
}