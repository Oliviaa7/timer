const args = process.argv.slice(2);

for (const arg of args) {
  if (arg >= 0) {

    let timer = arg * 1000;
  
    setTimeout(() => {
      process.stdout.write("\x07");
    }, timer);
  }
}