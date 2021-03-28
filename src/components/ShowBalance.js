import React, { useContext } from 'react';
import { AppContext } from '../App';

const ShowBalance = () => {

    const [inputs, setinputs] = useContext(AppContext);
    const incomes = inputs.filter(input => input.type === 'inc');
    const expenses = inputs.filter(input => input.type === 'exp');
    const totalInc = incomes.reduce((total, curr) => total + parseFloat(curr.amount), 0);
    const totalExp = expenses.reduce((total, curr) => total + parseFloat(curr.amount), 0);
    const totalBal = totalInc - totalExp;

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column align-items-center justify-content-center px-3'>
                <h4>Income</h4>
                <h3>{totalInc}</h3>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center px-3'>
                <h4>Balance</h4>
                <h3>{totalBal}</h3>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center px-3'>
                <h4>Expense</h4>
                <h3>{totalExp}</h3>
            </div>
        </div>
    );
};

export default ShowBalance;