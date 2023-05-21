export function SumToNIterative(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  // Running time is linear i.e O(n)
  return sum;
}

export function SumToNMathematical(n: number): number {
  // Running time is constant i.e O(1)
  return n * (n + 1) / 2;
}
