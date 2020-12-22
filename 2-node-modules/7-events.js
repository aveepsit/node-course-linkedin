const events = require("events");

// EventEmitter provides a way to emit events.
// Events are asynchronous and can be queued as they occur.
const emitter = new events.EventEmitter();

// on provides a means to capture and treat events using handler functions.
// First arg defines a string name of event and the callback function as the 2nd.
emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

// Emit emits events as they occur.
emitter.emit("customEvent", "Hello World!", "Computer");
emitter.emit("customEvent", "That's pretty Cool", "Alex");

// Lets see the asynchronous nature of events.
console.log("\nEnter Messages. EXIT to exit program:");
process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "EXIT") {
    emitter.emit("customEvent", "GoodBye!", "Process");
    process.exit(0);
  }
  emitter.emit("customEvent", input, "Terminal");
});
