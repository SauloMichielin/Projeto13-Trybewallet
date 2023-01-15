const taxasApi = async () => {
  const api = await 'https://economia.awesomeapi.com.br/json/all';
  const taxas = await api.json();
  return Object.keys(taxas).filter((e) => e !== 'USDT');
};

// const requisicaoApi = async () => {
//   const api = 'https://economia.awesomeapi.com.br/json/all';
//   const response = await fetch(api);
//   const data = await response.json();
//   return data;
// };

export default taxasApi;
