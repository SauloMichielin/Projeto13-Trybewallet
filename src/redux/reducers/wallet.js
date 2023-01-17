// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES_SUCCESS, ADD_DESPESA, ADD_TAXA, ADD_SOMA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_DESPESA:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case ADD_TAXA:
    return {
      ...state,
      exchangeRates: action.payload,
    };
  case ADD_SOMA:
    return {
      ...state,
      soma: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
