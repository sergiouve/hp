const readFlag = flag => {
    const needle = process.argv.filter(entry => {
        return entry.split('=')[0] === `--${flag}`;
    })[0];

    if (needle) {
        return needle.split('=')[1];
    }

    return null;
};

module.exports = readFlag;
