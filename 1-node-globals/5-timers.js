// Timing using a single time timeout event.

const wait_time = 3000;
console.log(`setting a ${wait_time / 1000} second delay`);

const timer_finished = () => {
  clearInterval(interval); // This has been added later to stop the indefinite interval event once done is reached.
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("Done!!");
};

setTimeout(timer_finished, wait_time);

// Timing using an interval timer that reports time intervals.
const wait_interval = 500;
let current_time = 0;
const inc_time = () => {
  current_time += wait_interval;
  const p = Math.floor((current_time / wait_time) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting...${p}%`);
};

const interval = setInterval(inc_time, wait_interval);
