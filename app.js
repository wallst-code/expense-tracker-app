'use strict';

const date = document.querySelector('.date-input');
const amount = document.querySelector('.amount-input');
const payee = document.querySelector('.payee-input');
const paymentType = document.querySelector('.payment-type');
const btnAddExpense = document.getElementById('add-expense');
// const expenseTable = document.getElementById('expense-table');
const newExpenseRow = document.querySelector('.expenses');

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

const displayExpenses = expenseEntries => {
  for (const entry of expenseEntries) {
    const newHTMLRow = `
    <td class='new-data'>${entry.date}</td>
    <td class='new-data'>$${entry.amount}</td>
    <td class='new-data'>${entry.payee}</td>
    <td class='new-data'>${entry.paymentType}</td>
    `;

    const addExpenseRow = document.createElement('tr');
    addExpenseRow.setAttribute('class', 'new-expense-row');
    addExpenseRow.innerHTML = newHTMLRow;
    newExpenseRow.appendChild(addExpenseRow);
  }

  ////////////// problem chunks

  // 4. need to be able to delete row and entry in array
};

const removeEntry = function () {
  //update the display after adding and removing
};
