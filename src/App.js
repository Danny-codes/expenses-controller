import {useState} from 'react'

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
 
];

const App = () =>  {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
 
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense ={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}
export default App;
