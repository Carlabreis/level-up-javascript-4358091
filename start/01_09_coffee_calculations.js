// Write your code here
function totalBill(arr){
  let total = arr.reduce((acc, cur) => (acc += cur)
  );
  return `The total bill is ${total*1.25}`;
}

console.log(totalBill([1,2,3]));