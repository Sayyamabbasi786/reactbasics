import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const { transactions, addTransaction } = useContext(GlobalContext)
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [description, setDescription] = useState("");
    const handleAdd = (event) => {
        //it will prevent from refreshing page on submit form
        event.preventDefault()
        addTransaction({ Id: transactions.length + 1, description: description, amount: transactionAmount })
        setTransactionAmount(0);
        setDescription('');

    }

    return (
        <div>
            <form onSubmit={handleAdd} style={{ marginBottom: 10 }}>
                <span className="form-control">
                    <label>
                        Text
                    </label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </span>
                <span className="form-control">
                    <label>
                        Amount
                    </label>
                    <input
                        type="number"
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(e.target.value)}
                    />
                </span>
                <input type="submit" value="Add Transaction" />
            </form>
            <span>
                Note
            <ul>
                    <b>
                        <li>For Income ,Enter amount in postive</li>
                        <li>For Expense ,Enter amount in negative</li>
                    </b>
                </ul>
            </span>
        </div>
    );

}
