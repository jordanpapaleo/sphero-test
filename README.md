## [Cylon JS Docs](https://cylonjs.com/documentation/drivers/sphero/)

## How to Connect on OSX

In order to allow Cylon.js running on your Mac to access the Sphero, go to:

`Bluetooth > Open Bluetooth Preferences > Sharing Setup`

Make sure that "Bluetooth Sharing" is checked.

First pair your computer and Sphero. You can do this using bluetooth preferences.

**Sphero won't stay connected**

Find out serial port address by running this command: `ls /dev/tty.Sphero*`

The port will look something like this: `/dev/tty.Sphero-BBP-AMP-SPP`

Now you are ready to run the example code, be sure to update this line with the correct port:

```
connections: {
  sphero: {
    adaptor: "sphero",
    port: "/dev/tty.Sphero-BBP-AMP-SPP"
  }
},
```
