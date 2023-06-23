export function Fibonacci(n: number, cache: number[]): number {
  if (cache[n] !== undefined) return cache[n];
  if (n <= 2) return 1;
  let result = Fibonacci(n - 1, cache) + Fibonacci(n - 2, cache);
  cache[n] = result;
  return result;
}
const start = performance.now();

console.log(Fibonacci(45, []));
console.log(`Time taken: ${(performance.now() - start) / 1000} sec`);
