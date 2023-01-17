const taxasApi = async () => {
  const api = await 'https://economia.awesomeapi.com.br/json/all';
  const taxas = await api.json();
  return Object.keys(taxas).filter((e) => e !== 'USDT');
};

export default taxasApi;
