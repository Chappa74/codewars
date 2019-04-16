decodeMorse = function(morseCode){
  return (morseCode.split(' ').map( val => {return val? MORSE_CODE[val] : ' '}).join('').replace(/\s+/g,' ').trim())
}