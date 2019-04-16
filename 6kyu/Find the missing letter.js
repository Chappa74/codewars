function findMissingLetter(array) {
 return array.reduce((a, b, i, arr)=>{ if(a!=b.charCodeAt(0)){ arr.length=0; return String.fromCharCode(a); }; return b.charCodeAt(0)+1}, array[0].charCodeAt(0));
}
