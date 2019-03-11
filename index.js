const battery = require('./lib/battery');
const printers = require('./printers');
const readFlag = require('./utils/readFlag');

battery().then(rawData => {
    const printer = readFlag('format');

    if (! printer) {
        console.log(rawData);
        return;
    }

    printers[printer](rawData);
});
