const getBatteryValue = require('./utils/getBatteryValue');

const isCharging = async battery => {
    return (await getBatteryValue(battery, 'POWER_SUPPLY_STATUS')).toLowerCase() === 'charging';
};

module.exports = isCharging;
