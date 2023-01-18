// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES_SUCCESS,
  ADD_DESPESA,
  ADD_TAXA,
  ADD_SOMA,
  DEL_LANC,
  EDIT_LANC,
  EDIT_ITENS,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
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
  case DEL_LANC:
    return {
      ...state,
      expenses: state.expenses.filter((a) => a.id !== action.payload.id),
    };
  case EDIT_LANC:
    return {
      ...state,
      editor: true,
      idToEdit: state.expenses.filter((a) => a.id === action.payload.id),
    };
  case EDIT_ITENS:
    return {
      ...state,
      editor: false,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
