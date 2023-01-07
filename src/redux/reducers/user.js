import { ADD_LOGIN } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  senha: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case ADD_LOGIN: {
    return {
      ...state,
      ...payload,
    };
  }
  default: return state;
  }
};

export default user;
