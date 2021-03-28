import React from 'react';
import { Table } from 'react-bootstrap';
import IncTableDes from './IncTableDes';

const IncTable = ({ incomes }) => {
    return (
        <div className='px-2'>
            <h3 className='text-success'>Income table</h3>
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
                        incomes.map((income, i) => <IncTableDes key={income.id} income={income} index={i + 1} />)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default IncTable;