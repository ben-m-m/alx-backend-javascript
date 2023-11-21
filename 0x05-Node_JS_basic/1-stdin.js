
/*
*/
process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.trim();
  if (name.length > 0) {
    console.log(`Your name is: ${name}`);
  } else {
    console.log('Your name is: ');
  }
});

process.on('SIGINT', () => {
  console.log('\nThis important software is now closing');
  process.exit(0);
});
