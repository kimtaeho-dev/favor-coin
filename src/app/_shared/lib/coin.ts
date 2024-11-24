export function formatBitcoinToUsd(value: number) {
  if (value >= 1) {
    return parseFloat(value.toFixed(2)); // 1 이상: 소수점 2자리
  } else if (value >= 0.0001) {
    return parseFloat(value.toFixed(6)); // 0.0001 이상: 소수점 6자리
  } else {
    return parseFloat(value.toFixed(8)); // 그 외: 소수점 8자리
  }
}
