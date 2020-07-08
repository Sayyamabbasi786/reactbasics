import React, { useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
export const AccountSummary = () => {
    let {transactions}=useContext(GlobalContext)
    const getIncome=()=>{
        let Income=0
        for(var i=0;i<transactions.length;i++){
            if(transactions[i].amount>0){
                Income+=parseInt(transactions[i].amount)
            }
        }
        return Income
    }
    const getExpense=()=>{
        let Expense=0
        for(var i=0;i<transactions.length;i++){
            if(transactions[i].amount<0){
                Expense+=parseInt(transactions[i].amount)
            }
        }
        return Expense
    }
    
    return (
        <div className="Acc-summary">
            <span style={{color:"green"}}>
                INCOME<br/>
                ${getIncome()}
            </span>
            <span style={{color:"red"}}>
                EXPENSE<br/>
                ${getExpense()}
            </span>
        </div>
    );

}
