PORT="ls /dev/tty.Sphero*"
echo $PORT
MYPORT=$PORT node src/sphero-index.js
