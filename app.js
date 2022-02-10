'use strict';

const date = document.querySelector('.date-input');
const amount = document.querySelector('.amount-input');
const payee = document.querySelector('.payee-input');
const paymentType = document.querySelector('.payment-type');
const btnAddExpense = document.getElementById('add-expense');
const expenseRows = document.querySelector('.expenses');
const description = document.querySelector('.description-input');

let expenseEntries = [];
displayExpenses(expenseEntries);

btnAddExpense.addEventListener('click', addExpenses);
expenseRows.addEventListener('click', deleteExpense);

function addExpenses(e) {
  e.preventDefault();

  const expenseData = {
    date: date.value,
    amount: amount.value,
    payee: payee.value,
    paymentType: paymentType.value,
    entryId: expenseEntries.length + 1,
    description: description.value,
  };

  expenseEntries.push(expenseData);
  date.value = amount.value = payee.value = paymentType.value = '';
  displayExpenses(expenseEntries);
}

function displayExpenses(expenseEntries) {
  expenseRows.textContent = '';
  for (const entry of expenseEntries) {
    const addExpenseRow = document.createElement('tr');
    const dateEl = document.createElement('td');
    const amountEl = document.createElement('td');
    const payeeEl = document.createElement('td');
    const paymentTypeEl = document.createElement('td');
    const deleteBtnContianer = document.createElement('td');
    const descriptionEl = document.createElement('td');
    const btnDelete = document.createElement('button');
    expenseRows.appendChild(addExpenseRow);
    addExpenseRow.appendChild(dateEl);
    addExpenseRow.appendChild(amountEl);
    addExpenseRow.appendChild(payeeEl);
    addExpenseRow.appendChild(descriptionEl);
    addExpenseRow.appendChild(paymentTypeEl);
    addExpenseRow.appendChild(deleteBtnContianer);
    deleteBtnContianer.appendChild(btnDelete);

    dateEl.textContent = `${entry.date}`;
    amountEl.textContent = `$${entry.amount}`;
    payeeEl.textContent = `${entry.payee}`;
    descriptionEl.textContent = `${entry.description}`;
    paymentTypeEl.textContent = `${entry.paymentType}`;

    btnDelete.setAttribute('entry-id', `${entry.entryId}`);

    btnDelete.setAttribute('class', 'delete');
    btnDelete.textContent = 'X';
  }
}

function deleteExpense(e) {
  e.preventDefault();

  const targetForDelete = Number(e.target.getAttribute('entry-id'));

  let newArr = [];

  for (const [i, entry] of expenseEntries.entries()) {
    if (expenseEntries !== null && targetForDelete !== entry.entryId) {
      newArr.push(expenseEntries[i]);
    }

    // e.target.parentElement.parentElement.remove();
  }
  expenseEntries = newArr;
  displayExpenses(expenseEntries);
}
