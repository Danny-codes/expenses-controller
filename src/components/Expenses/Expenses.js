import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import("./Expenses.css");

function Expenses(props) {
  const [selectedDate, setSelectedDate] = useState("2020");
  const items = props.items

  
  const filteredExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString()  === selectedDate
  })

  const saveDateSelectedHandler = (selectedYear) => {
    setSelectedDate(selectedYear);
  };


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedDate}
          onSaveDateSelected={saveDateSelectedHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
