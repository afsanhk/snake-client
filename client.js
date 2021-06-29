const net = require("net");
const {IP,PORT} = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:IP, // IP address here,
    port:PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // conn.on('connect', callback) => runs callback on connection to server
  conn.on('connect', () => console.log(`Successfully connected to the game server!`));
  conn.on('connect', () => conn.write(`Name: AHK`));
  
  
  // TEST CODE: conn.on('connect', () => setInterval(() => conn.write(`Move: up`),50));
  
  // conn.on('data', callback) => runs callback when data is received from server
  conn.on('data', (data) => console.log(`${data}`)); // Or console.log(data.toString())


  return conn;  
};

module.exports = {
  connect
}
