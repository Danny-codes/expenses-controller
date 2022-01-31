import './NewExpense.css'
import { useState } from 'react'

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isAdding, setIsAdding] = useState(false)

    const startAdding = () =>{
        setIsAdding(true)
    }

    const stopAdding = () => {
        setIsAdding(false)
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return(
        <div className='new-expense'>
           {!isAdding && <button type='button' onClick={startAdding}>Add new Expense</button> }
           {isAdding && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopAdding} /> }
         
        </div>
    )
}

export default NewExpense