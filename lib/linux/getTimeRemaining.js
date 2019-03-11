const getBatteryValue = require('./utils/getBatteryValue');
const getCurrentCapacity = require('./getCurrentCapacity');
const getMaxCapacity = require('./getMaxCapacity');

const getTimeRemaining = async battery => {
    const energy = await getBatteryValue(battery, 'POWER_SUPPLY_ENERGY_NOW');
    const power = await getBatteryValue(battery, 'POWER_SUPPLY_POWER_NOW');

    if (energy && power) {
        return Math.floor(energy / power * 360);
    }

    const currentCapacity = await getCurrentCapacity(battery);
    const maxCapacity = await getMaxCapacity(battery);
}

module.exports = getTimeRemaining;
