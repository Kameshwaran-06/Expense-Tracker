document.addEventListener("DOMContentLoaded", function () {
    const incomeBtn = document.getElementById("add-income-btn");
    const expenseBtn = document.getElementById("add-expense-btn");
    const transactionsTable = document.querySelector("#transactions-table tbody");

    let totalIncome = 0;
    let totalExpenses = 0;

    // Add Income
    incomeBtn.addEventListener("click", function () {
        const description = document.getElementById("income-description").value;
        const amount = parseFloat(document.getElementById("income-amount").value);
        const date = document.getElementById("income-date").value;
        const category = document.getElementById("income-category").value;

        if (validateInputs(description, amount, date, category)) {
            addTransaction(description, amount, date, category, "Income");
            totalIncome += amount;
            updateSummary();
        }
    });

    // Add Expense
    expenseBtn.addEventListener("click", function () {
        const description = document.getElementById("expense-description").value;
        const amount = parseFloat(document.getElementById("expense-amount").value);
        const date = document.getElementById("expense-date").value;
        const category = document.getElementById("expense-category").value;

        if (validateInputs(description, amount, date, category)) {
            addTransaction(description, amount, date, category, "Expense");
            totalExpenses += amount;
            updateSummary();
        }
    });

    // Add Transaction to table
    function addTransaction(description, amount, date, category, type) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${date}</td>
            <td>${description}</td>
            <td>${category}</td>
            <td>${amount}</td>
            <td>${type}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;

        row.querySelector(".delete-btn").addEventListener("click", function () {
            row.remove();
            if (type === "Income") {
                totalIncome -= amount;
            } else {
                totalExpenses -= amount;
            }
            updateSummary();
        });

        transactionsTable.appendChild(row);

        // Clear input fields
        document.getElementById(type.toLowerCase() + "-description").value = "";
        document.getElementById(type.toLowerCase() + "-amount").value = "";
        document.getElementById(type.toLowerCase() + "-date").value = "";
        document.getElementById(type.toLowerCase() + "-category").value = "";
    }

    // Update Summary
    function updateSummary() {
        document.getElementById("total-income").textContent = totalIncome.toFixed(2);
        document.getElementById("total-expenses").textContent = totalExpenses.toFixed(2);
        document.getElementById("net-income").textContent = (totalIncome - totalExpenses).toFixed(2);
    }

    // Validate inputs
    function validateInputs(description, amount, date, category) {
        if (!description || !amount || !date || !category) {
            alert("Please fill all fields correctly.");
            return false;
        }
        if (amount <= 0) {
            alert("Amount must be greater than zero.");
            return false;
        }
        return true;
    }
});
