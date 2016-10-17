const sphero = require('sphero')
const exec = require('child_process').exec;

function execute(command, cb){
  exec(command, (error, stdout, stderr) => {
    cb(stdout)
  })
}

execute('ls /dev/tty.Sphero*', (stdout) => {
  if (stdout) {
    init(stdout.replace('\n', ''))
  }
})

function init(port) {
  if (port) {
    const orb = sphero(port)
    orb.connect(() => {
      console.log('connected')
      orb.color('green')
      // have Sphero tell you when it detect collisions
      orb.detectCollisions()
      //
      orb.roll(150, 0)
    })
  }
}


/*orb.connect(() => {
  // when Sphero detects a collision, turn red for a second, then back to green
  orb.on("collision", function(data) {
    console.log("collision detected");
    console.log("  data:", data);

    orb.color("red");

    setTimeout(function() {
      orb.color("green");
    }, 100);
  });
})
*/
