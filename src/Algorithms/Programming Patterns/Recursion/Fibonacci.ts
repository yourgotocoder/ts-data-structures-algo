export function Fibonacci(n: number): number {
  if (n === 1 || n === 2) return 1;
  return Fibonacci(n - 2) + Fibonacci(n - 1);
}
console.log(Fibonacci(10));
