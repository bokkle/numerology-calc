// 28 DAYS //

const calculateNumerology = (date) => {
  // Remove the slashes from the date string and convert it to a number
  const numericDate = Number(date.replace(/\//g, ""));

  // Calculate the sum of the digits in the numericDate
  let sum = 0;
  String(numericDate)
    .split("")
    .forEach((digit) => {
      sum += Number(digit);
    });

  // Reduce the sum to a single digit, unless it is 11, 22, 33, or 28
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33 && sum !== 28) {
    sum = String(sum)
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);
  }

  return sum;
};

function findDaysAddingUpTo28(startYear, endYear) {
  const daysAddingUpTo28 = [];

  // Iterate through each day of the specified years
  for (let year = startYear; year <= endYear; year++) {
    for (let month = 1; month <= 12; month++) {
      const daysInMonth = new Date(year, month, 0).getDate();

      for (let day = 1; day <= daysInMonth; day++) {
        const date = `${month}/${day}/${year}`;
        const numerologyValue = calculateNumerology(date);

        if (numerologyValue === 28) {
          daysAddingUpTo28.push(date);
        }
      }
    }
  }

  return daysAddingUpTo28;
}

const startYear = 2023;
const endYear = 2024;
const daysAddingUpTo28 = findDaysAddingUpTo28(startYear, endYear);

console.log("Days adding up to 28:");
console.log(daysAddingUpTo28);

// EIGHT DAYS //

function calculateNumerologyForEight(date) {
  const numericDate = Number(date.replace(/\//g, ""));
  let sum = 0;
  String(numericDate)
    .split("")
    .forEach((digit) => {
      sum += Number(digit);
    });

  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33 && sum !== 8) {
    sum = String(sum)
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);
  }

  return sum;
}

function findDaysAddingUpToEight(startYear, endYear) {
  const daysAddingUpToEight = [];

  for (let year = startYear; year <= endYear; year++) {
    for (let month = 1; month <= 12; month++) {
      const daysInMonth = new Date(year, month, 0).getDate();

      for (let day = 1; day <= daysInMonth; day++) {
        const date = `${month}/${day}/${year}`;
        const numerologyValue = calculateNumerologyForEight(date);

        if (numerologyValue === 8) {
          daysAddingUpToEight.push(date);
        }
      }
    }
  }

  return daysAddingUpToEight;
}

const startYearEight = 2023;
const endYearEight = 2024;
const daysAddingUpToEight = findDaysAddingUpToEight(
  startYearEight,
  endYearEight
);

console.log("Days adding up to 8:");
console.log(daysAddingUpToEight);
