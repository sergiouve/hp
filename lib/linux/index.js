const getBattery = require('./utils/getBattery');
const hasBattery = require('./hasBattery');

const battery = getBattery();

const linux = {
    hasBattery: hasBattery(battery)
};

module.exports = linux;
