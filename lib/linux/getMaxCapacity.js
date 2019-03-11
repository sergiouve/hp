const getBatteryValue = require('./utils/getBatteryValue');

const getMaxCapacity = async battery => {
    return parseInt(await getBatteryValue(battery, 'POWER_SUPPLY_ENERGY_FULL'));
}

module.exports = getMaxCapacity;
