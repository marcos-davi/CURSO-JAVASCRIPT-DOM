  const cronometro = document.getElementById('cronometro');
  const botonInicioPausa =document.getElementById('boton-inicio-pausa');
  const botonReiniciar =document.getElementById('boton-reiniciar');
   
let [horas, minutos, segundos] = [0, 0, 0];

let intervalodeTiempo;
let estadoCronmetro;

function actualizarCronometro() {
  segundos++;

  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;

    if (minutos / 60 === 1) {
      minutos = 0;
      horas++
    }
  }

  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);

  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
};

function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;   
}

botonInicioPausa.addEventListener('click', function() {
  if(estadoCronmetro === 'pausado'){
    intervalodeTiempo = window.setInterval(actualizarCronometro, 1000);
    botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
    botonInicioPausa.classList.remove('iniciar');
    botonInicioPausa.classList.add('pausar');
    estadoCronmetro = 'andando';
  } else {
    window.clearInterval(intervalodeTiempo);
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');
    estadoCronmetro = 'pausado';
  }
});

botonReiniciar.addEventListener('click', function() {
  window.clearInterval(intervalodeTiempo);
  horas = 0;
  minutos = 0;
  segundos = 0;
  
  // Reiniciar
  cronometro.innerText = '00:00:00';
  
  // Actualizar botones
  botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
  botonInicioPausa.classList.remove('pausar');
  botonInicioPausa.classList.add('iniciar'); 

  estadoCronmetro = 'pausado'
  
  });
