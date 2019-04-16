function solution(list){
  let str = list.reduce((acc, val, i, arr) =>{
  	let fl=false;
  	for(var j=i; j<arr.length; j++){
  		if(Math.abs(list[j+1]-list[j])==1){
  			fl=true;
  		} else {
  			break;
  		}
  	}
    if(j-i >=2 && fl){
      acc+=val +='-' + arr[j] + ',';
      arr.splice(i, j-i);
    
    } else {
      acc+=val+','
    }
  	return acc;
  }, '');
  return str.substr(0, str.length-1);
}