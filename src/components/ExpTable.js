import React from 'react';
import { Table } from 'react-bootstrap';
import ExpTableDes from './ExpTableDes';

const ExpTable = ({ expenses }) => {
    return (
        <div className='px-2'>
            <h3 className='text-danger'>Expense table</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((expense, i) => <ExpTableDes key={expense.id} expense={expense} index={i + 1} />)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ExpTable;