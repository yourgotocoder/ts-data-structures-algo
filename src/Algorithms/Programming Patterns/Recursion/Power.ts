export function Power(n: number, power: number): number {
  if (power === 0) return 1;
  return n * Power(n, power - 1);
}
