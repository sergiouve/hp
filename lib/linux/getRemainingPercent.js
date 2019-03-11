const getMaxCapacity = require('./getMaxCapacity');
const getCurrentCapacity = require('./getCurrentCapacity');

const getRemainingPercent = async battery => {
    const currentCapacity = await getCurrentCapacity(battery);
    const maxCapacity = await getMaxCapacity(battery);

    return currentCapacity / maxCapacity;
}

module.exports = getRemainingPercent;
