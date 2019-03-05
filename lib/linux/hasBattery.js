const getBatteryValue = require('./utils/getBatteryValue');

const hasBattery = async battery => {
    return !! await getBatteryValue(battery, 'POWER_SUPPLY_PRESENT');
}

module.exports = hasBattery;
