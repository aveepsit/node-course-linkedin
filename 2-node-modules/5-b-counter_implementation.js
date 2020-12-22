const counter = require("./5-a-counter");

counter.inc();
counter.inc();
counter.inc();
console.log(counter.getCount());
counter.inc();
counter.inc();
console.log(counter.getCount());
counter.dec();
counter.dec();
console.log(counter.getCount());
