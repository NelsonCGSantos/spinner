const spinnerChars = ['|', '/', '-', '\\'];
let delay = 100;


for (let i = 0; i < 4; i++) {   //spinning 4 times
  for (const char of spinnerChars) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay);
    delay += 200;
  }
}
