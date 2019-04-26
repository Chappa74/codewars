function getAverage(marks){
  return Math.floor(marks.reduce((sum, val) => sum=sum+val, 0) / marks.length);
}