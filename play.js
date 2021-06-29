const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
obj = connect()
setupInput(obj);