'use strict';

const date = document.querySelector('.date-input');
const amount = document.querySelector('.amount-input');
const payee = document.querySelector('.payee-input');
const paymentType = document.querySelector('.payment-type');
const btnAddExpense = document.getElementById('add-expense');
const expenseTable = document.getElementById('expense-table');

let expenseEntries = [];

btnAddExpense.addEventListener('click', function (e) {
  e.preventDefault();
  const expenseData = {
    date: date.value,
    amount: amount.value,
    payee: payee.value,
    paymentType: paymentType.value,
  };

  expenseEntries.push(expenseData);

  //Clear inputs boxes
  date.value = amount.value = payee.value = paymentType.value = '';
  displayExpenses(expenseEntries);
});

const displayExpenses = function (expenseEntries) {
  console.log('display test');
  for (let i = 0; i < expenseEntries.length; i++) {
    console.log(expenseEntries[i]);
  }
  expenseEntries.forEach(function (el, i) {
    console.log('forEach ', el[i]);
  });

  for (const [i, entry] of expenseEntries.entries()) {
  }

  ////////////// problem chunks
  // 1. print to page html elements that show the expense Entries
  // 2. need a row
  // 3. need a cell
  // 4. need to be able to delete row and entry in array

  //HTML to insert into list - redo
};

// const removeEntry = function () {
//   //update the display after adding and removing
// };
