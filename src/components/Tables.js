import React, { useContext } from 'react';
import { AppContext } from '../App';
import ExpTable from './ExpTable';
import IncTable from './IncTable';

const Tables = () => {
    const [inputs, setinputs] = useContext(AppContext);
    const incomes = inputs.filter(input => input.type === 'inc');
    const expenses = inputs.filter(input => input.type === 'exp');
    return (
        <div className='d-flex flex-wrap p-4 justify-content-center'>
            <IncTable incomes={incomes} />
            <ExpTable expenses={expenses} />
        </div>
    );
};

export default Tables;