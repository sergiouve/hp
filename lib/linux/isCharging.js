const getBatteryValue = require('./utils/getBatteryValue');

const isCharging = async battery => {
    const powerSupplyStatus =  await getBatteryValue(battery, 'POWER_SUPPLY_STATUS');
    return powerSupplyStatus.toLowerCase() === 'charging';
};

module.exports = isCharging;
