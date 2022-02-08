'use strict';

const date = document.querySelector('.date-input');
const amount = document.querySelector('.amount-input');
const payee = document.querySelector('.payee-input');
const paymentType = document.querySelector('.payment-type');
const btnAddExpense = document.getElementById('add-expense');
const btnDelete = document.getElementById('delete');
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
  date.value = amount.value = payee.value = paymentType.value = '';
  displayExpenses(expenseEntries);
});

const displayExpenses = expenseEntries => {
  newExpenseRow.innerHTML = ' ';
  for (const entry of expenseEntries) {
    const newHTMLRow = `
    <td class='new-data'>${entry.date}</td>
    <td class='new-data'>$${entry.amount}</td>
    <td class='new-data'>${entry.payee}</td>
    <td class='new-data'>${entry.paymentType}</td>
    <td class='new-data'> <button type="submit" id="delete">X</button> </td>
    `;

    const addExpenseRow = document.createElement('tr');
    addExpenseRow.setAttribute('class', 'new-expense-row');
    addExpenseRow.innerHTML = newHTMLRow;
    newExpenseRow.appendChild(addExpenseRow);
  }
};

btnDelete.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('test delete');
});
