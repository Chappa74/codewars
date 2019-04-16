function formatDuration (seconds) {
  if(!seconds) {
    return 'now';
  }
  let mas = [];
  let tmpls = [
    {t: 60*60*24*365, n: 'year'},
    {t: 24*60*60, n: 'day'},
    {t: 60*60, n: 'hour'},
    {t: 60, n: 'minute'}
  ];

  for(let tmpl of tmpls){
    if(seconds%tmpl.t !== seconds){
	    const amount = parseInt(seconds/tmpl.t);
      let str=`${amount} ${tmpl.n}${amount >1? 's' : ''}`;
      mas.push(str);
      seconds%=tmpl.t;
    }
  }
  seconds? mas.push(`${seconds} second${seconds>1? 's' : ''}`) : null;
  return mas.length == 1?  mas[0] : mas.slice(0, mas.length - 1).join(', ') + ' and ' + mas[mas.length - 1];
}