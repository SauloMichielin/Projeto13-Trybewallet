// Coloque aqui suas actions
export const ADD_LOGIN = 'ADD_LOGIN';

// ACTIONS CREATORS
export const addLogin = (loginInfo) => ({
  type: ADD_LOGIN,
  payload: { ...loginInfo },
});
