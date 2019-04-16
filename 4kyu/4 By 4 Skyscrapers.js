const max_size = 4;

function solvePuzzle(clues) {
    function checkRow(row, left_side, right_side) {
        if (~row.indexOf(0) || (left_side == 0 && right_side == 0)) {
            return true;
        }
        let left_count = 1, right_count = 1;
        for (let side = 0; side <= 1; side++) {
            if ((side && right_side == 0) || (!side && left_side == 0)) {
                continue;
            }
            if (side) row = row.reverse();
            let max = row[0];
            if (max == max_size) {
                continue;
            }
            for (let i = 1; i < max_size; i++) {
                if (row[i] == max_size) {
                    side ? right_count++ : left_count++;
                    break;
                }
                if (max < row[i]) {
                    side ? right_count++ : left_count++;
                }
                max = Math.max(max, row[i]);
            }
        }
        return (left_side == 0 || left_side == left_count) && (right_side == 0 || right_side == right_count);
    }

    function checkAllRows(array) {

        for (let i = 0; i < max_size; i++) {
            let horizontal = [];
            for (let ii = 0; ii < max_size; ii++) {
                horizontal.push(array[i][ii]);
            }

            let vertical = [];
            for (let j = 0; j < max_size; j++) {
                vertical.push(array[j][i]);
            }
            if (!checkRow(horizontal, clues[max_size * 4 - 1 - i], clues[max_size + i]) || !checkRow(vertical, clues[i], clues[max_size * 3 - 1 - i])) {
                return false;
            }
        }
        return true;
    }
    function find_empty(array) {
        for (let i = 0; i < array.length; i++)
            for (let j = 0; j < array.length; j++) {
                if (array[i][j] == 0) {
                    return [i, j];
                }
            }
        return false;
    }

    function isAvailableNum(vertical, horizontal, num) {
        return ;
    }

    function fill(array) {
        let ij = find_empty(array);
        if (!ij) {
            return true;
        }
        let i = ij[0], j = ij[1];
        let horizontal = [];
        for (let ii = 0; ii < max_size; ii++) {
            horizontal.push(array[i][ii]);
        }

        let vertical = [];
        for (let row of array)
            vertical.push(row[j]);


        for (let num = 1; num <= max_size; num++) {
            if (!~vertical.indexOf(num) && !~horizontal.indexOf(num)) {
                array[i][j] = horizontal[j] = vertical[i] = num;
                let isRightRow = checkRow(horizontal, clues[max_size * 4 - 1 - i], clues[max_size + i]);
                isRightRow = isRightRow && checkRow(vertical, clues[j], clues[max_size * 3 - 1 - j]);
               
                if (isRightRow && fill(array)) {
                    return true;
                }
                array[i][j] = 0;
            }
        }
        return false;
    }
    array = [];
    for (let i = 0; i < max_size; i++) {
        let row = new Array(max_size).fill(0);
        array.push(row);
    }
    for (let j = 0; j < max_size; j++) {
        clues[j] == 1 ? array[0][j] = max_size : null;
        clues[max_size * 3 - j - 1] == 1 ? array[max_size - 1][j] = max_size : null;
        clues[max_size * 4 - 1 - j] == 1 ? array[j][0] = max_size : null;
        clues[j + max_size] == 1 ? array[j][max_size - 1] = max_size : null;
    }
    fill(array);
    return array;
}