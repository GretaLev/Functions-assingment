// Sukurti žemiau nurodytas funkcijas:

// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
// 8.1. Funkcija priima du argumentus:
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.

function dayConverter(days, format) {
  let minutes = days * 24 * 60;
  let hours = days * 24;
  let weeks = days / 7;
  let month = days / 30;
  let years = (days / 365).toFixed(1);
  let output = ``;

  if (format == "minutes") {
    output = `${days} days - ${minutes} minutes`;
    return output;
  } else if (format == "hours") {
    output = `${days} days - ${hours} hours`;
    return output;
  } else if (format == "weeks") {
    output = `${days} days - ${weeks} weeks`;
    return output;
  } else if (format == "month") {
    output = `${days} days - ${month} month`;
    return output;
  } else if (format == "years") {
    output = `${days} days - ${years} years`;
    return output;
  }
}
console.log(dayConverter(1, "minutes"));
console.log(dayConverter(1, "hours"));
console.log(dayConverter(14, "weeks"));
console.log(dayConverter(72, "month"));
console.log(dayConverter(520, "years"));

// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du argumentus:
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.

function division(unit, divisor) {
  let output = ``;
  if (unit % divisor === 0) {
    output = `${unit} dalinasi iš ${divisor}`;
    return output;
  } else if (unit % divisor === 1) {
    output = `${unit} nesidalinasi iš ${divisor}. Liekana yra 1.`;
    return output;
  }
}

console.log(division("10", "2"));
console.log(division("10", "3"));

// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

function countSymbols(text) {
  let output = ``;
  if (text.length % 2 === 0) {
    output = `įvestas tekstas turi porinį raidžių skaičių`;
    return output;
  } else if (text.length % 2 !== 0) {
    output = `įvestas tekstas turi neporinį raidžių skaičių`;
    return output;
  }
}

console.log(countSymbols("Sveikas"));
console.log(countSymbols("keturi"));
console.log(countSymbols("namas"));

// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio.
//   11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
//   11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".

function getSymbol(text, symbol) {
  let character = text.charAt(symbol);
  let output = `Teksto ${text} ${symbol} raidė yra '${character}'`;
  return output;
}

console.log(getSymbol("Sveikas", 3));
console.log(getSymbol("Sveikas", 4));

//   11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

function getSymbol(text, symbol) {
  let length = text.length;
  let character = text.charAt(symbol);
  let output = `Teksto ${text} ${symbol} raidė yra '${character}'`;

  if (symbol > text.length) {
    let output = `Tekstas ${text} turi ${length}, o jūs nurodėte grąžinti ${symbol}`;
    return output;
  }
}

console.log(getSymbol("Sveikas", 9));
console.log(getSymbol("Vakaras", 12));
console.log(getSymbol("Paskaitos", 13));

//   11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.
