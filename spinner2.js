// ARRAY WITH \r COMMAND FOR SPINNER CREATION AND \n TO EXIT THE LINE AT THE END
const cycle = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|\   ", "\n"];

let delay = 0;

for (const char of cycle) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 300)
};