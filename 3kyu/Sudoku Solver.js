function find_empty(puzzle) {
	for (let i = 0; i < puzzle.length; i++) {
		for (let j = 0; j < puzzle.length; j++) {
			if (puzzle[i][j] == 0) {
				return [i, j];
			}
		}
	}
	return false;
}

function inBox(puzzle, rowBox, colBox, num) {
	for (let i = 0; i < 3; i++)
		for (let j = 0; j < 3; j++)
			if (puzzle[i + rowBox][j + colBox] == num)
				return true;
}

function isAvailableNum(puzzle, i, j, num, ) {
	const horizontal = puzzle[i],
		vertical = [];
	for (let row of puzzle)
		vertical.push(row[j]);

	return !~vertical.indexOf(num) && !~horizontal.indexOf(num) && !inBox(puzzle, i - i % 3, j - j % 3, num);
}


function fill(puzzle) {
	let ij = find_empty(puzzle);
	if (!ij) {
		return true;
	}

	let i = ij[0],
		j = ij[1];
	for (let num = 1; num <= 9; num++) {
		if (isAvailableNum(puzzle, i, j, num)) {
			puzzle[i][j] = num;
			if (fill(puzzle)) {
				return true;
			}
			puzzle[i][j] = 0;
		}
	}
	return false;
}

function sudoku(puzzle) {
	fill(puzzle);
	return puzzle;
}