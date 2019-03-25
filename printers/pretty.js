const { EOL } = require('os');

const pretty = output => {
    const nCells = 20;
    const percent = output.percent;
    const filledCells = parseInt(nCells * output.currentCapacity / output.maxCapacity);
    const bar = Array.apply(null, { length: nCells }).map((cell, index) => {
        if (index < filledCells) return '=';
        if (index === filledCells) return '-';

        return ' ';
    }).reduce((result, cell) => result + cell, '');

    const prettied = `[${bar}] ${parseFloat(percent * 100).toFixed(2)}% ${EOL}${output.timeRemaining} mins left`

    return prettied;
};

module.exports = pretty;
