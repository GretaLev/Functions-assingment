function dayConverter(days, format) {
  if ((format = "minutes")) {
    let minutes = days * 24 * 60;
    output = `${days} days - ${minutes} minutes`;
    return output;
  }
}

function dayConverter(days, format) {
  if ((format = "hours")) {
    let hours = days * 24;
    output = `${days} days - ${hours} hours`;
    return output;
  }
}

function dayConverter(days, format) {
  if ((format = "weeks")) {
    let weeks = Math.floor(days / 7);
    output = `${days} days - ${weeks} weeks`;
    return output;
  }
}

function dayConverter(days, format) {
  if ((format = "month")) {
    let month = Math.round(days / 30);
    output = `${days} days - ${month} month`;
    return output;
  }
}

function dayConverter(days, format) {
  if ((format = "years")) {
    let years = days / 365;
    let fixed = years.toFixed(1);
    output = `${days} days - ${fixed} years`;
    return output;
  }
}

console.log(dayConverter(1000, "minutes"));
console.log(dayConverter(50, "hours"));
console.log(dayConverter(200, "weeks"));
console.log(dayConverter(14, "month"));
console.log(dayConverter(1000, "years"));
