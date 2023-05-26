export function Factorial(n: number): number {
  if (n === 1 || n <= 0) return 1;
  return n * Factorial(n - 1);
}
