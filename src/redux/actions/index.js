// Coloque aqui suas actions
// Action Types
export const ADD_LOGIN = 'ADD_LOGIN';
export const CURRENCIES = 'CURRENCIES';

// ACTIONS CREATORS
export const addLogin = (loginInfo) => ({
  type: ADD_LOGIN,
  payload: { ...loginInfo },
});

export const currency = (currencies) => ({
  type: CURRENCIES,
  currencies,
});
