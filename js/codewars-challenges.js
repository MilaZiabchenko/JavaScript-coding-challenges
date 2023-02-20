// Lucky Bus Ticket

const isLucky = digits => {
  digits = digits.toString();

  let firstHalf = 0;
  let secondHalf = 0;

  for (let i = 0; i < digits.length / 2; i++) {
    firstHalf += Number(digits[i]);
  }

  for (let j = digits.length / 2; j < digits.length; j++) {
    secondHalf += Number(digits[j]);
  }

  return firstHalf === secondHalf;
};

console.log(isLucky(123_456));
console.log(isLucky(123_321));
console.log(isLucky(123_303));

// Maximum Product

const adjacentElementsMaxProduct = array => {
  let productsArr = [];

  for (let i = 0; i < array.length - 1; i++) {
    productsArr.push(array[i] * array[i + 1]);
  }

  return Math.max(...productsArr);
};
console.log(
  adjacentElementsMaxProduct([1, 55, 17, 77, 709, 95, -10, 100, 205])
);

// Delete occurrences of an element if it occurs more than n times

const deleteNth = (array, n) => {
  const newArray = [...array];

  newArray.map(el => {
    let arrOfDuplicates = newArray.filter(num => num === el);

    if (arrOfDuplicates.length > n) {
      for (let i = 0; i < arrOfDuplicates.length - n; i++) {
        newArray.splice(newArray.lastIndexOf(el), 1);
      }
    }
  });

  return newArray;
};

console.log(deleteNth([1, 1, 1, 1, 2], 2));
console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([10, 17, 10, 18, 2], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));

// Highest Scoring Word

const findHighestScoringWord = sentence => {
  const words = sentence.split(' ');
  const alphabetMap = {};

  for (let i = 'A'.charCodeAt(), j = 0; i <= 'z'.charCodeAt(); i++, j++) {
    alphabetMap[i] = j;
  }

  const highestScoringWord = { word: '', score: 0 };

  words.forEach(word => {
    const chars = word.split('');

    const sumOfUnicodeValuesOfTheWord = chars.reduce(
      (count, char) => count + alphabetMap[char.charCodeAt()],
      0
    );

    if (sumOfUnicodeValuesOfTheWord > highestScoringWord.score) {
      highestScoringWord.word = word;
      highestScoringWord.score = sumOfUnicodeValuesOfTheWord;
    }
  });

  return highestScoringWord.word;
};

console.log(findHighestScoringWord('Man, I need a taxi up to Venice'));
console.log(findHighestScoringWord('We are climbing up the volcano Vesuvius'));

// Palindrome for your Dome

const palindrome = string => {
  const re = /[\W_]/g;
  const lowRegStr = string.toLowerCase().replace(re, '');
  const splittedStr = lowRegStr.split('');

  let reversedStrArr = [];

  for (let i = splittedStr.length - 1; i >= 0; i--) {
    reversedStrArr.push(splittedStr[i]);
  }

  const reversedStr = reversedStrArr.join('');

  return reversedStr === lowRegStr;
};

console.log(palindrome('A man, a plan, a canal. Panama'));
console.log(palindrome('A man, a plan, a canal. Panama!'));
console.log(palindrome('A man, a plan, a canal. Panamas'));

let word = 'RaceCar';

console.log(palindrome(word));
console.log(word.toLowerCase().split('').reverse().join(''));

// Extract the domain name from URL

const domainName = url =>
  url
    .split('://')[1]
    .replace('www.', '')
    .replace('.com', '')
    .split('/')[0]
    .split('.')[0];

console.log(domainName('http://google.co.jp'));
console.log(domainName('http://github.com/carbonfive/raygun'));
console.log(domainName('http://www.zombie-bites.com'));
console.log(domainName('https://www.cnet.com'));

// Split Strings

const splitStringIntoPairs = string => {
  const array = string.split('');

  if (array.length % 2 !== 0) {
    array.push('_');
  }

  const subArr = [];

  for (let i = 0; i < array.length; i += 2) {
    subArr.push(array[i] + array[i + 1]);
  }

  return subArr;
};

console.log(splitStringIntoPairs('abcdef12345'));

// Case Swapping

const swapCase = string => {
  const array = string.split('');
  const newArr = [];

  for (let el of array) {
    if (el === el.toLowerCase()) {
      newArr.push(el.toUpperCase());
    } else if (el === el.toUpperCase()) {
      newArr.push(el.toLowerCase());
    } else {
      newArr.push(el);
    }
  }

  return newArr.join('');
};

console.log(swapCase(`Hey, how's Michaela?`));

// Moving Zeros To The End

const moveZerosToTheEnd = array => {
  const arrOfNonZeros = [];
  const arrOfZeros = [];

  array.map(num =>
    num !== 0 ? arrOfNonZeros.push(num) : arrOfZeros.push(num)
  );

  return arrOfNonZeros.concat(arrOfZeros);
};

console.log(moveZerosToTheEnd([1, 0, 2, 0, 0, 3]));

// Find the Parity Outlier

const findParityOutlier = integers => {
  const arrOfEven = [];
  const arrOfOdd = [];

  integers.map(integer =>
    integer % 2 === 0 ? arrOfEven.push(integer) : arrOfOdd.push(integer)
  );

  if (arrOfEven.length === 1) {
    return `${arrOfEven[0]} is an outlier`;
  } else if (arrOfOdd.length === 1) {
    return `${arrOfOdd[0]} is an outlier`;
  } else {
    return `No outliers here :)`;
  }
};

console.log(findParityOutlier([1, 3, 5, 7]));
console.log(findParityOutlier([1, 3, 5, 7, 8]));
console.log(findParityOutlier([2, 4, 5, 6, 8]));

// Who likes it?

const whoLikesIt = names => {
  if (!Array.isArray(names) || names.length <= 0) return;

  switch (names.length) {
    case 0:
      return 'No one likes it';
    case 1:
      return `${names[0]} likes it`;
    case 2:
      return `${names[0]} and ${names[1]} like it`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like it`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like it`;
  }
};

console.log(whoLikesIt(['Mila', 'Leo']));

// Convert string to camel case

const toCamelCase = string => {
  const newArr = [];

  const createNewStr = sign => {
    const splittedStr = string.split(sign);

    splittedStr.map(word => {
      splittedStr.indexOf(word) === 0
        ? newArr.push(word)
        : newArr.push(`${word.charAt(0).toUpperCase()}${word.slice(1)}`);
    });
  };

  if (string.includes('-')) {
    createNewStr('-');

    return newArr.join('');
  } else if (string.includes('_')) {
    createNewStr('_');

    return newArr.join('');
  } else {
    return string;
  }
};

console.log(toCamelCase('_some_variable'));
console.log(toCamelCase('Strange-naming'));

// Peak array index

const peak = array => {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    if (
      array.slice(0, i).reduce((total, current) => total + current, 0) ===
      array.slice(i + 1).reduce((total, current) => total + current, 0)
    ) {
      index = i;
    }
  }

  return index;
};

console.log(peak([1, 2, 3, 5, 3, 2, 1]));
console.log(peak([1, 12, 3, 3, 6, 3, 1]));
console.log(peak([10, 20, 30, 40]));

// Valid Braces

const validBraces = braces => {
  let tracer = [];

  for (let brace of braces) {
    if (brace === '(' || brace === '{' || brace === '[') {
      tracer.push(brace);

      if (tracer.length === 0) return false;
    } else {
      let lastBrace = tracer[tracer.length - 1];

      if (
        (lastBrace === '[' && brace === ']') ||
        (lastBrace === '{' && brace === '}') ||
        (lastBrace === '(' && brace === ')')
      ) {
        tracer.pop();
      } else {
        break;
      }
    }
  }

  return tracer.length === 0;
};

console.log(validBraces('()'));
console.log(validBraces('(){}[]'));
console.log(validBraces('([{}])'));
console.log(validBraces('[({})](]'));
console.log(validBraces('[(])'));
console.log(validBraces('(}'));

// Find the Order Breaker

const findOrderBreaker = array => {
  for (let i = 0; i < array.length; i++) {
    const [prevItem, currentItem, nextItem] = [
      array[i - 1],
      array[i],
      array[i + 1]
    ];

    if (
      (prevItem <= nextItem &&
        (prevItem > currentItem || currentItem > nextItem)) ||
      (!prevItem && currentItem > nextItem) ||
      (!nextItem && prevItem > currentItem)
    ) {
      return currentItem;
    }
  }
};

console.log(findOrderBreaker([1, 3, 5, 8, 7, 9]));
console.log(findOrderBreaker([1, 5, 3, 7, 9, 10]));

// Sort the odd

const sortTheOdd = array => {
  const tempArr = [];
  const arrOfOdds = [];
  const sortedArray = [];

  array.map(el => {
    if (el % 2 === 0) {
      tempArr.push(el);
    } else {
      tempArr.push('');
      arrOfOdds.push(el);
    }
  });

  tempArr.map(el => sortedArray.push(el));
  arrOfOdds.sort((a, b) => a - b);

  sortedArray.map(el => {
    if (el === '') {
      for (let elem of arrOfOdds) {
        sortedArray.splice(sortedArray.indexOf(el), 1, elem);
      }
    }
  });

  return sortedArray;
};

console.log(sortTheOdd([7, 1]));
console.log(sortTheOdd([5, 8, 6, 3, 4]));
console.log(sortTheOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// The maximum sum value of ranges

const calcMaxSum = (array, ranges) => {
  let maxSum = -Infinity;
  let currentSum = 0;

  ranges.forEach(([from, to]) => {
    for (let i = from; i <= to; i++) {
      currentSum += array[i];
    }

    currentSum > maxSum && (maxSum = currentSum);
    currentSum = 0;
  });

  return maxSum;
};

const ranges = [
  [1, 3],
  [0, 4],
  [6, 8]
];

console.log(calcMaxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], ranges));

// Pair of gloves

const countPairs = gloves => {
  const obj = gloves.reduce(
    (acc, glove) => ({
      ...acc,
      [glove]: acc[glove] ? acc[glove] + 1 : 1
    }),
    {}
  );

  let count = 0;

  for (let item in obj) {
    count += Math.floor(obj[item] / 2);
  }

  return count;
};

console.log(countPairs(['red', 'green', 'blue']));
console.log(countPairs(['red', 'green', 'red', 'blue', 'blue']));
console.log(countPairs(['red', 'red', 'red', 'red', 'red', 'red']));

const findAllGlovesOfAColor = (gloves, color) =>
  gloves.reduce((acc, cur) => acc + (cur === color ? 1 : 0), 0);

console.log(
  findAllGlovesOfAColor(
    ['green', 'red', 'green', 'red', 'blue', 'blue', 'green'],
    'green'
  )
);
console.log(
  findAllGlovesOfAColor(
    ['green', 'red', 'green', 'red', 'blue', 'blue', 'green'],
    'black'
  )
);

// zipWith

const zipWith = (fn, arr1, arr2) => {
  const array = [];

  const minLength = Math.min(arr1.length, arr2.length);

  for (let i = 0; i < minLength; i++) {
    array.push(fn(arr1[i], arr2[i]));
  }

  return array;
};

console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]));
console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]));
console.log(zipWith((a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3]));

// Product of consecutive Fib numbers

const productFib = prod => {
  const res = [];
  const sequence = [0, 1];

  for (let i = 2; i <= Math.sqrt(prod); i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }

  for (let j = 0; j < sequence.length; j++) {
    if (sequence[j] * sequence[j + 1] === prod) {
      res.push(sequence[j], sequence[j + 1], true);
    }
    if (
      sequence[j - 1] * sequence[j] < prod &&
      sequence[j] * sequence[j + 1] > prod
    ) {
      res.push(sequence[j], sequence[j + 1], false);
    }
  }

  return res;
};

console.log(productFib(714));
console.log(productFib(800));

// Sum of Intervals

const sumIntervals = intervals => {
  const newIntervals = [];
  let topInterval = null;
  let sum = 0;

  const sortedIntervals = intervals.sort((prev, next) => prev[0] - next[0]);

  newIntervals.push(sortedIntervals[0]);

  for (let i = 1; i < sortedIntervals.length; i++) {
    topInterval = newIntervals[newIntervals.length - 1];

    if (topInterval[1] < sortedIntervals[i][0]) {
      newIntervals.push(sortedIntervals[i]);
    } else if (topInterval[1] < sortedIntervals[i][1]) {
      topInterval[1] = sortedIntervals[i][1];
    }
  }

  newIntervals.forEach(([start, end]) => (sum += end - start));

  return sum;
};

console.log(
  sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15]
  ])
);

console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5]
  ])
);

console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
  ])
);

// Object extend

const getExtendedObjectOfFirstInstanceOfEachPropertyAndValue = (...objects) => {
  let entries = objects
    .filter(obj => obj instanceof Object)
    .map(obj => Object.entries(obj));

  const filterEntries = entries => {
    const newEntries = entries
      .reduce((prev, cur) => prev.concat(cur), [])
      .sort((prev, next) =>
        prev[0] === next[0] ? 0 : prev[0] < next[0] ? -1 : 1
      );

    for (let i = 0; i < newEntries.length - 1; i++) {
      newEntries[i + 1][0] === newEntries[i][0] &&
        newEntries.splice(newEntries.indexOf(newEntries[i + 1]), 1);
    }

    return newEntries;
  };

  entries = filterEntries(entries);

  const object = entries.reduce(
    (obj, [key, value]) => ({ ...obj, [key]: value }),
    {}
  );

  return object;
};

console.log(
  getExtendedObjectOfFirstInstanceOfEachPropertyAndValue(
    { a: 1, b: 2 },
    { c: 3 }
  )
);
console.log(
  getExtendedObjectOfFirstInstanceOfEachPropertyAndValue(
    { a: 1, b: 2 },
    { c: 3 },
    { d: 4 }
  )
);
console.log(
  getExtendedObjectOfFirstInstanceOfEachPropertyAndValue(
    { a: 1, b: 2 },
    { a: 3, c: 3 }
  )
);
console.log(
  getExtendedObjectOfFirstInstanceOfEachPropertyAndValue(
    { a: false, b: null },
    { a: true, b: 2, c: 3 }
  )
);
console.log(
  getExtendedObjectOfFirstInstanceOfEachPropertyAndValue(
    { a: 1, b: 2 },
    { c: 3 },
    { d: 5 }
  )
);
