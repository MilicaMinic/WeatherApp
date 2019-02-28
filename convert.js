function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputKelvin").innerHTML=valNum+273.15;
}

function speedConverter(valNum) {
  document.getElementById("outputKPH").innerHTML=valNum*3.6;
}
