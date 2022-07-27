import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = ({ data, filterYear }) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //solution
  const filteredExpenses = data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

        {/* {data
          .filter((year) => year.date.getFullYear() === Number(filteredYear))
          .map(({ id, title, amount, date }) => (
            <ExpenseItem key={id} title={title} amount={amount} date={date} />
          ))} */}
      </Card>
    </div>
  );
};
export default Expenses;
