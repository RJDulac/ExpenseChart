import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsediting] = useState(false);

  const editingHandler = () => {
    setIsediting(!isEditing);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          editingHandler={editingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
