function bissexto(ano) {
    if (ano % 4 === 0 && ano % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

function validarData(dia, mes, ano) {
    if (dia < 1 || dia > 31 || mes < 1 || mes > 12) {
        return false;
    }

    if (dia === 31 && (mes === 4 || mes === 6 || mes === 9 || mes === 11)) {
        return false;
    }

    if (mes === 2 && dia > 29 && bissexto(ano)) {
        return false;
    }

    return true;
}

function diasNoMes(mes, ano) {
    if (
        mes === 1 ||
        mes === 3 ||
        mes === 5 ||
        mes === 7 ||
        mes === 8 ||
        mes === 10 ||
        mes === 12
    ) {
        return 31;
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        return 30;
    } else if (bissexto(ano)) {
        return 29;
    } else {
        return 28;
    }
}

function calcularIdade(dia, mes, ano) {
    
    const dataAtual = new Date();
    
    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth() + 1;
    const anoAtual = dataAtual.getFullYear();
}