export function SumRange(range: number): number {
  if (range === 1) return 1;
  return range + SumRange(range - 1);
}
