const blankline = '  |   |  ';
const guessline = '1 |   |  ';
const bombline = '  | B |  ';

console.log('This is what an empty board would look like:');
console.log(blankline + '\n' + blankline + '\n' + blankline);

console.log('This is what a board with a guess and a bomb on it would look like:');
console.log(`${guessline}\n${bombline}\n${blankline}`);
