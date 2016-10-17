const Cylon = require('cylon')

Cylon.robot({
  connections: {
    sphero: {
      adaptor: 'sphero',
      port: '/dev/tty.Sphero-YBP-AMP-SPP' }
  },
  devices: {
    sphero: { driver: 'sphero' }
  },
  work (my) {
    console.log(my)
    every((1).second(), () => {
      my.sphero.roll(60, Math.floor(Math.random() * 360))
    })
  }
}).start()
