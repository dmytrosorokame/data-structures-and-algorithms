let counter = 0;

let memo = [];

function fibonacci(n) {
  if (memo[n] !== undefined) {
    return memo[n];
  }

  counter++;

  if (n < 2) {
    return n;
  }

  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);

  return memo[n];
}

console.log(fibonacci(40));
console.log("Counter", counter);
