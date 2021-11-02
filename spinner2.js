process.stdout.write("\rhello prabhu we are loading\n");
const spinner = "|/-|/-|/-|/-|/-|/-|/-|/-|/-|/-|/-|/-|/-";
let delay = 100;
let newline = spinner + "\n";
for (let i of newline) {
  delay += 200;
  setTimeout(() => {
    process.stdout.write(`\r${i}`);
  }, delay);
}
