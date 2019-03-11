const hasBattery = require('./hasBattery');
const isCharging = require('./isCharging');
const getCurrentCapacity = require('./getCurrentCapacity');
const getMaxCapacity = require('./getMaxCapacity');
const getRemainingPercent = require('./getRemainingPercent');
const getTimeRemaining = require('./getTimeRemaining');
const getBattery = require('./utils/getBattery');

const battery = getBattery();

const linux = {
    hasBattery: hasBattery(battery),
    isCharging: isCharging(battery),
    maxCapacity: getMaxCapacity(battery),
    currentCapacity: getCurrentCapacity(battery),
    percent: getRemainingPercent(battery),
    timeRemaining: getTimeRemaining(battery)
};

module.exports = linux;
