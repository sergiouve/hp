const getBatteryValue = async (battery, needle) => {
    const stdout = await battery;

    return stdout.split("\n").reduce((result, line) => {
        const [key, value] = line.split('=');
        if (key === needle) return result + value;
        return result;
    }, '');
};

module.exports = getBatteryValue;
