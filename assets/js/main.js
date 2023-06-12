const input = document.getElementsByTagName('input'); //day, month, year
const form = document.querySelector('.age-calculator__form');

//Intl.DateTimeFormat()

const newDate = new Date().toLocaleDateString();
const dateCalcuated =
    new Date() -
    new Date('1991, 11, 03');

console.log(newDate);
console.log(dateCalcuated);

const dias = dateCalcuated / (1000 * 60 * 60 * 24)
console.log(dias + ' dias');

const anos = dias / 365 + ' anos'
console.log(anos);

const meses = (parseFloat(anos) - parseInt(anos))
console.log(meses);


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const year = input.year.value;
    const month = input.month.value;
    const day = input.day.value;

    console.log(day, month, year);

    let yearsOld = newDate.getFullYear() - year;
    let monthsOld = 12 - month + newDate.getMonth() + 1;
    let daysOld = newDate.getDate() - day;

    if (daysOld < 0) {
        daysOld + 30;
        monthsOld - 1;
    }
});
