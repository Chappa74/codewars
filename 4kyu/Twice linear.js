function dblLinear(n) {
    let u = [1], j = 0, k = 0, i = 0;
    while(i++ <= n){
      u[i] = Math.min(2 * u[j] + 1, 3 * u[k] + 1);
      if(u[i] == 2 * u[j] + 1) j++;
      if(u[i] == 3 * u[k] + 1) k++;
    }
    return u[n];
}