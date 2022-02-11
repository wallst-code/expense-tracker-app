'use strict';
//TODO delete from local storage functionality
loadAllExpenses();

document.getElementById('add-expense').addEventListener('click', e => {
  e.preventDefault(e);
  const expenseObject = getFormData();
  createNewExpense(expenseObject);
  setNewExpenseToLocalStorage(expenseObject);
  resetForm();
});

function createNewExpense(expenseObject) {
  const newExpenseRow = document.createElement('tr');
  const dateEl = document.createElement('td');
  const amountEl = document.createElement('td');
  const payeeEl = document.createElement('td');
  const paymentTypeEl = document.createElement('td');
  const btnDeleteContainter = document.createElement('td');
  const descriptionEl = document.createElement('td');
  const btnDelete = document.createElement('button');

  dateEl.textContent = `${expenseObject.date}`;
  amountEl.textContent = `$${expenseObject.amount}`;
  payeeEl.textContent = `${expenseObject.payee}`;
  descriptionEl.textContent = `${expenseObject.description}`;
  paymentTypeEl.textContent = `${expenseObject.paymentType}`;

  newExpenseRow.appendChild(dateEl);
  newExpenseRow.appendChild(amountEl);
  newExpenseRow.appendChild(payeeEl);
  newExpenseRow.appendChild(descriptionEl);
  newExpenseRow.appendChild(paymentTypeEl);

  btnDelete.textContent = 'X';
  btnDelete.onclick = e => e.target.parentElement.parentElement.remove();

  btnDeleteContainter.appendChild(btnDelete);
  newExpenseRow.appendChild(btnDeleteContainter);

  document.querySelector('.expenses').appendChild(newExpenseRow);
}

function resetForm() {
  document.querySelector('.expense-input').reset();
}

function getFormData() {
  return {
    date: document.querySelector('.date-input').value,
    amount: document.querySelector('.amount-input').value,
    payee: document.querySelector('.payee-input').value,
    paymentType: document.querySelector('.payment-type').value,
    description: document.querySelector('.description-input').value,
  };
}

function setNewExpenseToLocalStorage(newExpense) {
  const expenseArray = getExpensesFromLocalStorage();
  expenseArray.push(newExpense);
  localStorage.setItem('expenses', JSON.stringify(expenseArray));
}

function getExpensesFromLocalStorage() {
  return JSON.parse(localStorage.getItem('expenses')) || [];
}

function loadAllExpenses() {
  const expenseArray = getExpensesFromLocalStorage();
  for (const expense of expenseArray) {
    createNewExpense(expense);
  }
}
