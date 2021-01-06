import { BUY_CAKE, BUY_ICECREAM } from "./reduxType";

const initialState = {
  numberOfCakes: 10,
  numberOfIcecream: 9,
};

export const reduxReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - 1,
      };
    default:
      return state;
  }
};
