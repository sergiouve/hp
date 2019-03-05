const fs =require('fs');
const exec = require('child_process').exec;

const getBatteryPath = async () => {
    return ['BAT1', 'BAT0'].map(directory => {
        const path = `/sys/class/power_supply/${directory}/uevent`;
        if (fs.existsSync(path)) return path;

        return;
    }).join('');
};

const getBattery = async () => {
    const path = await getBatteryPath();
    const info = await exec(`cat ${path}`);

    console.log(info);
};

module.exports = getBattery;
