import React from 'react';
import './App.css';
import { Header } from './component/Header';
import { Balance } from './component/Balance';
import { AccountSummary } from './component/AccountSummary';
import { AddTransaction } from './component/AddTransaction';
import { TransactionHistory } from './component/TransactionHistory';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (

    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>


  );
}

export default App;
