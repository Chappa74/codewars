const patterns = [{
    letter: 'F',
    color: 'pink'
},
{
    letter: 'L',
    color: 'red'
},
{
    letter: 'R',
    color: 'green'
},
{
    letter: '\\d',
    color: 'orange'
}];

function highlight(code) {
    let ans = '';
    while (code.length) {
        if (code[0] === '(' || code[0] === ')') {
            ans += code[0];
            code = code.substr(1);
        }
        for (let pattern of patterns) {
            const { letter, color } = pattern;
            let reg = new RegExp(`^${letter}+`);
            var match = code.match(reg);
            if (match) {
                code = code.replace(match[0], '');
                ans += `<span style="color: ${color}">${match[0]}</span>`;
                break;
            }
        }
    }
    return ans;
}