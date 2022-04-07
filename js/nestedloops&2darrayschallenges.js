const emulateTriangleOfArrays = () => {
  const mainArray = [];

  for (let i = 0; i < 10; i++) {
    const subArray = [];

    for (let j = i; j >= 0; j--) {
      subArray.push(j);
    }

    mainArray.push(subArray);
  }

  return mainArray;
};

const triangleOfArrays = emulateTriangleOfArrays();

console.log(triangleOfArrays);

const countLuckyTicketsInARange = () => {
  let luckyTicketsCount = 0;

  for (let n1 = 0; n1 < 10; n1++) {
    for (let n2 = 0; n2 < 10; n2++) {
      for (let n3 = 0; n3 < 10; n3++) {
        for (let n4 = 0; n4 < 10; n4++) {
          for (let n5 = 0; n5 < 10; n5++) {
            for (let n6 = 0; n6 < 10; n6++) {
              if (n1 + n2 + n3 === n4 + n5 + n6) {
                luckyTicketsCount++;
              }
            }
          }
        }
      }
    }
  }

  return luckyTicketsCount;
};

console.log(
  `There are ${countLuckyTicketsInARange()} lucky tickets in the range from 000000 to 999999.`
);

const findCharacters = (string, charsToSearch) => {
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < charsToSearch.length; j++) {
      if (string[i] === charsToSearch[j]) {
        console.log(
          `Character '${charsToSearch[j]}' is found at the index ${i}`
        );
      }
    }
  }
};

const playingAnimals = 'Three funny squirrels are playing with a baby elephant';

findCharacters(playingAnimals, ['u', 'i', 'y']);

const countCharacters = string => {
  const searchedChars = string.match(/[uiy]/g);

  return searchedChars ? searchedChars.length : 0;
};

console.log(
  `${countCharacters(
    playingAnimals
  )} characters 'u', 'i', and 'y' are found in the phrase.`
);

const findAnagrams = (word, arrayOfWords) => {
  const sortedCharsOfTheWord = [...word].sort();
  const anagrams = [];

  arrayOfWords.filter(entry => {
    const sortedCharsOfTheEntry = [...entry].sort();
    let matchesCount = 0;

    for (let i of sortedCharsOfTheWord) {
      for (let j of sortedCharsOfTheEntry) {
        if (i === j) {
          matchesCount++;
          if (sortedCharsOfTheWord.length === matchesCount && entry !== word) {
            anagrams.push(entry);
          }
        }
      }
    }
  });

  return anagrams;
};

const words = ['cinema', 'iceman', 'anemic', 'mood', 'life', 'file'];

console.log(findAnagrams('cinema', words));
console.log(findAnagrams('doom', words));
console.log(findAnagrams('file', words));

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

const findMaxDifference = array => {
  let maxDiff = array[1] - array[0];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] - array[i] > maxDiff) {
        maxDiff = array[j] - array[i];
      }
    }
  }

  return maxDiff;
};

const isSorted = array => {
  const sortedArr = [...array].sort((a, b) => a - b);

  let sorted = true;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < sortedArr.length; j++) {
      array[i] !== sortedArr[i] && (sorted = false);
    }
  }

  return sorted;
};

const unsortedArray = [1000, 55, 17, 77, 709, 95, -10, -120, 205];
const sortedArray = [-10, 0, 1, 10, 77, 500, 709];

console.log(findMaxDifference(unsortedArray));
console.log(findMaxDifference(sortedArray));
console.log(isSorted(unsortedArray));
console.log(isSorted(sortedArray));

const sortOddNumbersOfTheArray = array => {
  const arrayOfOdds = [];
  const sortedArray = [];

  array.map(element =>
    element % 2 === 0
      ? sortedArray.push(element)
      : sortedArray.push('') && arrayOfOdds.push(element)
  );

  arrayOfOdds.sort((a, b) => a - b);

  for (let element of sortedArray) {
    for (let oddNum of arrayOfOdds) {
      if (element === '') {
        sortedArray.splice(sortedArray.indexOf(element), 1, oddNum);
      }
    }
  }

  return sortedArray;
};

console.log(sortOddNumbersOfTheArray(unsortedArray));
console.log(sortOddNumbersOfTheArray([5, 17, 82, 15, 8, 3, 2]));

const arrayOfArrays = [
  [0, 5],
  [10, 15],
  [20, 0],
];

let calcSum = matrix => {
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      count += matrix[i][j];
    }
  }

  return count;
};

console.log(calcSum(arrayOfArrays));

calcSum = matrix => {
  let count = 0;

  matrix.forEach(array => array.forEach(element => (count += element)));

  return count;
};

console.log(calcSum(arrayOfArrays));

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

const array = [1, -2, 3, 4, -5, -4, 3, 2, 1];
const ranges = [
  [1, 3],
  [0, 4],
  [6, 8],
];

console.log(calcMaxSum(array, ranges));

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
    [11, 15],
  ])
);

console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ])
);

console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ])
);

const playlistOfRadioheadSongs = [
  ['Paranoid Android', 'OK Computer', 7.15, '06:27'],
  ['Fake Plastic Trees', 'The Bends', 7.56, '04:50'],
  ['Karma Police', 'OK Computer', 7.97, '04:24'],
  ['No Surprises', 'OK Computer', 8.53, '03:49'],
  ['Creep', 'Pablo Honey', 9.47, '03:58'],
  ['I Promise', 'OK Computer', 6.53, '03:59'],
];

let tracksDetails = playlistOfRadioheadSongs.map(
  ([title, album, popularity, length]) => ({
    title,
    album,
    popularity,
    length,
  })
);

console.log(tracksDetails);

tracksDetails = playlistOfRadioheadSongs.reduce(
  (acc, [title, album, popularity, length], index) => {
    acc[index] = { title, album, popularity, length };

    return acc;
  },
  []
);

console.log(tracksDetails);

const findSongsOfTheAlbum = (tracks, album) => {
  const songTitles = [];

  for (let i = 0; i < tracks.length; i++) {
    tracks[i][1] === album && songTitles.push(tracks[i][0]);
  }

  return songTitles;
};

console.log(findSongsOfTheAlbum(playlistOfRadioheadSongs, 'OK Computer'));
console.log(findSongsOfTheAlbum(playlistOfRadioheadSongs, 'Pablo Honey'));
console.log(findSongsOfTheAlbum(playlistOfRadioheadSongs, 'The Bends'));

const sortSongsByTitle = tracks => {
  const sortedSongs = [...tracks];

  for (let i = 0; i < sortedSongs.length; i++) {
    sortedSongs.sort((prev, next) => (prev[0] > next[0] ? 1 : -1));
  }

  return sortedSongs;
};

console.log(sortSongsByTitle(playlistOfRadioheadSongs));

const sortSongsByPopularity = tracks => {
  const sortedSongs = [...tracks];

  for (let i = 0; i < sortedSongs.length; i++) {
    sortedSongs.sort((prev, next) => next[2] - prev[2]);
  }

  return sortedSongs;
};

console.log(sortSongsByPopularity(playlistOfRadioheadSongs));

const findTheMostPopularSong = tracks => {
  let song = tracks[0];

  for (let i = 0; i < tracks.length; i++) {
    tracks[i][2] > song[2] && (song = tracks[i]);
  }

  return song[0];
};

console.log(findTheMostPopularSong(playlistOfRadioheadSongs));

const calcAverageSongPopularity = tracks => {
  let average =
    tracks.reduce((total, track) => (total += track[2]), 0) / tracks.length;

  return average.toFixed(2);
};

console.log(calcAverageSongPopularity(playlistOfRadioheadSongs));

const calcTotalDuration = tracks => {
  const timeCodes = tracks.map(track => track[3]);

  const arraysOfMinsAndSecs = timeCodes.map(timeCode =>
    timeCode.split(':').map(parseFloat)
  );

  const durationInSeconds = arraysOfMinsAndSecs.reduce(
    (acc, [mins, secs]) => acc + mins * 60 + secs,
    0
  );

  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;

  return `Total duration of the playlist is ${minutes}:${seconds}.`;
};

console.log(calcTotalDuration(playlistOfRadioheadSongs));
