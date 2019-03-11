const getBatteryValue = require('./utils/getBatteryValue');

const getCurrentCapacity = async battery => {
    return parseInt(await getBatteryValue(battery, 'POWER_SUPPLY_ENERGY_NOW'));
}

module.exports = getCurrentCapacity;
