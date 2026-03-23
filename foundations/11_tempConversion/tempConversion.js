const convertToCelsius = function(temperature) {
  if(temperature > 0)
  {
    let step1 = temperature - 32;
    let step2 = step1 * 1.8
    let step3 = step1 += step2;
    return Math.round(step3 * 10)/10;
  }
  else if(temperature < 0)
  {
    let step1 = temperature - 32;
    let step2 = step1 * 5;
    let step3 = step2 / 9;
    let step4 = Math.round(step3 * 10)/10;
    return parseFloat(step4.toFixed(1));
  }
  
};

const convertToFahrenheit = function(temperature) {
  let converter = temperature * 1.8 + 32;
  return Math.round(converter * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
