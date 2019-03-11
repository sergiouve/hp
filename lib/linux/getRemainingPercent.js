const getMaxCapacity = require('./getMaxCapacity');
const getCurrentCapacity = require('./getCurrentCapacity');

const getRemainingPercent = async battery => {
    const currentCapacity = await getCurrentCapacity(battery);
    const maxCapacity = await getMaxCapacity(battery);

    return parseFloat((currentCapacity / maxCapacity).toFixed(4));
}

module.exports = getRemainingPercent;
