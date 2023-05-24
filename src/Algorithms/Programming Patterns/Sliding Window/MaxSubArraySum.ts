export function MaxSubArraySum(numArray: number[], n: number): number | null {
  if (n > numArray.length) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += numArray[i];
  }
  tempSum = maxSum;
  for (let i = n; i < numArray.length; i++) {
    tempSum = tempSum - numArray[i - n] + numArray[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
