import React, { useReducer, createContext } from "react";
import ContextReducer from "./ContextReducer";

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {

  const [transactions, dispatch] = useReducer(ContextReducer, initialState);

  //Actions creators
  const deleteTransaction = (id) =>  dispatch({ type: 'DELETE_TRANSACTION', payload: id });


  const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

  const balance = transactions.reduce((acc, crrVal) =>  crrVal.type === 'Expense' ? acc -= crrVal.amount: acc+=crrVal.amount, 0);

  return (
    <ExpenseTrackerContext.Provider value={{
      deleteTransaction,
      addTransaction,
      transactions,
      balance
    }}>
      { children }
    </ExpenseTrackerContext.Provider>  
  );
};
