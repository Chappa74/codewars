function digPow(n, p){
    const sum = n.toString().split('').reduce((sum, cur, i)=>{
      return sum+Math.pow(cur, i+p);
    }, 0);
    return sum%n==0? sum/n : -1;
}