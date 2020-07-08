import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
export const Balance = () => {
    let {transactions}=useContext(GlobalContext)
    const getBalance=()=>{
        let bal=0
        for(var i=0;i<transactions.length;i++){
                bal+=parseInt(transactions[i].amount)
        }
        return bal
    }
    return (
        <div>
            <p>Your Balance<br/>
            ${getBalance()}</p>
        </div>
    );

}
