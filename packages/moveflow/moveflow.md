# documents

## 选择流

```ts
if (currentTime < stopTimeMs) {
    return StreamStatus.Streaming;
  }
```

## 已经释放的 token

```ts
export const getCurTimeStreamed = (stream: any) => {  
  const lastTime = Number(calculateLastUnlockDate(
    new Date(stream.startTime)?.getTime() ?? 0,
    parseInt(stream.interval?.toString() ?? 0),
    new Date(stream.stopTime)?.getTime() ?? 0,
  )) / 1000;


  const curTime = new Date().getTime().toString();
  let startTime = (new Date(stream.startTime)?.getTime() / 1000).toString();
  const endTime = (new Date(stream.stopTime)?.getTime() / 1000).toString();
  let cliff_amount = stream.cliff_amount;

  if (startTime && curTime < startTime) {
    return "0";
  }

  if (stream.status === "Paused" || stream.status === "Canceled") {
    return stream.withdrawnAmount;
  }

  if (stream.last_withdraw_time) {
    // Safely handle acc_paused_time by providing a default of 0
    const accPausedTime = stream.pause_info?.acc_paused_time ?? "0";
    startTime = BigNumber(stream.last_withdraw_time).plus(accPausedTime).toString();
  }

  if (endTime && curTime > endTime) {
    return stream.depositAmount;
  }

  if (parseFloat(stream.withdrawnAmount) > 0) {
    cliff_amount = stream.withdrawnAmount;
  }

  const curTimeBN = new BigNumber(lastTime);
  const startTimeBN = new BigNumber(startTime ?? "0");
  const intervalBN = new BigNumber(stream.interval);
  const ratePerIntervalBN = new BigNumber(parseFloat(stream.ratePerInterval) / (stream.unit ?? 1));
  const cliffAmountBN = new BigNumber(cliff_amount);

  let timeElapsed = curTimeBN.minus(startTimeBN);
  if (Number(timeElapsed) < 0) {
    timeElapsed = BigNumber(0);
  }
  const periods = timeElapsed.dividedBy(intervalBN);
  const earned = periods.times(ratePerIntervalBN);
  return cliffAmountBN.plus(earned).toString();
};
```
