import React, { useContext } from 'react';
import { AppContext } from '../App';

const IncTableDes = ({ income, index }) => {
    const { id, des, amount } = income;

    const [inputs, setinputs] = useContext(AppContext);


    const handleDelete = id => {
        const filtered = inputs.filter(input => input.id !== id);
        setinputs(filtered);
    }
    return (
        <tr>
            <td>{index}</td>
            <td>{des}</td>
            <td>{amount}</td>
            <td className='text-danger' style={{ cursor: 'pointer' }} onClick={() => handleDelete(id)}>Delete</td>
        </tr>
    );
};

export default IncTableDes;