import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

const Expenses = (props) => {
    const expenses = props.expenses.map(expense => <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />);

    return (
        <Card className="expenses">
            {expenses}
        </Card>
    );
}

export default Expenses;