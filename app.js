function calPropina(deslizador,money){
    var propina= document.getElementById('propina');
    var deslival= document.getElementById('deslival');
    var billete = document.getElementById(money).value;
    var pr = deslizador * .01;
    propina.innerHTML="$"+(billete*pr).toFixed(2);
    deslival.innerHTML=deslizador+"% ";
}
var input = document.querySelector("input[type=range]");
input.style.setProperty("--value", input.value);
input.addEventListener("input", function(evt) {
   input.style.setProperty("--value", input.value);
  },false);
  const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');//toggle agrega una clase si no tiene y la elimina si ya la tiene
	btnSwitch.classList.toggle('active');
});

