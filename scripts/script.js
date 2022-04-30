const numPeo = document.getElementById('numPeo');
const bill = document.getElementById('bill');
const o1 = document.getElementById('o1');
const o2 = document.getElementById('o2');
const t5 = document.getElementById('t5');
const t10 = document.getElementById('t10');
const t15 = document.getElementById('t15');
const t25 = document.getElementById('t25');
const t50 = document.getElementById('t50');
const emailHelp = document.getElementById('emailHelp');

console.log(numPeo.innerText);
numPeo.addEventListener('keyup', () => {

    if (numPeo.value === "0") {
        emailHelp.classList.add('show');
        emailHelp.classList.remove('hide');

    }
    else if (numPeo.value !== "0") {
        emailHelp.classList.add('hide');
        emailHelp.classList.remove('show');

    }
});


t5.addEventListener('click', () => {
    let temp1 = bill.value / numPeo.value * 0.05;
    o1.value = '$' + temp1;
    let temp2 = parseInt(bill.value / numPeo.value) + parseInt(temp1);
    o2.value = '$' + temp2;
});

t10.addEventListener('click', () => {
    let temp1 = bill.value / numPeo.value * 0.1;
    o1.value = '$' + temp1;
    let temp2 = parseInt(bill.value / numPeo.value) + parseInt(temp1);
    o2.value = '$' + temp2;
});

t15.addEventListener('click', () => {
    let temp1 = bill.value / numPeo.value * 0.15;
    o1.value = '$' + temp1;
    let temp2 = parseInt(bill.value / numPeo.value) + parseInt(temp1);
    o2.value = '$' + temp2;
});

t25.addEventListener('click', () => {
    let temp1 = bill.value / numPeo.value * 0.25;
    o1.value = '$' + temp1;
    let temp2 = parseInt(bill.value / numPeo.value) + parseInt(temp1);
    o2.value = '$' + temp2;
});

t50.addEventListener('click', () => {
    let temp1 = bill.value / numPeo.value * 0.50;
    o1.value = '$' + temp1;
    let temp2 = parseInt(bill.value / numPeo.value) + parseInt(temp1);
    o2.value = '$' + temp2;
});