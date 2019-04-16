function permutations(string, now='', arr=[]) {
    if(string)
        for(var i=0;i<string.length;i++)
            permutations(string.slice(0, i) + string.slice(i+1), now + string[i], arr);
    else
        if(!arr.includes(now))
            arr.push(now);
    return arr;
}