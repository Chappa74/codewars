function tribonacci(signature,n){
  if(n < 3) return signature.slice(0, n);
  
  while(signature.length !== n){  
    let sum = 0;
    sum+=signature[signature.length-3];
    sum+=signature[signature.length-2];
    sum+=signature[signature.length-1];
    signature.push(sum);
  }
  
  return signature;
}