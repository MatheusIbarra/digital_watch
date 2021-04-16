
let hourHand = document.querySelector('.hora');
let minuteHand = document.querySelector('.minuto');
let secondHand = document.querySelector('.segundo');

// function 
function relogio() {
  const currentDate = new Date();

  const segundos = currentDate.getSeconds();
  const minutos = currentDate.getMinutes();
  const horas = currentDate.getHours();

  hourHand.innerHTML = horas;
  minuteHand.innerHTML = minutos;
  secondHand.innerHTML = segundos;
  
}

relogio();

setInterval(relogio, 1000);