// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES_SUCCESS, ADD_DESPESA } from '../actions';

const INITIAL_STATE = {
  valor: '',
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
      expenses: {...expenses,
        expenses: action.payload,
      }
    };
  default:
    return state;
  }
};

export default wallet;
