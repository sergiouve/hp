const hasBattery = require('./hasBattery');
const getCurrentCapacity = require('./getCurrentCapacity');
const getBattery = require('./utils/getBattery');

const battery = getBattery();

const linux = {
    hasBattery: hasBattery(battery),
    currentCapacity: getCurrentCapacity(battery)
};

module.exports = linux;
