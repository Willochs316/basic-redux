const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      //we will not return state plus one but state + action.payload
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
