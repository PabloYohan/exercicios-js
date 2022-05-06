function FizzBuzz(x) {
  if (x % 3 === 0 && x % 5 === 0) {
    return 'FizzBuzz';
  } else if (x % 3 === 0) {
    return 'Fizz';
  } else if (x % 5 === 0) {
    return 'Buzz';
  } else {
    return x;
  }
}

for (let i = 0; i <= 100; i++) {
  console.log(i, FizzBuzz(i));
}
