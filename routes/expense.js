const express = require('express');

const router = express.Router();
const ExpenseController =  require('../controllers/Expense')

router.post('/expense/add-expense' ,ExpenseController.createExpense)

router.get('/expense/get-expense' , ExpenseController.getExpense)

router.delete('/expense/delete-expense/:id' ,ExpenseController.deleteExpense)

module.exports = router