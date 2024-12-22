// ------ ---- -------- --------- ---------  JS CODE START  ------- ----- ---- ---- ------- -----//

// Select People //

const peoSum = document.querySelector('#peoSum');

// 1 kore barbe  //

const plusSum = document.querySelector('#plusSum');
let count = 1;
plusSum.addEventListener('click', () => {
  count++;
  peoSum.innerHTML = count;

});

// 1 kore kombbe //

const minSum = document.querySelector('#minSum');
minSum.addEventListener('click', () => {
  if (count > 1){
    count--;
  }
  peoSum.innerHTML = count;
});

// Hisab kora //

const clctr = document.querySelector('#clctr');
clctr.addEventListener('click', () => {

  // Summary Dekhar Function //

  document.querySelector('.total_per_person').style.display = 'block';

  // Bill Hisab //

  const totalBill = Number(document.querySelector('#totalBill').value);

  const tipMain = Number(document.querySelector('#tipMain').value);

  let total = totalBill * (tipMain/100);
  let finalPeople = peoSum.innerHTML;

  // Bill ar Summary //

  document.querySelector('#finalBill').innerHTML = totalBill;
  document.querySelector('#tipAmnt').innerHTML = total;
  const taxAmnt = document.querySelector('#taxAmnt').innerHTML = (totalBill + 5) /100;

  // Shes Hisab //

  document.querySelector('#tptalPerson').innerHTML = 
  ((totalBill + total + taxAmnt) / finalPeople).toFixed(2);
  

});