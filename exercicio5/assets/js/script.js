function relogio() {
  const relogio = document.querySelector('.relogio');
  let seg = 0;
  let timer;

  function createHourFromSeconds(seg) {
    const data = new Date(seg * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  function startClock() {
    timer = setInterval(function () {
      seg++;
      relogio.innerHTML = createHourFromSeconds(seg);
    }, 1000);
  }

  document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
      relogio.style.color = 'black'
      clearInterval(timer);
      startClock();
    }
    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.style.color = 'red'
    }
    if (el.classList.contains('zerar')) {
      clearInterval(timer);
      seg = 0;
      relogio.innerHTML = '00:00:00';
      relogio.style.color = 'black';
    }
  })
}

relogio();
