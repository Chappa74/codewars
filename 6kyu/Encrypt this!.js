var encryptThis = function(text) {
  if(!text) {
    return '';
  }

  let enc = text.split(' ').reduce((enc, word) =>{
    word = word.length>2? word[0] + word[word.length - 1] + word.slice(2, word.length-1) + word[1] : word;
    word=word[0].charCodeAt(0) + word.substr(1, word.length-1) ;
    return enc + word + ' ';
  }, '');
  return enc.substr(0, enc.length-1);
}