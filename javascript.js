const calculatori = document.querySelector(".display");
function dabewvda(number) {
  calculatori.innerHTML += number;
}

function result() {
  const resultNumber = eval(calculatori.innerHTML);
  calculatori.innerHTML = resultNumber;
}

function clearResult() {
  calculatori.innerHTML = "";
}

function deletteNamber() {
  calculatori.innerHTML = calculatori.innerHTML.slice(0, -1);
}

function resiltN2() {
  calculatori.innerHTML = calculatori.innerHTML * calculatori.innerHTML;
}
