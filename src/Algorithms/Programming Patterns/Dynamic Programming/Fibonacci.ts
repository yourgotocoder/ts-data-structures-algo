export function Fibonacci(n: number, cache: number[] = []): number {
  // if (cache[n] !== undefined) return cache[n];
  // if (n <= 2) return 1;
  // let result = Fibonacci(n - 1, cache) + Fibonacci(n - 2, cache);
  // cache[n] = result;
  // return result;
  if (n <= 2) return 1;
  let fibCache: number[] = [0, 1, 1];
  for (let cacheIndex = 3; cacheIndex <= n; cacheIndex++) {
    fibCache[cacheIndex] = fibCache[cacheIndex - 1] + fibCache[cacheIndex - 2];
  }
  return fibCache[n];
}
const start = performance.now();

console.log(Fibonacci(10000));
console.log(`Time taken: ${(performance.now() - start) / 1000} sec`);
