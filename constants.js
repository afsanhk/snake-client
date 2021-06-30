const IP = '135.23.223.133';
const PORT = '50542';

// For local server:
// const IP = '10.0.2.15';
// const PORT = '50541';
module.exports = {
  IP,
  PORT,
}

// What else could this file have?
// 1. Perhaps the player's name/initials. That said, one could argue that this should be provided as a command line argument instead
// 2. The movement keys (W, A, S, D) could be added to constants like like MOVE_UP_KEY, etc.
// 3. What about the key mappings for messages?
// --- Every time a user presses the key 'x', it displays the message 'y'
// --- This seems like a mapping that's perfect for an object ({ x: "y" })
// --- Instead of using if statements to implement this, you can define an object (as a constant) which defines these message mappings. Your logic would change to simply lookup the appropriate mapping in the object, and if found, send the value as the message string