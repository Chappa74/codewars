function orderWeight(strng) {
  getWeight = num => {return num.split('').reduce((acc, val)=>{return +acc+parseInt(val)})};
  return strng.split(' ').sort((a,b) =>{
  	const wA = getWeight(a), wB = getWeight(b);
  	if(wA == wB) {
  		return ('' + a).localeCompare(b);
  	}
  	return wA - wB;
  }).join(' ');
}