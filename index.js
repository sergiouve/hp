const battery = require('./lib/battery');

battery().then(info => {
  console.log(info);
});
