function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((acc, currentNumber) => acc + currentNumber, 0);
  let avg = Number((sum / arr.length).toFixed(2));

  return arr.length === 0 ? 0 : { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.length === 0
    ? 0
    : arr.reduce((acc, currentNumber) => acc + currentNumber, 0);
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return arr.length === 0 ? 0 : max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return arr.length === 0 ? 0 : sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }

  return arr.length === 0
    ? 0
    : Number((sumEvenElement / countEvenElement).toFixed());
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    const functionResult = func(...arrOfArr[i]);
    if (functionResult > maxWorkerResult) {
      maxWorkerResult = functionResult;
    }
  }

  return maxWorkerResult;
}
