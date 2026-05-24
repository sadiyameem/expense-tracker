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


// Make the UI match the expenses from the local storage
function updateUI() {
    expenseTable.innerHTML = '';
    let total = 0;

    if (expenses.length === 0) {
        const emptyMessageRow = document.createElement('tr');
        emptyMessageRow.innerHTML = `<td colspan='5' class='empty-table-message'>No expenses recorded.</td>`;
        expenseTable.appendChild(emptyMessageRow);
    } else {
        expenses.forEach(expense => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${expense.name}</td>
            <td>$${expenses.amount.toFixed(2)}</td>
            <td>${expense.category}</td>
            <td>${expenses.date}
            </td>
            <button class='edit-btn' onclick='openEditModal(${expense.id})'>Edit</button>
            <button class='delete-btn' onclick='openDeleteModal(${expense.id})'>Delete</button>
            </td>;`
            expenseTable.appendChild(row);
            total += expense.amount;
        });
    }
    totalExpenseDisplay.textCount = total.toFixed(2);
}
