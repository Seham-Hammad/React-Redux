import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Withdraw = () => {
    const balance = useSelector(state => state.balanceReducer.balance)
    const dispatch = useDispatch();

    function handleWithdraw() {
        dispatch({ type: "WITHDRAW", payload: 10 })
    }
    return (
        <div>
            <h3>Balalnce:{balance}</h3>
            <button onClick={handleWithdraw}>Withdraw</button>
        </div>
    );
}

export default Withdraw;