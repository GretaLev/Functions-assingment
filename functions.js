function humanToDogYears(humanYears) {
  let dogYears = humanYears * 7;
  let output = `${humanYears} žmogaus metai yra ${dogYears} šuns metai`;
  return output;
}

console.log(humanToDogYears(32));
console.log(humanToDogYears(20));

function readBooks(readBooksInYear) {
  let wantToRead = 365 / readBooksInYear;
  let Rounded = Math.floor(wantToRead);
  let output = `norint perskaityti ${readBooksInYear} knygų per metus, vienai knygai perskaityti turėsi ${Rounded} dienas `;
  return output;
}

console.log(readBooks(10));
console.log(readBooks(20));
console.log(readBooks(15));

function converterToWeeks(dayNumber) {
  let weeks = dayNumber / 7;
  let rounded = Math.round(weeks);
  let output = `${dayNumber} dienos yra ${rounded} savaitės`;
  return output;
}

console.log(converterToWeeks(35));
console.log(converterToWeeks(20));
console.log(converterToWeeks(52));

function converterToYears(dayNumber) {
  let years = dayNumber / 365;
  let rounded = Math.floor(years);
  let output = `${dayNumber} dienos yra ${rounded} metai`;
  return output;
}

console.log(converterToYears(503));
console.log(converterToYears(730));
console.log(converterToYears(1200));

function yearsToHours(yearsNumber) {
  let hours = yearsNumber * 365 * 24;
  let output = `${yearsNumber} turi ${hours} valandas`;
  return output;
}

console.log(yearsToHours(5));
console.log(yearsToHours(10));
console.log(yearsToHours(15));

function monthsToHours(monthsNumber) {
  let hours = monthsNumber * 30 * 24;
  let output = `${monthsNumber} turi ${hours} valandas`;
  return output;
}

console.log(monthsToHours(1));
console.log(monthsToHours(2));
console.log(monthsToHours(3));

function monthsToMinutes(monthsMinutes) {
  let minutes = monthsMinutes * 30 * 24 * 60;
  let output = `${monthsMinutes} turi ${minutes} minutes`;
  return output;
}

console.log(monthsToMinutes(2));
console.log(monthsToMinutes(5));
console.log(monthsToMinutes(8));
