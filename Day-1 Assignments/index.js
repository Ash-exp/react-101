const orderData = {
  'Below 500': 60,
  '500-1000': 50,
  '1000-1500': 60,
  '1500-2000': 20,
  'Above 2000': 60,
};

let total = 0;
for (const orders of Object.values(orderData)) {
  total += orders;
}
console.log('Total order count is:', total);

let proportionCount = 0;
for (const proportion of Object.keys(orderData)) {
  proportionCount += 1;
}
console.log('Total order count is:', proportionCount);

let percentageList = [];
Object.values(orderData).forEach((order, index) => {
  percentageList.push({
    id: index,
    order: order,
    orderPercentage: ((order * 1.0) / total) * 100,
  });
});
console.log('Total order count is:', percentageList);
