// FULL REVOLUTION OF SPINNER
const cycle = ["\r|", "\r/", "\r-", "\r\\", "\r|", "\r/", "\r-", "\r\\", "\r|\ "];
let delay = 0;
for (const char of cycle) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 200)
};

//"\r|   \r/   \r-   \r\\   \r|   \r/  \r-   \r\\   \r|\   "

//"\r|" + "\r/" + "\r-" + "\r\\" + "\r|" + "\r/" + "\r-" + "\r\\" + "\r|\ "