// Coloque aqui suas actions
// Action Types
export const ADD_LOGIN = 'ADD_LOGIN';
export const CURRENCIES_SUCCESS = 'CURRENCIES_SUCCESS';
export const ADD_DESPESA = 'ADD_DESPESA';
export const ADD_TAXA = 'ADD_TAXA';
export const ADD_SOMA = 'ADD_SOMA';

// ACTIONS CREATORS
export const addLogin = (loginInfo) => ({
  type: ADD_LOGIN,
  payload: { ...loginInfo },
});

export const currency = (data) => ({
  type: CURRENCIES_SUCCESS,
  payload: data,
});

export const addDespesa = (despesa) => ({
  type: ADD_DESPESA,
  payload: despesa,
});

export const addTaxa = (taxa) => ({
  type: ADD_TAXA,
  payload: taxa,
});

export const addSoma = (valor) => ({
  type: ADD_SOMA,
  payload: valor,
});
