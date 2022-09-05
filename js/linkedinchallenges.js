// Challenge 1

// Calculate result of multiple equations
const double = x => x * 2;
const subtractTwenty = x => x - 20;
const triple = x => x * 3;
const addFive = x => x + 5;

const arrayOfFunctions = [double, subtractTwenty, triple, addFive, Math.abs];

const calcResultOfAllEquations = (array, initialValue) =>
  array.reduce((acc, func) => func(acc), initialValue);

console.log(`Result: ${calcResultOfAllEquations(arrayOfFunctions, 0)}`);
console.log(`Result: ${calcResultOfAllEquations(arrayOfFunctions, 3)}`);

// Challenge 2

// Test words length
const arrayOfWords = [
  'the',
  'bike',
  'backpack',
  'destination',
  'forest',
  'lake',
  'squirrels',
  'sophisticated',
  'resilience',
];

const testLength = (minLength, maxLength) => word =>
  word.length > minLength && word.length <= maxLength;

const getArrayOfWordsOfLength = (array, minLength, maxLength) =>
  array.filter(testLength(minLength, maxLength));

const getObjectOfArraysOfWordsOfEachLength = array => ({
  short_words: getArrayOfWordsOfLength(array, 0, 5),
  medium_words: getArrayOfWordsOfLength(array, 5, 9),
  long_words: getArrayOfWordsOfLength(array, 9, Infinity),
});

console.log(getObjectOfArraysOfWordsOfEachLength(arrayOfWords));

// Challenge 3

// Find anagrams
const countOccurrences = word =>
  word.reduce(
    (acc, char) => ({ ...acc, [char]: acc[char] ? acc[char] + 1 : 1 }),
    {}
  );

const hasSameLetterCount = (word_1, word_2) => {
  const word_1Count = countOccurrences([...word_1]);
  const word_2Count = countOccurrences([...word_2]);

  return (
    Object.keys(word_1Count).length === Object.keys(word_2Count).length &&
    Object.keys(word_1Count).every(
      char => word_1Count[char] === word_2Count[char]
    )
  );
};

const findWordAnagrams = (word, allWords) => {
  return allWords
    .filter(entry => hasSameLetterCount(word, entry))
    .filter(anagram => anagram !== word);
};

const displayAnagram = (word, allWords) => ({
  [word + '_anagrams']: findWordAnagrams(word, allWords),
});

const displayAnagrams = (words, allWords) =>
  words.map(word => displayAnagram(word, allWords));

const allWords = ['cinema', 'iceman', 'anemic', 'mood', 'life', 'file'];

console.log(displayAnagrams(['cinema', 'doom', 'file'], allWords));

// Challenge 4

// Validate form fields and generate error messages
const validateFirstName = name =>
  name.length >= 2 ? '' : 'First name must be at least 2 chars long';

const validateLastName = name =>
  name.length >= 2 ? '' : 'Last name must be at least 2 chars long';

const validateZipCode = code =>
  code.length === 5 ? '' : 'Zip code must be exactly 5 chars long';

const validateCity = city =>
  city.length >= 3 ? '' : 'City must be at least 3 chars long';

const inputCriteria = inputValues => ({
  firstName: validateFirstName(inputValues.firstName),
  lastName: validateLastName(inputValues.lastName),
  zipCode: validateZipCode(inputValues.zipCode),
  city: validateCity(inputValues.city),
});

const currentInputValues = {
  firstName: 'Leo',
  lastName: 'Z',
  zipCode: '2103',
  city: 'Vinnytsia',
};

const getErrorMessages = (inputs, criteria) =>
  Object.values(criteria(inputs)).filter(value => value);

console.log(getErrorMessages(currentInputValues, inputCriteria));

// Challenge 5

// Get classroom attendance roles object
const classroom = {
  hasTeachingAssistant: true,
  classlist: ['Rashida', 'John', 'Roman', 'Lisa', 'Omar', 'Lucas'],
};

const getClassroomRoles = ({ hasTeachingAssistant, classlist }) => {
  const [teacher, secondAttendee, ...students] = classlist;

  const obj_1 = { teacher, teachingAssistant: secondAttendee, students };
  const obj_2 = { teacher, students: [secondAttendee, ...students] };

  return hasTeachingAssistant ? obj_1 : obj_2;
};

console.log(getClassroomRoles(classroom));

// Challenge 6

// Get document body background color dynamically and save it to localStorage
const changeBackgroundColor = e => {
  document.body.className = e.target.className;
  localStorage.setItem('backgroundColor', e.target.className);
};

document
  .getElementById('buttons')
  .addEventListener('click', e => changeBackgroundColor(e));

localStorage.backgroundColor &&
  (document.body.className = localStorage.backgroundColor);

// Challenge 7

// Make up a food truck
const getCombinedMenu = menus => [...new Set(menus.flat())];

const combinedMenu = getCombinedMenu([
  ['pizza', 'cheese', 'pineapple', 'maize'],
  ['pizza', 'chicken', 'tomatoes', 'onions'],
  ['pizza', 'tomatoes', 'mushrooms', 'onions', 'pepper'],
]);

console.log(combinedMenu);

// Challenge 8

// Create train stations generator
const station = document.querySelector('span');
const dynamicText = document.getElementById('dynamic-text');
const btn = document.getElementById('btn-next-stop');

const stops = ['Newburgh', 'Peekskill', 'Yonkers', 'Bronx', 'Grand Central'];

function* generateStops(...stops) {
  for (let stop of stops) {
    yield stop;
  }

  return `We made it to ${stops.at(-1)}!`;
}

const nycHudsonLine = generateStops(...stops);

const animateButton = () => {
  btn.style.outlineOffset = '9px';

  setTimeout(() => (btn.style.outlineOffset = '6px'), 125);
};

const getToTheNextStation = () => {
  animateButton();

  const currentStation = nycHudsonLine.next();

  station.textContent = currentStation.value;

  if (currentStation.done) {
    station.parentNode.remove();
    dynamicText.textContent = currentStation.value;
    dynamicText.style.fontSize = '2.25rem';
    btn.setAttribute('disabled', true);
  }
};

btn.addEventListener('click', getToTheNextStation);

// Challenge 9

// String permutation
const getFactorial = num =>
  num === 0 || num === 1 ? 1 : (num *= getFactorial(num - 1));

const numPermutations = string => getFactorial(string.length);

const scrabblePiano = numPermutations('piano');
const scrabbleSquirrel = numPermutations('squirrel');

console.log(scrabblePiano);
console.log(scrabbleSquirrel);

// Challenge 10

// Password strength
const validatePasswordStrength = password => {
  const hasUpperCaseLetters = /(?=.*[A-Z])/;
  const hasLowerCaseLetters = /(?=.*[a-z])/;
  const hasDigits = /(?=.*[0-9])/;
  const hasSpecialChars = /(?=.*[^a-zA-Z0-9])/;
  const isMinimumEightChars = /(?=.{8,})/;

  const isStrong =
    password.match(hasUpperCaseLetters) &&
    password.match(hasLowerCaseLetters) &&
    password.match(hasDigits) &&
    password.match(hasSpecialChars) &&
    password.match(isMinimumEightChars);

  return isStrong
    ? `Password ${password} is strong enough`
    : `Password ${password} is not strong enough`;
};

console.log(validatePasswordStrength('12345678'));
console.log(validatePasswordStrength('12Mi@78'));
console.log(validatePasswordStrength('Mi12&?5678'));
console.log(validatePasswordStrength('12iS*6789'));
console.log(validatePasswordStrength('theFu#99du'));
console.log(validatePasswordStrength('Fu^998877duck'));
