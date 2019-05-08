const coins = {
    200: '£2',
    100: '£1',
    50: '50p',
    20: '20p',
    10: '10p',
    5: '5p',
    2: '2p',
    1: '1p',
};

function minCoins(amount) {
    if (!/^£?\d+\.?\d*p?$/.test(amount) || parseFloat(amount) === 0) {
        return "Invalid input - enter a positive amount of money"
    }
    if (typeof amount === 'string') {
        if (/£\d+p?$/.test(amount)) {
            amount = amount.match(/\d+/)[0] * 100;
        } else if (/\d+\.\d+p?/.test(amount)) {
            amount = parseFloat(amount.match(/\d+\.\d+/)[0]).toFixed(2) * 100;
        } else if (/\d+/.test(amount)) {
            amount = parseInt(amount);
        }
    } else {
        if (Number(amount) === amount && amount % 1 !== 0) {
            amount *= 100;
        }
    }
    const finded_coins = {};
    const keys = Object.keys(coins).reverse();
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] <= amount) {
            amount -= keys[i];
            if (!finded_coins[coins[keys[i]]]) {
                finded_coins[coins[keys[i]]] = 1;
            } else {
                finded_coins[coins[keys[i]]]++;
            }
            i--;
        }
    }

    let str = '';
    finded_coints_keys = Object.keys(finded_coins);
    for (const key of finded_coints_keys) {
        str += `${finded_coins[key]} ${key} coin${finded_coins[key] > 1 ? 's' : ''}, `;
    }
    str = str.substr(0, str.length - 2);
    return str.replace(/, ([\d\s\w£]*)$/, ' and $1');
}