

const input = document.getElementsByTagName('input'); //day, month, year
const form = document.querySelector('.age-calculator__form');

//Intl.DateTimeFormat()

const dia = 13;
const mes = 5;
const ano = 1994;

const now = new Date();

let yearsOld = now.getFullYear() - ano;
let monthsOld = 12 - mes + now.getMonth() + 1;
let daysOld = now.getDate() - dia;

if (daysOld < 0) {
    monthsOld -= 1;
    daysOld += 30;
}

if (monthsOld < 12) {
    yearsOld -= 1;
} else {
    monthsOld = 0;
}

if (mes % 2 === 1 || mes === 7 || mes === 8 || mes === 9 || mes === 12) {
    daysOld += 1;
}

console.log(`anos: ${yearsOld}, meses: ${monthsOld}, dias: ${daysOld}`);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // const year = input.year.value;
    // const month = input.month.value;
    // const day = input.day.value;

    // console.log(day, month, year);

    // let yearsOld = now.getFullYear() - year;
    // let monthsOld = 12 - month + now.getMonth() + 1;
    // let daysOld = now.getDate() - day;

    // if (daysOld < 0) {
    //     daysOld + 30;
    //     monthsOld - 1;
    // }
});
