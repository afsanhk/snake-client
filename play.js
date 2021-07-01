const { connect } = require('./client');
const { setupInput } = require('./input');


console.log("Connecting ...");
setupInput(connect()); //Setup input takes the returned object from connect() as an input, so that the stdin keystrokes can be communicated to the server!