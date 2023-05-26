export function Countdown(start: number): number[] {
  if (start === 0) {
    return [];
  }
  let arr = [start];
  return arr.concat(Countdown(--start));
}
