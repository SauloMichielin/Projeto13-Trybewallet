// tirado do site: https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar?gclid=Cj0KCQiAzeSdBhC4ARIsACj36uEtzcDbmateWangCp0OmLBKhncJ220uowyj6C_PdWzAJPcnpxY9iGUaAprmEALw_wcB

const moedas = fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((data) => console.log(Object.keys(data)));

console.log(moedas);

export default moedas;
