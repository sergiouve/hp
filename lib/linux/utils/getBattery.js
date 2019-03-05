const fs = require('fs');
const { exec } = require('child_process');

const getBatteryPath = () => {
    return ['BAT1', 'BAT0'].map(directory => {
        const path = `/sys/class/power_supply/${directory}/uevent`;
        if (fs.existsSync(path)) return path;

        return;
    }).join('');
};

const getBattery = () => {
    return new Promise((resolve, reject) => {
        const info = exec(`cat ${getBatteryPath()}`);
        info.stdout.on('data', data => { resolve(data) });
    });
};

module.exports = getBattery;
