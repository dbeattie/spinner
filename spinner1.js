// FULL REVOLUTION OF SPINNER
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 800);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1200);

setTimeout(() => {
  process.stdout.write('\r|   '); 
}, 1500);

setTimeout(() => {
  process.stdout.write('\r/   '); 
}, 1800);

setTimeout(() => {
  process.stdout.write('\r-   '); 
}, 2100);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 2400);

setTimeout(() => {
  process.stdout.write('\r|\   '); 
}, 2700);

setTimeout(() => {
  // Need to escape the line in Vagrant
  process.stdout.write('\n'); 
}, 3000);