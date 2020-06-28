import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Deposite = () => {
    const balance = useSelector(state => state.balanceReducer.balance);
    const dispatch = useDispatch();

    function handelDeposite() {
        dispatch({ type: "DEPOSIT", payload: 20 })
    }
    return (
        <div>
            <h3>Balance:{balance}</h3>
            <button onClick={handelDeposite}>Deposite</button>
        </div>
    );
}

export default Deposite;