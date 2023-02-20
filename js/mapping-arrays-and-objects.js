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
  technology: technology
}));

console.log(arrayOfTechObjects);

// Array of arrays => object
const personData = [
  ['name', 'Kate'],
  ['city', 'New York']
];

const personObject_1 = personData.reduce(
  (acc, cur) => Object.assign(acc, { [cur[0]]: cur[1] }),
  {}
);

console.log(personObject_1);

const personObject_2 = personData.reduce(
  (acc, cur) => ({ ...acc, [cur[0]]: cur[1] }),
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

const assembleTrafficLight = array => {
  const lights = array.reduce((acc, obj) => {
    acc[obj.key] = obj.value;

    return acc;
  }, {});

  return lights;
};

console.log(assembleTrafficLight(trafficLightsData));

const colorsData = [
  { hue: 120, color: 'green' },
  { hue: 240, color: 'blue' },
  { hue: 360, color: 'red' }
];

const getHslColors = array => {
  const hslColors = array.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.color]: `hsl(${cur.hue}, 100%, 52%)`
    }),
    {}
  );

  return hslColors;
};

console.log(getHslColors(colorsData));
console.table(getHslColors(colorsData));

// Here is how it works:

// reduce is initialized with an empty object ({} at the end), therefore first iteration variables are acc = {}, cur = { hue: 120, color: 'green' }. This function returns an object - this is why its body is wrapped in parentheses => ({ ... }). Spread operator doesn't do anything on the first iteration, so 'green: hsl(120, 100%, 52%)' is set as the first item.

// On the second iteration variables are acc = { green: hsl(120, 100%, 52%) }, cur = { hue: 240, color: 'blue' }. Here the spread operator expands acc and the function returns { green: 'hsl(120, 100%, 52%)', blue: 'hsl(120, 100%, 52%)' }.

// Third iteration: acc = { green: 'hsl(120, 100%, 52%)', blue: 'hsl(120, 100%, 52%)' }, cur = { hue: 360, color: 'red' }, so when acc is spread inside the object, our function returns the final value

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

const tallyUpInstances_1 = array =>
  array.reduce((acc, item) => {
    !acc[item] && (acc[item] = 0);

    acc[item]++;

    return acc;
  }, {});

let objectOfCountedVehicleInstances = tallyUpInstances_1(vehicles);

console.log(objectOfCountedVehicleInstances);

const tallyUpInstances_2 = array =>
  array.reduce((acc, item) => {
    if (item in acc) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }

    return acc;
  }, {});

objectOfCountedVehicleInstances = tallyUpInstances_2(vehicles);

console.log(objectOfCountedVehicleInstances);

const tallyUpInstances_3 = array =>
  array.reduce(
    (acc, item) => ({ ...acc, [item]: acc[item] ? acc[item] + 1 : 1 }),
    {}
  );

objectOfCountedVehicleInstances = tallyUpInstances_3(vehicles);

console.log(objectOfCountedVehicleInstances);

// Add up values of multiple arrays of objects => object
const militaryAidFromUSA = [
  { HIMARS: 4 },
  { HIMARS: 4 },
  { HIMARS: 4 },
  { HIMARS: 18, NASAMS: 2 },
  { AVENGERS: 4 },
  { NASAMS: 6, PATRIOT: 1 },
  { BRADLEY: 50 }
];

const militaryAidFromNorway = [
  {
    NASAMS: 8
  }
];

const militaryAidFromGermany = [
  { ['IRIS-T']: 1 },
  { ['IRIS-T']: 3, PATRIOT: 1, MARDER: 50 }
];

const addItUp = (...arraysOfData) =>
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

const totalMilitaryAid = addItUp(
  militaryAidFromUSA,
  militaryAidFromNorway,
  militaryAidFromGermany
);

console.table(totalMilitaryAid);

// Sorting object by keys
const sortObjectByKeys = object => {
  const sortedObject = Object.keys(object)
    .sort()
    .reduce((acc, key) => ({ ...acc, [key]: object[key] }), {});

  return sortedObject;
};

const objectOfVehiclesSortedByKeysAlphabetically = sortObjectByKeys(
  objectOfCountedVehicleInstances
);

console.log(objectOfVehiclesSortedByKeysAlphabetically);

// Sorting object by values

// 1. using Object.keys(), sort(), and reduce()
const sortObjectOfVehiclesByFrequencyOfInstances_1 = object => {
  const sortedObject = Object.keys(object)
    .sort((prev_key, next_key) => object[next_key] - object[prev_key])
    .reduce((acc, key) => ({ ...acc, [key]: object[key] }), {});

  return sortedObject;
};

let objectOfSortedVehicleInstances =
  sortObjectOfVehiclesByFrequencyOfInstances_1(objectOfCountedVehicleInstances);

console.log(objectOfSortedVehicleInstances);

// 2. using Object.entries(), sort(), and reduce()
const sortObjectOfVehiclesByFrequencyOfInstances_2 = object => {
  const sortedObject = Object.entries(object)
    .sort(([, prev_value], [, next_value]) => next_value - prev_value)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  return sortedObject;
};

objectOfSortedVehicleInstances = sortObjectOfVehiclesByFrequencyOfInstances_2(
  objectOfCountedVehicleInstances
);

console.log(objectOfSortedVehicleInstances);

// 3. using Object.fromEntries(), Object.entries(), and sort()
const sortObjectOfVehiclesByFrequencyOfInstances_3 = object => {
  const sortedObject = Object.fromEntries(
    Object.entries(object).sort(
      ([, prev_value], [, next_value]) => next_value - prev_value
    )
  );

  return sortedObject;
};

objectOfSortedVehicleInstances = sortObjectOfVehiclesByFrequencyOfInstances_3(
  objectOfCountedVehicleInstances
);

console.log(objectOfSortedVehicleInstances);

const arrayOfVehicleInstancesSortedByFrequency = [
  ...Object.keys(objectOfSortedVehicleInstances)
];

console.log(arrayOfVehicleInstancesSortedByFrequency);

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

const birdsObject = birds.reduce((acc, bird, index) => {
  acc[index + 1] = bird;

  return acc;
}, {});

console.log(birdsObject);

const newBirdsObject = birds.reduce(
  (acc, bird, index) => ({
    ...acc,
    [`bird_${index + 1}`]: bird
  }),
  {}
);

console.log(newBirdsObject);

const combineBirdsAndSizesWithMap = () => {
  const arrayOfObjects = birds.map((bird, index) => ({
    bird,
    size: sizes[index]
  }));

  return arrayOfObjects;
};

let arrayOfObjectsWithBirdsAndSizes = combineBirdsAndSizesWithMap();

console.log(arrayOfObjectsWithBirdsAndSizes);

const combineBirdsAndSizesWithReduce = () => {
  const arrayOfObjects = birds.reduce((acc, bird, index) => {
    acc[index] = { bird, size: sizes[index] };

    return acc;
  }, []);

  return arrayOfObjects;
};

arrayOfObjectsWithBirdsAndSizes = combineBirdsAndSizesWithReduce();

console.log(arrayOfObjectsWithBirdsAndSizes);

const createObjectOfBirdsWithSizes_1 = () => {
  const object = birds.reduce(
    (acc, bird, index) => ({
      ...acc,
      [bird]: sizes[index]
    }),
    {}
  );

  return object;
};

let objectWithBirdsAndSizes = createObjectOfBirdsWithSizes_1();

console.log(objectWithBirdsAndSizes);

const createObjectOfBirdsWithSizes_2 = () => {
  const object = birds.reduce((acc, bird, index) => {
    acc[bird] = sizes[index];

    return acc;
  }, {});

  return object;
};

objectWithBirdsAndSizes = createObjectOfBirdsWithSizes_2();

console.log(objectWithBirdsAndSizes);

const createObjectOfBirdsWithSizes_3 = () => {
  const object = arrayOfObjectsWithBirdsAndSizes.reduce(
    (acc, { bird, size }) => ({
      ...acc,
      [bird]: size
    }),
    {}
  );

  return object;
};

objectWithBirdsAndSizes = createObjectOfBirdsWithSizes_3();

console.log(objectWithBirdsAndSizes);

const createObjectOfBirdsWithSizes_4 = () => {
  const object = arrayOfObjectsWithBirdsAndSizes.reduce(
    (acc, { bird, size }) => {
      acc[bird] = size;

      return acc;
    },
    {}
  );

  return object;
};

objectWithBirdsAndSizes = createObjectOfBirdsWithSizes_4();

console.log(objectWithBirdsAndSizes);

const arraysOfBirdsAndSizes = [...Object.entries(objectWithBirdsAndSizes)];

console.log(arraysOfBirdsAndSizes);

const createObjectsWithBirdsAndSizesWithMap = () => {
  const arrayOfObjects = arraysOfBirdsAndSizes.map(([bird, size]) => ({
    bird,
    size
  }));

  return arrayOfObjects;
};

let objectsOfBirdsAndSizes = createObjectsWithBirdsAndSizesWithMap();

console.log(objectsOfBirdsAndSizes);

const createObjectsWithBirdsAndSizesWithReduce = () => {
  const arrayOfObjects = arraysOfBirdsAndSizes.reduce(
    (acc, [bird, size], index) => {
      acc[index] = { bird, size };

      return acc;
    },
    []
  );

  return arrayOfObjects;
};

objectsOfBirdsAndSizes = createObjectsWithBirdsAndSizesWithReduce();

console.log(objectsOfBirdsAndSizes);

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

const arrayOfObjectsOfUniqueBirdsAndSizes = createArrayOfObjectsOfUniqueBirds();
console.log(arrayOfObjectsOfUniqueBirdsAndSizes);

const createDescriptiveBirdsObjects = () => {
  const descriptiveBirdsObjects = arrayOfObjectsOfUniqueBirdsAndSizes.reduce(
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

  return descriptiveBirdsObjects;
};

const arrayOfDescriptiveBirdsObjects = createDescriptiveBirdsObjects();

console.log(arrayOfDescriptiveBirdsObjects);

const financesData = [
  ['buy', 'usd', 50],
  ['sell', 'usd', 100],
  ['sell', 'eur', 200]
];

const makeTableOfTransactionsWithMap = () => {
  const transactions = financesData.map(([operation, currency, amount]) => ({
    operation,
    currency,
    amount
  }));

  return transactions;
};

console.table(makeTableOfTransactionsWithMap());

const makeTableOfTransactionsWithReduce = () => {
  const transactions = financesData.reduce(
    (acc, [operation, currency, amount], index) => {
      acc[index] = { operation, currency, amount };

      return acc;
    },
    []
  );

  return transactions;
};

console.table(makeTableOfTransactionsWithReduce());

const calcBudget = () => {
  const budget = financesData.reduce(
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

const combineNameWithTech_1 = () => {
  const object = pancakesGroup.reduce((acc, { name, technology }) => {
    acc[name] = technology;

    return acc;
  }, {});

  return object;
};

let pancakesGroupObject = combineNameWithTech_1();

console.log(pancakesGroupObject);

const combineNameWithTech_2 = () => {
  const object = pancakesGroup.reduce(
    (acc, { name, technology }) => ({
      ...acc,
      [name]: technology
    }),
    {}
  );

  return object;
};

pancakesGroupObject = combineNameWithTech_2();

console.log(pancakesGroupObject);

const groupMembersByTechnology = () => {
  const technologies = pancakesGroup.reduce(
    (specialization, { technology, name }) => {
      !specialization[technology] && (specialization[technology] = []);

      specialization[technology].push(name);

      return specialization;
    },
    {}
  );

  return technologies;
};

console.log(groupMembersByTechnology());

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
