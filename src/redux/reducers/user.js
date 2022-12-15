import { ADD_LOGIN } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  senha: '',
};

const usuarioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_LOGIN: {
    return {
      ...state,
      ...action.payload,
    };
  }
  default: return state;
  }
};

export default usuarioReducer;
