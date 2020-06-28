import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const balance = useSelector(state => state.balanceReducer.balance);
    return <h1>Balance: {balance}</h1>
}

export default Home;