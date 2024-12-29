# Expense-Tracker
This Income and Expense Tracker allows users to track both their income and expenses, helping them manage their finances. Built with HTML, CSS, and JavaScript, this simple app lets you log income and expense records, calculate the balance, and display the total income, total expenses, and the remaining balance.

Features

Add both income and expense records with description, amount, and category.
Track total income, total expenses, and remaining balance in real-time.
View all transactions with details such as description, amount, and category.
Delete transactions to update your balance instantly.
Responsive design optimized for both mobile and desktop devices.
How to Use the Income and Expense Tracker
1. Opening the Tracker
After downloading the project files, locate the expense.html file.
Open the expense.html file in any modern web browser (such as Chrome, Firefox, Safari, etc.) by double-clicking on it.
2. Using the Tracker Interface
The tracker consists of the following sections:

Transaction Form: Where you input the details of the transaction, including type (income or expense), description, amount, and category.
Transaction List: Displays the transactions with descriptions, amounts, and categories.
Summary Section: Shows the total income, total expenses, and remaining balance.
Delete Button: Allows you to remove individual transactions.
3. Adding Transactions
There are two types of transactions you can add: Income and Expense.

Step 1: Select whether the transaction is an Income or Expense using the radio buttons or dropdown menu.

Step 2: Enter a description of the transaction (e.g., "Salary", "Grocery Shopping").

Step 3: Enter the amount (e.g., 1000, -50 for expense).

Step 4: Select a category for the transaction (e.g., "Salary", "Food", "Entertainment").

Step 5: Click Add Transaction to save the transaction.

Note: For Income, enter a positive amount (e.g., 1000), and for Expense, enter a negative amount (e.g., -100).

After adding a transaction:

The Transaction List will update, showing the new transaction.
The Total Income, Total Expenses, and Remaining Balance will be updated in real-time.

4. Viewing Transactions
   
Once you add a transaction, it will appear in the Transaction List, displaying:
Description: The name or type of the transaction (e.g., "Salary", "Groceries").
Amount: The value of the transaction (e.g., 1000, -50).
Category: The category associated with the transaction (e.g., "Food", "Entertainment").
The Summary Section will display:
Total Income: The total amount of income recorded.
Total Expenses: The total amount of expenses recorded.
Remaining Balance: The difference between total income and total expenses.

7. Deleting a Transaction
   
Next to each transaction in the Transaction List, there is a Delete button.
To remove a transaction, simply click the Delete button next to the corresponding transaction.
The deleted transaction will be removed from the list, and the totals (total income, total expenses, and remaining balance) will update automatically.

9. Examples
    
Example 1: Adding Income:
Type: Income
Description: Salary
Amount: 1000
Category: Salary
Click Add Transaction. Your total income will update to 1000, and the remaining balance will also reflect that.
Example 2: Adding Expense:
Type: Expense
Description: Groceries
Amount: -50
Category: Food
Click Add Transaction. Your total expenses will update to 50, and the remaining balance will decrease.
Example 3: Deleting a transaction:
Click the Delete button next to an expense, and that amount will be removed from both the expense list and the total.

11. Transaction List and Summary Section
    
The Transaction List will show all your income and expense records in a table format with columns for description, amount, and category.
The Summary Section will update as you add or delete transactions:
Total Income: Sum of all income transactions.
Total Expenses: Sum of all expense transactions (negative values).
Remaining Balance: The difference between total income and total expenses.

File Structure

The project consists of three main files:

expense.html: Contains the HTML structure for the Income and Expense Tracker app.
style.css: Contains the CSS styling to make the app visually appealing and responsive.
script.js: Contains the JavaScript logic for adding, deleting, and calculating the income, expenses, and balance.

Customization

If you'd like to modify or extend the Income and Expense Tracker:

Change the styling: Modify the style.css file to adjust colors, fonts, or layout.
Add more features: You can extend the functionality in the script.js file to include advanced features like saving transactions in local storage or generating monthly reports.
Improve the user interface: You can modify the HTML structure in expense.html to include additional fields, charts, or better filtering options.

Troubleshooting

Total is not updating: Ensure that you're entering the correct values and selecting either Income or Expense. The total should update automatically after each transaction.
Transactions are not being deleted: Ensure JavaScript is enabled in your browser. If you're seeing any issues, try refreshing the page.
Transactions not appearing in the list: Make sure you're clicking the Add Transaction button after entering all fields. If the issue persists, check the browser's developer console for errors.

Credits

HTML/CSS: Used for creating the structure and styling of the Income and Expense Tracker.
JavaScript: Handles the functionality for adding, deleting, and calculating transactions.

License

This project is open-source and free to use for educational purposes. You are welcome to modify and share it according to your needs.
