'use strict';

const date = document.querySelector('.date-input');
const amount = document.querySelector('.amount-input');
const payee = document.querySelector('.payee-input');
const paymentType = document.querySelector('.payment-type');
const btnAddExpense = document.getElementById('add-expense');
const btnDelete = document.getElementById('delete');
const expenseRows = document.querySelector('.expenses');

let expenseEntries = [];

btnAddExpense.addEventListener('click', addExpenses);

function addExpenses(e) {
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
}

function createDisplayElements() {
  const addExpenseRow = document.createElement('tr');
  const dateEl = document.createElement('td');
  const amountEl = document.createElement('td');
  const payeeEl = document.createElement('td');
  const paymentTypeEl = document.createElement('td');
}

function displayExpenses1() {
  for (const entry of expenseEntries) {
    console.log(entry);
  }
}
displayExpenses1();

const displayExpenses = expenseEntries => {
  expenseRows.innerHTML = ' ';
  for (const entry of expenseEntries.entries()) {
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
    expenseRows.appendChild(addExpenseRow);
    // btnDelete.addEventListener('click', function (e) {
    //   e.preventDefault();
    //   console.log('test delete');
    // });
  }
};

expenseRows.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('target', e.target);
  console.log('tracking elements ', e.target.parentElement.parentElement);
  console.log('\ncurrentTarget', e.currentTarget);
  e.target.parentElement.parentElement.remove();

  //I need to grab a parent element or find a way to delete somehting by id.
  //target gives me the button id and currenttarget() gives me the row id.
});
