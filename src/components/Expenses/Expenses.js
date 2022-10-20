import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const expenses = props.expenses.map((expense, i) => <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />);

    const [selectedFilterValue, setSelectedFilterValue] = useState('2020');

    const filterChangeHandler = (filterValue) => {
        setSelectedFilterValue(filterValue);
    }

    console.log('In Expenses.js');
    console.log(selectedFilterValue);

    return (
      <Card className="expenses">
        <div>
          <ExpensesFilter selected={selectedFilterValue} onFilterChange={filterChangeHandler} />
        </div>
        {expenses}
      </Card>
    );
}

export default Expenses;