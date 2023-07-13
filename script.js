const calculateNumerology = (date, targetValue) => {
  const numericDate = Number(date.replace(/\//g, ""));
  let sum = 0;
  String(numericDate)
    .split("")
    .forEach((digit) => {
      sum += Number(digit);
    });

  while (
    sum > 9 &&
    sum !== 11 &&
    sum !== 22 &&
    sum !== 33 &&
    sum !== targetValue
  ) {
    sum = String(sum)
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);
  }

  return sum;
};

function findDaysAddingUpToDate(startYear, endYear, targetValue) {
  const daysAddingUpToDate = [];

  for (let year = startYear; year <= endYear; year++) {
    for (let month = 1; month <= 12; month++) {
      const daysInMonth = new Date(year, month, 0).getDate();

      for (let day = 1; day <= daysInMonth; day++) {
        const date = `${month}/${day}/${year}`;
        const numerologyValue = calculateNumerology(date, targetValue);

        if (numerologyValue === targetValue) {
          daysAddingUpToDate.push(date);
        }
      }
    }
  }

  return daysAddingUpToDate;
}

const startYear = 2023;
const endYear = 2024;
const daysAddingUpTo28 = findDaysAddingUpToDate(startYear, endYear, 28);
const daysAddingUpTo8 = findDaysAddingUpToDate(startYear, endYear, 8);

console.log("Days adding up to 28:");
console.log(daysAddingUpTo28);

console.log("Days adding up to 8:");
console.log(daysAddingUpTo8);
