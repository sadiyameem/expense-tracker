const expenseTable = document.getElementById('expense-table');
const totalExpenseDisplay = document.getElementById('total-expense');
const categoryFilter = document.getElementById('category-filter');
const addExpenseButton = document.getElementById('add-expense');
const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
const expenseCategory = document.getElementById('expense-category');
const expensedate = document.getElementById('expense-date');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
let eidtingExpenseId = null;
let deletingExpenseId = null;
