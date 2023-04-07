// Array => object
const techArray = ['JavaScript', 'React.js', 'Node.js'];

const techObject_1 = Object.assign({}, techArray);

console.log(techObject_1);

const techObject_2 = { ...techArray };

console.log(techObject_2);

const techObject_3 = techArray.reduce(
  (acc, cur, index) => ({ ...acc, [index + 1]: cur }),
  {}
);

console.log(techObject_3);

const techObject_4 = techArray.reduce((acc, cur, index) => {
  acc[index + 1] = cur;

  return acc;
}, {});

console.log(techObject_4);

// Array => array of objects
const arrayOfTechObjects = techArray.map((technology, index) => ({
  id: index + 1,
  technology
}));

console.log(arrayOfTechObjects);

// Array of arrays => object
const personData = [
  ['name', 'Kate'],
  ['city', 'New York']
];

const personObject_1 = personData.reduce(
  (acc, [key, value]) => Object.assign(acc, { [key]: value }),
  {}
);

console.log(personObject_1);

const personObject_2 = personData.reduce(
  (acc, [key, value]) => ({ ...acc, [key]: value }),
  {}
);

console.log(personObject_2);

const personObject_3 = Object.fromEntries(personData);

console.log(personObject_3);

// Array of arrays => array of objects
const arrayOfPersonObjects = personData.map(([key, value]) => ({
  [key]: value
}));

console.log(arrayOfPersonObjects);

// Array of objects => object
const trafficLightsData = [
  { key: 'red', value: '🔴' },
  { key: 'yellow', value: '🟡' },
  { key: 'green', value: '🟢' }
];

const assembleTrafficLightObject = array =>
  array.reduce(
    (acc, { key, value }) => ({
      ...acc,
      [key]: value
    }),
    {}
  );

console.log(assembleTrafficLightObject(trafficLightsData));

const colorsData = [
  { color: 'green', hue: 120 },
  { color: 'blue', hue: 240 },
  { color: 'red', hue: 360 }
];

const getHSLColorsObject = array =>
  array.reduce((acc, { color, hue }) => {
    acc[color] = `hsl(${hue}, 100%, 52%)`;

    return acc;
  }, {});

console.log(getHSLColorsObject(colorsData));
console.table(getHSLColorsObject(colorsData));

// Counting all occurrences of array elements => object
const vehicles = [
  'van',
  'bike',
  'bike',
  'car',
  'truck',
  'bike',
  'bike',
  'truck',
  'truck',
  'bike',
  'car'
];

const tallyUpArrayInstances_1 = array =>
  array.reduce((acc, item) => {
    !acc[item] && (acc[item] = 0);

    acc[item]++;

    return acc;
  }, {});

const objectOfCountedVehicleInstances_1 = tallyUpArrayInstances_1(vehicles);

console.log(objectOfCountedVehicleInstances_1);

const tallyUpArrayInstances_2 = array =>
  array.reduce((acc, item) => {
    if (item in acc) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }

    return acc;
  }, {});

const objectOfCountedVehicleInstances_2 = tallyUpArrayInstances_2(vehicles);

console.log(objectOfCountedVehicleInstances_2);

const tallyUpArrayInstances_3 = array =>
  array.reduce(
    (acc, item) => ({ ...acc, [item]: acc[item] ? acc[item] + 1 : 1 }),
    {}
  );

const objectOfCountedVehicleInstances_3 = tallyUpArrayInstances_3(vehicles);

console.log(objectOfCountedVehicleInstances_3);

// Adding up values of multiple arrays of objects => object
const militaryAidFromUSA = [
  { HIMARS: 20 },
  { HIMARS: 18, NASAMS: 2 },
  { NASAMS: 6, PATRIOT: 1 },
  { BRADLEY: 109, ABRAMS: 31 }
];

const militaryAidFromPoland = [
  {
    ['MIG-29']: 14,
    ['LEOPARD 2']: 14
  }
];

const militaryAidFromGermany = [
  { ['IRIS-T']: 1 },
  { ['IRIS-T']: 3, PATRIOT: 1, MARDER: 40, ['LEOPARD 2']: 18 }
];

const addUpArraysOfObjectsValues = (...arraysOfData) =>
  arraysOfData
    .flat()
    .flatMap(item => Object.entries(item))
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: acc[key] ? acc[key] + value : value
      }),
      {}
    );

const totalMilitaryAid = addUpArraysOfObjectsValues(
  militaryAidFromUSA,
  militaryAidFromPoland,
  militaryAidFromGermany
);

console.table(totalMilitaryAid);

// Sorting object by keys
const sortObjectByKeys = object =>
  Object.keys(object)
    .sort()
    .reduce((acc, key) => ({ ...acc, [key]: object[key] }), {});

const objectOfVehiclesSortedByKeysAlphabetically = sortObjectByKeys(
  objectOfCountedVehicleInstances_1
);

console.log(objectOfVehiclesSortedByKeysAlphabetically);

// Sorting object by values

// 1. using Object.keys(), sort(), and reduce()
const sortObjectByValues_1 = object =>
  Object.keys(object)
    .sort((prev_key, next_key) => object[next_key] - object[prev_key])
    .reduce((acc, key) => ({ ...acc, [key]: object[key] }), {});

const objectOfSortedVehicleInstances_1 = sortObjectByValues_1(
  objectOfCountedVehicleInstances_1
);

console.log(objectOfSortedVehicleInstances_1);

// 2. using Object.entries(), sort(), and reduce()
const sortObjectByValues_2 = object =>
  Object.entries(object)
    .sort(([, prev_value], [, next_value]) => next_value - prev_value)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

const objectOfSortedVehicleInstances_2 = sortObjectByValues_2(
  objectOfCountedVehicleInstances_2
);

console.log(objectOfSortedVehicleInstances_2);

// 3. using Object.fromEntries(), Object.entries(), and sort()
const sortObjectByValues_3 = object =>
  Object.fromEntries(
    Object.entries(object).sort(
      ([, prev_value], [, next_value]) => next_value - prev_value
    )
  );

const objectOfSortedVehicleInstances_3 = sortObjectByValues_3(
  objectOfCountedVehicleInstances_3
);

console.log(objectOfSortedVehicleInstances_3);

const birds = [
  'chaffinch',
  'chaffinch',
  'tit',
  'catbird',
  'rook',
  'catbird',
  'rook',
  'chaffinch',
  'rook'
];

const sizes = [
  'small',
  'small',
  'small',
  'medium',
  'big',
  'medium',
  'big',
  'small',
  'big'
];

const tallyBirdsOfEachType = (array = birds) =>
  array.reduce(
    (acc, bird) => ({
      ...acc,
      [bird]: acc[bird] ? acc[bird] + 1 : 1
    }),
    {}
  );

const amountOfBirdsOfEachType = tallyBirdsOfEachType();

console.log(amountOfBirdsOfEachType);

const sortBirdsByQuantity = object =>
  Object.fromEntries(
    Object.entries(object).sort(
      ([, prevValue], [, nextValue]) => nextValue - prevValue
    )
  );

const birdsSortedByQuantity = sortBirdsByQuantity(amountOfBirdsOfEachType);

console.log(birdsSortedByQuantity);

// Mapping one array data to an object of list-like key-value pairs
const birdsListObject_1 = birds.reduce((acc, bird, index) => {
  acc[`bird_${index + 1}`] = bird;

  return acc;
}, {});

console.log(birdsListObject_1);

const birdsListObject_2 = birds.reduce(
  (acc, bird, index) => ({
    ...acc,
    [`bird_${index + 1}`]: bird
  }),
  {}
);

console.log(birdsListObject_2);

// Combining multiple arrays data in one array of objects

// 1. Specific function implementation:

// using map()
const combineBirdsAndSizes_1 = () =>
  birds.map((bird, index) => ({
    bird,
    size: sizes[index]
  }));

const arrayOfObjectsWithBirdsAndSizes_1 = combineBirdsAndSizes_1();

console.log(arrayOfObjectsWithBirdsAndSizes_1);

// using reduce()
const combineBirdsAndSizes_2 = () =>
  birds.reduce(
    (acc, bird, index) => [...acc, { bird, size: sizes[index] }],
    []
  );

const arrayOfObjectsWithBirdsAndSizes_2 = combineBirdsAndSizes_2();

console.log(arrayOfObjectsWithBirdsAndSizes_2);

// 2. General function implementation:

// using map()
const combineElementsOfTwoArrays_1 = (array_1, array_2, key_1, key_2) =>
  array_1.map((item, index) => ({
    [key_1]: item,
    [key_2]: array_2[index]
  }));

const arrayOfObjectsWithBirdsAndSizes_3 = combineElementsOfTwoArrays_1(
  birds,
  sizes,
  'bird',
  'size'
);

console.log(arrayOfObjectsWithBirdsAndSizes_3);

// using reduce()
const combineElementsOfTwoArrays_2 = (array_1, array_2, key_1, key_2) =>
  array_1.reduce((acc, item, index) => {
    acc[index] = { [key_1]: item, [key_2]: array_2[index] };

    return acc;
  }, []);

const arrayOfObjectsWithBirdsAndSizes_4 = combineElementsOfTwoArrays_2(
  birds,
  sizes,
  'bird',
  'size'
);

console.log(arrayOfObjectsWithBirdsAndSizes_4);

// Combining multiple arrays data in one object
const createObjectOfUniqueBirdsMatchedWithSizes_1 = () =>
  birds.reduce(
    (acc, bird, index) => ({
      ...acc,
      [bird]: sizes[index]
    }),
    {}
  );

const objectWithBirdsAndSizes_1 = createObjectOfUniqueBirdsMatchedWithSizes_1();

console.log(objectWithBirdsAndSizes_1);

const createObjectOfUniqueBirdsMatchedWithSizes_2 = () =>
  birds.reduce((acc, bird, index) => {
    acc[bird] = sizes[index];

    return acc;
  }, {});

const objectWithBirdsAndSizes_2 = createObjectOfUniqueBirdsMatchedWithSizes_2();

console.log(objectWithBirdsAndSizes_2);

const createObjectOfUniqueBirdsMatchedWithSizes_3 = () =>
  arrayOfObjectsWithBirdsAndSizes_1.reduce(
    (acc, { bird, size }) => ({
      ...acc,
      [bird]: size
    }),
    {}
  );

const objectWithBirdsAndSizes_3 = createObjectOfUniqueBirdsMatchedWithSizes_3();

console.log(objectWithBirdsAndSizes_3);

const createObjectOfUniqueBirdsMatchedWithSizes_4 = () =>
  arrayOfObjectsWithBirdsAndSizes_2.reduce((acc, { bird, size }) => {
    acc[bird] = size;

    return acc;
  }, {});

const objectWithBirdsAndSizes_4 = createObjectOfUniqueBirdsMatchedWithSizes_4();

console.log(objectWithBirdsAndSizes_4);

const createObjectsWithUniqueBirdsAndSizes_1 = () =>
  Object.entries(objectWithBirdsAndSizes_1).map(([bird, size]) => ({
    bird,
    size
  }));

const arrayOfObjectsOfUniqueBirdsAndSizes_1 =
  createObjectsWithUniqueBirdsAndSizes_1();

console.log(arrayOfObjectsOfUniqueBirdsAndSizes_1);

const createObjectsWithUniqueBirdsAndSizes_2 = () =>
  Object.entries(objectWithBirdsAndSizes_1).reduce(
    (acc, [bird, size], index) => {
      acc[index] = { bird, size };

      return acc;
    },
    []
  );

const arrayOfObjectsOfUniqueBirdsAndSizes_2 =
  createObjectsWithUniqueBirdsAndSizes_2();

console.log(arrayOfObjectsOfUniqueBirdsAndSizes_2);

const createArrayOfObjectsOfUniqueBirds = () => {
  let key = 0;

  const arrayOfObjectsOfUniqueBirdsAndSizes = birds.reduce(
    (acc, bird, index) => {
      birds.indexOf(bird) === index &&
        acc.push({ key: ++key, bird, size: sizes[index] });

      return acc;
    },
    []
  );

  return arrayOfObjectsOfUniqueBirdsAndSizes;
};

const arrayOfObjectsOfUniqueBirdsAndSizes_3 =
  createArrayOfObjectsOfUniqueBirds();

console.log(arrayOfObjectsOfUniqueBirdsAndSizes_3);

const createArrayOfDescriptiveBirdsObjects = () =>
  arrayOfObjectsOfUniqueBirdsAndSizes_3.reduce(
    (acc, { key, bird, size }, index) => {
      acc[index] = {
        [`Description_${key}`]: `${bird.charAt(0).toUpperCase()}${bird.slice(
          1
        )} is a ${size} bird.`
      };

      return acc;
    },
    []
  );

const arrayOfDescriptiveBirdsObjects = createArrayOfDescriptiveBirdsObjects();

console.log(arrayOfDescriptiveBirdsObjects);

// Array of objects => array of objects unique by key
const nameAndOccupationData = [
  { id: 1, name: 'Mila', occupation: 'teacher' },
  { id: 2, name: 'Bogdan', occupation: 'musician' },
  { id: 3, name: 'Mila', occupation: 'interpreter' },
  { id: 4, name: 'Bogdan', occupation: 'designer' },
  { id: 5, name: 'Leo', occupation: 'hunter' },
  { id: 6, name: 'Mila', occupation: 'web developer' }
];

// 1. using filter() and findIndex() => returns first elements of the initial array unique by key
const getArrayOfObjectsUniqueByKey_1 = (array, key) =>
  array.filter(
    (item, index) =>
      array.findIndex(element => element[key] === item[key]) === index
  );

const arrayOfNamesAndOccupationsUniqueByName_1 = getArrayOfObjectsUniqueByKey_1(
  nameAndOccupationData,
  'name'
);

console.log(arrayOfNamesAndOccupationsUniqueByName_1);

// 2. using filter() and findLastIndex() => returns last elements of the initial array unique by key
const getArrayOfObjectsUniqueByKey_2 = (array, key) =>
  array.filter(
    (item, index) =>
      array.findLastIndex(element => element[key] === item[key]) === index
  );

const arrayOfNamesAndOccupationsUniqueByName_2 = getArrayOfObjectsUniqueByKey_2(
  nameAndOccupationData,
  'name'
);

console.log(arrayOfNamesAndOccupationsUniqueByName_2);

// 3. using map() and new Map() => returns last elements of the initial array unique by key, maintaining order of appearance of elements by the given key
const getArrayOfObjectsUniqueByKey_3 = (array, key) => [
  ...new Map(array.map(item => [item[key], item])).values()
];

const arrayOfNamesAndOccupationsUniqueByName_3 = getArrayOfObjectsUniqueByKey_3(
  nameAndOccupationData,
  'name'
);

console.log(arrayOfNamesAndOccupationsUniqueByName_3);

// Array of arrays => array of extended objects
const transactionsData = [
  ['buy', 'usd', 50],
  ['sell', 'usd', 100],
  ['sell', 'eur', 200]
];

// using map()
const makeTableOfTransactions_1 = () =>
  transactionsData.map(([operation, currency, amount]) => ({
    operation,
    currency,
    amount
  }));

console.table(makeTableOfTransactions_1());

// using reduce()
const makeTableOfTransactions_2 = () =>
  transactionsData.reduce((acc, [operation, currency, amount], index) => {
    acc[index] = { operation, currency, amount };

    return acc;
  }, []);

console.table(makeTableOfTransactions_2());

const calcBudget = () => {
  const budget = transactionsData.reduce(
    (total, [operation, currency, amount], index) => {
      currency === 'eur' && (amount *= 1.05);

      console.info({
        iteration: index + 1,
        total: `${total}$`,
        operation,
        amount: `${amount}$`
      });

      operation === 'buy' ? (total -= amount) : (total += amount);

      return total;
    },
    1000
  );

  console.info(`Total sum after the last iteration is ${budget}$.`);

  return budget;
};

calcBudget();

const pancakesGroup = [
  { name: 'Vika', technology: 'Angular' },
  { name: 'Valery', technology: 'React' },
  { name: 'Roma', technology: 'React' },
  { name: 'Denys', technology: 'Angular' },
  { name: 'Lizo4ka', technology: 'Angular' },
  { name: 'Veronika', technology: 'Node' },
  { name: 'Yaroslava', technology: 'Node' },
  { name: 'Mila', technology: 'React' },
  { name: 'Toma', technology: 'React' },
  { name: 'S L a V u N I A', technology: 'React' }
];

const combineNameWithTech_1 = () =>
  pancakesGroup.reduce((acc, { name, technology }) => {
    acc[name] = technology;

    return acc;
  }, {});

const pancakesGroupInfoObject_1 = combineNameWithTech_1();

console.log(pancakesGroupInfoObject_1);

const combineNameWithTech_2 = () =>
  pancakesGroup.reduce(
    (acc, { name, technology }) => ({
      ...acc,
      [name]: technology
    }),
    {}
  );

const pancakesGroupInfoObject_2 = combineNameWithTech_2();

console.log(pancakesGroupInfoObject_2);

const groupStudentsBySpecialization = () =>
  pancakesGroup.reduce((specialization, { technology, name }) => {
    !specialization[technology] && (specialization[technology] = []);

    specialization[technology].push(name);

    return specialization;
  }, {});

console.table(groupStudentsBySpecialization());

// Updating one object in an array in an immutable way
const updatedPancakesGroup = pancakesGroup.map(pancake =>
  pancake.name === 'Roma'
    ? Object.assign({}, pancake, { technology: 'React Native' })
    : pancake
);

// Adding new items to the end of the array of objects in an immutable way
const expandedPancakesGroup = [
  ...updatedPancakesGroup,
  { name: 'Bodia', technology: 'Angular' },
  { name: 'Maria', technology: 'React' }
];

console.log(pancakesGroup);
console.log(updatedPancakesGroup);
console.log(expandedPancakesGroup);
