const testReduceSpeed = () => {
  const array = new Array(5).fill(null).map((_, index) => index);

  // Reduce 1
  console.time('Object 1');
  array.reduce((acc, cur) => {
    acc[cur] = cur;

    return acc;
  }, {});
  console.timeEnd('Object 1');

  // Reduce 2
  console.time('Object 2');
  array.reduce((acc, cur) => ({ ...acc, [cur]: cur }), {});
  console.timeEnd('Object 2');
};

testReduceSpeed(100);
testReduceSpeed(10000);
testReduceSpeed(1000000);
