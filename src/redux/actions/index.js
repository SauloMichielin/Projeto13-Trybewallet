// Coloque aqui suas actions
// Action Types
export const ADD_LOGIN = 'ADD_LOGIN';
export const CURRENCIES_SUCCESS = 'CURRENCIES_SUCCESS';
export const ADD_DESPESA = 'ADD_DESPESA';
export const ADD_TAXA = 'ADD_TAXA';
export const ADD_SOMA = 'ADD_SOMA';
export const DEL_LANC = 'DEL_LANC';
export const EDIT_LANC = 'EDIT_LANC';
export const EDIT_ITENS = 'EDIT_ITENS';

// ACTIONS CREATORS
export const addLogin = (loginInfo) => ({
  type: ADD_LOGIN,
  payload: { ...loginInfo },
});

export const currencyAction = (data) => ({
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

export const delLanc = (state) => ({
  type: DEL_LANC,
  payload: state,
});

export const editLanc = (state) => ({
  type: EDIT_LANC,
  payload: state,
});

export const editItens = (state) => ({
  type: EDIT_ITENS,
  payload: state,
});
