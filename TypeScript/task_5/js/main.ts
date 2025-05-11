// Task 5: Brand convention & Nominal typing

// Define MajorCredits interface with brand property for nominal typing
interface MajorCredits {
  credits: number;
  // Brand property to uniquely identify MajorCredits
  _majorBrand: 'MajorCredits';
}

// Define MinorCredits interface with brand property for nominal typing
interface MinorCredits {
  credits: number;
  // Brand property to uniquely identify MinorCredits
  _minorBrand: 'MinorCredits';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: 'MajorCredits',
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: 'MinorCredits',
  };
}

// Example usage
const mathMajor: MajorCredits = {
  credits: 3,
  _majorBrand: 'MajorCredits',
};

const physicsMajor: MajorCredits = {
  credits: 4,
  _majorBrand: 'MajorCredits',
};

const artMinor: MinorCredits = {
  credits: 2,
  _minorBrand: 'MinorCredits',
};

const musicMinor: MinorCredits = {
  credits: 1,
  _minorBrand: 'MinorCredits',
};

console.log(sumMajorCredits(mathMajor, physicsMajor)); // { credits: 7, _majorBrand: 'MajorCredits' }
console.log(sumMinorCredits(artMinor, musicMinor)); // { credits: 3, _minorBrand: 'MinorCredits' }
