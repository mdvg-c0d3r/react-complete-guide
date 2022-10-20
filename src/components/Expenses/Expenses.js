import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const [selectedFilterValue, setSelectedFilterValue] = useState('2020');

    const filterChangeHandler = (filterValue) => {
        setSelectedFilterValue(filterValue);
    }

    return (
      <Card className="expenses">
        <div>
          <ExpensesFilter selected={selectedFilterValue} onFilterChange={filterChangeHandler} />
        </div>
        {props.expenses.filter(expense => expense.date.getFullYear() === Number(selectedFilterValue))
        .map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))};
      </Card>
    );
}

export default Expenses;