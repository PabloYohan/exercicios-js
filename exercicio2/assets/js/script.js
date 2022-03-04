setData();

function getDayName(diaSemana) {
    switch (diaSemana) {
        case 0:
            return 'Domingo'
        case 1:
            return 'Segunda-feira'
        case 2:
            return 'Terça-feira'
        case 3:
            return 'Quarta-feira'
        case 4:
            return 'Quinta-feira'
        case 5:
            return 'Sexta-feira'
        case 6:
            return 'Sabado'
        default:
            return ''
    }
}
function getMonthName(mes) {
    switch (mes) {
        case 0:
            return 'Janeiro'
        case 1:
            return 'Fevereiro'
        case 2:
            return 'Março'
        case 3:
            return 'Abril'
        case 4:
            return 'Maio'
        case 5:
            return 'Junho'
        case 6:
            return 'Julho'
        case 7:
            return 'Agosto'
        case 8:
            return 'Setembro'
        case 9:
            return 'Outubro'
        case 10:
            return 'Novembro'
        case 11:
            return 'Dezembro'
        default:
            return ''
    }
}

function setData() {
    const section = document.querySelector('#data');
    let data = new Date();

    const diaSemana = data.getDay();
    const diaSemanaNome = getDayName(diaSemana);
    const diaMes = data.getDate();
    const ano = data.getFullYear();
    const mes = data.getMonth();
    const mesNome = getMonthName(mes);
    const hora = data.getHours();
    const min = data.getMinutes();
    let msgDia = `${diaSemanaNome}, ${diaMes} de ${mesNome} de ${ano}</br>`;
    let msgHora = `${hora}:${min}`;


    section.innerHTML = msgDia;
    section.innerHTML += msgHora;
}

// const section = document.querySelector('#data');
// const data = new Date();

// section.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });