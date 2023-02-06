const testVar = [1, 2, 3, 4];

function sumFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumFor(testVar));

function sumWhile(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(testVar));

function sumRecursion(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRecursion(arr.slice(1, arr.length));
}
console.log(sumRecursion(testVar));

function sumTheSimpleWay(arr) {
  return _.reduce(arr, function (memo, num) { return memo + num; });
}
console.log(sumTheSimpleWay(testVar));
