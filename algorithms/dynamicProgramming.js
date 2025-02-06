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

function fibonacciBottomUp(n) {
  const fibArray = [];

  fibArray[0] = 0;
  fibArray[1] = 1;

  for (let i = 2; i <= n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  return fibArray[n];
}

console.log(fibonacciBottomUp(40));
