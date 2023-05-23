import { RECENT_DATES } from './recent-dates.js';

const calcDaysDiffBetweenDates = (prevDate, nextDate) => {
  const date1 = new Date(prevDate);
  const date2 = new Date(nextDate);

  return Math.round(
    (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)
  );
};

const calcPeriods = array => {
  const periods = [];

  for (let i = 0; i < array.length - 1; i++) {
    periods.push(calcDaysDiffBetweenDates(array[i], array[i + 1]));
  }

  return periods;
};

const recentPeriods = calcPeriods(RECENT_DATES);

console.log(recentPeriods);

const calcAveragePeriod = () =>
  Math.floor(
    recentPeriods.reduce((acc, period) => acc + period, 0) /
      recentPeriods.length
  );

console.log(calcAveragePeriod());

const calcNextDate = (lastDate, days) => {
  const latestDate = new Date(lastDate);

  return new Date(latestDate.getTime() + days * (1000 * 60 * 60 * 24));
};

console.log(
  `The next cycle is expected on ${calcNextDate(
    RECENT_DATES.at(-1),
    calcAveragePeriod()
  )}.`
);

const reverseNumber = num => {
  const reversedNumString = num.toString().split('').reverse().join('');

  const reversedNum = parseInt(reversedNumString) * Math.sign(num);

  return reversedNum;
};

console.log(reverseNumber(-579));
console.log(reverseNumber(89753));

const getLargestAndSmallestValues = array => {
  let smallest = array[0];
  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) smallest = array[i];
    if (array[i] > largest) largest = array[i];
  }

  return `${smallest} and ${largest}  are the smallest and the largest values in the array.`;
};

const getBiggestNumber = args => {
  if (args.length < 2) {
    throw new Error('Not enough arguments');
  }

  if (args.some(arg => typeof arg !== 'number')) {
    throw new Error('Wrong argument type');
  }

  const maxNum = Math.max(...args);

  return maxNum;
};

const findMinDifference = array => {
  const sortedArr = [...array].sort((a, b) => a - b);

  let minDiff = Number.MAX_VALUE;

  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] - sortedArr[i - 1] < minDiff) {
      minDiff = sortedArr[i] - sortedArr[i - 1];
    }
  }

  return minDiff;
};

const isSorted_1 = array => {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) return false;
  }

  return true;
};

const isSorted_2 = array =>
  array.slice(1).every((value, index) => array[index] < value);

const isSorted_3 = array =>
  array.every((value, index) => index === 0 || array[index - 1] < value);

const unsortedArray = [1, 55, 17, 77, 709, 95, -10, 100, 205];
const sortedArray = [-10, 0, 1, 10, 77, 500, 709];

console.log(getLargestAndSmallestValues(unsortedArray));
console.log(getBiggestNumber(unsortedArray));
console.log(findMinDifference(unsortedArray));
console.log(isSorted_1(sortedArray));
console.log(isSorted_1(unsortedArray));
console.log(isSorted_2(sortedArray));
console.log(isSorted_2(unsortedArray));
console.log(isSorted_3(sortedArray));
console.log(isSorted_3(unsortedArray));

const removeFalsy = array => array.filter(Boolean);

console.log(removeFalsy(sortedArray));

const makeArrayOfMatches = (array1, array2) =>
  array1.filter(el => array2.includes(el));

const makeArrayOfDifferences = (array1, array2) => {
  const set = new Set(array2);

  return array1.filter(el => !set.has(el));
};

console.log(makeArrayOfMatches(sortedArray, unsortedArray));
console.log(makeArrayOfDifferences(sortedArray, unsortedArray));

const makeArrayOfUniqueValues = array => {
  const arrOfUniqueValuesNewWay = [];

  array.filter(
    (el, index) =>
      array.indexOf(el) === index && arrOfUniqueValuesNewWay.push(el)
  );

  return arrOfUniqueValuesNewWay;
};

const array = [37, 5, 7, 9, '9', 5, 7, 37, 3];

const arrOfUniqueValuesOldWay = makeArrayOfUniqueValues(array);
const arrOfUniqueValuesNewWay = [...new Set(array)];

const findDuplicates = array => {
  const arrOfDuplicates = [];

  array.filter((el, index) => {
    if (array.indexOf(el) !== index) {
      arrOfDuplicates.push(el);
    }
  });

  return arrOfDuplicates;
};

const arrOfDuplicates = findDuplicates(array);

console.log(arrOfUniqueValuesOldWay);
console.log(arrOfUniqueValuesNewWay);
console.log(arrOfDuplicates);

const countOccurrences = (array, targetValue) =>
  array.reduce((acc, value) => (value === targetValue ? acc + 1 : acc), 0);

console.log(countOccurrences(array, 5));
console.log(countOccurrences([5, 5, 2, 1, 2, 3, 5], 5));

const findAllIndices = (array, element) => {
  let indices = [];
  let index = array.indexOf(element);

  for (let el of array) {
    if (el === element) {
      indices.push(index);
      index = array.indexOf(el, index + 1);
    }
  }

  return indices;
};

console.log(findDuplicates(array));
console.log(findAllIndices(array, 37));

const allElementsOfTwoArraysAreEqual_1 = (arr_1, arr_2) => {
  if (arr_1.length !== arr_2.length) {
    return false;
  }

  for (let i = 0; i < arr_1.length; i++) {
    if (arr_1[i] !== arr_2[i]) {
      return false;
    }
  }

  return true;
};

const allElementsOfTwoArraysAreEqual_2 = (arr_1, arr_2) => {
  if (arr_1.length !== arr_2.length) {
    return false;
  }

  return arr_1.every((el, i) => el === arr_2[i]);
};

const arr_1 = [1, 3, 3, 5, 2];
const arr_2 = [1, 3, 3, 5, 2];
const arr_3 = [1, 3, 3, 5, 3];

console.log(allElementsOfTwoArraysAreEqual_1(arr_1, arr_2));
console.log(allElementsOfTwoArraysAreEqual_1(arr_1, arr_3));
console.log(allElementsOfTwoArraysAreEqual_2(arr_1, arr_2));
console.log(allElementsOfTwoArraysAreEqual_2(arr_1, arr_3));

const isLuckyTicket = digits => {
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

console.log(isLuckyTicket(123_456));
console.log(isLuckyTicket(123_321));
console.log(isLuckyTicket(123_303));

const calculateTotalSumOfLuckyTickets = digits => {
  const isThisNumberLucky = digits => {
    digits = digits.toString().split('');

    let firstHalf = 0;
    let secondHalf = 0;

    digits.map((digit, index) => {
      index < digits.length / 2
        ? (firstHalf += Number(digit))
        : (secondHalf += Number(digit));
    });

    return firstHalf === secondHalf;
  };

  let sum = 0;

  for (let i = 0; i <= digits; i++) {
    i = i.toString().padStart(6, 0);
    isThisNumberLucky(i) && (sum += 1);
  }

  return sum;
};

console.log(calculateTotalSumOfLuckyTickets(999_999));

const findSumOfUnicodeValuesOfTheWord = word => {
  const chars = word.split('');

  const sum = chars.reduce((count, char) => count + char.charCodeAt(), 0);

  return sum;
};

console.log(findSumOfUnicodeValuesOfTheWord('taxi'));
console.log(findSumOfUnicodeValuesOfTheWord('Venice'));
console.log(findSumOfUnicodeValuesOfTheWord('Vesuvius'));

const countVowels = string => {
  const searchedChars = string.match(/[aeiouy]/g);

  return searchedChars ? searchedChars.length : 0;
};

const sentence = 'Ukraine will always be free';

console.log(
  `${countVowels(sentence)} vowels are found in the phrase '${sentence}'.`
);

const isValidJSON = string => {
  try {
    JSON.parse(string);
    return true;
  } catch (err) {
    return false;
  }
};

console.log(isValidJSON('{"name":"Danny","id":12345}'));
console.log(isValidJSON('{"name":"Danny",id:12345}'));

const capitalizeFirstLetter = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');

console.log(capitalizeFirstLetter('teo'));

const makeAcronym = fullName =>
  fullName
    .split(' ')
    .map(name => `${name.charAt(0).toUpperCase()}.`)
    .join('');

console.log(makeAcronym('teo meo'));

const getFullName = (...names) => names.filter(Boolean).join(' ');

console.log(getFullName('Leo', 'Ziablick'));

const buildASquare = num => ('+'.repeat(num) + '\n').repeat(num).trim();

console.log(buildASquare(3));
console.log(buildASquare(5));

const trimLeadingAndTrailingWhiteSpaces_1 = str => {
  const chars = str.split('');
  const filteredChars = [];

  for (let i = 1; i < chars.length; i++) {
    if (
      chars[i] !== ' ' ||
      (chars[i] === ' ' && chars[i - 1] !== ' ' && chars[i + 1] !== ' ')
    ) {
      filteredChars.push(chars[i]);
    }
  }

  return filteredChars.join('');
};

const trimLeadingAndTrailingWhiteSpaces_2 = str => {
  const chars = [...str];

  const firstStringIndex = chars.findIndex(char => char !== ' ');
  const lastStringIndex = chars.findLastIndex(char => char !== ' ');

  return chars.slice(firstStringIndex, lastStringIndex + 1).join('');
};

const trimLeadingAndTrailingWhiteSpaces_3 = str =>
  str.replace(/^\s+|\s+$/g, '');

const string = '     333 55 77  ';

console.log(trimLeadingAndTrailingWhiteSpaces_1(string) === '333 55 77');
console.log(trimLeadingAndTrailingWhiteSpaces_2(string) === '333 55 77');
console.log(trimLeadingAndTrailingWhiteSpaces_3(string) === '333 55 77');

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms. In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".

const DNAStrand = dna => dna.replace(/./g, char => DNAStrand.pairs[char]);

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C'
};

console.log(DNAStrand(''));
console.log(DNAStrand('ATGC'));
console.log(DNAStrand('GTAT'));
console.log(DNAStrand('AAAA'));

// Fibonacci numbers or Fibonacci sequence is a sequence of numbers that is calculated by adding values of two preceding numbers. It’s also known as the golden ratio and it’s widely found in nature.

// Getting Fibonacci sequence with iterative algorithm
const getFibonacciSequenceOfAGivenLength_1 = length => {
  const sequence = [0, 1];

  for (let i = 2; i < length; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }

  return sequence;
};

// Getting Fibonacci sequence, using iterative algorithm and destructuring
const getFibonacciSequenceOfAGivenLength_2 = length => {
  let current = 0;
  let next = 1;
  const sequence = [];

  for (let i = 0; i < length; i++) {
    sequence.push(current);
    [current, next] = [next, current + next];
  }

  return sequence;
};

console.log(getFibonacciSequenceOfAGivenLength_1(8));
console.log(getFibonacciSequenceOfAGivenLength_1(10));
console.log(getFibonacciSequenceOfAGivenLength_2(8));
console.log(getFibonacciSequenceOfAGivenLength_2(10));

const getFibSequenceUpToNum = num => {
  let current = 0;
  let next = 1;
  let i = current;
  const sequence = [];

  while (current < num) {
    sequence.push(current);
    [current, next] = [next, current + next];
    i++;
  }

  return sequence;
};

console.log(getFibSequenceUpToNum(500));
console.log(getFibSequenceUpToNum(1000));
