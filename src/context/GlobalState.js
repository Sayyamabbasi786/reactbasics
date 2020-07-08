import React,{createContext,useReducer} from 'react';

import AppReducer from './AppReducer';

const initialState=[]


//Create global state
export const GlobalContext = createContext(initialState)

//Create provider
export const GlobalProvider = ({children})=>{

    const [state,dispatch]=useReducer(AppReducer,initialState)
    function addTransaction (transObj){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:{
                Id:transObj.Id,
                description:transObj.description,
                amount:transObj.amount
            }
        })

    }

    function removeTransaction (Id){
        dispatch({
            type:"REMOVE_TRANSACTION",
            payload:Id
        })

    }


    return(
        <GlobalContext.Provider value={
            {
                transactions:state,
                addTransaction,
                removeTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}