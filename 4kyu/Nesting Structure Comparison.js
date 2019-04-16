Array.prototype.sameStructureAs = function (other) {
  let a = this.reduce( (isHaveChildren, elem)=>{return isHaveChildren=typeof(elem) == 'object' }, false);
  let b = this.reduce( (isHaveChildren, elem)=>{return isHaveChildren=typeof(elem) == 'object' }, false);

  if(!a && !b){
    return  this.length != undefined && other.length != undefined;  
  }
    
  function check(mas1,mas2){
    if(mas1.length !== mas2.length){
      return false;
    } 
    if(!mas1.length || !mas2.length) {
      return typeof(mas2) == typeof(mas1)  ;
    }
    return check(mas1.pop(), mas2.pop());
  }
    
  return check(this, other);
};