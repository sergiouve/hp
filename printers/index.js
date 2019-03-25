const raw = require('./raw');
const pretty = require('./pretty');

const printers = {
    raw: raw,
    pretty: pretty
};

module.exports = printers;
