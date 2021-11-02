process.stdout.write("hello from spinner1.js... \rheyyy\n");
const spinner = ["|", "/", "-", "|", "/", "-", "|", "/", "-", "|", "/", "-"];
let delay = 100;
for (let i of spinner) {
  delay += 200;
  setTimeout(() => {
    process.stdout.write(`\r${i}   `);
  }, delay);
}
