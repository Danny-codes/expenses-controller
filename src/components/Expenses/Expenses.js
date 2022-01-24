import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import("./Expenses.css");

function Expenses(props) {
  const [selectedDate, setSelectedDate] = useState("2020");

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
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
