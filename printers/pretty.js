const pretty = output => {
    const percent = output.percent;
    let bar = '[====================]';

    // TODO
    const toRemove = 2 - output.percent;

    const final = `${bar} ${parseFloat(percent * 100).toFixed(2)} %`

    console.log(final);
};

module.exports = pretty;
