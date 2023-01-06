// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

import { combineReducers } from 'redux';
import usuarioReducer from './user';
import despesasReducer from './wallet';

const rootReducer = combineReducers({
  user: usuarioReducer,
  wallet: despesasReducer,
});

export default rootReducer;
