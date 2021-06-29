// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// We expect key strokes to be input to this function. 
const handleUserInput = function (key) {
    switch (key){
      case '\u0003':
        process.exit();
      case 'w':
        connection.write(`Move: up`);
        break;
      case 'a':
        connection.write(`Move: left`);
        break;
      case 's':
        connection.write(`Move: down`);
        break;
      case 'd':
        connection.write(`Move: right`);
        break;
      case 'g':
        connection.write(`Say: TIME TO CRASH`);
        break;
      case 'f':
        connection.write(`Say: FOOD PLS`);
        break;
      case '2':
        connection.write(`Say: Hiss My Good Sir`);
        break;
      case '1':
        connection.write(`Say: jsNotPython`);
        break;
    };
};

module.exports = {
  setupInput
}