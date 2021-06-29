const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:"10.0.2.15", // IP address here,
    port:'50541' // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // conn.on('connect', callback) => runs callback on connection to server
  conn.on('connect', () => console.log(`Successfully connected to the game server!`));
  conn.on('connect', () => conn.write(`Name: AHK`));
  // conn.on('data', callback) => runs callback when data is received from server
  conn.on('data', (data) => console.log(`${data}`)); // Or console.log(data.toString())


  return conn;
};

module.exports = {
  connect
}
