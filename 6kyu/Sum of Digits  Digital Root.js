function digital_root(n) {
  while(('' + n).split('').length > 1){
  	n = ('' + n).split('').reduce((prev, current) => {return parseInt(prev) + parseInt(current)});
  }
  return n;
}