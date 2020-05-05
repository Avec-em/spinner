let time = 0;
let animation = [('\r|   '), ('\r/   '), ('\r-   '), ('\r \\  '), ('\r|   '), ('\r/   '), ('\r-   '), ('\r \\  '), ('\r|   '), ('\n')];

for (const char of animation) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  //console.log(time);
  time += 200;
};