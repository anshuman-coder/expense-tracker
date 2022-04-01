//reducer => is a function which takes in the old state and an action and return us the new state.


const ContextReducer = (state, action) => {
  let transactions;


  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter((t) => t.id !== action.payload);
      return transactions;    
    
    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];
      return transactions
  
    default:
      return state;
  };
};

export default ContextReducer;