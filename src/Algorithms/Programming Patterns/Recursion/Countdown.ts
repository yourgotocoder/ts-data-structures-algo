export function Countdown(start: number): void {
  if (start === 0) {
    return;
  }
  console.log(start);
  start--;
  Countdown(start);
}

Countdown(5);
