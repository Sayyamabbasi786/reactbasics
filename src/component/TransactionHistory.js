import React, {  useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
export const TransactionHistory = () => {
    //Provider transaction prop destructuring
    const {transactions,removeTransaction} = useContext(GlobalContext)
    
    const removeTransac=(Id)=>{
        removeTransaction(Id)
    }

    return (
        <div>
            <h4 > History</h4>
            <ul className="Trans_list">
            {
                transactions.map((item,ind)=>{
                return(
                    <li key={ind.toString()}>
                    <input type="submit" value="X" onClick={()=>removeTransac(item.Id)}/> 
                    <span>
                        {item.description}
                    </span>
                    <span>
                        {item.amount}
                    </span>
                </li>
                )
            }
                )}
                
                
            </ul>
        </div>

    );

}
