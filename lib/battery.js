const exec = require('child_process').exec;
const linux = require('./linux');

const platforms = {
    linux: linux
};

const isSupportedPlatform = platform => {
    return ['linux', 'darwin', 'windows'].includes(platform);
}

const battery = async callback => {
    const platform = process.platform;

    if (! isSupportedPlatform(platform)) {
        throw new Error(`${platform} is not currently supported :(`);
    }

    return {
        hasBattery: await platforms[platform].hasBattery,
        isCharging: await platforms[platform].isCharging,
        maxCapacity: await platforms[platform].maxCapacity,
        currentCapacity: await platforms[platform].currentCapacity,
        percent: await platforms[platform].percent,
        timeRemaining: await platforms[platform].timeRemaining
    };
};

module.exports = battery;
