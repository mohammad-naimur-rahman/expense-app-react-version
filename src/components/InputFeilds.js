import React, { useContext, useState } from 'react';
import { AppContext } from '../App';

const InputFeilds = () => {

    const [des, setdes] = useState('');
    const [amount, setamount] = useState(0);
    const [type, settype] = useState('inc');
    const [errorMessage, seterrorMessage] = useState('');
    const [inputs, setinputs] = useContext(AppContext);

    const handleInput = () => {
        if (des && amount) {
            setinputs([...inputs, { id: new Date().getTime(), des, amount, type }]);
            setdes('');
            setamount(0);
            seterrorMessage('');
        } else {
            seterrorMessage('Input fields can not be empty');
        }

    }

    return (
        <>
            <div className='p-3 d-flex justify-content-center align-items-center flex-wrap input-fields'>
                <input type="text" name="des" placeholder="Description" value={des} onChange={e => {
                    setdes(e.target.value);
                }} className='m-1' />
                <input type="number" name="amount" placeholder="Amount" value={amount} onChange={e => {
                    setamount(e.target.value);
                }} className='m-1' />
                <select name="type" value={type} onChange={e => {
                    settype(e.target.value);
                }} className='m-1'>
                    <option value="inc">+</option>
                    <option value="exp">-</option>
                </select>
                <button className="btn btn-success px-5 m-1" onClick={handleInput}>Add</button>
            </div>
            <p className='text-center text-danger py-2'>
                {errorMessage}
            </p>
        </>
    );
};

export default InputFeilds;