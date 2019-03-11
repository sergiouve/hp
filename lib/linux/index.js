const hasBattery = require('./hasBattery');
const isCharging = require('./isCharging');
const getCurrentCapacity = require('./getCurrentCapacity');
const getMaxCapacity = require('./getMaxCapacity');
const getBattery = require('./utils/getBattery');

const battery = getBattery();

const linux = {
    hasBattery: hasBattery(battery),
    isCharging: isCharging(battery),
    currentCapacity: getCurrentCapacity(battery),
    maxCapacity: getMaxCapacity(battery)
};

module.exports = linux;
